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

// 找到三个输入框
const eventNameInput = document.getElementById("event-name");
const eventDateInput = document.getElementById("event-date");
const fanStartInput = document.getElementById("fan-start");

// 重新计算并显示天数
function updateCountdown() {
    // 活动名称：没填就显示「演唱会」
    document.getElementById("event-name-text").textContent = eventNameInput.value || "演唱会";

    // 有填活动日期，才计算倒数
    if (eventDateInput.value) {
        const eventDate = new Date(eventDateInput.value + "T00:00");
        document.getElementById("countdown-days").textContent = daysBetween(getToday(), eventDate);
    }

    // 有填开始追星的日子，才计算天数
    if (fanStartInput.value) {
        const startDate = new Date(fanStartInput.value + "T00:00");
        document.getElementById("fan-days").textContent = daysBetween(startDate, getToday());
    }

    // 每次有变动，就存起来
    saveCountdown();
}

// 输入框一有变动，就重新计算
eventNameInput.addEventListener("input", updateCountdown);
eventDateInput.addEventListener("input", updateCountdown);
fanStartInput.addEventListener("input", updateCountdown);

// 把三个输入框的内容存进置物柜
function saveCountdown() {
    localStorage.setItem("eventName", eventNameInput.value);
    localStorage.setItem("eventDate", eventDateInput.value);
    localStorage.setItem("fanStart", fanStartInput.value);
}

// 打开网页时：从置物柜拿出来，放回输入框
eventNameInput.value = localStorage.getItem("eventName") || "";
eventDateInput.value = localStorage.getItem("eventDate") || "";
fanStartInput.value = localStorage.getItem("fanStart") || "";

// 拿回来之后，马上算一次天数
updateCountdown();

// ===== 记账 =====

const moneyForm = document.getElementById("money-form");
const moneyList = document.getElementById("money-list");

// 币种对应的符号
const currencySymbols = { TWD: "NT$", KRW: "₩", JPY: "¥", USD: "US$" };

// 从置物柜拿出所有记账（还没有的话，就是一叠空的）
let records = JSON.parse(localStorage.getItem("moneyRecords")) || [];

// 把所有记账存回置物柜
function saveRecords() {
    localStorage.setItem("moneyRecords", JSON.stringify(records));
}

// 按下「记一笔」时
moneyForm.addEventListener("submit", function (event) {
    // 阻止页面重新加载
    event.preventDefault();

    // 把表单的内容做成一张资料卡
    const record = {
        id: Date.now(),
        date: document.getElementById("m-date").value,
        item: document.getElementById("m-item").value,
        member: document.getElementById("m-member").value,
        amount: Number(document.getElementById("m-amount").value),
        agent: document.getElementById("m-agent").value,
        platform: document.getElementById("m-platform").value,
        shipping: document.getElementById("m-shipping").value,
        extra: Number(document.getElementById("m-extra").value),
        status: document.getElementById("m-status").value,
        note: document.getElementById("m-note").value,
    };

    records.unshift(record);  // 放到最前面（最新的在最上面）
    saveRecords();            // 存进置物柜
    showRecords();            // 重新显示列表
    moneyForm.reset();        // 清空表单

    // 计算小工具也清空、收起来
    calcItems = [];
    showCalc();
    document.querySelector(".calc").open = false;
        // 收起滑出来的画面，跳到记账页看刚记的那笔
    closeSheet();
    document.querySelector('[data-page="page-money"]').click();
});


