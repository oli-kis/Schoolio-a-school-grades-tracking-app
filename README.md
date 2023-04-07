# LA_1303

SCHOOLIO ist eine Website, auf der man seine Noten in den verschiedenen Fächern speichern, löschen und anzeigen kann. Man kann ausserdem selber Fächer hinzufügen und auch wieder löschen. Wenn man Noten hinzugefügt hat, wird für jedes einzelne Fach der Schnitt berechnet und auch der gesamte Notenschnitt über alle Fächer.

Sobald man SCHOOLIO startet, wird einem die Seite mit den einzelnen Fächern und Noten angezeigt. Dort kann man dann eine neue Note hinzufügen (im Moment kann man nur ganze Noten hinzufügen). Sobald man eine Note ausgewählt hat und auf hinzufügen drückt, wird mit einem Fetch-Befehl und der Methode «PATCH» eine Anfrage an die API geschickt, welche die Note speichert. Genau gleich funktioniert dies beim Noten löschen und dem Hinzufügen und Löschen von Fächern. Auf der Startseite wird einem zudem der Schnitt vom jeweiligen Fach berechnet. Dies funktioniert, indem mit einem Fetch-Befehl alle Noten von jedem Fach geholt werden, zusammengerechnet werden und danach durch die Anzahl Noten geteilt wird. 

Auf der Seite «Fächer» kann man alle Fächer sehen, Fächer hinzufügen und auch wieder löschen, wie vorher erklärt.

Auf der Seite «alle Noten» werden alle Noten der jeweiligen Fächer in einer Liste aufgelistet. Im Übrigen wird dort auch der Gesamtdurchschnitt berechnet, indem alle Noten von allen Fächern summiert werden und dann durch die Anzahl Noten geteilt wird.

![Schoolio Display](https://github.com/oli-kis/olikis-images/blob/oli-kis/874shots_so.png)

## Schoolio korrekt in Betrieb nehmen

Um Schoolio korrekt in Betrieb zu nehmen, laden Sie bitte zuerst das Repository als ZIP-File herunter und öffnen es dann vorzugsweise mit Visual Studio Code.
Sobald Sie dies getan haben können Sie das Terminal öffnen und folgende Zeile Code eingeben:

```
cd Server
```
So wechseln Sie zuerst in das korrekte Verzeichnis, danach führen Sie folgende Zeile aus:

```
npm install
```

Dieser Befehl wird alle benötigten Module und Dateien herunterladen um das Projekt zu starten.
Um den Server an sich zu starten führen Sie zum Schluss noch folgende Zeile Code aus:

```
node index.js
```

Nun können Sie die Website mit ihren Fuktionalitäten zum Beispiel mit dem Live Server Plugin im Browser aufrufen.

![Schoolio Display](https://github.com/oli-kis/olikis-images/blob/oli-kis/0shots_so.png)
