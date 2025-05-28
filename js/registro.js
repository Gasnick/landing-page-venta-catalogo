import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

// Tu config copiada del paso anterior
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

document.getElementById("formRegistro").addEventListener("submit", async function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const email = document.getElementById("email").value.trim();
    const interes = document.getElementById("interes").value;
    const promociones = document.querySelector("input[name='promociones']").checked;

    try {
        const docRef = await addDoc(collection(db, "clientes"), {
            nombre,
            telefono,
            email,
            interes,
            promociones,
            fecha: new Date().toISOString()
        });

        //Para enviar los mails con EMAILJS
        await emailjs.send("service_ejbz0ot", "template_19ts187", {
            nombre,
            telefono,
            email,
            interes,
            promociones: promociones ? "Sí" : "No"
        });

        alert("¡Registro exitoso!");
        document.getElementById("formRegistro").reset();
        document.getElementById('modalRegistro').style.display = 'none';
    } catch (error) {
        console.error("Error al guardar:", error);
        alert("Ocurrió un error al guardar el registro.");
    }
});

