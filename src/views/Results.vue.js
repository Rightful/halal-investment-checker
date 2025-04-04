/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { defineComponent, computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { api } from '@/services/api';
export default defineComponent({
    name: 'ResultsView',
    setup() {
        const route = useRoute();
        const result = ref(null);
        const getScoreColor = computed(() => {
            if (!result.value)
                return 'grey';
            return result.value.score >= 70 ? 'success' :
                result.value.score >= 50 ? 'warning' : 'error';
        });
        const formatCriteriaName = (name) => {
            return name.replace(/([A-Z])/g, ' $1').toLowerCase();
        };
        onMounted(async () => {
            const ticker = route.params.ticker;
            result.value = await api.checkInvestment(ticker);
        });
        return {
            result,
            getScoreColor,
            formatCriteriaName
        };
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
const __VLS_0 = {}.VContainer;
/** @type {[typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_4 = {};
__VLS_3.slots.default;
if (__VLS_ctx.result) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "results" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
        ...{ class: "text-h4 mb-6" },
    });
    const __VLS_5 = {}.VCard;
    /** @type {[typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ]} */ ;
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
        ...{ class: "mb-6" },
    }));
    const __VLS_7 = __VLS_6({
        ...{ class: "mb-6" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_6));
    __VLS_8.slots.default;
    const __VLS_9 = {}.VCardTitle;
    /** @type {[typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, ]} */ ;
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({}));
    const __VLS_11 = __VLS_10({}, ...__VLS_functionalComponentArgsRest(__VLS_10));
    __VLS_12.slots.default;
    var __VLS_12;
    const __VLS_13 = {}.VCardText;
    /** @type {[typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, ]} */ ;
    // @ts-ignore
    const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({}));
    const __VLS_15 = __VLS_14({}, ...__VLS_functionalComponentArgsRest(__VLS_14));
    __VLS_16.slots.default;
    const __VLS_17 = {}.VProgressCircular;
    /** @type {[typeof __VLS_components.VProgressCircular, typeof __VLS_components.vProgressCircular, typeof __VLS_components.VProgressCircular, typeof __VLS_components.vProgressCircular, ]} */ ;
    // @ts-ignore
    const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({
        modelValue: (__VLS_ctx.result.score),
        color: (__VLS_ctx.getScoreColor),
        size: "100",
        width: "10",
    }));
    const __VLS_19 = __VLS_18({
        modelValue: (__VLS_ctx.result.score),
        color: (__VLS_ctx.getScoreColor),
        size: "100",
        width: "10",
    }, ...__VLS_functionalComponentArgsRest(__VLS_18));
    __VLS_20.slots.default;
    (__VLS_ctx.result.score);
    var __VLS_20;
    var __VLS_16;
    var __VLS_8;
    const __VLS_21 = {}.VCard;
    /** @type {[typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ]} */ ;
    // @ts-ignore
    const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({
        ...{ class: "mb-6" },
    }));
    const __VLS_23 = __VLS_22({
        ...{ class: "mb-6" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_22));
    __VLS_24.slots.default;
    const __VLS_25 = {}.VCardTitle;
    /** @type {[typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, ]} */ ;
    // @ts-ignore
    const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({}));
    const __VLS_27 = __VLS_26({}, ...__VLS_functionalComponentArgsRest(__VLS_26));
    __VLS_28.slots.default;
    var __VLS_28;
    const __VLS_29 = {}.VCardText;
    /** @type {[typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, ]} */ ;
    // @ts-ignore
    const __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, new __VLS_29({}));
    const __VLS_31 = __VLS_30({}, ...__VLS_functionalComponentArgsRest(__VLS_30));
    __VLS_32.slots.default;
    const __VLS_33 = {}.VList;
    /** @type {[typeof __VLS_components.VList, typeof __VLS_components.vList, typeof __VLS_components.VList, typeof __VLS_components.vList, ]} */ ;
    // @ts-ignore
    const __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33({}));
    const __VLS_35 = __VLS_34({}, ...__VLS_functionalComponentArgsRest(__VLS_34));
    __VLS_36.slots.default;
    for (const [value, key] of __VLS_getVForSourceType((__VLS_ctx.result.criteria))) {
        const __VLS_37 = {}.VListItem;
        /** @type {[typeof __VLS_components.VListItem, typeof __VLS_components.vListItem, typeof __VLS_components.VListItem, typeof __VLS_components.vListItem, ]} */ ;
        // @ts-ignore
        const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({
            key: (key),
        }));
        const __VLS_39 = __VLS_38({
            key: (key),
        }, ...__VLS_functionalComponentArgsRest(__VLS_38));
        __VLS_40.slots.default;
        const __VLS_41 = {}.VListItemTitle;
        /** @type {[typeof __VLS_components.VListItemTitle, typeof __VLS_components.vListItemTitle, typeof __VLS_components.VListItemTitle, typeof __VLS_components.vListItemTitle, ]} */ ;
        // @ts-ignore
        const __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, new __VLS_41({}));
        const __VLS_43 = __VLS_42({}, ...__VLS_functionalComponentArgsRest(__VLS_42));
        __VLS_44.slots.default;
        (__VLS_ctx.formatCriteriaName(key));
        var __VLS_44;
        const __VLS_45 = {}.VListItemAction;
        /** @type {[typeof __VLS_components.VListItemAction, typeof __VLS_components.vListItemAction, typeof __VLS_components.VListItemAction, typeof __VLS_components.vListItemAction, ]} */ ;
        // @ts-ignore
        const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({}));
        const __VLS_47 = __VLS_46({}, ...__VLS_functionalComponentArgsRest(__VLS_46));
        __VLS_48.slots.default;
        const __VLS_49 = {}.VIcon;
        /** @type {[typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ]} */ ;
        // @ts-ignore
        const __VLS_50 = __VLS_asFunctionalComponent(__VLS_49, new __VLS_49({
            color: (value ? 'success' : 'error'),
        }));
        const __VLS_51 = __VLS_50({
            color: (value ? 'success' : 'error'),
        }, ...__VLS_functionalComponentArgsRest(__VLS_50));
        __VLS_52.slots.default;
        (value ? 'mdi-check' : 'mdi-close');
        var __VLS_52;
        var __VLS_48;
        var __VLS_40;
    }
    var __VLS_36;
    var __VLS_32;
    var __VLS_24;
    if (__VLS_ctx.result.recommendations.length) {
        const __VLS_53 = {}.VCard;
        /** @type {[typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ]} */ ;
        // @ts-ignore
        const __VLS_54 = __VLS_asFunctionalComponent(__VLS_53, new __VLS_53({}));
        const __VLS_55 = __VLS_54({}, ...__VLS_functionalComponentArgsRest(__VLS_54));
        __VLS_56.slots.default;
        const __VLS_57 = {}.VCardTitle;
        /** @type {[typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, ]} */ ;
        // @ts-ignore
        const __VLS_58 = __VLS_asFunctionalComponent(__VLS_57, new __VLS_57({}));
        const __VLS_59 = __VLS_58({}, ...__VLS_functionalComponentArgsRest(__VLS_58));
        __VLS_60.slots.default;
        var __VLS_60;
        const __VLS_61 = {}.VCardText;
        /** @type {[typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, ]} */ ;
        // @ts-ignore
        const __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61({}));
        const __VLS_63 = __VLS_62({}, ...__VLS_functionalComponentArgsRest(__VLS_62));
        __VLS_64.slots.default;
        const __VLS_65 = {}.VList;
        /** @type {[typeof __VLS_components.VList, typeof __VLS_components.vList, typeof __VLS_components.VList, typeof __VLS_components.vList, ]} */ ;
        // @ts-ignore
        const __VLS_66 = __VLS_asFunctionalComponent(__VLS_65, new __VLS_65({}));
        const __VLS_67 = __VLS_66({}, ...__VLS_functionalComponentArgsRest(__VLS_66));
        __VLS_68.slots.default;
        for (const [rec, index] of __VLS_getVForSourceType((__VLS_ctx.result.recommendations))) {
            const __VLS_69 = {}.VListItem;
            /** @type {[typeof __VLS_components.VListItem, typeof __VLS_components.vListItem, typeof __VLS_components.VListItem, typeof __VLS_components.vListItem, ]} */ ;
            // @ts-ignore
            const __VLS_70 = __VLS_asFunctionalComponent(__VLS_69, new __VLS_69({
                key: (index),
            }));
            const __VLS_71 = __VLS_70({
                key: (index),
            }, ...__VLS_functionalComponentArgsRest(__VLS_70));
            __VLS_72.slots.default;
            const __VLS_73 = {}.VListItemTitle;
            /** @type {[typeof __VLS_components.VListItemTitle, typeof __VLS_components.vListItemTitle, typeof __VLS_components.VListItemTitle, typeof __VLS_components.vListItemTitle, ]} */ ;
            // @ts-ignore
            const __VLS_74 = __VLS_asFunctionalComponent(__VLS_73, new __VLS_73({}));
            const __VLS_75 = __VLS_74({}, ...__VLS_functionalComponentArgsRest(__VLS_74));
            __VLS_76.slots.default;
            (rec);
            var __VLS_76;
            var __VLS_72;
        }
        var __VLS_68;
        var __VLS_64;
        var __VLS_56;
    }
}
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['results']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h4']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
var __VLS_dollars;
let __VLS_self;
