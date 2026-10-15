/* =========================================================
   共享数据：40 个主题（章戳） + 四个章节
   口径以原站首页为准：40 主题 = 40 枚章，132 词条
   所有页面共用，保证口径一致
========================================================= */
const CHAPTERS = [
  { id:1, num:'I',   cn:'苗乡烟火', en:'Smoke & Rice',   img:'img/xijiang.jpg',
    desc:'从西江出发，先认识苗寨的日常：一顿饭、一场宴、一身盛装。' },
  { id:2, num:'II',  cn:'侗歌侗寨', en:'Song of the Dong', img:'img/drumtower.jpg',
    desc:'鼓楼下听歌，风雨桥上乘凉——侗寨把建筑唱成了音乐。' },
  { id:3, num:'III', cn:'山水贵州', en:'Mountains & Waters', img:'img/huangguoshu.jpg',
    desc:'瀑布、峰林、古城，贵州的山水是最容易开口的话题。' },
  { id:4, num:'IV',  cn:'工坊手艺', en:'Workshop',       img:'img/batik.jpg',
    desc:'亲手画一次蜡、绣一只蝴蝶，手艺的故事从指尖开始。' },
];

const THEMES = [
  /* ---- 第 I 章 · 苗乡烟火 ---- */
  { id:1,  cn:'西江千户苗寨', en:'Xijiang Miao Village',   ch:1, level:1, tag:'景区', img:'img/xijiang.jpg' },
  { id:2,  cn:'苗绣',         en:'Miao Embroidery',        ch:1, level:2, tag:'非遗', img:'img/embroidery.jpg' },
  { id:3,  cn:'苗族蜡染',     en:'Miao Batik',             ch:1, level:1, tag:'非遗', img:'img/batik-cloth.jpg' },
  { id:4,  cn:'银饰',         en:'Miao Silver',            ch:1, level:2, tag:'非遗', img:'img/silver.jpg' },
  { id:5,  cn:'长桌宴',       en:'Long Table Feast',       ch:1, level:1, tag:'民俗', img:'img/longtable.jpg' },
  { id:6,  cn:'酸汤鱼',       en:'Sour Soup Fish',         ch:1, level:1, tag:'小吃', img:'img/soursoup.jpg' },
  { id:7,  cn:'苗年',         en:'Miao New Year',          ch:1, level:2, tag:'民俗', img:'img/miaoyear.jpg' },
  { id:8,  cn:'鼓藏节',       en:'Guzang Festival',        ch:1, level:3, tag:'民俗', img:'img/festival.jpg' },
  { id:9,  cn:'稻花鱼',       en:'Rice-field Fish',        ch:1, level:1, tag:'小吃', img:'img/ricefish.jpg' },
  { id:10, cn:'锦鸡舞',       en:'Gold Pheasant Dance',    ch:1, level:2, tag:'非遗', img:'img/jinji.jpg' },
  /* ---- 第 II 章 · 侗歌侗寨 ---- */
  { id:11, cn:'肇兴侗寨',     en:'Zhaoxing Village',       ch:2, level:1, tag:'景区', img:'img/dongvillage.jpg' },
  { id:12, cn:'侗族鼓楼',     en:'Drum Tower',             ch:2, level:2, tag:'非遗', img:'img/drumtower.jpg' },
  { id:13, cn:'侗族大歌',     en:'Dong Grand Song',        ch:2, level:2, tag:'非遗', img:'img/dongsong.jpg' },
  { id:14, cn:'风雨桥',       en:'Wind-Rain Bridge',       ch:2, level:1, tag:'景区', img:'img/drumtower-night.jpg' },
  { id:15, cn:'蓝染侗布',     en:'Dong Indigo Cloth',      ch:2, level:2, tag:'非遗', img:'img/batik.jpg' },
  { id:16, cn:'打油茶',       en:'Oil Tea',                ch:2, level:1, tag:'小吃', img:'img/youcha.jpg' },
  { id:17, cn:'侗锦',         en:'Dong Brocade',           ch:2, level:2, tag:'非遗', img:'img/dongbrocade.jpg' },
  { id:18, cn:'芦笙',         en:'Lusheng Pipes',          ch:2, level:3, tag:'非遗', img:'img/lusheng.jpg' },
  { id:19, cn:'傩戏面具',     en:'Nuo Opera Mask',         ch:2, level:3, tag:'非遗', img:'img/nuomask.jpg' },
  { id:20, cn:'侗年',         en:'Dong New Year',          ch:2, level:2, tag:'民俗', img:'img/dongyear.jpg' },
  /* ---- 第 III 章 · 山水贵州 ---- */
  { id:21, cn:'黄果树瀑布',   en:'Huangguoshu Falls',      ch:3, level:1, tag:'景区', img:'img/huangguoshu.jpg' },
  { id:22, cn:'荔波小七孔',   en:'Xiaoqikong',             ch:3, level:1, tag:'景区', img:'img/xiaoqikong.jpg' },
  { id:23, cn:'镇远古城',     en:'Zhenyuan Old Town',      ch:3, level:1, tag:'景区', img:'img/zhenyuan.jpg' },
  { id:24, cn:'梵净山',       en:'Fanjingshan',            ch:3, level:2, tag:'景区', img:'img/fanjingshan.jpg' },
  { id:25, cn:'万峰林',       en:'Wanfenglin',             ch:3, level:1, tag:'景区', img:'img/wanfenglin.jpg' },
  { id:26, cn:'乌蒙大草原',   en:'Wumeng Grassland',       ch:3, level:2, tag:'景区', img:'img/wumeng.jpg' },
  { id:27, cn:'加榜梯田',     en:'Jiabang Terraces',       ch:3, level:2, tag:'景区', img:'img/jiabang.jpg' },
  { id:28, cn:'青岩古镇',     en:'Qingyan Old Town',       ch:3, level:1, tag:'景区', img:'img/qingyan.jpg' },
  { id:29, cn:'甲秀楼',       en:'Jiaxiu Tower',           ch:3, level:1, tag:'景区', img:'img/jiaxiu.jpg' },
  { id:30, cn:'威宁草海',     en:'Caohai Lake',            ch:3, level:2, tag:'景区', img:'img/caohai.jpg' },
  /* ---- 第 IV 章 · 工坊与市井 ---- */
  { id:31, cn:'蜡染工坊',     en:'Batik Workshop',         ch:4, level:1, tag:'体验', img:'img/batik.jpg' },
  { id:32, cn:'刺绣工坊',     en:'Embroidery Workshop',    ch:4, level:2, tag:'体验', img:'img/embroidery.jpg' },
  { id:33, cn:'银饰锻造',     en:'Silver Forging',         ch:4, level:2, tag:'体验', img:'img/silver.jpg' },
  { id:34, cn:'苗家米酒',     en:'Rice Wine',              ch:4, level:1, tag:'小吃', img:'img/mijiu.jpg' },
  { id:35, cn:'打糍粑',       en:'Ciba Making',            ch:4, level:1, tag:'体验', img:'img/ciba.jpg' },
  { id:36, cn:'丝娃娃',       en:'Siwawa Wraps',           ch:4, level:1, tag:'小吃', img:'img/siwawa.jpg' },
  { id:37, cn:'肠旺面',       en:'Changwang Noodles',      ch:4, level:1, tag:'小吃', img:'img/changwang.jpg' },
  { id:38, cn:'羊肉粉',       en:'Mutton Rice Noodles',    ch:4, level:1, tag:'小吃', img:'img/yangroufen.jpg' },
  { id:39, cn:'拦门酒',       en:'Gate-Welcoming Wine',    ch:4, level:2, tag:'民俗', img:'img/gatewine.jpg' },
  { id:40, cn:'姊妹节',       en:'Sisters Festival',       ch:4, level:2, tag:'民俗', img:'img/sisters.jpg' },
];

