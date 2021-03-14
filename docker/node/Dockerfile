FROM node:15.11.0

WORKDIR /var/www

COPY entrypoint.sh /

RUN chmod +x /entrypoint.sh \
    && npm install -g npm \
    && npm install -g pm2

EXPOSE 3000

ENTRYPOINT ["/entrypoint.sh"]
