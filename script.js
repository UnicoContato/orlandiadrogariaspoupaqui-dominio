const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const modal = document.querySelector("[data-modal]");
const modalImage = modal?.querySelector("img");
const modalCaption = modal?.querySelector("p");
const privacyModal = document.querySelector("[data-privacy-modal]");

function updateHeader() {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

navToggle?.addEventListener("click", () => {
  const isOpen = header.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav?.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    header?.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  }
});

document.querySelectorAll("[data-gallery]").forEach((button) => {
  button.addEventListener("click", () => {
    if (!modal || !modalImage || !modalCaption) return;
    modalImage.src = button.dataset.gallery;
    modalImage.alt = button.querySelector("img")?.alt || "Imagem da Drogaria Popaqui";
    modalCaption.textContent = button.dataset.caption || "";
    modal.showModal();
  });
});

document.querySelector("[data-modal-close]")?.addEventListener("click", () => {
  modal?.close();
});

document.querySelector("[data-privacy]")?.addEventListener("click", () => {
  privacyModal?.showModal();
});

document.querySelector("[data-privacy-close]")?.addEventListener("click", () => {
  privacyModal?.close();
});

document.addEventListener("click", (event) => {
  if (event.target === modal) modal.close();
  if (event.target === privacyModal) privacyModal.close();
});
