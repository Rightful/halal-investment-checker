/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { defineComponent, ref } from "vue";
import StockChecker from "@/components/StockChecker.vue";
import EtfChecker from "@/components/EtfChecker.vue";
import CryptoChecker from "@/components/CryptoChecker.vue";
export default defineComponent({
    name: "HomeView",
    components: {
        StockChecker,
        EtfChecker,
        CryptoChecker,
    },
    setup() {
        const activeTab = ref("stocks");
        return { activeTab };
    },
});
debugger; /* PartiallyEnd: #3632/script.vue */
const __VLS_ctx = {};
const __VLS_componentsOption = {
    StockChecker,
    EtfChecker,
    CryptoChecker,
};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['v-tab']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-section']} */ ;
/** @type {__VLS_StyleScopedClasses['gradient-text']} */ ;
/** @type {__VLS_StyleScopedClasses['v-tab']} */ ;
/** @type {__VLS_StyleScopedClasses['gradient-text']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "home" },
});
const __VLS_0 = {}.VContainer;
/** @type {[typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    fluid: true,
}));
const __VLS_2 = __VLS_1({
    fluid: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_3.slots.default;
const __VLS_4 = {}.VRow;
/** @type {[typeof __VLS_components.VRow, typeof __VLS_components.vRow, typeof __VLS_components.VRow, typeof __VLS_components.vRow, ]} */ ;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
    ...{ class: "hero-section" },
}));
const __VLS_6 = __VLS_5({
    ...{ class: "hero-section" },
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
__VLS_7.slots.default;
const __VLS_8 = {}.VCol;
/** @type {[typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
    cols: "12",
    ...{ class: "text-center" },
}));
const __VLS_10 = __VLS_9({
    cols: "12",
    ...{ class: "text-center" },
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
__VLS_11.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
    ...{ class: "text-h2 font-weight-bold gradient-text mb-4" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "text-h6 text-medium-emphasis mb-6" },
});
var __VLS_11;
var __VLS_7;
const __VLS_12 = {}.VRow;
/** @type {[typeof __VLS_components.VRow, typeof __VLS_components.vRow, typeof __VLS_components.VRow, typeof __VLS_components.vRow, ]} */ ;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
__VLS_15.slots.default;
const __VLS_16 = {}.VCol;
/** @type {[typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ]} */ ;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({
    cols: "12",
    md: "10",
    offsetMd: "1",
}));
const __VLS_18 = __VLS_17({
    cols: "12",
    md: "10",
    offsetMd: "1",
}, ...__VLS_functionalComponentArgsRest(__VLS_17));
__VLS_19.slots.default;
const __VLS_20 = {}.VCard;
/** @type {[typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ]} */ ;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
    ...{ class: "pa-6" },
    elevation: "3",
    rounded: "lg",
}));
const __VLS_22 = __VLS_21({
    ...{ class: "pa-6" },
    elevation: "3",
    rounded: "lg",
}, ...__VLS_functionalComponentArgsRest(__VLS_21));
__VLS_23.slots.default;
const __VLS_24 = {}.VTabs;
/** @type {[typeof __VLS_components.VTabs, typeof __VLS_components.vTabs, typeof __VLS_components.VTabs, typeof __VLS_components.vTabs, ]} */ ;
// @ts-ignore
const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({
    modelValue: (__VLS_ctx.activeTab),
    ...{ class: "custom-tabs" },
    sliderColor: "primary",
    centered: true,
}));
const __VLS_26 = __VLS_25({
    modelValue: (__VLS_ctx.activeTab),
    ...{ class: "custom-tabs" },
    sliderColor: "primary",
    centered: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_25));
