import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import {
    getFirestore,
    collection,
    getDocs,
    query,
    where,
    addDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBU-x_Uly6Fw5Cq_baDX-vrWrWQ5TrM87I",
    authDomain: "lolynar-clientes.firebaseapp.com",
    projectId: "lolynar-clientes",
    storageBucket: "lolynar-clientes.firebasestorage.app",
    messagingSenderId: "161216793327",
    appId: "1:161216793327:web:64420cfe00e6ca7df1691a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const emailGuardado = localStorage.getItem("clienteEmail");
const formulario = document.getElementById("formulario");

if (emailGuardado) {
    const q = query(collection(db, "clientes"), where("email", "==", emailGuardado));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];
        const nombre = doc.data().nombre || "Sin nombre";

        // Mostrar formulario de comentario
        formulario.style.display = "block";
        formulario.querySelector("h2").innerText = "¿Querés dejarnos un comentario?";
        formulario.querySelector("p").innerText = "Tu opinión nos ayuda a mejorar:";
        formulario.querySelector("form").innerHTML = `
      <textarea name="comentario" placeholder="Escribí tu comentario aquí" required></textarea>
      <button type="submit">Enviar comentario</button>
    `;

        // Manejar envío de comentario
        formulario.querySelector("form").addEventListener("submit", async (e) => {
            e.preventDefault();
            const comentario = e.target.comentario.value;

            try {
                await addDoc(collection(db, "comentarios"), {
                    email: emailGuardado,
                    nombre: nombre,
                    comentario: comentario,
                    fecha: serverTimestamp()
                });
                alert("¡Gracias por tu comentario!");
                e.target.reset();
            } catch (error) {
                console.error("Error al guardar el comentario: ", error);
                alert("Ocurrió un error al enviar tu comentario.");
            }
        });
    } else {
        formulario.style.display = "none";
    }
} else {
    formulario.style.display = "none";
}
