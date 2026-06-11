const express = require('express');
const app = express();


app.get("/jogos", (req, res) => {
  const jogos = [
      { id: 1, nome: "Minecraft", genero: "Sandbox", ano: 2011 },
      { id: 2, nome: "Elden Ring", genero: "RPG", ano: 2022 },
      { id: 3, nome: "RDR 2", genero: "Ação", ano: 2018 },
      { id: 4, nome: "Fortnite", genero: "Battle Royale", ano: 2017 },
      { id: 5, nome: "Tetris", genero: "Puzzle", ano: 1988},
      { id: 5, nome: "Super Mario Bros.", genero: "Aventura", ano: 1985}
   ];
  res.json(jogos);
});

app.use(
    express.static("exerciciojogos/public")
);

app.listen(3000);