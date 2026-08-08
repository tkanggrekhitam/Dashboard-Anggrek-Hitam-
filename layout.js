// ==========================================================
// LAYOUT WIRING — dipanggil di setiap halaman setelah requireAuth()
// ==========================================================
function initLayout(session) {
  const nameEl = document.getElementById("topbarUserName");
  const roleEl = document.getElementById("topbarUserRole");
  const avatarEl = document.getElementById("topbarAvatar");
  if (nameEl) nameEl.textContent = session.nama || session.username;
  if (roleEl) roleEl.textContent = ROLE_LABEL[session.role] || session.role;
  if (avatarEl) avatarEl.textContent = (session.nama || session.username).charAt(0).toUpperCase();

  document.querySelectorAll("[data-logout]").forEach((btn) => {
    btn.addEventListener("click", logout);
  });

  // Sembunyikan menu/tombol yang dibatasi peran tertentu.
  // Elemen diberi atribut data-roles="super_admin,kepala_sekolah"
  document.querySelectorAll("[data-roles]").forEach((el) => {
    const allowed = el.getAttribute("data-roles").split(",").map((r) => r.trim());
    if (allowed.indexOf(session.role) === -1) {
      el.style.display = "none";
    }
  });

  if (window.lucide) {
    lucide.createIcons();
  }
}
