// 找到底部选单的所有按钮
const tabButtons = document.querySelectorAll(".tab-bar button[data-page]");

// 帮每个按钮设定：被点击时要做什么
tabButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        // 1. 看这个按钮要去哪一页
        const pageId = button.dataset.page;

        // 2. 先把所有页面的 active 拿掉（全部隐藏）
        document.querySelectorAll(".page").forEach(function (page) {
            page.classList.remove("active");
        });

        // 3. 也把所有按钮的 active 拿掉（全部变灰）
        tabButtons.forEach(function (b) {
            b.classList.remove("active");
        });

        // 4. 帮要去的那页、被按的按钮加上 active
        document.getElementById(pageId).classList.add("active");
        button.classList.add("active");
    });
});
// ===== 倒数日 =====

// 算两个日期差几天
function daysBetween(from, to) {
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.round((to - from) / oneDay);
}

// 取得「今天」（只要日期，不要几点几分）
function getToday() {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

// ===== ⏳ 倒数 / 📅 已经过了 =====

// 清单：每一张卡片 { id, type, name, date }
//   type "countdown"：倒数到某一天
//   type "since"：从某一天开始，已经过了几天
// 顺序就是首页显示的顺序
let events = JSON.parse(localStorage.getItem("events"));

// 第一次用新版：把以前那一个活动搬进来
if (events === null) {
    events = [];
    const oldDate = localStorage.getItem("eventDate");
    if (oldDate) {
        events.push({ id: Date.now(), name: localStorage.getItem("eventName") || "", date: oldDate });
    }
}

// 以前的「我已经当 MOA」：变成一张普通的「已经过了」卡片（位置不变）
const oldFanStart = localStorage.getItem("fanStart");
let movedMoa = false;
events.forEach(function (ev) {
    if (ev.type === "moa") {
        ev.type = "since";
        ev.id = Date.now();
        ev.name = "我已经当 MOA";
        ev.date = oldFanStart || "";
        movedMoa = true;
    }
});
if (oldFanStart && !movedMoa) {
    events.push({ id: Date.now() + 1, type: "since", name: "我已经当 MOA", date: oldFanStart });
}
localStorage.removeItem("fanStart");  // 搬完了，以后都存在清单里

// 以前的活动没有 type，都是倒数
events.forEach(function (ev) {
    if (!ev.type) ev.type = "countdown";
});
saveEvents();

// 管理画面里，现在打开 ✏️ 的是哪一个
let editingEventId = null;

function saveEvents() {
    localStorage.setItem("events", JSON.stringify(events));
}

// 首页：照顺序显示所有卡片（只显示，不能改）
function showEvents() {
    const list = document.getElementById("event-list");
    list.innerHTML = "";

    if (events.length === 0) {
        list.innerHTML = `<p class="rate-info">还没有卡片，按右上角「编辑」新增 ✨</p>`;
    }

    events.forEach(function (ev) {
        // 离今天还有几天（过了是负数）；没填日期就是 null
        const days = ev.date ? daysBetween(getToday(), new Date(ev.date + "T00:00")) : null;

        let topText = "";
        let bigText = "";

        if (ev.type === "since") {
            // 📅 已经过了：上面放名称，下面放天数
            topText = `<span class="ev-name"></span>`;
            if (days === null) bigText = "? 天";
            else if (days > 0) bigText = "还没到";
            else bigText = `${-days} 天`;
        } else {
            // ⏳ 倒数：还没到 / 今天 / 过期
            topText = `距离 <span class="ev-name"></span> 还有`;
            bigText = `${days === null ? "?" : days} 天`;
            if (days === 0) {
                topText = `<span class="ev-name"></span>`;
                bigText = "就是今天！🎉";
            } else if (days < 0) {
                topText = `<span class="ev-name"></span> 已经过了`;
                bigText = `${-days} 天`;
            }
        }

        const card = document.createElement("div");
        // 只有「倒数」的活动过期了才变灰
        card.className = "count-box" + (ev.type === "countdown" && days !== null && days < 0 ? " past" : "");
        card.innerHTML = `
            <p>${topText}</p>
            <p class="big-number">${bigText}</p>
        `;
        // 名称用 textContent 放，避免奇怪的符号把画面弄乱
        card.querySelector(".ev-name").textContent = ev.name || (ev.type === "since" ? "纪念日" : "活动");
        list.appendChild(card);
    });

    showEventManager();  // 管理画面也一起更新
}

// 类型的文字
const eventTypeNames = { countdown: "⏳ 倒数", since: "📅 已经过了" };

// ⏳ 倒数管理画面：每一行有 ↑ ↓ ✏️ 🗑️
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
                    <div class="ev-row-date">${eventTypeNames[ev.type]}・${ev.date ? ev.date.replaceAll("-", "/") : "未设定"}</div>
                </div>
                <button type="button" class="ev-btn ev-up" ${index === 0 ? "disabled" : ""}>↑</button>
                <button type="button" class="ev-btn ev-down" ${index === events.length - 1 ? "disabled" : ""}>↓</button>
                <button type="button" class="ev-btn ev-edit">✏️</button>
                <button type="button" class="ev-btn ev-delete">🗑️</button>
            </div>
            <div class="edit-fields" ${editingEventId === ev.id ? "" : "hidden"}>
                <div class="ev-types">
                    <button type="button" class="type-chip" data-type="countdown">${eventTypeNames.countdown}</button>
                    <button type="button" class="type-chip" data-type="since">${eventTypeNames.since}</button>
                </div>
                <label>名称
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

        // 类型按钮：选一个，名称的提示也跟着换
        let chosenType = ev.type;
        function chooseType(type) {
            chosenType = type;
            row.querySelectorAll(".type-chip").forEach(function (chip) {
                chip.classList.toggle("active", chip.dataset.type === type);
            });
            row.querySelector(".ev-input-name").placeholder = type === "since" ? "例如：我已经当 MOA" : "例如：TXT 台北演唱会";
        }
        row.querySelectorAll(".type-chip").forEach(function (chip) {
            chip.addEventListener("click", function () {
                chooseType(chip.dataset.type);
            });
        });
        chooseType(ev.type);

        // ↑ ↓：跟上一个 / 下一个交换位置
        row.querySelector(".ev-up").addEventListener("click", function () {
            moveEvent(index, index - 1);
        });
        row.querySelector(".ev-down").addEventListener("click", function () {
            moveEvent(index, index + 1);
        });

        // ✏️：打开 / 收起
        row.querySelector(".ev-edit").addEventListener("click", function () {
            editingEventId = editingEventId === ev.id ? null : ev.id;
            showEventManager();
        });

        // 完成：存起来、收起
        row.querySelector(".ev-done").addEventListener("click", function () {
            ev.type = chosenType;
            ev.name = row.querySelector(".ev-input-name").value;
            ev.date = row.querySelector(".ev-input-date").value;
            editingEventId = null;
            saveEvents();
            showEvents();
        });

        // 🗑️ 删除
        row.querySelector(".ev-delete").addEventListener("click", function () {
            if (!confirm(`确定要删除「${ev.name || "未命名"}」吗？`)) return;
            events.splice(index, 1);
            saveEvents();
            showEvents();
        });

        list.appendChild(row);
    });
}

