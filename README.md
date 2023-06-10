# Web-Komponente "Hallo Name" mit stencil.js #

<br>

Diese Web-Komponente wurde mit [stencil.js](https://stenciljs.com/) erstellt,
dem Compiler für Web-Komponenten von [Ionic](ionicframework.com/).

<br>

----

## Demo via GitHub Pages ##

<br>

Im [docs/](docs)-Ordner dieses Repos befindet sich eine einfache HTML-Datei, die die kompilierte Komponente
verwendet. Diese Seite wird über [GitHub Pages](https://pages.github.com/) unter der folgenden URL bereitgestellt:

https://mdecker-mobilecomputing.github.io/WebComponent_HalloName/

<br>

Wenn das Komponente mit `npm run build` neu kompiliert wurde, dann muss der Ordner `dist/` mit dem neuen
Kompilat in den `docs/`-Ordner kopiert werden.

<br>

----

## Befehle ##

<br>

Kleinen Web-Server mit Testseite, der Komponente enthält, starten:
```
npm start
```

<br>

Komponente kompilieren (inkl. Erzeugung Doku):
```
npm run build
```
Das Kompilat wird im Verzeichnis `dist/` abgelegt, die Doku in Form der Datei `readme.me`
im Ordner mit dem Quellcode der Komponente, also
[`src/components/hallo-name/readme.md`](src/components/hallo-name/readme.md).

<br>

Weitere Komponente hinzufügen:
```
npx stencil generate noch-eine-komponente
```

<br>

----

## License ##

<br>

See the [LICENSE file](LICENSE.md) for license rights and limitations (BSD 3-Clause License) for the files in this repository.

<br>

