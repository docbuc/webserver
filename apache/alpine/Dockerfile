# Datei: webserver/apache/alpine/Dockerfile (docbuc/apache:alpine)
FROM alpine:3.10

RUN apk --no-cache add apache2 apache2-utils
RUN mkdir -p /run/apache2
EXPOSE 80
CMD ["/usr/sbin/httpd", "-DFOREGROUND"]
