(() => {
  const params = new URLSearchParams(window.location.search);
  const topic = params.get("topic");
  if (topic) {
    const persona = document.querySelector("#persona");
    if (persona instanceof HTMLSelectElement) {
      const map = {
        funding: "Funder/Investor",
        partnership: "NGO/Partner",
        volunteer: "Volunteer",
      };
      const next = map[topic];
      if (next) persona.value = next;
    }
  }

  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");

  const setNavOpen = (open) => {
    if (!nav || !navToggle) return;
    nav.classList.toggle("is-open", open);
    navToggle.setAttribute("aria-expanded", String(open));
  };

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      setNavOpen(!nav.classList.contains("is-open"));
    });

    nav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => setNavOpen(false));
    });

    document.addEventListener("click", (e) => {
      const t = e.target;
      if (!(t instanceof Element)) return;
      if (!nav.classList.contains("is-open")) return;
      if (t.closest(".site-nav") || t.closest(".nav-toggle")) return;
      setNavOpen(false);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setNavOpen(false);
    });
  }

  const form = document.querySelector("#contact-form");
  if (form instanceof HTMLFormElement) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const name = String(fd.get("name") ?? "").trim();
      const contact = String(fd.get("contact") ?? "").trim();
      const persona = String(fd.get("persona") ?? "").trim();
      const message = String(fd.get("message") ?? "").trim();

      const subject = encodeURIComponent(`Website message from ${name || "visitor"}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail/Phone: ${contact}\nI am a: ${persona}\n\nMessage:\n${message}\n`
      );

      window.location.href = `mailto:mavunowaters@gmail.com?subject=${subject}&body=${body}`;
    });
  }
})();
