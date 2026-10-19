# イウテミ LP

React と Vite で作成した、スマートフォン向けのランディングページです。

## 最初の1回だけ

Node.js をインストールしたあと、このフォルダで次を実行します。

```bash
npm install
```

## 自分のMacで確認する

```bash
npm run dev
```

ターミナルに表示された `http://localhost:5173` をブラウザで開きます。

## 公開用データを作る

```bash
npm run build
```

`dist` フォルダに公開用ファイルが作られます。

## GitHub Pages で無料公開する

1. このフォルダを GitHub のリポジトリへ push します。
2. GitHub のリポジトリで `Settings` → `Pages` を開きます。
3. `Build and deployment` の Source を `GitHub Actions` にします。
4. `main` ブランチへの push 後、自動で公開されます。

## CTAリンクを変更する

CTAボタンは公式LINE（`https://line.me/R/ti/p/@768obrsu`）へ移動します。変更する場合は、`src/App.jsx` 内の `LINE_URL` を更新してください。
