# SKYS API

## npmパッケージのアップデート

kubernetesのコンテナに入り下記を実行

```
ncu
ncu -u
rm -rf node_modules
npm install
```

パッケージバーションなど依存関係のエラーが出た場合は下記で強制的にインストールもできる（動作保証はされない）

```
npm install --legacy-peer-deps
```