// 把第 from 个移到第 to 个的位置
function moveEvent(from, to) {
    const ev = events.splice(from, 1)[0];   // 先拿出来
    events.splice(to, 0, ev);               // 再插进新位置
    saveEvents();
    showEvents();
}

// ＋ 新增倒数：加在最下面，直接打开 ✏️
document.getElementById("btn-add-event").addEventListener("click", function () {
    const ev = { id: Date.now(), type: "countdown", name: "", date: "" };
    events.push(ev);
    editingEventId = ev.id;
    saveEvents();
    showEvents();
});

showEvents();

// 首页「编辑」：打开 / 关闭倒数管理画面
const eventSheet = document.getElementById("event-sheet");

function closeEventSheet() {
    eventSheet.classList.remove("open");
    editingEventId = null;   // 没按完成的输入框也收起来
    showEventManager();
}

document.getElementById("btn-home-edit").addEventListener("click", function () {
    eventSheet.classList.add("open");
});
document.getElementById("event-sheet-close").addEventListener("click", closeEventSheet);
document.getElementById("event-sheet-backdrop").addEventListener("click", closeEventSheet);

// ===== 记账 =====

const moneyForm = document.getElementById("money-form");
const moneyList = document.getElementById("money-list");

// 币种对应的符号
const currencySymbols = { TWD: "NT$", KRW: "₩", JPY: "¥", USD: "US$" };

