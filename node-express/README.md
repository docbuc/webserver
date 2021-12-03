# Node.js mit Express

Da das `node-sass-middleware`-Modul mit Node.js 16 nicht korrekt funktioniert
haben wir das Beispiel gegenüber der 3. Auflage im Buch leicht abgewandelt und
verwenden jetzt den Express-Generator ohne Sass-Stylesheets (siehe auch [Errata
3. Auflage](https://kofler.info/buecher/docker/errata3/)).

Der Skript-Aufruf auf Seite 202 im Buch ändert sich von

```bash
# alt:
docker compose run -u $UID dev express --view hbs --css sass
```

auf

```bash
# neu
docker compose run -u $UID dev express --view hbs
```

Dadurch verändern sich die Dateien im `src/`-Ordner.
