import { mergeProps, useSSRContext, ref, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, createTextVNode, isRef } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { Link } from "@inertiajs/inertia-vue3";
import { defineStore } from "pinia";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$8 = {
  name: "MapMarkerOutlineIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": !$props.title,
    "aria-label": $props.title,
    class: "material-design-icon map-marker-outline-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5M12,2A7,7 0 0,1 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M12,4A5,5 0 0,0 7,9C7,10 7,12 12,18.71C17,12 17,10 17,9A5,5 0 0,0 12,4Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/MapMarkerOutline.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const MapMarkerOutlineIcon = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$7 = {
  name: "MenuDownIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": !$props.title,
    "aria-label": $props.title,
    class: "material-design-icon menu-down-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M7,10L12,15L17,10H7Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/MenuDown.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const MenuDownIcon = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$6 = {
  name: "MagnifyIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": !$props.title,
    "aria-label": $props.title,
    class: "material-design-icon magnify-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/Magnify.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const MagnifyIcon = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$5 = {
  name: "CartMinusIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": !$props.title,
    "aria-label": $props.title,
    class: "material-design-icon cart-minus-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M16 6V4H8V6M7 18C5.9 18 5 18.9 5 20S5.9 22 7 22 9 21.1 9 20 8.1 18 7 18M17 18C15.9 18 15 18.9 15 20S15.9 22 17 22 19 21.1 19 20 18.1 18 17 18M7.2 14.8V14.7L8.1 13H15.5C16.2 13 16.9 12.6 17.2 12L21.1 5L19.4 4L15.5 11H8.5L4.3 2H1V4H3L6.6 11.6L5.2 14C5.1 14.3 5 14.6 5 15C5 16.1 5.9 17 7 17H19V15H7.4C7.3 15 7.2 14.9 7.2 14.8Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/CartMinus.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const CartMinusIcon = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$4 = {
  name: "MenuIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": !$props.title,
    "aria-label": $props.title,
    class: "material-design-icon menu-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/Menu.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const MenuIcon = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$3 = {
  name: "AccountCircleIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/AccountCircle.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  name: "CloseIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": !$props.title,
    "aria-label": $props.title,
    class: "material-design-icon close-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/Close.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const CloseIcon = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {
  name: "ChevronRightIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": !$props.title,
    "aria-label": $props.title,
    class: "material-design-icon chevron-right-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/ChevronRight.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ChevronRightIcon = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const useCartStore = defineStore("cart", {
  state: () => ({ cart: [] }),
  actions: {
    removeProductFromCart(prodId) {
      this.cart.forEach((product, index) => {
        if (product.id === prodId)
          this.cart.splice(index, 1);
      });
    }
  },
  persist: true
});
const _sfc_main = {
  __name: "AuthenticatedLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const cartStore = useCartStore();
    let showMenu = ref(false);
    let accountAndList = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="min-w-[1150px] bg-gray-100 h-full">`);
      if (unref(accountAndList)) {
        _push(`<div class="top-0 z-20 fixed w-full h-full bg-black bg-opacity-70"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex items-center bg-gray-900 h-[60px] py-2 fixed z-50 min-w-[1150px] w-full"><div class="flex">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("dashboard"),
        class: "text-white h-[50px] p-2 pt-3 border-[1px] border-gray-900 rounded-sm hover:border-[1px] hover:border-gray-100 cursor-pointer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img width="100" src="/images/logo/AMAZON_LOGO.png"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                width: "100",
                src: "/images/logo/AMAZON_LOGO.png"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="text-white h-[50px] p-2 border-[1px] border-gray-900 rounded-sm hover:border-[1px] hover:border-gray-100 cursor-pointer">`);
      if (_ctx.$page.props.auth.user) {
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("address.index")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center justify-center"${_scopeId}>`);
              _push2(ssrRenderComponent(MapMarkerOutlineIcon, {
                class: "pt-2 -ml-1",
                fillColor: "#f5f5f5"
              }, null, _parent2, _scopeId));
              _push2(`<div${_scopeId}><div class="text-[13px] text-gray-300 font-extrabold"${_scopeId}><div${_scopeId}>Delivery to ${ssrInterpolate(_ctx.$page.props.auth.user.first_name)}</div></div>`);
              if (_ctx.$page.props.auth.address) {
                _push2(`<div class="text-[15px] text-white -mt-1.5 font-extrabold"${_scopeId}><div${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.address.city)} ${ssrInterpolate(_ctx.$page.props.auth.address.postcode)}</div></div>`);
              } else {
                _push2(`<div class="text-[15px] text-white -mt-1.5 font-extrabold"${_scopeId}><div${_scopeId}>Add address</div></div>`);
              }
              _push2(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center justify-center" }, [
                  createVNode(MapMarkerOutlineIcon, {
                    class: "pt-2 -ml-1",
                    fillColor: "#f5f5f5"
                  }),
                  createVNode("div", null, [
                    createVNode("div", { class: "text-[13px] text-gray-300 font-extrabold" }, [
                      createVNode("div", null, "Delivery to " + toDisplayString(_ctx.$page.props.auth.user.first_name), 1)
                    ]),
                    _ctx.$page.props.auth.address ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "text-[15px] text-white -mt-1.5 font-extrabold"
                    }, [
                      createVNode("div", null, toDisplayString(_ctx.$page.props.auth.address.city) + " " + toDisplayString(_ctx.$page.props.auth.address.postcode), 1)
                    ])) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "text-[15px] text-white -mt-1.5 font-extrabold"
                    }, [
                      createVNode("div", null, "Add address")
                    ]))
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<div class="flex items-center justify-center">`);
        _push(ssrRenderComponent(MapMarkerOutlineIcon, {
          class: "pt-2 -ml-1",
          fillColor: "#f5f5f5"
        }, null, _parent));
        _push(`<div><div class="text-[13px] text-gray-300 font-extrabold"><div>Hello</div><div class="text-[15px] text-white -mt-1.5 font-extrabold">Select your address</div></div></div></div>`);
      }
      _push(`</div><div class="flex grow items-center h-[45px] px-1"><div class="flex items-center justify-center bg-gray-100 border-r border-r-gray-300 font-extrabold text-[11px] text-gray-600 w-[60px] h-[40px] rounded-l-md cursor-pointer"><div class="pt-[3px]"> All </div>`);
      _push(ssrRenderComponent(MenuDownIcon, {
        fillColor: "#5E5E5E",
        size: 20,
        class: "-mr-2"
      }, null, _parent));
      _push(`</div><input class="block w-full border-none border-transparent focus:border-transparent focus:ring-0" type="text"><div class="cursor-pointer bg-orange-300 p-[5px] px-2 rounded-r-md">`);
      _push(ssrRenderComponent(MagnifyIcon, { size: 30 }, null, _parent));
      _push(`</div></div><div class="flex"><div class="h-[50px] p-2 border-[1px] border-gray-900 rounded-sm hover:border-[1px] hover:border-gray-100 cursor-pointer"><div class="flex items-center justify-center mt-2.5 px-1"><img class="mb-3 mr-1" width="23" src="/images/flags/US.png" alt=""><div class="text-[15px] text-white -mt-2 -mr-0.5 font-extrabold">EN</div>`);
      _push(ssrRenderComponent(MenuDownIcon, {
        fillColor: "#c2c2c2",
        size: 20,
        class: "-mr-4 -mt-1.5 pr-1"
      }, null, _parent));
      _push(`</div></div><div class="h-[50px] p-2 border-[1px] border-gray-900 rounded-sm hover:border-[1px] hover:border-gray-100 cursor-pointer"><div class="flex items-center justify-center"><div><div class="text-[12px] text-white font-extrabold"> Hello, `);
      if (_ctx.$page.props.auth.user) {
        _push(`<span>${ssrInterpolate(_ctx.$page.props.auth.user.first_name)}</span>`);
      } else {
        _push(`<span>sign in</span>`);
      }
      _push(`</div><div class="flex items-center"><div class="text-[15px] text-white -mt-1.5 font-extrabold">Account &amp; List</div>`);
      _push(ssrRenderComponent(MenuDownIcon, {
        fillColor: "#c2c2c2",
        size: 20,
        class: "-mr-4 -mt-1 pr-1"
      }, null, _parent));
      _push(`</div></div></div>`);
      if (unref(accountAndList)) {
        _push(`<div class="bg-white absolute z-50 top-[56px] -ml-[230px] w-[480px] rounded-sm px-6">`);
        if (_ctx.$page.props.auth.user) {
          _push(`<div><div class="flex items-center justify-between py-2.5 border-b"><div class="text-smp-2">Who&#39;s shopping? Select a profile.</div><div class="flex items-center text-sm font-bold text-teal-600 hover:text-red-600 hover:underline"> Manage profile `);
          _push(ssrRenderComponent(ChevronRightIcon, {
            size: 20,
            fillColor: "#808080"
          }, null, _parent));
          _push(`</div></div><div class="flex"><div class="w-1/2 border-r"><div class="pb-3"><div class="font-extrabold pt-3">Your List</div><div class="text-sm hover:text-red-600 hover:underline pt-3">Create a list</div></div></div><div class="w-1/2 ml-5"><div class="pb-3"><div class="font-extrabold pt-3">Your Account</div>`);
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("profile.edit"),
            class: "text-sm block hover:text-red-600 hover:underline pt-3"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Account `);
              } else {
                return [
                  createTextVNode(" Account ")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("logout"),
            method: "post",
            as: "button",
            class: "text-sm block hover:text-red-600 hover:underline pt-3"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Sign Out `);
              } else {
                return [
                  createTextVNode(" Sign Out ")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div></div></div></div>`);
        } else {
          _push(`<div class="p-4 text-center"><div class="p-4 text-center"></div>`);
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("login"),
            class: "text-center items-center px-20 py-1.5 bg-[#fcba1f] border border-gray-600 rounded-sm text-sm font-extrabold text-black"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Sign in `);
              } else {
                return [
                  createTextVNode(" Sign in ")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`<div class="text-sm pt-4"> New customer? `);
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("register"),
            class: "text-blue-700 hover:text-red-700"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Start here. `);
              } else {
                return [
                  createTextVNode(" Start here. ")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div></div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="h-[50px] p-2 border-[1px] border-gray-900 rounded-sm hover:border-[1px] hover:border-gray-100 cursor-pointer"><div class="flex items-center justify-center"><div><div class="text-[12px] text-white font-extrabold"> Returns </div><div class="flex items-center"><div class="text-[15px] text-white -mt-1.5 font-extrabold">&amp; Orders</div></div></div></div></div>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("cart.index"),
        class: "relative h-[50px] p-2 border-[1px] border-gray-900 rounded-sm hover:border-[1px] hover:border-gray-100 cursor-pointer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="absolute text-center right-[21px] w-[14px] -top-0 rounded-full text-[20px]"${_scopeId}><div class="text-orange-400 font-extrabold bg-gray-900 h-[16px]"${_scopeId}>${ssrInterpolate(unref(cartStore).cart.length)}</div></span><div class="flex items-center justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(CartMinusIcon, {
              fillColor: "#FCFCFC",
              size: 40,
              class: "-mt-0.5"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("span", { class: "absolute text-center right-[21px] w-[14px] -top-0 rounded-full text-[20px]" }, [
                createVNode("div", { class: "text-orange-400 font-extrabold bg-gray-900 h-[16px]" }, toDisplayString(unref(cartStore).cart.length), 1)
              ]),
              createVNode("div", { class: "flex items-center justify-center" }, [
                createVNode(CartMinusIcon, {
                  fillColor: "#FCFCFC",
                  size: 40,
                  class: "-mt-0.5"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="flex items-center justify-between bg-[#232f3e] h-[38px] fixed z-40 min-w-[1150px] w-full mt-[60px]"><div class="flex"><div class="flex h-[30px] border-[1px] border-[#232f3e] rounded-sm hover:border-[1px] hover:border-gray-100 cursor-pointer"><div class="flex items-center justify-between px-2">`);
      _push(ssrRenderComponent(MenuIcon, {
        fillColor: "#F5F5F5",
        size: 26,
        class: "mr-0.5"
      }, null, _parent));
      _push(`<div class="text-[14px] text-white font-extrabold">All</div></div></div><div class="flex h-[30px] border-[1px] border-[#232f3e] rounded-sm hover:border-[1px] hover:border-gray-100 cursor-pointer"><div class="flex items-center justify-between px-2"><div class="text-[14px] text-white font-extrabold">Today&#39;s Deals</div></div></div><div class="flex h-[30px] border-[1px] border-[#232f3e] rounded-sm hover:border-[1px] hover:border-gray-100 cursor-pointer"><div class="flex items-center justify-between px-2"><div class="text-[14px] text-white font-extrabold">Gift Cards</div></div></div><div class="flex h-[30px] border-[1px] border-[#232f3e] rounded-sm hover:border-[1px] hover:border-gray-100 cursor-pointer"><div class="flex items-center justify-between px-2"><div class="text-[14px] text-white font-extrabold">Buy Again</div></div></div><div class="flex h-[30px] border-[1px] border-[#232f3e] rounded-sm hover:border-[1px] hover:border-gray-100 cursor-pointer"><div class="flex items-center justify-between px-2"><div class="text-[14px] text-white font-extrabold">Customer Service</div></div></div><div class="flex h-[30px] border-[1px] border-[#232f3e] rounded-sm hover:border-[1px] hover:border-gray-100 cursor-pointer"><div class="flex items-center justify-between px-2"><div class="text-[14px] text-white font-extrabold">John&#39;s Amazon.com</div></div></div></div><div class="flex"><div class="flex h-[30px] border-[1px] border-[#232f3e] rounded-sm hover:border-[1px] hover:border-gray-100 cursor-pointer"><div class="flex items-center justify-between px-2"><div class="text-[14px] text-white font-extrabold">Holiday Fasion Deals</div></div></div></div></div><main class="max-w-[1500px] mx-auto"><div class="pt-[98px]"></div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><div class="w-full bg-white mt-10 overflow-x-scroll"><div class="max-w-[1500px] mx-auto"><div class="text-[23px] pt-4 font-extrabold">Recommended based on your shopping trends</div><div class="flex justify-center items-stretch"><!--[-->`);
      ssrRenderList(_ctx.$page.props.random_products, (product) => {
        _push(`<div><div class="p-4 text-center mx-auto"><div class="w-[158px] h-[150px] overflow-hidden"><img${ssrRenderAttr("src", product.image)}></div>`);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("product.index", { id: product.id })
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="w-[160px] text-[12px] py-2 text-teal-600 font-extrabold hover:text-red-600 cursor-pointer"${_scopeId}>${ssrInterpolate(product.title.substring(0, 40))}... </div>`);
            } else {
              return [
                createVNode("div", { class: "w-[160px] text-[12px] py-2 text-teal-600 font-extrabold hover:text-red-600 cursor-pointer" }, toDisplayString(product.title.substring(0, 40)) + "... ", 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<div class="flex justify-start"><div class="text-xs font-extrabold text-red-600 w-full text-left">$${ssrInterpolate(product.price)}</div><img width="50" src="/images/logo/PRIME_LOGO.PNG" alt=""></div></div></div>`);
      });
      _push(`<!--]--></div></div></div><footer class="bg-[#232F3E]"><div class="bg-[#37475A] hover:bg-gray-600 w-full p-3.5 cursor-pointer text-white font-extrabold text-center"> Back to top </div><div class="flex items-stretch justify-between max-w-[1000px] mx-auto p-10 text-white"><ul><li class="font-extrabold text-lg">Get to Know Us</li><li class="hover:underline cursor-pointer">Careers</li><li class="hover:underline cursor-pointer">About Amazon</li><li class="hover:underline cursor-pointer">Investor Relations</li><li class="hover:underline cursor-pointer">Amazon Devices</li><li class="hover:underline cursor-pointer">Amazon Science</li></ul><ul><li class="font-extrabold text-lg">Make Money with Us</li><li class="hover:underline cursor-pointer">Sell products on Amazon</li><li class="hover:underline cursor-pointer">Sell on Amazon Business</li><li class="hover:underline cursor-pointer">Sell apps on Amazon</li><li class="hover:underline cursor-pointer">Become an Affiliate</li><li class="hover:underline cursor-pointer">Advertise Your Products</li><li class="hover:underline cursor-pointer">Self-Publish with Us</li><li class="hover:underline cursor-pointer">Host an Amazon Hub</li></ul><ul><li class="font-extrabold text-lg">Get to Know Us</li><li class="hover:underline cursor-pointer">Careers</li><li class="hover:underline cursor-pointer">About Amazon</li><li class="hover:underline cursor-pointer">Investor Relations</li><li class="hover:underline cursor-pointer">Amazon Devices</li><li class="hover:underline cursor-pointer">Amazon Science</li></ul><ul><li class="font-extrabold text-lg">Make Money with Us</li><li class="hover:underline cursor-pointer">Sell products on Amazon</li><li class="hover:underline cursor-pointer">Sell on Amazon Business</li><li class="hover:underline cursor-pointer">Sell apps on Amazon</li><li class="hover:underline cursor-pointer">Become an Affiliate</li><li class="hover:underline cursor-pointer">Advertise Your Products</li><li class="hover:underline cursor-pointer">Self-Publish with Us</li><li class="hover:underline cursor-pointer">Host an Amazon Hub</li></ul></div></footer></div>`);
      if (unref(showMenu)) {
        _push(`<div class="${ssrRenderClass([[unref(showMenu) ? "animate__animated animate__fadeIn animate__faster" : ""], "top-0 z-50 fixed w-full h-full bg-black bg-opacity-70"])}">`);
        _push(ssrRenderComponent(CloseIcon, {
          onClick: ($event) => isRef(showMenu) ? showMenu.value = false : showMenu = false,
          size: 30,
          fillColor: "#DCDCDC",
          class: ["ml-2.5 mt-3.5 left-80 cursor-pointer fixed z-50", [unref(showMenu) ? "animate__animated animate__fadeIn animate__faster" : ""]]
        }, null, _parent));
        _push(`<div class="${ssrRenderClass([[unref(showMenu) ? "animate__animated animate__slideInLeft animate__faster" : ""], "w-80 h-full bg-white"])}"><div class="bg-[#232f3e] font-extrabold text-[18px] flex items-center p-2 text-white pl-7"><span>Hello, Sign in</span></div><div class="font-extrabold text-[16px] pt-3 pb-1 pl-6 pr-3 text-black"> Shop By Department </div><!--[-->`);
        ssrRenderList(_ctx.$page.props.categories, (cat) => {
          _push(`<div><div class="hover:bg-gray-200 pl-6 pr-3">`);
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("category.index", { id: cat.id }),
            class: "py-2.5 text-[13px] text-black flex justify-between items-center hover:bg-gray-200 cursor-pointer"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(cat.name)} `);
                _push2(ssrRenderComponent(ChevronRightIcon, {
                  size: 20,
                  fillColor: "#808080"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createTextVNode(toDisplayString(cat.name) + " ", 1),
                  createVNode(ChevronRightIcon, {
                    size: 20,
                    fillColor: "#808080"
                  })
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AuthenticatedLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  MapMarkerOutlineIcon as M,
  _sfc_main as _,
  _export_sfc as a,
  useCartStore as u
};