// 从置物柜拿出所有记账（还没有的话，就是一叠空的）
let records = JSON.parse(localStorage.getItem("moneyRecords")) || [];

// 旧的状态名称，换成新的
records.forEach(function (r) {
    if (r.status === "待二补") r.status = "待付二补";
    if (r.status === "已到货") r.status = "完成";
});

// 状态前面的小图示
const statusIcons = { "货到付款": "💰 货到付款", "已付款": "💳 已付款", "已发货": "🚚 已发货", "待付二补": "💸 待付二补", "完成": "✅ 完成" };

// ===== 🏷️ 分类 =====

// 分类和它的小图示
const categoryIcons = { "专辑": "💿", "小卡": "🃏", "周边": "🎀", "门票": "🎫", "交通": "🚄", "住宿": "🏨", "其他": "📦" };

// 分类在甜甜圈图上的颜色
const categoryColors = { "专辑": "#8b7cf6", "小卡": "#f49ac2", "周边": "#fbbf77", "门票": "#6cc5b0", "交通": "#7cb8f0", "住宿": "#f6d36b", "其他": "#c0bcd6" };

// 以前记的账没有分类，就当成「其他」
records.forEach(function (r) {
    if (!r.category) r.category = "其他";
});

// 记一笔面板里的分类按钮：一颗一颗做出来
const catChips = document.getElementById("cat-chips");
Object.keys(categoryIcons).forEach(function (name) {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "cat-chip";
    chip.dataset.cat = name;
    chip.textContent = categoryIcons[name] + " " + name;
    chip.addEventListener("click", function () {
        selectCategory(name);
    });
    catChips.appendChild(chip);
});

// 选一个分类：亮起来，并记在看不到的栏位
function selectCategory(name) {
    document.getElementById("m-category").value = name;
    document.querySelectorAll(".cat-chip").forEach(function (chip) {
        chip.classList.toggle("active", chip.dataset.cat === name);
    });
}

selectCategory("其他");

// 把所有记账存回置物柜
function saveRecords() {
    localStorage.setItem("moneyRecords", JSON.stringify(records));
}

// 按下「记一笔」时
moneyForm.addEventListener("submit", function (event) {
    // 阻止页面重新加载
    event.preventDefault();

    // 这一笔买的每一样：购物车里的 + 还没按加入的那一个
    const items = cartWithPending();

    // 没输入金额就提醒
    if (items.length === 0) {
        alert("还没输入金额喔 💸");
        return;
    }

    // 合计、用到的分类、名称
    let amount = 0;
    const cats = [];
    const names = [];
    items.forEach(function (it) {
        amount += it.twd;
        if (!cats.includes(it.category)) cats.push(it.category);
        const name = it.name || it.category;  // 没填名称就用分类名称
        if (!names.includes(name)) names.push(name);
    });

    // 把表单的内容做成一张资料卡
    const record = {
        id: Date.now(),
        date: document.getElementById("m-date").value,
        item: names.join("、"),
        category: cats[0],   // 旧格式留着：第一个分类
        items: items,        // 每一样东西（有自己的分类和金额）
        amount: amount,
        agent: document.getElementById("m-agent").value,
        platform: document.getElementById("m-platform").value,
        shipping: document.getElementById("m-shipping").value,
                extra: 0,  // 二补等到货了再填
        status: document.getElementById("m-status").value,
        note: document.getElementById("m-note").value,
    };

    records.unshift(record);  // 放到最前面（最新的在最上面）
    saveRecords();            // 存进置物柜
    showRecords();            // 重新显示列表
    moneyForm.reset();        // 清空表单
    selectCategory("其他");   // 分类回到「其他」
    resetCart();              // 购物车计算机也清空
        // 收起滑出来的画面，跳到记账页看刚记的那笔
    closeSheet();
    document.querySelector('[data-page="page-money"]').click();
});


// 这一笔用到的所有分类图示，例如「🃏🎀」
function cardIcons(r) {
    if (!r.items) return categoryIcons[r.category] || "📦";  // 旧资料只有一个分类
    let icons = "";
    r.items.forEach(function (it) {
        const icon = categoryIcons[it.category] || "📦";
        if (!icons.includes(icon)) icons += icon;
    });
    return icons;
}

