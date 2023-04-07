//Quelle https://www.youtube.com/watch?v=iE_6pQ3RlZU&t=199s&ab_channel=Codingflag
function togglePopupSubject() {
  document.getElementById("popup-1").classList.toggle("active");
  document.getElementById("popup-1").innerHTML = `<div class="overlay">
  <div class="content" id="popup-content">
    <div class="closeBtn" onclick="reload()">&times;</div>
    <h1>Fach hinzufügen</h1>
    <form class="subjectForm" onsubmit="addSubject()">
      <input type="text" placeholder="Fachname" id="subjectName"/>
      <input type="submit" value="Submit" />
    </form>
  </div>
</div>`;
}