__VLS_27.slots.default;
const __VLS_28 = {}.VTab;
/** @type {[typeof __VLS_components.VTab, typeof __VLS_components.vTab, typeof __VLS_components.VTab, typeof __VLS_components.vTab, ]} */ ;
// @ts-ignore
const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({
    value: "stocks",
    ...{ class: "text-h6" },
}));
const __VLS_30 = __VLS_29({
    value: "stocks",
    ...{ class: "text-h6" },
}, ...__VLS_functionalComponentArgsRest(__VLS_29));
__VLS_31.slots.default;
const __VLS_32 = {}.VIcon;
/** @type {[typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ]} */ ;
// @ts-ignore
const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({
    start: true,
    ...{ class: "mr-2" },
}));
const __VLS_34 = __VLS_33({
    start: true,
    ...{ class: "mr-2" },
}, ...__VLS_functionalComponentArgsRest(__VLS_33));
__VLS_35.slots.default;
var __VLS_35;
var __VLS_31;
const __VLS_36 = {}.VTab;
/** @type {[typeof __VLS_components.VTab, typeof __VLS_components.vTab, typeof __VLS_components.VTab, typeof __VLS_components.vTab, ]} */ ;
// @ts-ignore
const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({
    value: "etf",
    ...{ class: "text-h6" },
}));
const __VLS_38 = __VLS_37({
    value: "etf",
    ...{ class: "text-h6" },
}, ...__VLS_functionalComponentArgsRest(__VLS_37));
__VLS_39.slots.default;
const __VLS_40 = {}.VIcon;
/** @type {[typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ]} */ ;
// @ts-ignore
const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({
    start: true,
    ...{ class: "mr-2" },
}));
const __VLS_42 = __VLS_41({
    start: true,
    ...{ class: "mr-2" },
}, ...__VLS_functionalComponentArgsRest(__VLS_41));
__VLS_43.slots.default;
var __VLS_43;
var __VLS_39;
const __VLS_44 = {}.VTab;
/** @type {[typeof __VLS_components.VTab, typeof __VLS_components.vTab, typeof __VLS_components.VTab, typeof __VLS_components.vTab, ]} */ ;
// @ts-ignore
const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({
    value: "crypto",
    ...{ class: "text-h6" },
}));
const __VLS_46 = __VLS_45({
    value: "crypto",
    ...{ class: "text-h6" },
}, ...__VLS_functionalComponentArgsRest(__VLS_45));
__VLS_47.slots.default;
const __VLS_48 = {}.VIcon;
/** @type {[typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ]} */ ;
// @ts-ignore
const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({
    start: true,
    ...{ class: "mr-2" },
}));
const __VLS_50 = __VLS_49({
    start: true,
    ...{ class: "mr-2" },
}, ...__VLS_functionalComponentArgsRest(__VLS_49));
__VLS_51.slots.default;
var __VLS_51;
var __VLS_47;
var __VLS_27;
const __VLS_52 = {}.VWindow;
/** @type {[typeof __VLS_components.VWindow, typeof __VLS_components.vWindow, typeof __VLS_components.VWindow, typeof __VLS_components.vWindow, ]} */ ;
// @ts-ignore
const __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52({
    modelValue: (__VLS_ctx.activeTab),
    ...{ class: "mt-6" },
}));
const __VLS_54 = __VLS_53({
    modelValue: (__VLS_ctx.activeTab),
    ...{ class: "mt-6" },
}, ...__VLS_functionalComponentArgsRest(__VLS_53));
__VLS_55.slots.default;
const __VLS_56 = {}.VWindowItem;
/** @type {[typeof __VLS_components.VWindowItem, typeof __VLS_components.vWindowItem, typeof __VLS_components.VWindowItem, typeof __VLS_components.vWindowItem, ]} */ ;
// @ts-ignore
const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({
    value: "stocks",
}));
const __VLS_58 = __VLS_57({
    value: "stocks",
}, ...__VLS_functionalComponentArgsRest(__VLS_57));
__VLS_59.slots.default;
const __VLS_60 = {}.StockChecker;
/** @type {[typeof __VLS_components.StockChecker, typeof __VLS_components.stockChecker, ]} */ ;
// @ts-ignore
const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({}));
const __VLS_62 = __VLS_61({}, ...__VLS_functionalComponentArgsRest(__VLS_61));
var __VLS_59;
const __VLS_64 = {}.VWindowItem;
/** @type {[typeof __VLS_components.VWindowItem, typeof __VLS_components.vWindowItem, typeof __VLS_components.VWindowItem, typeof __VLS_components.vWindowItem, ]} */ ;
// @ts-ignore
const __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64({
    value: "etf",
}));
const __VLS_66 = __VLS_65({
    value: "etf",
}, ...__VLS_functionalComponentArgsRest(__VLS_65));
__VLS_67.slots.default;
const __VLS_68 = {}.EtfChecker;
/** @type {[typeof __VLS_components.EtfChecker, typeof __VLS_components.etfChecker, ]} */ ;
// @ts-ignore
const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({}));
const __VLS_70 = __VLS_69({}, ...__VLS_functionalComponentArgsRest(__VLS_69));
var __VLS_67;
const __VLS_72 = {}.VWindowItem;
/** @type {[typeof __VLS_components.VWindowItem, typeof __VLS_components.vWindowItem, typeof __VLS_components.VWindowItem, typeof __VLS_components.vWindowItem, ]} */ ;
// @ts-ignore
const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({
    value: "crypto",
}));
const __VLS_74 = __VLS_73({
    value: "crypto",
}, ...__VLS_functionalComponentArgsRest(__VLS_73));
__VLS_75.slots.default;
const __VLS_76 = {}.CryptoChecker;
/** @type {[typeof __VLS_components.CryptoChecker, typeof __VLS_components.cryptoChecker, ]} */ ;
// @ts-ignore
const __VLS_77 = __VLS_asFunctionalComponent(__VLS_76, new __VLS_76({}));
const __VLS_78 = __VLS_77({}, ...__VLS_functionalComponentArgsRest(__VLS_77));
var __VLS_75;
var __VLS_55;
var __VLS_23;
var __VLS_19;
var __VLS_15;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['home']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-section']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h2']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['gradient-text']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-medium-emphasis']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
/** @type {__VLS_StyleScopedClasses['pa-6']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-tabs']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h6']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h6']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h6']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-6']} */ ;
var __VLS_dollars;
let __VLS_self;
