const express = require('express');

const app = express();

const teams = [
  {
    id: 1,
    name: 'São Paulo Futebol Clube',
    initials: 'SPF',
  },
  {
    id: 2,
    name: 'Clube Atlético Mineiro',
    initials: 'CAM',
  },
];

app.use(express.json());

app.get('/teams', (req, res) => {
  res.status(200).json({ teams });
});

app.post('/teams', (req, res) => {
  const newTeam = { ...req.body };
  teams.push(newTeam);
  res.status(201).json({ team: newTeam });
});

app.put('/teams/:id', (req, res) => {
  const { id } = req.params;
  const { name, initials } = req.body;

  const update = teams.find((team) => team.id === Number(id));

  if (!update) {
    return res.status(404).json({ message: 'Team Not Found' });
  }
  update.name = name;
  update.initials = initials;
  res.status(200).json({ update });
});

app.delete('/teams/:id', (req, res) => {
  const { id } = req.params;
  
  const delet = teams.findIndex((team) => team.id === Number(id));

  teams.splice(delet, 1);

  res.status(200).end();
});

module.exports = app;
