import { toRefs, ref, onMounted, computed, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { u as useCartStore, _ as _sfc_main$1 } from "./AuthenticatedLayout-0a14f070.mjs";
import { useForm, Inertia, Head } from "@inertiajs/inertia-vue3";
import { storeToRefs } from "pinia";
const Checkout_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "Checkout",
  __ssrInlineRender: true,
  props: { intent: Object, order: Object },
  setup(__props) {
    const props = __props;
    const cartStore = useCartStore();
    const { cart } = storeToRefs(cartStore);
    const { intent } = toRefs(props);
    let stripe = null;
    let elements = null;
    let card = null;
    let form = null;
    let isProcessing = ref(false);
    const data = useForm({ payment_intent: null });
    onMounted(() => {
      stripe = Stripe("pk_test_51MlwU6Bmw8RrKpV2Lss8SVVWQB6PwXBNaonq9CE57EhH4NYDL2J97cD1qk3CvMmPCfiKEfI4gEk2OLlS7Y8Aud1e00UkaJt1ut");
      elements = stripe.elements();
      var style = {
        base: {
          color: "#32325d",
          fontFamily: "Arial, sans-serif",
          fontSmoothing: "antialiased",
          fontSize: "16px",
          "::placeholder": {
            color: "#32325d"
          }
        },
        invalid: {
          fontFamily: "Arial, sans-serif",
          color: "#fa755a",
          iconColor: "#fa755a"
        }
      };
      card = elements.create("card", { style });
      card.mount("#card-element");
      card.on("change", function(event) {
        document.querySelector("button").disabled = event.empty;
        document.querySelector("#card-error").textContent = event.error ? event.error.message : "";
      });
      form = document.getElementById("payment-form");
      form.addEventListener("submit", function(event) {
        event.preventDefault();
        payWithCard(stripe, card, intent.value.client_secret);
      });
      setTimeout(() => {
        Inertia.post("/checkout", {
          total: totalWithoutDot(),
          total_decimal: total,
          items: cart.value
        });
      }, 10);
    });
    const payWithCard = (stripe2, card2, clientSecret) => {
      loading(true);
      stripe2.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card2
        }
      }).then(function(result) {
        if (result.error) {
          showError(result.error.message);
        } else {
          console.log(result.paymentIntent.id);
          orderComplete(result.paymentIntent.id);
        }
      });
    };
    const orderComplete = (paymentIntentId) => {
      data.payment_intent = paymentIntentId;
      data.put("/checkout");
    };
    const showError = (errorMsgText) => {
      loading(false);
      var errorMsg = document.querySelector("#card-error");
      errorMsg.textContent = errorMsgText;
      setTimeout(function() {
        errorMsg.textContent = "";
      }, 4e3);
    };
    const loading = (isLoading) => {
      if (isLoading) {
        document.querySelector("button").disabled = true;
        isProcessing.value = true;
      } else {
        document.querySelector("button").disabled = false;
        isProcessing.value = false;
      }
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
      if (total.value > 0) {
        let num = String(total.value).split(".").join("");
        return Number(num);
      }
      return 0;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Checkout" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-4 mt-2 max-w-[1250px] mx-auto text-3xl font-extrabold"${_scopeId}>Checkout</div><div class="flex max-w-[1250px] mx-auto pt-4"${_scopeId}><div class="w-8/12"${_scopeId}><div class="flex items-stretch border-b border-b-gray-300 w-[calc(100%-100px)] pb-4 pl-4 mb-6"${_scopeId}><div class="text-gray-900 font-extrabold text-xl mr-12"${_scopeId}> Shipping Address </div><div class="px-4 font-semibold"${_scopeId}><div${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.user.first_name)} ${ssrInterpolate(_ctx.$page.props.auth.user.last_name)}</div><div${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.address.addr1)}</div><div${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.address.addr2)}</div><div${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.address.city)}</div><div${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.address.postcode)}</div><div${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.address.country)}</div></div></div></div><div class="w-4/12 border border-gray-400 rounded-md py-4 px-2"${_scopeId}><form id="payment-form"${_scopeId}><div id="card-element"${_scopeId}></div><div class="flex justify-between text-xl text-red-700 font-extrabold border-y border-y-gray-300 my-3 p-2"${_scopeId}><div${_scopeId}>Order total:</div>`);
            if (__props.order) {
              _push2(`<div${_scopeId}>USD: ${ssrInterpolate(__props.order.total_decimal)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><button id="submit" class="w-full bg-yellow-400 hover:bg-yellow-500 rounded-md text-sm font-extrabold p-2"${_scopeId}>`);
            if (unref(isProcessing)) {
              _push2(`<div id="button-text"${_scopeId}>Processing...</div>`);
            } else {
              _push2(`<div id="button-text"${_scopeId}>Place your order in USD</div>`);
            }
            _push2(`</button><p id="card-error" role="alert" class="text-red-700 text-center font-semibold"${_scopeId}></p></form></div></div><div class="w-[1200px] mx-auto text-xl font-bold pb-2 underline"${_scopeId}>Items</div><!--[-->`);
            ssrRenderList(JSON.parse(__props.order.items), (prod) => {
              _push2(`<div class="w-[1200px] mx-auto"${_scopeId}><div class="flex items-center py-1"${_scopeId}><img width="60"${ssrRenderAttr("src", prod.image)} class="rounded-md" alt=""${_scopeId}><div class="ml-4"${_scopeId}><div class="text-lg font-semibold"${_scopeId}>${ssrInterpolate(prod.title)}</div><div class="font-semibold text-red-700"${_scopeId}>$${ssrInterpolate(prod.price)}</div></div></div></div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              createVNode("div", { class: "p-4 mt-2 max-w-[1250px] mx-auto text-3xl font-extrabold" }, "Checkout"),
              createVNode("div", { class: "flex max-w-[1250px] mx-auto pt-4" }, [
                createVNode("div", { class: "w-8/12" }, [
                  createVNode("div", { class: "flex items-stretch border-b border-b-gray-300 w-[calc(100%-100px)] pb-4 pl-4 mb-6" }, [
                    createVNode("div", { class: "text-gray-900 font-extrabold text-xl mr-12" }, " Shipping Address "),
                    createVNode("div", { class: "px-4 font-semibold" }, [
                      createVNode("div", null, toDisplayString(_ctx.$page.props.auth.user.first_name) + " " + toDisplayString(_ctx.$page.props.auth.user.last_name), 1),
                      createVNode("div", null, toDisplayString(_ctx.$page.props.auth.address.addr1), 1),
                      createVNode("div", null, toDisplayString(_ctx.$page.props.auth.address.addr2), 1),
                      createVNode("div", null, toDisplayString(_ctx.$page.props.auth.address.city), 1),
                      createVNode("div", null, toDisplayString(_ctx.$page.props.auth.address.postcode), 1),
                      createVNode("div", null, toDisplayString(_ctx.$page.props.auth.address.country), 1)
                    ])
                  ])
                ]),
                createVNode("div", { class: "w-4/12 border border-gray-400 rounded-md py-4 px-2" }, [
                  createVNode("form", { id: "payment-form" }, [
                    createVNode("div", { id: "card-element" }),
                    createVNode("div", { class: "flex justify-between text-xl text-red-700 font-extrabold border-y border-y-gray-300 my-3 p-2" }, [
                      createVNode("div", null, "Order total:"),
                      __props.order ? (openBlock(), createBlock("div", { key: 0 }, "USD: " + toDisplayString(__props.order.total_decimal), 1)) : createCommentVNode("", true)
                    ]),
                    createVNode("button", {
                      id: "submit",
                      class: "w-full bg-yellow-400 hover:bg-yellow-500 rounded-md text-sm font-extrabold p-2"
                    }, [
                      unref(isProcessing) ? (openBlock(), createBlock("div", {
                        key: 0,
                        id: "button-text"
                      }, "Processing...")) : (openBlock(), createBlock("div", {
                        key: 1,
                        id: "button-text"
                      }, "Place your order in USD"))
                    ]),
                    createVNode("p", {
                      id: "card-error",
                      role: "alert",
                      class: "text-red-700 text-center font-semibold"
                    })
                  ])
                ])
              ]),
              createVNode("div", { class: "w-[1200px] mx-auto text-xl font-bold pb-2 underline" }, "Items"),
              (openBlock(true), createBlock(Fragment, null, renderList(JSON.parse(__props.order.items), (prod) => {
                return openBlock(), createBlock("div", {
                  class: "w-[1200px] mx-auto",
                  key: prod
                }, [
                  createVNode("div", { class: "flex items-center py-1" }, [
                    createVNode("img", {
                      width: "60",
                      src: prod.image,
                      class: "rounded-md",
                      alt: ""
                    }, null, 8, ["src"]),
                    createVNode("div", { class: "ml-4" }, [
                      createVNode("div", { class: "text-lg font-semibold" }, toDisplayString(prod.title), 1),
                      createVNode("div", { class: "font-semibold text-red-700" }, "$" + toDisplayString(prod.price), 1)
                    ])
                  ])
                ]);
              }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Checkout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
