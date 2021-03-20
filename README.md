# investment-support-api-for-express

![logo](./brand/express.jpg "ロゴ")

## 環境構築

> 必要なツール

- docker
- docker-compose

&nbsp;

> 開発環境の立ち上げ手順

① .envファイルを作成（開発用）
```bash
DATABASE_HOST=mysql
DATABASE_PORT=3306
DATABASE_NAME=sample_db
DATABASE_USER=user
DATABASE_PASSWORD=password
```

② dockerを起動
```bash
docker-compose build --no-cache

docker-compose up -d
```

&nbsp;

> テストの実行

コンテナの中で下記のコマンドを入力

```bash
npx jest
```