// 做出一张记账卡片（记账页、待到货页都会用到）
function makeCard(r) {
    // 准备一个空篮子，有填的资料才放进去
    const tags = [];
    tags.push("📅 " + r.date);
    if (r.platform) tags.push("🛍️ " + r.platform);
    if (r.agent) tags.push("🙋 " + r.agent);
    if (r.shipping) tags.push("📦 " + r.shipping);
    if (r.extra) tags.push("➕ 二补 NT$ " + r.extra);

    // 把篮子里的每个资料，变成一颗小标签
    let tagsHtml = "";
    tags.forEach(function (text) {
        tagsHtml += `<span class="info-tag">${text}</span>`;
    });

    // 有写备注才显示
    let noteHtml = "";
    if (r.note) {
        noteHtml = `<p class="money-note">📝 ${r.note}</p>`;
    }

    // 依照状态，显示下一步的按钮
    let stepsHtml = "";
    if (r.status === "已付款" || r.status === "货到付款") {
        stepsHtml = `<button class="btn-step" data-act="ship">🚚 已发货</button><button class="btn-step" data-act="arrive">📦 到货了</button>`;
    } else if (r.status === "已发货") {
        stepsHtml = `<button class="btn-step" data-act="arrive">📦 到货了</button>`;
    } else if (r.status === "待付二补") {
        stepsHtml = `<button class="btn-step" data-act="paid">✓ 已付二补</button>`;
    }

    const card = document.createElement("div");
    card.className = "money-card";
    card.innerHTML = `
        <div class="money-top">
            <strong>${cardIcons(r)} ${r.item}</strong>
            <span class="status">${statusIcons[r.status] || r.status}</span>
        </div>
        <p class="money-amount">NT$ ${r.amount.toLocaleString()}</p>
        <div class="info-tags">${tagsHtml}</div>
        ${noteHtml}
                <div class="steps">${stepsHtml}</div>
        <button class="btn-delete">🗑️ 删除</button>
    `;

       // 点下一步的按钮
    card.querySelectorAll(".btn-step").forEach(function (btn) {
        btn.addEventListener("click", function () {
            nextStep(r.id, btn.dataset.act);
        });
    });

    // 点删除按钮：删掉这一笔
    card.querySelector(".btn-delete").addEventListener("click", function () {
        deleteRecord(r.id);
    });

    return card;  // 把做好的卡片交出去
}

// 把所有记账显示成卡片
function showRecords() {
    moneyList.innerHTML = "";  // 先清空

    records.forEach(function (r) {
        moneyList.appendChild(makeCard(r));
    });

        // 待到货页也一起更新
    showPending();

    // 统计也一起更新
    updateStats();
}

// 待到货页：只显示还没到货的
function showPending() {
    const pendingList = document.getElementById("pending-list");
    pendingList.innerHTML = "";

    // 挑出「状态不是已到货」的
    const pending = records.filter(function (r) {
        return r.status !== "完成";
    });

    // 一张一张显示，顺便把「待二补」的二补金额加起来
    let extraTotal = 0;
    pending.forEach(function (r) {
        if (r.status === "待付二补") extraTotal += r.extra;
        pendingList.appendChild(makeCard(r));
    });

    document.getElementById("pending-extra").textContent = extraTotal.toLocaleString();
    document.getElementById("pending-count").textContent = pending.length;

    // 全部都到货了
    if (pending.length === 0) {
        pendingList.innerHTML = `<p class="empty">🎉 全部都到货了！</p>`;
    }
}

// 打开网页时，先显示一次
showRecords();


// 按卡片上的下一步按钮
function nextStep(id, act) {
    const record = records.find(function (r) {
        return r.id === id;
    });

    if (act === "ship") {
        record.status = "已发货";
    } else if (act === "arrive") {
        const answer = prompt("📦 到货了！有二补吗？\n有的话输入金额，没有就直接按「确定」");
        if (answer === null) return;  // 按了取消，什么都不改
        const extra = Number(answer);
        if (extra > 0) {
            record.extra = extra;
            record.status = "待付二补";
        } else {
            record.status = "完成";
        }
    } else if (act === "paid") {
        record.status = "完成";
    }

    saveRecords();
    showRecords();
}

