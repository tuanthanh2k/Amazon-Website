import { toRefs, computed, unref, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { u as useCartStore, _ as _sfc_main$1, M as MapMarkerOutlineIcon } from "./AuthenticatedLayout-0a14f070.mjs";
import { Head, Link } from "@inertiajs/inertia-vue3";
import { storeToRefs } from "pinia";
const _sfc_main = {
  __name: "Product",
  __ssrInlineRender: true,
  props: { product: Object },
  setup(__props) {
    const props = __props;
    const cartStore = useCartStore();
    const { cart } = storeToRefs(cartStore);
    const { product } = toRefs(props);
    const addToCart = (product2) => {
      cart.value.push(product2);
    };
    const isAlreadyInCart = computed(() => {
      let res = cart.value.find((c) => c.id === product.value.id);
      if (res)
        return true;
      return false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Product" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mt-16"${_scopeId}></div><div class="max-w-[1200px] mx-auto flex gap-4 justify-between"${_scopeId}><div class="w-2/5"${_scopeId}><img${ssrRenderAttr("src", unref(product).image)}${_scopeId}></div><div class="w-2/5"${_scopeId}><div class="text-xl font-extrabold border-b border-b-gray-300 mb-2 pb-2"${_scopeId}>${ssrInterpolate(unref(product).title)}</div><div${_scopeId}><div class="text-lg font-extrabold m-1"${_scopeId}> About this item </div><div${_scopeId}>${ssrInterpolate(unref(product).description)}</div></div></div><div class="w-1/5"${_scopeId}><div class="border border-gray-300 rounded-lg"${_scopeId}><div class="my-2 mx-3 mb-2"${_scopeId}><div class="flex items-center justify-center border-b border-gray-300 pb-1"${_scopeId}>`);
            if (_ctx.$page.props.auth.user) {
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("address.index"),
                class: "flex items-center text-xs font-extrabold text-teal-700 hover:text-red-600 cursor-pointer"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(MapMarkerOutlineIcon, { size: 17 }, null, _parent3, _scopeId2));
                    _push3(` Delivery to ${ssrInterpolate(_ctx.$page.props.auth.user.first_name)} - ${ssrInterpolate(_ctx.$page.props.auth.address.postcode)}`);
                  } else {
                    return [
                      createVNode(MapMarkerOutlineIcon, { size: 17 }),
                      createTextVNode(" Delivery to " + toDisplayString(_ctx.$page.props.auth.user.first_name) + " - " + toDisplayString(_ctx.$page.props.auth.address.postcode), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("login"),
                class: "flex items-center text-xs font-extrabold text-teal-700 hover:text-red-600 cursor-pointer"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` SIGN IN `);
                  } else {
                    return [
                      createTextVNode(" SIGN IN ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            }
            _push2(`</div><div class="flex items-center justify-between pt-2"${_scopeId}><div class="text-red-600 text-sm font-bold"${_scopeId}>$${ssrInterpolate(unref(product).price)}</div><button${ssrIncludeBooleanAttr(unref(isAlreadyInCart)) ? " disabled" : ""} class="bg-yellow-400 px-2 font-bold text-sm rounded-lg border shadow-sm cursor-pointer"${_scopeId}>`);
            if (unref(isAlreadyInCart)) {
              _push2(`<span${_scopeId}>Iten added</span>`);
            } else {
              _push2(`<span${_scopeId}>Add to cart</span>`);
            }
            _push2(`</button></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "mt-16" }),
              createVNode("div", { class: "max-w-[1200px] mx-auto flex gap-4 justify-between" }, [
                createVNode("div", { class: "w-2/5" }, [
                  createVNode("img", {
                    src: unref(product).image
                  }, null, 8, ["src"])
                ]),
                createVNode("div", { class: "w-2/5" }, [
                  createVNode("div", { class: "text-xl font-extrabold border-b border-b-gray-300 mb-2 pb-2" }, toDisplayString(unref(product).title), 1),
                  createVNode("div", null, [
                    createVNode("div", { class: "text-lg font-extrabold m-1" }, " About this item "),
                    createVNode("div", null, toDisplayString(unref(product).description), 1)
                  ])
                ]),
                createVNode("div", { class: "w-1/5" }, [
                  createVNode("div", { class: "border border-gray-300 rounded-lg" }, [
                    createVNode("div", { class: "my-2 mx-3 mb-2" }, [
                      createVNode("div", { class: "flex items-center justify-center border-b border-gray-300 pb-1" }, [
                        _ctx.$page.props.auth.user ? (openBlock(), createBlock(unref(Link), {
                          key: 0,
                          href: _ctx.route("address.index"),
                          class: "flex items-center text-xs font-extrabold text-teal-700 hover:text-red-600 cursor-pointer"
                        }, {
                          default: withCtx(() => [
                            createVNode(MapMarkerOutlineIcon, { size: 17 }),
                            createTextVNode(" Delivery to " + toDisplayString(_ctx.$page.props.auth.user.first_name) + " - " + toDisplayString(_ctx.$page.props.auth.address.postcode), 1)
                          ]),
                          _: 1
                        }, 8, ["href"])) : (openBlock(), createBlock(unref(Link), {
                          key: 1,
                          href: _ctx.route("login"),
                          class: "flex items-center text-xs font-extrabold text-teal-700 hover:text-red-600 cursor-pointer"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" SIGN IN ")
                          ]),
                          _: 1
                        }, 8, ["href"]))
                      ]),
                      createVNode("div", { class: "flex items-center justify-between pt-2" }, [
                        createVNode("div", { class: "text-red-600 text-sm font-bold" }, "$" + toDisplayString(unref(product).price), 1),
                        createVNode("button", {
                          disabled: unref(isAlreadyInCart),
                          onClick: ($event) => addToCart(unref(product)),
                          class: "bg-yellow-400 px-2 font-bold text-sm rounded-lg border shadow-sm cursor-pointer"
                        }, [
                          unref(isAlreadyInCart) ? (openBlock(), createBlock("span", { key: 0 }, "Iten added")) : (openBlock(), createBlock("span", { key: 1 }, "Add to cart"))
                        ], 8, ["disabled", "onClick"])
                      ])
                    ])
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Product.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
