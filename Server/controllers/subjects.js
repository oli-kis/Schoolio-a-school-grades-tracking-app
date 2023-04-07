//Inspired by: https://www.youtube.com/watch?v=l8WPWK9mS5M

import { v4 as uuidv4 } from "uuid";

let subjects = [
  {
    name: "Mathematik",
    className: "mathe",
    testname: ["Quadratische Funktionen", "Diagramme"],
    noten: [4, 3, 5],
    durchschnitt: 4,
    id: "0",
  },
  {
    name: "Deutsch",
    className: "deutsch",
    testname: ["Grammatik", "Buch"],
    noten: [2, 4],
    durchschnitt: 4,
    id: "1",
  },
  {
    name: "Englisch",
    className: "englisch",
    testname: ["Gerund", "Past Tense"],
    noten: [6, 3, 4],
    durchschnitt: 4,
    id: "2",
  },
  {
    name: "Naturwissenschaften",
    className: "naturwissenschaften",
    testname: ["Erde", "Universum"],
    noten: [4, 3],
    durchschnitt: 4,
    id: "3",
  },
  {
    name: "Französisch",
    className: "französisch",
    testname: ["Subjonctif", "Orale"],
    noten: [5, 3],
    durchschnitt: 4,
    id: "4",
  },
  {
    name: "Sport",
    className: "sport",
    testname: ["Rondat", "Basketball"],
    noten: [5, 3],
    durchschnitt: 4,
    id: "5",
  },
];

export const createSubject = (req, res) => {
  const subject = req.body;
  const subjectId = uuidv4();

  const subjectWithId = { ...subject, id: subjectId };

  subjects.push(subjectWithId);

  res.send(`Subject ${subject.name} has been added`);
};

export const getSubject = (req, res) => {
  const { id } = req.params;

  const foundSubject = subjects.find((subject) => subject.id === id);

  res.send(foundSubject);
};

export const deleteSubject = (req, res) => {
  const { id } = req.params;

  subjects = subjects.filter((subject) => subject.id !== id);

  res.send(`Subject with the id ${id} has been deleted`);
};

export const changeSubject = (req, res) => {
  const { id } = req.params;
  const { name, noten, color } = req.body;

  const subject = subjects.find((subject) => subject.id === id);

  if (name) {
    subject.name = name;
  }
  if (noten) {
    subject.noten = noten;
  }
  if (color) {
    subject.color = color;
  }

  res.send(`Subject with the Id ${id} has been updated`);
};

export const getSubjects = (req, res, next) => {
  console.log(subjects);
  res.send(subjects);
};
