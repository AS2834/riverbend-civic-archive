const http = require("http");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const ROOT = __dirname;
const PUBLIC = path.join(ROOT, "public");
const PORT = Number(process.env.PORT || 4173);
const HOST = process.env.HOST || "127.0.0.1";

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml; charset=utf-8"
};

const EXPECTED_KEY_PARTS = ["renovation", "weather-vane", "north", "july"];
const SITE_SALT = "Riverbend Civic Archive / accession cabinet 7";

function send(res, status, body, headers = {}) {
  const buffer = Buffer.from(body);
  res.writeHead(status, {
    "Content-Length": buffer.length,
    "Cache-Control": "no-store",
    ...headers
  });
  res.end(buffer);
}

function sendJson(res, status, payload, headers = {}) {
  send(res, status, JSON.stringify(payload, null, 2), {
    "Content-Type": MIME[".json"],
    ...headers
  });
}

function notFound(res) {
  send(
    res,
    404,
    renderShell("Missing Page", [
      "<h1>404</h1>",
      "<p>The archive has no public item at this address.</p>",
      '<p><a href="/">Return to the front desk</a></p>'
    ].join("\n")),
    { "Content-Type": MIME[".html"] }
  );
}

function normalizeKey(input) {
  return String(input || "")
    .trim()
    .toLowerCase()
    .replace(/[_\s|]+/g, "-")
    .replace(/-+/g, "-");
}

function canonicalizeFinalKey(input) {
  const normalized = normalizeKey(input);
  if (normalized.endsWith("-jul")) {
    return `${normalized.slice(0, -4)}-july`;
  }
  return normalized;
}

function computeFlag(key) {
  const digest = crypto
    .createHash("sha256")
    .update(`${SITE_SALT}:${key}`)
    .digest("hex")
    .slice(0, 20)
    .toUpperCase();

  const prefix = ["FL", "AG"].join("");
  return `${prefix}{RIVERBEND_${digest}}`;
}

function renderShell(title, body) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title} - Riverbend Civic Archive</title>
  <link rel="icon" type="image/svg+xml" href="/assets/favicon.svg">
  <link rel="stylesheet" href="/assets/site.css">
</head>
<body>
  <div class="page-wrap">
    <header class="masthead">
      <a class="brand" href="/">
        <img src="/assets/emblem.svg" alt="" width="72" height="72">
        <span>
          <strong>Riverbend Civic Archive</strong>
          <small>volunteer-maintained since 1996</small>
        </span>
      </a>
      <nav aria-label="Main navigation">
        <a href="/about.html">About</a>
        <a href="/programs.html">Programs</a>
        <a href="/minutes.html">Minutes</a>
        <a href="/contact.html">Contact</a>
      </nav>
    </header>
    <main class="content">
${body}
    </main>
    <footer class="site-footer">
      <span>Last hand-edited: 2003-02-11</span>
      <span>Crawlers: please respect posted policy.</span>
    </footer>
  </div>
  <script src="/assets/i18n.js"></script>
