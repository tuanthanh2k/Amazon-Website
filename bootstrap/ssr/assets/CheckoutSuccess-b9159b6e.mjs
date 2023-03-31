import { mergeProps, useSSRContext, onMounted, unref, withCtx, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { a as _export_sfc, u as useCartStore, _ as _sfc_main$2 } from "./AuthenticatedLayout-0a14f070.mjs";
import { Head, Link } from "@inertiajs/inertia-vue3";
import { storeToRefs } from "pinia";
const _sfc_main$1 = {
  name: "CheckIcon",
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
    class: "material-design-icon check-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z">`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/Check.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CheckIcon = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "CheckoutSuccess",
  __ssrInlineRender: true,
  setup(__props) {
    const cartStore = useCartStore();
    const { cart } = storeToRefs(cartStore);
    onMounted(() => {
      cart.value = [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Checkout Success" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mt-10 mb-6 max-w-xl mx-auto text-3xl font-extrabold"${_scopeId}>Checkout Success</div><div class="max-w-xl mx-auto"${_scopeId}><div class="flex flex-col p-5 rounded-lg shadow bg-white"${_scopeId}><div class="flex flex-col items-center text-center"${_scopeId}><div class="inline-block p-4 bg-green-100 rounded-full"${_scopeId}>`);
            _push2(ssrRenderComponent(CheckIcon, {
              size: 100,
              fillColor: "#7CFC00"
            }, null, _parent2, _scopeId));
            _push2(`</div><h2 class="mt-2 font-semibold text-2xl text-gray-800"${_scopeId}> Success </h2><p class="mt-2 text-lg font-bold text-gray-600 leading-relaxed"${_scopeId}> Your order is on it&#39;s way!!! </p></div>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("dashboard"),
              class: "flex items-center mt-3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<button class="flex-1 px-4 py-2 ml-2 bg-yellow-500 hover:bg-yellow-500 text-gray-900 font-bold rounded-md"${_scopeId2}> Home </button>`);
                } else {
                  return [
                    createVNode("button", { class: "flex-1 px-4 py-2 ml-2 bg-yellow-500 hover:bg-yellow-500 text-gray-900 font-bold rounded-md" }, " Home ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "mt-10 mb-6 max-w-xl mx-auto text-3xl font-extrabold" }, "Checkout Success"),
              createVNode("div", { class: "max-w-xl mx-auto" }, [
                createVNode("div", { class: "flex flex-col p-5 rounded-lg shadow bg-white" }, [
                  createVNode("div", { class: "flex flex-col items-center text-center" }, [
                    createVNode("div", { class: "inline-block p-4 bg-green-100 rounded-full" }, [
                      createVNode(CheckIcon, {
                        size: 100,
                        fillColor: "#7CFC00"
                      })
                    ]),
                    createVNode("h2", { class: "mt-2 font-semibold text-2xl text-gray-800" }, " Success "),
                    createVNode("p", { class: "mt-2 text-lg font-bold text-gray-600 leading-relaxed" }, " Your order is on it's way!!! ")
                  ]),
                  createVNode(unref(Link), {
                    href: _ctx.route("dashboard"),
                    class: "flex items-center mt-3"
                  }, {
                    default: withCtx(() => [
                      createVNode("button", { class: "flex-1 px-4 py-2 ml-2 bg-yellow-500 hover:bg-yellow-500 text-gray-900 font-bold rounded-md" }, " Home ")
                    ]),
                    _: 1
                  }, 8, ["href"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/CheckoutSuccess.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
