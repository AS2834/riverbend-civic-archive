(function () {
  const shelf = {
    "church-bell": {
      title: "Church Bell",
      body: "Public program prop. No accession register was filed."
    },
    "river-map": {
      title: "River Map",
      body: "Framed copy, already digitized for the reading room."
    },
    "weather-vane": {
      title: "Weather Vane",
      body: "Renovation object. Pulling register card from the legacy catalog..."
    },
    "north-lamp": {
      title: "North Lamp",
      body: "Loaned to the firehouse exhibition in 2001."
    }
  };

  const params = new URLSearchParams(window.location.search);
  const cardName = (params.get("card") || "").trim().toLowerCase();
  const panel = document.querySelector("[data-card-panel]");
  const form = document.querySelector("[data-card-form]");
  const input = document.querySelector("[data-card-input]");

  function renderError(message) {
    panel.dataset.state = "error";
    panel.innerHTML = `<h2>Card not found</h2><p>${message}</p>`;
    if (window.RiverbendI18n) window.RiverbendI18n.apply();
  }

  function renderCard(label, card) {
    panel.dataset.state = "ready";
    panel.innerHTML = `<h2>${card.title}</h2><p>${card.body}</p>`;
    if (window.RiverbendI18n) window.RiverbendI18n.apply();
    if (label === "weather-vane") {
      fetch(`/api/card?name=${encodeURIComponent(label)}`)
        .then((response) => response.ok ? response.json() : Promise.reject(response))
        .then((data) => {
          panel.insertAdjacentHTML(
            "beforeend",
            `<p class="typed">Accession ${data.card.accession}<br>Register: <a href="${data.card.register}">${data.card.register}</a></p><p>${data.card.note}</p>`
          );
          if (window.RiverbendI18n) window.RiverbendI18n.apply();
        })
        .catch(() => {
          panel.insertAdjacentHTML("beforeend", "<p>The old catalog service failed to answer.</p>");
          if (window.RiverbendI18n) window.RiverbendI18n.apply();
        });
    }
  }

  if (form && input) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const value = input.value.trim().toLowerCase();
      if (value) window.location.href = `/catalog.html?card=${encodeURIComponent(value)}`;
    });
  }

  if (!panel) return;

  if (!cardName) {
    panel.innerHTML = "<h2>Legacy Card Viewer</h2><p>No card is loaded. The 1998 viewer still reads card labels from the address bar.</p>";
    if (window.RiverbendI18n) window.RiverbendI18n.apply();
    return;
  }

  if (!Object.prototype.hasOwnProperty.call(shelf, cardName)) {
    renderError("The label does not match any surviving public shelf card.");
    return;
  }

  renderCard(cardName, shelf[cardName]);
})();
