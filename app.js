// ===== 👾 像素圖 =====
// 圖示庫（pixelarticons）有的，用 icon("名字")；沒有的，用 px("名字") 畫我們自己的像素圖。
// 之後換成自己畫的圖：把 px() 裡對應的那一張換成 <img> 就好。

function icon(name) {
    return `<i class="pxi pixelart-icons-font-${name}" aria-hidden="true"></i>`;
}

// 顏色代號：一個字母 = 一種顏色，「.」= 透明
const pixelColors = {
    K: "#2d2a4a", Y: "#ffd23f", y: "#f0a800", O: "#ff8a3d", W: "#ffffff", R: "#e04848",
    P: "#f49ac2", B: "#2f6db5", b: "#9fd8ff", G: "#5cb85c", g: "#2e7d32", N: "#a0704c",
    n: "#6b4a2e", S: "#c9c3d6", s: "#8a8494", D: "#f2c14e", L: "#8b7cf6",
};

// 每一張圖：一行字 = 一排格子
const pixelArt = {
    // 🐥 黃春（16×16，臉朝左；衣服也畫在同樣大小的格子上，疊上去剛好對齊）
    chick: [
        "................",
        "......KKKK......",
        ".....KYYYYK.....",
        "....KYYYYYYK....",
        "....KYKYYYYK....",
        "...KOOYYYYYYK...",
        "....KYYYYYYYK...",
        "...KYYYYYYYYYK..",
        "..KYYYYYyyYYYK..",
        "..KYYYYYyyYYYK..",
        "..KYYYYYYYYYYK..",
        "...KYYYYYYYYK...",
        "....KKKKKKKK....",
        ".....O....O.....",
        "....OO...OO.....",
        "................",
    ],
    bow: [
        "........PP.PP...",
        "........PPRPP...",
        "........P...P...",
    ],
    cap: [
        ".....BBBBB......",
        "....BBBBBBB.....",
        "..BBBBBBBBBK....",
    ],
    crown: [
        ".....D.D.D......",
        ".....DDDDD......",
        ".....DRDRD......",
    ],
    glasses: [
        "................",
        "................",
        "................",
        "...KKKKKKKKK....",
        "...KbbKKKbbK....",
        "...KKKK.KKKK....",
    ],
    sunglasses: [
        "................",
        "................",
        "................",
        "...KKKKKKKKK....",
        "...KKKKKKKKK....",
        "...KKK...KKK....",
    ],
    scarf: [
        "................",
        "................",
        "................",
        "................",
        "................",
        "................",
        "....KRRRRRRK....",
        "...KRRRRRRRRK...",
        "..........RR....",
        "..........R.....",
    ],
    necklace: [
        "................",
        "................",
        "................",
        "................",
        "................",
        "................",
        "................",
        "....D.......D...",
        ".....D.....D....",
        "......DDRDD.....",
    ],
    // 🍽️ 食物（12×12）
    rice: [
        "............",
        ".....KK.....",
        "....KWWK....",
        "...KWWWWK...",
        "..KWWWWWWK..",
        "..KWWWWWWK..",
        ".KWWWWWWWWK.",
        ".KWWKKKKWWK.",
        ".KWWKKKKWWK.",
        ".KWWKKKKWWK.",
        "..KKKKKKKK..",
        "............",
    ],
    strawberry: [
        "....gGGg....",
        "...gGggGg...",
        "..KRRgRRRK..",
        ".KRRWRRRWRK.",
        ".KRRRRRWRRK.",
        ".KRWRRRRRRK.",
        "..KRRRWRRK..",
        "..KRRRRRRK..",
        "...KRRWRK...",
        "....KRRK....",
        ".....KK.....",
        "............",
    ],
    cake: [
        "............",
        ".....RR.....",
        ".....KK.....",
        "..KKKKKKKK..",
        "..KWWWWWWK..",
        "..KPPPPPPK..",
        "..KWWWWWWK..",
        "..KPPPPPPK..",
        "..KNNNNNNK..",
        "..KKKKKKKK..",
        "............",
        "............",
    ],
    chicken: [
        "............",
        "...KKKK.....",
        "..KNNNNK....",
        ".KNNnNNNK...",
        ".KNNNNNNK...",
        ".KNNNNnNK...",
        "..KNNNNK....",
        "...KNNK.....",
        "....KWK.....",
        ".....KWK....",
        "....KWKWK...",
        ".....K.K....",
    ],
    // 🏠 房間（12×12）
    frame: [
        "NNNNNNNNNNNN",
        "NnnnnnnnnnnN",
        "NnbbbbbbbbnN",
        "NnbbbbbWbbnN",
        "NnbbbbbbbbnN",
        "NnbbGGbbbbnN",
        "NnbGGGGbGbnN",
        "NnGGGGGGGGnN",
        "NnnnnnnnnnnN",
        "NNNNNNNNNNNN",
        "............",
        "............",
    ],
    window: [
        "KKKKKKKKKKKK",
        "KbbbbKbbbbbK",
        "KbWbbKbbbbbK",
        "KbbbbKbbbbbK",
        "KbbbbKbbbbbK",
        "KKKKKKKKKKKK",
        "KbbbbKbbbbbK",
        "KbbbbKbbWbbK",
        "KbbbbKbbbbbK",
        "KbbbbKbbbbbK",
        "KKKKKKKKKKKK",
        "............",
    ],
    door: [
        "..KKKKKKKK..",
        "..KNNNNNNK..",
        "..KNnnnnNK..",
        "..KNnNNnNK..",
        "..KNnnnnNK..",
        "..KNNNNNNK..",
        "..KNNNNDNK..",
        "..KNnnnnNK..",
        "..KNnNNnNK..",
        "..KNnnnnNK..",
        "..KNNNNNNK..",
        "..KKKKKKKK..",
    ],
    plate: [
        "............",
        "............",
        "............",
        "...KKKKKK...",
        "..KSSSSSSK..",
        ".KSWWWWWWSK.",
        ".KSWWWWWWSK.",
        ".KSWWWWWWSK.",
        "..KSSSSSSK..",
        "...KKKKKK...",
        "............",
        "............",
    ],
    // 🏷️ 分類：門票（12×12）
    ticket: [
        "............",
        "............",
        ".KKKKKKKKKK.",
        ".KPPPPKPPPK.",
        "KPPPPPKPPPPK",
        ".PPWWPKPPPP.",
        ".PPWWPKPPPP.",
        "KPPPPPKPPPPK",
        ".KPPPPKPPPK.",
        ".KKKKKKKKKK.",
        "............",
        "............",
    ],
};

// 把一張像素圖變成 SVG（大小跟著字的大小：1em）
function px(name) {
    const rows = pixelArt[name];
    const w = rows[0].length;   // 都是正方形：衣服只畫上面幾排，下面是空的
    let rects = "";
    rows.forEach(function (row, y) {
        // 同一排、同顏色連在一起的格子，畫成一個長方形（比較快）
        let x = 0;
        while (x < row.length) {
            const c = row[x];
            let len = 1;
            while (x + len < row.length && row[x + len] === c) len++;
            if (pixelColors[c]) {
                rects += `<rect x="${x}" y="${y}" width="${len}" height="1" fill="${pixelColors[c]}"/>`;
            }
            x += len;
        }
    });
    return `<svg class="px" viewBox="0 0 ${w} ${w}" shape-rendering="crispEdges" aria-hidden="true">${rects}</svg>`;
}

// iPhone 狀態欄的顏色：自動用頁面背景色（之後換背景色也會跟著變）
const themeColor = document.createElement("meta");
themeColor.name = "theme-color";
themeColor.content = getComputedStyle(document.body).backgroundColor;
document.head.appendChild(themeColor);

// 找到底部選單的所有按鈕
const tabButtons = document.querySelectorAll(".tab-bar button[data-page]");

