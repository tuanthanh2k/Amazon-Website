import { toRefs, unref, withCtx, createVNode, createTextVNode, openBlock, createBlock, toDisplayString, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-0a14f070.mjs";
import { Head, Link } from "@inertiajs/inertia-vue3";
import { P as PlusIcon } from "./Plus-48a667a0.mjs";
import "pinia";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: { product: Object },
  setup(__props) {
    const props = __props;
    toRefs(props);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Address" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mt-12"${_scopeId}></div><div class="max-w-[1000px] mx-auto text-3xl mb-10"${_scopeId}> Your Addresses </div><div class="max-w-[1000px] mx-auto flex gap-2 h-[270px]"${_scopeId}><div class="border border-dotted border-gray-400 rounded-md w-1/3"${_scopeId}>`);
            if (!_ctx.$page.props.auth.address) {
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("address_options.index")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="grid h-full place-items-center cursor-pointer"${_scopeId2}><div class="text-center"${_scopeId2}><div class="flex justify-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(PlusIcon, { size: 50 }, null, _parent3, _scopeId2));
                    _push3(`</div><div class="font-bold text-2xl"${_scopeId2}>Add Address</div></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "grid h-full place-items-center cursor-pointer" }, [
                        createVNode("div", { class: "text-center" }, [
                          createVNode("div", { class: "flex justify-center" }, [
                            createVNode(PlusIcon, { size: 50 })
                          ]),
                          createVNode("div", { class: "font-bold text-2xl" }, "Add Address")
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<div class="grid h-full place-items-center"${_scopeId}><div class="text-center"${_scopeId}><div class="font-bold text-2xl"${_scopeId}>Address is added</div></div></div>`);
            }
            _push2(`</div>`);
            if (_ctx.$page.props.auth.address) {
              _push2(`<div class="relative border border-gray-400 rounded-md w-1/3 shadow-md"${_scopeId}><div class="flex items-center justify-start p-3 text-xs text-gray-600 font-extrabold border-b border-b-gray-400"${_scopeId}> Default: <img class="h-3 mt-1.5 ml-2" src="/images/logo/AMAZON_LOGO_DARK.png" alt=""${_scopeId}></div><div class="text-sm font-extrabold px-4 pt-4"${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.user.first_name)} ${ssrInterpolate(_ctx.$page.props.auth.user.last_name)}</div><div class="text-sm px-4"${_scopeId}><div${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.address.addr1)}</div><div${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.address.addr2)}</div><div${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.address.city)}</div><div${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.address.postcode)}</div><div${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.address.country)}</div></div><div class="px-4 absolute bottom-0 pb-4"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("address_options.destroy", { id: _ctx.$page.props.auth.address.id }),
                method: "delete",
                as: "button",
                class: "text-teal-700 text-sm font-extrabold hover:underline hover:text-red-700"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Remove `);
                  } else {
                    return [
                      createTextVNode(" Remove ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "mt-12" }),
              createVNode("div", { class: "max-w-[1000px] mx-auto text-3xl mb-10" }, " Your Addresses "),
              createVNode("div", { class: "max-w-[1000px] mx-auto flex gap-2 h-[270px]" }, [
                createVNode("div", { class: "border border-dotted border-gray-400 rounded-md w-1/3" }, [
                  !_ctx.$page.props.auth.address ? (openBlock(), createBlock(unref(Link), {
                    key: 0,
                    href: _ctx.route("address_options.index")
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "grid h-full place-items-center cursor-pointer" }, [
                        createVNode("div", { class: "text-center" }, [
                          createVNode("div", { class: "flex justify-center" }, [
                            createVNode(PlusIcon, { size: 50 })
                          ]),
                          createVNode("div", { class: "font-bold text-2xl" }, "Add Address")
                        ])
                      ])
                    ]),
                    _: 1
                  }, 8, ["href"])) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "grid h-full place-items-center"
                  }, [
                    createVNode("div", { class: "text-center" }, [
                      createVNode("div", { class: "font-bold text-2xl" }, "Address is added")
                    ])
                  ]))
                ]),
                _ctx.$page.props.auth.address ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "relative border border-gray-400 rounded-md w-1/3 shadow-md"
                }, [
                  createVNode("div", { class: "flex items-center justify-start p-3 text-xs text-gray-600 font-extrabold border-b border-b-gray-400" }, [
                    createTextVNode(" Default: "),
                    createVNode("img", {
                      class: "h-3 mt-1.5 ml-2",
                      src: "/images/logo/AMAZON_LOGO_DARK.png",
                      alt: ""
                    })
                  ]),
                  createVNode("div", { class: "text-sm font-extrabold px-4 pt-4" }, toDisplayString(_ctx.$page.props.auth.user.first_name) + " " + toDisplayString(_ctx.$page.props.auth.user.last_name), 1),
                  createVNode("div", { class: "text-sm px-4" }, [
                    createVNode("div", null, toDisplayString(_ctx.$page.props.auth.address.addr1), 1),
                    createVNode("div", null, toDisplayString(_ctx.$page.props.auth.address.addr2), 1),
                    createVNode("div", null, toDisplayString(_ctx.$page.props.auth.address.city), 1),
                    createVNode("div", null, toDisplayString(_ctx.$page.props.auth.address.postcode), 1),
                    createVNode("div", null, toDisplayString(_ctx.$page.props.auth.address.country), 1)
                  ]),
                  createVNode("div", { class: "px-4 absolute bottom-0 pb-4" }, [
                    createVNode(unref(Link), {
                      href: _ctx.route("address_options.destroy", { id: _ctx.$page.props.auth.address.id }),
                      method: "delete",
                      as: "button",
                      class: "text-teal-700 text-sm font-extrabold hover:underline hover:text-red-700"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Remove ")
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ])
                ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Address/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
