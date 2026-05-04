const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");
const header = document.querySelector(".site-header");
const flyingAvatar = document.getElementById("flyingAvatar");
let ufoAnimationFrame = null;
let ufoTargetTimer = null;

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

window.addEventListener("scroll", () => {
  if (!header) return;
  header.classList.toggle("scrolled", window.scrollY > 10);
});

const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach((item) => {
  const button = item.querySelector(".faq-question");
  if (!button) return;

  button.addEventListener("click", () => {
    const isOpen = item.classList.contains("open");
    faqItems.forEach((i) => i.classList.remove("open"));
    if (!isOpen) item.classList.add("open");
  });
});

const revealElements = document.querySelectorAll(".reveal");
revealElements.forEach((el, index) => {
  el.style.setProperty("--delay", `${Math.min(index * 0.04, 0.24)}s`);
});

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("in-view");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.14 }
);

revealElements.forEach((el) => revealObserver.observe(el));

const clamp = (num, min, max) => Math.max(min, Math.min(num, max));

const randomRange = (min, max) => Math.random() * (max - min) + min;

const initUfoMotion = () => {
  if (!flyingAvatar) return;
  const shouldReduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isSmallMobile = window.matchMedia("(max-width: 480px)").matches;
  if (shouldReduceMotion || isSmallMobile) return;

  const limits = () => {
    const maxX = Math.max(window.innerWidth - 120, 20);
    const maxY = Math.max(Math.min(window.innerHeight * 0.36, 260), 96);
    return { minX: 12, maxX, minY: 78, maxY };
  };

  const bounds = limits();
  const state = {
    x: randomRange(bounds.minX, bounds.maxX),
    y: randomRange(bounds.minY, bounds.maxY),
    tx: randomRange(bounds.minX, bounds.maxX),
    ty: randomRange(bounds.minY, bounds.maxY),
    speed: randomRange(0.012, 0.028),
  };

  const pickNewTarget = () => {
    const nextBounds = limits();
    state.tx = randomRange(nextBounds.minX, nextBounds.maxX);
    state.ty = randomRange(nextBounds.minY, nextBounds.maxY);
    state.speed = randomRange(0.01, 0.03);

    ufoTargetTimer = window.setTimeout(pickNewTarget, randomRange(1200, 3200));
  };

  const animate = () => {
    state.x += (state.tx - state.x) * state.speed;
    state.y += (state.ty - state.y) * state.speed;

    const swayX = Math.sin(Date.now() / 380) * 5;
    const swayY = Math.cos(Date.now() / 420) * 4;
    const rotate = clamp((state.tx - state.x) * 0.12, -9, 9);

    flyingAvatar.style.transform = `translate3d(${state.x + swayX}px, ${state.y + swayY}px, 0) rotate(${rotate}deg)`;
    ufoAnimationFrame = window.requestAnimationFrame(animate);
  };

  pickNewTarget();
  animate();
};

initUfoMotion();

window.addEventListener("resize", () => {
  if (ufoTargetTimer) window.clearTimeout(ufoTargetTimer);
  if (ufoAnimationFrame) window.cancelAnimationFrame(ufoAnimationFrame);
  initUfoMotion();
});

const mockForms = document.querySelectorAll(".mock-form");
mockForms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Thank you. Your details are captured in this demo UI. Backend integration will be added in Phase 2.");
    form.reset();
  });
});
