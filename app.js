const UI_TEXT = {
  en: {
    title: "Celestial Calendar Studio",
    subtitle: "Timestamp-first calendar + zodiac interface for AI agents and OpenClaw-style tools",
    language: "Language",
    calendar: "Calendar",
    timezone: "Timezone",
    monthMode: "Month Mode",
    apiBase: "Clawlendar API Base (optional)",
    today: "Today",
    resetApi: "Reset API",
    selectedDate: "Selected Date",
    dayProfile: "Day Details",
    lifeContext: "Life Context",
    astroClock: "Cosmic Clock",
    hour: "Hour",
    birthTime: "Birth Time",
    entityId: "Entity ID",
    role: "Role",
    soul: "Soul Traits",
    location: "Location",
    latitude: "Latitude",
    longitude: "Longitude",
    background: "Background",
    climate: "Climate",
    scenery: "Scenery Note",
    autoWeather: "Auto Weather",
    refreshLife: "Update Context",
    fetchAstro: "Update Snapshot",
    howItWorks: "How it works",
    flow1: "Monthly view supports both Gregorian grid and true source-calendar month boundaries.",
    flow2: "Selected date is projected into international calendars and day profile details.",
    flow3: "When API is available, /day-profile and /calendar-month provide canonical agent-ready JSON.",
    prevMonth: "Previous month",
    nextMonth: "Next month",
    monthModes: {
      gregorian_grid: "Gregorian Grid",
      source_month: "True Source Month",
    },
    labels: {
      isoDate: "ISO Date",
      selectedCalendar: "Selected Calendar",
      gregorianDate: "Gregorian",
      unixTimestamp: "Timestamp",
      weekday: "Weekday",
      solarTerm: "Solar Term",
      sexagenary: "Sexagenary",
      lunar: "Lunar",
      week: "ISO Week",
      bazi: "BaZi",
      yi: "Auspicious",
      ji: "Inauspicious",
      moonPhase: "Moon Phase",
      sunSign: "Sun Sign",
      moonSign: "Moon Sign",
      lifeId: "Life ID",
      age: "Age",
      stage: "Stage",
      birthday: "Birthday",
      nextBirthday: "Next Birthday",
      birthInstant: "Birth Instant",
      nowInstant: "Current Instant",
      place: "Place",
      weather: "Weather",
      scenePrompt: "Scene Prompt",
      seedBrief: "Seed Brief",
    },
    sidebarFilters: "Sidebar Modules",
    legacyDetails: "Legacy Details",
    easternMetaphysics: "Eastern Almanac",
    westernMetaphysics: "Western Almanac",
    rawJson: "Raw JSON",
    status: {
      localApprox: "Local approximation",
      fetching: "Fetching from API...",
      synced: "Synced with API",
      failedFallback: "API failed, using local fallback",
      badUrl: "Invalid API URL",
      monthApiRequired: "Source month mode needs API base",
      monthUnsupported: "This calendar has no month-mode mapping",
      monthSynced: "Source month synced",
    },
  },
  "zh-TW": {
    title: "星曆中控台",
    subtitle: "給 AI agents 與 OpenClaw 工作流使用的時間戳優先曆法 + 黃道介面",
    language: "語言",
    calendar: "曆法",
    timezone: "時區",
    monthMode: "月份模式",
    apiBase: "Clawlendar API Base（可選）",
    today: "今天",
    resetApi: "清除 API",
    selectedDate: "已選日期",
    dayProfile: "當日詳情",
    lifeContext: "時空脈絡",
    astroClock: "星辰時鐘",
    hour: "小時",
    birthTime: "生命起始時間",
    entityId: "實體 ID",
    role: "角色",
    soul: "靈魂特質",
    location: "地點",
    latitude: "緯度",
    longitude: "經度",
    background: "背景",
    climate: "氣候",
    scenery: "景象描述",
    autoWeather: "自動天氣",
    refreshLife: "更新脈絡",
    fetchAstro: "更新快照",
    howItWorks: "運作方式",
    flow1: "月份檢視同時支援公曆格線與來源曆法真實月邊界。",
    flow2: "已選日期會投影到國際曆法並呈現當日細節。",
    flow3: "有 API 時會使用 /day-profile 與 /calendar-month 回傳可供 agent 使用的標準 JSON。",
    prevMonth: "上個月",
    nextMonth: "下個月",
    monthModes: {
      gregorian_grid: "公曆格線",
      source_month: "來源曆法真實月份",
    },
    labels: {
      isoDate: "ISO 日期",
      selectedCalendar: "目前曆法",
      gregorianDate: "公曆",
      unixTimestamp: "時間戳",
      weekday: "星期",
      solarTerm: "節氣",
      sexagenary: "干支",
      lunar: "農曆",
      week: "ISO 週",
      bazi: "八字",
      yi: "宜",
      ji: "忌",
      moonPhase: "月相",
      sunSign: "太陽星座",
      moonSign: "月亮星座",
      lifeId: "生命 ID",
      age: "已存活",
      stage: "階段",
      birthday: "生日",
      nextBirthday: "下次生日",
      birthInstant: "生命起始",
      nowInstant: "目前時間",
      place: "地點",
      weather: "天氣",
      scenePrompt: "場景提示",
      seedBrief: "連續性摘要",
    },
    sidebarFilters: "側欄模組",
    legacyDetails: "原本日期細節",
    easternMetaphysics: "東方曆法日課",
    westernMetaphysics: "西方曆法日課",
    rawJson: "原始 JSON",
    status: {
      localApprox: "本地近似",
      fetching: "向 API 讀取中...",
      synced: "已與 API 同步",
      failedFallback: "API 失敗，使用本地回退",
      badUrl: "API URL 格式錯誤",
      monthApiRequired: "來源月份模式需要 API Base",
      monthUnsupported: "此曆法沒有對應 month-mode",
      monthSynced: "來源月份已同步",
    },
  },
  "zh-CN": {
    title: "星历中控台",
    subtitle: "给 AI agents 与 OpenClaw 工作流使用的时间戳优先历法 + 黄道界面",
    language: "语言",
    calendar: "历法",
    timezone: "时区",
    monthMode: "月份模式",
    apiBase: "Clawlendar API Base（可选）",
    today: "今天",
    resetApi: "清除 API",
    selectedDate: "已选日期",
    dayProfile: "当日详情",
    lifeContext: "时空脉络",
    astroClock: "星辰时钟",
    hour: "小时",
    birthTime: "生命起始时间",
    entityId: "实体 ID",
    role: "角色",
    soul: "灵魂特质",
    location: "地点",
    latitude: "纬度",
    longitude: "经度",
    background: "背景",
    climate: "气候",
    scenery: "景象描述",
    autoWeather: "自动天气",
    refreshLife: "更新脉络",
    fetchAstro: "更新快照",
    howItWorks: "运作方式",
    flow1: "月份检视同时支持公历格线与来源历法真实月边界。",
    flow2: "已选日期会投影到国际历法并呈现当日细节。",
    flow3: "有 API 时会使用 /day-profile 与 /calendar-month 回传可供 agent 使用的标准 JSON。",
    prevMonth: "上个月",
    nextMonth: "下个月",
    monthModes: {
      gregorian_grid: "公历格线",
      source_month: "来源历法真实月份",
    },
    labels: {
      isoDate: "ISO 日期",
      selectedCalendar: "当前历法",
      gregorianDate: "公历",
      unixTimestamp: "时间戳",
      weekday: "星期",
      solarTerm: "节气",
      sexagenary: "干支",
      lunar: "农历",
      week: "ISO 周",
      bazi: "八字",
      yi: "宜",
      ji: "忌",
      moonPhase: "月相",
      sunSign: "太阳星座",
      moonSign: "月亮星座",
      lifeId: "生命 ID",
      age: "已存活",
      stage: "阶段",
      birthday: "生日",
      nextBirthday: "下次生日",
      birthInstant: "生命起始",
      nowInstant: "当前时间",
      place: "地点",
      weather: "天气",
      scenePrompt: "场景提示",
      seedBrief: "连续性摘要",
    },
    sidebarFilters: "侧栏模块",
    legacyDetails: "原本日期细节",
    easternMetaphysics: "东方历法日课",
    westernMetaphysics: "西方历法日课",
    rawJson: "原始 JSON",
    status: {
      localApprox: "本地近似",
      fetching: "向 API 读取中...",
      synced: "已与 API 同步",
      failedFallback: "API 失败，使用本地回退",
      badUrl: "API URL 格式错误",
      monthApiRequired: "来源月份模式需要 API Base",
      monthUnsupported: "此历法没有对应 month-mode",
      monthSynced: "来源月份已同步",
    },
  },
  ja: {
    title: "星暦スタジオ",
    subtitle: "AIエージェント向けのタイムスタンプ優先カレンダー + 黄道インターフェース",
    language: "言語",
    calendar: "暦法",
    timezone: "タイムゾーン",
    monthMode: "月表示モード",
    apiBase: "Clawlendar API Base（任意）",
    today: "今日",
    resetApi: "APIリセット",
    selectedDate: "選択日",
    dayProfile: "日次プロファイル",
    lifeContext: "時空コンテキスト",
    astroClock: "星辰クロック",
    hour: "時刻",
    birthTime: "起点時刻",
    entityId: "エンティティ ID",
    role: "役割",
    soul: "魂の特性",
    location: "場所",
    latitude: "緯度",
    longitude: "経度",
    background: "背景",
    climate: "気候",
    scenery: "景観メモ",
    autoWeather: "天気を自動取得",
    refreshLife: "コンテキスト更新",
    fetchAstro: "スナップショット更新",
    howItWorks: "仕組み",
    flow1: "月表示は通常グリッドと実際の暦月境界を切り替え可能。",
    flow2: "選択日を国際暦へ投影し、日次詳細を表示。",
    flow3: "API接続時は /day-profile と /calendar-month の正規JSONを使用。",
    prevMonth: "前の月",
    nextMonth: "次の月",
    monthModes: {
      gregorian_grid: "グレゴリオ暦グリッド",
      source_month: "暦法の実月境界",
    },
    labels: {
      isoDate: "ISO日付",
      selectedCalendar: "選択暦法",
      gregorianDate: "グレゴリオ暦",
      unixTimestamp: "タイムスタンプ",
      weekday: "曜日",
      solarTerm: "二十四節気",
      sexagenary: "干支",
      lunar: "旧暦",
      week: "ISO週",
      bazi: "八字",
      yi: "宜",
      ji: "忌",
      moonPhase: "月相",
      sunSign: "太陽星座",
      moonSign: "月星座",
      lifeId: "ライフ ID",
      age: "経過時間",
      stage: "段階",
      birthday: "誕生日",
      nextBirthday: "次の誕生日",
      birthInstant: "起点時刻",
      nowInstant: "現在時刻",
      place: "場所",
      weather: "天気",
      scenePrompt: "シーンプロンプト",
      seedBrief: "連続性サマリー",
    },
    sidebarFilters: "サイドバー表示",
    legacyDetails: "従来の日次詳細",
    easternMetaphysics: "東洋暦メタ情報",
    westernMetaphysics: "西洋暦メタ情報",
    rawJson: "生JSON",
    status: {
      localApprox: "ローカル近似",
      fetching: "API取得中...",
      synced: "API同期済み",
      failedFallback: "API失敗、ローカル近似を使用",
      badUrl: "API URLが不正",
      monthApiRequired: "実月境界モードにはAPIが必要",
      monthUnsupported: "この暦法は month-mode 非対応",
      monthSynced: "月境界を同期しました",
    },
  },
  ar: {
    title: "استوديو التقويم السماوي",
    subtitle: "واجهة تقويم وزودياك تعتمد أولاً على الطابع الزمني لوكلاء الذكاء الاصطناعي",
    language: "اللغة",
    calendar: "التقويم",
    timezone: "المنطقة الزمنية",
    monthMode: "نمط الشهر",
    apiBase: "رابط API لـ Clawlendar (اختياري)",
    today: "اليوم",
    resetApi: "إعادة ضبط API",
    selectedDate: "التاريخ المحدد",
    dayProfile: "تفاصيل اليوم",
    lifeContext: "سياق الزمان والمكان",
    astroClock: "الساعة الفلكية",
    hour: "الساعة",
    birthTime: "وقت البداية",
    entityId: "معرّف الكيان",
    role: "الدور",
    soul: "سمات الروح",
    location: "الموقع",
    latitude: "خط العرض",
    longitude: "خط الطول",
    background: "الخلفية",
    climate: "المناخ",
    scenery: "وصف المشهد",
    autoWeather: "طقس تلقائي",
    refreshLife: "تحديث السياق",
    fetchAstro: "تحديث اللقطة",
    howItWorks: "كيف يعمل",
    flow1: "يمكن عرض الشهر كشبكة غريغورية أو حدود شهر حقيقية للتقويم المختار.",
    flow2: "يتم إسقاط التاريخ المختار على تقاويم دولية مع تفاصيل اليوم.",
    flow3: "عند توفر API يتم استخدام /day-profile و /calendar-month بصيغة JSON معيارية.",
    prevMonth: "الشهر السابق",
    nextMonth: "الشهر التالي",
    monthModes: {
      gregorian_grid: "شبكة غريغورية",
      source_month: "حدود شهر حقيقية",
    },
    labels: {
      isoDate: "تاريخ ISO",
      selectedCalendar: "التقويم الحالي",
      gregorianDate: "غريغوري",
      unixTimestamp: "الطابع الزمني",
      weekday: "اليوم",
      solarTerm: "الفصل الشمسي",
      sexagenary: "الجذوع والفروع",
      lunar: "قمري",
      week: "أسبوع ISO",
      bazi: "الأعمدة الثمانية",
      yi: "مناسب",
      ji: "غير مناسب",
      moonPhase: "طور القمر",
      sunSign: "برج الشمس",
      moonSign: "برج القمر",
      lifeId: "معرّف الحياة",
      age: "العمر",
      stage: "المرحلة",
      birthday: "يوم الميلاد",
      nextBirthday: "الميلاد القادم",
      birthInstant: "لحظة البداية",
      nowInstant: "اللحظة الحالية",
      place: "المكان",
      weather: "الطقس",
      scenePrompt: "وصف المشهد",
      seedBrief: "ملخص الاستمرارية",
    },
    sidebarFilters: "وحدات الشريط الجانبي",
    legacyDetails: "التفاصيل الأصلية",
    easternMetaphysics: "الروزنامة الشرقية",
    westernMetaphysics: "الروزنامة الغربية",
    rawJson: "JSON الخام",
    status: {
      localApprox: "تقريب محلي",
      fetching: "جاري جلب البيانات...",
      synced: "تمت المزامنة",
      failedFallback: "فشل API، تم استخدام بديل محلي",
      badUrl: "رابط API غير صالح",
      monthApiRequired: "نمط حدود الشهر يحتاج API",
      monthUnsupported: "هذا التقويم لا يدعم month-mode",
      monthSynced: "تمت مزامنة الشهر",
    },
  },
};

