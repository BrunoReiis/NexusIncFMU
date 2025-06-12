import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  db,
  setDoc,
  doc,
  updateProfile,
} from "../firebase/principal.js";

function validarEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function registrar() {
  const email = document.getElementById("regEmail").value.trim();
  const password = document.getElementById("regPassword").value.trim();
  const name = document.getElementById("regName").value.trim();

  if (!validarEmail(email)) {
    alert("Por favor, insira um email válido.");
    return;
  }

  if (password.length < 6) {
    alert("A senha deve ter no mínimo 6 caracteres.");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;

      // Atualiza o nome no perfil do usuário do Auth
      await updateProfile(user, {
        displayName: name
      });

      // Salva também no Firestore
      await setDoc(doc(db, "usuarios", user.uid), {
        nome: name,
        email: email
      });

      alert("Usuário criado com sucesso!");
      window.location.href = "/pages/usuario.html"; // redireciona para o perfil
    })
    .catch((error) => {
      console.error("Erro ao criar usuário:", error.code, error.message);
      alert(`Erro: ${error.message}`);
    });
}

function login() {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  if (!email || !password) {
    setStatus("Preencha email e senha");
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "http://localhost:8000/pages/usuario.html";
    })
    .catch((error) => {
      setStatus("Erro no login: " + error.message);
    });
}

window.registrar = registrar;
window.login = login;