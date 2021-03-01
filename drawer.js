const drawer = {
  defaultSetting: {
    position: "right", //位置 支持 左，右
    width: "500px", // 宽度
    transparency: 0.8, // 蒙版透明度
  },
  /**
   *  @params html 渲染在抽屉中的内容
   *  @params option 设置项
   **/
  open: function (html, option) {
    if (option) {
      var { position, width, transparency } = option;
    } else {
      var position, width, transparency;
    }
    position ? "" : (position = this.defaultSetting.position);
    width ? "" : (width = this.defaultSetting.width);
    transparency ? "" : (transparency = this.defaultSetting.transparency);
    var $$drawer = document.createElement("DIV");
    $$drawer.innerHTML = html;
    var $$container = document.createElement("DIV");
    $$container.style.id = "drawerContainer";
    $$container.style.background = "rgba(66, 66, 66, " + transparency + ")";
    $$container.style.position = "fixed";
    $$container.style.width = "100vw";
    $$container.style.height = "100vh";
    $$container.style.top = "0";
    $$container.style.left = "0";
    $$drawer.style.top = 0;
    $$drawer.style.background = "#ffffff";
    $$drawer.style.position = "fixed";
    $$drawer.style.height = "100vh";
    $$drawer.style.boxShadow = "-2px 0 8px rgb(0 0 0 / 15%)";
    $$drawer.style.padding = "24px";
    $($$drawer).animate({ width: width }, 400);
    if (position === "right") {
      $$drawer.style.right = 0;
    } else {
      $$drawer.style.left = 0;
    }
    $$container.append($$drawer);
    $$container.onclick = () => {
      $($$drawer).animate({ width: 0 }, 300, () => {
        $$container.remove();
      });
    };
    $$drawer.onclick = (e) => {
      e.stopPropagation();
    };
    document.body.appendChild($$container);
  },
};
