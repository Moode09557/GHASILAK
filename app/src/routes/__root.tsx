import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, createRootRouteWithContext, HeadContent, Scripts } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import appCss from "../styles.css?url";
import { reportHiggsfieldError } from "../lib/higgsfield-error-reporting";
import meta from "../app-meta.json";
declare const __HF_DESIGN_INSPECTOR__: boolean;
export const Route=createRootRouteWithContext<{queryClient:QueryClient}>()({
head:()=>({meta:[{charSet:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1, viewport-fit=cover"},{title:meta.og_title},{name:"description",content:meta.og_description},{name:"author",content:"GHASILAK"},{name:"theme-color",content:"white"},{name:"robots",content:"index, follow, max-image-preview:large"},{property:"og:title",content:meta.og_title},{property:"og:description",content:meta.og_description},{property:"og:type",content:"website"},{property:"og:locale",content:"ar_OM"},{property:"og:url",content:"https://ghasilak-muscat.higgsfield.app/"},{property:"og:image",content:meta.og_image_url},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:image",content:meta.og_image_url}],links:[{rel:"stylesheet",href:appCss},{rel:"canonical",href:"https://ghasilak-muscat.higgsfield.app/"},{rel:"icon",href:"/favicon.ico"},{rel:"apple-touch-icon",href:"/apple-touch-icon.png"},{rel:"manifest",href:"/site.webmanifest"},{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400;500;600;700;800;900&family=Outfit:wght@400;500;600;700;800;900&display=swap"}]}),
shellComponent:({children}:{children:ReactNode})=><html lang="ar" dir="rtl"><head><HeadContent/></head><body>{children}<Scripts/></body></html>,
component:Root,
notFoundComponent:()=><main className="error-page" dir="rtl"><h1>404</h1><p>هذه الصفحة غير موجودة</p><a href="/">العودة إلى غسيلك</a></main>,
errorComponent:({reset})=><main className="error-page" dir="rtl"><h1>تعذر تحميل الصفحة</h1><button onClick={reset}>حاول مجددًا</button><a href="/">العودة للرئيسية</a></main>
});
function Root(){const {queryClient}=Route.useRouteContext();useEffect(()=>{if(!__HF_DESIGN_INSPECTOR__)return;void import("../module/design-inspector/runtime").then(({installHiggsfieldDesignInspector})=>installHiggsfieldDesignInspector()).catch(error=>reportHiggsfieldError(error instanceof Error?error:new Error("Inspector failed"),{boundary:"higgsfield_design_inspector_import"}));},[]);return <QueryClientProvider client={queryClient}><Outlet/></QueryClientProvider>}
