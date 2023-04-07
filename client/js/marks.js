const content = document.getElementById("container");
let addbtnid = 0;
let deletebtnid = 0;
let inputid = 0;

fetch("http://localhost:5000/subject/", {
  headers: {
    "content-type": "application/json",
    credentials: "same-origin",
  },
})
  .then((response) => response.json())
  .then((json) => {
    json.forEach((element) => {
      let div = document.createElement("div");
      div.classList.add("grid-item-index");
      div.classList.add(element.className);
      content.appendChild(div);

      let subject = document.createElement("div");
      div.appendChild(subject);
      let iconBook = document.createElement("i");
      iconBook.classList.add("fa-solid");
      iconBook.classList.add("fa-book");
      subject.appendChild(iconBook);

      let name = document.createElement("span");
      name.textContent = element.name;
      subject.appendChild(name);

      let average = document.createElement("div");
      div.appendChild(average);
      let iconGauge = document.createElement("i");
      iconGauge.classList.add("fa-solid");
      iconGauge.classList.add("fa-gauge");
      average.appendChild(iconGauge);

      let averageNumber = document.createElement("span");
      FachSchnittBerechnen(element.id);
      averageNumber.textContent = localStorage.getItem(element.id);
      average.appendChild(averageNumber);

      let rowadd = document.createElement("div");
      rowadd.classList.add("row");
      div.appendChild(rowadd);

      let add = document.createElement("button");
      add.classList.add("detailBtn");
      add.textContent = "hinzufügen";
      add.id = addbtnid;
      add.addEventListener("click", function () {
        fetch("http://localhost:5000/subject/")
          .then((response) => response.json())
          .then((data) => {
            input = data;

            console.log(input[add.id]);
            let neueNote = document.getElementById(inputadd.id).value;
            let alteNoten = input[add.id].noten;
            let noten = [];

            for (let i = 0; i < alteNoten.length; i++) {
              noten.push(alteNoten[i]);
            }

            noten.push(neueNote);

            fetch("http://localhost:5000/subject/" + input[add.id].id, {
              method: "PATCH",
              headers: {
                "content-type": "application/json",
                credentials: "same-origin",
              },
              body: JSON.stringify({
                noten: noten,
              }),
            });
            console.log(input[add.id].noten);
          });
      });
      rowadd.appendChild(add);

      let inputadd = document.createElement("select");
      inputadd.style.width = 50;
      inputadd.style.marginTop = 10;
      inputadd.id = "inputidadd" + inputid;
      let marks = 6;
      for (let i = 1; i <= marks; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.text = i;
        inputadd.appendChild(option);
      }
      rowadd.appendChild(inputadd);
      inputid++;

      addbtnid++;

      let rowdelete = document.createElement("div");
      rowdelete.classList.add("row");
      div.appendChild(rowdelete);

      let deleteOne = document.createElement("button");
      deleteOne.classList.add("detailBtn");
      deleteOne.id = deletebtnid;
      deleteOne.textContent = "löschen";
      deleteOne.addEventListener("click", function () {
        fetch("http://localhost:5000/subject/")
          .then((response) => response.json())
          .then((data) => {
            input = data;

            let löschenNote = document.getElementById(inputdelete.id).value;
            let alteNoten = input[deleteOne.id].noten;
            let noten = [];

            for (let i = 0; i < alteNoten.length; i++) {
              noten.push(alteNoten[i]);
            }

            noten.splice(löschenNote, 1);

            fetch("http://localhost:5000/subject/" + input[deleteOne.id].id, {
              method: "PATCH",
              headers: {
                "content-type": "application/json",
                credentials: "same-origin",
              },
              body: JSON.stringify({
                noten: noten,
              }),
            });
            console.log(input[deleteOne.id].noten);
          });
      });

      rowdelete.appendChild(deleteOne);

      let inputdelete = document.createElement("select");
      inputdelete.style.width = 50;
      inputdelete.style.marginTop = 10;
      inputdelete.id = "inputiddelete" + inputid;
      for (let i = 0; i < element.noten.length; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.text = element.noten[i];
        inputdelete.appendChild(option);
      }
      rowdelete.appendChild(inputdelete);
      inputid++;

      deletebtnid++;
    });
  });

function FachSchnittBerechnen(id) {
  let subjectMarks = [];
  fetch("http://localhost:5000/subject/" + id, {
    headers: { "content-type": "application/json", credentials: "same-origin" },
  })
    .then((response) => response.json())
    .then((json) => {
      subjectMarks = json.noten;
    })
    .then(() => {
      return BerechneSchnittVonArray(subjectMarks, id);
    });
}
function BerechneSchnittVonArray(noten, id) {
  let schnitt = 0;
  console.log("wichtig " + noten);
  for (let x = 0; x < noten.length; x++) {
    console.log("Schnitt " +schnitt);
    schnitt += parseFloat(noten[x]);
    console.log(schnitt + ":" + x);
  }
  schnitt = schnitt / noten.length;
  if (!schnitt) {
    schnitt = "keine Note";
  }
  schnitt = schnitt.toFixed(2);
  localStorage.setItem(id, schnitt);
  return schnitt;
}
