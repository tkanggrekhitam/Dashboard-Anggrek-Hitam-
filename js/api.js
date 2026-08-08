// ==========================================================
// API HELPER — komunikasi dengan Google Apps Script Web App
// ==========================================================
// Catatan: request dikirim sebagai POST dengan body text/plain
// (bukan application/json) supaya browser TIDAK melakukan
// CORS preflight (OPTIONS), karena Apps Script Web App tidak
// menangani preflight dengan baik.

async function apiCall(action, payload = {}) {
  if (!APPS_SCRIPT_URL || APPS_SCRIPT_URL.indexOf("PASTE_URL") !== -1) {
    throw new Error(
      "URL Apps Script belum diatur. Buka js/config.js dan isi APPS_SCRIPT_URL."
    );
  }

  const session = getSession();
  const body = {
    action,
    token: session ? session.token : null,
    data: payload
  };

  let res;
  try {
    res = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify(body)
    });
  } catch (err) {
    throw new Error("Tidak dapat menghubungi server. Periksa koneksi internet Anda.");
  }

  let json;
  try {
    json = await res.json();
  } catch (err) {
    throw new Error("Respons server tidak valid. Pastikan Web App sudah di-deploy dengan benar.");
  }

  if (!json.success) {
    if (json.code === "SESSION_EXPIRED") {
      clearSession();
      window.location.href = "index.html";
    }
    throw new Error(json.message || "Terjadi kesalahan pada server.");
  }
  return json.result;
}
