import { unref, withCtx, createVNode, withModifiers, withDirectives, vModelSelect, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-0a14f070.mjs";
import { useForm, usePage, Head } from "@inertiajs/inertia-vue3";
import "./Plus-48a667a0.mjs";
import { _ as _sfc_main$2, a as _sfc_main$3 } from "./TextInput-8a724042.mjs";
import "pinia";
const _sfc_main = {
  __name: "Add",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      country: "United Kingdom",
      first_name: usePage().props.value.auth.user.first_name,
      last_name: usePage().props.value.auth.user.last_name,
      addr1: "",
      addr2: "",
      city: "",
      postcode: ""
    });
    const submit = () => {
      form.post(route("address_options.store"), {
        onFinish: () => route("address.index")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Address" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mt-8"${_scopeId}></div><div class="w-[500px] mx-auto text-2xl font-extrabold"${_scopeId}><div${_scopeId}>Add a new address</div><form${_scopeId}><div class="text-[15px] -mb-1.5 font-extrabold"${_scopeId}>Country</div><select class="w-full border-gray-300 rounded-lg shadow-md py-1 bg-gray-200 hover:bg-gray-300 cursor-pointer focus:border-orange-400 focus:ring-orange-400" name="country"${_scopeId}><option selected value="United Kingdom"${_scopeId}>United Kingdom</option><option value="United States"${_scopeId}>United States</option><option value="Germany"${_scopeId}>Germany</option><option value="France"${_scopeId}>France</option></select><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              class: "-mb-1.5",
              value: "First name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              modelValue: unref(form).first_name,
              "onUpdate:modelValue": ($event) => unref(form).first_name = $event,
              type: "text",
              class: "mt-1 block w-full",
              required: ""
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              class: "-mb-1.5",
              value: "Last name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              modelValue: unref(form).last_name,
              "onUpdate:modelValue": ($event) => unref(form).last_name = $event,
              type: "text",
              class: "mt-1 block w-full",
              required: ""
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              class: "-mb-1.5",
              value: "Address"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              type: "text",
              modelValue: unref(form).addr1,
              "onUpdate:modelValue": ($event) => unref(form).addr1 = $event,
              class: "mt-1 block w-full",
              required: "",
              placeholder: "Address line 1"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              type: "text",
              modelValue: unref(form).addr2,
              "onUpdate:modelValue": ($event) => unref(form).addr2 = $event,
              class: "mt-1 block w-full",
              required: "",
              placeholder: "Address line 2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-3"${_scopeId}><div class="flex gap-2"${_scopeId}><div class="w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              class: "-mb-1.5",
              value: "City"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              type: "text",
              modelValue: unref(form).city,
              "onUpdate:modelValue": ($event) => unref(form).city = $event,
              class: "mt-1 block w-full",
              required: "",
              placeholder: "City"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              class: "-mb-1.5",
              value: "Postcode"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              type: "text",
              modelValue: unref(form).postcode,
              "onUpdate:modelValue": ($event) => unref(form).postcode = $event,
              class: "mt-1 block w-full",
              required: "",
              placeholder: "Postcode"
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div><div class="mt-6"${_scopeId}><button class="bg-yellow-400 px-3 font-bold text-[14px] rounded-lg shadow-sm cursor-pointer"${_scopeId}> Add address </button></div></form></div>`);
          } else {
            return [
              createVNode("div", { class: "mt-8" }),
              createVNode("div", { class: "w-[500px] mx-auto text-2xl font-extrabold" }, [
                createVNode("div", null, "Add a new address"),
                createVNode("form", {
                  onSubmit: withModifiers(submit, ["prevent"])
                }, [
                  createVNode("div", { class: "text-[15px] -mb-1.5 font-extrabold" }, "Country"),
                  withDirectives(createVNode("select", {
                    "onUpdate:modelValue": ($event) => unref(form).country = $event,
                    class: "w-full border-gray-300 rounded-lg shadow-md py-1 bg-gray-200 hover:bg-gray-300 cursor-pointer focus:border-orange-400 focus:ring-orange-400",
                    name: "country"
                  }, [
                    createVNode("option", {
                      selected: "",
                      value: "United Kingdom"
                    }, "United Kingdom"),
                    createVNode("option", { value: "United States" }, "United States"),
                    createVNode("option", { value: "Germany" }, "Germany"),
                    createVNode("option", { value: "France" }, "France")
                  ], 8, ["onUpdate:modelValue"]), [
                    [vModelSelect, unref(form).country]
                  ]),
                  createVNode("div", { class: "mt-4" }, [
                    createVNode(_sfc_main$2, {
                      class: "-mb-1.5",
                      value: "First name"
                    }),
                    createVNode(_sfc_main$3, {
                      modelValue: unref(form).first_name,
                      "onUpdate:modelValue": ($event) => unref(form).first_name = $event,
                      type: "text",
                      class: "mt-1 block w-full",
                      required: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "mt-3" }, [
                    createVNode(_sfc_main$2, {
                      class: "-mb-1.5",
                      value: "Last name"
                    }),
                    createVNode(_sfc_main$3, {
                      modelValue: unref(form).last_name,
                      "onUpdate:modelValue": ($event) => unref(form).last_name = $event,
                      type: "text",
                      class: "mt-1 block w-full",
                      required: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "mt-3" }, [
                    createVNode(_sfc_main$2, {
                      class: "-mb-1.5",
                      value: "Address"
                    }),
                    createVNode(_sfc_main$3, {
                      type: "text",
                      modelValue: unref(form).addr1,
                      "onUpdate:modelValue": ($event) => unref(form).addr1 = $event,
                      class: "mt-1 block w-full",
                      required: "",
                      placeholder: "Address line 1"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_sfc_main$3, {
                      type: "text",
                      modelValue: unref(form).addr2,
                      "onUpdate:modelValue": ($event) => unref(form).addr2 = $event,
                      class: "mt-1 block w-full",
                      required: "",
                      placeholder: "Address line 2"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "mt-3" }, [
                    createVNode("div", { class: "flex gap-2" }, [
                      createVNode("div", { class: "w-full" }, [
                        createVNode(_sfc_main$2, {
                          class: "-mb-1.5",
                          value: "City"
                        }),
                        createVNode(_sfc_main$3, {
                          type: "text",
                          modelValue: unref(form).city,
                          "onUpdate:modelValue": ($event) => unref(form).city = $event,
                          class: "mt-1 block w-full",
                          required: "",
                          placeholder: "City"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "w-full" }, [
                        createVNode(_sfc_main$2, {
                          class: "-mb-1.5",
                          value: "Postcode"
                        }),
                        createVNode(_sfc_main$3, {
                          type: "text",
                          modelValue: unref(form).postcode,
                          "onUpdate:modelValue": ($event) => unref(form).postcode = $event,
                          class: "mt-1 block w-full",
                          required: "",
                          placeholder: "Postcode"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "mt-6" }, [
                    createVNode("button", { class: "bg-yellow-400 px-3 font-bold text-[14px] rounded-lg shadow-sm cursor-pointer" }, " Add address ")
                  ])
                ], 40, ["onSubmit"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Address/Add.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