// 删除一笔
function deleteRecord(id) {
    // 先问一下，按「取消」就不删
    if (!confirm("确定要删除这一笔吗？")) {
        return;
    }

    // 留下「编号不是这个」的，等于把这一笔拿掉
    records = records.filter(function (r) {
        return r.id !== id;
    });

    saveRecords();
    showRecords();
}


// ===== 📊 统计 =====

// 把日期变成「2026-10-14」这种格式
function formatDate(d) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
}

// 设定成「这个月」：1 号到月底
function setThisMonth() {
    const today = getToday();
    const first = new Date(today.getFullYear(), today.getMonth(), 1);
    const last = new Date(today.getFullYear(), today.getMonth() + 1, 0);

    document.getElementById("stats-from").value = formatDate(first);
    document.getElementById("stats-to").value = formatDate(last);
    updateStats();
}

// 计算这段日期花了多少
function updateStats() {
    const from = document.getElementById("stats-from").value;
    const to = document.getElementById("stats-to").value;

    // 挑出日期在范围里的
    const inRange = records.filter(function (r) {
        if (from && r.date < from) return false;  // 比开始日还早
        if (to && r.date > to) return false;      // 比结束日还晚
        return true;
    });

    // 加总商品金额和二补
    let amountTotal = 0;
    let extraTotal = 0;
    inRange.forEach(function (r) {
        amountTotal += r.amount;
        extraTotal += r.extra;
    });

    document.getElementById("stats-count").textContent = inRange.length;
    document.getElementById("stats-total").textContent = (amountTotal + extraTotal).toLocaleString();
    document.getElementById("stats-extra").textContent = extraTotal.toLocaleString();
    document.getElementById("stats-extra-line").style.display = extraTotal ? "" : "none";  // 没有二补就不显示

    // 每个分类各花了多少：新资料照每一样的金额，旧资料整笔算进它的分类
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

    // 🍩 甜甜圈图：每个分类占一段角度（0% ~ 100%）
    const parts = [];
    let catHtml = "";
    let start = 0;
    Object.keys(categoryIcons).forEach(function (name) {
        if (!catTotals[name]) return;
        const percent = catTotals[name] / amountTotal * 100;
        const color = categoryColors[name];
        parts.push(`${color} ${start}% ${start + percent}%`);
        start += percent;

        // 下面的分类清单
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
        donut.style.background = "#e6e1ff";  // 没有资料：灰色空圈
    }
    document.getElementById("stats-cats").innerHTML = catHtml;
}

// 改日期时重新计算；按「这个月」跳回本月
document.getElementById("stats-from").addEventListener("input", updateStats);
document.getElementById("stats-to").addEventListener("input", updateStats);
document.getElementById("stats-this-month").addEventListener("click", setThisMonth);

// 打开网页时，默认显示这个月
setThisMonth();


// ===== 📸 记录 =====

const diaryForm = document.getElementById("diary-form");
const diaryList = document.getElementById("diary-list");

// 现在在哪个分页："concert"（演唱会）或 "mood"（心情）
let currentType = "concert";

// 所有记录（打开网页时会从 localForage 拿出来）
let diaryEntries = [];

// 这一篇准备要放的照片（还没按「记下来」）
let newPhotos = [];

// 照着现在的分页，调整表单
function updateDiaryFields() {
    const concertFields = document.getElementById("concert-fields");
    const textBox = document.getElementById("d-text");

    if (currentType === "concert") {
        concertFields.style.display = "block";
        textBox.placeholder = "今天的演唱会…";
    } else {
        concertFields.style.display = "none";
        textBox.placeholder = "今天的心情…";
    }
}

// 点分页按钮
document.querySelectorAll("#page-diary .sub-tab").forEach(function (tab) {
    tab.addEventListener("click", function () {
        currentType = tab.dataset.type;

        // 所有分页按钮先变灰，再让被点的变亮
        document.querySelectorAll("#page-diary .sub-tab").forEach(function (t) {
            t.classList.remove("active");
        });
        tab.classList.add("active");

        updateDiaryFields();
        showDiary();
    });
});

// 把照片缩小、压缩，变成一串文字（才能存进置物柜）
function compressImage(file) {
    return new Promise(function (resolve) {
        const img = new Image();

        img.onload = function () {
            // 最长边缩到 1000 像素（本来就比较小的不放大）
            const scale = Math.min(1, 1000 / Math.max(img.width, img.height));
            const canvas = document.createElement("canvas");
            canvas.width = img.width * scale;
            canvas.height = img.height * scale;
            canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);

            URL.revokeObjectURL(img.src);
            resolve(canvas.toDataURL("image/jpeg", 0.8));
        };

        // 读不了的格式（例如电脑上的 HEIC），就跳过
        img.onerror = function () {
            resolve(null);
        };

        img.src = URL.createObjectURL(file);
    });
}

