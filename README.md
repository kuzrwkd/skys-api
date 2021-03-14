# investment-support-api-for-express

![logo](./brand/express.jpg "ロゴ")

## 環境構築

> 必要なツール

- docker
- docker-compose

&nbsp;

> 環境の立ち上げ手順

```bash
docker-compose build --no-cache

docker-compose up -d

docker-compose exec apiserver sh

npx tsc -w
```

&nbsp;

> テストの実行

コンテナの中で下記のコマンドを入力

```bash
npx jest
```
