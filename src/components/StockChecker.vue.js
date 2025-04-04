/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { defineComponent, ref, computed } from "vue";
import { api } from "@/services/api";
export default defineComponent({
    name: "StockChecker",
    setup() {
        const ticker = ref("");
        const result = ref(null);
        const error = ref(null);
        const loading = ref(false);
        const isValid = ref(false);
        const scoreColor = computed(() => {
            if (!result.value)
                return 'grey';
            return result.value.score >= 70 ? 'success' :
                result.value.score >= 50 ? 'warning' : 'error';
        });
        const getCriteriaDescription = (key) => {
            const descriptions = {
                sectorCompliance: 'Business activities align with Islamic principles',
                debtCompliance: 'Debt ratio meets Shariah requirements (<33%)',
                activitiesCompliance: 'No involvement in non-permissible activities'
            };
            return descriptions[key] || '';
        };
        const getScoreDescription = (score) => {
            if (score >= 70)
                return 'This investment appears to be Shariah-compliant';
            if (score >= 50)
                return 'This investment requires further analysis';
            return 'This investment may not be Shariah-compliant';
        };
        const checkCompliance = async () => {
            if (!ticker.value)
                return;
            loading.value = true;
            error.value = null;
            try {
                result.value = await api.checkInvestment(ticker.value);
            }
            catch (err) {
                error.value = err instanceof Error ? err.message : 'An error occurred';
                console.error('Error checking stock compliance:', err);
            }
            finally {
                loading.value = false;
            }
        };
        const formatCriteriaName = (name) => {
            return name.replace(/([A-Z])/g, " $1")
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
        };
        return {
            ticker,
            result,
            error,
            loading,
            isValid,
            scoreColor,
            formatCriteriaName,
            checkCompliance,
            getCriteriaDescription,
            getScoreDescription,
        };
    },
});
debugger; /* PartiallyEnd: #3632/script.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['v-list-item']} */ ;
// CSS variable injection 
// CSS variable injection end 
const __VLS_0 = {}.VContainer;
/** @type {[typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    ...{ class: "stock-checker" },
}));
const __VLS_2 = __VLS_1({
    ...{ class: "stock-checker" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_4 = {};
__VLS_3.slots.default;
if (__VLS_ctx.error) {
    const __VLS_5 = {}.VAlert;
    /** @type {[typeof __VLS_components.VAlert, typeof __VLS_components.vAlert, typeof __VLS_components.VAlert, typeof __VLS_components.vAlert, ]} */ ;
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
        type: "error",
        ...{ class: "mb-4" },
        closable: true,
    }));
    const __VLS_7 = __VLS_6({
        type: "error",
        ...{ class: "mb-4" },
        closable: true,
    }, ...__VLS_functionalComponentArgsRest(__VLS_6));
    __VLS_8.slots.default;
    (__VLS_ctx.error);
    var __VLS_8;
}
const __VLS_9 = {}.VCard;
/** @type {[typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ]} */ ;
// @ts-ignore
const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({
    ...{ class: "pa-4" },
}));
const __VLS_11 = __VLS_10({
    ...{ class: "pa-4" },
}, ...__VLS_functionalComponentArgsRest(__VLS_10));
__VLS_12.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
    ...{ class: "text-h5 mb-4" },
});
const __VLS_13 = {}.VForm;
/** @type {[typeof __VLS_components.VForm, typeof __VLS_components.vForm, typeof __VLS_components.VForm, typeof __VLS_components.vForm, ]} */ ;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({
    ...{ 'onSubmit': {} },
    modelValue: (__VLS_ctx.isValid),
}));
const __VLS_15 = __VLS_14({
    ...{ 'onSubmit': {} },
    modelValue: (__VLS_ctx.isValid),
}, ...__VLS_functionalComponentArgsRest(__VLS_14));
let __VLS_17;
let __VLS_18;
let __VLS_19;
const __VLS_20 = {
    onSubmit: (__VLS_ctx.checkCompliance)
};
__VLS_16.slots.default;
const __VLS_21 = {}.VTextField;
/** @type {[typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ]} */ ;
// @ts-ignore
const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({
    ...{ 'onKeyup': {} },
    modelValue: (__VLS_ctx.ticker),
    label: "Enter stock ticker (e.g. AAPL)",
    rules: ([(v) => !!v || 'Stock ticker is required']),
    ...{ class: "mb-4" },
    clearable: true,
    placeholder: "Enter stock symbol",
    hint: "Enter a valid stock symbol (e.g. AAPL, MSFT, GOOGL)",
    persistentHint: true,
}));
const __VLS_23 = __VLS_22({
    ...{ 'onKeyup': {} },
    modelValue: (__VLS_ctx.ticker),
    label: "Enter stock ticker (e.g. AAPL)",
    rules: ([(v) => !!v || 'Stock ticker is required']),
    ...{ class: "mb-4" },
    clearable: true,
    placeholder: "Enter stock symbol",
    hint: "Enter a valid stock symbol (e.g. AAPL, MSFT, GOOGL)",
    persistentHint: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_22));
