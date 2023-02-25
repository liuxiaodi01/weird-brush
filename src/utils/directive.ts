// 水波纹类
class Ripple {
  el: HTMLElement;
  rippleColor: string;
  animationListener: any;
  mouseDownListener: any;
  constructor(config: any) {
    this.el = config.el;
    this.rippleColor = config.color || "rgba(0, 0, 0, .35)";
  }

  // 创建水波纹动画节点并插入
  createRieEl() {
    let el = document.createElement("span");
    el.classList.add("ani_ripple");
    // 添加动画监听
    this.animationListener = this.onAnimationEnd.bind(this);
    el.addEventListener("animationend", this.animationListener);
    this.el.appendChild(el);
    return el;
  }

  // 初始化水波纹动画
  init() {
    // 添加点击事件监听
    this.mouseDownListener = this.onMouseDown.bind(this);
    // 增加鼠标按下事件
    this.el.addEventListener("mousedown", this.mouseDownListener);
  }

  // 点击事件
  onMouseDown(e: any) {
    let riEl: any = this.getRieEl();
    if (riEl) {
      // 删除旧节点为了频繁点击动画刷新
      this.el.removeChild(riEl);
    }
    riEl = this.createRieEl();
    // 取宽和高较大的值作为水波纹大小
    const max = Math.max(this.el.clientWidth, this.el.clientHeight);
    const style = {
      left: e.offsetX - max / 2 + "px",
      top: e.offsetY - max / 2 + "px",
      width: max + "px",
      height: max + "px",
      position: "absolute",
      transform: "scale(0)",
      pointerEvents: "none",
      borderRadius: "100%",
      backgroundColor: this.rippleColor,
      animation: "ripple 1s ease-out",
    };
    Object.assign(riEl.style, style);
  }

  // 查找是否已经有了水波纹动画节点
  getRieEl() {
    if (this.el.children.length === 0) return null;
    for (const i in this.el.children) {
      if (this.el.children[i].className?.includes("ani_ripple")) {
        return this.el.children[i];
      }
    }
    return null;
  }

  // 清除水波纹动画及其节点
  clearRie() {
    let riEl = this.getRieEl();
    if (riEl) {
      this.el.removeEventListener("mousedown", this.mouseDownListener);
      riEl.removeEventListener("animationend", this.animationListener);
      this.el.removeChild(riEl);
    }
  }

  // 动画结束事件--暂时可以不用，也可以添加判断：结束之前不可重复动画
  onAnimationEnd() {}
}
import type { Directive, DirectiveBinding } from "vue";
interface elType extends HTMLElement {
  _clearRipple: Function;
}
// ------指令用法，在页面中导入文件，直接const vRipple = ripple即可
// 按钮水波纹效果指令
export const ripple: Directive = {
  mounted(el: elType, binding: DirectiveBinding) {
    let options = new Ripple({ el });
    options.init();
    // 绑定水波纹清除事件
    el._clearRipple = options.clearRie.bind(options);
  },
  beforeUnmount(el, binding, vnode, prevVnode) {
    el._clearRipple();
  },
};

// 防抖指令v-debounce
// 节流指令v-throttle
// 拖拽指令v-draggable