</body>
</html>`;
}

function renderRegisterPage(url) {
  const caseId = url.searchParams.get("case");
  const drawer = normalizeKey(url.searchParams.get("drawer"));
  const baseHeaders = {
    "Content-Type": MIME[".html"],
    "X-Riverbend-Drawer": "north",
    "Last-Modified": "Fri, 24 Jul 1998 19:12:00 GMT"
  };

  if (caseId !== "1912") {
    return {
      status: 404,
      body: renderShell("Register", [
        "<h1>Register</h1>",
        "<p>No public register exists for that case number.</p>"
      ].join("\n")),
      headers: { "Content-Type": MIME[".html"] }
    };
  }

  if (drawer && drawer !== "north") {
    return {
      status: 200,
      body: renderShell("Register 1912", [
        '<article class="ledger">',
        "<h1>Register 1912</h1>",
        `<p>The ${drawer} drawer opens, but it holds unrelated public objects.</p>`,
        '<p class="typed">Cabinet rule: roofline objects follow the vane sketch. On the loose board, up is north.</p>',
        '<p><a href="/records/register?case=1912">Return to the drawer strip</a></p>',
        "</article>"
      ].join("\n")),
      headers: baseHeaders
    };
  }

  if (drawer !== "north") {
    return {
      status: 200,
      body: renderShell("Register 1912", [
        '<article class="ledger">',
        "<h1>Register 1912</h1>",
        "<p>The accession card is real, but this copy is missing its drawer label.</p>",
        '<p class="typed">Filed under: <span class="blank">[label absent from page]</span></p>',
        '<p>The old catalog envelope carried filing notes that never appeared on the paper copy.</p>',
        '<p class="typed">Cabinet rule: roofline objects follow the vane sketch. On the loose board, up is north.</p>',
        "<p>Try the drawer strip:</p>",
        '<ul class="shelf-list">',
        '<li><a href="/records/register?case=1912&amp;drawer=north">north</a></li>',
        '<li><a href="/records/register?case=1912&amp;drawer=east">east</a></li>',
        '<li><a href="/records/register?case=1912&amp;drawer=south">south</a></li>',
        '<li><a href="/records/register?case=1912&amp;drawer=west">west</a></li>',
        "</ul>",
        "</article>"
      ].join("\n")),
      headers: baseHeaders
    };
  }

  return {
    status: 200,
    body: renderShell("Conservation Note", [
      '<article class="ledger">',
      "<h1>Conservation Note: Vane, Weather</h1>",
      '<p class="typed">Drawer north confirmed. Cross-reference: final room ledger.</p>',
      '<p class="typed">Old file stamp: 24 July 1998</p>',
      "<p>The final archive tag uses four observations, in this order:</p>",
      "<ol>",
      "<li>the forbidden project folder after removing its numeric year prefix;</li>",
      "<li>the catalog card label you placed in the address bar;</li>",
      "<li>the drawer label confirmed on this page;</li>",
      "<li>the lowercase month name printed on this note's old file stamp.</li>",
      "</ol>",
      '<p>Separate the four parts with hyphens at <a href="/final/">the final room ledger</a>.</p>',
      "</article>"
    ].join("\n")),
    headers: baseHeaders
  };
}

function safeStaticPath(pathname) {
  let requestPath = decodeURIComponent(pathname);
  if (requestPath.endsWith("/")) requestPath += "index.html";
  const fullPath = path.normalize(path.join(PUBLIC, requestPath));
  if (!fullPath.startsWith(PUBLIC)) return null;
  return fullPath;
}

function serveStatic(req, res, url) {
  const fullPath = safeStaticPath(url.pathname);
  if (!fullPath) return notFound(res);

  fs.readFile(fullPath, (err, data) => {
    if (err) return notFound(res);
    const ext = path.extname(fullPath);
    send(res, 200, data, { "Content-Type": MIME[ext] || "application/octet-stream" });
  });
}

function collectBody(req) {
  return new Promise((resolve, reject) => {
    let raw = "";
    req.on("data", (chunk) => {
      raw += chunk;
      if (raw.length > 4096) {
        reject(new Error("body too large"));
        req.destroy();
      }
    });
    req.on("end", () => resolve(raw));
    req.on("error", reject);
  });
}

async function handleUnseal(req, res) {
  try {
    const raw = await collectBody(req);
    let key = "";
    const contentType = req.headers["content-type"] || "";

    if (contentType.includes("application/json")) {
      key = JSON.parse(raw || "{}").key || "";
    } else {
      key = new URLSearchParams(raw).get("key") || "";
    }

    const normalized = canonicalizeFinalKey(key);
    const expected = EXPECTED_KEY_PARTS.join("-");
    if (normalized !== expected) {
      return sendJson(res, 403, {
        ok: false,
        message: "The ledger rejects that tag. One of the four observations is out of order or misspelled."
      });
    }

    return sendJson(res, 200, {
      ok: true,
      flag: computeFlag(normalized),
      message: "The final room ledger opens."
    });
  } catch (error) {
    return sendJson(res, 400, {
      ok: false,
      message: "The ledger could not read that submission."
    });
  }
}

function handleCardApi(res, url) {
  const name = normalizeKey(url.searchParams.get("name"));
  if (!name) {
    return sendJson(res, 400, {
      ok: false,
      message: "This old catalog endpoint expects ?name= followed by one hyphenated shelf label from the loose board."
    });
  }

  if (name !== "weather-vane") {
    return sendJson(res, 404, {
      ok: false,
      message: "No public card with that label survived the renovation index. Try the label printed beside the roofline object."
    });
  }

  return sendJson(res, 200, {
    ok: true,
    card: {
      label: "weather-vane",
      accession: "RCA-1912-WV",
      case: "1912",
      note: "The vane was removed during the 1998 renovation. Its paper register lost a drawer label; the web envelope kept it.",
      register: "/records/register?case=1912"
    }
  }, {
    "X-Card-Catalog": "legacy-js-viewer"
  });
}

function createServer() {
  return http.createServer(async (req, res) => {
    const url = new URL(req.url, `http://${req.headers.host || "localhost"}`);

    if (req.method === "GET" && url.pathname === "/api/card") {
      return handleCardApi(res, url);
    }

    if (req.method === "GET" && url.pathname === "/records/register") {
      const page = renderRegisterPage(url);
      return send(res, page.status, page.body, page.headers);
    }

    if (req.method === "POST" && url.pathname === "/api/unseal") {
      return handleUnseal(req, res);
    }

    if (req.method !== "GET" && req.method !== "HEAD") {
      return send(res, 405, "Method not allowed", { "Content-Type": MIME[".txt"] });
    }

    return serveStatic(req, res, url);
  });
}