// 幫每個按鈕設定：被點擊時要做什麼
tabButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        // 1. 看這個按鈕要去哪一頁
        const pageId = button.dataset.page;

        // 2. 先把所有頁面的 active 拿掉（全部隱藏）
        document.querySelectorAll(".page").forEach(function (page) {
            page.classList.remove("active");
        });

        // 3. 也把所有按鈕的 active 拿掉（全部變灰）
        tabButtons.forEach(function (b) {
            b.classList.remove("active");
        });

        // 4. 幫要去的那頁、被按的按鈕加上 active
        document.getElementById(pageId).classList.add("active");
        button.classList.add("active");
    });
});
// ===== 倒數日 =====

// 算兩個日期差幾天
function daysBetween(from, to) {
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.round((to - from) / oneDay);
}

// 取得「今天」（只要日期，不要幾點幾分）
function getToday() {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

// ===== ⏳ 倒數 / 📅 已經過了 =====

// 清單：每一張卡片 { id, type, name, date }
//   type "countdown"：倒數到某一天
//   type "since"：從某一天開始，已經過了幾天
// 順序就是首頁顯示的順序
let events = JSON.parse(localStorage.getItem("events"));

// 第一次用新版：把以前那一個活動搬進來
if (events === null) {
    events = [];
    const oldDate = localStorage.getItem("eventDate");
    if (oldDate) {
        events.push({ id: Date.now(), name: localStorage.getItem("eventName") || "", date: oldDate });
    }
}

// 以前的「我已經當 MOA」：變成一張普通的「已經過了」卡片（位置不變）
const oldFanStart = localStorage.getItem("fanStart");
let movedMoa = false;
events.forEach(function (ev) {
    if (ev.type === "moa") {
        ev.type = "since";
        ev.id = Date.now();
        ev.name = "我已經當 MOA";
        ev.date = oldFanStart || "";
        movedMoa = true;
    }
});
if (oldFanStart && !movedMoa) {
    events.push({ id: Date.now() + 1, type: "since", name: "我已經當 MOA", date: oldFanStart });
}
localStorage.removeItem("fanStart");  // 搬完了，以後都存在清單裡

// 以前的活動沒有 type，都是倒數
events.forEach(function (ev) {
    if (!ev.type) ev.type = "countdown";
});
saveEvents();

// 管理畫面裡，現在打開 ✏️ 的是哪一個
let editingEventId = null;

function saveEvents() {
    localStorage.setItem("events", JSON.stringify(events));
}

// 💾 小視窗：標題列（三個圓點＋標籤＋右邊的東西）、網址列（選用）、一排像素愛心
const winColors = ["var(--win-blue)", "var(--win-pink)", "var(--win-teal)", "var(--win-sage)"];

function winBar(title, right, withUrl) {
    return `
        <div class="win-bar">
            <span class="win-dots"><i></i><i></i><i></i></span>
            <span class="win-tab">${title}</span>
            ${right ? `<span class="win-right">${right}</span>` : ""}
        </div>
        ${withUrl ? winUrl() : ""}
        ${winHearts()}
    `;
}

// 網址列：網址的字之後用 textContent 放進 .win-url-text
function winUrl() {
    return `<div class="win-url">${icon("reload")}<span class="win-url-text"></span>${icon("mail")}</div>`;
}

// 一排像素愛心（用圖示庫的愛心，不會變成 iPhone 的 emoji）
function winHearts() {
    return `<div class="win-hearts">${icon("heart").repeat(20)}</div>`;
}

// 首頁：照順序顯示所有卡片（只顯示，不能改）
function showEvents() {
    const list = document.getElementById("event-list");
    list.innerHTML = "";

    if (events.length === 0) {
        list.innerHTML = `<p class="rate-info">還沒有卡片，按右上角「編輯」新增 ${icon("sparkles")}</p>`;
    }

    events.forEach(function (ev, index) {
        // 離今天還有幾天（過了是負數）；沒填日期就是 null
        const days = ev.date ? daysBetween(getToday(), new Date(ev.date + "T00:00")) : null;

        let topText = "";
        let bigText = "";

        if (ev.type === "since") {
            // 📅 已經過了：上面放名稱，下面放天數
            topText = `<span class="ev-name"></span>`;
            if (days === null) bigText = "? 天";
            else if (days > 0) bigText = "還沒到";
            else bigText = `${-days} 天`;
        } else {
            // ⏳ 倒數：還沒到 / 今天 / 過期
            topText = `距離 <span class="ev-name"></span> 還有`;
            bigText = `${days === null ? "?" : days} 天`;
            if (days === 0) {
                topText = `<span class="ev-name"></span>`;
                bigText = `就是今天！${icon("sparkles")}`;
            } else if (days < 0) {
                topText = `<span class="ev-name"></span> 已經過了`;
                bigText = `${-days} 天`;
            }
        }

        // ⏳ 倒數的 Loading 條：從活動前一年（365 天）開始算，活動當天 100%
        let loadingHtml = "";
        if (ev.type === "countdown" && days !== null && days >= 0) {
            const percent = Math.max(0, Math.min(100, Math.round((365 - days) / 365 * 100)));
            loadingHtml = `
                <div class="win-load">
                    <span>Loading...</span>
                    <b><i style="width: ${Math.max(percent, 6)}%"></i></b>
                    <span>${percent}%</span>
                </div>`;
        }

        const card = document.createElement("div");
        // 只有「倒數」的活動過期了才變灰
        card.className = "count-box win" + (ev.type === "countdown" && days !== null && days < 0 ? " past" : "");
        card.style.setProperty("--c", winColors[index % winColors.length]);   // 每張輪流換顏色
        card.innerHTML = `
            ${winBar(ev.type === "since" ? "已經過了" : "倒數", "", true)}
            <div class="win-body">
                <p>${topText}</p>
                <p class="big-number">${bigText}</p>
                ${loadingHtml}
            </div>
        `;
        // 名稱用 textContent 放，避免奇怪的符號把畫面弄亂
        card.querySelector(".ev-name").textContent = ev.name || (ev.type === "since" ? "紀念日" : "活動");
        card.querySelector(".win-url-text").textContent = "https://moa-diary/" + (ev.name || "event");
        list.appendChild(card);
    });

    showEventManager();  // 管理畫面也一起更新
}

// 類型的文字
const eventTypeNames = { countdown: icon("hourglass") + " 倒數", since: icon("calendar") + " 已經過了" };

// ⏳ 倒數管理畫面：每一行有 ↑ ↓ ✏️ 🗑️
function showEventManager() {
    const list = document.getElementById("event-manager");
    list.innerHTML = "";

    events.forEach(function (ev, index) {
        const row = document.createElement("div");
        row.className = "ev-row";
        row.innerHTML = `
            <div class="ev-row-top">
                <div class="ev-row-info">
                    <div class="ev-row-name"></div>
                    <div class="ev-row-date">${eventTypeNames[ev.type]}・${ev.date ? ev.date.replaceAll("-", "/") : "未設定"}</div>
                </div>
                <button type="button" class="ev-btn ev-up" ${index === 0 ? "disabled" : ""} aria-label="往上">${icon("arrow-up")}</button>
                <button type="button" class="ev-btn ev-down" ${index === events.length - 1 ? "disabled" : ""} aria-label="往下">${icon("arrow-down")}</button>
                <button type="button" class="ev-btn ev-edit" aria-label="編輯">${icon("pencil")}</button>
                <button type="button" class="ev-btn ev-delete" aria-label="刪除">${icon("trash")}</button>
            </div>
            <div class="edit-fields" ${editingEventId === ev.id ? "" : "hidden"}>
                <div class="ev-types">
                    <button type="button" class="type-chip" data-type="countdown">${eventTypeNames.countdown}</button>
                    <button type="button" class="type-chip" data-type="since">${eventTypeNames.since}</button>
                </div>
                <label>名稱
                    <input type="text" class="ev-input-name">
                </label>
                <label>日期
                    <input type="date" class="ev-input-date">
                </label>
                <button type="button" class="btn-small ev-done">完成</button>
            </div>
        `;
        row.querySelector(".ev-row-name").textContent = ev.name || "（未命名）";
        row.querySelector(".ev-input-name").value = ev.name;
        row.querySelector(".ev-input-date").value = ev.date;

        // 類型按鈕：選一個，名稱的提示也跟著換
        let chosenType = ev.type;
        function chooseType(type) {
            chosenType = type;
            row.querySelectorAll(".type-chip").forEach(function (chip) {
                chip.classList.toggle("active", chip.dataset.type === type);
            });
            row.querySelector(".ev-input-name").placeholder = type === "since" ? "例如：我已經當 MOA" : "例如：TXT 台北演唱會";
        }
        row.querySelectorAll(".type-chip").forEach(function (chip) {
            chip.addEventListener("click", function () {
                chooseType(chip.dataset.type);
            });
        });
        chooseType(ev.type);

        // ↑ ↓：跟上一個 / 下一個交換位置
        row.querySelector(".ev-up").addEventListener("click", function () {
            moveEvent(index, index - 1);
        });
        row.querySelector(".ev-down").addEventListener("click", function () {
            moveEvent(index, index + 1);
        });

        // ✏️：打開 / 收起
        row.querySelector(".ev-edit").addEventListener("click", function () {
            editingEventId = editingEventId === ev.id ? null : ev.id;
            showEventManager();
        });

        // 完成：存起來、收起
        row.querySelector(".ev-done").addEventListener("click", function () {
            ev.type = chosenType;
            ev.name = row.querySelector(".ev-input-name").value;
            ev.date = row.querySelector(".ev-input-date").value;
            editingEventId = null;
            saveEvents();
            showEvents();
        });

        // 🗑️ 刪除
        row.querySelector(".ev-delete").addEventListener("click", function () {
            if (!confirm(`確定要刪除「${ev.name || "未命名"}」嗎？`)) return;
            events.splice(index, 1);
            saveEvents();
            showEvents();
        });

        list.appendChild(row);
    });
}

// 把第 from 個移到第 to 個的位置
function moveEvent(from, to) {
    const ev = events.splice(from, 1)[0];   // 先拿出來
    events.splice(to, 0, ev);               // 再插進新位置
    saveEvents();
    showEvents();
}

// ＋ 新增倒數：加在最下面，直接打開 ✏️
document.getElementById("btn-add-event").addEventListener("click", function () {
    const ev = { id: Date.now(), type: "countdown", name: "", date: "" };
    events.push(ev);
    editingEventId = ev.id;
    saveEvents();
    showEvents();
});

showEvents();

// 首頁「編輯」：打開 / 關閉倒數管理畫面
const eventSheet = document.getElementById("event-sheet");

function closeEventSheet() {
    eventSheet.classList.remove("open");
    editingEventId = null;   // 沒按完成的輸入框也收起來
    showEventManager();
}

document.getElementById("btn-home-edit").addEventListener("click", function () {
    eventSheet.classList.add("open");
});
document.getElementById("event-sheet-close").addEventListener("click", closeEventSheet);
document.getElementById("event-sheet-backdrop").addEventListener("click", closeEventSheet);

// ⚙️ 設定：打開 / 關閉
const settingsSheet = document.getElementById("settings-sheet");
function closeSettings() {
    settingsSheet.classList.remove("open");
}
document.getElementById("btn-settings").addEventListener("click", function () {
    settingsSheet.classList.add("open");
});
document.getElementById("settings-close").addEventListener("click", closeSettings);
document.getElementById("settings-backdrop").addEventListener("click", closeSettings);

// ===== 記帳 =====

const moneyForm = document.getElementById("money-form");
const moneyList = document.getElementById("money-list");

// 幣種對應的符號
const currencySymbols = { TWD: "NT$", KRW: "₩", JPY: "¥", USD: "US$" };

// 從置物櫃拿出所有記帳（還沒有的話，就是一疊空的）
let records = JSON.parse(localStorage.getItem("moneyRecords")) || [];

// 以前的資料是簡體字：分類、狀態換成繁體，統計和分類才對得上
const toTraditional = { "专辑": "專輯", "周边": "周邊", "门票": "門票", "其他": "其他",
    "货到付款": "貨到付款", "已发货": "已發貨", "待付二补": "待付二補", "待二补": "待付二補", "已到货": "完成" };
records.forEach(function (r) {
    if (toTraditional[r.category]) r.category = toTraditional[r.category];
    if (toTraditional[r.status]) r.status = toTraditional[r.status];
    (r.items || []).forEach(function (it) {
        if (toTraditional[it.category]) it.category = toTraditional[it.category];
    });
});
localStorage.setItem("moneyRecords", JSON.stringify(records));  // 換好就存回去

// 舊的狀態名稱，換成新的
records.forEach(function (r) {
    if (r.status === "待二補") r.status = "待付二補";
    if (r.status === "已到貨") r.status = "完成";
});

// 狀態前面的小圖示
const statusIcons = { "貨到付款": icon("money") + " 貨到付款", "已付款": icon("credit-card") + " 已付款", "已發貨": icon("truck") + " 已發貨", "待付二補": icon("coins") + " 待付二補", "完成": icon("check") + " 完成" };

// ===== 🏷️ 分類 =====

// 分類和它的小圖示
const categoryIcons = { "專輯": icon("album"), "小卡": icon("image"), "周邊": icon("gift"), "門票": px("ticket"), "交通": icon("bus"), "住宿": icon("bed"), "其他": icon("package") };

// 分類在甜甜圈圖上的顏色
const categoryColors = { "專輯": "#8b7cf6", "小卡": "#f49ac2", "周邊": "#fbbf77", "門票": "#6cc5b0", "交通": "#7cb8f0", "住宿": "#f6d36b", "其他": "#c0bcd6" };

// 以前記的帳沒有分類，就當成「其他」
records.forEach(function (r) {
    if (!r.category) r.category = "其他";
});

// 記一筆面板裡的分類按鈕：一顆一顆做出來
const catChips = document.getElementById("cat-chips");
Object.keys(categoryIcons).forEach(function (name) {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "cat-chip";
    chip.dataset.cat = name;
    chip.innerHTML = categoryIcons[name] + " " + name;
    chip.addEventListener("click", function () {
        selectCategory(name);
    });
    catChips.appendChild(chip);
});

// 選一個分類：亮起來，並記在看不到的欄位
function selectCategory(name) {
    document.getElementById("m-category").value = name;
    document.querySelectorAll(".cat-chip").forEach(function (chip) {
        chip.classList.toggle("active", chip.dataset.cat === name);
    });
}

selectCategory("其他");

// 把所有記帳存回置物櫃
function saveRecords() {
    localStorage.setItem("moneyRecords", JSON.stringify(records));
}

// 按下「記一筆」時
moneyForm.addEventListener("submit", function (event) {
    // 阻止頁面重新載入
    event.preventDefault();

    // 這一筆買的每一樣：購物車裡的 + 還沒按加入的那一個
    const items = cartWithPending();

    // 沒輸入金額就提醒
    if (items.length === 0) {
        alert("還沒輸入金額喔 💸");
        return;
    }

    // 合計、用到的分類、名稱
    let amount = 0;
    const cats = [];
    const names = [];
    items.forEach(function (it) {
        amount += it.twd;
        if (!cats.includes(it.category)) cats.push(it.category);
        const name = it.name || it.category;  // 沒填名稱就用分類名稱
        if (!names.includes(name)) names.push(name);
    });

    // 把表單的內容做成一張資料卡
    const record = {
        id: Date.now(),
        date: document.getElementById("m-date").value,
        item: names.join("、"),
        category: cats[0],   // 舊格式留著：第一個分類
        items: items,        // 每一樣東西（有自己的分類和金額）
        amount: amount,
        agent: document.getElementById("m-agent").value,
        platform: document.getElementById("m-platform").value,
        shipping: document.getElementById("m-shipping").value,
                extra: 0,  // 二補等到貨了再填
        status: document.getElementById("m-status").value,
        note: document.getElementById("m-note").value,
    };

    records.unshift(record);  // 放到最前面（最新的在最上面）
    saveRecords();            // 存進置物櫃
    showRecords();            // 重新顯示列表
    moneyForm.reset();        // 清空表單
    selectCategory("其他");   // 分類回到「其他」
    resetCart();              // 購物車計算機也清空
        // 收起滑出來的畫面，跳到記帳頁看剛記的那筆
    closeSheet();
    document.querySelector('[data-page="page-money"]').click();
});


// 這一筆用到的所有分類圖示，例如「🃏🎀」
function cardIcons(r) {
    if (!r.items) return categoryIcons[r.category] || categoryIcons["其他"];  // 舊資料只有一個分類
    let icons = "";
    r.items.forEach(function (it) {
        const catIcon = categoryIcons[it.category] || categoryIcons["其他"];
        if (!icons.includes(catIcon)) icons += catIcon;
    });
    return icons;
}

// 做出一張記帳卡片（記帳頁、待到貨頁都會用到）
function makeCard(r) {
    // 準備一個空籃子，有填的資料才放進去
    const tags = [];
    if (r.platform) tags.push(icon("shopping-bag") + " " + r.platform);
    if (r.agent) tags.push(icon("human") + " " + r.agent);
    if (r.shipping) tags.push(icon("ship") + " " + r.shipping);
    if (r.extra) tags.push(icon("plus") + " 二補 NT$ " + r.extra);

    // 把籃子裡的每個資料，變成一顆小標籤
    let tagsHtml = "";
    tags.forEach(function (text) {
        tagsHtml += `<span class="info-tag">${text}</span>`;
    });

    // 有寫備注才顯示
    let noteHtml = "";
    if (r.note) {
        noteHtml = `<p class="money-note">${icon("note")} ${r.note}</p>`;
    }

    // 依照狀態，顯示下一步的按鈕
    let stepsHtml = "";
    if (r.status === "已付款" || r.status === "貨到付款") {
        stepsHtml = `<button class="btn-step" data-act="ship">${icon("truck")} 已發貨</button><button class="btn-step" data-act="arrive">${icon("package")} 到貨了</button>`;
    } else if (r.status === "已發貨") {
        stepsHtml = `<button class="btn-step" data-act="arrive">${icon("package")} 到貨了</button>`;
    } else if (r.status === "待付二補") {
        stepsHtml = `<button class="btn-step" data-act="paid">${icon("check")} 已付二補</button>`;
    }

    // 小視窗的顏色：用第一個分類的顏色（跟甜甜圈圖一樣）
    const firstCat = r.items ? r.items[0].category : r.category;

    const card = document.createElement("div");
    card.className = "money-card win";
    card.style.setProperty("--c", categoryColors[firstCat] || "var(--win-blue)");
    card.innerHTML = `
        ${winBar(`${cardIcons(r)} ${r.date}`, `<span class="status">${statusIcons[r.status] || r.status}</span>`)}
        <div class="win-body">
            <div class="money-top">
                <strong>${r.item}</strong>
            </div>
            <p class="money-amount">NT$ ${r.amount.toLocaleString()}</p>
            <div class="info-tags">${tagsHtml}</div>
            ${noteHtml}
            <div class="steps">${stepsHtml}</div>
            <button class="btn-delete">${icon("trash")} 刪除</button>
        </div>
    `;

       // 點下一步的按鈕
    card.querySelectorAll(".btn-step").forEach(function (btn) {
        btn.addEventListener("click", function () {
            nextStep(r.id, btn.dataset.act);
        });
    });

    // 點刪除按鈕：刪掉這一筆
    card.querySelector(".btn-delete").addEventListener("click", function () {
        deleteRecord(r.id);
    });

    return card;  // 把做好的卡片交出去
}

// 把所有記帳顯示成卡片
function showRecords() {
    moneyList.innerHTML = "";  // 先清空

    records.forEach(function (r) {
        moneyList.appendChild(makeCard(r));
    });

        // 待到貨頁也一起更新
    showPending();

    // 統計也一起更新
    updateStats();
}

// 待到貨頁：只顯示還沒到貨的
function showPending() {
    const pendingList = document.getElementById("pending-list");
    pendingList.innerHTML = "";

    // 挑出「狀態不是已到貨」的
    const pending = records.filter(function (r) {
        return r.status !== "完成";
    });

    // 一張一張顯示，順便把「待二補」的二補金額加起來
    let extraTotal = 0;
    pending.forEach(function (r) {
        if (r.status === "待付二補") extraTotal += r.extra;
        pendingList.appendChild(makeCard(r));
    });

    document.getElementById("pending-extra").textContent = extraTotal.toLocaleString();
    document.getElementById("pending-count").textContent = pending.length;

    // 全部都到貨了
    if (pending.length === 0) {
        pendingList.innerHTML = `<p class="empty">${icon("sparkles")} 全部都到貨了！</p>`;
    }
}

// 打開網頁時，先顯示一次
showRecords();


// 按卡片上的下一步按鈕
function nextStep(id, act) {
    const record = records.find(function (r) {
        return r.id === id;
    });

    if (act === "ship") {
        record.status = "已發貨";
    } else if (act === "arrive") {
        const answer = prompt("📦 到貨了！有二補嗎？\n有的話輸入金額，沒有就直接按「確定」");
        if (answer === null) return;  // 按了取消，什麼都不改
        const extra = Number(answer);
        if (extra > 0) {
            record.extra = extra;
            record.status = "待付二補";
        } else {
            record.status = "完成";
        }
    } else if (act === "paid") {
        record.status = "完成";
    }

    saveRecords();
    showRecords();
}

// 刪除一筆
function deleteRecord(id) {
    // 先問一下，按「取消」就不刪
    if (!confirm("確定要刪除這一筆嗎？")) {
        return;
    }

    // 留下「編號不是這個」的，等於把這一筆拿掉
    records = records.filter(function (r) {
        return r.id !== id;
    });

    saveRecords();
    showRecords();
}


// ===== 📊 統計 =====

// 把日期變成「2026-10-14」這種格式
function formatDate(d) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
}

