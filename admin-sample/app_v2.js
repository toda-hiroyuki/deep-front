const state = {
  resource: "tourOption",
  mode: "create",
  tab: "basic",
  selectedLink: "link-01",
  selectedDoc: "doc-001",
};

const modes = {
  create: {
    label: "作成",
    badge: "作成中",
    status: "下書き",
    action: "下書き保存",
  },
  edit: {
    label: "編集",
    badge: "編集中",
    status: "販売準備完了",
    action: "更新保存",
  },
  review: {
    label: "確認",
    badge: "確認中",
    status: "公開前チェック",
    action: "確認完了",
  },
};

const tourOption = {
  id: "to_01J7KYO3PR",
  code: "G-KYO-003-1-PR",
  theme: "京都ナイトフードツアー",
  name: "祇園ナイトフードツアー 貸切3時間",
  officialName: "Kyoto Gion Night Food Tour - Private 3h",
  selectionName: "貸切3時間プラン",
  shortDescription: "祇園周辺をガイドと歩く、少人数向けの夜ツアー。",
  detailDescription:
    "地元の飲食店を巡りながら、祇園の街並みと食文化を楽しむプランです。初めて京都を訪れるゲストにも案内しやすい内容にしています。",
  tags: ["貸切", "夜", "人気"],
  type: "ガイドツアー",
  category: "Food & Drink",
  prefecture: "京都府",
  city: "京都市",
  area: "祇園・東山",
  concept: "夜の京都を食と街歩きで楽しむ",
  duration: "3時間",
  minBooking: "1",
  maxBooking: "8",
  minRun: "1",
  capacity: "8",
  meetingPlace: "京阪祇園四条駅 6番出口",
  meetingPlaceEn: "Keihan Gion-Shijo Station Exit 6",
  mapUrl: "https://maps.google.com/",
  pickup: "なし",
  dropoff: "祇園周辺",
  guestSchedule:
    "集合、祇園散策、飲食店2から3軒、八坂神社周辺で解散。混雑状況により訪問順を調整します。",
  inclusions: "英語ガイド、軽食、飲み物1杯、訪問先案内",
  exclusions: "追加飲食代、ホテル送迎、交通費",
  cutoff: "開始24時間前まで",
  cancelPolicy: "24時間前まで無料キャンセル",
  price: "¥18,000",
  costCheck: "原価確認済み",
  guideMemo: "夜間の混雑と雨天時ルートを事前確認。食事制限は前日までに確認。",
  salesStatus: "販売準備完了",
};

const productPage = {
  id: "pg_01KYOTOFOOD",
  name: "京都ナイトフードツアー商品ページ",
  url: "/tours/kyoto-night-food",
  pageType: "通常商品ページ",
  category: "Food & Drink",
  prefecture: "京都府",
  city: "京都市",
  area: "祇園・東山",
  displayTitle: "京都の夜を歩くフードツアー",
  subtitle: "祇園の街並みと地元の味を、ガイドと一緒に楽しむ夜の体験",
  template: "標準商品ページ",
  optionLayout: "標準リスト型",
  defaultLinkId: "link-01",
  lead:
    "初めての京都でも歩きやすい祇園エリアで、食事と街歩きを組み合わせたガイド付きツアーです。",
  overview:
    "夜の街並みを楽しみながら、地元の飲食店や歴史ある通りを巡ります。貸切とグループのTourOptionを同じ商品ページで選択できます。",
  points: "英語ガイド、駅近集合、雨天時ルートあり、少人数対応",
  audience: "京都が初めての旅行者、夜の街歩きを楽しみたいゲスト",
  cautions: "歩きやすい靴で参加。飲食店の混雑により順番が変わる場合があります。",
  includedNote: "ガイド、軽食、飲み物1杯",
  excludedNote: "追加注文、ホテル送迎、交通費",
  status: "掲載準備完了",
};

// Phase 1: 表示内容はすべてTourOption側から参照する。
// 紐付けレコードは 表示順・デフォルト選択・表示可否・販売可否・備考 のみ管理する。
const tourOptionsLookup = {
  "G-KYO-003-1-PR": {
    selectionName: "貸切3時間プラン",
    shortDescription: "祇園周辺をガイドと歩く、少人数向けの夜ツアー。",
    tags: ["貸切", "夜", "人気"],
    price: "¥18,000",
  },
  "G-KYO-003-1-GR": {
    selectionName: "グループ3時間プラン",
    shortDescription: "他のゲストと一緒に参加する、グループ向けの夜ツアー。",
    tags: ["グループ", "夜", "定番"],
    price: "¥12,000",
  },
  "G-KYO-003-2-PR": {
    selectionName: "貸切4時間プラン",
    shortDescription: "食事時間を長めに確保した、4時間の貸切プラン。",
    tags: ["貸切", "夜", "準備中"],
    price: "¥24,000",
  },
};

