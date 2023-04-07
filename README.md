# LA_1303

SCHOOLIO ist eine Website, auf der man seine Noten in den verschiedenen Fächern speichern, löschen und anzeigen kann. Man kann ausserdem selber Fächer hinzufügen und auch wieder löschen. Wenn man Noten hinzugefügt hat, wird für jedes einzelne Fach der Schnitt berechnet und auch der gesamte Notenschnitt über alle Fächer.

Sobald man SCHOOLIO startet, wird einem die Seite mit den einzelnen Fächern und Noten angezeigt. Dort kann man dann eine neue Note hinzufügen (im Moment kann man nur ganze Noten hinzufügen). Sobald man eine Note ausgewählt hat und auf hinzufügen drückt, wird mit einem Fetch-Befehl und der Methode «PATCH» eine Anfrage an die API geschickt, welche die Note speichert. Genau gleich funktioniert dies beim Noten löschen und dem Hinzufügen und Löschen von Fächern. Auf der Startseite wird einem zudem der Schnitt vom jeweiligen Fach berechnet. Dies funktioniert, indem mit einem Fetch-Befehl alle Noten von jedem Fach geholt werden, zusammengerechnet werden und danach durch die Anzahl Noten geteilt wird. 

Auf der Seite «Fächer» kann man alle Fächer sehen, Fächer hinzufügen und auch wieder löschen, wie vorher erklärt.

Auf der Seite «alle Noten» werden alle Noten der jeweiligen Fächer in einer Liste aufgelistet. Im Übrigen wird dort auch der Gesamtdurchschnitt berechnet, indem alle Noten von allen Fächern summiert werden und dann durch die Anzahl Noten geteilt wird.

![Schoolio Display](http://url/to/img.png)
