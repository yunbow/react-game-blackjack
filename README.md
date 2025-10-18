# ブラックジャック (TypeScript + React + Storybook)

React 18とTypeScriptで構築されたブラックジャックゲームです。機能別のモジュラーアーキテクチャを採用しています。

## デモプレイ
https://yunbow.github.io/react-game-blackjack/demo/

## 主要機能

### 操作方法
- **ベット**: 金額を入力してベットボタンでゲーム開始
- **ヒット**: カードを1枚追加
- **スタンド**: プレイヤーターン終了
- **ダブルダウン**: ベット額を2倍にしてカード1枚追加後スタンド
- **新しいゲーム**: チップを1000にリセット

### ゲームルール
- **ブラックジャック**: 21で勝利時は2.5倍配当
- **通常勝利**: 2倍配当
- **プッシュ**: 引き分け時はベット額返還
- **ディーラー**: 17以上でスタンド
- **ダブルダウン**: 初期2枚時のみ可能

### ゲーム機能
- カード配布とゲーム進行
- プレイヤーのアクション（ヒット、スタンド、ダブルダウン）
- ディーラーの自動プレイ
- 勝敗判定と配当計算
- チップ管理システム

## 技術スタック

- **React 18** - UIライブラリ
- **TypeScript** - プログラミング言語
- **Storybook 7** - コンポーネント開発・ドキュメント
- **CSS Modules** - スタイリング
- **Vite** - ビルドツール

## プロジェクト構造

```
src/
├── features/                   # 機能別モジュール
│   └── blackjack/              # ブラックジャック機能
│       ├── components/         # 機能専用コンポーネント
│       │   ├── BetArea/        # ベット入力エリア
│       │   ├── Card/           # トランプカード
│       │   ├── CardHand/       # カード手札表示
│       │   ├── GameControls/   # ゲーム操作ボタン群
│       │   ├── GameInfo/       # チップ・ベット情報
│       │   └── PlayerArea/     # プレイヤー/ディーラーエリア
│       ├── BlackjackGame/      # 機能ルートコンポーネント
│       ├── useBlackjackGame.ts # ゲーム管理フック
│       ├── gameLogic.ts        # ゲーム計算ロジック
│       └── types.ts            # 機能固有の型定義
├── components/                 # 共通UIコンポーネント
│   ├── Button/                 # 操作ボタン
│   ├── Input/                  # 入力フィールド
│   └── Text/                   # テキスト表示
├── stories/                    # Storybook用ストーリー
├── Config.ts                   # 設定値
├── App.tsx                     # メインアプリ
└── main.tsx                    # エントリーポイント
```

## スクリプト

```bash
# セットアップ
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview

# Storybook起動
npm run storybook

# Storybook ビルド
npm run build-storybook
```

## ライセンス

MIT License