// Phase 1 紐付けレコード項目：表示順・デフォルト・表示可否・販売可否・備考のみ
const linkedOptions = [
  {
    id: "link-01",
    order: 1,
    default: true,
    visible: true,
    sellable: true,
    tourOptionId: "to_01J7KYO3PR",
    code: "G-KYO-003-1-PR",
    note: "",
    salesStatus: "販売ON",
  },
  {
    id: "link-02",
    order: 2,
    default: false,
    visible: true,
    sellable: true,
    tourOptionId: "to_01J7KYO3GR",
    code: "G-KYO-003-1-GR",
    note: "",
    salesStatus: "販売ON",
  },
  {
    id: "link-03",
    order: 3,
    default: false,
    visible: true,
    sellable: false,
    tourOptionId: "to_01J7KYO4PR",
    code: "G-KYO-003-2-PR",
    note: "販売開始前の確認中",
    salesStatus: "販売OFF",
  },
];

const guideDocs = [
  {
    id: "doc-001",
    type: "参考資料",
    scope: "共通",
    name: "祇園・東山エリア 観光基礎資料",
    docType: "観光情報",
    url: "https://drive.google.com/sample-kyoto-area",
    content: "祇園・東山エリアの主要スポット解説。花見小路・石塀小路の歴史的背景と案内ポイントを記載。",
    cautions: "週末夜の混雑に注意。観光客への写真撮影マナーを案内すること。",
    note: "2026年3月更新版",
    assignedTo: ["G-KYO-003-1-PR", "G-KYO-003-1-GR", "G-KYO-003-2-PR"],
  },
  {
    id: "doc-002",
    type: "注意事項",
    scope: "共通",
    name: "飲食店 アレルギー確認手順",
    docType: "運営注意",
    url: "",
    content: "全ツアー共通のアレルギー確認フロー。前日までにゲストへ確認し、当日店舗スタッフに伝える手順。",
    cautions: "グルテン・甲殻類のアレルギーは特に注意。確認漏れがあった場合は運営に即報告。",
    note: "",
    assignedTo: ["G-KYO-003-1-PR", "G-KYO-003-1-GR"],
  },
  {
    id: "doc-003",
    type: "参考資料",
    scope: "個別",
    name: "G-KYO-003-1-PR 貸切プラン専用ガイドノート",
    docType: "運営注意",
    url: "https://drive.google.com/sample-private-plan",
    content: "貸切3時間プランのオペレーション詳細。雨天時の代替ルートと店舗変更手順を記載。",
    cautions: "雨天時はルート2を使用。事前に代替店舗へ連絡すること。",
    note: "貸切プラン専用",
    assignedTo: ["G-KYO-003-1-PR"],
  },
  {
    id: "doc-004",
    type: "注意事項",
    scope: "個別",
    name: "G-KYO-003-1-GR グループプラン 集合注意",
    docType: "運営注意",
    url: "",
    content: "グループプランは複数組が集合するため、名前確認と人数確認を集合時に徹底。",
    cautions: "同日同時刻に別ツアーが同じ集合場所を使う場合あり。混同に注意。",
    note: "",
    assignedTo: ["G-KYO-003-1-GR"],
  },
  {
    id: "doc-005",
    type: "参考資料",
    scope: "個別",
    name: "G-KYO-003-1-PR 貸切3時間プラン 行程",
    docType: "行程",
    url: "https://drive.google.com/sample-itinerary-pr",
    content:
      "【集合】18:00 京阪祇園四条駅6番出口\n→ 【①】18:10 花見小路散策（約20分）\n→ 【②】18:30 居酒屋Aで前菜・日本酒（約45分）\n→ 【③】19:15 石塀小路夜景散策（約15分）\n→ 【④】19:30 バーBでカクテル（約30分）\n→ 【⑤】20:00 八坂神社周辺散策（約20分）\n→ 【解散】20:20 八坂神社付近",
    cautions: "雨天時は行程②→④→③に変更。店舗変更が発生する場合は事前連絡必須。",
    note: "貸切プラン専用行程。ゲスト向けスケジュールとは別に管理。",
    assignedTo: ["G-KYO-003-1-PR"],
  },
];

const tabs = {
  tourOption: [
    ["basic", "基本情報"],
    ["conditions", "提供条件"],
    ["sales", "販売条件"],
    ["content", "コンテンツ"],
    ["ops", "運営・確認"],
  ],
  productPage: [
    ["pageBasic", "ページ基本"],
    ["pageContent", "共通コンテンツ"],
    ["links", "掲載TourOption"],
    ["pagePreview", "表示確認"],
  ],
  guideDoc: [
    ["docList", "資料一覧"],
    ["docDetail", "資料詳細"],
    ["docLinks", "TourOption割り当て"],
  ],
};

function modeData() {
  return modes[state.mode];
}