const LANGUAGE_OPTIONS = [
  { code: "en", label: "English" },
  { code: "zh-CN", label: "简体中文" },
  { code: "zh-TW", label: "繁體中文" },
  { code: "ja", label: "日本語" },
  { code: "ar", label: "العربية" },
];

const CALENDAR_LABELS = {
  gregory: { en: "Gregorian", "zh-CN": "公历", "zh-TW": "公曆", ja: "グレゴリオ暦", ar: "غريغوري" },
  roc: { en: "Minguo (ROC)", "zh-CN": "民国纪年", "zh-TW": "民國紀年", ja: "民国紀元", ar: "مينغو" },
  japanese: { en: "Japanese Era", "zh-CN": "日本年号", "zh-TW": "日本年號", ja: "和暦", ar: "العصر الياباني" },
  buddhist: { en: "Buddhist Era", "zh-CN": "佛历", "zh-TW": "佛曆", ja: "仏暦", ar: "التقويم البوذي" },
  islamic: { en: "Islamic", "zh-CN": "伊斯兰历", "zh-TW": "伊斯蘭曆", ja: "イスラム暦", ar: "الهجري" },
  hebrew: { en: "Hebrew", "zh-CN": "希伯来历", "zh-TW": "希伯來曆", ja: "ヘブライ暦", ar: "العبري" },
  persian: { en: "Persian", "zh-CN": "波斯历", "zh-TW": "波斯曆", ja: "ペルシア暦", ar: "الفارسي" },
  chinese: { en: "Chinese", "zh-CN": "农历", "zh-TW": "農曆", ja: "中国暦", ar: "الصيني" },
};

const CALENDAR_TO_SOURCE = {
  gregory: "gregorian",
  roc: "minguo",
  japanese: "japanese_era",
  buddhist: "buddhist",
  islamic: "islamic",
  hebrew: "hebrew",
  persian: "persian",
  chinese: "chinese_lunar",
};

const TIMEZONES = [
  "UTC",
  "Asia/Taipei",
  "Asia/Tokyo",
  "Asia/Shanghai",
  "Asia/Hong_Kong",
  "America/New_York",
  "America/Los_Angeles",
  "Europe/London",
  "Europe/Berlin",
  "Africa/Cairo",
  "Asia/Dubai",
];

const WEEK_START_BY_LANGUAGE = { en: 0, "zh-CN": 1, "zh-TW": 1, ja: 0, ar: 6 };
const STORAGE_KEY = "clawlendar-web-state-v4";
const DEFAULT_BIRTH_INPUT = "2000-01-01T00:00";
const DEFAULT_LIFE_CONFIG = {
  birthLocalDatetime: DEFAULT_BIRTH_INPUT,
  entityId: "lobster-001",
  role: "digital lifeform",
  soul: "continuity-first and adaptive",
  locationName: "",
  latitude: "",
  longitude: "",
  background: "",
  climate: "",
  sceneryNote: "",
  autoWeather: true,
};

const ZODIAC_SIGNS = [
  { name: "aries", symbol: "♈" },
  { name: "taurus", symbol: "♉" },
  { name: "gemini", symbol: "♊" },
  { name: "cancer", symbol: "♋" },
  { name: "leo", symbol: "♌" },
  { name: "virgo", symbol: "♍" },
  { name: "libra", symbol: "♎" },
  { name: "scorpio", symbol: "♏" },
  { name: "sagittarius", symbol: "♐" },
  { name: "capricorn", symbol: "♑" },
  { name: "aquarius", symbol: "♒" },
  { name: "pisces", symbol: "♓" },
];

const BODY_STYLE = {
  sun: { color: "#f4c26d", short: "Su", symbol: "☉" },
  moon: { color: "#d5dcff", short: "Mo", symbol: "☽" },
  mercury: { color: "#95f7ef", short: "Me", symbol: "☿" },
  venus: { color: "#ff9bd7", short: "Ve", symbol: "♀" },
  mars: { color: "#ff8d8d", short: "Ma", symbol: "♂" },
  jupiter: { color: "#ffc68f", short: "Ju", symbol: "♃" },
  saturn: { color: "#efe7a0", short: "Sa", symbol: "♄" },
};

const REMAINDER_SYMBOLS = {
  ascending_node: "☊",
  descending_node: "☋",
  lunar_apogee_mean: "⚸",
  earth_perihelion: "⊕",
};

const ASPECT_COLORS = {
  conjunction: "rgba(255, 255, 255, 0.55)",
  sextile: "rgba(106, 255, 221, 0.5)",
  square: "rgba(255, 145, 145, 0.5)",
  trine: "rgba(108, 182, 255, 0.5)",
  opposition: "rgba(255, 219, 123, 0.5)",
};

const state = {
  language: "zh-CN",
  calendar: "chinese",
  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "Asia/Shanghai",
  monthMode: "source_month",
  viewYear: new Date().getFullYear(),
  viewMonth: new Date().getMonth(),
  selectedDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 12, 0, 0),
  selectedHour: 12,
  apiBase: "/api",
  astroSnapshot: null,
  dayProfile: null,
  lifeContext: null,
  monthData: null,
  lifeConfig: { ...DEFAULT_LIFE_CONFIG },
  sidebarModules: {
    legacy: true,
    eastern: true,
    western: true,
    rawJson: true,
  },
};

const refs = {
  starfield: document.getElementById("starfield"),
  languageSelect: document.getElementById("languageSelect"),
  calendarSelect: document.getElementById("calendarSelect"),
  timezoneSelect: document.getElementById("timezoneSelect"),
  monthModeSelect: document.getElementById("monthModeSelect"),
  apiBaseInput: document.getElementById("apiBaseInput"),
  prevMonthBtn: document.getElementById("prevMonthBtn"),
  nextMonthBtn: document.getElementById("nextMonthBtn"),
  viewYearSelect: document.getElementById("viewYearSelect"),
  viewMonthSelect: document.getElementById("viewMonthSelect"),
  todayBtn: document.getElementById("todayBtn"),
  resetApiBtn: document.getElementById("resetApiBtn"),
  monthSubtitle: document.getElementById("monthSubtitle"),

  // Dashboard Tops
  mainDatePrimary: document.getElementById("mainDatePrimary"),
  mainWeekday: document.getElementById("mainWeekday"),
  mainDateFull: document.getElementById("mainDateFull"),
  engineStatusIndicator: document.getElementById("engineStatusIndicator"),
  weekdayRow: document.getElementById("weekdayRow"),
  calendarGrid: document.getElementById("calendarGrid"),
  selectedDateMeta: document.getElementById("selectedDateMeta"),
  dayProfileCards: document.getElementById("dayProfileCards"),
  dayProfileOutput: document.getElementById("dayProfileOutput"),
  birthInput: document.getElementById("birthInput"),
  entityIdInput: document.getElementById("entityIdInput"),
  roleInput: document.getElementById("roleInput"),
  soulInput: document.getElementById("soulInput"),
  locationInput: document.getElementById("locationInput"),
  latitudeInput: document.getElementById("latitudeInput"),
  longitudeInput: document.getElementById("longitudeInput"),
  backgroundInput: document.getElementById("backgroundInput"),
  climateInput: document.getElementById("climateInput"),
  sceneryInput: document.getElementById("sceneryInput"),
  autoWeatherToggle: document.getElementById("autoWeatherToggle"),
  refreshLifeBtn: document.getElementById("refreshLifeBtn"),
  lifeContextCards: document.getElementById("lifeContextCards"),
  lifeContextOutput: document.getElementById("lifeContextOutput"),
  sidebarLegacyToggle: document.getElementById("sidebarLegacyToggle"),
  sidebarEasternToggle: document.getElementById("sidebarEasternToggle"),
  sidebarWesternToggle: document.getElementById("sidebarWesternToggle"),
  sidebarRawJsonToggle: document.getElementById("sidebarRawJsonToggle"),
  hourSlider: document.getElementById("hourSlider"),
  hourLabel: document.getElementById("hourLabel"),
  fetchAstroBtn: document.getElementById("fetchAstroBtn"),
  astroStatus: document.getElementById("astroStatus"),
  zodiacWheel: document.getElementById("zodiacWheel"),
  astroOutput: document.getElementById("astroOutput"),
};

