// ==========================================================
// KONFIGURASI APLIKASI TK ANGGREK HITAM
// ==========================================================
// Setelah men-deploy Code.gs sebagai Web App (lihat README.md),
// tempel URL Web App-nya di bawah ini. Contoh:
// "https://script.google.com/macros/s/AKfycb.../exec"
const APPS_SCRIPT_URL = "PASTE_URL_WEB_APP_ANDA_DI_SINI";

const APP_NAME = "TK Anggrek Hitam";

// Peran yang dikenali aplikasi
const ROLES = {
  SUPER_ADMIN: "super_admin",
  KEPALA_SEKOLAH: "kepala_sekolah",
  GURU: "guru"
};

const ROLE_LABEL = {
  super_admin: "Super Admin",
  kepala_sekolah: "Kepala Sekolah",
  guru: "Guru"
};
