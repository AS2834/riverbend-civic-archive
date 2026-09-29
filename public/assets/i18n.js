(function () {
  const dictionary = {
    "Riverbend Civic Archive": "河湾市民档案馆",
    "volunteer-maintained since 1996": "1996 年起由志愿者维护",
    "About": "关于",
    "Programs": "活动",
    "Minutes": "会议记录",
    "Contact": "联系",
    "Last hand-edited: 2003-02-11": "最后手工编辑：2003-02-11",
    "Crawlers: please respect posted policy.": "爬虫请遵守已发布的访问规则。",

    "Public Reading Room": "公共阅览室",
    "The Riverbend Civic Archive keeps meeting minutes, renovation notes, local photographs, and small civic objects donated by residents. This mirror is maintained for visitors using home computers and the library terminal.": "河湾市民档案馆保存会议记录、翻修笔记、本地照片，以及居民捐赠的小型公共物件。这个镜像站留给家用电脑和图书馆终端访问。",
    "This is an archive investigation, not a normal puzzle menu. Treat the site like a real old mirror: follow stale notes, inspect page source, try hinted addresses, watch URL parameters, and notice what the server says outside the page itself.": "这是一场档案调查，不是普通的解谜菜单。把它当成一个真实的旧镜像站：跟着过期说明走，查看页面源码，尝试被暗示的地址，留意 URL 参数，也注意服务器在页面之外说了什么。",
    "The volunteer webmaster is no longer accepting new submissions by email. Existing public pages remain online while the archive is reorganized.": "志愿网站管理员已经不再通过邮件接收新条目。档案重整期间，现有公开页面会继续保留在线。",
    "Recently Indexed": "最近编入索引",
    "Board minutes, spring series": "春季系列董事会会议记录",
    "Saturday object table": "周六物件展示桌",
    "History of the archive room": "档案室历史",
    "Microfilm reader frame from the public desk. Some labels were stored in the web catalog instead of the scan.": "公共阅览桌上的缩微胶片画面。有些标签没有写进扫描件，而是留在网页目录里。",

    "About the Archive": "关于档案馆",
    "The archive began as a set of donated filing cabinets in the west room of city hall. Volunteers scanned public records, wrote object notes, and maintained this small mirror for patrons who could not visit during open hours.": "这座档案馆最初只是市政厅西屋里几组捐赠文件柜。志愿者扫描公开记录，撰写物件说明，并维护这个小镜像站，供无法在开放时间到访的人使用。",
    "Some private accession material is intentionally absent from the public navigation. The old web mirror sometimes still remembers where it was stored.": "部分非公开入藏材料刻意没有放进公共导航。旧网页镜像有时仍记得它们曾被放在哪里。",
    "Access": "访问",
    "Public minutes and program notes are available without appointment. Physical objects require a volunteer to open the cabinet.": "公开会议记录和活动说明无需预约即可查看。实体物件需要志愿者打开柜子。",

    "Programs": "活动",
    "Saturday object tables are informal show-and-tell sessions for neighbors. Old signs, municipal tools, fair programs, and building fragments are displayed with handwritten labels.": "周六物件展示桌是面向邻里的非正式展示活动。旧标牌、市政工具、集会节目单和建筑残片会配上手写标签展出。",
    "First Saturday: river trade maps": "第一个周六：河运贸易地图",
    "Second Saturday: schoolhouse photographs": "第二个周六：校舍照片",
    "Third Saturday: renovation fragments": "第三个周六：翻修残件",

    "Board Minutes": "董事会会议记录",
    "Only public summaries are posted here. Paper copies are available by appointment.": "这里只发布公开摘要。纸质副本可预约查阅。",
    "May 1998": "1998 年 5 月",
    "Volunteers approved temporary removal of several roofline objects during the city hall renovation. Catalog labels were to be checked after the board returned from storage.": "志愿者批准在市政厅翻修期间临时移走若干屋顶线物件。展示板从库房归还后，需要重新核对目录标签。",
    "June 1998": "1998 年 6 月",
    "The webmaster reported that several non-public renovation files had been excluded from normal navigation and crawler indexing.": "网站管理员报告称，若干非公开翻修文件已经从普通导航和爬虫索引中排除。",

    "Riverbend Civic Archive\nOld City Hall, west room\nRiverbend": "河湾市民档案馆\n旧市政厅，西屋\n河湾",
    "This mirror is preserved for reference. Please do not send catalog corrections to the old webmaster address printed on scanned pages.": "此镜像仅作参考保存。请不要把目录修正发送到扫描页上印着的旧网站管理员地址。",

    "Loose Board, 1998 Renovation Box": "松动展示板，1998 翻修箱",
    "This board was found behind a temporary shelf after the roofline objects returned from storage. The public caption says the labels were copied into the legacy card viewer.": "屋顶线物件从库房归还后，这块展示板在临时书架后面被发现。公开说明写着：标签已经抄入旧版卡片查看器。",
    "Viewer: /catalog.html\nFormat: one card label in the address bar": "查看器：/catalog.html\n格式：在地址栏放入一个卡片标签",
    "Pencil note: the viewer wants one of the hyphenated shelf labels from this board, exactly as printed.": "铅笔注：查看器要的是这块板上的某个连字符展示标签，必须按印刷内容原样输入。",
    "Only one label on the board points upward from the roofline. Use the label exactly as written.": "板上只有一个标签对应屋顶线上向上的物件。请按原样使用该标签。",
    "The third row has a red sketch of the roof object beside its label.": "第三行标签旁边有一张红色屋顶物件草图。",

    "Legacy Card Viewer": "旧版卡片查看器",
    "The 1998 script was written for direct links from shelf boards. If the viewer is empty, put a card label in the address bar.": "1998 年的脚本是给展示板直接链接用的。如果查看器是空的，就把卡片标签放进地址栏。",
    "Use a hyphenated label from the loose board, not a description of the object.": "请使用松动展示板上的连字符标签，而不是物件描述。",
    "Card label": "卡片标签",
    "Load card": "读取卡片",
    "No card is loaded. The 1998 viewer still reads card labels from the address bar.": "尚未载入卡片。1998 年的查看器仍会从地址栏读取卡片标签。",
    "Card not found": "未找到卡片",
    "The label does not match any surviving public shelf card.": "这个标签不匹配任何幸存的公开展示卡。",
    "This old catalog endpoint expects ?name= followed by one hyphenated shelf label from the loose board.": "这个旧目录接口需要 ?name= 加上松动展示板上的某个连字符展示标签。",
    "No public card with that label survived the renovation index. Try the label printed beside the roofline object.": "翻修索引里没有幸存的公开卡片匹配这个标签。试试屋顶线物件旁边印着的标签。",
    "Church Bell": "教堂钟",
    "Public program prop. No accession register was filed.": "公开活动道具。没有入藏登记。",
    "River Map": "河流地图",
    "Framed copy, already digitized for the reading room.": "装框副本，已为阅览室数字化。",
    "Weather Vane": "风向标",
    "Renovation object. Pulling register card from the legacy catalog...": "翻修物件。正在从旧目录拉取登记卡……",
    "North Lamp": "北侧灯",
    "Loaned to the firehouse exhibition in 2001.": "2001 年借给消防站展览。",
    "The old catalog service failed to answer.": "旧目录服务没有响应。",
    "The vane was removed during the 1998 renovation. Its paper register lost a drawer label; the web envelope kept it.": "这枚风向标在 1998 年翻修期间被拆下。纸质登记丢了抽屉标签，但网页封套保留了它。",

    "Register": "登记册",
    "Register 1912": "1912 登记册",
    "No public register exists for that case number.": "该案号没有公开登记册。",
    "The accession card is real, but this copy is missing its drawer label.": "入藏卡是真的，但这个副本缺少抽屉标签。",
    "Filed under:": "归档于：",
    "[label absent from page]": "［页面上缺少标签］",
    "The old catalog envelope carried filing notes that never appeared on the paper copy.": "旧目录封套带有归档说明，而这些说明从未出现在纸质副本上。",
    "Cabinet rule: roofline objects follow the vane sketch. On the loose board, up is north.": "文件柜规则：屋顶线物件跟随风向标草图。在松动展示板上，向上就是 north。",
    "Try the drawer strip:": "试试抽屉标签条：",
    "The east drawer opens, but it holds unrelated public objects.": "east 抽屉打开了，但里面是不相关的公开物件。",
    "The south drawer opens, but it holds unrelated public objects.": "south 抽屉打开了，但里面是不相关的公开物件。",
    "The west drawer opens, but it holds unrelated public objects.": "west 抽屉打开了，但里面是不相关的公开物件。",
    "Return to the drawer strip": "返回抽屉标签条",
    "Conservation Note: Vane, Weather": "保护说明：风向标",
    "Drawer north confirmed. Cross-reference: final room ledger.": "已确认 north 抽屉。交叉引用：最终房间账本。",
    "Old file stamp: 24 July 1998": "旧文件日期章：1998 年 7 月 24 日",
    "The final archive tag uses four observations, in this order:": "最终档案标签按顺序使用四个观察结果：",
    "the forbidden project folder after removing its numeric year prefix;": "被禁止项目文件夹名，去掉开头的数字年份；",
    "the catalog card label you placed in the address bar;": "你放进地址栏的目录卡片标签；",
    "the drawer label confirmed on this page;": "此页面确认的抽屉标签；",
    "the lowercase month name printed on this note's old file stamp.": "这条说明旧文件日期章上印着的小写月份名。",
    "Separate the four parts with hyphens at": "把四个部分用连字符连接，并提交到",
    "the final room ledger": "最终房间账本",

    "Final Room Ledger": "最终房间账本",
    "The ledger accepts the archive tag assembled from the renovation trail. Hyphens are fine. Capitalization is ignored.": "账本接受由翻修线索拼出的档案标签。可以使用连字符，大小写不敏感。",
    "Archive tag": "档案标签",
    "Open ledger": "打开账本",
    "Checking ledger...": "正在核对账本……",
    "The ledger rejects that tag. One of the four observations is out of order or misspelled.": "账本拒绝了这个标签。四个观察结果中有一个顺序错误或拼写错误。",
    "The final room ledger opens.": "最终房间账本打开了。",
    "The ledger could not read that submission.": "账本无法读取这次提交。",

    "Missing Page": "页面缺失",
    "The archive has no public item at this address.": "档案馆在这个地址没有公开条目。",
    "Return to the front desk": "返回前台"
  };

  const placeholders = {
    "example-card": "例如：某个卡片标签",
    "label-from-loose-board": "展示板上的标签",
    "part-one-part-two-part-three-part-four": "第一段-第二段-第三段-第四段"
  };

  const titleMap = {
    "Riverbend Civic Archive": "河湾市民档案馆",
    "About - Riverbend Civic Archive": "关于 - 河湾市民档案馆",
    "Programs - Riverbend Civic Archive": "活动 - 河湾市民档案馆",
    "Minutes - Riverbend Civic Archive": "会议记录 - 河湾市民档案馆",
    "Contact - Riverbend Civic Archive": "联系 - 河湾市民档案馆",
    "Loose Board - Riverbend Civic Archive": "松动展示板 - 河湾市民档案馆",
    "Legacy Card Viewer - Riverbend Civic Archive": "旧版卡片查看器 - 河湾市民档案馆",
    "Final Room Ledger - Riverbend Civic Archive": "最终房间账本 - 河湾市民档案馆",
    "Register - Riverbend Civic Archive": "登记册 - 河湾市民档案馆",
    "Register 1912 - Riverbend Civic Archive": "1912 登记册 - 河湾市民档案馆",
    "Conservation Note - Riverbend Civic Archive": "保护说明 - 河湾市民档案馆",
    "Missing Page - Riverbend Civic Archive": "页面缺失 - 河湾市民档案馆"
  };

  function translateTextNodes(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        if (node.parentElement && ["SCRIPT", "STYLE"].includes(node.parentElement.tagName)) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach((node) => {
      const value = node.nodeValue;
      const trimmed = value.trim();
      if (dictionary[trimmed]) {
        node.nodeValue = value.replace(trimmed, dictionary[trimmed]);
      }
    });
  }

  function translateAttributes() {
    document.querySelectorAll("[placeholder]").forEach((node) => {
      const value = node.getAttribute("placeholder");
      if (placeholders[value]) node.setAttribute("placeholder", placeholders[value]);
    });

    document.querySelectorAll("img[alt]").forEach((node) => {
      const value = node.getAttribute("alt");
      if (dictionary[value]) node.setAttribute("alt", dictionary[value]);
    });
  }

  function applyLanguage() {
    const lang = localStorage.getItem("riverbend-language") || "en";
    document.documentElement.lang = lang === "zh" ? "zh-Hans" : "en";
    const toggle = document.querySelector("[data-translate-toggle]");
    if (toggle) {
      toggle.textContent = lang === "zh" ? "显示原文" : "网页一键翻译";
      toggle.setAttribute("aria-pressed", String(lang === "zh"));
    }
    if (lang !== "zh") return;
    translateTextNodes(document.body);
    translateAttributes();
    if (titleMap[document.title]) document.title = titleMap[document.title];
  }

  function installToggle() {
    const masthead = document.querySelector(".masthead");
    if (!masthead || document.querySelector("[data-translate-toggle]")) return;

    const button = document.createElement("button");
    button.type = "button";
    button.className = "translate-toggle";
    button.dataset.translateToggle = "true";
    button.textContent = "网页一键翻译";
    button.addEventListener("click", () => {
      const next = (localStorage.getItem("riverbend-language") || "en") === "zh" ? "en" : "zh";
      localStorage.setItem("riverbend-language", next);
      window.location.reload();
    });
    masthead.appendChild(button);
  }

  window.RiverbendI18n = {
    apply: applyLanguage
  };

  installToggle();
  applyLanguage();
})();
