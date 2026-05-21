# Halal Tofu Vegan LP

業態: **Tofu Burger Ginza (Vegan · Halal · Gluten-Free)**
ドメイン: `tofu-vegan.halal-food-wagyu.com`
GA4測定ID: `G-MQYB0MXZZX`

Eleventy(11ty)製の静的サイト。1つのテンプレ + 店舗データから、全店舗ページを自動生成する。

## ⚠️ 画像フォルダ名は `tofu-image/`(この業態だけ)

- ✅ `tofu-vegan` → `src/tofu-image/`
- ✅ `steak`, `sandwich` → `src/assets/`
- ✅ `japanese-burger` → `src/image/`

## ディレクトリ

```
.
├── .eleventy.js              ← Eleventy設定(tofu-image/ をパススルー)
├── package.json
├── vercel.json               ← / → /tokyo/ginza-burger/ リダイレクト
├── src/
│   ├── _data/stores.js       ← 業態設定と店舗データ
│   ├── store.njk             ← 全店舗共通のページテンプレ
│   └── tofu-image/           ← 画像・動画(配信)
└── _site/                    ← ビルド成果物
```

## GA4の計測内容

すべてのイベントに `store_name`, `store_area`, `brand` を付与。

### カスタムイベント
- `reserve_click`: header, hero, store_info, final_cta, floating_fab, mobile_bar
- `tel_click`: hero, store_info, final_cta, mobile_bar
- `directions_click`: store_info, map_section, mobile_bar

## UTM付きURL

**Googleマップのプロフィール用:**
```
https://tofu-vegan.halal-food-wagyu.com/tokyo/ginza-burger/?utm_source=google-maps-hp&utm_medium=organic&utm_campaign=profile
```

**Google広告のウェブサイトボタン用:**
```
https://tofu-vegan.halal-food-wagyu.com/tokyo/ginza-burger/?utm_source=google-ads-website&utm_medium=cpc&utm_campaign=store
```