function isReview() {
  return state.mode === "review";
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function field(label, value, options = {}) {
  const tag = options.multiline ? "textarea" : "input";
  const readonly = isReview() || options.readonly ? "readonly" : "";
  const placeholder = options.placeholder ? `placeholder="${escapeHtml(options.placeholder)}"` : "";
  const val = state.mode === "create" && options.createBlank ? "" : value;
  if (tag === "textarea") {
    return `
      <label class="${options.wide ? "field-wide" : "field"}">
        <span>${label}</span>
        <textarea ${readonly} ${placeholder}>${escapeHtml(val)}</textarea>
      </label>
    `;
  }
  return `
    <label class="${options.wide ? "field-wide" : "field"}">
      <span>${label}</span>
      <input value="${escapeHtml(val)}" ${readonly} ${placeholder} />
    </label>
  `;
}

function selectField(label, value, choices) {
  const disabled = isReview() ? "disabled" : "";
  const options = choices
    .map((choice) => `<option ${choice === value ? "selected" : ""}>${escapeHtml(choice)}</option>`)
    .join("");
  return `
    <label class="field">
      <span>${label}</span>
      <select ${disabled}>${options}</select>
    </label>
  `;
}

function sectionTitle(title, description, action = "") {
  return `
    <div class="section-title">
      <div>
        <h2>${title}</h2>
        <p>${description}</p>
      </div>
      ${action}
    </div>
  `;
}

function infoNote(text) {
  return `<p style="margin:0 0 16px;padding:10px 14px;background:var(--bg);border-left:3px solid var(--teal);border-radius:4px;font-size:13px;color:var(--muted);line-height:1.6;">${text}</p>`;
}

function renderTourOptionEditor() {
  const t = tourOption;
  const tab = state.tab;
  if (tab === "basic") {
    return `
      <div class="form-section ${isReview() ? "readonly-mode" : ""}">
        ${sectionTitle("TourOption基本情報", "IDは自動生成、コードは業務上の不変コードとして管理します。")}
        <div class="field-grid">
          ${field("TourOption ID", state.mode === "create" ? "保存時に自動生成" : t.id, { readonly: true })}
          ${field("TourOptionコード", t.code, { createBlank: state.mode === "create" })}
          ${field("テーマタイトル", t.theme)}
          ${field("TourOption名", t.name)}
          ${field("正式名称", t.officialName, { wide: true })}
          ${field("TourOption選択表示名", t.selectionName)}
          ${field("タグ / バッジ", t.tags.join(", "))}
          ${field("短い説明", t.shortDescription, { wide: true, multiline: true })}
          ${field("詳細説明", t.detailDescription, { wide: true, multiline: true })}
        </div>
      </div>
    `;
  }

  if (tab === "conditions") {
    return `
      <div class="form-section ${isReview() ? "readonly-mode" : ""}">
        ${sectionTitle("提供条件", "所要時間、人数、集合場所など、実際の催行に必要な条件を管理します。")}
        <div class="field-grid three">
          ${selectField("商品種類", t.type, ["ガイドツアー", "施設体験", "移動付きツアー"])}
          ${selectField("カテゴリ", t.category, ["Food & Drink", "Culture", "Nature", "Private Tour"])}
          ${field("エリア名", t.area)}
          ${field("都道府県", t.prefecture)}
          ${field("市区町村", t.city)}
          ${field("所要時間", t.duration)}
          ${field("1予約あたり最小人数", t.minBooking)}
          ${field("1予約あたり最大人数", t.maxBooking)}
          ${field("1催行回あたり定員", t.capacity)}
          ${field("集合場所", t.meetingPlace, { wide: true })}
          ${field("集合場所英語名", t.meetingPlaceEn, { wide: true })}
          ${field("Google Map URL", t.mapUrl, { wide: true })}
          ${selectField("ピックアップ", t.pickup, ["なし", "あり", "要相談"])}
          ${field("解散場所", t.dropoff)}
        </div>
      </div>
    `;
  }

  if (tab === "sales") {
    return `
      <div class="form-section ${isReview() ? "readonly-mode" : ""}">
        ${sectionTitle("販売条件", "予約期限、価格参照、キャンセル条件、販売ステータスをまとめて確認します。")}
        <div class="field-grid">
          ${field("予約期限", t.cutoff)}
          ${selectField("販売ステータス", t.salesStatus, ["下書き", "販売準備完了", "販売中", "一時停止", "販売終了"])}
          ${field("基準販売価格", t.price)}
          ${field("価格・原価確認", t.costCheck)}
          ${field("基本キャンセルポリシー", t.cancelPolicy, { wide: true })}
          ${field("販売停止理由", "", { wide: true, multiline: true, placeholder: "一時停止時のみ入力" })}
        </div>
      </div>
    `;
  }

  if (tab === "content") {
    return `
      <div class="form-section ${isReview() ? "readonly-mode" : ""}">
        ${sectionTitle("コンテンツ", "ゲスト向けの表示内容を管理します。ガイド向け行程はガイド資料タブで管理します。")}
        ${infoNote("ガイド向け行程（詳細オペレーション手順）は「ガイド資料」画面の資料種別「行程」として管理します。このタブのスケジュールはゲストに表示する概要です。")}
        <div class="field-grid">
          ${field("ゲスト向けスケジュール", t.guestSchedule, { wide: true, multiline: true })}
          ${field("Inclusions", t.inclusions, { multiline: true })}
          ${field("Exclusions", t.exclusions, { multiline: true })}
          ${field("TourOption代表画像URL", "https://images.unsplash.com/photo-1528360983277-13d401cdc186", {
            wide: true,
          })}
          ${field("画像ギャラリーURL一覧", "祇園夜景, 食事, 集合場所, 街歩き", { wide: true, multiline: true })}
        </div>
      </div>
    `;
  }

  if (tab === "ops") {
    const assigned = guideDocs.filter((d) => d.assignedTo.includes(tourOption.code));
    const commonDocs = assigned.filter((d) => d.scope === "共通");
    const individualDocs = assigned.filter((d) => d.scope === "個別");
    const docRows = (docs) =>
      docs.map((d) => `
        <tr>
          <td><span class="badge ${d.type === '注意事項' ? 'coral' : 'teal'}">${d.type}</span></td>
          <td><strong>${d.name}</strong></td>
          <td><span class="badge ${d.docType === '行程' ? 'blue' : ''}">${d.docType}</span></td>
          <td>${d.url ? `<a href="${escapeHtml(d.url)}" style="color:var(--teal);font-size:12px;">リンク</a>` : '<span class="muted tiny">なし</span>'}</td>
        </tr>
      `).join("") || `<tr><td colspan="4" class="muted tiny" style="padding:12px;">なし</td></tr>`;

    return `
      <div class="form-section ${isReview() ? "readonly-mode" : ""}">
        ${sectionTitle("運営・確認", "ガイド向けメモ、参考資料・注意事項・行程、公開前チェックを確認します。")}
        <div class="field-grid">
          ${field("ガイド向け注意事項", tourOption.guideMemo, { wide: true, multiline: true })}
          ${field("営業時間・定休日メモ", "月曜定休の店舗があるため代替候補を確認", { wide: true })}
          ${field("施設予約必要有無", "一部店舗は予約推奨")}
        </div>
        <div class="section-title" style="margin-top:8px;">
          <div>
            <h3>割り当て済みガイド向け資料</h3>
            <p style="margin:4px 0 0;color:var(--muted);font-size:13px;">このTourOptionに紐付いている共通・個別の資料です。詳細はガイド資料画面で管理します。</p>
          </div>
        </div>
        <p class="field-label" style="margin:0 0 6px;">共通資料（${commonDocs.length}件）</p>
        <div class="table-wrap">
          <table><thead><tr><th>種別</th><th>資料名</th><th>資料種別</th><th>リンク</th></tr></thead>
          <tbody>${docRows(commonDocs)}</tbody></table>
        </div>
        <p class="field-label" style="margin:12px 0 6px;">個別資料（${individualDocs.length}件）</p>
        <div class="table-wrap">
          <table><thead><tr><th>種別</th><th>資料名</th><th>資料種別</th><th>リンク</th></tr></thead>
          <tbody>${docRows(individualDocs)}</tbody>
        </div>
      </div>
    `;
  }

  return "";
}

function renderProductPageEditor() {
  const p = productPage;
  const tab = state.tab;
  if (tab === "pageBasic") {
    return `
      <div class="form-section ${isReview() ? "readonly-mode" : ""}">
        ${sectionTitle("商品ページ基本情報", "商品ページ全体の表示・検索・公開状態を管理します。")}
        <div class="field-grid">
          ${field("商品ページID", state.mode === "create" ? "保存時に自動生成" : p.id, { readonly: true })}
          ${field("URL", p.url)}
          ${field("商品ページ名", p.name)}
          ${selectField("ページ種別", p.pageType, ["通常商品ページ", "キャンペーンLP", "特集ページ", "その他"])}
          ${field("ページ表示カテゴリ", p.category)}
          ${field("ページ表示エリア名", p.area)}
          ${field("商品ページ表示タイトル", p.displayTitle, { wide: true })}
          ${field("商品ページサブタイトル", p.subtitle, { wide: true })}
          ${selectField("表示テンプレート種別", p.template, ["標準商品ページ", "LP型", "特集型"])}
          ${selectField("TourOption選択エリア表示方式", p.optionLayout, ["標準リスト型", "カード型", "コンパクト型"])}
          ${field("デフォルト表示TourOption紐付けID", p.defaultLinkId)}
          ${selectField("掲載ステータス", p.status, ["下書き", "掲載準備完了", "掲載中", "非公開"])}
        </div>
      </div>
    `;
  }

  if (tab === "pageContent") {
    return `
      <div class="form-section ${isReview() ? "readonly-mode" : ""}">
        ${sectionTitle("共通コンテンツ", "ページに紐付くTourOption群に共通する見せ方を管理します。")}
        <div class="field-grid">
          ${field("共通紹介文 / リード文", p.lead, { wide: true, multiline: true })}
          ${field("共通の体験概要", p.overview, { wide: true, multiline: true })}
          ${field("共通のおすすめポイント", p.points, { wide: true, multiline: true })}
          ${field("対象顧客 / こんな人におすすめ", p.audience, { wide: true, multiline: true })}
          ${field("共通の注意事項", p.cautions, { wide: true, multiline: true })}
          ${field("共通の含まれるもの補足", p.includedNote)}
          ${field("共通の含まれないもの補足", p.excludedNote)}
          ${field("メイン画像URL", "https://images.unsplash.com/photo-1590559899731-a382839e5549", { wide: true })}
        </div>
      </div>
    `;
  }

  if (tab === "links") {
    const rows = linkedOptions
      .map((link) => {
        const toInfo = tourOptionsLookup[link.code] ?? {};
        return `
          <tr class="${state.selectedLink === link.id ? "row-selected" : ""}" data-link-id="${link.id}">
            <td>${link.order}</td>
            <td>${link.default ? "既定" : ""}</td>
            <td>${link.visible ? "表示" : "非表示"}</td>
            <td>${link.sellable ? "販売ON" : "販売OFF"}</td>
            <td><strong>${link.code}</strong><br><span class="tiny muted">${link.tourOptionId}</span></td>
            <td>${toInfo.selectionName ?? "—"}<br><span class="tiny muted">${toInfo.price ?? ""}</span></td>
            <td><span class="badge ${link.sellable ? "green" : "amber"}">${link.salesStatus}</span></td>
            <td><button class="small-action" type="button" data-link-id="${link.id}">選択</button></td>
          </tr>
        `;
      })
      .join("");
    return `
      <div class="form-section">
        ${sectionTitle(
          "掲載TourOption",
          "商品ページ上でどのTourOptionをどの順番で表示・販売するかを管理します。表示内容はTourOption側から参照します。",
          `<button class="quiet-button" type="button">TourOptionを追加</button>`,
        )}
        ${infoNote("Phase 1：紐付けレコードは表示順・表示可否・販売可否のみ管理します。TourOptionの表示内容（名称・説明・画像等）はTourOption画面で編集します。")}
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>順</th><th>既定</th><th>表示</th><th>販売</th><th>TourOptionコード</th><th>選択表示名（TO参照）</th><th>状態</th><th></th>
              </tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
        ${renderLinkSettingsForm()}
      </div>
    `;
  }

  return `
    <div class="form-section ${isReview() ? "readonly-mode" : ""}">
      ${sectionTitle("表示確認", "商品ページの共通表示と、選択されたTourOption詳細を確認します。")}
      <div class="summary-list">
        <div class="summary-item"><span>ページタイトル</span><strong>${p.displayTitle}</strong></div>
        <div class="summary-item"><span>デフォルトOption</span><strong>${(tourOptionsLookup[selectedLink().code] ?? {}).selectionName ?? selectedLink().code}</strong></div>
        <div class="summary-item"><span>掲載中Option数</span><strong>${linkedOptions.filter((x) => x.visible).length}件</strong></div>
        <div class="summary-item"><span>販売ON</span><strong>${linkedOptions.filter((x) => x.sellable).length}件</strong></div>
        <div class="summary-item"><span>共通紹介文</span><p>${p.lead}</p></div>
      </div>
    </div>
  `;
}

// Phase 1: 紐付けレコードは表示順・デフォルト・表示可否・販売可否・備考のみ管理する
function renderLinkSettingsForm() {
  const link = selectedLink();
  return `
    <div class="form-section ${isReview() ? "readonly-mode" : ""}">
      ${sectionTitle(
        "紐付け設定",
        "Phase 1：表示内容はTourOption側から参照します。このフォームでは紐付けの管理設定のみ編集します。",
      )}
      <div class="field-grid">
        ${field("紐付けID", link.id, { readonly: true })}
        ${field("商品ページID", productPage.id, { readonly: true })}
        ${field("TourOption ID", link.tourOptionId, { readonly: true })}
        ${field("TourOptionコード", link.code, { readonly: true })}
        ${field("表示順", link.order)}
        <div class="field-wide toggle-list">
          <label class="toggle-row"><input type="checkbox" ${link.default ? "checked" : ""} /> デフォルト選択</label>
          <label class="toggle-row"><input type="checkbox" ${link.visible ? "checked" : ""} /> 商品ページ上に表示</label>
          <label class="toggle-row"><input type="checkbox" ${link.sellable ? "checked" : ""} /> 商品ページ上で販売</label>
        </div>
        ${field("備考（紐付け固有）", link.note, { wide: true, placeholder: "この紐付けに関するメモがあれば入力" })}
      </div>
      <div style="margin-top:8px;padding:10px 14px;background:var(--bg);border-radius:6px;">
        <p style="margin:0;font-size:12px;color:var(--muted);line-height:1.6;">
          <strong style="color:var(--ink);">TourOptionの表示内容を変更する場合</strong>はTourOption画面で編集してください。
          同じTourOptionを掲載している全商品ページに反映されます。
        </p>
      </div>
    </div>
  `;
}

function selectedLink() {
  return linkedOptions.find((link) => link.id === state.selectedLink) ?? linkedOptions[0];
}

function renderTourOptionPreview() {
  const t = tourOption;
  return `
    <div class="option-preview">
      <div class="preview-image"></div>
      <div class="preview-body">
        <div class="preview-title-line">
          <h3>${t.selectionName}</h3>
          <div class="price">${t.price}</div>
        </div>
        <div class="badge-row">
          ${t.tags.map((tag) => `<span class="badge teal">${tag}</span>`).join("")}
        </div>
        <p class="muted">${t.shortDescription}</p>
        <div class="meta-grid">
          <div class="meta-item"><span>所要時間</span><strong>${t.duration}</strong></div>
          <div class="meta-item"><span>人数</span><strong>${t.minBooking}から${t.maxBooking}名</strong></div>
          <div class="meta-item"><span>集合場所</span><strong>${t.meetingPlace}</strong></div>
          <div class="meta-item"><span>キャンセル</span><strong>${t.cancelPolicy}</strong></div>
        </div>
        <div class="summary-list">
          <div class="summary-item"><span>ゲスト向けスケジュール</span><p>${t.guestSchedule}</p></div>
          <div class="summary-item"><span>含まれるもの</span><p>${t.inclusions}</p></div>
          <div class="summary-item"><span>含まれないもの</span><p>${t.exclusions}</p></div>
        </div>
      </div>
    </div>
  `;
}

function renderProductPreview() {
  const p = productPage;
  const link = selectedLink();
  const selectedToInfo = tourOptionsLookup[link.code] ?? {};
  return `
    <div class="product-preview">
      <div class="preview-image osaka"></div>
      <div class="preview-body">
        <div class="preview-title-line">
          <h3>${p.displayTitle}</h3>
          <span class="badge teal">${p.area}</span>
        </div>
        <p class="muted">${p.subtitle}</p>
        <div class="option-picker">
          ${linkedOptions
            .filter((item) => item.visible)
            .map((item) => {
              const toInfo = tourOptionsLookup[item.code] ?? {};
              return `
                <div class="option-choice ${item.id === link.id ? "selected" : ""}">
                  <div class="choice-top">
                    <strong>${toInfo.selectionName ?? item.code}</strong>
                    <span class="price">${toInfo.price ?? "—"}</span>
                  </div>
                  <span class="tiny muted">${toInfo.shortDescription ?? ""}</span>
                  <div class="badge-row">
                    <span class="badge ${item.sellable ? "green" : "amber"}">${item.salesStatus}</span>
                    ${(toInfo.tags ?? []).map((tag) => `<span class="badge">${tag}</span>`).join("")}
                  </div>
                </div>
              `;
            })
            .join("")}
        </div>
        <div class="summary-list">
          <div class="summary-item"><span>選択中</span><strong>${selectedToInfo.selectionName ?? link.code}</strong></div>
          <div class="summary-item"><span>詳細</span><p>${tourOption.detailDescription}</p></div>
          <div class="summary-item"><span>集合場所</span><p>${tourOption.meetingPlace}</p></div>
          <div class="summary-item"><span>含まれるもの</span><p>${p.includedNote}</p></div>
        </div>
      </div>
    </div>
  `;
}

function selectedDoc() {
  return guideDocs.find((d) => d.id === state.selectedDoc) ?? guideDocs[0];
}

function renderGuideDocEditor() {
  const tab = state.tab;

  if (tab === "docList") {
    const rows = guideDocs.map((doc) => `
      <tr class="${state.selectedDoc === doc.id ? "row-selected" : ""}" data-doc-id="${doc.id}">
        <td>
          <span class="badge ${doc.scope === '共通' ? 'blue' : 'teal'}">${doc.scope}</span>
        </td>
        <td>
          <span class="badge ${doc.type === '注意事項' ? 'coral' : ''}">${doc.type}</span>
        </td>
        <td><strong>${doc.name}</strong></td>
        <td><span class="badge ${doc.docType === '行程' ? 'blue' : ''}">${doc.docType}</span></td>
        <td>${doc.assignedTo.length}件</td>
        <td><button class="small-action" type="button" data-doc-id="${doc.id}">選択</button></td>
      </tr>
    `).join("");
    return `
      <div class="form-section">
        ${sectionTitle(
          "ガイド向け資料一覧",
          "共通資料は複数のTourOptionに割り当てられます。個別資料は特定TourOption専用です。",
          `<button class="quiet-button" type="button">新規作成</button>`
        )}
        <div style="display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap;">
          <span class="badge blue">共通 ${guideDocs.filter(d=>d.scope==='共通').length}件</span>
          <span class="badge teal">個別 ${guideDocs.filter(d=>d.scope==='個別').length}件</span>
          <span class="badge coral">注意事項 ${guideDocs.filter(d=>d.type==='注意事項').length}件</span>
          <span class="badge">参考資料 ${guideDocs.filter(d=>d.type==='参考資料').length}件</span>
          <span class="badge blue">行程 ${guideDocs.filter(d=>d.docType==='行程').length}件</span>
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr><th>スコープ</th><th>種別</th><th>資料名</th><th>資料種別</th><th>割り当て数</th><th></th></tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
        <div class="empty-state" style="margin-top:12px;">
          <strong style="display:block;margin-bottom:4px;">スコープについて</strong>
          <p style="margin:0;font-size:13px;line-height:1.6;">
            <strong>共通</strong>：複数のTourOptionで共有する資料。どのTourOptionに適用するかは「TourOption割り当て」タブで設定します。<br>
            <strong>個別</strong>：特定のTourOption専用の資料・注意事項・行程です。<br>
            <strong>行程</strong>（資料種別）：ガイド向けの詳細行程。ゲスト向けスケジュールとは別に管理します。
          </p>
        </div>
      </div>
    `;
  }

  if (tab === "docDetail") {
    const doc = selectedDoc();
    return `
      <div class="form-section ${isReview() ? "readonly-mode" : ""}">
        ${sectionTitle("資料詳細", "スコープと種別を設定してから、資料の内容を入力します。")}
        <div class="field-grid">
          ${field("資料ID", doc.id, { readonly: true })}
          ${selectField("種別", doc.type, ["参考資料", "注意事項"])}
          ${selectField("スコープ", doc.scope, ["共通", "個別"])}
          ${field("資料名", doc.name, { wide: true })}
          ${selectField("資料種別", doc.docType, ["行程", "観光情報", "施設情報", "文化背景", "運営注意", "過去トラブル"])}
          ${field("参考URL", doc.url, { wide: true, placeholder: "Google Drive, Notion等のリンク" })}
          ${field("本文 / 案内ポイント", doc.content, { wide: true, multiline: true })}
          ${field("注意点", doc.cautions, { wide: true, multiline: true })}
          ${field("備考", doc.note, { wide: true })}
        </div>
      </div>
    `;
  }

  const doc = selectedDoc();
  const assignedRows = doc.assignedTo.map((code) => `
    <tr>
      <td><strong>${code}</strong></td>
      <td><span class="badge teal">割り当て済み</span></td>
      <td><button class="small-action" type="button">解除</button></td>
    </tr>
  `).join("");
  return `
    <div class="form-section">
      ${sectionTitle(
        "TourOption割り当て",
        `「${doc.name}」をどのTourOptionに割り当てるか管理します。`,
        doc.scope === "共通"
          ? `<button class="quiet-button" type="button">TourOptionを追加</button>`
          : ""
      )}
      ${doc.scope === "個別" ? `
        <div class="empty-state" style="margin-bottom:12px;">
          個別資料は1つのTourOptionにのみ割り当てられます。変更する場合は解除してから再割り当てしてください。
        </div>
      ` : `
        <div class="empty-state" style="margin-bottom:12px;">
          共通資料は複数のTourOptionに割り当てられます。テーマをまたいだ割り当ても可能です。
        </div>
      `}
      <div class="table-wrap">
        <table>
          <thead><tr><th>TourOptionコード</th><th>状態</th><th></th></tr></thead>
          <tbody>${assignedRows}</tbody>
        </table>
      </div>
    </div>
  `;
}

function renderGuideDocPreview() {
  const doc = selectedDoc();
  const isItinerary = doc.docType === "行程";
  return `
    <div class="option-preview">
      <div class="preview-body">
        <div class="preview-title-line">
          <h3 style="font-size:15px;line-height:1.4;">${doc.name}</h3>
        </div>
        <div class="badge-row">
          <span class="badge ${doc.scope === '共通' ? 'blue' : 'teal'}">${doc.scope}</span>
          <span class="badge ${doc.type === '注意事項' ? 'coral' : ''}">${doc.type}</span>
          <span class="badge ${isItinerary ? 'blue' : ''}">${doc.docType}</span>
        </div>
        <div class="summary-list" style="margin-top:8px;">
          <div class="summary-item"><span>${isItinerary ? "行程" : "案内ポイント"}</span><p style="white-space:pre-line;">${doc.content}</p></div>
          <div class="summary-item"><span>注意点</span><p>${doc.cautions}</p></div>
          ${doc.url ? `<div class="summary-item"><span>参考リンク</span><p><a href="${escapeHtml(doc.url)}" style="color:var(--teal);">資料を開く</a></p></div>` : ""}
        </div>
        <div style="margin-top:14px;border-top:1px solid var(--line);padding-top:14px;">
          <p class="field-label" style="margin:0 0 8px;">割り当て先TourOption（${doc.assignedTo.length}件）</p>
          <div class="badge-row">
            ${doc.assignedTo.map((code) => `<span class="badge teal">${code}</span>`).join("")}
          </div>
        </div>
      </div>
    </div>
  `;
}

function checks() {
  if (state.resource === "tourOption") {
    return [
      ["done", "TourOption ID", "保存時に自動生成される"],
      ["done", "TourOptionコード", "業務コードが一意に設定されている"],
      ["done", "提供条件", "所要時間・人数・集合場所が設定済み"],
      ["done", "販売条件", "予約期限・価格・キャンセル条件を確認済み"],
      ["warn", "画像", "代表画像は差し替え候補あり"],
      ["done", "ゲスト向けスケジュール", "表示用スケジュールを設定済み"],
      ["done", "ガイド情報", "注意事項と参考資料を設定済み"],
    ];
  }
  if (state.resource === "guideDoc") {
    const doc = selectedDoc();
    return [
      ["done", "資料ID", "保存時に自動生成される"],
      [doc.scope ? "done" : "warn", "スコープ", doc.scope ? `${doc.scope}として設定済み` : "未設定"],
      [doc.type ? "done" : "warn", "種別", doc.type ? `${doc.type}として設定済み` : "未設定"],
      [doc.name ? "done" : "warn", "資料名", doc.name ? "設定済み" : "未設定"],
      [doc.content ? "done" : "warn", "本文 / 案内ポイント", doc.content ? "設定済み" : "未設定"],
      [doc.assignedTo.length > 0 ? "done" : "warn", "TourOption割り当て", `${doc.assignedTo.length}件割り当て済み`],
    ];
  }
  return [
    ["done", "商品ページID", "保存時に自動生成される"],
    ["done", "ページ共通情報", "タイトル・リード文・画像が設定済み"],
    ["done", "掲載TourOption", "販売対象が1件以上紐付いている"],
    ["done", "デフォルト選択", "初期表示するTourOptionが指定済み"],
    ["done", "TourOption表示確認", "掲載TourOptionの内容をTourOption画面で確認済み"],
    ["done", "プレビュー", "選択UIと詳細表示を確認済み"],
  ];
}

function renderChecks() {
  const items = checks();
  const done = items.filter((item) => item[0] === "done").length;
  document.getElementById("checkCount").textContent = `${done} / ${items.length}`;
  document.getElementById("checkList").innerHTML = items
    .map(
      ([type, title, body]) => `
        <div class="check-item ${type}">
          <span class="check-mark">${type === "done" ? "✓" : "!"}</span>
          <div class="check-text">
            <strong>${title}</strong>
            <span>${body}</span>
          </div>
        </div>
      `,
    )
    .join("");
}

function updateShell() {
  const mode = modeData();

  if (state.resource === "tourOption") {
    document.getElementById("screenTitle").textContent = "TourOption 作成・編集・確認";
    document.getElementById("summaryId").textContent = state.mode === "create" ? "TO-自動採番" : tourOption.id;
    document.getElementById("summaryCode").textContent = tourOption.code;
    document.getElementById("summaryStatus").textContent = state.mode === "create" ? mode.status : tourOption.salesStatus;
    document.getElementById("previewTitle").textContent = "TourOption表示";
  } else if (state.resource === "guideDoc") {
    const doc = selectedDoc();
    document.getElementById("screenTitle").textContent = "ガイド向け資料 作成・編集・確認";
    document.getElementById("summaryId").textContent = doc.id;
    document.getElementById("summaryCode").textContent = doc.scope + " / " + doc.type;
    document.getElementById("summaryStatus").textContent = doc.assignedTo.length + "件割り当て";
    document.getElementById("previewTitle").textContent = "ガイド表示";
  } else {
    document.getElementById("screenTitle").textContent = "商品ページ 作成・編集・確認";
    document.getElementById("summaryId").textContent = state.mode === "create" ? "PG-自動採番" : productPage.id;
    document.getElementById("summaryCode").textContent = productPage.url;
    document.getElementById("summaryStatus").textContent = state.mode === "create" ? mode.status : productPage.status;
    document.getElementById("previewTitle").textContent = "商品ページ表示";
  }

  document.getElementById("primaryAction").textContent = mode.action;
  document.getElementById("previewModeBadge").textContent = mode.badge;

  document.querySelectorAll(".nav-item").forEach((button) => {
    button.classList.toggle("active", button.dataset.resource === state.resource);
  });
  document.querySelectorAll(".mode-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === state.mode);
  });
}

