// 监听暗色、亮色切换Start
let lightMedia = window.matchMedia('(prefers-color-scheme: light)');
let darkMedia = window.matchMedia('(prefers-color-scheme: dark)');
let callback = (e) => {
  let prefersDarkMode = e.matches;
  if (prefersDarkMode) {
    checkNightMode();
  }
};
if (typeof darkMedia.addEventListener === 'function' || typeof lightMedia.addEventListener === 'function') {
  lightMedia.addEventListener('change', callback);
  darkMedia.addEventListener('change', callback);
}
// 监听暗色、亮色切换End
// 切换暗亮模式Start
function switchNightMode() {
  var Mode =localStorage.getItem("DarkMode"); //获取暗色标示
  if (Mode == null || Mode == "undefined" || Mode == "") {
    if ($("html").attr("data-user-color-scheme")=="undefined") {
      $("html").attr("data-user-color-scheme","light");
      localStorage.setItem("DarkMode","light");
      $('#nightMode').removeClass("icon-yueliang").addClass("icon-zhishifufeiqiapianicon-");
    } else {
      $("html").attr("data-user-color-scheme","dark");
      localStorage.setItem("DarkMode","dark");
      $('#nightMode').removeClass("icon-zhishifufeiqiapianicon-").addClass("icon-yueliang");
    }
  } else if (Mode == 'light') {
    $("html").attr("data-user-color-scheme","dark");
    localStorage.setItem("DarkMode","dark");
    $('#nightMode').removeClass("icon-zhishifufeiqiapianicon-").addClass("icon-yueliang");
  } else {
    $("html").attr("data-user-color-scheme","light");
    localStorage.setItem("DarkMode","light");
    $('#nightMode').removeClass("icon-yueliang").addClass("icon-zhishifufeiqiapianicon-");
  }
  // (DarkMode == '0') ? ($("body").addClass("night"), document.cookie = "DarkMode=1;path=/" + ";expires=" + cookiesExp.toGMTString(), $('#nightMode').removeClass(
  // 	"icon-yueliang").addClass("icon-zhishifufeiqiapianicon-")) : ($("body").removeClass(
  // 	"night"), document.cookie = "DarkMode=0;path=/" + ";expires=" + cookiesExp.toGMTString(), $('#nightMode').removeClass("icon-zhishifufeiqiapianicon-").addClass(
  // 	"icon-yueliang"));
}

// 切换暗亮模式End

//检查当前主题模式和图标是否对应Start
function checkNightMode() {
  var Mode =localStorage.getItem("DarkMode"); //获取暗色标示
  if (Mode == 'dark') {
    $("html").attr("data-user-color-scheme","dark");
    $('#nightMode').removeClass("icon-zhishifufeiqiapianicon-").addClass("icon-yueliang");
  } else if (Mode == null || Mode == "undefined" || Mode == "") {
    // 第一次检查是否用暗色模式
    if (localStorage.getItem('theme') === 'dark') {
      // document.cookie = "DarkMode=1;path=/"+";expires=" + cookiesExp.toGMTString();
      $("html").attr("data-user-color-scheme","dark");
    } else if (matchMedia('(prefers-color-scheme: dark)').matches) {
      // document.cookie = "DarkMode=1;path=/"+";expires=" + cookiesExp.toGMTString();
      $("html").attr("data-user-color-scheme","dark");
    } else if (matchMedia('(prefers-color-scheme: light)').matches) {
      // document.cookie = "DarkMode=1;path=/"+";expires=" + cookiesExp.toGMTString();
      $("html").attr("data-user-color-scheme","light");
    } else if (new Date().getHours() >= 21 || new Date().getHours() < 7) {
      // document.cookie = "DarkMode=1;path=/"+";expires=" + cookiesExp.toGMTString();
      $("html").attr("data-user-color-scheme","dark");
    }
  }
  else {
    $("html").attr("data-user-color-scheme","light");
  }

}

//检查当前主题模式和图标是否对应End
checkNightMode();