function i18n() {
  return UI_TEXT[state.language] || UI_TEXT.en;
}

function localeForLanguage(language) {
  if (language === "zh-CN") return "zh-CN";
  if (language === "zh-TW") return "zh-TW";
  if (language === "ja") return "ja-JP";
  if (language === "ar") return "ar";
  return "en-US";
}

function backendLocaleForLanguage(language) {
  if (language === "zh-CN") return "zh-CN";
  if (language === "zh-TW") return "zh-TW";
  if (language === "ja") return "ja";
  if (language === "ar") return "ar";
  return "en";
}

function formatLocaleWithCalendar(language, calendar) {
  return `${localeForLanguage(language)}-u-ca-${calendar}`;
}

function toIsoDate(date) {
  const y = date.getFullYear();
  const m = `${date.getMonth() + 1}`.padStart(2, "0");
  const d = `${date.getDate()}`.padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function selectedInstantDate() {
  return new Date(
    state.selectedDate.getFullYear(),
    state.selectedDate.getMonth(),
    state.selectedDate.getDate(),
    state.selectedHour,
    0,
    0
  );
}

function toDateTimeLocalValue(date) {
  const y = date.getFullYear();
  const m = `${date.getMonth() + 1}`.padStart(2, "0");
  const d = `${date.getDate()}`.padStart(2, "0");
  const h = `${date.getHours()}`.padStart(2, "0");
  const min = `${date.getMinutes()}`.padStart(2, "0");
  return `${y}-${m}-${d}T${h}:${min}`;
}

function selectedLocalDateTimeString() {
  const selected = selectedInstantDate();
  const y = selected.getFullYear();
  const m = `${selected.getMonth() + 1}`.padStart(2, "0");
  const d = `${selected.getDate()}`.padStart(2, "0");
  const h = `${selected.getHours()}`.padStart(2, "0");
  return `${y}-${m}-${d}T${h}:00:00`;
}

function normalizeLifeConfig(config) {
  return {
    birthLocalDatetime: (config.birthLocalDatetime || DEFAULT_BIRTH_INPUT).trim(),
    entityId: (config.entityId || "").trim(),
    role: (config.role || "").trim(),
    soul: (config.soul || "").trim(),
    locationName: (config.locationName || "").trim(),
    latitude: `${config.latitude ?? ""}`.trim(),
    longitude: `${config.longitude ?? ""}`.trim(),
    background: (config.background || "").trim(),
    climate: (config.climate || "").trim(),
    sceneryNote: (config.sceneryNote || "").trim(),
    autoWeather: config.autoWeather !== false,
  };
}

function parseOptionalNumber(value) {
  if (value === "") return null;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function buildLifeContextRequestPayload() {
  const config = normalizeLifeConfig(state.lifeConfig);
  const spacePayload = {};
  const subjectPayload = {};

  if (config.locationName) spacePayload.location_name = config.locationName;
  if (config.background) spacePayload.background = config.background;
  if (config.climate) spacePayload.climate = config.climate;
  if (config.sceneryNote) spacePayload.scenery_note = config.sceneryNote;
  const lat = parseOptionalNumber(config.latitude);
  const lon = parseOptionalNumber(config.longitude);
  if (lat !== null) spacePayload.latitude = lat;
  if (lon !== null) spacePayload.longitude = lon;

  if (config.entityId) subjectPayload.entity_id = config.entityId;
  if (config.role) subjectPayload.role = config.role;
  if (config.soul) subjectPayload.soul = config.soul;

  return {
    birth_input_payload: { local_datetime: `${config.birthLocalDatetime}:00` },
    now_input_payload: { local_datetime: selectedLocalDateTimeString() },
    timezone: state.timezone,
    date_basis: "local",
    space_payload: Object.keys(spacePayload).length > 0 ? spacePayload : null,
    subject_payload: Object.keys(subjectPayload).length > 0 ? subjectPayload : null,
    locale: backendLocaleForLanguage(state.language),
    auto_weather: config.autoWeather,
  };
}

function formatIsoLocal(date) {
  const y = date.getFullYear();
  const m = `${date.getMonth() + 1}`.padStart(2, "0");
  const d = `${date.getDate()}`.padStart(2, "0");
  const h = `${date.getHours()}`.padStart(2, "0");
  const min = `${date.getMinutes()}`.padStart(2, "0");
  const s = `${date.getSeconds()}`.padStart(2, "0");
  const offset = -date.getTimezoneOffset();
  const sign = offset >= 0 ? "+" : "-";
  const absOffset = Math.abs(offset);
  const oh = `${Math.floor(absOffset / 60)}`.padStart(2, "0");
  const om = `${absOffset % 60}`.padStart(2, "0");
  return `${y}-${m}-${d}T${h}:${min}:${s}${sign}${oh}:${om}`;
}

function formatAgeReadable(seconds) {
  const day = 86400;
  const hour = 3600;
  const minute = 60;
  const days = Math.floor(seconds / day);
  const hours = Math.floor((seconds % day) / hour);
  const minutes = Math.floor((seconds % hour) / minute);
  return `${days}d ${hours}h ${minutes}m`;
}

function lifeStageFromAgeDays(ageDays) {
  if (ageDays < 30) return "newborn";
  if (ageDays < 365) return "juvenile";
  if (ageDays < 3650) return "young";
  if (ageDays < 7300) return "adult";
  return "elder";
}

function localBirthdayProfile(birthDate, nowDate) {
  const month = birthDate.getMonth() + 1;
  const day = birthDate.getDate();
  const todayKey = `${nowDate.getMonth() + 1}-${nowDate.getDate()}`;
  const isToday = todayKey === `${month}-${day}`;

  let yearsElapsed = nowDate.getFullYear() - birthDate.getFullYear();
  if (
    nowDate.getMonth() < birthDate.getMonth()
    || (nowDate.getMonth() === birthDate.getMonth() && nowDate.getDate() < birthDate.getDate())
  ) {
    yearsElapsed -= 1;
  }
  if (yearsElapsed < 0) yearsElapsed = 0;

  let nextBirthday = new Date(nowDate.getFullYear(), birthDate.getMonth(), birthDate.getDate(), 12, 0, 0);
  if (nextBirthday < new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate(), 12, 0, 0)) {
    nextBirthday = new Date(nowDate.getFullYear() + 1, birthDate.getMonth(), birthDate.getDate(), 12, 0, 0);
  }
  const dayMs = 24 * 60 * 60 * 1000;
  const startNow = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate(), 12, 0, 0).getTime();
  const daysUntil = Math.round((nextBirthday.getTime() - startNow) / dayMs);

  return {
    month,
    day,
    is_today: isToday,
    years_elapsed: yearsElapsed,
    next_birthday_date_local: toIsoDate(nextBirthday),
    days_until_next_birthday: daysUntil,
  };
}

function computeLocalLifeContext() {
  const normalized = normalizeLifeConfig(state.lifeConfig);
  const now = selectedInstantDate();
  const parsedBirth = new Date(`${normalized.birthLocalDatetime}:00`);
  const birth = Number.isNaN(parsedBirth.getTime()) ? new Date(`${DEFAULT_BIRTH_INPUT}:00`) : parsedBirth;
  const safeNow = now.getTime() < birth.getTime() ? new Date(birth.getTime()) : now;
  const ageSeconds = Math.max(0, Math.floor((safeNow.getTime() - birth.getTime()) / 1000));
  const ageDays = ageSeconds / 86400;
  const role = normalized.role || "digital lifeform";
  const soul = normalized.soul || "continuity-first and adaptive";
  const locationName = normalized.locationName || "unanchored-space";
  const lifeId = normalized.entityId || `LIFE-${Math.floor(birth.getTime() / 1000)}`;
  const seedBrief = `${role} @ ${locationName} | stage=${lifeStageFromAgeDays(ageDays)} | age=${formatAgeReadable(ageSeconds)} | soul=${soul}`;

  const weatherNote = normalized.autoWeather ? "Weather requires API + provider." : "Auto weather disabled.";
  return {
    command: "life_context",
    source: "local_approximation",
    timezone: state.timezone,
    date_basis: "local",
    locale: backendLocaleForLanguage(state.language),
    life: {
      life_id: lifeId,
      birth_instant: {
        timestamp: birth.getTime() / 1000,
        timestamp_ms: birth.getTime(),
        iso_utc: birth.toISOString(),
        iso_local: formatIsoLocal(birth),
      },
      now_instant: {
        timestamp: safeNow.getTime() / 1000,
        timestamp_ms: safeNow.getTime(),
        iso_utc: safeNow.toISOString(),
        iso_local: formatIsoLocal(safeNow),
      },
      age: {
        seconds: ageSeconds,
        minutes: Number((ageSeconds / 60).toFixed(3)),
        hours: Number((ageSeconds / 3600).toFixed(3)),
        days: Number(ageDays.toFixed(6)),
        readable: formatAgeReadable(ageSeconds),
        stage: lifeStageFromAgeDays(ageDays),
      },
      birthday: localBirthdayProfile(birth, safeNow),
      continuity: {
        birth_before_now: safeNow.getTime() >= birth.getTime(),
        tick_timestamp: Math.floor(safeNow.getTime() / 1000),
        seed_brief: seedBrief,
      },
    },
    space: {
      location_name: normalized.locationName || null,
      latitude: parseOptionalNumber(normalized.latitude),
      longitude: parseOptionalNumber(normalized.longitude),
      background: normalized.background || null,
      climate: normalized.climate || null,
      scenery_note: normalized.sceneryNote || null,
    },
    environment: {
      climate: normalized.climate || null,
      weather_note: weatherNote,
      scenery_note: normalized.sceneryNote || null,
      weather: null,
    },
    subject: {
      entity_id: normalized.entityId || null,
      role: normalized.role || null,
      soul: normalized.soul || null,
    },
    world_context: {
      scene_prompt: `At local time ${formatIsoLocal(safeNow)}, in ${locationName}, continue the life timeline of ${role} with stable memory continuity.`,
    },
    warnings: ["Local life_context approximation without API weather enrichment."],
  };
}

function parseApiBase(raw) {
  const value = raw.trim();
  if (!value) return "";
  if (value.startsWith("http")) {
    try {
      const url = new URL(value);
      return url.toString().replace(/\/$/, "");
    } catch (_error) {
      return null;
    }
  }
  if (value.startsWith("/")) {
    return value.replace(/\/$/, "");
  }
  return null;
}

