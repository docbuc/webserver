# webserver/apache/debian

```bash
$ docker build -t docbuc/apache-debian .
$ docker run -d -P --name apache-debian docbuc/apache-debian
$ docker port apache-debian

  80/tcp -> 0.0.0.0:32772 
```

Jetzt http://0.0.0.0:32772/ im Browser öffnen.