// 选好照片时
document.getElementById("d-photos").addEventListener("change", async function (event) {
    const files = Array.from(event.target.files);

    for (const file of files) {
        if (newPhotos.length >= 9) {
            alert("最多 9 张喔！");
            break;
        }
        const photo = await compressImage(file);
        if (photo) newPhotos.push(photo);
    }

    event.target.value = "";  // 清掉，下次再选才会有反应
    showPreview();
});

// 显示还没存的照片（可以按 ✕ 拿掉）
function showPreview() {
    const preview = document.getElementById("photo-preview");
    preview.innerHTML = "";

    newPhotos.forEach(function (photo, index) {
        const item = document.createElement("div");
        item.className = "preview-item";
        item.innerHTML = `
            <img src="${photo}">
            <button type="button">✕</button>
        `;
        item.querySelector("button").addEventListener("click", function () {
            newPhotos.splice(index, 1);
            showPreview();
        });
        preview.appendChild(item);
    });
}

// 点照片：全屏幕看大图，再点一下关掉
function openViewer(src) {
    const viewer = document.createElement("div");
    viewer.className = "viewer";
    viewer.innerHTML = `<img src="${src}">`;
    viewer.addEventListener("click", function () {
        viewer.remove();
    });
    document.body.appendChild(viewer);
}

// 按「记下来」
diaryForm.addEventListener("submit", async function (event) {
    event.preventDefault();


    const entry = {
        id: Date.now(),
        type: currentType,  // 在哪个分页写的，就是哪一种
        date: document.getElementById("d-date").value,
        title: document.getElementById("d-title").value,
        place: document.getElementById("d-place").value,
        seat: document.getElementById("d-seat").value,
        text: document.getElementById("d-text").value,
        photos: newPhotos,
    };

    diaryEntries.unshift(entry);
    await localforage.setItem("diaryEntries", diaryEntries);  // 存进大置物柜

    showDiary();
    diaryForm.reset();

    // 照片预览也清空
    newPhotos = [];
    showPreview();
});

