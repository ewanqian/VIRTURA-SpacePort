document.documentElement.classList.remove("no-js");
document.documentElement.classList.add("js");

const stageEls = Array.from(document.querySelectorAll("[data-motion-stage]"));
const navItems = Array.from(document.querySelectorAll("[data-nav-item]"));
const portCards = Array.from(document.querySelectorAll("[data-port-card]"));
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const setActiveNav = () => {
  const visible = navItems
    .map((item) => {
      const target = document.querySelector(item.getAttribute("href"));
      if (!target) return null;
      return { item, top: Math.abs(target.getBoundingClientRect().top - 140) };
    })
    .filter(Boolean)
    .sort((a, b) => a.top - b.top)[0];

  navItems.forEach((item) => item.classList.toggle("is-active", visible?.item === item));
};

const revealStages = () => {
  if (reduceMotion || !("IntersectionObserver" in window)) {
    stageEls.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -6% 0px", threshold: 0.04 }
  );

  stageEls.forEach((el) => observer.observe(el));
};

const wirePortFocus = () => {
  portCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      portCards.forEach((item) => item.classList.toggle("is-dimmed", item !== card));
    });

    card.addEventListener("mouseleave", () => {
      portCards.forEach((item) => item.classList.remove("is-dimmed"));
    });
  });
};

const wireSmoothAnchors = () => {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target || reduceMotion) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", link.getAttribute("href"));
    });
  });
};

revealStages();
wirePortFocus();
wireSmoothAnchors();
setActiveNav();
window.addEventListener("scroll", setActiveNav, { passive: true });
