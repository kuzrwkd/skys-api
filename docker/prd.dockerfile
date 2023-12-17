FROM node:20.10.0-slim

WORKDIR /var/www

RUN apt-get update \
    && apt-get install -y \
    locales \
    locales-all

RUN update-locale LANG=ja_JP.UTF-8

ENV LANG ja_JP.UTF-8

RUN apt-get update \
    && apt-get install -y \
    libssl-dev \
    procps

# Install AWS CLI

RUN apt-get update \
    && apt-get install -y \
    curl unzip less \
    && curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" \
    && unzip awscliv2.zip \
    && ./aws/install

COPY docker/prd.entrypoint.sh /usr/local/bin

COPY docker/wait-for-it.sh /usr/local/bin

RUN chmod +x /usr/local/bin/prd.entrypoint.sh \
    && chmod +x /usr/local/bin/wait-for-it.sh

ENTRYPOINT ["/usr/local/bin/prd.entrypoint.sh"]
