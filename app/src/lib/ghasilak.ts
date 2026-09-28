export const phone = "+968 72484046";
export const orderMessage = "مرحبًا غسيلك 👋\nأرغب في طلب خدمة غسيل واستلام من المنزل.\n\nالاسم:\nالمحافظة:\nالمنطقة:\nعدد الأثواب:\nقطع أو خدمات أخرى:\nالموقع:\nوقت الاستلام المناسب:\nملاحظات:\n\nأرجو تأكيد السعر وموعد الاستلام.";
export const whatsapp = (message = orderMessage) => "https://wa.me/96872484046?text=" + encodeURIComponent(message);
export const areas = ["مسقط", "ظفار", "مسندم", "البريمي", "الداخلية", "شمال الباطنة", "جنوب الباطنة", "شمال الشرقية", "جنوب الشرقية", "الظاهرة", "الوسطى"];
export const areasEn = ["Muscat", "Dhofar", "Musandam", "Al Buraimi", "Ad Dakhiliyah", "North Al Batinah", "South Al Batinah", "North Ash Sharqiyah", "South Ash Sharqiyah", "Ad Dhahirah", "Al Wusta"];
export const faqAr = [
["كم سعر غسيل وكي الثوب؟","400 بيسة للثوب."],
["كيف أطلب؟","اضغط على «اطلب عبر واتساب» وأرسل لنا موقعك وعدد القطع ووقت الاستلام."],
["هل تستلمون الملابس من المنزل؟","نعم، نستلم الملابس من موقعك ونعيدها بعد التجهيز."],
["كم أسعار القطع الأخرى؟","تختلف حسب نوع القطعة والخدمة. تواصل معنا عبر واتساب لمعرفة السعر."],
["ما هي المحافظات التي تخدمونها؟","خدمتنا في سلطنة عُمان. اختر محافظتك وأرسل موقعك عبر واتساب لتأكيد الاستلام وموعده."],
["كيف أرسل الموقع؟","يمكن إرسال الموقع مباشرة عبر واتساب."],
["كيف أعرف أن الطلب جاهز؟","نقوم بتحديثك والتواصل معك عبر واتساب."]
];
export const faqEn = [
["How much is a dishdasha wash and iron?","400 baisa per dishdasha (OMR 0.400)."],
["How do I order?","Select Order on WhatsApp and send your location, item count and preferred pickup time."],
["Do you collect from home?","Yes. We collect your garments from your location and return them after preparation."],
["What do other items cost?","Prices depend on the item and service. Contact us on WhatsApp for pricing."],
["Which governorates do you serve?","Our service is in the Sultanate of Oman. Choose your governorate and send your location on WhatsApp to confirm pickup and timing."],
["How do I share my location?","Send your location directly in WhatsApp."],
["How will I know my order is ready?","We keep you updated through WhatsApp."]
];