async function apiPost(path, payload) {
  const normalized = parseApiBase(state.apiBase);
  if (!normalized) {
    throw new Error("API_BASE_REQUIRED");
  }
  const response = await fetch(`${normalized}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  if (!response.ok) {
    const detail = typeof data?.detail === "string" ? data.detail : "request failed";
    throw new Error(detail);
  }
  return data;
}

function setStatus(key, isError = false) {
  refs.astroStatus.textContent = i18n().status[key] || "";
  refs.astroStatus.classList.toggle("error", Boolean(isError));
}

function updateEngineIndicator() {
  const isApi = state.apiBase.length > 0;
  refs.engineStatusIndicator.textContent = isApi ? "REMOTE API" : "LOCAL MODE";
  refs.engineStatusIndicator.className = isApi ? "engine-api" : "engine-local";
}

function normalizeDegrees(value) {
  const result = value % 360;
  return result < 0 ? result + 360 : result;
}

function zodiacSignFromLongitude(longitude) {
  return ZODIAC_SIGNS[Math.floor(normalizeDegrees(longitude) / 30) % 12];
}

function solveKepler(meanAnomalyRad, eccentricity) {
  let estimate = meanAnomalyRad + eccentricity * Math.sin(meanAnomalyRad) * (1 + eccentricity * Math.cos(meanAnomalyRad));
  for (let i = 0; i < 10; i += 1) {
    const delta = (estimate - eccentricity * Math.sin(estimate) - meanAnomalyRad) / (1 - eccentricity * Math.cos(estimate));
    estimate -= delta;
    if (Math.abs(delta) < 1e-9) break;
  }
  return estimate;
}

function orbitalElements(body, d) {
  const defs = {
    earth: { N: 0, i: 0, w: 282.9404 + 4.70935e-5 * d, a: 1.0, e: 0.016709 - 1.151e-9 * d, M: 356.047 + 0.9856002585 * d },
    moon: { N: 125.1228 - 0.0529538083 * d, i: 5.1454, w: 318.0634 + 0.1643573223 * d, a: 60.2666, e: 0.0549, M: 115.3654 + 13.0649929509 * d },
    mercury: { N: 48.3313 + 3.24587e-5 * d, i: 7.0047 + 5e-8 * d, w: 29.1241 + 1.01444e-5 * d, a: 0.387098, e: 0.205635 + 5.59e-10 * d, M: 168.6562 + 4.0923344368 * d },
    venus: { N: 76.6799 + 2.4659e-5 * d, i: 3.3946 + 2.75e-8 * d, w: 54.891 + 1.38374e-5 * d, a: 0.72333, e: 0.006773 - 1.302e-9 * d, M: 48.0052 + 1.6021302244 * d },
    mars: { N: 49.5574 + 2.11081e-5 * d, i: 1.8497 - 1.78e-8 * d, w: 286.5016 + 2.92961e-5 * d, a: 1.523688, e: 0.093405 + 2.516e-9 * d, M: 18.6021 + 0.5240207766 * d },
    jupiter: { N: 100.4542 + 2.76854e-5 * d, i: 1.303 - 1.557e-7 * d, w: 273.8777 + 1.64505e-5 * d, a: 5.20256, e: 0.048498 + 4.469e-9 * d, M: 19.895 + 0.0830853001 * d },
    saturn: { N: 113.6634 + 2.3898e-5 * d, i: 2.4886 - 1.081e-7 * d, w: 339.3939 + 2.97661e-5 * d, a: 9.55475, e: 0.055546 - 9.499e-9 * d, M: 316.967 + 0.0334442282 * d },
  };
  return defs[body];
}

function orbitalPosition(elements) {
  const N = (normalizeDegrees(elements.N) * Math.PI) / 180;
  const i = (elements.i * Math.PI) / 180;
  const w = (normalizeDegrees(elements.w) * Math.PI) / 180;
  const M = (normalizeDegrees(elements.M) * Math.PI) / 180;
  const E = solveKepler(M, elements.e);
  const xv = elements.a * (Math.cos(E) - elements.e);
  const yv = elements.a * (Math.sqrt(1 - elements.e * elements.e) * Math.sin(E));
  const v = Math.atan2(yv, xv);
  const r = Math.sqrt(xv * xv + yv * yv);

  const xh = r * (Math.cos(N) * Math.cos(v + w) - Math.sin(N) * Math.sin(v + w) * Math.cos(i));
  const yh = r * (Math.sin(N) * Math.cos(v + w) + Math.cos(N) * Math.sin(v + w) * Math.cos(i));
  const zh = r * (Math.sin(v + w) * Math.sin(i));
  const longitude = normalizeDegrees((Math.atan2(yh, xh) * 180) / Math.PI);
  return { x: xh, y: yh, z: zh, r, longitude };
}

function angularSeparation(a, b) {
  const diff = Math.abs(normalizeDegrees(a) - normalizeDegrees(b));
  return diff <= 180 ? diff : 360 - diff;
}

function majorAspects(points) {
  const defs = [
    ["conjunction", 0, 8],
    ["sextile", 60, 5],
    ["square", 90, 6],
    ["trine", 120, 6],
    ["opposition", 180, 8],
  ];
  const names = Object.keys(points);
  const aspects = [];
  for (let i = 0; i < names.length; i += 1) {
    for (let j = i + 1; j < names.length; j += 1) {
      const left = names[i];
      const right = names[j];
      const separation = angularSeparation(points[left], points[right]);
      let best = null;
      for (const [aspect, exact, orb] of defs) {
        const distance = Math.abs(separation - exact);
        if (distance <= orb && (!best || distance < best.orb)) {
          best = { aspect, exact, orb: distance, separation };
        }
      }
      if (best) {
        aspects.push({
          left,
          right,
          aspect: best.aspect,
          exact_angle_deg: best.exact,
          separation_deg: Number(best.separation.toFixed(6)),
          orb_deg: Number(best.orb.toFixed(6)),
        });
      }
    }
  }
  aspects.sort((a, b) => a.orb_deg - b.orb_deg);
  return aspects;
}

function computeLocalAstroSnapshot() {
  const instant = selectedInstantDate();
  const jd = instant.getTime() / 86400000 + 2440587.5;
  const d = jd - 2451543.5;

  const earth = orbitalPosition(orbitalElements("earth", d));
  const sunLongitude = normalizeDegrees((Math.atan2(-earth.y, -earth.x) * 180) / Math.PI);
  const moonEl = orbitalElements("moon", d);
  const moon = orbitalPosition(moonEl);

  const raw = {
    sun: { longitude_deg: Number(sunLongitude.toFixed(6)), zodiac_sign: zodiacSignFromLongitude(sunLongitude).name },
    moon: { longitude_deg: Number(moon.longitude.toFixed(6)), zodiac_sign: zodiacSignFromLongitude(moon.longitude).name },
  };
  for (const name of ["mercury", "venus", "mars", "jupiter", "saturn"]) {
    const helio = orbitalPosition(orbitalElements(name, d));
    const gx = helio.x - earth.x;
    const gy = helio.y - earth.y;
    const lon = normalizeDegrees((Math.atan2(gy, gx) * 180) / Math.PI);
    raw[name] = { longitude_deg: Number(lon.toFixed(6)), zodiac_sign: zodiacSignFromLongitude(lon).name };
  }

  const points = {};
  Object.keys(BODY_STYLE).forEach((body) => {
    points[body] = raw[body].longitude_deg;
  });

  const ascNode = normalizeDegrees(moonEl.N);
  const descNode = normalizeDegrees(ascNode + 180);
  const lunarApogee = normalizeDegrees(moonEl.N + moonEl.w + 180);
  const earthPerihelion = normalizeDegrees(orbitalElements("earth", d).w);

  return {
    command: "astro_snapshot",
    source: "local_approximation",
    zodiac_system: "tropical",
    instant: {
      timestamp: instant.getTime() / 1000,
      iso_utc: new Date(instant.getTime()).toISOString(),
      julian_day: Number(jd.toFixed(6)),
    },
    seven_governors: Object.keys(BODY_STYLE).map((name) => ({
      name,
      symbol: BODY_STYLE[name]?.symbol || null,
      longitude_deg: raw[name].longitude_deg,
      zodiac_sign: raw[name].zodiac_sign,
    })),
    four_remainders: [
      {
        name: "ascending_node",
        symbol: REMAINDER_SYMBOLS.ascending_node,
        longitude_deg: Number(ascNode.toFixed(6)),
        zodiac_sign: zodiacSignFromLongitude(ascNode).name,
      },
      {
        name: "descending_node",
        symbol: REMAINDER_SYMBOLS.descending_node,
        longitude_deg: Number(descNode.toFixed(6)),
        zodiac_sign: zodiacSignFromLongitude(descNode).name,
      },
      {
        name: "lunar_apogee_mean",
        symbol: REMAINDER_SYMBOLS.lunar_apogee_mean,
        longitude_deg: Number(lunarApogee.toFixed(6)),
        zodiac_sign: zodiacSignFromLongitude(lunarApogee).name,
      },
      {
        name: "earth_perihelion",
        symbol: REMAINDER_SYMBOLS.earth_perihelion,
        longitude_deg: Number(earthPerihelion.toFixed(6)),
        zodiac_sign: zodiacSignFromLongitude(earthPerihelion).name,
      },
    ],
    major_aspects: majorAspects(points),
    raw_positions: raw,
    warnings: ["Local analytical approximation."],
  };
}

const SOLAR_TERM_APPROX = [
  ["minor_cold", 1, 5],
  ["major_cold", 1, 20],
  ["start_of_spring", 2, 4],
  ["rain_water", 2, 19],
  ["awakening_of_insects", 3, 6],
  ["spring_equinox", 3, 21],
  ["clear_and_bright", 4, 5],
  ["grain_rain", 4, 20],
  ["start_of_summer", 5, 6],
  ["grain_full", 5, 21],
  ["grain_in_ear", 6, 6],
  ["summer_solstice", 6, 21],
  ["minor_heat", 7, 7],
  ["major_heat", 7, 23],
  ["start_of_autumn", 8, 8],
  ["end_of_heat", 8, 23],
  ["white_dew", 9, 8],
  ["autumn_equinox", 9, 23],
  ["cold_dew", 10, 8],
  ["frost_descent", 10, 23],
  ["start_of_winter", 11, 7],
  ["minor_snow", 11, 22],
  ["major_snow", 12, 7],
  ["winter_solstice", 12, 22],
];

const STEMS = ["jia", "yi", "bing", "ding", "wu", "ji", "geng", "xin", "ren", "gui"];
const BRANCHES = ["zi", "chou", "yin", "mao", "chen", "si", "wu", "wei", "shen", "you", "xu", "hai"];
const STEM_ZH = { jia: "甲", yi: "乙", bing: "丙", ding: "丁", wu: "戊", ji: "己", geng: "庚", xin: "辛", ren: "壬", gui: "癸" };
const BRANCH_ZH = { zi: "子", chou: "丑", yin: "寅", mao: "卯", chen: "辰", si: "巳", wu: "午", wei: "未", shen: "申", you: "酉", xu: "戌", hai: "亥" };
const SOLAR_TERM_ZH_HANS = {
  minor_cold: "小寒",
  major_cold: "大寒",
  start_of_spring: "立春",
  rain_water: "雨水",
  awakening_of_insects: "惊蛰",
  spring_equinox: "春分",
  clear_and_bright: "清明",
  grain_rain: "谷雨",
  start_of_summer: "立夏",
  grain_full: "小满",
  grain_in_ear: "芒种",
  summer_solstice: "夏至",
  minor_heat: "小暑",
  major_heat: "大暑",
  start_of_autumn: "立秋",
  end_of_heat: "处暑",
  white_dew: "白露",
  autumn_equinox: "秋分",
  cold_dew: "寒露",
  frost_descent: "霜降",
  start_of_winter: "立冬",
  minor_snow: "小雪",
  major_snow: "大雪",
  winter_solstice: "冬至",
};
const SOLAR_TERM_ZH_HANT = {
  minor_cold: "小寒",
  major_cold: "大寒",
  start_of_spring: "立春",
  rain_water: "雨水",
  awakening_of_insects: "驚蟄",
  spring_equinox: "春分",
  clear_and_bright: "清明",
  grain_rain: "穀雨",
  start_of_summer: "立夏",
  grain_full: "小滿",
  grain_in_ear: "芒種",
  summer_solstice: "夏至",
  minor_heat: "小暑",
  major_heat: "大暑",
  start_of_autumn: "立秋",
  end_of_heat: "處暑",
  white_dew: "白露",
  autumn_equinox: "秋分",
  cold_dew: "寒露",
  frost_descent: "霜降",
  start_of_winter: "立冬",
  minor_snow: "小雪",
  major_snow: "大雪",
  winter_solstice: "冬至",
};

function resolveZhVariant() {
  if (state.language === "zh-TW") return "zh-Hant";
  if (state.language === "zh-CN") return "zh-Hans";
  return null;
}

function solarTermLabelForCurrentLanguage(termKey) {
  const zhVariant = resolveZhVariant();
  if (zhVariant === "zh-Hant") return SOLAR_TERM_ZH_HANT[termKey] || termKey;
  if (zhVariant === "zh-Hans") return SOLAR_TERM_ZH_HANS[termKey] || termKey;
  return termKey;
}

function sexagenaryLabelForCurrentLanguage(stem, branch) {
  const zhVariant = resolveZhVariant();
  if (!zhVariant) return `${stem}-${branch}`;
  const stemLabel = STEM_ZH[stem] || stem;
  const branchLabel = BRANCH_ZH[branch] || branch;
  return `${stemLabel}${branchLabel}`;
}

function localSolarTerm(date) {
  const year = date.getFullYear();
  const events = [];
  for (const y of [year - 1, year, year + 1]) {
    for (const [name, month, day] of SOLAR_TERM_APPROX) {
      events.push([name, new Date(y, month - 1, day)]);
    }
  }
  events.sort((a, b) => a[1] - b[1]);
  let current = events[0];
  let next = events[1];
  for (let i = 0; i < events.length; i += 1) {
    if (events[i][1] <= date) {
      current = events[i];
      next = events[Math.min(i + 1, events.length - 1)];
    } else {
      break;
    }
  }
  const dayMs = 24 * 60 * 60 * 1000;
  const zhVariant = resolveZhVariant();
  const currentTermKey = current[0];
  const nextTermKey = next[0];
  const currentLabel = zhVariant === "zh-Hant"
    ? (SOLAR_TERM_ZH_HANT[currentTermKey] || currentTermKey)
    : (zhVariant === "zh-Hans" ? (SOLAR_TERM_ZH_HANS[currentTermKey] || currentTermKey) : currentTermKey);
  const nextLabel = zhVariant === "zh-Hant"
    ? (SOLAR_TERM_ZH_HANT[nextTermKey] || nextTermKey)
    : (zhVariant === "zh-Hans" ? (SOLAR_TERM_ZH_HANS[nextTermKey] || nextTermKey) : nextTermKey);
  const locale = zhVariant || "en";
  return {
    current_term: currentTermKey,
    current_term_date: toIsoDate(current[1]),
    next_term: nextTermKey,
    next_term_date: toIsoDate(next[1]),
    days_to_next: Math.round((next[1].getTime() - date.getTime()) / dayMs),
    current_term_label: currentLabel,
    next_term_label: nextLabel,
    display: `${currentLabel} -> ${nextLabel}`,
    locale,
  };
}

function localSexagenary(date) {
  const cycleYear = (date.getMonth() > 1 || (date.getMonth() === 1 && date.getDate() >= 4)) ? date.getFullYear() : date.getFullYear() - 1;
  const index = (cycleYear - 4) % 60;
  const stem = STEMS[index % 10];
  const branch = BRANCHES[index % 12];
  const zhVariant = resolveZhVariant();
  const stemLabel = zhVariant ? (STEM_ZH[stem] || stem) : stem;
  const branchLabel = zhVariant ? (BRANCH_ZH[branch] || branch) : branch;
  return {
    stem,
    branch,
    cycle_index: index + 1,
    stem_label: stemLabel,
    branch_label: branchLabel,
    display: zhVariant ? `${stemLabel}${branchLabel}` : `${stem}-${branch}`,
    locale: zhVariant || "en",
  };
}

function localLunarString(date) {
  try {
    return new Intl.DateTimeFormat(`${localeForLanguage(state.language)}-u-ca-chinese`, { year: "numeric", month: "long", day: "numeric" }).format(date);
  } catch (_error) {
    return null;
  }
}

function computeLocalDayProfile() {
  const selected = selectedInstantDate();
  return {
    command: "day_profile",
    source: "local_approximation",
    bridge_date_gregorian: {
      year: selected.getFullYear(),
      month: selected.getMonth() + 1,
      day: selected.getDate(),
    },
    calendar_details: {
      solar_term_24: { payload: localSolarTerm(selected), approximate: true },
      sexagenary: { payload: localSexagenary(selected), approximate: true },
      chinese_lunar: localLunarString(selected)
        ? { payload: { display_text: localLunarString(selected) }, approximate: true }
        : null,
      iso_week: null,
      minguo: null,
      buddhist: null,
      japanese_era: null,
    },
    warnings: ["Local day profile approximation without API canonicalization."],
  };
}

function getCalendarLabel(calendar) {
  const entry = CALENDAR_LABELS[calendar];
  if (!entry) return calendar;
  return entry[state.language] || entry.en;
}

function isCalendarSupported(calendar) {
  try {
    new Intl.DateTimeFormat(formatLocaleWithCalendar("en", calendar), { day: "numeric" }).format(new Date());
    return true;
  } catch (_error) {
    return false;
  }
}

function supportedCalendars() {
  return Object.keys(CALENDAR_LABELS).filter((calendar) => isCalendarSupported(calendar));
}

const LUNAR_DAY_ZH = [
  "", "初一", "初二", "初三", "初四", "初五", "初六", "初七", "初八", "初九", "初十",
  "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八", "十九", "二十",
  "廿一", "廿二", "廿三", "廿四", "廿五", "廿六", "廿七", "廿八", "廿九", "三十",
];

function getSolarTermOnDate(year, month, day) {
  for (const [termKey, m, d] of SOLAR_TERM_APPROX) {
    if (m === month && d === day) return solarTermLabelForCurrentLanguage(termKey);
  }
  return null;
}

function sourceDayLabel(sourcePayload) {
  if (sourcePayload.lunar_day !== undefined) {
    const isZh = state.language === "zh-CN" || state.language === "zh-TW";
    if (isZh && sourcePayload.lunar_day >= 1 && sourcePayload.lunar_day <= 30) {
      return LUNAR_DAY_ZH[sourcePayload.lunar_day];
    }
    return `${sourcePayload.lunar_day}`;
  }
  if (sourcePayload.day !== undefined) return `${sourcePayload.day}`;
  return "?";
}

function formatGregorianDateFromPayload(payload) {
  return new Date(payload.year, payload.month - 1, payload.day, 12, 0, 0);
}

function monthIdentityFromPayload(source, payload) {
  if (source === "chinese_lunar") {
    return {
      lunar_year: payload.lunar_year,
      lunar_month: payload.lunar_month,
      is_leap_month: Boolean(payload.is_leap_month),
    };
  }
  if (source === "japanese_era") {
    return { era: payload.era, era_year: payload.era_year, month: payload.month };
  }
  return { year: payload.year, month: payload.month };
}

async function fetchSourceMonthByPayload(payload) {
  const source = CALENDAR_TO_SOURCE[state.calendar];
  if (!source) {
    throw new Error("MONTH_UNSUPPORTED");
  }
  const data = await apiPost("/calendar-month", { source, month_payload: payload });
  state.monthData = data;

  if (data?.range_gregorian?.start) {
    const start = data.range_gregorian.start;
    state.viewYear = start.year;
    state.viewMonth = start.month - 1;
  }

  const selectedIso = toIsoDate(state.selectedDate);
  const hasSelected = Array.isArray(data.days)
    ? data.days.some((item) => toIsoDate(formatGregorianDateFromPayload(item.gregorian)) === selectedIso)
    : false;
  if (!hasSelected && Array.isArray(data.days) && data.days.length > 0) {
    state.selectedDate = formatGregorianDateFromPayload(data.days[0].gregorian);
  }
}

async function ensureSourceMonthDataFromSelection() {
  if (state.monthMode !== "source_month") {
    state.monthData = null;
    return;
  }

  const normalized = parseApiBase(state.apiBase);
  if (!normalized) {
    setStatus("monthApiRequired", true);
    state.monthData = null;
    return;
  }

  const source = CALENDAR_TO_SOURCE[state.calendar];
  if (!source) {
    setStatus("monthUnsupported", true);
    state.monthData = null;
    return;
  }

  const gregorianPayload = {
    year: state.selectedDate.getFullYear(),
    month: state.selectedDate.getMonth() + 1,
    day: state.selectedDate.getDate(),
  };

  const converted = await apiPost("/convert", {
    source: "gregorian",
    targets: [source],
    source_payload: gregorianPayload,
    locale: backendLocaleForLanguage(state.language),
  });
  const sourcePayload = converted?.results?.[source]?.payload;
  if (!sourcePayload) {
    throw new Error("month payload not available");
  }
  const monthPayload = monthIdentityFromPayload(source, sourcePayload);
  await fetchSourceMonthByPayload(monthPayload);
  setStatus("monthSynced");
}

async function syncDayProfileAndAstro() {
  const normalized = parseApiBase(state.apiBase);
  const isoDate = toIsoDate(state.selectedDate);
  const hour = `${state.selectedHour}`.padStart(2, "0");

  if (!normalized) {
    state.dayProfile = computeLocalDayProfile();
    state.astroSnapshot = computeLocalAstroSnapshot();
    state.lifeContext = computeLocalLifeContext();
    setStatus("localApprox");
    return;
  }

  setStatus("fetching");
  try {
    const [profileResult, lifeContextResult] = await Promise.allSettled([
      apiPost("/day-profile", {
        input_payload: { local_datetime: `${isoDate}T${hour}:00:00` },
        timezone: state.timezone,
        date_basis: "local",
        include_astro: true,
        include_metaphysics: true,
        locale: backendLocaleForLanguage(state.language),
      }),
      apiPost("/life-context", buildLifeContextRequestPayload()),
    ]);

    if (profileResult.status !== "fulfilled") {
      throw profileResult.reason;
    }

    const profile = profileResult.value;
    state.dayProfile = profile;
    state.astroSnapshot = {
      command: "astro_snapshot",
      source: "api_day_profile",
      seven_governors: profile?.astro?.seven_governors || [],
      four_remainders: profile?.astro?.four_remainders || [],
      major_aspects: profile?.astro?.major_aspects || [],
      warnings: profile?.warnings || [],
    };
    state.lifeContext = lifeContextResult.status === "fulfilled"
      ? lifeContextResult.value
      : computeLocalLifeContext();
    setStatus("synced");
  } catch (_error) {
    state.dayProfile = computeLocalDayProfile();
    state.astroSnapshot = computeLocalAstroSnapshot();
    state.lifeContext = computeLocalLifeContext();
    setStatus("failedFallback", true);
  }
}

function weekdayName(date) {
  return new Intl.DateTimeFormat(localeForLanguage(state.language), {
    weekday: "long",
    timeZone: state.timezone,
  }).format(date);
}

function dayNumber(date, calendar) {
  const raw = new Intl.DateTimeFormat(formatLocaleWithCalendar(state.language, calendar), {
    day: "numeric",
    timeZone: state.timezone,
  }).format(date);
  if (calendar === "chinese") {
    const isZh = state.language === "zh-CN" || state.language === "zh-TW";
    if (isZh) {
      const num = parseInt(raw, 10);
      if (num >= 1 && num <= 30) return LUNAR_DAY_ZH[num];
    }
  }
  return raw;
}

function fullDate(date, calendar) {
  return new Intl.DateTimeFormat(formatLocaleWithCalendar(state.language, calendar), {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    timeZone: state.timezone,
  }).format(date);
}

function weekStart() {
  return WEEK_START_BY_LANGUAGE[state.language] ?? 0;
}

function weekdayLabels() {
  const start = weekStart();
  const sunday = new Date(Date.UTC(2026, 0, 4, 12));
  const labels = [];
  for (let i = 0; i < 7; i += 1) {
    const idx = (start + i) % 7;
    const date = new Date(sunday);
    date.setUTCDate(date.getUTCDate() + idx);
    labels.push(
      new Intl.DateTimeFormat(localeForLanguage(state.language), {
        weekday: "short",
        timeZone: "UTC",
      }).format(date)
    );
  }
  return labels;
}

function sameDate(a, b) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function renderI18n() {
  const text = i18n();
  document.documentElement.lang = state.language;
  document.documentElement.dir = state.language === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (text[key]) node.textContent = text[key];
  });
  document.querySelectorAll("[data-i18n-title]").forEach((node) => {
    const key = node.getAttribute("data-i18n-title");
    if (text[key]) {
      node.setAttribute("title", text[key]);
      node.setAttribute("aria-label", text[key]);
    }
  });
}

function renderSidebarModuleToggles() {
  if (refs.sidebarLegacyToggle) refs.sidebarLegacyToggle.checked = Boolean(state.sidebarModules.legacy);
  if (refs.sidebarEasternToggle) refs.sidebarEasternToggle.checked = Boolean(state.sidebarModules.eastern);
  if (refs.sidebarWesternToggle) refs.sidebarWesternToggle.checked = Boolean(state.sidebarModules.western);
  if (refs.sidebarRawJsonToggle) refs.sidebarRawJsonToggle.checked = Boolean(state.sidebarModules.rawJson);
}

function renderLanguageOptions() {
  refs.languageSelect.innerHTML = "";
  LANGUAGE_OPTIONS.forEach((option) => {
    const node = document.createElement("option");
    node.value = option.code;
    node.textContent = option.label;
    node.selected = option.code === state.language;
    refs.languageSelect.appendChild(node);
  });
}

function renderCalendarOptions() {
  const calendars = supportedCalendars();
  if (!calendars.includes(state.calendar)) state.calendar = "gregory";
  refs.calendarSelect.innerHTML = "";
  calendars.forEach((calendar) => {
    const node = document.createElement("option");
    node.value = calendar;
    node.textContent = `${getCalendarLabel(calendar)} (${calendar})`;
    node.selected = calendar === state.calendar;
    refs.calendarSelect.appendChild(node);
  });
}

function renderTimezoneOptions() {
  if (!TIMEZONES.includes(state.timezone)) state.timezone = "UTC";
  refs.timezoneSelect.innerHTML = "";
  TIMEZONES.forEach((tz) => {
    const node = document.createElement("option");
    node.value = tz;
    node.textContent = tz;
    node.selected = tz === state.timezone;
    refs.timezoneSelect.appendChild(node);
  });
}

function renderMonthModeOptions() {
  const modes = ["gregorian_grid", "source_month"];
  refs.monthModeSelect.innerHTML = "";
  modes.forEach((mode) => {
    const node = document.createElement("option");
    node.value = mode;
    node.textContent = i18n().monthModes[mode] || mode;
    node.selected = mode === state.monthMode;
    refs.monthModeSelect.appendChild(node);
  });
}

function renderMonthHeader() {
  refs.viewYearSelect.innerHTML = "";
  refs.viewMonthSelect.innerHTML = "";

  // Year selector 1900 - 2100
  for (let y = 1900; y <= 2100; y++) {
    const opt = document.createElement("option");
    opt.value = y;
    opt.textContent = y;
    opt.selected = y === state.viewYear;
    refs.viewYearSelect.appendChild(opt);
  }

  // Month selector
  for (let m = 0; m < 12; m++) {
    const opt = document.createElement("option");
    opt.value = m;
    const anchor = new Date(2026, m, 15);
    opt.textContent = new Intl.DateTimeFormat(formatLocaleWithCalendar(state.language, state.calendar), {
      month: "long",
      timeZone: state.timezone
    }).format(anchor);
    opt.selected = m === state.viewMonth;
    refs.viewMonthSelect.appendChild(opt);
  }

  if (state.monthMode === "source_month" && state.monthData) {
    const source = CALENDAR_TO_SOURCE[state.calendar] || "source";
    const payload = state.monthData.month_payload || {};
    const start = state.monthData?.range_gregorian?.start;
    const end = state.monthData?.range_gregorian?.end;
    refs.monthSubtitle.textContent = start && end ? `${start.year}-${start.month}-${start.day} → ${end.year}-${end.month}-${end.day} (${source})` : source;
    return;
  }

  const anchor = new Date(state.viewYear, state.viewMonth, 15, 12, 0, 0);
  refs.monthSubtitle.textContent = new Intl.DateTimeFormat(formatLocaleWithCalendar(state.language, "gregory"), {
    year: "numeric",
    month: "long",
    timeZone: state.timezone,
  }).format(anchor);
}

function renderWeekdayRow() {
  refs.weekdayRow.innerHTML = "";
  weekdayLabels().forEach((label) => {
    const node = document.createElement("div");
    node.className = "weekday";
    node.textContent = label;
    refs.weekdayRow.appendChild(node);
  });
}

function renderCalendarGridGregorian() {
  refs.calendarGrid.innerHTML = "";
  const first = new Date(state.viewYear, state.viewMonth, 1, 12, 0, 0);
  const offset = (first.getDay() - weekStart() + 7) % 7;
  const gridStart = new Date(first);
  gridStart.setDate(first.getDate() - offset);
  const today = new Date();
  today.setHours(12, 0, 0, 0);

  for (let i = 0; i < 42; i += 1) {
    const date = new Date(gridStart);
    date.setDate(gridStart.getDate() + i);
    const cell = document.createElement("button");
    cell.type = "button";
    cell.className = "day-cell";
    cell.classList.add("day-cell");
    if (date.getMonth() !== state.viewMonth) cell.classList.add("other-month");
    if (sameDate(date, today)) cell.classList.add("today");
    if (sameDate(date, state.selectedDate)) cell.classList.add("selected");

    const primary = document.createElement("div");
    primary.className = "day-secondary";
    primary.textContent = dayNumber(date, "gregory");

    const secondary = document.createElement("div");
    secondary.className = "day-primary";
    secondary.style.fontSize = "16px";
    const solarTerm = getSolarTermOnDate(date.getFullYear(), date.getMonth() + 1, date.getDate());
    if (solarTerm) {
      secondary.textContent = solarTerm;
      secondary.classList.add("solar-term-label");
    } else {
      secondary.textContent = dayNumber(date, "chinese");
    }

    cell.appendChild(primary);
    cell.appendChild(secondary);
    cell.addEventListener("click", async () => {
      state.selectedDate = new Date(date);
      await syncDayProfileAndAstro();
      renderAll();
    });
    refs.calendarGrid.appendChild(cell);
  }
}

function renderCalendarGridSourceMonth() {
  refs.calendarGrid.innerHTML = "";
  const days = Array.isArray(state.monthData?.days) ? state.monthData.days : [];
  if (days.length === 0) {
    renderCalendarGridGregorian();
    return;
  }

  const startGreg = formatGregorianDateFromPayload(days[0].gregorian);
  const firstOffset = (startGreg.getDay() - weekStart() + 7) % 7;
  const totalCells = Math.ceil((firstOffset + days.length) / 7) * 7;
  const today = new Date();
  today.setHours(12, 0, 0, 0);

  for (let idx = 0; idx < totalCells; idx += 1) {
    if (idx < firstOffset || idx >= firstOffset + days.length) {
      const ghost = document.createElement("div");
      ghost.className = "day-cell other-month";
      ghost.style.opacity = "0.2";
      refs.calendarGrid.appendChild(ghost);
      continue;
    }

    const dayEntry = days[idx - firstOffset];
    const date = formatGregorianDateFromPayload(dayEntry.gregorian);
    const cell = document.createElement("button");
    cell.type = "button";
    cell.className = "day-cell window-view";
    if (sameDate(date, today)) cell.classList.add("today");
    if (sameDate(date, state.selectedDate)) cell.classList.add("selected");

    const primary = document.createElement("div");
    primary.className = "day-secondary"; // swap size: secondary logic
    primary.textContent = `${dayEntry.gregorian.day}`; // Gregorian Day

    const secondary = document.createElement("div");
    secondary.className = "day-primary";
    secondary.style.fontSize = "16px";
    const solarTerm = getSolarTermOnDate(dayEntry.gregorian.year, dayEntry.gregorian.month, dayEntry.gregorian.day);
    if (solarTerm) {
      secondary.textContent = solarTerm;
      secondary.classList.add("solar-term-label");
    } else {
      secondary.textContent = sourceDayLabel(dayEntry.source_payload);
    }

    cell.appendChild(primary);
    cell.appendChild(secondary);
    cell.addEventListener("click", async () => {
      state.selectedDate = new Date(date);
      await syncDayProfileAndAstro();
      renderAll();
    });
    refs.calendarGrid.appendChild(cell);
  }
}

function renderCalendarGrid() {
  if (state.monthMode === "source_month" && state.monthData) {
    renderCalendarGridSourceMonth();
  } else {
    renderCalendarGridGregorian();
  }
}

function updateDashboardDate() {
  const selected = selectedInstantDate();
  refs.mainDatePrimary.textContent = `${state.selectedDate.getDate()}`.padStart(2, "0");
  refs.mainWeekday.textContent = weekdayName(selected);
  refs.mainDateFull.textContent = toIsoDate(state.selectedDate);
}

function renderSelectedMeta() {
  updateDashboardDate();
  // removed old list, now handled strictly by Cards in Day Profile
}

function renderDayProfileCards() {
  const labels = i18n().labels;
  const details = state.dayProfile?.calendar_details || {};
  const metaphysics = state.dayProfile?.metaphysics || {};
  const isZh = state.language === "zh-CN" || state.language === "zh-TW";
  const listSeparator = isZh ? "、" : ", ";
  const cards = [];
  const showLegacy = Boolean(state.sidebarModules.legacy);
  const showEastern = Boolean(state.sidebarModules.eastern);
  const showWestern = Boolean(state.sidebarModules.western);
  const showRawJson = Boolean(state.sidebarModules.rawJson);

  if (showLegacy) {
    const solar = details?.solar_term_24?.payload;
    if (solar) {
      const solarValue = solar.display || (
        solar.current_term_label && solar.next_term_label
          ? `${solar.current_term_label} -> ${solar.next_term_label}`
          : `${solarTermLabelForCurrentLanguage(solar.current_term)} -> ${solarTermLabelForCurrentLanguage(solar.next_term)}`
      );
      cards.push({ label: labels.solarTerm, value: solarValue });
    }
    const sexa = details?.sexagenary?.payload;
    if (sexa) {
      const sexaName = sexa.display || (
        sexa.stem_label && sexa.branch_label
          ? `${sexa.stem_label}${sexa.branch_label}`
          : sexagenaryLabelForCurrentLanguage(sexa.stem, sexa.branch)
      );
      cards.push({
        label: labels.sexagenary,
        value: `${sexaName}${sexa.cycle_index ? ` (${sexa.cycle_index})` : ""}`,
      });
    }
    const lunar = details?.chinese_lunar?.payload;
    if (lunar) {
      if (lunar.display_text) {
        cards.push({ label: labels.lunar, value: lunar.display_text });
      } else {
        cards.push({ label: labels.lunar, value: `${lunar.lunar_year}/${lunar.lunar_month}/${lunar.lunar_day}` });
      }
    }
    const iso = details?.iso_week?.payload;
    if (iso) {
      cards.push({ label: labels.week, value: `${iso.iso_year}-W${iso.iso_week}-${iso.iso_weekday}` });
    }
  }

  if (showEastern) {
    const eastern = metaphysics?.eastern || {};
    const bazi = eastern?.bazi || {};
    const pillars = [bazi?.year?.display, bazi?.month?.display, bazi?.day?.display, bazi?.hour?.display].filter(Boolean);
    if (pillars.length > 0) {
      cards.push({ label: labels.bazi, value: pillars.join(" | ") });
    }

    const yi = eastern?.huangli?.yi;
    if (Array.isArray(yi) && yi.length > 0) {
      cards.push({ label: labels.yi, value: yi.slice(0, 6).join(listSeparator) });
    }

    const ji = eastern?.huangli?.ji;
    if (Array.isArray(ji) && ji.length > 0) {
      cards.push({ label: labels.ji, value: ji.slice(0, 6).join(listSeparator) });
    }
  }

  if (showWestern) {
    const western = metaphysics?.western || {};
    if (western?.moon_phase?.label) {
      cards.push({ label: labels.moonPhase, value: western.moon_phase.label });
    }
    if (western?.sun_sign) {
      cards.push({ label: labels.sunSign, value: western.sun_sign });
    }
    if (western?.moon_sign) {
      cards.push({ label: labels.moonSign, value: western.moon_sign });
    }
  }

  refs.dayProfileCards.innerHTML = "";
  if (cards.length === 0) {
    refs.dayProfileCards.innerHTML = `<div class="meta-item"><b>Info</b><span>No profile details</span></div>`;
  } else {
    cards.forEach((card) => {
      const item = document.createElement("div");
      item.className = "meta-item";
      item.innerHTML = `<b>${card.label}</b><span>${card.value}</span>`;
      refs.dayProfileCards.appendChild(item);
    });
  }

  refs.dayProfileOutput.style.display = showRawJson ? "block" : "none";
  if (showRawJson) {
    refs.dayProfileOutput.textContent = JSON.stringify(state.dayProfile || {}, null, 2);
  }
}

function renderLifeControls() {
  if (!refs.birthInput) return;
  const config = normalizeLifeConfig(state.lifeConfig);
  refs.birthInput.value = config.birthLocalDatetime;
  refs.entityIdInput.value = config.entityId;
  refs.roleInput.value = config.role;
  refs.soulInput.value = config.soul;
  refs.locationInput.value = config.locationName;
  refs.latitudeInput.value = config.latitude;
  refs.longitudeInput.value = config.longitude;
  refs.backgroundInput.value = config.background;
  refs.climateInput.value = config.climate;
  refs.sceneryInput.value = config.sceneryNote;
  refs.autoWeatherToggle.checked = Boolean(config.autoWeather);
}

function renderLifeContextCards() {
  const labels = i18n().labels;
  const context = state.lifeContext || computeLocalLifeContext();
  const life = context?.life || {};
  const birthday = life?.birthday || {};
  const placeName = context?.environment?.place?.location_name
    || context?.space?.location_name
    || "N/A";
  const weather = context?.environment?.weather || null;
  const weatherSummary = weather
    ? [weather.weather_label, weather.temperature_c !== undefined ? `${weather.temperature_c}C` : null].filter(Boolean).join(" | ")
    : (context?.environment?.weather_note || "N/A");

  const cards = [
    { label: labels.lifeId, value: life.life_id || "N/A" },
    { label: labels.age, value: life?.age?.readable || "N/A" },
    { label: labels.stage, value: life?.age?.stage || "N/A" },
    { label: labels.birthday, value: birthday.month && birthday.day ? `${birthday.month}/${birthday.day}` : "N/A" },
    {
      label: labels.nextBirthday,
      value: birthday.next_birthday_date_local
        ? `${birthday.next_birthday_date_local}${birthday.days_until_next_birthday !== undefined ? ` (${birthday.days_until_next_birthday}d)` : ""}`
        : "N/A",
    },
    { label: labels.birthInstant, value: life?.birth_instant?.iso_local || "N/A" },
    { label: labels.nowInstant, value: life?.now_instant?.iso_local || "N/A" },
    { label: labels.place, value: placeName },
    { label: labels.weather, value: weatherSummary },
    { label: labels.seedBrief, value: life?.continuity?.seed_brief || "N/A" },
    { label: labels.scenePrompt, value: context?.world_context?.scene_prompt || "N/A" },
  ];

  refs.lifeContextCards.innerHTML = "";
  cards.forEach((card) => {
    const item = document.createElement("div");
    item.className = "meta-item";
    const labelNode = document.createElement("b");
    labelNode.textContent = card.label;
    const valueNode = document.createElement("span");
    valueNode.textContent = card.value;
    item.appendChild(labelNode);
    item.appendChild(valueNode);
    refs.lifeContextCards.appendChild(item);
  });

  const showRawJson = Boolean(state.sidebarModules.rawJson);
  refs.lifeContextOutput.style.display = showRawJson ? "block" : "none";
  if (showRawJson) {
    refs.lifeContextOutput.textContent = JSON.stringify(context, null, 2);
  }
}

function pointOnCircle(center, radius, longitudeDeg) {
  const angle = ((longitudeDeg - 90) * Math.PI) / 180;
  return { x: center + radius * Math.cos(angle), y: center + radius * Math.sin(angle) };
}

function renderZodiacWheel(snapshot) {
  const size = 380;
  const center = size / 2;
  const outerRadius = 170;
  const innerRadius = 120;
  const markerRadius = 94;

  const governors = snapshot?.seven_governors || [];
  const remainders = snapshot?.four_remainders || [];
  const aspects = snapshot?.major_aspects || [];
  const sectorLines = [];
  const signLabels = [];

  for (let i = 0; i < 12; i += 1) {
    const start = pointOnCircle(center, innerRadius, i * 30);
    const end = pointOnCircle(center, outerRadius, i * 30);
    sectorLines.push(`<line x1="${start.x}" y1="${start.y}" x2="${end.x}" y2="${end.y}" stroke="rgba(255,255,255,0.18)" stroke-width="1" />`);
    const labelPoint = pointOnCircle(center, 146, i * 30 + 15);
    signLabels.push(`<text x="${labelPoint.x}" y="${labelPoint.y}" text-anchor="middle" dominant-baseline="middle" fill="rgba(238,236,255,0.86)" font-size="17">${ZODIAC_SIGNS[i].symbol}</text>`);
  }

  const byName = {};
  governors.forEach((body) => {
    byName[body.name] = body;
  });

  const aspectLines = aspects
    .filter((asp) => byName[asp.left] && byName[asp.right])
    .slice(0, 24)
    .map((asp) => {
      const p1 = pointOnCircle(center, markerRadius, byName[asp.left].longitude_deg);
      const p2 = pointOnCircle(center, markerRadius, byName[asp.right].longitude_deg);
      const color = ASPECT_COLORS[asp.aspect] || "rgba(255,255,255,0.35)";
      return `<line x1="${p1.x}" y1="${p1.y}" x2="${p2.x}" y2="${p2.y}" stroke="${color}" stroke-width="1.2" />`;
    })
    .join("\n");

  const markers = governors
    .map((body) => {
      const style = BODY_STYLE[body.name] || { color: "#fff", short: body.name.slice(0, 2), symbol: body.name.slice(0, 2) };
      const markerLabel = body.symbol || style.symbol || style.short;
      const markerFontSize = /^[A-Za-z]{1,2}$/.test(markerLabel) ? 10 : 14;
      const p = pointOnCircle(center, markerRadius, body.longitude_deg);
      const textPoint = pointOnCircle(center, markerRadius - 18, body.longitude_deg);
      return `
      <g>
        <circle cx="${p.x}" cy="${p.y}" r="5.5" fill="${style.color}" />
        <text x="${textPoint.x}" y="${textPoint.y}" text-anchor="middle" dominant-baseline="middle" fill="${style.color}" font-size="${markerFontSize}" font-weight="700">${markerLabel}</text>
      </g>`;
    })
    .join("\n");

  const remainderMarkers = remainders
    .map((body) => {
      const symbol = body.symbol || REMAINDER_SYMBOLS[body.name] || "•";
      const p = pointOnCircle(center, markerRadius - 26, body.longitude_deg);
      return `
      <g>
        <circle cx="${p.x}" cy="${p.y}" r="3.4" fill="rgba(160, 255, 240, 0.9)" />
        <text x="${p.x}" y="${p.y - 10}" text-anchor="middle" dominant-baseline="middle" fill="rgba(160, 255, 240, 0.95)" font-size="11" font-weight="700">${symbol}</text>
      </g>`;
    })
    .join("\n");

  refs.zodiacWheel.innerHTML = `
    <svg viewBox="0 0 ${size} ${size}" role="img" aria-label="zodiac wheel">
      <defs>
        <radialGradient id="wheelCore" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stop-color="#1d2542" />
          <stop offset="100%" stop-color="#0c101e" />
        </radialGradient>
      </defs>
      <circle cx="${center}" cy="${center}" r="${outerRadius + 8}" fill="none" stroke="rgba(244,194,109,0.45)" stroke-width="1.5" />
      <circle cx="${center}" cy="${center}" r="${outerRadius}" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="1" />
      <circle cx="${center}" cy="${center}" r="${innerRadius}" fill="url(#wheelCore)" stroke="rgba(255,255,255,0.18)" stroke-width="1" />
      ${sectorLines.join("\n")}
      ${signLabels.join("\n")}
      ${aspectLines}
      ${markers}
      ${remainderMarkers}
      <circle cx="${center}" cy="${center}" r="4" fill="#f2f3f8" />
    </svg>
  `;
}

function renderAstro() {
  if (!state.astroSnapshot) {
    state.astroSnapshot = computeLocalAstroSnapshot();
  }
  renderZodiacWheel(state.astroSnapshot);
  refs.astroOutput.textContent = JSON.stringify(state.astroSnapshot, null, 2);
}

function renderHour() {
  refs.hourSlider.value = `${state.selectedHour}`;
  refs.hourLabel.textContent = `${`${state.selectedHour}`.padStart(2, "0")}:00`;
}

function renderAll() {
  renderI18n();
  renderSidebarModuleToggles();
  renderLanguageOptions();
  renderCalendarOptions();
  renderTimezoneOptions();
  renderMonthModeOptions();
  refs.apiBaseInput.value = state.apiBase;
  updateEngineIndicator();

  renderMonthHeader();
  renderWeekdayRow();
  renderCalendarGrid();
  renderSelectedMeta();
  renderDayProfileCards();
  renderLifeControls();
  renderLifeContextCards();
  renderHour();
  renderAstro();

  saveState();
}

function saveState() {
  const payload = {
    language: state.language,
    calendar: state.calendar,
    timezone: state.timezone,
    monthMode: state.monthMode,
    viewYear: state.viewYear,
    viewMonth: state.viewMonth,
    selectedDate: toIsoDate(state.selectedDate),
    selectedHour: state.selectedHour,
    apiBase: state.apiBase,
    lifeConfig: normalizeLifeConfig(state.lifeConfig),
    sidebarModules: state.sidebarModules,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return;
  try {
    const payload = JSON.parse(raw);
    if (payload.language && UI_TEXT[payload.language]) state.language = payload.language;
    if (payload.calendar && isCalendarSupported(payload.calendar)) state.calendar = payload.calendar;
    if (payload.timezone && TIMEZONES.includes(payload.timezone)) state.timezone = payload.timezone;
    if (payload.monthMode && ["gregorian_grid", "source_month"].includes(payload.monthMode)) state.monthMode = payload.monthMode;
    if (Number.isInteger(payload.viewYear)) state.viewYear = payload.viewYear;
    if (Number.isInteger(payload.viewMonth)) state.viewMonth = payload.viewMonth;
    if (typeof payload.selectedDate === "string") {
      const parsed = new Date(`${payload.selectedDate}T12:00:00`);
      if (!Number.isNaN(parsed.getTime())) state.selectedDate = parsed;
    }
    if (Number.isInteger(payload.selectedHour) && payload.selectedHour >= 0 && payload.selectedHour <= 23) {
      state.selectedHour = payload.selectedHour;
    }
    if (typeof payload.apiBase === "string") state.apiBase = payload.apiBase || "/api";
    if (payload.lifeConfig && typeof payload.lifeConfig === "object") {
      state.lifeConfig = {
        ...DEFAULT_LIFE_CONFIG,
        ...payload.lifeConfig,
        autoWeather: payload.lifeConfig.autoWeather !== false,
      };
    }
    if (payload.sidebarModules && typeof payload.sidebarModules === "object") {
      state.sidebarModules = {
        legacy: payload.sidebarModules.legacy !== false,
        eastern: payload.sidebarModules.eastern !== false,
        western: payload.sidebarModules.western !== false,
        rawJson: payload.sidebarModules.rawJson !== false,
      };
    }
  } catch (_error) {
    // ignore malformed local state
  }
}

function loadApiFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const api = params.get("api");
  if (api) state.apiBase = api;
}

async function navigateMonth(direction) {
  if (state.monthMode === "source_month" && state.monthData) {
    const payload = direction < 0 ? state.monthData.previous_month_payload : state.monthData.next_month_payload;
    if (payload) {
      try {
        await fetchSourceMonthByPayload(payload);
      } catch (_error) {
        setStatus("failedFallback", true);
      }
      await syncDayProfileAndAstro();
      renderAll();
      return;
    }
  }

  if (direction < 0) {
    if (state.viewMonth === 0) {
      state.viewMonth = 11;
      state.viewYear -= 1;
    } else {
      state.viewMonth -= 1;
    }
  } else if (state.viewMonth === 11) {
    state.viewMonth = 0;
    state.viewYear += 1;
  } else {
    state.viewMonth += 1;
  }

  renderAll();
}

function bindEvents() {
  function bindSidebarToggle(refName, key) {
    const node = refs[refName];
    if (!node) return;
    node.addEventListener("change", (event) => {
      state.sidebarModules[key] = Boolean(event.target.checked);
      renderAll();
    });
  }

  refs.languageSelect.addEventListener("change", async (event) => {
    state.language = event.target.value;
    try {
      await ensureSourceMonthDataFromSelection();
      await syncDayProfileAndAstro();
    } catch (_error) {
      setStatus("failedFallback", true);
    }
    renderAll();
  });

  refs.calendarSelect.addEventListener("change", async (event) => {
    state.calendar = event.target.value;
    try {
      await ensureSourceMonthDataFromSelection();
      await syncDayProfileAndAstro();
    } catch (_error) {
      setStatus("failedFallback", true);
    }
    renderAll();
  });

  refs.timezoneSelect.addEventListener("change", async (event) => {
    state.timezone = event.target.value;
    try {
      await ensureSourceMonthDataFromSelection();
      await syncDayProfileAndAstro();
    } catch (_error) {
      setStatus("failedFallback", true);
    }
    renderAll();
  });

  refs.monthModeSelect.addEventListener("change", async (event) => {
    state.monthMode = event.target.value;
    try {
      await ensureSourceMonthDataFromSelection();
      await syncDayProfileAndAstro();
    } catch (_error) {
      setStatus("failedFallback", true);
    }
    renderAll();
  });

  refs.apiBaseInput.addEventListener("change", async (event) => {
    state.apiBase = event.target.value;
    updateEngineIndicator();
    try {
      await ensureSourceMonthDataFromSelection();
      await syncDayProfileAndAstro();
    } catch (_error) {
      setStatus("failedFallback", true);
    }
    renderAll();
  });

  refs.viewYearSelect.addEventListener("change", async (event) => {
    state.viewYear = Number(event.target.value);
    renderAll();
  });

  refs.viewMonthSelect.addEventListener("change", async (event) => {
    state.viewMonth = Number(event.target.value);
    renderAll();
  });

  refs.prevMonthBtn.addEventListener("click", async () => {
    await navigateMonth(-1);
  });

  refs.nextMonthBtn.addEventListener("click", async () => {
    await navigateMonth(1);
  });

  refs.todayBtn.addEventListener("click", async () => {
    const today = new Date();
    state.viewYear = today.getFullYear();
    state.viewMonth = today.getMonth();
    state.selectedDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12, 0, 0);
    state.selectedHour = today.getHours();
    try {
      await ensureSourceMonthDataFromSelection();
      await syncDayProfileAndAstro();
    } catch (_error) {
      setStatus("failedFallback", true);
    }
    renderAll();
  });

  refs.resetApiBtn.addEventListener("click", async () => {
    state.apiBase = "/api";
    state.monthData = null;
    try {
      await ensureSourceMonthDataFromSelection();
      await syncDayProfileAndAstro();
    } catch (_error) {
      setStatus("failedFallback", true);
    }
    renderAll();
  });

  refs.hourSlider.addEventListener("input", (event) => {
    state.selectedHour = Number(event.target.value);
    renderHour();
    renderSelectedMeta();
  });

  refs.hourSlider.addEventListener("change", async () => {
    await syncDayProfileAndAstro();
    renderAll();
  });

  refs.fetchAstroBtn.addEventListener("click", async () => {
    try {
      await ensureSourceMonthDataFromSelection();
      await syncDayProfileAndAstro();
    } catch (_error) {
      setStatus("failedFallback", true);
    }
    renderAll();
  });

  const bindLifeField = (refName, key) => {
    const node = refs[refName];
    if (!node) return;
    node.addEventListener("change", () => {
      state.lifeConfig[key] = node.value;
      state.lifeContext = computeLocalLifeContext();
      renderAll();
    });
  };

  bindLifeField("birthInput", "birthLocalDatetime");
  bindLifeField("entityIdInput", "entityId");
  bindLifeField("roleInput", "role");
  bindLifeField("soulInput", "soul");
  bindLifeField("locationInput", "locationName");
  bindLifeField("latitudeInput", "latitude");
  bindLifeField("longitudeInput", "longitude");
  bindLifeField("backgroundInput", "background");
  bindLifeField("climateInput", "climate");
  bindLifeField("sceneryInput", "sceneryNote");

  if (refs.autoWeatherToggle) {
    refs.autoWeatherToggle.addEventListener("change", () => {
      state.lifeConfig.autoWeather = Boolean(refs.autoWeatherToggle.checked);
      state.lifeContext = computeLocalLifeContext();
      renderAll();
    });
  }

  if (refs.refreshLifeBtn) {
    refs.refreshLifeBtn.addEventListener("click", async () => {
      try {
        await syncDayProfileAndAstro();
      } catch (_error) {
        setStatus("failedFallback", true);
      }
      renderAll();
    });
  }

  bindSidebarToggle("sidebarLegacyToggle", "legacy");
  bindSidebarToggle("sidebarEasternToggle", "eastern");
  bindSidebarToggle("sidebarWesternToggle", "western");
  bindSidebarToggle("sidebarRawJsonToggle", "rawJson");
}

function initStarfield() {
  const canvas = refs.starfield;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const stars = [];
  const STAR_COUNT = 230;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function seed() {
    stars.length = 0;
    for (let i = 0; i < STAR_COUNT; i += 1) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: 0.2 + Math.random() * 1.3,
        twinkle: Math.random() * Math.PI * 2,
        isCyan: Math.random() > 0.5,
      });
    }
  }

  function draw(time) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const star of stars) {
      star.twinkle += 0.01 * star.z;
      star.y += 0.07 * star.z;
      if (star.y > canvas.height + 6) {
        star.y = -6;
        star.x = Math.random() * canvas.width;
      }
      const alpha = 0.24 + (Math.sin(star.twinkle + time * 0.001) + 1) * 0.36;
      ctx.beginPath();
      ctx.fillStyle = star.isCyan ? `rgba(0, 240, 255, ${Math.min(alpha, 0.9)})` : `rgba(182, 166, 255, ${Math.min(alpha, 0.9)})`;
      ctx.arc(star.x, star.y, Math.pow(star.z, 1.2), 0, Math.PI * 2);
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }

  resize();
  seed();
  requestAnimationFrame(draw);
  window.addEventListener("resize", () => {
    resize();
    seed();
  });
}

async function bootstrap() {
  loadState();
  loadApiFromQuery();
  bindEvents();
  initStarfield();
  try {
    await ensureSourceMonthDataFromSelection();
    await syncDayProfileAndAstro();
  } catch (_error) {
    state.dayProfile = computeLocalDayProfile();
    state.astroSnapshot = computeLocalAstroSnapshot();
    state.lifeContext = computeLocalLifeContext();
    setStatus("failedFallback", true);
  }
  renderAll();
}

bootstrap();
