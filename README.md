# Vue 2 + Element UI + Vite 最小構成の調査

## 概要

Vue 2 と Element UI を使用した最小構成の TODO アプリケーションの実装調査

## 技術スタック

- Vue 2.5.22
- Element UI 2.11.1
- Vite 4.5.14
- vite-plugin-vue2 2.0.3

重要な注意点

- Vite 4.x は Vue 2 プロジェクトでも動作可能
  - Vite 5.x 以降は Vue3 での動作のみ
- `@vitejs/plugin-vue`は Vue 3 用のため、代わりに`vite-plugin-vue2`を使用
  - vite-plugin-vue2@2.0.3は Vite 4.x と互換性あり

## 実装のポイント

### Vite 設定

```javascript
// vite.config.js
import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";

// シンプルな設定のみ
export default defineConfig({
  plugins: [createVuePlugin()],
});
```

## 開発環境のセットアップ

1. 依存関係のインストール

```bash
npm install
```

2. 開発サーバーの起動

```bash
npm run dev
```

3. ビルド

```bash
npm run build
```

## 参考リンク

- [Vue 2 公式ドキュメント](https://v2.vuejs.org/)
- [Element UI 公式ドキュメント](https://element.eleme.io/#/en-US)
- [Vite 公式ドキュメント](https://vitejs.dev/)
