import { toRefs, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext, openBlock, createBlock, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./AuthenticatedLayout-0a14f070.mjs";
import { Link, Head } from "@inertiajs/inertia-vue3";
import "pinia";
const _sfc_main$1 = {
  __name: "ProductComponent",
  __ssrInlineRender: true,
  props: { product: Object },
  setup(__props) {
    const props = __props;
    const { product } = toRefs(props);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "border border-gray-300 rounded-md bg-white p-1.5" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("product.index", { id: unref(product).id }),
        class: "w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="rounded-md"${ssrRenderAttr("src", unref(product).image)}${_scopeId}><div class="text-left"${_scopeId}><div class="text-[16px] text-gray-900 font-extrabold cursor-pointer"${_scopeId}>${ssrInterpolate(unref(product).title)}</div><div class="flex justify-between items-center"${_scopeId}><div class="text-2xl p-1 font-semibold w-full text-left"${_scopeId}>$${ssrInterpolate(unref(product).price)}</div><img width="80" src="/images/logo/PRIME_LOGO.PNG"${_scopeId}></div><div class="flex justify-between items-center"${_scopeId}><div class="text-md p-1 font-semibold w-full text-left"${_scopeId}>In Stock</div></div><div class="flex justify-between items-center"${_scopeId}><img width="80" src="/images/STARS.PNG"${_scopeId}></div></div>`);
          } else {
            return [
              createVNode("img", {
                class: "rounded-md",
                src: unref(product).image
              }, null, 8, ["src"]),
              createVNode("div", { class: "text-left" }, [
                createVNode("div", { class: "text-[16px] text-gray-900 font-extrabold cursor-pointer" }, toDisplayString(unref(product).title), 1),
                createVNode("div", { class: "flex justify-between items-center" }, [
                  createVNode("div", { class: "text-2xl p-1 font-semibold w-full text-left" }, "$" + toDisplayString(unref(product).price), 1),
                  createVNode("img", {
                    width: "80",
                    src: "/images/logo/PRIME_LOGO.PNG"
                  })
                ]),
                createVNode("div", { class: "flex justify-between items-center" }, [
                  createVNode("div", { class: "text-md p-1 font-semibold w-full text-left" }, "In Stock")
                ]),
                createVNode("div", { class: "flex justify-between items-center" }, [
                  createVNode("img", {
                    width: "80",
                    src: "/images/STARS.PNG"
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ProductComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Category",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Category" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full p-1 pt-2 mb-6"${_scopeId}><div class="text-[27px] font-extrabold"${_scopeId}>${ssrInterpolate(_ctx.$page.props.category_name.name)}</div><div class="text-sm font-bold"${_scopeId}> Shop home entertainment, TVs, home audio, headphones, cameras, accessories and more </div></div><div class="border border-gray-300 rounded-lg text-sm py-3.5 px-10 mb-4"${_scopeId}> 1-${ssrInterpolate(_ctx.$page.props.category_by_id.length)} of over ${ssrInterpolate(_ctx.$page.props.category_by_id.length)} results for ${ssrInterpolate(_ctx.$page.props.category_name.name)}</div><div class="grid grid-cols-4 gap-1"${_scopeId}><!--[-->`);
            ssrRenderList(_ctx.$page.props.category_by_id, (product) => {
              _push2(`<div class="m-1"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$1, { product }, null, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full p-1 pt-2 mb-6" }, [
                createVNode("div", { class: "text-[27px] font-extrabold" }, toDisplayString(_ctx.$page.props.category_name.name), 1),
                createVNode("div", { class: "text-sm font-bold" }, " Shop home entertainment, TVs, home audio, headphones, cameras, accessories and more ")
              ]),
              createVNode("div", { class: "border border-gray-300 rounded-lg text-sm py-3.5 px-10 mb-4" }, " 1-" + toDisplayString(_ctx.$page.props.category_by_id.length) + " of over " + toDisplayString(_ctx.$page.props.category_by_id.length) + " results for " + toDisplayString(_ctx.$page.props.category_name.name), 1),
              createVNode("div", { class: "grid grid-cols-4 gap-1" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.$page.props.category_by_id, (product) => {
                  return openBlock(), createBlock("div", {
                    key: product,
                    class: "m-1"
                  }, [
                    createVNode(_sfc_main$1, { product }, null, 8, ["product"])
                  ]);
                }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Category.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
