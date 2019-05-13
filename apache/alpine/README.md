# webserver/apache/alpine

```bash
$ docker build -t docbuc/apache-alpine .
$ docker run -d -P --name apache-alpine docbuc/apache-alpine
$ docker port apache-alpine

  80/tcp -> 0.0.0.0:32769
```

Jetzt http://0.0.0.0:32769/ im Browser öffnen.