// 設定成「這個月」：1 號到月底
function setThisMonth() {
    const today = getToday();
    const first = new Date(today.getFullYear(), today.getMonth(), 1);
    const last = new Date(today.getFullYear(), today.getMonth() + 1, 0);

    document.getElementById("stats-from").value = formatDate(first);
    document.getElementById("stats-to").value = formatDate(last);
    updateStats();
}

// 計算這段日期花了多少
function updateStats() {
    const from = document.getElementById("stats-from").value;
    const to = document.getElementById("stats-to").value;

    // 挑出日期在範圍裡的
    const inRange = records.filter(function (r) {
        if (from && r.date < from) return false;  // 比開始日還早
        if (to && r.date > to) return false;      // 比結束日還晚
        return true;
    });

    // 加總商品金額和二補
    let amountTotal = 0;
    let extraTotal = 0;
    inRange.forEach(function (r) {
        amountTotal += r.amount;
        extraTotal += r.extra;
    });

    document.getElementById("stats-count").textContent = inRange.length;
    document.getElementById("stats-total").textContent = (amountTotal + extraTotal).toLocaleString();
    document.getElementById("stats-extra").textContent = extraTotal.toLocaleString();
    document.getElementById("stats-extra-line").style.display = extraTotal ? "" : "none";  // 沒有二補就不顯示

    // 每個分類各花了多少：新資料照每一樣的金額，舊資料整筆算進它的分類
    const catTotals = {};
    inRange.forEach(function (r) {
        if (r.items) {
            r.items.forEach(function (it) {
                catTotals[it.category] = (catTotals[it.category] || 0) + it.twd;
            });
        } else {
            const cat = r.category || "其他";
            catTotals[cat] = (catTotals[cat] || 0) + r.amount;
        }
    });

    // 🍩 甜甜圈圖：每個分類佔一段角度（0% ~ 100%）
    const parts = [];
    let catHtml = "";
    let start = 0;
    Object.keys(categoryIcons).forEach(function (name) {
        if (!catTotals[name]) return;
        const percent = catTotals[name] / amountTotal * 100;
        const color = categoryColors[name];
        parts.push(`${color} ${start}% ${start + percent}%`);
        start += percent;

        // 下面的分類清單
        catHtml += `
            <div class="legend-row">
                <span class="legend-dot" style="background-color: ${color}"></span>
                <span class="legend-name">${categoryIcons[name]} ${name}</span>
                <span>NT$ ${catTotals[name].toLocaleString()}</span>
                <span class="legend-percent">${Math.round(percent)}%</span>
            </div>`;
    });

    const donut = document.getElementById("stats-donut");
    if (parts.length > 0) {
        donut.style.background = `conic-gradient(${parts.join(", ")})`;
    } else {
        donut.style.background = "#e6e1ff";  // 沒有資料：灰色空圈
    }
    document.getElementById("stats-cats").innerHTML = catHtml;
}

