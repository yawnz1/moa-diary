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
    F: "#ffdcc2", f: "#f0b996",
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
    // 🤚 摸摸的小手（12×12，手指朝上；用的時候倒過來）
    hand: [
        "...K.K.K....",
        "..KFKFKFK...",
        "..KFKFKFK...",
        "..KFKFKFK.K.",
        "..KFFFFFKKFK",
        "..KFFFFFFFFK",
        "..KFFFFFFFK.",
        "..KFFFFFFK..",
        "..KfFFFFFK..",
        "...KffffK...",
        "...KFFFFK...",
        "...KKKKKK...",
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

        // 5. 最上面的瀏覽器分頁：記帳、記錄顯示自己的小分頁，其他頁顯示 MOA Diary
        document.getElementById("tabs-money").hidden = pageId !== "page-money";
        document.getElementById("tabs-diary").hidden = pageId !== "page-diary";
        document.getElementById("top-title").hidden = pageId === "page-money" || pageId === "page-diary";
        document.getElementById("top-title").innerHTML = pageId === "page-pet"
            ? '<span class="heart">♡</span> 黃春的房間 <span class="heart">♡</span>'
            : '<span class="heart">♡</span> MOA Diary <span class="heart">♡</span>';
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

// 按「＋ 新增倒數」還沒按完成的那一張（按完成才會真的加進清單）
let eventDraft = null;

function saveEvents() {
    localStorage.setItem("events", JSON.stringify(events));
}

// 💾 小視窗：標題列（標籤＋右邊的東西）；首頁卡片才有網址列和一排像素愛心
const winColors = ["var(--win-blue)", "var(--win-pink)", "var(--win-teal)", "var(--win-sage)"];

function winBar(title, right, withUrl) {
    return `
        <div class="win-bar">
            <span class="win-tab">${title}</span>
            ${right ? `<span class="win-right">${right}</span>` : ""}
        </div>
        ${withUrl ? winUrl() + winHearts() : ""}
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

// 🎉 紀念日：每 100 天、每滿一年。當天顯示慶祝，10 天內才提醒，平常什麼都不顯示
function milestoneText(startDate, passed) {
    const start = new Date(startDate + "T00:00");
    const today = getToday();

    // 下一個滿 N 年（今年的紀念日過了，就看明年）
    let anniversary = new Date(today.getFullYear(), start.getMonth(), start.getDate());
    if (anniversary < today) anniversary = new Date(today.getFullYear() + 1, start.getMonth(), start.getDate());
    const years = anniversary.getFullYear() - start.getFullYear();
    const daysToYear = daysBetween(today, anniversary);

    // 下一個 100 的倍數
    const daysToHundred = passed % 100 === 0 ? 0 : 100 - (passed % 100);
    const hundred = passed + daysToHundred;

    if (passed > 0 && daysToHundred === 0) return `<p class="ev-milestone today">${icon("sparkles")} ${passed} 天紀念！</p>`;
    if (years >= 1 && daysToYear === 0) return `<p class="ev-milestone today">${icon("sparkles")} 滿 ${years} 年紀念！</p>`;
    if (years >= 1 && daysToYear <= 10 && daysToYear <= daysToHundred) return `<p class="ev-milestone">再 ${daysToYear} 天就滿 ${years} 年了！</p>`;
    if (daysToHundred <= 10) return `<p class="ev-milestone">再 ${daysToHundred} 天就 ${hundred} 天了！</p>`;
    return "";
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
        let milestoneHtml = "";

        if (ev.type === "since") {
            // 📅 已經過了：上面放名稱，下面放天數
            topText = `<span class="ev-name"></span>`;
            if (days === null) bigText = "? 天";
            else if (days > 0) bigText = "還沒到";
            else bigText = `${-days} 天`;
            if (days !== null && days <= 0) milestoneHtml = milestoneText(ev.date, -days);
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
                ${milestoneHtml}
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
const eventTypeNames = { countdown: icon("clock") + " 倒數", since: icon("calendar") + " 已經過了" };

// ⏳ 倒數管理畫面：每一行有 ↑ ↓ ✏️ 🗑️
function showEventManager() {
    const list = document.getElementById("event-manager");
    list.innerHTML = "";

    // 正在新增的那一張放在最下面（還沒存）
    const rows = eventDraft ? events.concat([eventDraft]) : events;

    rows.forEach(function (ev, index) {
        const isDraft = ev === eventDraft;
        const row = document.createElement("div");
        row.className = "ev-row" + (isDraft ? " ev-draft" : "");
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
                <div class="row">
                    <button type="button" class="btn-small btn-light ev-cancel">取消</button>
                    <button type="button" class="btn-small ev-done">完成</button>
                </div>
            </div>
        `;
        row.querySelector(".ev-row-name").textContent = isDraft ? "＋ 新的卡片" : (ev.name || "（未命名）");
        row.querySelector(".ev-input-name").value = ev.name;
        row.querySelector(".ev-input-date").value = ev.date;
        pixelDate(row.querySelector(".ev-input-date"));

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

        // 完成：存起來、收起（新的那一張到這時候才加進清單）
        row.querySelector(".ev-done").addEventListener("click", function () {
            const date = row.querySelector(".ev-input-date").value;
            if (!date) {
                toast("請選日期喔", "calendar");
                return;
            }
            ev.type = chosenType;
            ev.name = row.querySelector(".ev-input-name").value;
            ev.date = date;
            if (isDraft) {
                events.push(ev);
                eventDraft = null;
            }
            editingEventId = null;
            saveEvents();
            showEvents();
        });

        // 取消：不存，收起（新的那一張直接不要）
        row.querySelector(".ev-cancel").addEventListener("click", function () {
            if (isDraft) eventDraft = null;
            editingEventId = null;
            showEventManager();
        });

        // 🗑️ 刪除
        row.querySelector(".ev-delete").addEventListener("click", async function () {
            if (!(await askConfirm(`確定要刪除「${ev.name || "未命名"}」嗎？`, { danger: true, okText: "刪除" }))) return;
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
// ＋ 新增倒數：先打開一張空白的填寫區，按「完成」才真的新增
document.getElementById("btn-add-event").addEventListener("click", function () {
    eventDraft = { id: Date.now(), type: "countdown", name: "", date: "" };
    editingEventId = eventDraft.id;
    showEventManager();
});

showEvents();

// 首頁「編輯」：打開 / 關閉倒數管理畫面
const eventSheet = document.getElementById("event-sheet");

function closeEventSheet() {
    eventSheet.classList.remove("open");
    editingEventId = null;   // 沒按完成的輸入框也收起來
    eventDraft = null;       // 還沒按完成的新卡片也不要
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
    if (r.status === "待付二補") r.status = "完成";   // 現在到貨就算完成，沒有「待付二補」了
});

// 狀態前面的小圖示
const statusIcons = { "貨到付款": icon("money") + " 貨到付款", "已付款": icon("credit-card") + " 已付款", "已發貨": icon("truck") + " 已發貨", "待付二補": icon("coins") + " 待付二補", "完成": icon("check") + " 完成" };

// ===== 🏷️ 分類 =====

// 分類和它的小圖示
const categoryIcons = { "專輯": icon("album"), "小卡": icon("image"), "周邊": icon("gift"), "門票": px("ticket"), "交通": icon("bus"), "住宿": icon("bed"), "其他": icon("package") };

// 分類在甜甜圈圖上的顏色
const categoryColors = { "專輯": "#a8c8f0", "小卡": "#f7b8c8", "周邊": "#fbe29a", "門票": "#f6b49a", "交通": "#a8dcc8", "住宿": "#c9b8ee", "其他": "#d9cfc7" };   // 馬卡龍色系

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
        toast("還沒輸入金額喔", "coins");
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

    // 把表單的內容做成一張資料卡（編輯的話，沿用原本的編號）
    const record = {
        id: editingRecordId || Date.now(),
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

    if (editingRecordId) {
        // ✏️ 編輯：換掉原本那一筆（二補照舊）
        const index = records.findIndex(function (r) { return r.id === editingRecordId; });
        record.extra = records[index].extra || 0;
        records[index] = record;
    } else {
        records.unshift(record);  // 放到最前面（最新的在最上面）
    }
    saveRecords();            // 存進置物櫃
    showRecords();            // 重新顯示列表
    clearMoneyForm();         // 表單、分類、購物車都清空
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
// mode："all"（全部頁：可以編輯、刪除）或 "pending"（待到貨頁：只能更新到貨進度）
// 記帳卡片的日期寫短一點：今年的只寫 10/12，其他年份寫 2025/10/12
function shortDate(dateText) {
    if (!dateText) return "";
    const [y, m, d] = dateText.split("-");
    const md = Number(m) + "/" + Number(d);
    return Number(y) === new Date().getFullYear() ? md : y + "/" + md;
}

function makeCard(r, mode) {
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

    // 待到貨頁：依照狀態，顯示下一步的按鈕
    let stepsHtml = "";
    if (mode === "pending") {
        if (r.status === "已付款" || r.status === "貨到付款") {
            stepsHtml = `<button class="btn-step" data-act="ship">${icon("truck")} 已發貨</button><button class="btn-step" data-act="arrive">${icon("package")} 到貨了</button>`;
        } else if (r.status === "已發貨") {
            stepsHtml = `<button class="btn-step" data-act="arrive">${icon("package")} 到貨了</button>`;
        }
    }

    // 全部頁：編輯、刪除
    let actionsHtml = "";
    if (mode === "all") {
        actionsHtml = `
            <div class="card-actions">
                <button class="btn-edit-card">${icon("pencil")} 編輯</button>
                <button class="btn-delete">${icon("trash")} 刪除</button>
            </div>`;
    }

    // 小視窗的顏色：用第一個分類的顏色（跟甜甜圈圖一樣）
    const firstCat = r.items ? r.items[0].category : r.category;

    const card = document.createElement("div");
    card.className = "money-card win";
    card.style.setProperty("--c", categoryColors[firstCat] || "var(--win-blue)");
    card.innerHTML = `
        ${winBar(`${cardIcons(r)} ${shortDate(r.date)}`, `<span class="status">${statusIcons[r.status] || r.status}</span>`)}
        <div class="win-body">
            <div class="money-top">
                <strong>${r.item}</strong>
            </div>
            <p class="money-amount">NT$ ${r.amount.toLocaleString()}</p>
            <div class="info-tags">${tagsHtml}</div>
            ${noteHtml}
            ${stepsHtml ? `<div class="steps">${stepsHtml}</div>` : ""}
            ${actionsHtml}
        </div>
    `;

       // 點下一步的按鈕
    card.querySelectorAll(".btn-step").forEach(function (btn) {
        btn.addEventListener("click", function () {
            nextStep(r.id, btn.dataset.act);
        });
    });

    if (mode === "all") {
        // 點刪除按鈕：刪掉這一筆
        card.querySelector(".btn-delete").addEventListener("click", function () {
            deleteRecord(r.id);
        });

        // 點編輯：把這一筆的內容帶回記一筆的畫面
        card.querySelector(".btn-edit-card").addEventListener("click", function () {
            editRecord(r);
        });
    }

    return card;  // 把做好的卡片交出去
}

// 把所有記帳顯示成卡片
function showRecords() {
    moneyList.innerHTML = "";  // 先清空

    records.forEach(function (r) {
        moneyList.appendChild(makeCard(r, "all"));
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

    // 一張一張顯示，順便把還沒到貨的金額加起來
    let pendingTotal = 0;
    pending.forEach(function (r) {
        pendingTotal += r.amount;
        pendingList.appendChild(makeCard(r, "pending"));
    });

    document.getElementById("pending-extra").textContent = pendingTotal.toLocaleString();
    document.getElementById("pending-count").textContent = pending.length;

    // 全部都到貨了
    if (pending.length === 0) {
        pendingList.innerHTML = `<p class="empty">${icon("sparkles")} 全部都到貨了！</p>`;
    }
}

// 打開網頁時，先顯示一次
showRecords();


// 按卡片上的下一步按鈕
async function nextStep(id, act) {
    const record = records.find(function (r) {
        return r.id === id;
    });

    if (act === "ship") {
        record.status = "已發貨";
    } else if (act === "arrive") {
        const answer = await askDialog("到貨了！有二補嗎？\n有的話輸入金額，沒有就直接按「確定」", { title: "到貨了", withInput: true, placeholder: "二補金額（沒有就空白）" });
        if (answer === null) return;  // 按了取消，什麼都不改
        const extra = Number(answer);
        if (extra > 0) record.extra = extra;   // 有二補就記下來（統計會算進去）
        record.status = "完成";                 // 不管有沒有二補，到貨了就完成
    }

    saveRecords();
    showRecords();
}

// 刪除一筆
async function deleteRecord(id) {
    // 先問一下，按「取消」就不刪
    if (!(await askConfirm("確定要刪除這一筆嗎？", { danger: true, okText: "刪除" }))) {
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

// 📊 日期範圍：平常收成一行，點了才展開選日期
const statsRangeBtn = document.getElementById("stats-range-btn");
function updateStatsRange() {
    const from = document.getElementById("stats-from").value;
    const to = document.getElementById("stats-to").value;
    const show = function (d) { return d ? d.replaceAll("-", "/") : "不限"; };
    // 同一年的話，後面那個日期只寫月日，比較短
    const toText = from && to && from.slice(0, 4) === to.slice(0, 4) ? to.slice(5).replace("-", "/") : show(to);
    const open = !document.getElementById("stats-range-panel").hidden;
    statsRangeBtn.innerHTML = `${icon("calendar")} ${show(from)}～${toText} ${open ? "▲" : "▼"}`;
}
statsRangeBtn.addEventListener("click", function () {
    const panel = document.getElementById("stats-range-panel");
    panel.hidden = !panel.hidden;
    if (panel.hidden) closeCalendar();   // 收起來時，日曆也收
    updateStatsRange();
});
document.getElementById("stats-from").addEventListener("input", updateStatsRange);
document.getElementById("stats-to").addEventListener("input", updateStatsRange);

// 改日期時重新計算；按「這個月」跳回本月
document.getElementById("stats-from").addEventListener("input", updateStats);
document.getElementById("stats-to").addEventListener("input", updateStats);
document.getElementById("stats-this-month").addEventListener("click", function () {
    setThisMonth();
    updateStatsRange();
});

// 打開網頁時，預設顯示這個月
setThisMonth();
updateStatsRange();


// ===== 📸 記錄 =====
// 演唱會：票夾（每一場是一張票根，底下可以有好幾筆記錄）
// 心情：一篇一篇的記錄

const diaryForm = document.getElementById("diary-form");
const entrySheet = document.getElementById("entry-sheet");   // 新增 / 編輯一筆的滑出畫面
const diaryList = document.getElementById("diary-list");
const ticketList = document.getElementById("ticket-list");

// 現在在哪個分頁："concert"（演唱會）或 "mood"（心情）
let currentType = "concert";

// 所有記錄、所有場次（打開網頁時會從 localForage 拿出來）
let diaryEntries = [];
let tickets = [];

// 現在展開的是哪一張票根；新增一筆是要加到哪一場（心情就是 null）
let openTicketId = null;
let entryTicketId = null;

// 這一篇準備要放的照片（還沒按「記下來」）
let newPhotos = [];

// ✏️ 現在在編輯哪一筆記錄（新增就是 null）
let editingEntryId = null;

// 小章的選項
const ticketStamps = ["已參加", "即將參加", "線上參加"];

async function saveDiary() {
    await localforage.setItem("diaryEntries", diaryEntries);
    await localforage.setItem("concertTickets", tickets);
}

// ----- 照片 -----

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

// 照片的排法：照片幾張，就用幾張的排法（6 張以上都是一排 3 張）
function photoGridHtml(photos) {
    if (photos.length === 0) return "";
    let html = `<div class="photo-grid photos-${Math.min(photos.length, 6)}">`;
    photos.forEach(function (photo) {
        html += `<img src="${photo}">`;
    });
    return html + `</div>`;
}

// 選好照片時
document.getElementById("d-photos").addEventListener("change", async function (event) {
    const files = Array.from(event.target.files);

    for (const file of files) {
        if (newPhotos.length >= 9) {
            toast("最多 9 張喔！", "image");
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

// 點照片：全螢幕看大圖；可以左右滑、按 ◀ ▶ 看同一篇的其他照片，點旁邊空白關掉
function openViewer(photos, index) {
    const viewer = document.createElement("div");
    viewer.className = "viewer";
    viewer.innerHTML = `
        <img src="">
        <button type="button" class="viewer-btn viewer-prev" aria-label="上一張">${icon("chevron-left")}</button>
        <button type="button" class="viewer-btn viewer-next" aria-label="下一張">${icon("chevron-right")}</button>
        <button type="button" class="viewer-btn viewer-close" aria-label="關閉">${icon("close")}</button>
        <span class="viewer-count"></span>
    `;
    const img = viewer.querySelector("img");

    function show(i) {
        index = (i + photos.length) % photos.length;   // 最後一張再往後，回到第一張
        img.src = photos[index];
        viewer.querySelector(".viewer-count").textContent = photos.length > 1 ? `${index + 1} / ${photos.length}` : "";
        viewer.querySelectorAll(".viewer-prev, .viewer-next").forEach(function (b) {
            b.hidden = photos.length < 2;
        });
    }

    viewer.querySelector(".viewer-prev").addEventListener("click", function () { show(index - 1); });
    viewer.querySelector(".viewer-next").addEventListener("click", function () { show(index + 1); });
    viewer.querySelector(".viewer-close").addEventListener("click", function () { viewer.remove(); });
    viewer.addEventListener("click", function (event) {
        if (event.target === viewer) viewer.remove();   // 點到旁邊黑色的地方才關
    });

    // 手指左右滑
    let startX = null;
    viewer.addEventListener("touchstart", function (event) {
        startX = event.touches[0].clientX;
    });
    viewer.addEventListener("touchend", function (event) {
        if (startX === null) return;
        const dx = event.changedTouches[0].clientX - startX;
        if (dx > 40) show(index - 1);
        if (dx < -40) show(index + 1);
        startX = null;
    });

    show(index);
    document.body.appendChild(viewer);
}

// ----- 新增一筆（演唱會、心情共用同一個表單） -----

// 打開新增一筆（從下面滑出來）；ticketId 是要加到哪一場（心情就是 null）
function openEntryForm(ticketId) {
    entryTicketId = ticketId;
    const dateInput = document.getElementById("d-date");
    if (!dateInput.value) {
        // 演唱會預設用那一場的日期，心情預設今天
        const ticket = tickets.find(function (t) { return t.id === ticketId; });
        dateInput.value = ticket && ticket.date ? ticket.date : formatDate(getToday());
    }
    document.getElementById("d-text").placeholder = ticketId ? "今天的演唱會…" : "今天的心情…";
    entrySheet.style.setProperty("--c", ticketId ? "var(--win-blue)" : "var(--win-pink)");
    entrySheet.classList.add("open");
}

// 關掉：內容清空
function closeEntryForm() {
    entrySheet.classList.remove("open");
    entryTicketId = null;
    editingEntryId = null;
    document.getElementById("diary-form-title").textContent = "新增一筆.exe";
    diaryForm.reset();
    newPhotos = [];
    showPreview();
}

document.getElementById("btn-add-mood").addEventListener("click", function () {
    openEntryForm(null);
});
document.getElementById("diary-form-close").addEventListener("click", closeEntryForm);
document.getElementById("entry-sheet-backdrop").addEventListener("click", closeEntryForm);

// 按「記下來」
diaryForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    if (editingEntryId) {
        // ✏️ 編輯：改原本那一筆
        const entry = diaryEntries.find(function (d) { return d.id === editingEntryId; });
        entry.date = document.getElementById("d-date").value;
        entry.text = document.getElementById("d-text").value;
        entry.photos = newPhotos;
    } else {
        const entry = {
            id: Date.now(),
            type: entryTicketId ? "concert" : "mood",
            ticketId: entryTicketId,
            date: document.getElementById("d-date").value,
            text: document.getElementById("d-text").value,
            photos: newPhotos,
        };
        diaryEntries.unshift(entry);
    }
    await saveDiary();
    closeEntryForm();
    showDiary();
});

// ✏️ 編輯一筆記錄：滑出畫面打開，內容帶回去
function editEntry(d) {
    closeEntryForm();
    openEntryForm(d.type === "concert" ? d.ticketId : null);
    editingEntryId = d.id;
    document.getElementById("diary-form-title").textContent = "編輯一筆.exe";
    document.getElementById("d-date").value = d.date;
    document.getElementById("d-text").value = d.text || "";
    newPhotos = d.photos.slice();   // 複製一份，按「記下來」才算數
    showPreview();
}

// ----- 一筆記錄的小視窗（心情、票根底下都用這個） -----

function makeEntryCard(d, color) {
    let textHtml = "";
    if (d.text) {
        textHtml = `<p class="diary-text"></p>`;
    }

    const card = document.createElement("div");
    card.className = "money-card win";
    card.style.setProperty("--c", color);
    card.innerHTML = `
        ${winBar(`${icon(d.type === "concert" ? "mic" : "message")} ${d.date}`)}
        <div class="win-body">
            ${photoGridHtml(d.photos)}
            ${textHtml}
            <div class="card-actions">
                <button class="btn-edit-card">${icon("pencil")} 編輯</button>
                <button class="btn-delete">${icon("trash")} 刪除</button>
            </div>
        </div>
    `;
    if (d.text) card.querySelector(".diary-text").textContent = d.text;

    // 點照片看大圖（可以左右滑看同一篇的其他照片）
    card.querySelectorAll(".photo-grid img").forEach(function (img, index) {
        img.addEventListener("click", function () {
            openViewer(d.photos, index);
        });
    });

    card.querySelector(".btn-edit-card").addEventListener("click", function () {
        editEntry(d);
    });

    card.querySelector(".btn-delete").addEventListener("click", function () {
        deleteDiary(d.id);
    });
    return card;
}

// ----- 🎫 票夾 -----

// 這一場底下的記錄（照日期、新增順序，舊的在上面）
function ticketEntries(ticket) {
    return diaryEntries
        .filter(function (d) { return d.ticketId === ticket.id; })
        .sort(function (a, b) { return a.date.localeCompare(b.date) || a.id - b.id; });
}

// 封面：自己選的 → 第一筆記錄的第一張照片 → 像素小圖
function ticketCover(ticket) {
    if (ticket.cover) return `<img src="${ticket.cover}">`;
    const withPhoto = ticketEntries(ticket).find(function (d) { return d.photos.length > 0; });
    if (withPhoto) return `<img src="${withPhoto.photos[0]}">`;
    return icon("mic");
}

function showTickets() {
    ticketList.innerHTML = "";

    // 照日期排：最近的在最上面
    tickets.sort(function (a, b) {
        return (b.date || "").localeCompare(a.date || "");
    });
    document.getElementById("ticket-count").textContent = tickets.length + " 場";

    if (tickets.length === 0) {
        ticketList.innerHTML = `<p class="empty">還沒有票根，按「＋ 新增場次」${icon("mic")}</p>`;
    }

    tickets.forEach(function (ticket, index) {
        const entries = ticketEntries(ticket);
        const [y, m, d] = (ticket.date || "----").split("-");
        const color = winColors[index % winColors.length];

        const item = document.createElement("div");
        item.className = "tk-item";
        item.innerHTML = `
            <button type="button" class="tk" style="--c: ${color};">
                <span class="tk-cover">${ticketCover(ticket)}</span>
                <span class="tk-main">
                    <span class="tk-title"></span>
                    <span class="tk-artist"></span>
                    <span class="tk-place"></span>
                    <span class="tk-seat"></span>
                </span>
                <span class="tk-stub">
                    <span class="tk-hole tk-hole-top"></span>
                    <span class="tk-hole tk-hole-bottom"></span>
                    <span class="tk-month">${m ? Number(m) + " 月" : ""}</span>
                    <span class="tk-day">${d ? Number(d) : "?"}</span>
                    <span class="tk-year">${y !== "----" ? y : ""}</span>
                    <span class="tk-stamp">${ticket.stamp || "已參加"}</span>
                    <span class="tk-num">${entries.length} 筆</span>
                </span>
            </button>
            <div class="tk-detail" ${openTicketId === ticket.id ? "" : "hidden"}>
                <div class="row">
                    <button type="button" class="btn-small tk-add">＋ 新增一筆</button>
                    <button type="button" class="btn-small btn-light tk-edit">${icon("pencil")} 編輯場次</button>
                </div>
                <div class="tk-entries"></div>
            </div>
        `;

        // 你打的字用 textContent 放，避免奇怪的符號把畫面弄亂
        item.querySelector(".tk-title").textContent = ticket.title || "演唱會";
        item.querySelector(".tk-artist").textContent = ticket.artist || "";
        // 地點、座位各一行（有填才顯示），前面放像素圖示
        if (ticket.place) item.querySelector(".tk-place").innerHTML = icon("map-pin") + " <span></span>";
        if (ticket.seat) item.querySelector(".tk-seat").innerHTML = icon("label") + " <span></span>";
        if (ticket.place) item.querySelector(".tk-place span").textContent = ticket.place;
        if (ticket.seat) item.querySelector(".tk-seat span").textContent = ticket.seat;

        // 點票根：展開 / 收起
        item.querySelector(".tk").addEventListener("click", function () {
            openTicketId = openTicketId === ticket.id ? null : ticket.id;
            showTickets();
        });

        item.querySelector(".tk-add").addEventListener("click", function () {
            openEntryForm(ticket.id);
        });
        item.querySelector(".tk-edit").addEventListener("click", function () {
            openTicketSheet(ticket);
        });

        // 底下的記錄
        const list = item.querySelector(".tk-entries");
        entries.forEach(function (d) {
            list.appendChild(makeEntryCard(d, color));
        });
        if (entries.length === 0) {
            list.innerHTML = `<p class="empty">這一場還沒有記錄</p>`;
        }

        ticketList.appendChild(item);

});
}

// ----- 🎫 新增 / 編輯場次（從下面滑出來） -----

const ticketSheet = document.getElementById("ticket-sheet");
let editingTicket = null;   // 正在編輯的那一場（新增就是 null）
let ticketCoverPhoto = "";  // 選好的封面
let ticketStamp = "已參加";
let stampTouched = false;   // 有沒有自己點過小章

function showTicketStamps() {
    const box = document.getElementById("t-stamps");
    box.innerHTML = "";
    ticketStamps.forEach(function (name) {
        const chip = document.createElement("button");
        chip.type = "button";
        chip.className = "type-chip" + (name === ticketStamp ? " active" : "");
        chip.textContent = name;
        chip.addEventListener("click", function () {
            ticketStamp = name;
            stampTouched = true;
            showTicketStamps();
        });
        box.appendChild(chip);
    });
}

function showTicketCover() {
    const box = document.getElementById("t-cover-preview");
    box.innerHTML = ticketCoverPhoto ? `<img src="${ticketCoverPhoto}">` : "";
    document.getElementById("t-cover-remove").hidden = !ticketCoverPhoto;
}

function openTicketSheet(ticket) {
    editingTicket = ticket;
    document.getElementById("t-title").value = ticket ? ticket.title : "";
    document.getElementById("t-artist").value = ticket ? ticket.artist || "" : "";
    document.getElementById("t-date").value = ticket ? ticket.date : "";
    document.getElementById("t-place").value = ticket ? ticket.place || "" : "";
    document.getElementById("t-seat").value = ticket ? ticket.seat || "" : "";
    ticketCoverPhoto = ticket ? ticket.cover || "" : "";
    ticketStamp = ticket && ticketStamps.includes(ticket.stamp) ? ticket.stamp : "已參加";   // 以前選「沒搶到」的，改成預設
    stampTouched = Boolean(ticket);
    document.getElementById("t-delete").hidden = !ticket;
    document.getElementById("ticket-sheet-title").textContent = ticket ? "編輯場次" : "新增場次";
    showTicketStamps();
    showTicketCover();
    ticketSheet.classList.add("open");
}

function closeTicketSheet() {
    ticketSheet.classList.remove("open");
}

document.getElementById("btn-add-ticket").addEventListener("click", function () {
    openTicketSheet(null);
});
document.getElementById("ticket-sheet-close").addEventListener("click", closeTicketSheet);
document.getElementById("ticket-sheet-backdrop").addEventListener("click", closeTicketSheet);

// 改日期：還沒自己點過小章的話，未來的日期自動變「即將參加」
document.getElementById("t-date").addEventListener("input", function () {
    if (stampTouched) return;
    ticketStamp = this.value > formatDate(getToday()) ? "即將參加" : "已參加";
    showTicketStamps();
});

// 選封面
document.getElementById("t-cover").addEventListener("change", async function (event) {
    const file = event.target.files[0];
    event.target.value = "";
    if (!file) return;
    const photo = await compressImage(file);
    if (photo) {
        ticketCoverPhoto = photo;
        showTicketCover();
    }
});
document.getElementById("t-cover-remove").addEventListener("click", function () {
    ticketCoverPhoto = "";
    showTicketCover();
});

// 儲存場次
document.getElementById("t-save").addEventListener("click", async function () {
    const data = {
        title: document.getElementById("t-title").value,
        artist: document.getElementById("t-artist").value,
        date: document.getElementById("t-date").value,
        place: document.getElementById("t-place").value,
        seat: document.getElementById("t-seat").value,
        cover: ticketCoverPhoto,
        stamp: ticketStamp,
    };
    if (!data.title) {
        toast("請填演唱會名稱喔", "pencil");
        return;
    }

    if (editingTicket) {
        Object.assign(editingTicket, data);
    } else {
        const ticket = Object.assign({ id: Date.now() }, data);
        tickets.push(ticket);
        openTicketId = ticket.id;   // 新增完直接展開，方便馬上新增記錄
    }
    await saveDiary();
    closeTicketSheet();
    showTickets();
});

// 刪除場次：連同底下的記錄一起刪
document.getElementById("t-delete").addEventListener("click", async function () {
    const ticket = editingTicket;
    const count = ticketEntries(ticket).length;
    if (!(await askConfirm(`確定要刪除「${ticket.title}」嗎？\n底下的 ${count} 筆記錄也會一起刪掉喔！`, { danger: true, okText: "刪除" }))) return;

    if (entryTicketId === ticket.id) closeEntryForm();
    tickets = tickets.filter(function (t) { return t.id !== ticket.id; });
    diaryEntries = diaryEntries.filter(function (d) { return d.ticketId !== ticket.id; });
    await saveDiary();
    closeTicketSheet();
    showTickets();
});

// ----- 💭 心情 -----

function showMoods() {
    diaryList.innerHTML = "";

    // 照日期排：最近的在最上面
    const moods = diaryEntries
        .filter(function (d) { return d.type === "mood"; })
        .sort(function (a, b) { return b.date.localeCompare(a.date); });

    document.getElementById("mood-count").textContent = moods.length + " 篇";

    moods.forEach(function (d) {
        diaryList.appendChild(makeEntryCard(d, "var(--win-pink)"));
    });

    if (moods.length === 0) {
        diaryList.innerHTML = `<p class="empty">還沒有心情記錄，寫下第一篇吧 ${icon("message")}</p>`;
    }
}

// 照現在的分頁，顯示票夾或心情
function showDiary() {
    document.getElementById("concert-view").hidden = currentType !== "concert";
    document.getElementById("mood-view").hidden = currentType !== "mood";
    if (currentType === "concert") showTickets();
    else showMoods();
}

// 點分頁按鈕
document.querySelectorAll("#tabs-diary .sub-tab").forEach(function (tab) {
    tab.addEventListener("click", function () {
        currentType = tab.dataset.type;

        // 所有分頁按鈕先變灰，再讓被點的變亮
        document.querySelectorAll("#tabs-diary .sub-tab").forEach(function (t) {
            t.classList.remove("active");
        });
        tab.classList.add("active");

        closeEntryForm();
        showDiary();
    });
});

// 刪除一筆
async function deleteDiary(id) {
    if (!(await askConfirm("確定要刪除這篇記錄嗎？", { danger: true, okText: "刪除" }))) {
        return;
    }
    diaryEntries = diaryEntries.filter(function (d) {
        return d.id !== id;
    });
    await saveDiary();
    showDiary();
}

// 以前的演唱會記錄（沒有 ticketId）：變成票根＋一筆記錄；同名稱、同日期的放在同一張
function moveOldConcerts() {
    let changed = false;
    diaryEntries.forEach(function (d) {
        if (d.type !== "concert" || d.ticketId) return;
        let ticket = tickets.find(function (t) {
            return t.title === (d.title || "演唱會") && t.date === d.date;
        });
        if (!ticket) {
            ticket = {
                id: Date.now() + tickets.length,
                title: d.title || "演唱會",
                artist: "",
                date: d.date,
                place: d.place || "",
                seat: d.seat || "",
                cover: "",
                stamp: d.date > formatDate(getToday()) ? "即將參加" : "已參加",
            };
            tickets.push(ticket);
        }
        d.ticketId = ticket.id;
        changed = true;
    });
    return changed;
}

// 打開網頁時：從大置物櫃拿出所有記錄和場次
async function loadDiary() {
    diaryEntries = (await localforage.getItem("diaryEntries")) || [];
    tickets = (await localforage.getItem("concertTickets")) || [];
    if (moveOldConcerts()) await saveDiary();
    showDiary();
}

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
        concertTickets: tickets,
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
            toast("這不是 MOA Diary 的備份檔案喔", "close");
            return;
        }

        if (!(await askConfirm(`要匯入 ${backup.exportedAt} 的備份嗎？\n現在的資料會被「整個取代」喔！`, { title: "匯入備份", danger: true, okText: "匯入" }))) {
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
        // 舊的備份沒有票夾：打開時會自動把演唱會記錄變成票根
        await localforage.setItem("concertTickets", backup.concertTickets || []);

        toast("匯入完成！", "check");
        setTimeout(function () { location.reload(); }, 1000);   // 讓提示條顯示一下再重新載入  // 重新載入頁面，顯示匯入的資料
    } catch (error) {
        toast("讀不了這個檔案，確認是 MOA Diary 的備份檔案喔", "close");
    }
});


// ===== 🏗️ 新的版面 =====

// 記帳頁的小分頁：全部 / 待到貨
document.querySelectorAll("#tabs-money .sub-tab").forEach(function (tab) {
    tab.addEventListener("click", function () {
        document.querySelectorAll("#tabs-money .sub-tab").forEach(function (t) {
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
    // 編輯到一半就關掉：不存，表單清空，下次打開是新的一筆
    if (editingRecordId) clearMoneyForm();
}

// ✏️ 現在在編輯哪一筆（新增就是 null）
let editingRecordId = null;

// 清空記一筆的表單
function clearMoneyForm() {
    moneyForm.reset();
    selectCategory("其他");
    resetCart();
    editingRecordId = null;
    document.getElementById("money-sheet-title").textContent = "記一筆 ♡";
    // 編輯時臨時加的狀態選項（例如「待付二補」）拿掉
    document.querySelectorAll("#m-status option[data-temp]").forEach(function (o) { o.remove(); });
    document.getElementById("m-status").dispatchEvent(new Event("change"));
}

// 把一筆記帳帶回記一筆的畫面
function editRecord(r) {
    clearMoneyForm();
    editingRecordId = r.id;
    document.getElementById("money-sheet-title").textContent = "編輯這一筆";

    document.getElementById("m-date").value = r.date;
    document.getElementById("m-agent").value = r.agent || "";
    document.getElementById("m-platform").value = r.platform || "";
    document.getElementById("m-note").value = r.note || "";

    // 下拉選單（已經變成按鈕）：選回原本的
    const shipping = document.getElementById("m-shipping");
    shipping.value = r.shipping || "";
    shipping.dispatchEvent(new Event("change"));
    const status = document.getElementById("m-status");
    if (!Array.from(status.options).some(function (o) { return o.value === r.status; })) {
        // 例如「待付二補」不在選項裡：先臨時加進去
        const option = new Option(r.status, r.status);
        option.dataset.temp = "yes";
        status.add(option);
    }
    status.value = r.status;
    status.dispatchEvent(new Event("change"));

    // 購物車：舊資料沒有 items，就當成一樣台幣的東西
    calcItems = r.items ? r.items.map(function (it) { return Object.assign({}, it); })
        : [{ category: r.category || "其他", name: r.item, amount: r.amount, currency: "TWD", twd: r.amount }];
    selectCategory(calcItems[0].category);
    showCalc();

    addSheet.classList.add("open");
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
        toast("還沒有匯率資料，請連上網路再試", "reload");
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

// 自己畫的黃春（48×48 像素圖，正面）
const huangchunImg = `<img class="hc-img" src="huangchun.png" alt="" aria-hidden="true">`;

// 👗 衣服畫好了：顯示衣服、衣櫃可以開（改成 false 就先藏起來）
const clothesReady = true;

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
    wearing: { hat: "", acc: "", body: "" },
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

// 👗 衣服：分三類，同一類只能穿一件（圖是自己畫的 48×48，整張疊在站著的黃春上面）
const petSlots = { hat: "帽子", acc: "飾品", body: "衣服" };
const petClothes = [
    { id: "wear-1", slot: "hat", name: "水手帽", price: 300 },
    { id: "wear-2", slot: "body", name: "水手服", price: 500 },
    { id: "wear-3", slot: "hat", name: "草莓頭套", price: 600 },
    { id: "wear-4", slot: "hat", name: "麥當勞帽", price: 400 },
    { id: "wear-5", slot: "hat", name: "怪貓頭套", price: 800 },
    { id: "wear-6", slot: "hat", name: "YJ帽", price: 1000 },
];

// 衣服的圖
function wearImg(item) {
    return `<img class="hc-img" src="${item.id}.png" alt="" aria-hidden="true" draggable="false">`;
}

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

// 剛餵食或摸摸之後，心情會「超開心」一陣子（到這個時間為止）
let petHappyUntil = 0;
let petSleeping = false;   // 關燈了：在床上睡覺
let petSinging = false;    // 在電視前面拿麥克風唱歌
let petEating = false;     // 剛吃完：翻肚子躺著

// 黃春的樣子：平常站著、吃飽翻肚、餓扁趴著
const petImgs = {
    normal: "huangchun.png",
    full: "huangchun-full.png",
    hungry: "huangchun-hungry.png",
    hold: "huangchun-hold.png",
    sing: "huangchun-sing.png",
};
Object.values(petImgs).concat(["huangchun-sleep.png"]).forEach(function (src) {
    new Image().src = src;   // 先載好，換樣子時才不會閃
});

// 照現在的狀態換黃春的樣子
function refreshPetLook() {
    const emoji = document.getElementById("pet-emoji");
    let mode = "normal";
    if (petHeld) mode = "hold";
    else if (petEating) mode = "full";
    else if (petSinging) mode = "sing";
    else if (petFull() < 30) mode = "hungry";
    if (emoji.dataset.mode !== mode) {
        emoji.dataset.mode = mode;
        emoji.querySelector("img").src = petImgs[mode];
    }
}

// 更新電子寵物畫面：愛心、金幣、飽足度格子、心情、狀態
function updatePetStatus() {
    const full = petFull();
    document.getElementById("pet-coins").textContent = petCoins().toLocaleString();
    document.getElementById("pet-full-num").textContent = full;

    // ♥ 愛心：每 20 飽足度一顆，共 5 顆
    const hearts = Math.ceil(full / 20);
    let heartHtml = "";
    for (let i = 0; i < 5; i++) {
        heartHtml += i < hearts ? "<span>♥</span>" : `<span class="off">♡</span>`;
    }
    document.getElementById("tama-hearts").innerHTML = heartHtml;

    // 飽足度格子：每 10 一格，共 10 格
    let segHtml = "";
    for (let i = 0; i < 10; i++) {
        segHtml += i < Math.round(full / 10) ? `<i class="on"></i>` : "<i></i>";
    }
    document.getElementById("pet-full-seg").innerHTML = segHtml;

    // 狀態跟著飽足度變；心情：剛被照顧＝超開心，餓了＝委屈
    let status = "吃飽了";
    if (full < 30) status = "好餓喔";
    else if (full < 60) status = "有點餓";
    let mood = "開心 ♡";
    if (Date.now() < petHappyUntil) mood = "超開心 ♡";
    else if (full < 30) mood = "有點委屈";
    if (petSinging) {
        status = "唱歌中";
        mood = "跟然竣一起唱～";
    }
    if (petSleeping) {
        status = "睡覺中";
        mood = "睡得好香～";
    }
    refreshPetLook();

    document.getElementById("tama-status").textContent = status;
    document.getElementById("tama-mood").textContent = mood;
}

// 讓黃春「超開心」30 秒，時間到再更新一次畫面
function petMakeHappy() {
    petHappyUntil = Date.now() + 30 * 1000;
    updatePetStatus();
    setTimeout(updatePetStatus, 30 * 1000 + 100);
}

// 🕘 時間和日期
function updatePetClock() {
    const now = new Date();
    const hour = now.getHours() % 12 || 12;
    const minute = String(now.getMinutes()).padStart(2, "0");
    const ampm = now.getHours() < 12 ? "AM" : "PM";
    const week = "日一二三四五六"[now.getDay()];
    document.getElementById("tama-clock").innerHTML = `${hour}:${minute}<small>${ampm}</small>`;
    document.getElementById("tama-date").textContent = `${now.getMonth() + 1}/${now.getDate()}（${week}）`;
}

// 把正在穿的衣服放到某一只黃春身上（房間的、衣櫃預覽的）
function showWearing(body, wearing) {
    Object.keys(petSlots).forEach(function (slot) {
        const item = petClothes.find(function (c) {
            return c.id === wearing[slot];
        });
        body.querySelector(".wear-" + slot).innerHTML = item ? wearImg(item) : "";
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
let petBusy = false;   // 正在被摸摸、吃東西、被拎著：先不要走
let petHeld = false;   // 正在被手指拎著

// 把黃春放到房間的某個位置（x：離左邊幾 px；y：往上幾 px 是負的），seconds 是走過去要幾秒
function petPlace(x, y, seconds, easing) {
    pet.style.transition = seconds ? `transform ${seconds}s ${easing || "linear"}` : "none";
    pet.style.transform = `translate(${x}px, ${y || 0}px)`;
}

// 停在現在走到的位置（走路走到一半也停住）
function petStop() {
    petX = new DOMMatrix(getComputedStyle(pet).transform).m41;
    petBody.classList.remove("walking");
    petPlace(petX);
}

// 床的左邊（床從房間第 80 格開始，房間寬 128 格）
function petBedEdge() {
    return Math.max(0, petRoom.clientWidth * 80 / 128 - pet.offsetWidth);
}

function petNextMove() {
    // 被摸、睡覺、吃飽翻肚、餓扁趴著：都先不走
    if (petBusy || petSleeping || petEating || petSinging || petFull() < 30) {
        setTimeout(petNextMove, 800);
        return;
    }
    const roomWidth = petRoom.clientWidth;
    if (roomWidth === 0) {
        // 不在黃春的頁面（看不到房間）：先休息，等一下再看
        setTimeout(petNextMove, 1000);
        return;
    }

    // 只在床左邊走（床從房間第 80 格開始，房間寬 128 格），不會走到床上
    const maxX = Math.min(roomWidth - pet.offsetWidth, roomWidth * 80 / 128 - pet.offsetWidth);
    const dice = Math.random();

    if (dice < 0.55) {
        // 🚶 走到隨機的位置
        const targetX = randomBetween(0, maxX);
        const seconds = Math.abs(targetX - petX) / 40;   // 每秒走 40px
        // 黃春是正面的，不用轉身：走路的時候左右搖擺
        petBody.classList.add("walking");
        setTimeout(function () {
            petBody.classList.remove("walking");
        }, seconds * 1000);
        petPlace(targetX, 0, seconds);
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

// 🤚 摸摸：黃春停下來，小手從上面摸摸頭，摸完跳一下、冒愛心、超開心
// （點黃春或按「摸摸」都會摸摸）
// 睡覺的時候不要吵牠
function petIsSleeping() {
    if (!petSleeping) return false;
    toast("噓～黃春在睡覺，開燈再陪牠玩吧", "moon");
    return true;
}

function petPat() {
    if (petIsSleeping() || petBusy) return;
    if (petFull() < 30) return;   // 餓扁了，沒力氣理你
    petBusy = true;
    petStop();

    const hand = document.createElement("span");
    hand.className = "pet-hand";
    hand.innerHTML = px("hand");
    pet.appendChild(hand);

    setTimeout(function () {
        hand.remove();
        petJump();
        petHeart();
        setTimeout(petHeart, 200);
        setTimeout(petHeart, 400);
        petMakeHappy();
        petBusy = false;
    }, 1500);
}
pet.addEventListener("click", function () {
    if (petJustDragged) return;   // 剛剛是在拖，不算點一下
    if (petSinging) {
        petStopSing();   // 唱歌時點一下：放下麥克風
        return;
    }
    petPat();
});
document.getElementById("btn-pat").addEventListener("click", petPat);


// 🧊🐻 會開門的家具：開門、關門（換圖）
const roomFridge = document.getElementById("room-fridge");
const roomWardrobe = document.getElementById("room-wardrobe");
// 開門的圖先載好，換圖的時候才不會晃一下
document.querySelectorAll(".room-door[data-open]").forEach(function (door) {
    new Image().src = door.dataset.open;
});
function setDoor(door, open) {
    // 等新的圖載好，再一起換圖和換寬度（不然舊圖會先被拉寬）
    const src = open ? door.dataset.open : door.dataset.closed;
    const next = new Image();
    let done = false;
    function apply() {
        if (done) return;
        done = true;
        door.classList.toggle("open", open);
        door.querySelector("img").src = src;
    }
    next.onload = apply;
    next.onerror = apply;
    next.src = src;
    if (next.complete) apply();
}

// 💡 燈：點一下關燈（房間變暗），再點一下開燈
const roomLamp = document.getElementById("room-lamp");
roomLamp.addEventListener("click", function () {
    const on = roomLamp.classList.toggle("on");
    roomLamp.querySelector("img").src = on ? "lamp-on.png" : "lamp.png";
    petRoom.classList.toggle("dark", !on);
    if (on) petWakeUp();
    else petGoSleep();
});

// 😴 關燈：黃春先走到床邊，到了才縮成一團睡在床上
let petBedTimer = null;
// 🎤 在電視前面拿麥克風，跟電視裡的然竣一起唱（唱 10 秒自動放下麥克風）
const PET_SING_SECONDS = 10;
let petSingTimer = null;
function petStartSing() {
    petSinging = true;
    document.getElementById("pet-notes").hidden = false;
    updatePetStatus();
    clearTimeout(petSingTimer);
    petSingTimer = setTimeout(petStopSing, PET_SING_SECONDS * 1000);
}

function petStopSing() {
    clearTimeout(petSingTimer);
    if (!petSinging) return;
    petSinging = false;
    document.getElementById("pet-notes").hidden = true;
    updatePetStatus();
    petJump();
}

function petGoSleep() {
    if (petSinging) {
        petSinging = false;
        document.getElementById("pet-notes").hidden = true;
    }
    petSleeping = true;
    updatePetStatus();
    petStop();
    const bedX = petBedEdge();
    const seconds = Math.min(2, Math.abs(bedX - petX) / 120);   // 走快一點，最多 2 秒
    petBody.classList.add("walking");
    petPlace(bedX, 0, seconds);
    petX = bedX;
    clearTimeout(petBedTimer);
    petBedTimer = setTimeout(petIntoBed, seconds * 1000 + 100);
}

// 爬上床：地板上的黃春消失，床上的黃春出現
function petIntoBed() {
    if (!petSleeping) return;
    petBody.classList.remove("walking");
    pet.hidden = true;
    document.getElementById("pet-sleep").hidden = false;
}

// 關燈（不用按燈，例如把黃春拖到床上）
function lampOff() {
    roomLamp.classList.remove("on");
    roomLamp.querySelector("img").src = "lamp.png";
    petRoom.classList.add("dark");
}

// ☀️ 開燈：醒來，出現在床邊跳一下（走到一半就開燈：停下來，不睡了）
function petWakeUp() {
    clearTimeout(petBedTimer);
    petSleeping = false;
    const sleepEl = document.getElementById("pet-sleep");
    if (!sleepEl.hidden) {
        sleepEl.hidden = true;
        pet.hidden = false;
        petX = petBedEdge();
        petPlace(petX);
        petJump();
    } else {
        petStop();
    }
    updatePetStatus();
}
document.getElementById("pet-sleep").addEventListener("click", petIsSleeping);


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
        toast("黃春已經吃飽了", "moon");
        return;
    }
    if (petCoins() < food.price) {
        toast("金幣不夠喔", "coins");
        return;
    }

    // 扣金幣、加飽足度（最多 100）
    petData.spent += food.price;
    petData.full = Math.min(100, full + food.full);
    petData.fullTime = Date.now();
    savePet();
    petMakeHappy();
    foodSheet.classList.remove("open");
    setTimeout(function () {
        setDoor(roomFridge, false);
    }, 2500);

    // 🍽️ 吃東西：食物出現在黃春旁邊，然後大肚子、打嗝、冒愛心
    const bite = document.createElement("span");
    bite.className = "pet-food";
    bite.innerHTML = px(food.icon);
    bite.style.left = petX + pet.offsetWidth / 2 + "px";
    petRoom.appendChild(bite);
    setTimeout(function () {
        bite.remove();
    }, 800);

    // 吃完：馬上停在原地，翻肚子躺著、打嗝，4 秒後站起來（中間都不走）
    petBusy = true;
    petStop();
    setTimeout(function () {
        petEating = true;
        refreshPetLook();
    }, 700);
    setTimeout(function () {
        document.getElementById("pet-say").hidden = false;   // 嗝～
        petHeart();
        setTimeout(petHeart, 200);
        setTimeout(petHeart, 400);
    }, 1500);
    setTimeout(function () {
        document.getElementById("pet-say").hidden = true;
        petEating = false;
        petBusy = false;
        refreshPetLook();
        petJump();
    }, 4700);
}

function openFood() {
    if (petIsSleeping()) return;
    setDoor(roomFridge, true);
    setTimeout(function () {
        showFoodList();
        foodSheet.classList.add("open");
    }, 500);
}
document.getElementById("btn-food").addEventListener("click", openFood);
roomFridge.addEventListener("click", openFood);
function closeFood() {
    foodSheet.classList.remove("open");
    setDoor(roomFridge, false);
}
document.getElementById("food-close").addEventListener("click", closeFood);
document.getElementById("food-backdrop").addEventListener("click", closeFood);


// ----- 👗 衣櫃 -----

const wardrobeSheet = document.getElementById("wardrobe-sheet");
let tryOn = {};             // 試穿中（還沒按儲存）

function showWardrobe() {
    document.getElementById("wardrobe-coins").textContent = petCoins().toLocaleString();
    showWearing(document.getElementById("preview-body"), tryOn);

    // 全部的衣服放在一起（不分頁）；穿另一件同一類的，會換掉原本那件
    const list = document.getElementById("wardrobe-items");
    list.innerHTML = "";
    petClothes.forEach(function (item) {
        const owned = petData.owned.includes(item.id);
        const wearing = tryOn[item.slot] === item.id;

        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "wardrobe-item" + (wearing ? " wearing" : "");
        btn.innerHTML = `
            <span class="wear-mini">${huangchunImg}<span class="wear">${wearImg(item)}</span></span>
            <span>${item.name}</span>
            <small>${wearing ? "穿著中" : owned ? "已擁有" : icon("coins") + " " + item.price}</small>
        `;
        btn.addEventListener("click", async function () {
            if (!owned) {
                // 還沒買：問要不要買
                if (petCoins() < item.price) {
                    toast("金幣不夠喔", "coins");
                    return;
                }
                if (!(await askConfirm(`要花 ${item.price} 金幣買「${item.name}」嗎？`, { title: "衣櫃", okText: "買！" }))) return;
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

function openWardrobe() {
    if (petIsSleeping()) return;
    setDoor(roomWardrobe, true);
    if (!clothesReady) {
        toast("黃春的新衣服還在做喔～", "heart");
        setTimeout(function () {
            setDoor(roomWardrobe, false);
        }, 1800);
        return;
    }
    tryOn = Object.assign({}, petData.wearing);   // 從現在穿的開始試
    showWardrobe();
    setTimeout(function () {
        wardrobeSheet.classList.add("open");
    }, 500);
}
document.getElementById("btn-wardrobe").addEventListener("click", openWardrobe);
roomWardrobe.addEventListener("click", openWardrobe);

// 儲存：試穿的變成真的穿上
document.getElementById("wardrobe-save").addEventListener("click", function () {
    petData.wearing = Object.assign({}, tryOn);
    savePet();
    showWearing(petBody, petData.wearing);
    closeWardrobe();
    petHeart();
});

// 沒按儲存就關掉：試穿的不算
function closeWardrobe() {
    wardrobeSheet.classList.remove("open");
    setDoor(roomWardrobe, false);
}
document.getElementById("wardrobe-close").addEventListener("click", closeWardrobe);
document.getElementById("wardrobe-backdrop").addEventListener("click", closeWardrobe);


// 打開黃春的頁面時，更新金幣和飽足度；之後每分鐘也更新一次
document.querySelector('[data-page="page-pet"]').addEventListener("click", updatePetStatus);
setInterval(updatePetStatus, 60 * 1000);
setInterval(updatePetClock, 10 * 1000);

updatePetStatus();
updatePetClock();
if (clothesReady) showWearing(petBody, petData.wearing);
petNextMove();


// ===== 📺 電視：靜音、一直重播（有些手機要用程式再叫它播一次） =====
const tvVideo = document.getElementById("tv-video");
tvVideo.muted = true;
tvVideo.play().catch(function () {});
document.querySelector('[data-page="page-pet"]').addEventListener("click", function () {
    tvVideo.play().catch(function () {});
});


// ===== ✋ 拖拉黃春 =====
// 按住黃春拖著走 → 變成被拎起來的樣子；放在床上 → 關燈睡覺；放在別的地方 → 掉回地板
let petDrag = null;
let petJustDragged = false;

pet.addEventListener("pointerdown", function (e) {
    e.preventDefault();   // 不要讓瀏覽器自己的「拖圖片」把動作搶走（電腦用滑鼠時會跳出半透明的圖）
    if (petSleeping || petEating || (petBusy && !petHeld)) return;
    petDrag = { id: e.pointerId, x: e.clientX, y: e.clientY, started: false, touch: e.pointerType !== "mouse" };
    pet.setPointerCapture(e.pointerId);
});
pet.addEventListener("dragstart", function (e) {
    e.preventDefault();
});

pet.addEventListener("pointermove", function (e) {
    if (!petDrag || e.pointerId !== petDrag.id) return;
    const room = petRoom.getBoundingClientRect();
    if (!petDrag.started) {
        // 手指移動超過 6px 才算在拖（不然就是點一下＝摸摸）
        if (Math.hypot(e.clientX - petDrag.x, e.clientY - petDrag.y) < 6) return;
        petDrag.started = true;
        if (petSinging) {
            petSinging = false;   // 拖走：放下麥克風
            document.getElementById("pet-notes").hidden = true;
            updatePetStatus();
        }
        petBusy = true;
        petHeld = true;
        petStop();
        pet.classList.add("held");
        refreshPetLook();
    }
    // 滑鼠：捏在黃春的頭上；手指：黃春飄在手指上面一點，才不會被手指擋住
    const w = pet.offsetWidth, h = pet.offsetHeight;
    const floor = room.height * 0.94;   // 平常腳踩的地方（離底部 6%）
    let x = e.clientX - room.left - w / 2;
    let bottom = petDrag.touch ? e.clientY - room.top - 10 : e.clientY - room.top + h * 0.8;
    x = Math.max(0, Math.min(room.width - w, x));
    bottom = Math.max(h * 0.6, Math.min(room.height, bottom));
    petX = x;
    petPlace(x, bottom - floor);
    // 記住黃春頭的位置（放開時用它判斷放在床上還是電視前面）
    petDrag.headX = x + w / 2;
    petDrag.headY = bottom - h * 0.8;
});

function petDrop(e) {
    if (!petDrag || e.pointerId !== petDrag.id) return;
    const dragged = petDrag.started;
    const headX = petDrag.headX, headY = petDrag.headY;
    petDrag = null;
    if (!dragged) return;   // 沒拖：等一下的 click 會變成摸摸

    petJustDragged = true;
    setTimeout(function () {
        petJustDragged = false;
    }, 50);
    petHeld = false;
    pet.classList.remove("held");

    // 黃春的頭在不在床上（床：房間第 80～128 格、第 21～62 排）
    const room = petRoom.getBoundingClientRect();
    const gx = headX / room.width * 128;
    const gy = headY / room.width * 128;   // 格子是正方形：用寬度換算（房間下面多了地板也對得上）
    if (gx >= 82 && gy >= 22 && gy <= 62) {
        // 😴 放在床上：關燈，直接睡
        lampOff();
        petSleeping = true;
        petBusy = false;
        refreshPetLook();
        petX = petBedEdge();
        petPlace(petX);
        petIntoBed();
        updatePetStatus();
        return;
    }

    // 🎤 放在電視前面（電視和地毯那一塊：房間第 46～86 格、第 15 排以下）：站到電視正前方唱歌
    if (gx >= 46 && gx <= 86 && gy >= 15) {
        petX = Math.min(petBedEdge(), Math.max(0, room.width * 67 / 128 - pet.offsetWidth / 2));
        petPlace(petX, 0, 0.25, "ease-in");
        setTimeout(function () {
            petBusy = false;
            petStartSing();
            petJump();
        }, 260);
        return;
    }

    // 放在其他地方：掉回地板，彈一下
    petX = Math.min(petX, petBedEdge());
    refreshPetLook();
    petPlace(petX, 0, 0.25, "ease-in");
    setTimeout(function () {
        petJump();
        petBusy = false;
    }, 260);
}
pet.addEventListener("pointerup", petDrop);
pet.addEventListener("pointercancel", petDrop);


// ===== 👾 把畫面上預留的像素圖位置畫出來 =====
document.querySelectorAll("[data-px]").forEach(function (el) {
    el.innerHTML = px(el.dataset.px);
});
document.querySelectorAll(".px-chick").forEach(function (el) {
    el.innerHTML = huangchunImg;
});



// ===== 💬 App 自己做的提示、確認視窗、下拉選單、日曆 =====
// （手機系統的 alert / confirm / prompt、下拉選單、選日期都會變成 iPhone 的樣子，所以自己做）

// 小提示條：從上面冒出來，2.5 秒後自己消失
function toast(message, iconName) {
    const bar = document.createElement("div");
    bar.className = "toast";
    bar.innerHTML = (iconName ? icon(iconName) + " " : "") + "<span></span>";
    bar.querySelector("span").textContent = message;
    document.body.appendChild(bar);
    setTimeout(function () {
        bar.classList.add("toast-out");
        setTimeout(function () { bar.remove(); }, 300);
    }, 2500);
}

// 復古小視窗：要你決定的事情。回傳 Promise：按確定是 true，按取消是 false
// withInput：要打字的話（例如二補金額），按確定會回傳打的字，取消是 null
function askDialog(message, options) {
    options = options || {};
    return new Promise(function (resolve) {
        const overlay = document.createElement("div");
        overlay.className = "dialog-overlay";
        overlay.innerHTML = `
            <div class="dialog win" style="--c: ${options.danger ? "var(--accent)" : "var(--win-blue)"};">
                <div class="win-bar">
                    <span class="win-dots"><i></i><i></i><i></i></span>
                    <span class="win-tab">${options.title || "提示"}</span>
                </div>
                <div class="win-body">
                    <p class="dialog-text"></p>
                    ${options.withInput ? `<input type="number" inputmode="numeric" class="dialog-input" placeholder="${options.placeholder || ""}">` : ""}
                    <div class="row">
                        <button type="button" class="btn-small btn-light dialog-cancel">${options.cancelText || "取消"}</button>
                        <button type="button" class="btn-small dialog-ok ${options.danger ? "btn-danger" : ""}">${options.okText || "確定"}</button>
                    </div>
                </div>
            </div>
        `;
        overlay.querySelector(".dialog-text").textContent = message;   // 換行會照著顯示
        document.body.appendChild(overlay);

        const input = overlay.querySelector(".dialog-input");
        if (input) input.focus();

        function done(result) {
            overlay.remove();
            resolve(result);
        }
        overlay.querySelector(".dialog-ok").addEventListener("click", function () {
            done(input ? input.value : true);
        });
        overlay.querySelector(".dialog-cancel").addEventListener("click", function () {
            done(input ? null : false);
        });
    });
}

function askConfirm(message, options) {
    return askDialog(message, options);
}

// ----- 下拉選單 → 一排像素按鈕（真正的 select 藏起來，選好就填回去） -----

const chipIcons = { "空運": "cloud", "海運": "ship", "貨到付款": "money", "已付款": "credit-card", "已發貨": "truck", "完成": "check" };

function chipSelect(select) {
    const box = document.createElement("div");
    box.className = "ev-types chip-select";
    select.classList.add("visually-hidden");
    select.after(box);

    function draw() {
        box.innerHTML = "";
        Array.from(select.options).forEach(function (option) {
            const name = option.value || "無";
            const chip = document.createElement("button");
            chip.type = "button";
            chip.className = "type-chip" + (option.value === select.value ? " active" : "");
            chip.innerHTML = (chipIcons[name] ? icon(chipIcons[name]) + " " : "") + name;
            chip.addEventListener("click", function () {
                select.value = option.value;
                select.dispatchEvent(new Event("change"));   // 會自己重畫
            });
            box.appendChild(chip);
        });
    }
    draw();

    // 表單清空、或程式改了選項時，按鈕也跟著重畫
    select.addEventListener("change", draw);
    if (select.form) {
        select.form.addEventListener("reset", function () {
            setTimeout(draw);
        });
    }
}

document.querySelectorAll("#m-shipping, #m-status").forEach(chipSelect);

// ----- 📅 像素日曆（在日期按鈕正下方展開；真正的日期框藏起來，選好就填回去） -----

// 整個 App 共用一個日曆，點哪個日期按鈕，就搬到那個按鈕下面
const calBox = document.createElement("div");
calBox.className = "cal-box";
calBox.innerHTML = `
    <div class="cal-nav">
        <button type="button" class="ev-btn cal-prev" aria-label="往前">${icon("chevron-left")}</button>
        <button type="button" class="cal-title"></button>
        <button type="button" class="ev-btn cal-next" aria-label="往後">${icon("chevron-right")}</button>
    </div>
    <div class="cal-grid"></div>
    <div class="row">
        <button type="button" class="btn-small cal-today">今天</button>
        <button type="button" class="btn-small btn-light cal-clear">清除</button>
    </div>
`;

let calInput = null;     // 現在在選哪一個日期框
let calView = null;      // 現在看的是哪一個月（那個月的 1 號）
let calMode = "day";     // 現在在選什麼："day" 日期、"month" 月份、"year" 年份
let calYearStart = 0;    // 選年份時，第一格是哪一年（一次 12 年）

function drawCalendar() {
    const year = calView.getFullYear();
    const month = calView.getMonth();
    const title = calBox.querySelector(".cal-title");
    const grid = calBox.querySelector(".cal-grid");
    grid.innerHTML = "";
    grid.className = "cal-grid cal-mode-" + calMode;   // 注意：不能叫 cal-day，會跟每一格日期撞名

    if (calMode === "year") {
        // 📅 選年份：一次 12 個
        title.textContent = `${calYearStart}～${calYearStart + 11}`;
        for (let y = calYearStart; y < calYearStart + 12; y++) {
            addCalButton(grid, y, y === year, function () {
                calView = new Date(y, month, 1);
                calMode = "month";
                drawCalendar();
            });
        }
        return;
    }

    if (calMode === "month") {
        // 📅 選月份：1～12 月
        title.textContent = `${year} 年`;
        for (let m = 0; m < 12; m++) {
            addCalButton(grid, (m + 1) + " 月", m === month, function () {
                calView = new Date(year, m, 1);
                calMode = "day";
                drawCalendar();
            });
        }
        return;
    }

    // 📅 選日期
    title.textContent = `${year} 年 ${month + 1} 月`;
    ["日", "一", "二", "三", "四", "五", "六"].forEach(function (w) {
        grid.insertAdjacentHTML("beforeend", `<span class="cal-week">${w}</span>`);
    });

    const firstDay = new Date(year, month, 1).getDay();      // 1 號是星期幾
    const days = new Date(year, month + 1, 0).getDate();      // 這個月有幾天
    for (let i = 0; i < firstDay; i++) {
        grid.insertAdjacentHTML("beforeend", `<span></span>`);
    }

    const today = formatDate(getToday());
    for (let d = 1; d <= days; d++) {
        const value = formatDate(new Date(year, month, d));
        const btn = addCalButton(grid, d, value === calInput.value, function () {
            pickDate(value);
        });
        if (value === today) btn.classList.add("today");
    }
}

// 做一格可以點的按鈕（日期、月份、年份都用這個）
function addCalButton(grid, text, selected, onClick) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "cal-day" + (selected ? " selected" : "");
    btn.textContent = text;
    btn.addEventListener("click", onClick);
    grid.appendChild(btn);
    return btn;
}

// 選好日期：填回原本的日期框，讓原本的程式知道有變動，日曆收起來
function pickDate(value) {
    calInput.value = value;
    calInput.dispatchEvent(new Event("input"));
    calInput.dispatchEvent(new Event("change"));
    closeCalendar();
}

function closeCalendar() {
    calBox.remove();
    calInput = null;
    // 記一筆的鍵盤放回來
    document.querySelectorAll(".sheet-panel.cal-open").forEach(function (panel) {
        panel.classList.remove("cal-open");
    });
}

function openCalendar(input, btn) {
    // 同一個按鈕再按一次：收起來
    if (calInput === input && calBox.isConnected) {
        closeCalendar();
        return;
    }
    calInput = input;
    const base = input.value ? new Date(input.value + "T00:00") : getToday();
    calView = new Date(base.getFullYear(), base.getMonth(), 1);
    calMode = "day";
    btn.after(calBox);
    drawCalendar();

    // 在滑出畫面裡（例如記一筆）：先把下面的鍵盤藏起來，日曆才有空間
    const panel = btn.closest(".sheet-panel");
    if (panel) panel.classList.add("cal-open");
    calBox.scrollIntoView({ block: "nearest" });
}

// 點標題：日期 → 選年份；月份 → 選年份
calBox.querySelector(".cal-title").addEventListener("click", function () {
    if (calMode === "year") return;
    calMode = "year";
    calYearStart = calView.getFullYear() - 5;   // 讓現在這一年在中間附近
    drawCalendar();
});

// ◀ ▶：日期一次一個月、月份一次一年、年份一次 12 年
calBox.querySelector(".cal-prev").addEventListener("click", function () {
    if (calMode === "day") calView = new Date(calView.getFullYear(), calView.getMonth() - 1, 1);
    if (calMode === "month") calView = new Date(calView.getFullYear() - 1, calView.getMonth(), 1);
    if (calMode === "year") calYearStart -= 12;
    drawCalendar();
});
calBox.querySelector(".cal-next").addEventListener("click", function () {
    if (calMode === "day") calView = new Date(calView.getFullYear(), calView.getMonth() + 1, 1);
    if (calMode === "month") calView = new Date(calView.getFullYear() + 1, calView.getMonth(), 1);
    if (calMode === "year") calYearStart += 12;
    drawCalendar();
});
calBox.querySelector(".cal-today").addEventListener("click", function () {
    pickDate(formatDate(getToday()));
});
calBox.querySelector(".cal-clear").addEventListener("click", function () {
    pickDate("");
});

// 把一個日期框換成像素按鈕
function pixelDate(input) {
    if (input.dataset.pixel) return;   // 已經換過了
    input.dataset.pixel = "yes";

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "date-btn";
    input.before(btn);                  // 放在前面：點 label 的字也會打開日曆
    input.classList.add("visually-hidden");
    input.tabIndex = -1;

    function update() {
        btn.innerHTML = icon("calendar") + " " + (input.value ? input.value.replaceAll("-", "/") : "選擇日期");
    }

    // 程式改日期框的值時（例如自動填今天），按鈕上的字也跟著變
    const valueSetter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value");
    Object.defineProperty(input, "value", {
        get: function () { return valueSetter.get.call(this); },
        set: function (v) { valueSetter.set.call(this, v); update(); },
    });
    if (input.form) {
        input.form.addEventListener("reset", function () {
            setTimeout(update);
        });
    }

    btn.addEventListener("click", function () {
        openCalendar(input, btn);
    });
    update();
}

document.querySelectorAll('input[type="date"]').forEach(pixelDate);


// ===== 📶 沒網路也能打開 =====
// sw.js 會把 App 的檔案、字體、圖示存一份在手機裡（有網路時會先抓最新版）
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
}
