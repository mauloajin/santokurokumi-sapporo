const siteUrl = "https://santokurokumi-sapporo.vercel.app";
const storeName = "三徳六味";
const romanizedName = "Santokurokumi";
const phone = "090-1380-2131";
const address = "北海道札幌市中央区南4条西23丁目1-36";
const officialUrl = "https://santokurokumi.gorp.jp/";
const reserveUrl = "https://www.tablecheck.com/ja/shops/santokurokumi/reserve";
const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "三徳六味 北海道札幌市中央区南4条西23丁目1-36",
)}`;
const gurunaviUrl = "https://r.gnavi.co.jp/h649000/";
const tabelogUrl = "https://tabelog.com/hokkaido/A0101/A010105/1008271/";

const faqs = [
  {
    q: "三徳六味はどこにありますか？",
    a: `${address}にあります。札幌市営地下鉄東西線・円山公園駅4番出口から徒歩7分です。`,
  },
  {
    q: "営業時間と定休日は？",
    a: "営業時間は18:00からで、最終入店は20:00です。定休日は日曜日・祝日です。",
  },
  {
    q: "予約は必要ですか？",
    a: "完全予約制です。TableCheckのオンライン予約、または電話でご予約ください。InstagramのDMでは予約・問い合わせを受け付けていません。",
  },
  {
    q: "どのような料理を楽しめますか？",
    a: "北海道と全国各地の旬の食材を取り入れ、出汁を軸に組み立てる日本料理のコースです。先附、お椀、お造里、焼物、主菜、食事、水菓子など、季節に合わせた献立で構成されます。",
  },
  {
    q: "コースの料金は？",
    a: "極コースと北海道コースは各24,200円（税込）で、別途サービス料10％です。仕入れや予約時期により内容が変わるため、予約画面で最新情報をご確認ください。",
  },
  {
    q: "個室やカウンター席はありますか？",
    a: "カウンター6席と個室2室があります。個室の利用人数や条件は、予約時にご確認ください。",
  },
  {
    q: "駐車場はありますか？",
    a: "予約制の専用駐車場が1台分あります。利用を希望する場合は、必ず予約時に店舗へお伝えください。",
  },
  {
    q: "子どもと一緒に利用できますか？",
    a: "大人と同じ料理を召し上がれるお子様のみ予約できます。予約前に条件をご確認ください。",
  },
  {
    q: "アレルギー、ベジタリアン、ヴィーガン、ハラルには対応していますか？",
    a: "重度または複数のアレルギー、ベジタリアン、ヴィーガン、ハラルには対応していません。アレルギー食材は予約時に申告してください。",
  },
  {
    q: "InstagramのDMで予約や問い合わせはできますか？",
    a: "InstagramのDMでは予約・問い合わせを受け付けていません。TableCheckまたは電話をご利用ください。",
  },
  {
    q: "Can I reserve Santokurokumi online?",
    a: "Yes. Santokurokumi is a reservation-only Japanese restaurant. Use TableCheck or call +81-90-1380-2131. It is a seven-minute walk from Maruyama Koen Station Exit 4.",
  },
];

const areasJa = [
  "三徳六味", "三徳六味 札幌", "三徳六味 円山", "さんとくろくみ", "サントクロクミ",
  "札幌", "札幌市", "札幌市中央区", "円山", "円山公園", "円山公園駅", "裏参道",
  "南4条西23丁目", "西18丁目", "西18丁目駅", "西28丁目", "北海道", "北海道札幌",
  "裏参道エリア", "北海道神宮周辺", "札幌円山エリア", "円山公園駅4番出口",
];
const intentsJa = [
  "日本料理", "和食", "割烹料理", "懐石料理", "会席料理", "完全予約制", "ディナー",
  "おまかせコース", "極コース", "北海道コース", "旬の食材", "北海道食材", "全国の食材",
  "出汁", "お椀", "お造里", "焼物", "土鍋ご飯", "季節の料理", "すっぽん料理",
  "日本酒", "ワイン", "カウンター席", "完全個室", "個室予約", "貸切", "禁煙",
  "駐車場", "電話予約", "オンライン予約", "TableCheck予約", "営業時間", "定休日",
  "アクセス", "円山公園駅から徒歩7分", "コース料金", "サービス料", "子ども利用",
  "英語メニュー", "記念日の食事", "会食", "食事会", "札幌旅行の夕食",
];
const relatedJa = areasJa.flatMap((area) => intentsJa.map((intent) => `${area} ${intent}`));

const areasEn = [
  "Santokurokumi", "Santoku Rokumi", "Santokurokumi Sapporo", "Santokurokumi Maruyama",
  "Sapporo", "Sapporo City", "Chuo Ward Sapporo", "Maruyama", "Maruyama Koen",
  "Maruyama Koen Station", "near Maruyama Park", "near Maruyama Koen Station",
  "near Nishi 18 chome Station", "Hokkaido", "Sapporo Hokkaido", "Urasando Sapporo",
  "Minami 4 Nishi 23", "near Hokkaido Shrine", "Maruyama Sapporo dining",
];
const intentsEn = [
  "Japanese restaurant", "Japanese cuisine", "kappo restaurant", "kaiseki restaurant",
  "Japanese course dinner", "reservation only restaurant", "fine Japanese dining",
  "seasonal Japanese cuisine", "Hokkaido ingredients", "seasonal ingredients", "dashi cuisine",
  "wanmono soup", "sashimi course", "grilled seasonal fish", "clay pot rice", "donabe rice",
  "suppon cuisine", "Japanese sake", "wine pairing", "counter seating", "private dining room",
  "restaurant reservation", "online reservation", "TableCheck reservation", "phone reservation",
  "opening hours", "closed Sundays and holidays", "directions", "seven minute walk",
  "dinner in Sapporo", "dinner near Maruyama Park", "course price", "service charge",
  "non smoking restaurant", "parking reservation", "English menu", "special occasion dinner",
  "business dinner", "Hokkaido travel dinner", "Sapporo restaurant guide", "Japanese tasting menu",
];
const relatedEn = areasEn.flatMap((area) => intentsEn.map((intent) => `${area} ${intent}`));

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": `${siteUrl}/#restaurant`,
  name: storeName,
  alternateName: ["割烹 三徳六味", "サントクロクミ", romanizedName],
  url: siteUrl,
  image: [
    `${siteUrl}/images/claypot-rice.jpg`,
    `${siteUrl}/images/counter.jpg`,
    `${siteUrl}/images/exterior.jpg`,
    `${siteUrl}/images/abalone.jpg`,
  ],
  description:
    "札幌・円山公園で、北海道と全国の旬の食材を出汁を軸にしたコースで提供する完全予約制の日本料理・割烹。",
  telephone: "+81-90-1380-2131",
  address: {
    "@type": "PostalAddress",
    streetAddress: "南4条西23丁目1-36",
    addressLocality: "札幌市中央区",
    addressRegion: "北海道",
    addressCountry: "JP",
  },
  servesCuisine: ["日本料理", "割烹料理", "懐石・会席料理", "Japanese", "Kappo", "Kaiseki"],
  priceRange: "¥¥¥¥",
  acceptsReservations: reserveUrl,
  paymentAccepted: "VISA, MasterCard, JCB, American Express, Diners Club, UnionPay",
  smokingAllowed: false,
  hasMenu: `${gurunaviUrl}menu1/`,
  sameAs: [officialUrl, reserveUrl, gurunaviUrl, tabelogUrl, mapUrl],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function SectionTitle({ index, en, children, light = false }) {
  return (
    <div className={`section-title${light ? " light" : ""}`}>
      <span className="section-index">{index}</span>
      <p className="eyebrow">{en}</p>
      <h2>{children}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="三徳六味 トップ">
          <span className="brand-jp">三徳六味</span>
          <span className="brand-en">SANTOKUROKUMI · SAPPORO</span>
        </a>
        <nav aria-label="メインナビゲーション">
          <a href="#philosophy">三徳六味</a>
          <a href="#cuisine">料理</a>
          <a href="#course">コース</a>
          <a href="#space">店内</a>
          <a href="#access">アクセス</a>
          <a className="nav-reserve" href={reserveUrl} target="_blank" rel="noreferrer">
            ご予約 <Arrow />
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-image">
            <img
              src="/images/claypot-rice.jpg"
              alt="札幌・円山の日本料理店 三徳六味の炊きたて季節の土鍋ご飯"
              width="1477"
              height="1108"
              fetchPriority="high"
            />
          </div>
          <div className="hero-shade" />
          <div className="hero-copy">
            <p className="hero-kicker">札幌・円山公園　日本料理／割烹／懐石・会席</p>
            <h1 id="hero-title">
              <span>三徳六味</span>
              <small>SANTOKUROKUMI</small>
            </h1>
            <p className="hero-line">北海道の旬と、<br />出汁の余韻を一席に。</p>
            <p className="hero-lead">
              北海道と全国各地から選ぶ食材を、季節のコースに。<br />完全予約制の静かな割烹で、日本料理の時間をお楽しみください。
            </p>
            <div className="hero-actions">
              <a className="button button-gold" href={reserveUrl} target="_blank" rel="noreferrer">
                オンライン予約 <Arrow />
              </a>
              <a className="button button-line" href={`tel:${phone.replaceAll("-", "")}`}>電話 {phone}</a>
            </div>
            <div className="hero-facts" aria-label="店舗概要">
              <span>完全予約制</span>
              <span>18:00— / 最終入店20:00</span>
              <span>円山公園駅 徒歩7分</span>
            </div>
          </div>
          <a className="scroll-cue" href="#philosophy">SCROLL <span>↓</span></a>
        </section>

        <section className="philosophy section-paper" id="philosophy">
          <SectionTitle index="01" en="THE NAME & PHILOSOPHY">料理に、三つの徳と六つの味を。</SectionTitle>
          <div className="philosophy-grid">
            <div className="lead-copy">
              <p>
                「三徳六味」は、料理の姿と味わいに向き合う言葉。三徳は、やわらかく、清らかに、正しい手順で整えること。六味は、苦・酸・甘・辛・鹹の五味に、素材の持ち味を生かす「淡」を加えたものです。
              </p>
              <p>
                札幌・円山の三徳六味では、日本料理の要となる出汁を軸に、北海道と全国の旬を一皿ずつ組み立てます。華美に寄りかからず、食材が持つ香り、温度、食感、その時季だけの余韻を大切にしています。
              </p>
            </div>
            <div className="name-seal" aria-hidden="true">
              <span>三徳</span><i>×</i><span>六味</span>
              <small>FORM · METHOD · TASTE</small>
            </div>
          </div>
          <div className="virtue-grid">
            <article><span>一</span><h3>出汁</h3><p>料理の輪郭をつくる出汁を中心に、椀物から食事まで一席の流れを整えます。</p></article>
            <article><span>二</span><h3>旬</h3><p>店主が選ぶ北海道と全国の食材。季節と仕入れに合わせ、献立は移ろいます。</p></article>
            <article><span>三</span><h3>一客一亭</h3><p>6席のカウンターと完全個室。限られた席で、目の前の料理に向き合う時間を。</p></article>
          </div>
        </section>

        <section className="image-interlude">
          <img src="/images/abalone.jpg" alt="三徳六味の旬の海の幸を生かした日本料理" width="1477" height="1108" loading="lazy" />
          <div><p>SEASONAL INGREDIENTS</p><strong>北の海、山の恵み。<br />ひと皿ごとに、今を映す。</strong></div>
        </section>

        <section className="cuisine section-ink" id="cuisine">
          <SectionTitle index="02" en="CUISINE" light>出汁を芯に、季節を重ねる。</SectionTitle>
          <div className="cuisine-intro">
            <p>
              先附からお椀、お造里、焼物、主菜、土鍋で炊く食事、水菓子へ。日本料理の流れの中で、北海道らしい食材と関西料理の技法が出会います。内容は仕入れにより変わり、その日の食材に合わせて一皿ずつ仕上げます。
            </p>
          </div>
          <div className="editorial-grid">
            <article className="feature feature-large">
              <img src="/images/clear-soup.jpg" alt="三徳六味の出汁を味わう季節のお椀" width="1477" height="1108" loading="lazy" />
              <div><span>01 · WANMONO</span><h3>お椀</h3><p>香りが立つ瞬間までを料理に。旬の椀種と澄んだ出汁を、温度とともに届けます。</p></div>
            </article>
            <article className="feature">
              <img src="/images/grilled-abalone.jpg" alt="三徳六味の炭火で仕上げる旬の海の幸" width="1477" height="1108" loading="lazy" />
              <div><span>02 · CHARCOAL</span><h3>炭火・焼物</h3><p>炭の香りと火入れで、魚介や季節の素材が持つ旨みを引き出します。</p></div>
            </article>
            <article className="feature">
              <img src="/images/marunabe.jpg" alt="札幌 三徳六味の日本料理コースで供される丸鍋" width="1097" height="825" loading="lazy" />
              <div><span>03 · SIGNATURE</span><h3>丸鍋</h3><p>北海道ではまだ珍しい食材も取り入れ、関西で培った料理と北の旬を結びます。</p></div>
            </article>
            <article className="feature feature-wide">
              <img src="/images/uni-rice.jpg" alt="三徳六味の雲丹を使った季節の土鍋ご飯" width="1477" height="1108" loading="lazy" />
              <div><span>04 · DONABE</span><h3>炊きたての土鍋ご飯</h3><p>ひと組ごとに炊き上げる食事。季節の魚介や野菜を合わせ、蓋を開ける湯気から締めくくりが始まります。</p></div>
            </article>
          </div>
          <p className="season-note">写真は季節の料理例です。献立・食材は仕入れと季節により変わります。</p>
        </section>

        <section className="course section-paper" id="course">
          <SectionTitle index="03" en="COURSE">完全予約制のコース料理。</SectionTitle>
          <div className="course-lead">
            <p>一席は、先附・お凌ぎ・お椀・お造里・焼物・主菜・強肴・お食事・水菓子・お抹茶など、9〜10品を目安に構成されます。</p>
            <p>来店時間は18:00〜20:00。予約期限は2日前の20:00までと案内されています。</p>
          </div>
          <div className="course-cards">
            <article>
              <span>KIWAMI</span>
              <h3>極コース</h3>
              <p>全国から届く旬の厳選食材を用いた、9〜10品のコース。希望食材は予約時に相談できます。</p>
              <strong>お一人様　¥24,200 <small>税込・サービス料別</small></strong>
            </article>
            <article>
              <span>HOKKAIDO</span>
              <h3>北海道コース</h3>
              <p>北海道の旬の食材を中心に組み立てる9〜10品。道外・海外から訪れる方にも、北の季節を伝えるコースです。</p>
              <strong>お一人様　¥24,200 <small>税込・サービス料別</small></strong>
            </article>
          </div>
          <div className="course-details">
            <div><span>サービス料</span><strong>10%</strong></div>
            <div><span>受付人数</span><strong>2名様〜</strong></div>
            <div><span>ご入店</span><strong>18:00〜20:00</strong></div>
            <div><span>キャンセル</span><strong>24時間前以降 100%</strong></div>
          </div>
          <div className="center-actions">
            <a className="button button-dark" href={reserveUrl} target="_blank" rel="noreferrer">空席確認・オンライン予約 <Arrow /></a>
            <a className="text-link" href={`tel:${phone.replaceAll("-", "")}`}>電話で相談する {phone}</a>
          </div>
        </section>

        <section className="gallery section-sand" aria-labelledby="gallery-title">
          <div className="gallery-heading">
            <p className="eyebrow">SEASONAL GALLERY</p>
            <h2 id="gallery-title">季節を映す、器と料理。</h2>
          </div>
          <div className="gallery-grid">
            <figure className="g-tall"><img src="/images/kani-ikura.jpg" alt="三徳六味の蟹といくらを使った季節の一品" width="1477" height="1108" loading="lazy" /><figcaption>季節の一品</figcaption></figure>
            <figure><img src="/images/uni-somen.jpg" alt="三徳六味の雲丹をあしらった夏の料理" width="1477" height="1108" loading="lazy" /><figcaption>旬の海の幸</figcaption></figure>
            <figure><img src="/images/grilled-fish.jpg" alt="三徳六味の炭火で焼き上げた季節の魚" width="1477" height="1108" loading="lazy" /><figcaption>炭火の焼物</figcaption></figure>
            <figure className="g-wide"><img src="/images/wagyu-dish.jpg" alt="三徳六味の器に盛り付けた肉料理" width="1477" height="1108" loading="lazy" /><figcaption>一皿ごとのしつらえ</figcaption></figure>
            <figure><img src="/images/salmon-claypot-rice.jpg" alt="三徳六味の季節の魚を使った土鍋ご飯" width="1477" height="1108" loading="lazy" /><figcaption>季節の土鍋ご飯</figcaption></figure>
            <figure><img src="/images/sake-hakugakusen.jpg" alt="三徳六味で料理と合わせる日本酒" width="1108" height="1477" loading="lazy" /><figcaption>料理に寄り添う日本酒</figcaption></figure>
          </div>
        </section>

        <section className="space section-ink" id="space">
          <SectionTitle index="04" en="INTERIOR & SEATS" light>静けさを味わう、二つの席。</SectionTitle>
          <div className="space-grid">
            <article>
              <img src="/images/counter.jpg" alt="札幌・円山 三徳六味の6席のカウンター" width="1477" height="1108" loading="lazy" />
              <div><span>COUNTER · 6 SEATS</span><h3>カウンター</h3><p>料理が仕上がる所作と香りを間近に感じる6席。店主と料理に向き合う、割烹ならではの席です。</p></div>
            </article>
            <article>
              <img src="/images/private-room.jpg" alt="札幌 三徳六味の落ち着いた個室" width="1477" height="1108" loading="lazy" />
              <div><span>PRIVATE ROOMS · 2 ROOMS</span><h3>個室</h3><p>個室は2室。利用人数や予約条件は、予約時に店舗へご確認ください。</p></div>
            </article>
          </div>
          <div className="space-facts">
            <span>カウンター6席</span><span>個室2室</span><span>店内全面禁煙</span>
          </div>
        </section>

        <section className="reservation section-paper" id="reservation">
          <SectionTitle index="05" en="RESERVATION GUIDE">ご予約の前に。</SectionTitle>
          <div className="reservation-grid">
            <div className="reserve-panel">
              <p className="eyebrow">ONLINE OR PHONE</p>
              <h3>三徳六味は<br />完全予約制です。</h3>
              <p>TableCheckで空席を確認し、ご希望の日時・人数・コースを選択してください。電話での相談も受け付けています。</p>
              <p className="dm-notice">InstagramのDMでは、ご予約・お問い合わせを受け付けていません。</p>
              <a className="button button-dark" href={reserveUrl} target="_blank" rel="noreferrer">TableCheckで予約 <Arrow /></a>
              <a className="phone-link" href={`tel:${phone.replaceAll("-", "")}`}>{phone}</a>
            </div>
            <div className="notice-list">
              <article><span>01</span><h3>お子様</h3><p>大人と同じ料理を召し上がれる方のみ予約できます。</p></article>
              <article><span>02</span><h3>アレルギー</h3><p>食材は予約時に申告してください。重度・複数のアレルギーには対応できません。</p></article>
              <article><span>03</span><h3>食事制限</h3><p>ベジタリアン、ヴィーガン、ハラルには対応していません。</p></article>
              <article><span>04</span><h3>遅刻・変更</h3><p>遅れる場合は連絡を。予約時間・人数の変更は電話またはメールで店舗へご相談ください。</p></article>
              <article><span>05</span><h3>キャンセル</h3><p>予約時間の24時間前以降のキャンセル・人数減は、コース料金の100％です。</p></article>
              <article><span>06</span><h3>お持ち込み</h3><p>飲み物・食べ物の持ち込みはできません。</p></article>
            </div>
          </div>
        </section>

        <section className="information section-sand" id="information">
          <SectionTitle index="06" en="INFORMATION">店舗情報。</SectionTitle>
          <div className="info-grid">
            <dl className="info-list">
              <div><dt>店名</dt><dd>三徳六味（サントクロクミ）</dd></div>
              <div><dt>英語表記</dt><dd>Santokurokumi</dd></div>
              <div><dt>業態</dt><dd>日本料理・割烹・懐石／会席料理</dd></div>
              <div><dt>住所</dt><dd>{address}</dd></div>
              <div><dt>電話</dt><dd><a href={`tel:${phone.replaceAll("-", "")}`}>{phone}</a></dd></div>
              <div><dt>営業時間</dt><dd>18:00〜<br /><small>最終入店 20:00</small></dd></div>
              <div><dt>定休日</dt><dd>日曜日・祝日</dd></div>
              <div><dt>予約</dt><dd>完全予約制／オンライン・電話</dd></div>
              <div><dt>席</dt><dd>カウンター6席・個室2室</dd></div>
              <div><dt>禁煙</dt><dd>店内全面禁煙</dd></div>
              <div><dt>駐車場</dt><dd>専用1台（要予約）</dd></div>
              <div><dt>支払い</dt><dd>VISA・Mastercard・JCB・AMEX・Diners・UnionPayほか</dd></div>
              <div><dt>言語案内</dt><dd>英語・繁体字中国語・韓国語メニュー／英語対応スタッフの案内あり</dd></div>
            </dl>
            <div className="info-visual">
              <img src="/images/exterior.jpg" alt="札幌市中央区南4条西23丁目 三徳六味の外観と暖簾" width="1477" height="1108" loading="lazy" />
              <p>円山の裏参道に灯る、白い暖簾が目印です。</p>
            </div>
          </div>
        </section>

        <section className="access section-ink" id="access">
          <SectionTitle index="07" en="ACCESS" light>円山公園駅から、徒歩7分。</SectionTitle>
          <div className="access-grid">
            <div className="access-copy">
              <p className="address">{address}</p>
              <p>札幌市営地下鉄東西線「円山公園駅」4番出口から徒歩7分。南1条通から裏参道エリアへ進みます。</p>
              <p>西18丁目駅からも徒歩圏内です。駐車場は1台のみのため、車で来店する場合は予約時に必ずご確認ください。</p>
              <div className="access-buttons">
                <a className="button button-gold" href={mapUrl} target="_blank" rel="noreferrer">Google マップを開く <Arrow /></a>
                <a className="text-link light-link" href={`tel:${phone.replaceAll("-", "")}`}>店舗へ電話する</a>
              </div>
            </div>
            <div className="map-card" aria-label="円山公園駅から三徳六味まで徒歩7分">
              <span className="map-station">MARUYAMA KOEN<br />STATION EXIT 4</span>
              <i className="route" />
              <span className="map-pin">三</span>
              <strong>SANTOKUROKUMI</strong>
              <small>WALK 7 MINUTES</small>
            </div>
          </div>
        </section>

        <section className="english section-paper" id="english">
          <SectionTitle index="08" en="ENGLISH GUIDE">English Guide.</SectionTitle>
          <div className="english-grid">
            <div className="english-copy">
              <p>
                Santokurokumi is a reservation-only Japanese kappo restaurant in Maruyama, Sapporo. The restaurant serves seasonal tasting courses built around carefully prepared dashi and ingredients selected from Hokkaido and other regions of Japan.
              </p>
              <p>
                The course generally moves through appetizers, soup, sashimi, grilled dishes, a main dish, freshly cooked clay-pot rice, dessert and matcha. The exact menu changes with the season and daily availability.
              </p>
              <p>
                Online reservations are available through TableCheck. The restaurant listing indicates English, Traditional Chinese and Korean menus, as well as English-speaking staff. Please include allergy information when booking.
              </p>
            </div>
            <dl className="english-facts">
              <div><dt>Name</dt><dd>Santokurokumi</dd></div>
              <div><dt>Cuisine</dt><dd>Japanese · Kappo · Kaiseki</dd></div>
              <div><dt>Address</dt><dd>Minami 4-jo Nishi 23-chome 1-36, Chuo-ku, Sapporo, Hokkaido, Japan</dd></div>
              <div><dt>Hours</dt><dd>From 6:00 pm<br />Last entry 8:00 pm</dd></div>
              <div><dt>Closed</dt><dd>Sundays and national holidays</dd></div>
              <div><dt>Access</dt><dd>7-minute walk from Maruyama Koen Station Exit 4</dd></div>
              <div><dt>Reservation</dt><dd>Required · TableCheck or +81-90-1380-2131</dd></div>
              <div><dt>Dietary limits</dt><dd>No vegetarian, vegan or halal accommodation. Severe or multiple allergies cannot be accommodated.</dd></div>
            </dl>
          </div>
          <a className="button button-dark english-button" href={reserveUrl} target="_blank" rel="noreferrer">Reserve in English <Arrow /></a>
        </section>

        <section className="faq section-sand" id="faq">
          <SectionTitle index="09" en="FAQ">よくあるご質問。</SectionTitle>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.q} open={index === 0}>
                <summary><span>Q{String(index + 1).padStart(2, "0")}</span>{faq.q}<i>＋</i></summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="links section-paper" id="links">
          <SectionTitle index="10" en="OFFICIAL & RESERVATION LINKS">公式・予約・店舗案内。</SectionTitle>
          <div className="link-grid">
            <a href={officialUrl} target="_blank" rel="noreferrer"><span>OFFICIAL</span><strong>公式ページ</strong><Arrow /></a>
            <a href={reserveUrl} target="_blank" rel="noreferrer"><span>RESERVATION</span><strong>TableCheck</strong><Arrow /></a>
            <a href={mapUrl} target="_blank" rel="noreferrer"><span>MAP</span><strong>Google マップ</strong><Arrow /></a>
            <a href={gurunaviUrl} target="_blank" rel="noreferrer"><span>RESTAURANT GUIDE</span><strong>楽天ぐるなび</strong><Arrow /></a>
            <a href={tabelogUrl} target="_blank" rel="noreferrer"><span>RESTAURANT GUIDE</span><strong>食べログ</strong><Arrow /></a>
            <a href={`tel:${phone.replaceAll("-", "")}`}><span>TELEPHONE</span><strong>{phone}</strong><Arrow /></a>
          </div>

          <div className="search-terms">
            <details>
              <summary>三徳六味に関連する日本語の検索語 <span>{relatedJa.length}語以上</span></summary>
              <div className="keyword-cloud">{relatedJa.map((word) => <span key={word}>{word}</span>)}</div>
            </details>
            <details>
              <summary>Search terms for Santokurokumi <span>{relatedEn.length}+ terms</span></summary>
              <div className="keyword-cloud">{relatedEn.map((word) => <span key={word}>{word}</span>)}</div>
            </details>
          </div>
        </section>

        <section className="closing">
          <img src="/images/counter-vertical.jpg" alt="札幌・円山 三徳六味のカウンター席と調理場" width="1108" height="1477" loading="lazy" />
          <div>
            <p className="eyebrow">RESERVATION ONLY</p>
            <h2>一席のために、<br />旬を整える。</h2>
            <p>北海道の夜を、出汁と季節のコースで。</p>
            <div className="closing-actions">
              <a className="button button-gold" href={reserveUrl} target="_blank" rel="noreferrer">ご予約はこちら <Arrow /></a>
              <a className="button button-line" href={`tel:${phone.replaceAll("-", "")}`}>{phone}</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand"><strong>三徳六味</strong><span>SANTOKUROKUMI · SAPPORO</span></div>
        <address>{address}<br /><a href={`tel:${phone.replaceAll("-", "")}`}>{phone}</a></address>
        <div className="footer-nav"><a href="#cuisine">料理</a><a href="#course">コース</a><a href="#information">店舗情報</a><a href="#access">アクセス</a><a href="#english">English</a></div>
        <p className="footer-note">営業時間・メニュー・価格は変更になる場合があります。ご予約時に最新情報をご確認ください。</p>
        <p className="copyright">© 三徳六味 All Rights Reserved.</p>
      </footer>
    </>
  );
}