// 改日期時重新計算；按「這個月」跳回本月
document.getElementById("stats-from").addEventListener("input", updateStats);
document.getElementById("stats-to").addEventListener("input", updateStats);
document.getElementById("stats-this-month").addEventListener("click", setThisMonth);

// 打開網頁時，預設顯示這個月
setThisMonth();


// ===== 📸 記錄 =====

const diaryForm = document.getElementById("diary-form");
const diaryList = document.getElementById("diary-list");

// 現在在哪個分頁："concert"（演唱會）或 "mood"（心情）
let currentType = "concert";

// 所有記錄（打開網頁時會從 localForage 拿出來）
let diaryEntries = [];

// 這一篇準備要放的照片（還沒按「記下來」）
let newPhotos = [];

// 照著現在的分頁，調整表單
function updateDiaryFields() {
    const concertFields = document.getElementById("concert-fields");
    const textBox = document.getElementById("d-text");

    if (currentType === "concert") {
        concertFields.style.display = "block";
        textBox.placeholder = "今天的演唱會…";
    } else {
        concertFields.style.display = "none";
        textBox.placeholder = "今天的心情…";
    }
}

// 點分頁按鈕
document.querySelectorAll("#page-diary .sub-tab").forEach(function (tab) {
    tab.addEventListener("click", function () {
        currentType = tab.dataset.type;

        // 所有分頁按鈕先變灰，再讓被點的變亮
        document.querySelectorAll("#page-diary .sub-tab").forEach(function (t) {
            t.classList.remove("active");
        });
        tab.classList.add("active");

        updateDiaryFields();
        showDiary();
    });
});

