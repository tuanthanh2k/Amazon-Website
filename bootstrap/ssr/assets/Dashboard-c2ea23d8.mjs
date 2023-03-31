import { unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-0a14f070.mjs";
import { Head, Link } from "@inertiajs/inertia-vue3";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "pinia";
const carousel = "";
const Dashboard_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "Dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Dashboard" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Carousel), {
              "items-to-show": 1,
              "wrap-around": true
            }, {
              addons: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Navigation), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Navigation))
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(6, (slide) => {
                    _push3(ssrRenderComponent(unref(Slide), { key: slide }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="carousel__item"${_scopeId3}><img id="slider"${ssrRenderAttr("src", `images/carousel/slide${slide}.jpg`)} alt=""${_scopeId3}></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "carousel__item" }, [
                              createVNode("img", {
                                id: "slider",
                                src: `images/carousel/slide${slide}.jpg`,
                                alt: ""
                              }, null, 8, ["src"])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(6, (slide) => {
                      return createVNode(unref(Slide), { key: slide }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "carousel__item" }, [
                            createVNode("img", {
                              id: "slider",
                              src: `images/carousel/slide${slide}.jpg`,
                              alt: ""
                            }, null, 8, ["src"])
                          ])
                        ]),
                        _: 2
                      }, 1024);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="relative -mt-[300px]"${_scopeId}><div class="flex m-4 z-10 relative"${_scopeId}><div class="bg-white mx-2 p-2 text-md w-full text-center"${_scopeId}> You are on amazon.com You can also shop on Amazon UK for millions of products with fast local delivery. <span class="underline text-teal-600 cursor-pointer"${_scopeId}>Click here to go to amazon.co.uk</span></div></div><div class="grid grid-cols-3 m-4 z-10 relative"${_scopeId}><!--[-->`);
            ssrRenderList(_ctx.$page.props.categories, (cat) => {
              _push2(`<div class="p-1.5 flex"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("category.index", { id: cat.id }),
                class: "bg-white p-5"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="text-2xl font-extrabold flex"${_scopeId2}>${ssrInterpolate(cat.name)}</div><div class="flex"${_scopeId2}><img class="object-fill"${ssrRenderAttr("src", `images/categories/${cat.id}.png`)} alt=""${_scopeId2}></div><div class="pt-3 -mb-2 text-teal-800 font-bold hover:underline hover:text-red-400 cursor-pointer"${_scopeId2}> See More </div>`);
                  } else {
                    return [
                      createVNode("div", { class: "text-2xl font-extrabold flex" }, toDisplayString(cat.name), 1),
                      createVNode("div", { class: "flex" }, [
                        createVNode("img", {
                          class: "object-fill",
                          src: `images/categories/${cat.id}.png`,
                          alt: ""
                        }, null, 8, ["src"])
                      ]),
                      createVNode("div", { class: "pt-3 -mb-2 text-teal-800 font-bold hover:underline hover:text-red-400 cursor-pointer" }, " See More ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--></div></div>`);
          } else {
            return [
              createVNode(unref(Carousel), {
                "items-to-show": 1,
                "wrap-around": true
              }, {
                addons: withCtx(() => [
                  createVNode(unref(Navigation))
                ]),
                default: withCtx(() => [
                  (openBlock(), createBlock(Fragment, null, renderList(6, (slide) => {
                    return createVNode(unref(Slide), { key: slide }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "carousel__item" }, [
                          createVNode("img", {
                            id: "slider",
                            src: `images/carousel/slide${slide}.jpg`,
                            alt: ""
                          }, null, 8, ["src"])
                        ])
                      ]),
                      _: 2
                    }, 1024);
                  }), 64))
                ]),
                _: 1
              }),
              createVNode("div", { class: "relative -mt-[300px]" }, [
                createVNode("div", { class: "flex m-4 z-10 relative" }, [
                  createVNode("div", { class: "bg-white mx-2 p-2 text-md w-full text-center" }, [
                    createTextVNode(" You are on amazon.com You can also shop on Amazon UK for millions of products with fast local delivery. "),
                    createVNode("span", { class: "underline text-teal-600 cursor-pointer" }, "Click here to go to amazon.co.uk")
                  ])
                ]),
                createVNode("div", { class: "grid grid-cols-3 m-4 z-10 relative" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.$page.props.categories, (cat) => {
                    return openBlock(), createBlock("div", {
                      class: "p-1.5 flex",
                      key: cat
                    }, [
                      createVNode(unref(Link), {
                        href: _ctx.route("category.index", { id: cat.id }),
                        class: "bg-white p-5"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "text-2xl font-extrabold flex" }, toDisplayString(cat.name), 1),
                          createVNode("div", { class: "flex" }, [
                            createVNode("img", {
                              class: "object-fill",
                              src: `images/categories/${cat.id}.png`,
                              alt: ""
                            }, null, 8, ["src"])
                          ]),
                          createVNode("div", { class: "pt-3 -mb-2 text-teal-800 font-bold hover:underline hover:text-red-400 cursor-pointer" }, " See More ")
                        ]),
                        _: 2
                      }, 1032, ["href"])
                    ]);
                  }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