function renderTabs() {
  const tabList = tabs[state.resource];
  if (!tabList.some(([key]) => key === state.tab)) {
    state.tab = tabList[0][0];
  }
  document.getElementById("tabRow").innerHTML = tabList
    .map(
      ([key, label]) => `
        <button class="tab-button ${state.tab === key ? "active" : ""}" type="button" data-tab="${key}">
          ${label}
        </button>
      `,
    )
    .join("");
}

function render() {
  updateShell();
  renderTabs();
  document.getElementById("editorContent").innerHTML =
    state.resource === "tourOption"
      ? renderTourOptionEditor()
      : state.resource === "guideDoc"
      ? renderGuideDocEditor()
      : renderProductPageEditor();
  document.getElementById("previewContent").innerHTML =
    state.resource === "tourOption"
      ? renderTourOptionPreview()
      : state.resource === "guideDoc"
      ? renderGuideDocPreview()
      : renderProductPreview();
  renderChecks();
}

document.addEventListener("click", (event) => {
  const resourceButton = event.target.closest("[data-resource]");
  if (resourceButton) {
    state.resource = resourceButton.dataset.resource;
    state.tab = tabs[state.resource][0][0];
    render();
    return;
  }

  const modeButton = event.target.closest("[data-mode]");
  if (modeButton) {
    state.mode = modeButton.dataset.mode;
    render();
    return;
  }

  const tabButton = event.target.closest("[data-tab]");
  if (tabButton) {
    state.tab = tabButton.dataset.tab;
    render();
    return;
  }

  const linkButton = event.target.closest("[data-link-id]");
  if (linkButton) {
    state.selectedLink = linkButton.dataset.linkId;
    render();
    return;
  }

  const docButton = event.target.closest("[data-doc-id]");
  if (docButton) {
    state.selectedDoc = docButton.dataset.docId;
    if (state.tab === "docList") state.tab = "docDetail";
    render();
  }
});

render();