async function selfCheck() {
  const server = createServer();
  await new Promise((resolve) => server.listen(0, HOST, resolve));
  const { port } = server.address();
  const base = `http://${HOST}:${port}`;

  async function must(pathname, expectedStatus = 200) {
    const response = await fetch(`${base}${pathname}`);
    if (response.status !== expectedStatus) {
      throw new Error(`${pathname} returned ${response.status}, expected ${expectedStatus}`);
    }
    return response;
  }

  try {
    await must("/");
    const robots = await must("/robots.txt");
    const robotsText = await robots.text();
    if (!robotsText.includes("/1998-renovation/")) throw new Error("robots clue missing");

    await must("/1998-renovation/loose-board.html");
    await must("/catalog.html?card=weather-vane");

    const card = await must("/api/card?name=weather-vane");
    const cardJson = await card.json();
    if (cardJson.card.register !== "/records/register?case=1912") {
      throw new Error("card register link missing");
    }

    const register = await must("/records/register?case=1912");
    if (register.headers.get("x-riverbend-drawer") !== "north") {
      throw new Error("drawer header missing");
    }

    const note = await must("/records/register?case=1912&drawer=north");
    if (!String(note.headers.get("last-modified")).includes("Jul")) {
      throw new Error("last modified month clue missing");
    }

    const finalResponse = await fetch(`${base}/api/unseal`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key: EXPECTED_KEY_PARTS.join("-") })
    });
    const finalJson = await finalResponse.json();
    if (!finalJson.ok || !finalJson.flag) throw new Error("final flag did not unlock");

    console.log("Self-check passed.");
  } finally {
    server.close();
  }
}

if (process.argv.includes("--self-check")) {
  selfCheck().catch((error) => {
    console.error(error);
    process.exit(1);
  });
} else {
  createServer().listen(PORT, HOST, () => {
    const displayHost = HOST === "0.0.0.0" ? "localhost" : HOST;
    console.log(`Riverbend Civic Archive is running at http://${displayHost}:${PORT}`);
  });
}