/* 渲染一枚章戳圆形 */
function stampHTML(t, i, earned) {
  const lvl = '<i class="fa-solid fa-star"></i>'.repeat(t.level);
  const bg = t.img ? ` style="background-image:url('${t.img}')"` : '';
  const cls = 'stamp ' + (earned ? 'earned' : '');
  return `<div class="${cls}"${bg} title="${t.en}">
    <span class="stamp-num">${String(i + 1).padStart(2, '0')}</span>
    <span class="stamp-name">${t.cn}${lvl}</span>
  </div>`;
}

/* =========================================================
   共享导航 / 页脚（含双语）
========================================================= */
const I18N_COMMON = {
  zh: {
    'nav.map':'闯关地图', 'nav.passport':'集章护照', 'nav.checkin':'赛季打卡', 'nav.cards':'词卡',
    'nav.story':'一物一故事', 'nav.pattern':'纹样共创', 'nav.report':'成效报告', 'nav.travel':'贵州攻略',
    'nav.signin':'登录',
    'footer.icp':'黔ICP备20007393号-3',
    'footer.copy':'Ⓒ 2026 贵州林果电子商务有限公司 版权所有',
  },
  en: {
    'nav.map':'Quest Map', 'nav.passport':'Passport', 'nav.checkin':'Season', 'nav.cards':'Word Cards',
    'nav.story':'Stories', 'nav.pattern':'Patterns', 'nav.report':'Report', 'nav.travel':'Travel',
    'nav.signin':'Sign in',
    'footer.icp':'黔ICP备20007393号-3',
    'footer.copy':'Ⓒ 2026 Guizhou Lingguo E-Commerce Co., Ltd. All rights reserved',
  }
};