// 把照片縮小、壓縮，變成一串文字（才能存進置物櫃）
function compressImage(file) {
    return new Promise(function (resolve) {
        const img = new Image();

        img.onload = function () {
            // 最長邊縮到 1000 像素（本來就比較小的不放大）
            const scale = Math.min(1, 1000 / Math.max(img.width, img.height));
            const canvas = document.createElement("canvas");
            canvas.width = img.width * scale;
            canvas.height = img.height * scale;
            canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);

            URL.revokeObjectURL(img.src);
            resolve(canvas.toDataURL("image/jpeg", 0.8));
        };

        // 讀不了的格式（例如電腦上的 HEIC），就跳過
        img.onerror = function () {
            resolve(null);
        };

        img.src = URL.createObjectURL(file);
    });
}

// 選好照片時
document.getElementById("d-photos").addEventListener("change", async function (event) {
    const files = Array.from(event.target.files);

    for (const file of files) {
        if (newPhotos.length >= 9) {
            alert("最多 9 張喔！");
            break;
        }
        const photo = await compressImage(file);
        if (photo) newPhotos.push(photo);
    }

    event.target.value = "";  // 清掉，下次再選才會有反應
    showPreview();
});

// 顯示還沒存的照片（可以按 ✕ 拿掉）
function showPreview() {
    const preview = document.getElementById("photo-preview");
    preview.innerHTML = "";

    newPhotos.forEach(function (photo, index) {
        const item = document.createElement("div");
        item.className = "preview-item";
        item.innerHTML = `
            <img src="${photo}">
            <button type="button" aria-label="拿掉">${icon("close")}</button>
        `;
        item.querySelector("button").addEventListener("click", function () {
            newPhotos.splice(index, 1);
            showPreview();
        });
        preview.appendChild(item);
    });
}

// 點照片：全螢幕看大圖，再點一下關掉
function openViewer(src) {
    const viewer = document.createElement("div");
    viewer.className = "viewer";
    viewer.innerHTML = `<img src="${src}">`;
    viewer.addEventListener("click", function () {
        viewer.remove();
    });
    document.body.appendChild(viewer);
}

// 按「記下來」
diaryForm.addEventListener("submit", async function (event) {
    event.preventDefault();


    const entry = {
        id: Date.now(),
        type: currentType,  // 在哪個分頁寫的，就是哪一種
        date: document.getElementById("d-date").value,
        title: document.getElementById("d-title").value,
        place: document.getElementById("d-place").value,
        seat: document.getElementById("d-seat").value,
        text: document.getElementById("d-text").value,
        photos: newPhotos,
    };

    diaryEntries.unshift(entry);
    await localforage.setItem("diaryEntries", diaryEntries);  // 存進大置物櫃

    showDiary();
    diaryForm.reset();

    // 照片預覽也清空
    newPhotos = [];
    showPreview();
});

// 顯示現在這個分頁的記錄
function showDiary() {
    diaryList.innerHTML = "";

    // 照日期排：最近的在最上面
    diaryEntries.sort(function (a, b) {
        return b.date.localeCompare(a.date);
    });

    // 只挑出現在這個分頁的
    const shown = diaryEntries.filter(function (d) {
        return d.type === currentType;
    });

    shown.forEach(function (d) {
        // 標題：演唱會顯示名稱，心情就顯示「心情」
        let titleText = icon("message") + " 心情";
        if (d.type === "concert") {
            titleText = icon("mic") + " " + (d.title || "演唱會");
        }

        // 小標籤：有填才放
        const tags = [];
        if (d.place) tags.push(icon("map-pin") + " " + d.place);
        if (d.seat) tags.push(icon("label") + " " + d.seat);

        let tagsHtml = "";
        tags.forEach(function (text) {
            tagsHtml += `<span class="info-tag">${text}</span>`;
        });

        // 內文：有寫才顯示
        let textHtml = "";
        if (d.text) {
            textHtml = `<p class="diary-text">${d.text}</p>`;
        }

        // 照片：有才顯示
        let photosHtml = "";
        if (d.photos.length > 0) {
            photosHtml = `<div class="photo-grid">`;
            d.photos.forEach(function (photo) {
                photosHtml += `<img src="${photo}">`;
            });
            photosHtml += `</div>`;
        }

        // 💾 小視窗：演唱會藍色、心情粉色，標題列放日期
        const card = document.createElement("div");
        card.className = "money-card win";
        card.style.setProperty("--c", d.type === "concert" ? "var(--win-blue)" : "var(--win-pink)");
        card.innerHTML = `
            ${winBar(`${icon(d.type === "concert" ? "mic" : "message")} ${d.date}`)}
            <div class="win-body">
                <strong>${titleText}</strong>
                <div class="info-tags">${tagsHtml}</div>
                ${photosHtml}
                ${textHtml}
                <button class="btn-delete">${icon("trash")} 刪除</button>
            </div>
        `;

        // 點照片看大圖
        card.querySelectorAll(".photo-grid img").forEach(function (img) {
            img.addEventListener("click", function () {
                openViewer(img.src);
            });
        });

        card.querySelector(".btn-delete").addEventListener("click", function () {
            deleteDiary(d.id);
        });

        diaryList.appendChild(card);
    });

    // 這個分頁還沒有記錄
    if (shown.length === 0) {
        if (currentType === "concert") {
            diaryList.innerHTML = `<p class="empty">還沒有演唱會記錄，記下第一場吧 ${icon("mic")}</p>`;
        } else {
            diaryList.innerHTML = `<p class="empty">還沒有心情記錄，寫下第一篇吧 ${icon("message")}</p>`;
        }
    }
}

