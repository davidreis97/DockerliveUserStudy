FROM python:alpine

RUN adduser -S -D nonroot

ADD 10Mio.dat /

RUN chmod 000 10Mio.dat

RUN chown nonroot 10Mio.dat

USER nonroot