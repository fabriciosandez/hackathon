require("dotenv").config();

const knex = require("knex");
const db = knex({
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    port: 5432,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
  searchPath: ["knex", "public"],
});

console.log(process.env.DB_HOST);

exports.verTodos = (req, res, next) => {
  db.select("*")
    .from("egresados")
    .orderBy("id")
    .then((r) => {
      if (r.length < 1) {
        res
          .status(500)
          .json({ msg: "Hubo un problema con la base de datos!!" });
      }
      res.status(200).json(r);
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ msg: "Hubo un problema con la base de datos", err });
    })
    .finally(() => {
      next();
    });
};

exports.verUno = (req, res, next) => {
  const id = req.params.id;

  db.select("*")
    .from("egresados")
    .where("id", id)
    .then((r) => {
      if (r.length < 1) {
        res.status(404).json({ msg: "Not Found" });
      }
      res.status(200).json(r[0]);
    })
    .catch((err) => {
      res.status(500).json({ msg: "Hubo un problema con la base de datos" });
    })
    .finally(() => {
      next();
    });
};

exports.agregar = (req, res, next) => {
  const newCand = req.body;
  if (
    //mandar a una funcion
    !newCand.nombre ||
    !newCand.pais ||
    !newCand.img ||
    !newCand.titulo ||
    !newCand.egreso ||
    !newCand.mail
  ) {
    res.status(400).json({ msg: "Bad Request" });
  } else {
    db("egresados")
      .insert({
        nombre: newCand.nombre,
        pais: newCand.pais,
        img: newCand.img,
        titulo: newCand.titulo,
        egreso: newCand.egreso,
        cv: "Curriculum",
        mail: newCand.mail,
        github: newCand.github,
        linkedin: newCand.linkedin,
        proyectos: newCand.proyectos,
      })
      .then((r) => {
        res.status(201).json({ msg: "Created" });
      })
      .catch((err) => {
        res.status(500).json(err);
      })
      .finally(() => {
        next();
      });
  }
};
