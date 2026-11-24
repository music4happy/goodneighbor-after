/* 착한이웃교회 「주일 이후」 공통 설정 · 모든 페이지가 이 파일을 함께 씁니다 */
(function () {
  var SITE = {
    youtube: 'https://www.youtube.com/@goodpeople-church',   // 착한이웃TV
    instagram: 'https://www.instagram.com/good_people_church/',
    kakao: ''                                                // 목사님 카카오톡 채널(1:1 채팅) 또는 오픈채팅 주소. 넣으면 '카톡으로 목사님께 보내기'가 바로 그 채팅으로 연결됩니다.                                            // 예: 'https://www.instagram.com/아이디/'  (비우면 버튼이 숨겨집니다)
  };
  window.GN_SITE = SITE;

  var css = '.social{display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin:14px 0 6px}' +
    '.sns{display:inline-flex;align-items:center;gap:7px;min-height:42px;padding:8px 16px;border-radius:999px;font-family:inherit;font-size:.92em;font-weight:700;text-decoration:none;color:#fff;line-height:1}' +
    '.sns svg{width:18px;height:18px;flex:none}.sns.yt{background:#FF0033}.sns.ig{background:linear-gradient(45deg,#F58529,#DD2A7B 55%,#8134AF)}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  var ICON_YT = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#fff" d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8z"/><path fill="#FF0033" d="M9.7 15.1V8.9l5.4 3.1z"/></svg>';
  var ICON_IG = '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="#fff" stroke="none"/></svg>';

  function build() {
    document.querySelectorAll('[data-social]').forEach(function (el) {
      var html = '<a class="sns yt" href="' + SITE.youtube + '" target="_blank" rel="noopener">' + ICON_YT + '착한이웃TV</a>';
      if (SITE.instagram) html += '<a class="sns ig" href="' + SITE.instagram + '" target="_blank" rel="noopener">' + ICON_IG + '인스타그램</a>';
      el.className = (el.className ? el.className + ' ' : '') + 'social';
      el.innerHTML = html;
    });
    document.querySelectorAll('[data-youtube]').forEach(function (a) { a.href = SITE.youtube; });
    document.querySelectorAll('[data-instagram]').forEach(function (a) { if (SITE.instagram) { a.href = SITE.instagram; } else { a.style.display = 'none'; } });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build); else build();

  /* 앱(홈 화면 설치)용 */
  if ('serviceWorker' in navigator) { window.addEventListener('load', function () { navigator.serviceWorker.register('sw.js').catch(function () {}); }); }

  /* 어디서든 착한이웃교회 홈으로 */
  if (!document.querySelector('.gn-home') && /\d{4}\.html$/.test(location.pathname)) {
  var hs = document.createElement('style');
  hs.textContent = '.gn-home{position:fixed;top:calc(10px + env(safe-area-inset-top));right:12px;z-index:60;display:inline-flex;align-items:center;gap:6px;min-height:40px;padding:6px 14px 6px 10px;border-radius:999px;background:rgba(28,23,49,.92);color:#fff;text-decoration:none;font:700 14px/1 "Noto Sans KR",sans-serif;box-shadow:0 4px 14px rgba(0,0,0,.25);border:1px solid rgba(226,185,92,.6)}.gn-home svg{width:20px;height:20px}.nav-in{padding-right:96px!important}';
  document.head.appendChild(hs);
  var hb = document.createElement('a'); hb.className = 'gn-home'; hb.href = '/'; hb.setAttribute('aria-label', '착한이웃교회 홈으로');
  hb.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="#E2B95C" stroke-width="2.2" stroke-linejoin="round"><path d="M3 11 12 3l9 8v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></svg>홈';
  document.body.appendChild(hb);
  }
})();
