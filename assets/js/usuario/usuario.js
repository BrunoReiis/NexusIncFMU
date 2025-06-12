import {
  auth,
  signOut,
  onAuthStateChanged
} from "../firebase/principal.js";

function logout() {
  signOut(auth).then(() => {
    setStatus("Usuário deslogado");
    window.location.href = "http://localhost:8000/pages/login.html";
  });
}

onAuthStateChanged(auth, (user) => {
    document.getElementById("userEmail").innerHTML = user.email;
    document.getElementById("userName").textContent = user.displayName || "Sem nome";
})

window.logout = logout;