// 刪除一篇
async function deleteDiary(id) {
    if (!confirm("確定要刪除這篇記錄嗎？")) {
        return;
    }
    diaryEntries = diaryEntries.filter(function (d) {
        return d.id !== id;
    });
    await localforage.setItem("diaryEntries", diaryEntries);
    showDiary();
}

// 打開網頁時：從大置物櫃拿出所有記錄
async function loadDiary() {
    diaryEntries = (await localforage.getItem("diaryEntries")) || [];
    showDiary();
}

updateDiaryFields();
loadDiary();


// ===== 💾 備份 =====

// 匯出：把所有資料打包成一個檔案下載
document.getElementById("btn-export").addEventListener("click", function () {
    const backup = {
        app: "MOA Diary",
        exportedAt: formatDate(getToday()),
        events: events,
        moneyRecords: records,
        diaryEntries: diaryEntries,
    };

    // 變成文字，再包成一個檔案
    const text = JSON.stringify(backup);
    const file = new Blob([text], { type: "application/json" });

    // 做一個隱形的下載鏈接，幫你按下去
    const link = document.createElement("a");
    link.href = URL.createObjectURL(file);
    link.download = `MOA-Diary-備份-${backup.exportedAt}.json`;
    link.click();
});

// 按「匯入備份」：打開選檔案的框
document.getElementById("btn-import").addEventListener("click", function () {
    document.getElementById("import-file").click();
});

// 選好備份檔案後
document.getElementById("import-file").addEventListener("change", async function (event) {
    const file = event.target.files[0];
    event.target.value = "";  // 清掉，下次選同一個檔案也有反應
    if (!file) return;

    try {
        const backup = JSON.parse(await file.text());

        // 確認是不是我們的備份檔案
        if (backup.app !== "MOA Diary") {
            alert("這不是 MOA Diary 的備份檔案喔 🤔");
            return;
        }

        if (!confirm(`要匯入 ${backup.exportedAt} 的備份嗎？\n現在的資料會被「整個取代」喔！`)) {
            return;
        }

        // 放回各自的置物櫃
        // 舊的備份只有一個活動：變成清單
        let backupEvents = backup.events;
        if (!backupEvents) {
            backupEvents = backup.eventDate ? [{ id: Date.now(), name: backup.eventName || "", date: backup.eventDate }] : [];
        }
        localStorage.setItem("events", JSON.stringify(backupEvents));
        // 舊的備份有 fanStart：打開時會自動變成「我已經當 MOA」卡片
        if (backup.fanStart) localStorage.setItem("fanStart", backup.fanStart);
        else localStorage.removeItem("fanStart");
        localStorage.setItem("moneyRecords", JSON.stringify(backup.moneyRecords));
        await localforage.setItem("diaryEntries", backup.diaryEntries);

        alert("匯入完成！🎉");
        location.reload();  // 重新載入頁面，顯示匯入的資料
    } catch (error) {
        alert("讀不了這個檔案，確認是 MOA Diary 的備份檔案喔 🤔");
    }
});


// ===== 🏗️ 新的版面 =====

// 記帳頁的小分頁：全部 / 待到貨
document.querySelectorAll("#page-money .sub-tab").forEach(function (tab) {
    tab.addEventListener("click", function () {
        document.querySelectorAll("#page-money .sub-tab").forEach(function (t) {
            t.classList.remove("active");
        });
        tab.classList.add("active");

        if (tab.dataset.view === "pending") {
            document.getElementById("money-view-all").style.display = "none";
            document.getElementById("money-view-pending").style.display = "block";
        } else {
            document.getElementById("money-view-all").style.display = "block";
            document.getElementById("money-view-pending").style.display = "none";
        }
    });
});

// ➕ 記一筆：打開 / 關閉滑出來的畫面
const addSheet = document.getElementById("add-sheet");

function openSheet() {
    // 日期還沒填的話，自動填今天
    const dateInput = document.getElementById("m-date");
    if (!dateInput.value) {
        dateInput.value = formatDate(getToday());
    }
    addSheet.classList.add("open");
}

function closeSheet() {
    addSheet.classList.remove("open");
}

document.getElementById("btn-add").addEventListener("click", openSheet);
document.getElementById("sheet-close").addEventListener("click", closeSheet);
document.getElementById("sheet-backdrop").addEventListener("click", closeSheet);


// ===== 🛒 購物車計算機（數字鍵盤） =====

// 現在正在打的數字，例如 "650"
let keypadText = "";

// 現在選的幣種
let calcCurrency = "TWD";

// 購物車：按「＋加入」放進來的每一樣東西
let calcItems = [];

const calcName = document.getElementById("calc-name");
const calcList = document.getElementById("calc-list");

// 匯率表：1 台幣可以換多少外幣（先拿出上次存的）
let rates = JSON.parse(localStorage.getItem("rates")) || {};
let ratesTime = localStorage.getItem("ratesTime") || "";

// 把外幣換成台幣（四捨五入到整數）
function toTWD(amount, currency) {
    if (currency === "TWD") return amount;  // 本來就是台幣
    if (!rates[currency]) return null;      // 還沒有匯率資料
    return Math.round(amount / rates[currency]);
}

// 幣種按鈕：NT$ ₩ ¥ US$
const currencyBox = document.getElementById("cur-chips");
Object.keys(currencySymbols).forEach(function (code) {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "cur-chip";
    chip.dataset.currency = code;
    chip.textContent = currencySymbols[code];
    chip.addEventListener("click", function () {
        selectCurrency(code);
    });
    currencyBox.appendChild(chip);
});

function selectCurrency(code) {
    calcCurrency = code;
    document.querySelectorAll(".cur-chip").forEach(function (chip) {
        chip.classList.toggle("active", chip.dataset.currency === code);
    });
    updateKeypad();
}

// 算出合計：購物車裡的 + 正在打、還沒按加入的那一個
function keypadTotal() {
    let total = 0;
    calcItems.forEach(function (item) {
        total += item.twd;
    });
    const now = toTWD(Number(keypadText), calcCurrency);
    if (now) total += now;
    return total;
}

// 更新顯示，也把合計放進看不到的金額欄位
function updateKeypad() {
    const total = keypadTotal();
    document.getElementById("amount-text").textContent = total.toLocaleString();
    document.getElementById("m-amount").value = total;
    document.getElementById("amount-label").textContent = calcItems.length > 0 ? "合計 " : "";

    // 上面的小字：正在打的數字換算成台幣，或顯示匯率
    const expr = document.getElementById("amount-expr");
    const symbol = currencySymbols[calcCurrency];
    const amount = Number(keypadText);

    if (calcCurrency !== "TWD" && !rates[calcCurrency]) {
        expr.textContent = "還沒有匯率資料，請連上網路";
    } else if (amount && calcCurrency !== "TWD") {
        expr.textContent = `${symbol} ${amount.toLocaleString()} ≈ NT$ ${toTWD(amount, calcCurrency).toLocaleString()}`;
    } else if (amount && calcItems.length > 0) {
        expr.textContent = `正在打：NT$ ${amount.toLocaleString()}`;
    } else if (calcCurrency !== "TWD") {
        const oneToTWD = (1 / rates[calcCurrency]).toFixed(4);
        expr.textContent = `${symbol}1 ≈ NT$ ${oneToTWD}（${ratesTime} 更新）`;
    } else {
        expr.textContent = "";
    }
}

