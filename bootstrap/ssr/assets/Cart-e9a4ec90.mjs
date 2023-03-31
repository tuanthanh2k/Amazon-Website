import { computed, unref, withCtx, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { u as useCartStore, _ as _sfc_main$1 } from "./AuthenticatedLayout-0a14f070.mjs";
import { Head, Link } from "@inertiajs/inertia-vue3";
import { storeToRefs } from "pinia";
const _sfc_main = {
  __name: "Cart",
  __ssrInlineRender: true,
  setup(__props) {
    const cartStore = useCartStore();
    const { cart } = storeToRefs(cartStore);
    const removeFromCart = (id) => {
      cartStore.removeProductFromCart(id);
    };
    const total = computed(() => {
      let total2 = 0;
      cart.value.forEach((c) => {
        total2 += c.price;
      });
      if (total2 > 0) {
        return total2.toFixed(2);
      }
      return 0;
    });
    const totalWithoutDot = () => {
      let num = String(total.value).split(".").join("");
      return Number(num);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Cart" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex gap-4"${_scopeId}><div class="w-full bg-white p-4 mt-4"${_scopeId}><div class="border-b"${_scopeId}><div class="text-[27px] font-semibold"${_scopeId}>Shopping Cart</div><div class="text-sm w-full flex justify-end items-center font-semibold"${_scopeId}>Price</div></div>`);
            if (!unref(cart).length) {
              _push2(`<div class="text-center font-bold text-2xl py-20"${_scopeId}> Your Amazon Cart is empty </div>`);
            } else {
              _push2(`<!--[-->`);
              ssrRenderList(unref(cart), (product) => {
                _push2(`<div class="flex border-b"${_scopeId}><img class="h-[180px] mt-4 mb-4"${ssrRenderAttr("src", product.image)}${_scopeId}><div class="flex justify-between mb-4"${_scopeId}><div class="pl-8 py-10 relative"${_scopeId}><div class="text-gray-900 pb-2 -mt-4 font-bold text-[18px]"${_scopeId}>${ssrInterpolate(product.title)}</div><span${_scopeId}>${ssrInterpolate(product.description.substring(0, 180))}...</span><div class="text-teal-600 py-2"${_scopeId}>In Stock</div><div class="text-teal-600 absolute bottom-0 mb-4 flex items-center"${_scopeId}><div class="text-sm hover:underline cursor-pointer"${_scopeId}> Delete </div></div></div><div class="py-10 justify-end"${_scopeId}><div class="font-bold pl-20"${_scopeId}>$${ssrInterpolate(product.price)}</div></div></div></div>`);
              });
              _push2(`<!--]-->`);
            }
            _push2(`<div class="font-extrabold text-[18px] pt-4 text-right"${_scopeId}>Subtotal (Items: ${ssrInterpolate(unref(cart).length)}): $${ssrInterpolate(unref(total))}</div></div><div class="bg-white w-[350px] p-4 mt-4 h-48"${_scopeId}><div class="text-sm text-green-700"${_scopeId}> Welcome to Amazon! FREE Delivery on your first order to UK or Ireland. Select this option at checkout. </div><div class="font-extrabold text-[18px] pt-4"${_scopeId}>Subtotal (Items: ${ssrInterpolate(unref(cart).length)}): $${ssrInterpolate(unref(total))}</div>`);
            _push2(ssrRenderComponent(unref(Link), {
              class: ["block mt-4 w-full text-center py-1 font-bold text-sm rounded-lg border shadow-sm cursor-pointer", Number(unref(total)) === 0 ? "bg-gray-400" : "bg-yellow-400 hover:bg-yellow-500"],
              disabled: Number(unref(total)) === 0,
              as: "button",
              method: !_ctx.$page.props.auth.user ? "get" : "post",
              href: _ctx.$page.props.auth.user !== null ? _ctx.route("checkout.store", {
                total: totalWithoutDot(),
                total_decimal: unref(total),
                items: unref(cart)
              }) : _ctx.route("login")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Proceed to Checkout `);
                } else {
                  return [
                    createTextVNode(" Proceed to Checkout ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex gap-4" }, [
                createVNode("div", { class: "w-full bg-white p-4 mt-4" }, [
                  createVNode("div", { class: "border-b" }, [
                    createVNode("div", { class: "text-[27px] font-semibold" }, "Shopping Cart"),
                    createVNode("div", { class: "text-sm w-full flex justify-end items-center font-semibold" }, "Price")
                  ]),
                  !unref(cart).length ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "text-center font-bold text-2xl py-20"
                  }, " Your Amazon Cart is empty ")) : (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(unref(cart), (product) => {
                    return openBlock(), createBlock("div", {
                      class: "flex border-b",
                      key: product
                    }, [
                      createVNode("img", {
                        class: "h-[180px] mt-4 mb-4",
                        src: product.image
                      }, null, 8, ["src"]),
                      createVNode("div", { class: "flex justify-between mb-4" }, [
                        createVNode("div", { class: "pl-8 py-10 relative" }, [
                          createVNode("div", { class: "text-gray-900 pb-2 -mt-4 font-bold text-[18px]" }, toDisplayString(product.title), 1),
                          createVNode("span", null, toDisplayString(product.description.substring(0, 180)) + "...", 1),
                          createVNode("div", { class: "text-teal-600 py-2" }, "In Stock"),
                          createVNode("div", { class: "text-teal-600 absolute bottom-0 mb-4 flex items-center" }, [
                            createVNode("div", {
                              onClick: ($event) => removeFromCart(product.id),
                              class: "text-sm hover:underline cursor-pointer"
                            }, " Delete ", 8, ["onClick"])
                          ])
                        ]),
                        createVNode("div", { class: "py-10 justify-end" }, [
                          createVNode("div", { class: "font-bold pl-20" }, "$" + toDisplayString(product.price), 1)
                        ])
                      ])
                    ]);
                  }), 128)),
                  createVNode("div", { class: "font-extrabold text-[18px] pt-4 text-right" }, "Subtotal (Items: " + toDisplayString(unref(cart).length) + "): $" + toDisplayString(unref(total)), 1)
                ]),
                createVNode("div", { class: "bg-white w-[350px] p-4 mt-4 h-48" }, [
                  createVNode("div", { class: "text-sm text-green-700" }, " Welcome to Amazon! FREE Delivery on your first order to UK or Ireland. Select this option at checkout. "),
                  createVNode("div", { class: "font-extrabold text-[18px] pt-4" }, "Subtotal (Items: " + toDisplayString(unref(cart).length) + "): $" + toDisplayString(unref(total)), 1),
                  createVNode(unref(Link), {
                    class: ["block mt-4 w-full text-center py-1 font-bold text-sm rounded-lg border shadow-sm cursor-pointer", Number(unref(total)) === 0 ? "bg-gray-400" : "bg-yellow-400 hover:bg-yellow-500"],
                    disabled: Number(unref(total)) === 0,
                    as: "button",
                    method: !_ctx.$page.props.auth.user ? "get" : "post",
                    href: _ctx.$page.props.auth.user !== null ? _ctx.route("checkout.store", {
                      total: totalWithoutDot(),
                      total_decimal: unref(total),
                      items: unref(cart)
                    }) : _ctx.route("login")
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Proceed to Checkout ")
                    ]),
                    _: 1
                  }, 8, ["disabled", "class", "method", "href"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Cart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
