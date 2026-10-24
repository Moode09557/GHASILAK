import { createElement as h } from "react";
import type { ScrollScrubScene, ScrollScrubTheme } from "@/components/scroll-scrub/scroll-scrub";
import { whatsapp } from "@/lib/ghasilak";
export const scrollScrubTheme: ScrollScrubTheme = {accent:"#174B87",background:"#161616",ink:"#FFFFFF",muted:"#e2dfd8"};
const media = {clip:"./assets/world/scene-01.mp4", mobileClip:"./assets/world/scene-01-mobile.mp4",poster:"./assets/world/scene-01-poster.png",mobilePoster:"./assets/world/scene-01-mobile-poster.png"};
const actions = (en: boolean) => h("div",{className:"hero-conversion"},
h("div",{className:"hero-offer"},h("strong",null,"400"),h("span",null,en?"BAISA · WASH + IRON":"بيسة · غسيل وكي الثوب")),
h("p",{className:"hero-minimum"},en?"Minimum order: 8 items":"الحد الأدنى للطلب 8 قطع"),
h("div",{className:"hero-links"},h("a",{href:whatsapp(),className:"hero-order",target:"_blank",rel:"noopener noreferrer"},en?"Order on WhatsApp":"اطلب عبر واتساب",h("span",{"aria-hidden":true},"↗")),h("a",{href:"#how",className:"hero-how"},en?"How it works":"كيف تعمل الخدمة")),
h("a",{className:"hero-phone",href:"tel:+96877989743",dir:"ltr"},"+968 77989743"));
export const scrollScrubScenes: ScrollScrubScene[] = [{...media,id:"clean-cycle",label:"غسيلك",title:"غسيلك\nمن باب بيتك",body:"نستلم ملابسك من منزلك، نغسلها ونكويها، ونرجعها لك نظيفة وجاهزة.",kicker:"سلطنة عُمان",scroll:1.8,align:"left",objectPosition:"50% 50%",mobileObjectPosition:"50% 35%",actions:actions(false)}];
export const englishScenes: ScrollScrubScene[] = [{...media,id:"clean-cycle",label:"GHASILAK",title:"Fresh clothes.\nAt your door.",body:"We collect, wash and iron your clothes, then bring them back clean and ready.",kicker:"SULTANATE OF OMAN",scroll:1.8,align:"left",objectPosition:"50% 50%",mobileObjectPosition:"50% 35%",actions:actions(true)}];
