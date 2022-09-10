FROM node:16.10-slim

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
    && curl "https://awscli.amazonaws.com/awscli-exe-linux-aarch64.zip" -o "awscliv2.zip" \
    && unzip awscliv2.zip \
    && ./aws/install

COPY docker/dev.entrypoint.sh /usr/local/bin

COPY docker/wait-for-it.sh /usr/local/bin

RUN chmod +x /usr/local/bin/dev.entrypoint.sh \
    && chmod +x /usr/local/bin/wait-for-it.sh \
    && npm install -g npm \
    && npm install -g pm2 \
    && npm install -g ts-node \
    && npm install -g npm-check-updates \
    && npm install -g @nestjs/cli

ENTRYPOINT ["/usr/local/bin/dev.entrypoint.sh"]