// 做出一张记账卡片（记账页、待到货页都会用到）
function makeCard(r) {
    // 准备一个空篮子，有填的资料才放进去
    const tags = [];
    tags.push("📅 " + r.date);
    if (r.member) tags.push("💜 " + r.member);
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

    const card = document.createElement("div");
    card.className = "money-card";
    card.innerHTML = `
        <div class="money-top">
            <strong>${r.item}</strong>
            <span class="status">${r.status}</span>
        </div>
        <p class="money-amount">NT$ ${r.amount.toLocaleString()}</p>
        <div class="info-tags">${tagsHtml}</div>
        ${noteHtml}
        <button class="btn-delete">🗑️ 删除</button>
    `;

    // 点状态标签：换到下一个状态
    card.querySelector(".status").addEventListener("click", function () {
        changeStatus(r.id);
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
        return r.status !== "已到货";
    });

    // 一张一张显示，顺便把「待二补」的二补金额加起来
    let extraTotal = 0;
    pending.forEach(function (r) {
        if (r.status === "待二补") extraTotal += r.extra;
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


// 状态的顺序
const statusList = ["已付款", "待二补", "已发货", "已到货"];

// 换到下一个状态
function changeStatus(id) {
    // 用编号找到那一笔
    const record = records.find(function (r) {
        return r.id === id;
    });

    // 看现在是第几个状态，换成下一个
    let next = statusList.indexOf(record.status) + 1;
    if (next >= statusList.length) {
        next = 0;  // 已经是最后一个，就回到第一个
    }
    record.status = statusList[next];

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


// ===== 🧮 计算小工具 =====

const calcName = document.getElementById("calc-name");
const calcAmount = document.getElementById("calc-amount");
const calcCurrency = document.getElementById("calc-currency");
const calcList = document.getElementById("calc-list");

// 购物车：加进来的每一样东西
let calcItems = [];

// 汇率表：1 台币可以换多少外币（先拿出上次存的）
let rates = JSON.parse(localStorage.getItem("rates")) || {};
let ratesTime = localStorage.getItem("ratesTime") || "";

// 把外币换成台币
function toTWD(amount, currency) {
  if (currency === "TWD") return amount;  // 本来就是台币
  if (!rates[currency]) return null;      // 还没有汇率资料
  return amount / rates[currency];
}

// 显示目前选的币种的汇率
function updateRateInfo() {
  const currency = calcCurrency.value;
  const info = document.getElementById("rate-info");

  if (currency === "TWD") {
    info.textContent = "";  // 台币不用显示汇率
  } else if (rates[currency]) {
    const oneToTWD = (1 / rates[currency]).toFixed(4);
    info.textContent = `${currencySymbols[currency]}1 ≈ NT$ ${oneToTWD}（${ratesTime} 更新）`;
  } else {
    info.textContent = "还没有汇率资料，请连上网络";
  }
}

// 按「＋ 加入」
document.getElementById("calc-add").addEventListener("click", function () {
  const amount = Number(calcAmount.value);
  if (!amount) return;  // 没填金额就不加

  const twd = toTWD(amount, calcCurrency.value);
  if (twd === null) {
    alert("还没有汇率资料，请连上网络再试");
    return;
  }

  // 放进购物车
  calcItems.push({
    name: calcName.value,
    amount: amount,
    currency: calcCurrency.value,
    twd: Math.round(twd),
  });

  // 清空输入框，准备加下一样
  calcName.value = "";
  calcAmount.value = "";
  showCalc();
});

// 显示购物车里的东西 + 合计
function showCalc() {
  calcList.innerHTML = "";
  let total = 0;

  calcItems.forEach(function (item, index) {
    total += item.twd;

    // 价格文字：外币的话，后面加上「≈ NT$」
    let priceText = `${currencySymbols[item.currency]} ${item.amount.toLocaleString()}`;
    if (item.currency !== "TWD") {
      priceText += ` ≈ NT$ ${item.twd.toLocaleString()}`;
    }

    const row = document.createElement("div");
    row.className = "calc-item";
    row.innerHTML = `
      <span>${item.name || "（未命名）"}</span>
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

  document.getElementById("calc-total").textContent = total.toLocaleString();
}

// 按「填入金额」：把合计和名称填进记账表单
document.getElementById("calc-fill").addEventListener("click", function () {
  if (calcItems.length === 0) return;  // 购物车是空的就不做

  let total = 0;
  const names = [];
  calcItems.forEach(function (item) {
    total += item.twd;
    if (item.name) names.push(item.name);
  });

  document.getElementById("m-amount").value = total;
  if (names.length > 0) {
    document.getElementById("m-item").value = names.join("、");
  }
});

// 按「清空」
document.getElementById("calc-clear").addEventListener("click", function () {
  calcItems = [];
  showCalc();
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
  updateRateInfo();
}

// 换币种时，更新汇率小字
calcCurrency.addEventListener("input", updateRateInfo);

// 打开网页时：先用旧的汇率显示，再去抓新的
updateRateInfo();
loadRates();


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
    document.getElementById("stats-amount").textContent = amountTotal.toLocaleString();
    document.getElementById("stats-extra").textContent = extraTotal.toLocaleString();
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
        eventName: localStorage.getItem("eventName") || "",
        eventDate: localStorage.getItem("eventDate") || "",
        fanStart: localStorage.getItem("fanStart") || "",
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
        localStorage.setItem("eventName", backup.eventName);
        localStorage.setItem("eventDate", backup.eventDate);
        localStorage.setItem("fanStart", backup.fanStart);
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

