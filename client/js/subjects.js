const content = document.getElementById("grid");

fetch("http://localhost:5000/subject/", {
  headers: {
    "content-type": "application/json",
    credentials: "same-origin",
  },
})
  .then((response) => response.json())
  .then((json) => {
    json.forEach((element) => {
      var div = document.createElement("div");
      div.classList.add("grid-item");
      div.classList.add(element.className);
      content.appendChild(div);
      div.textContent = element.name;
      var icon = document.createElement("i");
      icon.classList.add("fa-solid");
      icon.classList.add("fa-trash");
      icon.id = element.id;

      icon.addEventListener("click", function () {
        console.log("test");
        fetch("http://localhost:5000/subject/" + this.id, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
            credentials: "same-origin",
          },
        }).then(() => location.reload());
      });
      div.appendChild(icon);
    });
  });

function addSubject() {
  var subjectName = document.getElementById("subjectName").value;
  console.log("hallo");
  fetch("http://localhost:5000/subject/post", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      credentials: "same-origin",
    },
    body: JSON.stringify({
      name: subjectName,
      className: "andere",
      noten: [],
      durschnitt: "",
    }),
  })
    .then((response) => response.json())
    .then((json) => {
      json.forEach((element) => {
        var div = document.createElement("div");
        div.classList.add("grid-item");
        div.classList.add(element.className);
        content.appendChild(div);
        div.textContent = element.name;
        var icon = document.createElement("i");
        icon.classList.add("fa-solid");
        icon.classList.add("fa-trash");
        div.appendChild(icon);
      });
    });
}

function reload() {
  location.reload();
}