// 顯示購物車清單
function showCalc() {
    calcList.innerHTML = "";

    calcItems.forEach(function (item, index) {
        // 價格文字：外幣的話，後面加上「≈ NT$」
        let priceText = `${currencySymbols[item.currency]} ${item.amount.toLocaleString()}`;
        if (item.currency !== "TWD") {
            priceText += ` ≈ NT$ ${item.twd.toLocaleString()}`;
        }

        const row = document.createElement("div");
        row.className = "calc-item";
        row.innerHTML = `
            <span>${categoryIcons[item.category] || categoryIcons["其他"]} ${item.name || item.category}</span>
            <span>${priceText}</span>
            <button type="button" class="calc-remove" aria-label="拿掉">${icon("close")}</button>
        `;

        // 按 ✕：從購物車拿掉這一樣
        row.querySelector(".calc-remove").addEventListener("click", function () {
            calcItems.splice(index, 1);
            showCalc();
        });

        calcList.appendChild(row);
    });

    updateKeypad();
}

// 按「＋加入」：把正在打的數字放進購物車
function addToCart() {
    const amount = Number(keypadText);
    if (!amount) return;  // 沒打數字就不加

    const twd = toTWD(amount, calcCurrency);
    if (twd === null) {
        alert("還沒有匯率資料，請連上網路再試");
        return;
    }

    calcItems.push({
        category: document.getElementById("m-category").value,
        name: calcName.value,
        amount: amount,
        currency: calcCurrency,
        twd: twd,
    });

    // 清空，準備打下一樣
    keypadText = "";
    calcName.value = "";
    showCalc();
}

// 記完一筆後：全部清空，幣種回到台幣
function resetCart() {
    keypadText = "";
    calcItems = [];
    calcName.value = "";
    showCalc();
    selectCurrency("TWD");
}

// 購物車 + 還沒按加入的那一個（有打數字的話）
function cartWithPending() {
    const items = calcItems.slice();
    const amount = Number(keypadText);
    const twd = toTWD(amount, calcCurrency);
    if (amount && twd !== null) {
        items.push({
            category: document.getElementById("m-category").value,
            name: calcName.value,
            amount: amount,
            currency: calcCurrency,
            twd: twd,
        });
    }
    return items;
}

// 按鍵盤上的按鍵
document.querySelectorAll(".keypad button[data-key]").forEach(function (btn) {
    btn.addEventListener("click", function () {
        const key = btn.dataset.key;

        if (key === "back") {
            keypadText = keypadText.slice(0, -1);   // 刪掉最後一個字
        } else if (key === "clear") {
            resetCart();                            // 全部清掉
            return;
        } else if (key === "add") {
            addToCart();
            return;
        } else if (keypadText.length < 9) {
            keypadText += key;                      // 數字接在後面
            if (keypadText === "0" || keypadText === "00") keypadText = "";  // 開頭不要 0
        }

        updateKeypad();
    });
});

// 從網路抓最新匯率
async function loadRates() {
    try {
        const response = await fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/twd.json");
        const data = await response.json();
        rates = {
            KRW: data.twd.krw,
            JPY: data.twd.jpy,
            USD: data.twd.usd,
        };
        ratesTime = data.date;

        // 存進置物櫃，下次沒網路也能用
        localStorage.setItem("rates", JSON.stringify(rates));
        localStorage.setItem("ratesTime", ratesTime);
    } catch (error) {
        // 抓不到（例如沒網路），就繼續用上次存的
    }
    updateKeypad();
}

// 打開網頁時：先用舊的匯率顯示，再去抓新的
selectCurrency("TWD");
loadRates();


// ===== 🐥 黃春 =====
// （整塊獨立：要拿掉的話，刪掉這一段到最後）

const petRoom = document.getElementById("pet-room");
const pet = document.getElementById("pet");
const petHop = document.getElementById("pet-hop");
const petBody = document.getElementById("pet-body");
let petX = 0;  // 黃春現在離房間左邊幾 px

// 黃春的資料：花掉的金幣、飽足度（和那時候的時間）、買過的衣服、正在穿的
let petData = JSON.parse(localStorage.getItem("petData")) || {
    spent: 0,
    full: 80,
    fullTime: Date.now(),
    owned: [],
    wearing: { hat: "", eyes: "", neck: "" },
};

function savePet() {
    localStorage.setItem("petData", JSON.stringify(petData));
}

// 🍽️ 食物：價錢、加多少飽足度
const petFoods = [
    { icon: "rice", name: "飯團", price: 100, full: 10 },
    { icon: "strawberry", name: "草莓", price: 200, full: 20 },
    { icon: "cake", name: "蛋糕", price: 300, full: 30 },
    { icon: "chicken", name: "炸雞", price: 500, full: 50 },
];

// 👗 衣服：分三個部位
const petSlots = { hat: "帽子", eyes: "眼鏡", neck: "脖子" };
const petClothes = [
    { id: "bow", slot: "hat", icon: "bow", emoji: "🎀", name: "蝴蝶結", price: 300 },
    { id: "cap", slot: "hat", icon: "cap", emoji: "🧢", name: "棒球帽", price: 500 },
    { id: "crown", slot: "hat", icon: "crown", emoji: "👑", name: "皇冠", price: 1500 },
    { id: "glasses", slot: "eyes", icon: "glasses", emoji: "👓", name: "眼鏡", price: 400 },
    { id: "sunglasses", slot: "eyes", icon: "sunglasses", emoji: "🕶️", name: "墨鏡", price: 600 },
    { id: "scarf", slot: "neck", icon: "scarf", emoji: "🧣", name: "圍巾", price: 400 },
    { id: "necklace", slot: "neck", icon: "necklace", emoji: "📿", name: "項鏈", price: 800 },
];

// 🪙 金幣＝記帳總額（商品＋二補）－ 在商店花掉的
function petCoins() {
    let total = 0;
    records.forEach(function (r) {
        total += r.amount + (r.extra || 0);
    });
    return Math.max(0, total - petData.spent);
}

// 🍙 飽足度：每 24 小時掉 50（一天掉一半）
function petFull() {
    const hours = (Date.now() - petData.fullTime) / (1000 * 60 * 60);
    return Math.max(0, Math.round(petData.full - hours * 50 / 24));
}

// 更新上面的金幣、飽足度，還有肚子餓的泡泡
function updatePetStatus() {
    const full = petFull();
    document.getElementById("pet-coins").textContent = petCoins().toLocaleString();
    document.getElementById("pet-full-num").textContent = full;
    document.getElementById("pet-full-fill").style.width = full + "%";
    document.getElementById("pet-thought").hidden = full >= 30;
}

// 把正在穿的衣服放到某一只黃春身上（房間的、衣櫃預覽的）
function showWearing(body, wearing) {
    Object.keys(petSlots).forEach(function (slot) {
        const item = petClothes.find(function (c) {
            return c.id === wearing[slot];
        });
        body.querySelector(".wear-" + slot).innerHTML = item ? px(item.icon) : "";
    });
}

// 產生 min ~ max 之間的隨機數
function randomBetween(min, max) {
    return min + Math.random() * (max - min);
}

// 跳一下
function petJump() {
    petHop.classList.remove("jump");
    void petHop.offsetWidth;          // 讓動畫可以重新播放
    petHop.classList.add("jump");
}

// 在黃春上方冒出 💜
function petHeart() {
    const heart = document.createElement("span");
    heart.className = "pet-heart";
    heart.innerHTML = icon("heart");
    heart.style.left = petX + pet.offsetWidth / 2 + randomBetween(-16, 16) + "px";
    petRoom.appendChild(heart);
    setTimeout(function () {
        heart.remove();   // 飄完就拿掉
    }, 1200);
}

