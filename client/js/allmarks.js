const content = document.getElementById("allmarksContainer");

fetch("http://localhost:5000/subject/", {
  headers: {
    "content-type": "application/json",
    credentials: "same-origin",
  },
})
  .then((response) => response.json())
  .then((json) => {
    json.forEach((element) => {
      const div = document.createElement("div");
      div.classList.add("grid-item-allmarks");
      div.classList.add(element.className);
      content.appendChild(div);

      const subject = document.createElement("div");
      subject.classList.add("allmarks-subject");
      subject.textContent = element.name + ":";
      div.appendChild(subject);

      const marks = document.createElement("div");
      marks.classList.add("allmarks-mark");
      div.appendChild(marks);
      data = element.noten;
      data.forEach((element) => {
        let i = 0;
        marks.append(element);
        marks.append(document.createElement("br"));
        i++;
      });
    });
  })
  .then(() => {
    GesamtschnittBerechnen();

    let overallSchnitt = document.createElement("span");
    overallSchnitt.classList.add("overallSchnitt");
    overallSchnitt.textContent =
      "Gesamtdurchschnitt: " + localStorage.getItem("Gesamtschnitt");
    content.appendChild(overallSchnitt);
  });

function GesamtschnittBerechnen() {
  let allMarks = [];
  fetch("http://localhost:5000/subject/", {
    headers: { "content-type": "application/json", credentials: "same-origin" },
  })
    .then((response) => response.json())
    .then((data) => {
      allsubjects = data;
    })
    .then(() => {
      for (let i = 0; i < allsubjects.length; i++) {
        for (let x = 0; x < allsubjects[i].noten.length; x++) {
          allMarks.push(parseFloat(allsubjects[i].noten[x]));
        }
      }
    })
    .then(() => {
      return BerechneSchnittVonArray(allMarks);
    });
}

function BerechneSchnittVonArray(noten) {
  let schnitt = 0;
  for (let x = 0; x < noten.length; x++) {
    schnitt += noten[x];
  }
  schnitt = schnitt / noten.length;
  schnitt = schnitt.toFixed(2);
  localStorage.setItem("Gesamtschnitt", schnitt);
}