let __VLS_25;
let __VLS_26;
let __VLS_27;
const __VLS_28 = {
    onKeyup: (__VLS_ctx.checkCompliance)
};
var __VLS_24;
const __VLS_29 = {}.VBtn;
/** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
// @ts-ignore
const __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, new __VLS_29({
    color: "primary",
    type: "submit",
    loading: (__VLS_ctx.loading),
    disabled: (!__VLS_ctx.isValid || !__VLS_ctx.ticker),
    block: true,
    ...{ class: "mb-4" },
}));
const __VLS_31 = __VLS_30({
    color: "primary",
    type: "submit",
    loading: (__VLS_ctx.loading),
    disabled: (!__VLS_ctx.isValid || !__VLS_ctx.ticker),
    block: true,
    ...{ class: "mb-4" },
}, ...__VLS_functionalComponentArgsRest(__VLS_30));
__VLS_32.slots.default;
const __VLS_33 = {}.VIcon;
/** @type {[typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ]} */ ;
// @ts-ignore
const __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33({
    start: true,
    ...{ class: "mr-2" },
}));
const __VLS_35 = __VLS_34({
    start: true,
    ...{ class: "mr-2" },
}, ...__VLS_functionalComponentArgsRest(__VLS_34));
__VLS_36.slots.default;
var __VLS_36;
var __VLS_32;
var __VLS_16;
const __VLS_37 = {}.VExpandTransition;
/** @type {[typeof __VLS_components.VExpandTransition, typeof __VLS_components.vExpandTransition, typeof __VLS_components.VExpandTransition, typeof __VLS_components.vExpandTransition, ]} */ ;
// @ts-ignore
const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({}));
const __VLS_39 = __VLS_38({}, ...__VLS_functionalComponentArgsRest(__VLS_38));
__VLS_40.slots.default;
if (__VLS_ctx.result) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "mt-6" },
    });
    const __VLS_41 = {}.VDivider;
    /** @type {[typeof __VLS_components.VDivider, typeof __VLS_components.vDivider, ]} */ ;
    // @ts-ignore
    const __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, new __VLS_41({
        ...{ class: "mb-4" },
    }));
    const __VLS_43 = __VLS_42({
        ...{ class: "mb-4" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_42));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "text-center mb-6" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
        ...{ class: "text-h6 mb-2" },
    });
    const __VLS_45 = {}.VChip;
    /** @type {[typeof __VLS_components.VChip, typeof __VLS_components.vChip, typeof __VLS_components.VChip, typeof __VLS_components.vChip, ]} */ ;
    // @ts-ignore
    const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({
        color: (__VLS_ctx.scoreColor),
        size: "x-large",
        ...{ class: "pa-4" },
        variant: "elevated",
    }));
    const __VLS_47 = __VLS_46({
        color: (__VLS_ctx.scoreColor),
        size: "x-large",
        ...{ class: "pa-4" },
        variant: "elevated",
    }, ...__VLS_functionalComponentArgsRest(__VLS_46));
    __VLS_48.slots.default;
    const __VLS_49 = {}.VIcon;
    /** @type {[typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ]} */ ;
    // @ts-ignore
    const __VLS_50 = __VLS_asFunctionalComponent(__VLS_49, new __VLS_49({
        start: true,
        ...{ class: "mr-2" },
    }));
    const __VLS_51 = __VLS_50({
        start: true,
        ...{ class: "mr-2" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_50));
    __VLS_52.slots.default;
    (__VLS_ctx.result.score >= 70 ? 'mdi-check-circle' : 'mdi-alert-circle');
    var __VLS_52;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "text-h6" },
    });
    (__VLS_ctx.result.score);
    var __VLS_48;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: "mt-2 text-caption" },
    });
    (__VLS_ctx.getScoreDescription(__VLS_ctx.result.score));
    const __VLS_53 = {}.VCard;
    /** @type {[typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ]} */ ;
    // @ts-ignore
    const __VLS_54 = __VLS_asFunctionalComponent(__VLS_53, new __VLS_53({
        ...{ class: "mb-4" },
        variant: "outlined",
    }));
    const __VLS_55 = __VLS_54({
        ...{ class: "mb-4" },
        variant: "outlined",
    }, ...__VLS_functionalComponentArgsRest(__VLS_54));
    __VLS_56.slots.default;
    const __VLS_57 = {}.VCardTitle;
    /** @type {[typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, ]} */ ;
    // @ts-ignore
    const __VLS_58 = __VLS_asFunctionalComponent(__VLS_57, new __VLS_57({
        ...{ class: "text-subtitle-1 pb-0" },
    }));
    const __VLS_59 = __VLS_58({
        ...{ class: "text-subtitle-1 pb-0" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_58));
    __VLS_60.slots.default;
    var __VLS_60;
    const __VLS_61 = {}.VList;
    /** @type {[typeof __VLS_components.VList, typeof __VLS_components.vList, typeof __VLS_components.VList, typeof __VLS_components.vList, ]} */ ;
    // @ts-ignore
    const __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61({}));
    const __VLS_63 = __VLS_62({}, ...__VLS_functionalComponentArgsRest(__VLS_62));
    __VLS_64.slots.default;
    for (const [value, key] of __VLS_getVForSourceType((__VLS_ctx.result.criteria))) {
        const __VLS_65 = {}.VListItem;
        /** @type {[typeof __VLS_components.VListItem, typeof __VLS_components.vListItem, typeof __VLS_components.VListItem, typeof __VLS_components.vListItem, ]} */ ;
        // @ts-ignore
        const __VLS_66 = __VLS_asFunctionalComponent(__VLS_65, new __VLS_65({
            key: (key),
            subtitle: (__VLS_ctx.getCriteriaDescription(key)),
            ...{ class: "py-2" },
        }));
        const __VLS_67 = __VLS_66({
            key: (key),
            subtitle: (__VLS_ctx.getCriteriaDescription(key)),
            ...{ class: "py-2" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_66));
        __VLS_68.slots.default;
        {
            const { prepend: __VLS_thisSlot } = __VLS_68.slots;
            const __VLS_69 = {}.VIcon;
            /** @type {[typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ]} */ ;
            // @ts-ignore
            const __VLS_70 = __VLS_asFunctionalComponent(__VLS_69, new __VLS_69({
                color: (value ? 'success' : 'error'),
                icon: (value ? 'mdi-check-circle' : 'mdi-close-circle'),
                size: "large",
            }));
            const __VLS_71 = __VLS_70({
                color: (value ? 'success' : 'error'),
                icon: (value ? 'mdi-check-circle' : 'mdi-close-circle'),
                size: "large",
            }, ...__VLS_functionalComponentArgsRest(__VLS_70));
        }
        const __VLS_73 = {}.VListItemTitle;
        /** @type {[typeof __VLS_components.VListItemTitle, typeof __VLS_components.vListItemTitle, typeof __VLS_components.VListItemTitle, typeof __VLS_components.vListItemTitle, ]} */ ;
        // @ts-ignore
        const __VLS_74 = __VLS_asFunctionalComponent(__VLS_73, new __VLS_73({}));
        const __VLS_75 = __VLS_74({}, ...__VLS_functionalComponentArgsRest(__VLS_74));
        __VLS_76.slots.default;
        (__VLS_ctx.formatCriteriaName(key));
        var __VLS_76;
        var __VLS_68;
    }
    var __VLS_64;
    var __VLS_56;
    if (__VLS_ctx.result.recommendations?.length) {
        const __VLS_77 = {}.VAlert;
        /** @type {[typeof __VLS_components.VAlert, typeof __VLS_components.vAlert, typeof __VLS_components.VAlert, typeof __VLS_components.vAlert, ]} */ ;
        // @ts-ignore
        const __VLS_78 = __VLS_asFunctionalComponent(__VLS_77, new __VLS_77({
            color: (__VLS_ctx.result.score >= 70 ? 'success' : 'info'),
            icon: (__VLS_ctx.result.score >= 70 ? 'mdi-check-circle' : 'mdi-information'),
            ...{ class: "mt-4" },
            variant: "tonal",
        }));
        const __VLS_79 = __VLS_78({
            color: (__VLS_ctx.result.score >= 70 ? 'success' : 'info'),
            icon: (__VLS_ctx.result.score >= 70 ? 'mdi-check-circle' : 'mdi-information'),
            ...{ class: "mt-4" },
            variant: "tonal",
        }, ...__VLS_functionalComponentArgsRest(__VLS_78));
        __VLS_80.slots.default;
        {
            const { title: __VLS_thisSlot } = __VLS_80.slots;
            (__VLS_ctx.result.score >= 70 ? 'Halal Investment Status' : 'Recommendations');
        }
        for (const [rec, index] of __VLS_getVForSourceType((__VLS_ctx.result.recommendations))) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                key: (index),
                ...{ class: "mt-1" },
            });
            (rec);
        }
        var __VLS_80;
    }
}
var __VLS_40;
var __VLS_12;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['stock-checker']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['pa-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h5']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-6']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h6']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['pa-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h6']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-caption']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-subtitle-1']} */ ;
/** @type {__VLS_StyleScopedClasses['pb-0']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
var __VLS_dollars;
let __VLS_self;