// 決定下一步要做什麼：走、停、跳
function petNextMove() {
    const roomWidth = petRoom.clientWidth;
    if (roomWidth === 0) {
        // 不在黃春的頁面（看不到房間）：先休息，等一下再看
        setTimeout(petNextMove, 1000);
        return;
    }

    const maxX = roomWidth - pet.offsetWidth;
    const dice = Math.random();

    if (dice < 0.55) {
        // 🚶 走到隨機的位置
        const targetX = randomBetween(0, maxX);
        const seconds = Math.abs(targetX - petX) / 40;   // 每秒走 40px
        // 往右走就轉向右邊（emoji 本來面向左邊）
        petBody.classList.toggle("face-right", targetX > petX);
        pet.style.transition = `transform ${seconds}s linear`;
        pet.style.transform = `translateX(${targetX}px)`;
        petX = targetX;
        setTimeout(petNextMove, seconds * 1000 + randomBetween(300, 800));
    } else if (dice < 0.85) {
        // 💤 停下來發呆
        setTimeout(petNextMove, randomBetween(1500, 3500));
    } else {
        // ✨ 跳一下
        petJump();
        setTimeout(petNextMove, 900);
    }
}

// 點黃春：冒出 💜，也跳一下
pet.addEventListener("click", function () {
    petHeart();
    petJump();
});


// ----- 🍽️ 餵食 -----

const foodSheet = document.getElementById("food-sheet");

function showFoodList() {
    document.getElementById("food-coins").textContent = petCoins().toLocaleString();
    document.getElementById("food-full").textContent = petFull();

    const list = document.getElementById("food-list");
    list.innerHTML = "";
    petFoods.forEach(function (food) {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "shop-row";
        btn.innerHTML = `
            <span class="shop-icon">${px(food.icon)}</span>
            <span class="shop-name">${food.name}<small>飽足度 +${food.full}</small></span>
            <span class="shop-price">${icon("coins")} ${food.price}</span>
        `;
        btn.addEventListener("click", function () {
            feedPet(food);
        });
        list.appendChild(btn);
    });
}

function feedPet(food) {
    const full = petFull();
    if (full >= 100) {
        alert("黃春已經吃飽了 🐥💤");
        return;
    }
    if (petCoins() < food.price) {
        alert("金幣不夠喔 🪙");
        return;
    }

    // 扣金幣、加飽足度（最多 100）
    petData.spent += food.price;
    petData.full = Math.min(100, full + food.full);
    petData.fullTime = Date.now();
    savePet();
    updatePetStatus();
    foodSheet.classList.remove("open");

    // 🍽️ 吃東西：食物出現在黃春旁邊，然後大肚子、打嗝、冒愛心
    const bite = document.createElement("span");
    bite.className = "pet-food";
    bite.innerHTML = px(food.icon);
    bite.style.left = petX + pet.offsetWidth / 2 + "px";
    petRoom.appendChild(bite);
    setTimeout(function () {
        bite.remove();
    }, 800);

    const emoji = document.getElementById("pet-emoji");
    setTimeout(function () {
        emoji.classList.add("big-belly");
    }, 700);
    setTimeout(function () {
        document.getElementById("pet-say").hidden = false;   // 嗝～
        petJump();
        petHeart();
        setTimeout(petHeart, 200);
        setTimeout(petHeart, 400);
    }, 1500);
    setTimeout(function () {
        document.getElementById("pet-say").hidden = true;
        emoji.classList.remove("big-belly");
    }, 4000);
}

document.getElementById("btn-food").addEventListener("click", function () {
    showFoodList();
    foodSheet.classList.add("open");
});
function closeFood() {
    foodSheet.classList.remove("open");
}
document.getElementById("food-close").addEventListener("click", closeFood);
document.getElementById("food-backdrop").addEventListener("click", closeFood);


// ----- 👗 衣櫃 -----

const wardrobeSheet = document.getElementById("wardrobe-sheet");
let wardrobeSlot = "hat";   // 現在看哪個部位
let tryOn = {};             // 試穿中（還沒按儲存）

function showWardrobe() {
    document.getElementById("wardrobe-coins").textContent = petCoins().toLocaleString();
    showWearing(document.getElementById("preview-body"), tryOn);

    // 部位的小分頁
    const tabs = document.getElementById("wardrobe-tabs");
    tabs.innerHTML = "";
    Object.keys(petSlots).forEach(function (slot) {
        const tab = document.createElement("button");
        tab.type = "button";
        tab.className = "sub-tab" + (slot === wardrobeSlot ? " active" : "");
        tab.textContent = petSlots[slot];
        tab.addEventListener("click", function () {
            wardrobeSlot = slot;
            showWardrobe();
        });
        tabs.appendChild(tab);
    });

    // 這個部位的衣服
    const list = document.getElementById("wardrobe-items");
    list.innerHTML = "";
    petClothes.forEach(function (item) {
        if (item.slot !== wardrobeSlot) return;
        const owned = petData.owned.includes(item.id);
        const wearing = tryOn[item.slot] === item.id;

        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "wardrobe-item" + (wearing ? " wearing" : "");
        btn.innerHTML = `
            <span class="wear-mini">${px("chick")}<span class="wear">${px(item.icon)}</span></span>
            <span>${item.name}</span>
            <small>${wearing ? "穿著中" : owned ? "已擁有" : icon("coins") + " " + item.price}</small>
        `;
        btn.addEventListener("click", function () {
            if (!owned) {
                // 還沒買：問要不要買
                if (petCoins() < item.price) {
                    alert("金幣不夠喔 🪙");
                    return;
                }
                if (!confirm(`要花 🪙${item.price} 買 ${item.emoji} ${item.name} 嗎？`)) return;
                petData.spent += item.price;
                petData.owned.push(item.id);
                savePet();
                updatePetStatus();
                tryOn[item.slot] = item.id;   // 買了就先穿上看看
            } else {
                // 買過了：穿上 / 脫掉
                tryOn[item.slot] = wearing ? "" : item.id;
            }
            showWardrobe();
        });
        list.appendChild(btn);
    });
}

document.getElementById("btn-wardrobe").addEventListener("click", function () {
    tryOn = Object.assign({}, petData.wearing);   // 從現在穿的開始試
    showWardrobe();
    wardrobeSheet.classList.add("open");
});

// 儲存：試穿的變成真的穿上
document.getElementById("wardrobe-save").addEventListener("click", function () {
    petData.wearing = Object.assign({}, tryOn);
    savePet();
    showWearing(petBody, petData.wearing);
    wardrobeSheet.classList.remove("open");
    petHeart();
});

// 沒按儲存就關掉：試穿的不算
function closeWardrobe() {
    wardrobeSheet.classList.remove("open");
}
document.getElementById("wardrobe-close").addEventListener("click", closeWardrobe);
document.getElementById("wardrobe-backdrop").addEventListener("click", closeWardrobe);


// 打開黃春的頁面時，更新金幣和飽足度；之後每分鐘也更新一次
document.querySelector('[data-page="page-pet"]').addEventListener("click", updatePetStatus);
setInterval(updatePetStatus, 60 * 1000);

updatePetStatus();
showWearing(petBody, petData.wearing);
petNextMove();


// ===== 👾 把畫面上預留的像素圖位置畫出來 =====
document.querySelectorAll("[data-px]").forEach(function (el) {
    el.innerHTML = px(el.dataset.px);
});
document.querySelectorAll(".px-chick").forEach(function (el) {
    el.innerHTML = px("chick");
});

// HTML 裡寫好的小視窗（統計、待到貨、新增紀錄、黃春、資料備份）：標題列下面補上愛心排
document.querySelectorAll(".win > .win-bar").forEach(function (bar) {
    if (!bar.parentElement.querySelector(":scope > .win-hearts")) {   // 還沒有愛心排才補
        bar.insertAdjacentHTML("afterend", winHearts());
    }
});