// 显示现在这个分页的记录
function showDiary() {
    diaryList.innerHTML = "";

    // 照日期排：最近的在最上面
    diaryEntries.sort(function (a, b) {
        return b.date.localeCompare(a.date);
    });

    // 只挑出现在这个分页的
    const shown = diaryEntries.filter(function (d) {
        return d.type === currentType;
    });

    shown.forEach(function (d) {
        // 标题：演唱会显示名称，心情就显示「心情」
        let titleText = "💭 心情";
        if (d.type === "concert") {
            titleText = "🎤 " + (d.title || "演唱会");
        }

        // 小标签：有填才放
        const tags = [];
        tags.push("📅 " + d.date);
        if (d.place) tags.push("📍 " + d.place);
        if (d.seat) tags.push("💺 " + d.seat);

        let tagsHtml = "";
        tags.forEach(function (text) {
            tagsHtml += `<span class="info-tag">${text}</span>`;
        });

        // 内文：有写才显示
        let textHtml = "";
        if (d.text) {
            textHtml = `<p class="diary-text">${d.text}</p>`;
        }

        // 照片：有才显示
        let photosHtml = "";
        if (d.photos.length > 0) {
            photosHtml = `<div class="photo-grid">`;
            d.photos.forEach(function (photo) {
                photosHtml += `<img src="${photo}">`;
            });
            photosHtml += `</div>`;
        }

        const card = document.createElement("div");
        card.className = "money-card";
        card.innerHTML = `
            <strong>${titleText}</strong>
            <div class="info-tags">${tagsHtml}</div>
            ${photosHtml}
            ${textHtml}
            <button class="btn-delete">🗑️ 删除</button>
        `;

        // 点照片看大图
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

    // 这个分页还没有记录
    if (shown.length === 0) {
        if (currentType === "concert") {
            diaryList.innerHTML = `<p class="empty">还没有演唱会记录，记下第一场吧 🎤</p>`;
        } else {
            diaryList.innerHTML = `<p class="empty">还没有心情记录，写下第一篇吧 💭</p>`;
        }
    }
}

// 删除一篇
async function deleteDiary(id) {
    if (!confirm("确定要删除这篇记录吗？")) {
        return;
    }
    diaryEntries = diaryEntries.filter(function (d) {
        return d.id !== id;
    });
    await localforage.setItem("diaryEntries", diaryEntries);
    showDiary();
}

// 打开网页时：从大置物柜拿出所有记录
async function loadDiary() {
    diaryEntries = (await localforage.getItem("diaryEntries")) || [];
    showDiary();
}

updateDiaryFields();
loadDiary();


// ===== 💾 备份 =====

// 导出：把所有资料打包成一个文件下载
document.getElementById("btn-export").addEventListener("click", function () {
    const backup = {
        app: "MOA Diary",
        exportedAt: formatDate(getToday()),
        events: events,
        moneyRecords: records,
        diaryEntries: diaryEntries,
    };

    // 变成文字，再包成一个文件
    const text = JSON.stringify(backup);
    const file = new Blob([text], { type: "application/json" });

    // 做一个隐形的下载链接，帮你按下去
    const link = document.createElement("a");
    link.href = URL.createObjectURL(file);
    link.download = `MOA-Diary-备份-${backup.exportedAt}.json`;
    link.click();
});

// 按「导入备份」：打开选文件的框
document.getElementById("btn-import").addEventListener("click", function () {
    document.getElementById("import-file").click();
});

// 选好备份文件后
document.getElementById("import-file").addEventListener("change", async function (event) {
    const file = event.target.files[0];
    event.target.value = "";  // 清掉，下次选同一个文件也有反应
    if (!file) return;

    try {
        const backup = JSON.parse(await file.text());

        // 确认是不是我们的备份文件
        if (backup.app !== "MOA Diary") {
            alert("这不是 MOA Diary 的备份文件喔 🤔");
            return;
        }

        if (!confirm(`要导入 ${backup.exportedAt} 的备份吗？\n现在的资料会被「整个取代」喔！`)) {
            return;
        }

        // 放回各自的置物柜
        // 旧的备份只有一个活动：变成清单
        let backupEvents = backup.events;
        if (!backupEvents) {
            backupEvents = backup.eventDate ? [{ id: Date.now(), name: backup.eventName || "", date: backup.eventDate }] : [];
        }
        localStorage.setItem("events", JSON.stringify(backupEvents));
        // 旧的备份有 fanStart：打开时会自动变成「我已经当 MOA」卡片
        if (backup.fanStart) localStorage.setItem("fanStart", backup.fanStart);
        else localStorage.removeItem("fanStart");
        localStorage.setItem("moneyRecords", JSON.stringify(backup.moneyRecords));
        await localforage.setItem("diaryEntries", backup.diaryEntries);

        alert("导入完成！🎉");
        location.reload();  // 重新加载页面，显示导入的资料
    } catch (error) {
        alert("读不了这个文件，确认是 MOA Diary 的备份文件喔 🤔");
    }
});


// ===== 🏗️ 新的版面 =====

// 记账页的小分页：全部 / 待到货
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

// ➕ 记一笔：打开 / 关闭滑出来的画面
const addSheet = document.getElementById("add-sheet");

function openSheet() {
    // 日期还没填的话，自动填今天
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


// ===== 🛒 购物车计算机（数字键盘） =====

// 现在正在打的数字，例如 "650"
let keypadText = "";

// 现在选的币种
let calcCurrency = "TWD";

// 购物车：按「＋加入」放进来的每一样东西
let calcItems = [];

const calcName = document.getElementById("calc-name");
const calcList = document.getElementById("calc-list");

// 汇率表：1 台币可以换多少外币（先拿出上次存的）
let rates = JSON.parse(localStorage.getItem("rates")) || {};
let ratesTime = localStorage.getItem("ratesTime") || "";

// 把外币换成台币（四舍五入到整数）
function toTWD(amount, currency) {
    if (currency === "TWD") return amount;  // 本来就是台币
    if (!rates[currency]) return null;      // 还没有汇率资料
    return Math.round(amount / rates[currency]);
}

// 币种按钮：NT$ ₩ ¥ US$
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

// 算出合计：购物车里的 + 正在打、还没按加入的那一个
function keypadTotal() {
    let total = 0;
    calcItems.forEach(function (item) {
        total += item.twd;
    });
    const now = toTWD(Number(keypadText), calcCurrency);
    if (now) total += now;
    return total;
}

// 更新显示，也把合计放进看不到的金额栏位
function updateKeypad() {
    const total = keypadTotal();
    document.getElementById("amount-text").textContent = total.toLocaleString();
    document.getElementById("m-amount").value = total;
    document.getElementById("amount-label").textContent = calcItems.length > 0 ? "合计 " : "";

    // 上面的小字：正在打的数字换算成台币，或显示汇率
    const expr = document.getElementById("amount-expr");
    const symbol = currencySymbols[calcCurrency];
    const amount = Number(keypadText);

    if (calcCurrency !== "TWD" && !rates[calcCurrency]) {
        expr.textContent = "还没有汇率资料，请连上网络";
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

// 显示购物车清单
function showCalc() {
    calcList.innerHTML = "";

    calcItems.forEach(function (item, index) {
        // 价格文字：外币的话，后面加上「≈ NT$」
        let priceText = `${currencySymbols[item.currency]} ${item.amount.toLocaleString()}`;
        if (item.currency !== "TWD") {
            priceText += ` ≈ NT$ ${item.twd.toLocaleString()}`;
        }

        const row = document.createElement("div");
        row.className = "calc-item";
        row.innerHTML = `
            <span>${categoryIcons[item.category] || "📦"} ${item.name || item.category}</span>
            <span>${priceText}</span>
            <button type="button" class="calc-remove">✕</button>
        `;

        // 按 ✕：从购物车拿掉这一样
        row.querySelector(".calc-remove").addEventListener("click", function () {
            calcItems.splice(index, 1);
            showCalc();
        });

        calcList.appendChild(row);
    });

    updateKeypad();
}

// 按「＋加入」：把正在打的数字放进购物车
function addToCart() {
    const amount = Number(keypadText);
    if (!amount) return;  // 没打数字就不加

    const twd = toTWD(amount, calcCurrency);
    if (twd === null) {
        alert("还没有汇率资料，请连上网络再试");
        return;
    }

    calcItems.push({
        category: document.getElementById("m-category").value,
        name: calcName.value,
        amount: amount,
        currency: calcCurrency,
        twd: twd,
    });

    // 清空，准备打下一样
    keypadText = "";
    calcName.value = "";
    showCalc();
}

// 记完一笔后：全部清空，币种回到台币
function resetCart() {
    keypadText = "";
    calcItems = [];
    calcName.value = "";
    showCalc();
    selectCurrency("TWD");
}

// 购物车 + 还没按加入的那一个（有打数字的话）
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

// 按键盘上的按键
document.querySelectorAll(".keypad button[data-key]").forEach(function (btn) {
    btn.addEventListener("click", function () {
        const key = btn.dataset.key;

        if (key === "back") {
            keypadText = keypadText.slice(0, -1);   // 删掉最后一个字
        } else if (key === "clear") {
            resetCart();                            // 全部清掉
            return;
        } else if (key === "add") {
            addToCart();
            return;
        } else if (keypadText.length < 9) {
            keypadText += key;                      // 数字接在后面
            if (keypadText === "0" || keypadText === "00") keypadText = "";  // 开头不要 0
        }

        updateKeypad();
    });
});

// 从网络抓最新汇率
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

        // 存进置物柜，下次没网络也能用
        localStorage.setItem("rates", JSON.stringify(rates));
        localStorage.setItem("ratesTime", ratesTime);
    } catch (error) {
        // 抓不到（例如没网络），就继续用上次存的
    }
    updateKeypad();
}

// 打开网页时：先用旧的汇率显示，再去抓新的
selectCurrency("TWD");
loadRates();
