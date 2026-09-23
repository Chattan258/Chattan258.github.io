const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".main-nav");

function closeMenu() {
  header.classList.remove("menu-open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "打开导航菜单");
}

menuButton.addEventListener("click", () => {
  const opening = !header.classList.contains("menu-open");
  header.classList.toggle("menu-open", opening);
  menuButton.setAttribute("aria-expanded", String(opening));
  menuButton.setAttribute("aria-label", opening ? "关闭导航菜单" : "打开导航菜单");
});

menu.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && header.classList.contains("menu-open")) {
    closeMenu();
    menuButton.focus();
  }
});

document.addEventListener("click", (event) => {
  if (header.classList.contains("menu-open") && !header.contains(event.target)) closeMenu();
});

window.matchMedia("(min-width: 821px)").addEventListener("change", (event) => {
  if (event.matches) closeMenu();
});

const signalVisual = document.querySelector(".signal-visual");
signalVisual.addEventListener("pointermove", (event) => {
  const bounds = signalVisual.getBoundingClientRect();
  const x = ((event.clientX - bounds.left) / bounds.width) * 100;
  const y = ((event.clientY - bounds.top) / bounds.height) * 100;
  signalVisual.style.setProperty("--glow-x", `${x}%`);
  signalVisual.style.setProperty("--glow-y", `${y}%`);
});
signalVisual.addEventListener("pointerleave", () => {
  signalVisual.style.removeProperty("--glow-x");
  signalVisual.style.removeProperty("--glow-y");
});
