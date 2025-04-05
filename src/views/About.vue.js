/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { defineComponent } from "vue";
export default defineComponent({
    name: "AboutView",
    setup() {
        const statistics = [
            { icon: "mdi-chart-box", value: "1000+", label: "Stocks Analyzed" },
            { icon: "mdi-percent", value: "99%", label: "Accuracy Rate" },
            { icon: "mdi-check-decagram", value: "50+", label: "ETFs Covered" },
        ];
        const features = [
            {
                icon: "mdi-flash",
                title: "Real-Time Analysis",
                description: "Get instant Shariah compliance checks using live market data",
            },
            {
                icon: "mdi-chart-arc",
                title: "Detailed Reports",
                description: "Comprehensive analysis of financial ratios and business activities",
            },
            {
                icon: "mdi-shield-check",
                title: "Strict Standards",
                description: "Adherence to globally recognized Islamic financial principles",
            },
            {
                icon: "mdi-bell",
                title: "Alerts",
                description: "Get notified when compliance status changes for your investments",
            },
            {
                icon: "mdi-trending-up",
                title: "Market Updates",
                description: "Regular updates on market changes affecting compliance status",
            },
            {
                icon: "mdi-book-open",
                title: "Educational Resources",
                description: "Learn about Islamic finance principles and investment strategies",
            },
        ];
        const criteriaItems = [
            {
                icon: "mdi-domain",
                title: "Business Activities",
                description: "Companies must not be involved in prohibited activities such as alcohol, gambling, or interest-based financial services.",
            },
            {
                icon: "mdi-chart-line",
                title: "Financial Ratios",
                description: "Debt ratio must not exceed 33%, and interest income should be less than 5% of total revenue.",
            },
            {
                icon: "mdi-cash-multiple",
                title: "Revenue Sources",
                description: "At least 95% of revenue must come from halal sources.",
            },
        ];
        const processSteps = [
            {
                icon: "mdi-text-box-search",
                title: "Enter Investment",
                description: "Input a stock symbol, ETF, or cryptocurrency",
            },
            {
                icon: "mdi-calculator",
                title: "Analysis",
                description: "Our system checks multiple Shariah compliance criteria",
            },
            {
                icon: "mdi-file-document-check",
                title: "Results",
                description: "Receive a detailed compliance report with recommendations",
            },
        ];
        return {
            statistics,
            features,
            criteriaItems,
            processSteps,
        };
    },
});
debugger; /* PartiallyEnd: #3632/script.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['stat-chip']} */ ;
/** @type {__VLS_StyleScopedClasses['stat-chip']} */ ;
/** @type {__VLS_StyleScopedClasses['stat-chip']} */ ;
/** @type {__VLS_StyleScopedClasses['stat-chip']} */ ;
/** @type {__VLS_StyleScopedClasses['gradient-bg']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h5']} */ ;
/** @type {__VLS_StyleScopedClasses['gradient-bg']} */ ;
/** @type {__VLS_StyleScopedClasses['gradient-bg']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h5']} */ ;
/** @type {__VLS_StyleScopedClasses['gradient-bg']} */ ;
/** @type {__VLS_StyleScopedClasses['v-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['gradient-bg']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h5']} */ ;
/** @type {__VLS_StyleScopedClasses['gradient-bg']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h5']} */ ;
/** @type {__VLS_StyleScopedClasses['gradient-bg']} */ ;
/** @type {__VLS_StyleScopedClasses['v-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['gradient-bg']} */ ;
/** @type {__VLS_StyleScopedClasses['mission-card']} */ ;
/** @type {__VLS_StyleScopedClasses['features-card']} */ ;
/** @type {__VLS_StyleScopedClasses['criteria-card']} */ ;
/** @type {__VLS_StyleScopedClasses['process-card']} */ ;
/** @type {__VLS_StyleScopedClasses['feature-card']} */ ;
/** @type {__VLS_StyleScopedClasses['criteria-item']} */ ;
/** @type {__VLS_StyleScopedClasses['criteria-item']} */ ;
/** @type {__VLS_StyleScopedClasses['criteria-item']} */ ;
/** @type {__VLS_StyleScopedClasses['criteria-item']} */ ;
/** @type {__VLS_StyleScopedClasses['criteria-item']} */ ;
/** @type {__VLS_StyleScopedClasses['criteria-item']} */ ;
/** @type {__VLS_StyleScopedClasses['v-list-item__content']} */ ;
/** @type {__VLS_StyleScopedClasses['process-card']} */ ;
/** @type {__VLS_StyleScopedClasses['timeline-card']} */ ;
/** @type {__VLS_StyleScopedClasses['timeline-card']} */ ;
/** @type {__VLS_StyleScopedClasses['stats-group']} */ ;
/** @type {__VLS_StyleScopedClasses['stat-chip']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-section']} */ ;
/** @type {__VLS_StyleScopedClasses['gradient-text']} */ ;
/** @type {__VLS_StyleScopedClasses['feature-card']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-section']} */ ;
/** @type {__VLS_StyleScopedClasses['gradient-text']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h6']} */ ;
/** @type {__VLS_StyleScopedClasses['stat-chip']} */ ;
/** @type {__VLS_StyleScopedClasses['stats-group']} */ ;
/** @type {__VLS_StyleScopedClasses['timeline-card']} */ ;
/** @type {__VLS_StyleScopedClasses['timeline-card']} */ ;
/** @type {__VLS_StyleScopedClasses['v-card-title']} */ ;
/** @type {__VLS_StyleScopedClasses['timeline-card']} */ ;
/** @type {__VLS_StyleScopedClasses['v-card-text']} */ ;
/** @type {__VLS_StyleScopedClasses['process-card']} */ ;
/** @type {__VLS_StyleScopedClasses['v-timeline']} */ ;
/** @type {__VLS_StyleScopedClasses['process-icon']} */ ;
// CSS variable injection 
// CSS variable injection end 
const __VLS_0 = {}.VContainer;
/** @type {[typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    ...{ class: "about" },
    fluid: true,
}));
const __VLS_2 = __VLS_1({
    ...{ class: "about" },
    fluid: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_4 = {};
__VLS_3.slots.default;
const __VLS_5 = {}.VRow;
/** @type {[typeof __VLS_components.VRow, typeof __VLS_components.vRow, typeof __VLS_components.VRow, typeof __VLS_components.vRow, ]} */ ;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
    ...{ class: "hero-section" },
}));
const __VLS_7 = __VLS_6({
    ...{ class: "hero-section" },
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
__VLS_8.slots.default;
const __VLS_9 = {}.VCol;
/** @type {[typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ]} */ ;
// @ts-ignore
const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({
    cols: "12",
    ...{ class: "text-center" },
}));
const __VLS_11 = __VLS_10({
    cols: "12",
    ...{ class: "text-center" },
}, ...__VLS_functionalComponentArgsRest(__VLS_10));
__VLS_12.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
    ...{ class: "text-h2 font-weight-bold gradient-text mb-4" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "text-h6 text-medium-emphasis mb-6" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.br)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "stats-container" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "stats-group" },
});
for (const [stat, index] of __VLS_getVForSourceType((__VLS_ctx.statistics))) {
    const __VLS_13 = {}.VChip;
    /** @type {[typeof __VLS_components.VChip, typeof __VLS_components.vChip, typeof __VLS_components.VChip, typeof __VLS_components.vChip, ]} */ ;
    // @ts-ignore
    const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({
        key: (index),
        size: "x-large",
        ...{ class: "stat-chip" },
        color: "primary",
        variant: "elevated",
    }));
    const __VLS_15 = __VLS_14({
        key: (index),
        size: "x-large",
        ...{ class: "stat-chip" },
        color: "primary",
        variant: "elevated",
    }, ...__VLS_functionalComponentArgsRest(__VLS_14));
    __VLS_16.slots.default;
    const __VLS_17 = {}.VIcon;
    /** @type {[typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ]} */ ;
    // @ts-ignore
    const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({
        start: true,
        ...{ class: "stat-icon" },
    }));
    const __VLS_19 = __VLS_18({
        start: true,
        ...{ class: "stat-icon" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_18));
    __VLS_20.slots.default;
    (stat.icon);
    var __VLS_20;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "stat-content" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "font-weight-bold" },
    });
    (stat.value);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "text-caption" },
    });
    (stat.label);
    var __VLS_16;
}
var __VLS_12;
var __VLS_8;
const __VLS_21 = {}.VRow;
/** @type {[typeof __VLS_components.VRow, typeof __VLS_components.vRow, typeof __VLS_components.VRow, typeof __VLS_components.vRow, ]} */ ;
// @ts-ignore
const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({}));
const __VLS_23 = __VLS_22({}, ...__VLS_functionalComponentArgsRest(__VLS_22));
__VLS_24.slots.default;
const __VLS_25 = {}.VCol;
/** @type {[typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ]} */ ;
// @ts-ignore
const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({
    cols: "12",
    md: "10",
    offsetMd: "1",
}));
const __VLS_27 = __VLS_26({
    cols: "12",
    md: "10",
    offsetMd: "1",
}, ...__VLS_functionalComponentArgsRest(__VLS_26));
__VLS_28.slots.default;
const __VLS_29 = {}.VCard;
/** @type {[typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ]} */ ;
// @ts-ignore
const __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, new __VLS_29({
    ...{ class: "pa-6" },
    elevation: "3",
    rounded: "lg",
}));
const __VLS_31 = __VLS_30({
    ...{ class: "pa-6" },
    elevation: "3",
    rounded: "lg",
}, ...__VLS_functionalComponentArgsRest(__VLS_30));
__VLS_32.slots.default;
const __VLS_33 = {}.VCard;
/** @type {[typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ]} */ ;
// @ts-ignore
const __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33({
    ...{ class: "mb-8 mission-card" },
    variant: "outlined",
    rounded: "lg",
}));
const __VLS_35 = __VLS_34({
    ...{ class: "mb-8 mission-card" },
    variant: "outlined",
    rounded: "lg",
}, ...__VLS_functionalComponentArgsRest(__VLS_34));
__VLS_36.slots.default;
const __VLS_37 = {}.VCardTitle;
/** @type {[typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, ]} */ ;
// @ts-ignore
const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({
    ...{ class: "d-flex align-center gradient-bg" },
}));
const __VLS_39 = __VLS_38({
    ...{ class: "d-flex align-center gradient-bg" },
}, ...__VLS_functionalComponentArgsRest(__VLS_38));
__VLS_40.slots.default;
const __VLS_41 = {}.VIcon;
/** @type {[typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ]} */ ;
// @ts-ignore
const __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, new __VLS_41({
    color: "white",
    size: "32",
    ...{ class: "mr-3" },
}));
const __VLS_43 = __VLS_42({
    color: "white",
    size: "32",
    ...{ class: "mr-3" },
}, ...__VLS_functionalComponentArgsRest(__VLS_42));
__VLS_44.slots.default;
var __VLS_44;
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "text-h5" },
});
var __VLS_40;
const __VLS_45 = {}.VCardText;
/** @type {[typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, ]} */ ;
// @ts-ignore
const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({
    ...{ class: "pa-6" },
}));
const __VLS_47 = __VLS_46({
    ...{ class: "pa-6" },
}, ...__VLS_functionalComponentArgsRest(__VLS_46));
__VLS_48.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "text-body-1 text-justified" },
});
var __VLS_48;
var __VLS_36;
const __VLS_49 = {}.VCard;
/** @type {[typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ]} */ ;
// @ts-ignore
const __VLS_50 = __VLS_asFunctionalComponent(__VLS_49, new __VLS_49({
    ...{ class: "mb-8 features-card" },
    variant: "outlined",
    rounded: "lg",
}));
const __VLS_51 = __VLS_50({
    ...{ class: "mb-8 features-card" },
    variant: "outlined",
    rounded: "lg",
}, ...__VLS_functionalComponentArgsRest(__VLS_50));
__VLS_52.slots.default;
const __VLS_53 = {}.VCardTitle;
/** @type {[typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, ]} */ ;
// @ts-ignore
const __VLS_54 = __VLS_asFunctionalComponent(__VLS_53, new __VLS_53({
    ...{ class: "d-flex align-center gradient-bg" },
}));
const __VLS_55 = __VLS_54({
    ...{ class: "d-flex align-center gradient-bg" },
}, ...__VLS_functionalComponentArgsRest(__VLS_54));
__VLS_56.slots.default;
const __VLS_57 = {}.VIcon;
/** @type {[typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ]} */ ;
// @ts-ignore
const __VLS_58 = __VLS_asFunctionalComponent(__VLS_57, new __VLS_57({
    color: "white",
    size: "32",
    ...{ class: "mr-3" },
}));
const __VLS_59 = __VLS_58({
    color: "white",
    size: "32",
    ...{ class: "mr-3" },
}, ...__VLS_functionalComponentArgsRest(__VLS_58));
__VLS_60.slots.default;
var __VLS_60;
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "text-h5" },
});
var __VLS_56;
const __VLS_61 = {}.VContainer;
/** @type {[typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, ]} */ ;
// @ts-ignore
const __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61({}));
const __VLS_63 = __VLS_62({}, ...__VLS_functionalComponentArgsRest(__VLS_62));
__VLS_64.slots.default;
const __VLS_65 = {}.VRow;
/** @type {[typeof __VLS_components.VRow, typeof __VLS_components.vRow, typeof __VLS_components.VRow, typeof __VLS_components.vRow, ]} */ ;
// @ts-ignore
const __VLS_66 = __VLS_asFunctionalComponent(__VLS_65, new __VLS_65({}));
const __VLS_67 = __VLS_66({}, ...__VLS_functionalComponentArgsRest(__VLS_66));
__VLS_68.slots.default;
for (const [feature, index] of __VLS_getVForSourceType((__VLS_ctx.features))) {
    const __VLS_69 = {}.VCol;
    /** @type {[typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ]} */ ;
    // @ts-ignore
    const __VLS_70 = __VLS_asFunctionalComponent(__VLS_69, new __VLS_69({
        key: (index),
        cols: "12",
        sm: "6",
        md: "4",
    }));
    const __VLS_71 = __VLS_70({
        key: (index),
        cols: "12",
        sm: "6",
        md: "4",
    }, ...__VLS_functionalComponentArgsRest(__VLS_70));
    __VLS_72.slots.default;
    const __VLS_73 = {}.VCard;
    /** @type {[typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ]} */ ;
    // @ts-ignore
    const __VLS_74 = __VLS_asFunctionalComponent(__VLS_73, new __VLS_73({
        ...{ class: "feature-card h-100" },
        variant: "outlined",
    }));
    const __VLS_75 = __VLS_74({
        ...{ class: "feature-card h-100" },
        variant: "outlined",
    }, ...__VLS_functionalComponentArgsRest(__VLS_74));
    __VLS_76.slots.default;
    const __VLS_77 = {}.VCardText;
    /** @type {[typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, ]} */ ;
    // @ts-ignore
    const __VLS_78 = __VLS_asFunctionalComponent(__VLS_77, new __VLS_77({}));
    const __VLS_79 = __VLS_78({}, ...__VLS_functionalComponentArgsRest(__VLS_78));
    __VLS_80.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "d-flex align-center mb-4" },
    });
    const __VLS_81 = {}.VAvatar;
    /** @type {[typeof __VLS_components.VAvatar, typeof __VLS_components.vAvatar, typeof __VLS_components.VAvatar, typeof __VLS_components.vAvatar, ]} */ ;
    // @ts-ignore
    const __VLS_82 = __VLS_asFunctionalComponent(__VLS_81, new __VLS_81({
        color: "primary",
        size: "48",
        ...{ class: "feature-icon" },
    }));
    const __VLS_83 = __VLS_82({
        color: "primary",
        size: "48",
        ...{ class: "feature-icon" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_82));
    __VLS_84.slots.default;
    const __VLS_85 = {}.VIcon;
    /** @type {[typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ]} */ ;
    // @ts-ignore
    const __VLS_86 = __VLS_asFunctionalComponent(__VLS_85, new __VLS_85({
        color: "white",
        size: "24",
    }));
    const __VLS_87 = __VLS_86({
        color: "white",
        size: "24",
    }, ...__VLS_functionalComponentArgsRest(__VLS_86));
    __VLS_88.slots.default;
    (feature.icon);
    var __VLS_88;
    var __VLS_84;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
        ...{ class: "text-h6 ml-4" },
    });
    (feature.title);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: "text-body-2" },
    });
    (feature.description);
    var __VLS_80;
    var __VLS_76;
    var __VLS_72;
}
var __VLS_68;
var __VLS_64;
var __VLS_52;
const __VLS_89 = {}.VCard;
/** @type {[typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ]} */ ;
// @ts-ignore
const __VLS_90 = __VLS_asFunctionalComponent(__VLS_89, new __VLS_89({
    ...{ class: "mb-8 criteria-card" },
    variant: "outlined",
    rounded: "lg",
}));
const __VLS_91 = __VLS_90({
    ...{ class: "mb-8 criteria-card" },
    variant: "outlined",
    rounded: "lg",
}, ...__VLS_functionalComponentArgsRest(__VLS_90));
__VLS_92.slots.default;
const __VLS_93 = {}.VCardTitle;
/** @type {[typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, ]} */ ;
// @ts-ignore
const __VLS_94 = __VLS_asFunctionalComponent(__VLS_93, new __VLS_93({
    ...{ class: "d-flex align-center gradient-bg" },
}));
const __VLS_95 = __VLS_94({
    ...{ class: "d-flex align-center gradient-bg" },
}, ...__VLS_functionalComponentArgsRest(__VLS_94));
__VLS_96.slots.default;
const __VLS_97 = {}.VIcon;
/** @type {[typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ]} */ ;
// @ts-ignore
const __VLS_98 = __VLS_asFunctionalComponent(__VLS_97, new __VLS_97({
    color: "white",
    size: "32",
    ...{ class: "mr-3" },
}));
const __VLS_99 = __VLS_98({
    color: "white",
    size: "32",
    ...{ class: "mr-3" },
}, ...__VLS_functionalComponentArgsRest(__VLS_98));
__VLS_100.slots.default;
var __VLS_100;
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "text-h5" },
});
var __VLS_96;
const __VLS_101 = {}.VList;
/** @type {[typeof __VLS_components.VList, typeof __VLS_components.vList, typeof __VLS_components.VList, typeof __VLS_components.vList, ]} */ ;
// @ts-ignore
const __VLS_102 = __VLS_asFunctionalComponent(__VLS_101, new __VLS_101({
    ...{ class: "pa-4" },
}));
const __VLS_103 = __VLS_102({
    ...{ class: "pa-4" },
}, ...__VLS_functionalComponentArgsRest(__VLS_102));
__VLS_104.slots.default;
for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.criteriaItems))) {
    const __VLS_105 = {}.VListItem;
    /** @type {[typeof __VLS_components.VListItem, typeof __VLS_components.vListItem, typeof __VLS_components.VListItem, typeof __VLS_components.vListItem, ]} */ ;
    // @ts-ignore
    const __VLS_106 = __VLS_asFunctionalComponent(__VLS_105, new __VLS_105({
        key: (index),
        ...{ class: "my-2 criteria-item" },
        rounded: "lg",
    }));
    const __VLS_107 = __VLS_106({
        key: (index),
        ...{ class: "my-2 criteria-item" },
        rounded: "lg",
    }, ...__VLS_functionalComponentArgsRest(__VLS_106));
    __VLS_108.slots.default;
    {
        const { prepend: __VLS_thisSlot } = __VLS_108.slots;
        const __VLS_109 = {}.VAvatar;
        /** @type {[typeof __VLS_components.VAvatar, typeof __VLS_components.vAvatar, typeof __VLS_components.VAvatar, typeof __VLS_components.vAvatar, ]} */ ;
        // @ts-ignore
        const __VLS_110 = __VLS_asFunctionalComponent(__VLS_109, new __VLS_109({
            color: "primary",
            size: "52",
            ...{ class: "elevation-2" },
        }));
        const __VLS_111 = __VLS_110({
            color: "primary",
            size: "52",
            ...{ class: "elevation-2" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_110));
        __VLS_112.slots.default;
        const __VLS_113 = {}.VIcon;
        /** @type {[typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ]} */ ;
        // @ts-ignore
        const __VLS_114 = __VLS_asFunctionalComponent(__VLS_113, new __VLS_113({
            color: "white",
            size: "28",
        }));
        const __VLS_115 = __VLS_114({
            color: "white",
            size: "28",
        }, ...__VLS_functionalComponentArgsRest(__VLS_114));
        __VLS_116.slots.default;
        (item.icon);
        var __VLS_116;
        var __VLS_112;
    }
    const __VLS_117 = {}.VListItemTitle;
    /** @type {[typeof __VLS_components.VListItemTitle, typeof __VLS_components.vListItemTitle, typeof __VLS_components.VListItemTitle, typeof __VLS_components.vListItemTitle, ]} */ ;
    // @ts-ignore
    const __VLS_118 = __VLS_asFunctionalComponent(__VLS_117, new __VLS_117({
        ...{ class: "text-h6 mb-2" },
    }));
    const __VLS_119 = __VLS_118({
        ...{ class: "text-h6 mb-2" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_118));
    __VLS_120.slots.default;
    (item.title);
    var __VLS_120;
    const __VLS_121 = {}.VListItemSubtitle;
    /** @type {[typeof __VLS_components.VListItemSubtitle, typeof __VLS_components.vListItemSubtitle, typeof __VLS_components.VListItemSubtitle, typeof __VLS_components.vListItemSubtitle, ]} */ ;
    // @ts-ignore
    const __VLS_122 = __VLS_asFunctionalComponent(__VLS_121, new __VLS_121({
        ...{ class: "text-body-1" },
    }));
    const __VLS_123 = __VLS_122({
        ...{ class: "text-body-1" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_122));
    __VLS_124.slots.default;
    (item.description);
    var __VLS_124;
    var __VLS_108;
}
var __VLS_104;
var __VLS_92;
const __VLS_125 = {}.VCard;
/** @type {[typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ]} */ ;
// @ts-ignore
const __VLS_126 = __VLS_asFunctionalComponent(__VLS_125, new __VLS_125({
    ...{ class: "mb-8 process-card" },
    variant: "outlined",
    rounded: "lg",
}));
const __VLS_127 = __VLS_126({
    ...{ class: "mb-8 process-card" },
    variant: "outlined",
    rounded: "lg",
}, ...__VLS_functionalComponentArgsRest(__VLS_126));
__VLS_128.slots.default;
const __VLS_129 = {}.VCardTitle;
/** @type {[typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, ]} */ ;
// @ts-ignore
const __VLS_130 = __VLS_asFunctionalComponent(__VLS_129, new __VLS_129({
    ...{ class: "d-flex align-center gradient-bg" },
}));
const __VLS_131 = __VLS_130({
    ...{ class: "d-flex align-center gradient-bg" },
}, ...__VLS_functionalComponentArgsRest(__VLS_130));
__VLS_132.slots.default;
const __VLS_133 = {}.VIcon;
/** @type {[typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ]} */ ;
// @ts-ignore
const __VLS_134 = __VLS_asFunctionalComponent(__VLS_133, new __VLS_133({
    color: "white",
    size: "32",
    ...{ class: "mr-3" },
}));
const __VLS_135 = __VLS_134({
    color: "white",
    size: "32",
    ...{ class: "mr-3" },
}, ...__VLS_functionalComponentArgsRest(__VLS_134));
__VLS_136.slots.default;
var __VLS_136;
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "text-h5" },
});
var __VLS_132;
const __VLS_137 = {}.VCardText;
/** @type {[typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, ]} */ ;
// @ts-ignore
const __VLS_138 = __VLS_asFunctionalComponent(__VLS_137, new __VLS_137({}));
const __VLS_139 = __VLS_138({}, ...__VLS_functionalComponentArgsRest(__VLS_138));
__VLS_140.slots.default;
const __VLS_141 = {}.VTimeline;
/** @type {[typeof __VLS_components.VTimeline, typeof __VLS_components.vTimeline, typeof __VLS_components.VTimeline, typeof __VLS_components.vTimeline, ]} */ ;
// @ts-ignore
const __VLS_142 = __VLS_asFunctionalComponent(__VLS_141, new __VLS_141({
    align: "start",
    ...{ class: "pa-4" },
}));
const __VLS_143 = __VLS_142({
    align: "start",
    ...{ class: "pa-4" },
}, ...__VLS_functionalComponentArgsRest(__VLS_142));
__VLS_144.slots.default;
for (const [step, index] of __VLS_getVForSourceType((__VLS_ctx.processSteps))) {
    const __VLS_145 = {}.VTimelineItem;
    /** @type {[typeof __VLS_components.VTimelineItem, typeof __VLS_components.vTimelineItem, typeof __VLS_components.VTimelineItem, typeof __VLS_components.vTimelineItem, ]} */ ;
    // @ts-ignore
    const __VLS_146 = __VLS_asFunctionalComponent(__VLS_145, new __VLS_145({
        key: (index),
        dotColor: "primary",
        size: "small",
        fillDot: true,
    }));
    const __VLS_147 = __VLS_146({
        key: (index),
        dotColor: "primary",
        size: "small",
        fillDot: true,
    }, ...__VLS_functionalComponentArgsRest(__VLS_146));
    __VLS_148.slots.default;
    {
        const { icon: __VLS_thisSlot } = __VLS_148.slots;
        const __VLS_149 = {}.VAvatar;
        /** @type {[typeof __VLS_components.VAvatar, typeof __VLS_components.vAvatar, typeof __VLS_components.VAvatar, typeof __VLS_components.vAvatar, ]} */ ;
        // @ts-ignore
        const __VLS_150 = __VLS_asFunctionalComponent(__VLS_149, new __VLS_149({
            color: "primary",
            size: "42",
            ...{ class: "process-icon" },
        }));
        const __VLS_151 = __VLS_150({
            color: "primary",
            size: "42",
            ...{ class: "process-icon" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_150));
        __VLS_152.slots.default;
        const __VLS_153 = {}.VIcon;
        /** @type {[typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ]} */ ;
        // @ts-ignore
        const __VLS_154 = __VLS_asFunctionalComponent(__VLS_153, new __VLS_153({
            color: "white",
            size: "24",
        }));
        const __VLS_155 = __VLS_154({
            color: "white",
            size: "24",
        }, ...__VLS_functionalComponentArgsRest(__VLS_154));
        __VLS_156.slots.default;
        (step.icon);
        var __VLS_156;
        var __VLS_152;
    }
    const __VLS_157 = {}.VCard;
    /** @type {[typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ]} */ ;
    // @ts-ignore
    const __VLS_158 = __VLS_asFunctionalComponent(__VLS_157, new __VLS_157({
        variant: "outlined",
        ...{ class: "timeline-card" },
    }));
    const __VLS_159 = __VLS_158({
        variant: "outlined",
        ...{ class: "timeline-card" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_158));
    __VLS_160.slots.default;
    const __VLS_161 = {}.VCardTitle;
    /** @type {[typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, ]} */ ;
    // @ts-ignore
    const __VLS_162 = __VLS_asFunctionalComponent(__VLS_161, new __VLS_161({
        ...{ class: "text-h6 primary--text pb-2" },
    }));
    const __VLS_163 = __VLS_162({
        ...{ class: "text-h6 primary--text pb-2" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_162));
    __VLS_164.slots.default;
    (step.title);
    var __VLS_164;
    const __VLS_165 = {}.VCardText;
    /** @type {[typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, ]} */ ;
    // @ts-ignore
    const __VLS_166 = __VLS_asFunctionalComponent(__VLS_165, new __VLS_165({
        ...{ class: "text-body-1 pt-0" },
    }));
    const __VLS_167 = __VLS_166({
        ...{ class: "text-body-1 pt-0" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_166));
    __VLS_168.slots.default;
    (step.description);
    var __VLS_168;
    var __VLS_160;
    var __VLS_148;
}
var __VLS_144;
var __VLS_140;
var __VLS_128;
const __VLS_169 = {}.VAlert;
/** @type {[typeof __VLS_components.VAlert, typeof __VLS_components.vAlert, typeof __VLS_components.VAlert, typeof __VLS_components.vAlert, ]} */ ;
// @ts-ignore
const __VLS_170 = __VLS_asFunctionalComponent(__VLS_169, new __VLS_169({
    type: "info",
    ...{ class: "mb-4 disclaimer-alert" },
    variant: "tonal",
    border: "start",
    elevation: "2",
    rounded: "lg",
}));
const __VLS_171 = __VLS_170({
    type: "info",
    ...{ class: "mb-4 disclaimer-alert" },
    variant: "tonal",
    border: "start",
    elevation: "2",
    rounded: "lg",
}, ...__VLS_functionalComponentArgsRest(__VLS_170));
__VLS_172.slots.default;
{
    const { prepend: __VLS_thisSlot } = __VLS_172.slots;
    const __VLS_173 = {}.VAvatar;
    /** @type {[typeof __VLS_components.VAvatar, typeof __VLS_components.vAvatar, typeof __VLS_components.VAvatar, typeof __VLS_components.vAvatar, ]} */ ;
    // @ts-ignore
    const __VLS_174 = __VLS_asFunctionalComponent(__VLS_173, new __VLS_173({
        color: "info",
        size: "48",
        ...{ class: "elevation-1" },
    }));
    const __VLS_175 = __VLS_174({
        color: "info",
        size: "48",
        ...{ class: "elevation-1" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_174));
    __VLS_176.slots.default;
    const __VLS_177 = {}.VIcon;
    /** @type {[typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ]} */ ;
    // @ts-ignore
    const __VLS_178 = __VLS_asFunctionalComponent(__VLS_177, new __VLS_177({
        color: "white",
    }));
    const __VLS_179 = __VLS_178({
        color: "white",
    }, ...__VLS_functionalComponentArgsRest(__VLS_178));
    __VLS_180.slots.default;
    var __VLS_180;
    var __VLS_176;
}
{
    const { title: __VLS_thisSlot } = __VLS_172.slots;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "text-h6" },
    });
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "text-body-1 mt-2" },
});
var __VLS_172;
var __VLS_32;
var __VLS_28;
var __VLS_24;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['about']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-section']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h2']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['gradient-text']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-medium-emphasis']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
/** @type {__VLS_StyleScopedClasses['stats-container']} */ ;
/** @type {__VLS_StyleScopedClasses['stats-group']} */ ;
/** @type {__VLS_StyleScopedClasses['stat-chip']} */ ;
/** @type {__VLS_StyleScopedClasses['stat-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['stat-content']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-caption']} */ ;
/** @type {__VLS_StyleScopedClasses['pa-6']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-8']} */ ;
/** @type {__VLS_StyleScopedClasses['mission-card']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['align-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gradient-bg']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-3']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h5']} */ ;
/** @type {__VLS_StyleScopedClasses['pa-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-body-1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-justified']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-8']} */ ;
/** @type {__VLS_StyleScopedClasses['features-card']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['align-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gradient-bg']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-3']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h5']} */ ;
/** @type {__VLS_StyleScopedClasses['feature-card']} */ ;
/** @type {__VLS_StyleScopedClasses['h-100']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['align-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['feature-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h6']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-body-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-8']} */ ;
/** @type {__VLS_StyleScopedClasses['criteria-card']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['align-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gradient-bg']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-3']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h5']} */ ;
/** @type {__VLS_StyleScopedClasses['pa-4']} */ ;
/** @type {__VLS_StyleScopedClasses['my-2']} */ ;
/** @type {__VLS_StyleScopedClasses['criteria-item']} */ ;
/** @type {__VLS_StyleScopedClasses['elevation-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h6']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-body-1']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-8']} */ ;
/** @type {__VLS_StyleScopedClasses['process-card']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['align-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gradient-bg']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-3']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h5']} */ ;
/** @type {__VLS_StyleScopedClasses['pa-4']} */ ;
/** @type {__VLS_StyleScopedClasses['process-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['timeline-card']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h6']} */ ;
/** @type {__VLS_StyleScopedClasses['primary--text']} */ ;
/** @type {__VLS_StyleScopedClasses['pb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-body-1']} */ ;
/** @type {__VLS_StyleScopedClasses['pt-0']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['disclaimer-alert']} */ ;
/** @type {__VLS_StyleScopedClasses['elevation-1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-body-1']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
var __VLS_dollars;
let __VLS_self;
