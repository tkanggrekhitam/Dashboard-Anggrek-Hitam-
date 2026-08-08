// ==========================================================
// AUTH HELPERS
// ==========================================================
const SESSION_KEY = "tkah_session";

function saveSession(session) {
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

function getSession() {
  const raw = localStorage.getItem(SESSION_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch (e) {
    return null;
  }
}

function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}

// Panggil di awal setiap halaman terproteksi.
// Jika belum login, langsung redirect ke halaman login.
function requireAuth() {
  const session = getSession();
  if (!session || !session.token) {
    window.location.href = "index.html";
    return null;
  }
  return session;
}

function logout() {
  const session = getSession();
  clearSession();
  window.location.href = "index.html";
}

// true jika role saat ini termasuk salah satu yang diizinkan
function hasRole(session, allowedRoles) {
  return session && allowedRoles.indexOf(session.role) !== -1;
}
