let topData = document.getElementById("topdata");
let eNombre = document.getElementById("eNombre");
let ePais = document.getElementById("ePais");
let eTitulo = document.getElementById("eTitulo");
let eEgreso = document.getElementById("eEgreso");
let eDestacado = document.getElementById("eDestacado");
let imgDestacado = document.getElementById("imgDestacado");
let eMail = document.getElementById("eMail");
let eGithub = document.getElementById("eGithub");
let eLinkedin = document.getElementById("eLinkedin");
let heart = document.getElementById("heart");
let datos = {
  nombre: "",
  pais: "",
  titulo: "",
  egreso: "",
  destacado: false,
  mail: "",
  github: "",
  linkedin: "",
};

document.body.onload = fetch("http://localhost:8080/candidatos/2", {
  method: "GET",
})
  .then((r) => {
    return r.json();
  })
  .then((rjson) => {
    cambiarDatos(rjson);
  })
  .catch((err) => console.log(err));

function cambiarDatos(data) {
  console.log(heart.src);
  eTitulo.innerHTML = data.titulo;
  eEgreso.innerHTML = `Egresado en ${data.egreso}`;
  eMail.innerHTML = data.mail;
  eGithub.innerHTML = data.github;
  eGithub.href = data.github;
  eLinkedin.innerHTML = data.linkedin;
  eLinkedin.href = data.linkedin;
  eNombre.innerHTML = data.nombre;
  ePais.innerHTML = data.pais;
  topData.style.backgroundImage = `url(${data.img})`;
  if (!data.destacado) {
    eDestacado.classList.toggle("desaparecer");
    imgDestacado.classList.toggle("desaparecer");
  }
}

function changeHeart() {
  if (
    heart.src ==
    "file:///C:/Users/Usuario/Documents/Senpai/hackaton/Frontend/Materiales/heart-bw.png"
  ) {
    heart.src = "../Materiales/heart-red.png";
  } else {
    heart.src = "../Materiales/heart-bw.png";
  }
}

heart.addEventListener("click", changeHeart);
