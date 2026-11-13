// ===== Sistem Login CAIS (tanpa database) =====
// Akun hardcoded untuk prototipe
const USERS = [
    { username: "admin", password: "admin123", nama: "Administrator" },
    { username: "peba",  password: "peba123",  nama: "Peba" },
    { username: "sahlan", password: "sahlan123", nama: "Sahlan" },
    { username: "rizky", password: "rizky123", nama: "Rizky" }
];

// Cek apakah elemen form login ada di halaman ini
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    // Jika user sudah login, langsung lempar ke dashboard
    if (localStorage.getItem("cais_user")) {
        window.location.href = "dashboard.html";
    }

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();
        const errorMsg = document.getElementById("errorMsg");

        // Cari user yang cocok
        const user = USERS.find(
            (u) => u.username === username && u.password === password
        );

        if (user) {
            // Simpan sesi login di localStorage
            localStorage.setItem(
                "cais_user",
                JSON.stringify({ username: user.username, nama: user.nama })
            );
            errorMsg.textContent = "";
            // Redirect ke dashboard
            window.location.href = "dashboard.html";
        } else {
            errorMsg.textContent = "Username atau password salah!";
        }
    });
}

// ===== Proteksi Halaman Dashboard =====
// Jika script ini dimuat di dashboard.html, pastikan user sudah login
if (window.location.pathname.includes("dashboard.html")) {
    const session = localStorage.getItem("cais_user");
    if (!session) {
        // Belum login, tendang ke halaman login
        window.location.href = "login.html";
    } else {
        const user = JSON.parse(session);
        const welcomeEl = document.getElementById("welcomeUser");
        if (welcomeEl) {
            welcomeEl.textContent = `Selamat datang, ${user.nama}`;
        }
    }
}

// ===== Fungsi Logout =====
function logout() {
    localStorage.removeItem("cais_user");
    window.location.href = "login.html";
}