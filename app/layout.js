import "./globals.css";

const siteUrl = "https://santokurokumi-sapporo.vercel.app";
const title = "三徳六味｜札幌・円山の日本料理・割烹｜完全予約制";
const description =
  "札幌・円山公園の日本料理店、三徳六味（サントクロクミ）。北海道と全国の旬の食材、出汁、土鍋ご飯を軸にした完全予約制の割烹です。円山公園駅4番出口から徒歩7分。コース、予約、営業時間、個室、アクセスをご案内します。";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName: "三徳六味",
    title,
    description:
      "北海道と全国の旬を、出汁とともに。札幌・円山公園の完全予約制の日本料理・割烹。",
    images: [
      {
        url: "/images/claypot-rice.jpg",
        width: 1477,
        height: 1108,
        alt: "札幌・円山の日本料理店 三徳六味の季節の土鍋ご飯",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: "札幌・円山公園の完全予約制の日本料理・割烹。",
    images: ["/images/claypot-rice.jpg"],
  },
  robots: { index: true, follow: true },
  verification: {
    google: "ayHXvvh7MAYyEd0yabm5xYrI98qeN_1bfcLkvUPkbrM",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