function renderChrome(activeNav) {
  const map = { map:'map.html', passport:'passport.html', checkin:'checkin.html', cards:'cards.html',
                story:'story.html', pattern:'pattern.html', report:'report.html', travel:'travel.html' };
  const labelZh = I18N_COMMON.zh, labelEn = I18N_COMMON.en;
  const links = Object.entries(map).map(([k, href]) =>
    `<a href="${href}" data-i18n="nav.${k}"${activeNav === k ? ' class="active-link"' : ''}>${labelZh['nav.' + k]}</a>`
  ).join('');
  const linksM = Object.entries(map).map(([k, href]) =>
    `<a href="${href}" data-i18n="nav.${k}"${activeNav === k ? ' class="active-link"' : ''}>${labelZh['nav.' + k]}</a>`
  ).join('');
  document.getElementById('site-topbar').innerHTML = `
  <div class="topbar-inner">
    <a href="index.html" class="brand" style="text-decoration:none">
      <span class="brand-en">Rita</span>
      <span class="brand-cn">贵州志</span>
    </a>
    <nav class="topbar-nav">${links}</nav>
    <div class="topbar-actions">
      <div class="lang-toggle">
        <button class="lang-btn" data-lang="zh">中文</button>
        <button class="lang-btn" data-lang="en">EN</button>
      </div>
      <a href="#" class="signin" data-i18n="nav.signin">${labelZh['nav.signin']}</a>
      <button class="nav-burger" aria-label="Menu"><span></span><span></span><span></span></button>
    </div>
  </div>
  <nav class="topbar-menu">${linksM}</nav>`;
  const burger = document.querySelector('.nav-burger');
  const menu = document.querySelector('.topbar-menu');
  if (burger && menu) {
    burger.addEventListener('click', e => {
      e.stopPropagation();
      burger.classList.toggle('open');
      menu.classList.toggle('open');
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      burger.classList.remove('open'); menu.classList.remove('open');
    }));
    document.addEventListener('click', e => {
      if (!menu.contains(e.target) && !burger.contains(e.target)) {
        burger.classList.remove('open'); menu.classList.remove('open');
      }
    });
  }
  document.getElementById('site-footer').innerHTML = `
  <div class="footer-inner">
    <div class="footer-licenses">
      <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener" data-i18n="footer.icp">${labelZh['footer.icp']}</a>
    </div>
    <div class="footer-copy" data-i18n="footer.copy">${labelZh['footer.copy']}</div>
  </div>`;
}

/* 页面级 i18n：页面先定义 PAGE_I18N，再调用 initPage('zh') */
function initPage(extra) {
  const I18N = {
    zh: Object.assign({}, I18N_COMMON.zh, (window.PAGE_I18N && window.PAGE_I18N.zh) || {}),
    en: Object.assign({}, I18N_COMMON.en, (window.PAGE_I18N && window.PAGE_I18N.en) || {}),
  };
  function setLang(lang) {
    if (!I18N[lang]) return;
    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en');
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const v = I18N[lang][el.getAttribute('data-i18n')];
      if (v !== undefined) el.innerHTML = v;
    });
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
    if (window.onLangChange) window.onLangChange(lang);
    try { localStorage.setItem('rita-lang', lang); } catch (e) {}
  }
  document.querySelectorAll('.lang-btn').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));
  let saved = null;
  try { saved = localStorage.getItem('rita-lang'); } catch (e) {}
  setLang(saved && I18N[saved] ? saved : 'zh');
}
