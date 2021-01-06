document.getElementById("mytianmao").addEventListener("mouseover", function () {
  document.getElementById("mytianmao_Bd").style.display = "block";
});
document.getElementById("mytianmao").addEventListener("mouseout", function () {
  document.getElementById("mytianmao_Bd").style.display = "none";
}); //隐藏和显示菜单栏的方法
document
  .getElementById("favorite_show")
  .addEventListener("mouseover", function () {
    document.getElementById("favorite_Bd").style.display = "block";
  });
document
  .getElementById("favorite_show")
  .addEventListener("mouseout", function () {
    document.getElementById("favorite_Bd").style.display = "none";
  }); //隐藏和显示菜单栏的方法
document.getElementById("sinput").addEventListener("input", function (Event) {
  this.value = Event.target.value;
  document.getElementById("slabel").style.visibility = "hidden";
}); //获得input输入数据
document.getElementById("sinput").addEventListener("click", function () {
  document.getElementById("slabel").style.opacity = "0.6";
}); //点击输入时label的透明度变化
document.getElementById("sinput").addEventListener("blur", function () {
  if (document.getElementById("sinput").value !== "") {
    document.getElementById("slabel").style.visibility = "hidden";
  } else {
    document.getElementById("slabel").style.visibility = "visible";
    document.getElementById("slabel").style.opacity = "1";
  }
}); //失去焦点时判断label的情况

document
  .getElementById("floatBan_fli")
  .addEventListener("mouseover", function () {
    document.getElementById("floatBan_sli").style.visibility = "visible";
  });
document
  .getElementById("floatBan_fli")
  .addEventListener("mouseout", function () {
    document.getElementById("floatBan_sli").style.visibility = "hidden";
  });
