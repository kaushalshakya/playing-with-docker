FROM ubuntu

RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_20.x -o /tmp/nodesource_setup.sh
RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get install -y nodejs

COPY package.json package.json
