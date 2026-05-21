/**
 * 店舗データ定義(tofu-vegan業態)
 * 新しい店舗を追加するときは、この配列に store オブジェクトを追加するだけ。
 * Eleventy が自動で /{region}/{slug}/index.html を生成します。
 */
module.exports = {
  brand: {
    domain: "tofu-vegan.halal-food-wagyu.com",
    ga4_id: "G-MQYB0MXZZX",
    brand_name: "Tofu Burger Ginza",
    brand_slug: "tofu-vegan"
  },

  stores: [
    {
      // ===== URL/識別 =====
      region: "tokyo",
      slug: "ginza-burger",

      // ===== 店名 =====
      name_full_en: "Tofu Burger Ginza 豆腐バーガー銀座",
      name_short: "Tofu Burger Ginza",
      name_jp: "豆腐バーガー 銀座",

      // ===== 立地 =====
      city: "Ginza, Tokyo",
      station_en: "Ginza Station",
      address_en: "B1, Stage Ginza, 7-13-1 Ginza, Chuo City, Tokyo",
      address_postal: "104-0061",

      // ===== 連絡先 =====
      tel_display: "080-1438-4377",
      tel_raw: "+818014384377",

      // ===== 営業 =====
      hours: "11:00 – 23:00",
      hours_note: "Open Daily",

      // ===== 予約・地図 =====
      tablecheck_url: "https://www.tablecheck.com/shops/halal-wagyu-ginza-tofu-5w-tokyo/reserve",
      maps_link: "https://maps.app.goo.gl/XyVYHaEXX74ewo3f9",

      // ===== 評価 =====
      rating: "4.8",
      rating_count: "2,500+",
      rating_source: "Google reviews",

      // ===== 席数 =====
      seats: "22"
    }

    // ===== 2店舗目を追加するときはこの下にもう1つ { ... } を書くだけ =====
  ]
};
