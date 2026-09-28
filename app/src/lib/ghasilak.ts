export const phone = "+968 72484046";
export const orderMessage = "مرحبًا غسيلك 👋\nأرغب في طلب خدمة غسيل واستلام من المنزل (الحد الأدنى 8 قطع).\n\nالاسم:\nالمنطقة:\nعدد الأثواب:\nقطع أو خدمات أخرى:\nالموقع:\nوقت الاستلام المناسب:\nملاحظات:\n\nأرجو تأكيد السعر وموعد الاستلام.";
export const whatsapp = (message = orderMessage) => "https://wa.me/96872484046?text=" + encodeURIComponent(message);
export const faqAr = [
["ما الحد الأدنى للطلب؟","الحد الأدنى للطلب 8 قطع. أرسل عدد القطع وموقعك عبر واتساب لتنسيق الاستلام."],
["كم سعر غسيل وكي الثوب؟","400 بيسة للثوب."],
["كيف أطلب؟","اضغط على «اطلب عبر واتساب» وأرسل لنا موقعك وعدد القطع ووقت الاستلام."],
["هل تستلمون الملابس من المنزل؟","نعم، نستلم الملابس من موقعك ونعيدها بعد التجهيز."],
["كم أسعار القطع الأخرى؟","تختلف حسب نوع القطعة والخدمة. تواصل معنا عبر واتساب لمعرفة السعر."],
["أين تتوفر الخدمة؟","خدمتنا في سلطنة عُمان. أرسل موقعك عبر واتساب لتأكيد الاستلام وموعده."],
["كيف أرسل الموقع؟","يمكن إرسال الموقع مباشرة عبر واتساب."],
["كيف أعرف أن الطلب جاهز؟","نقوم بتحديثك والتواصل معك عبر واتساب."]
];
export const faqEn = [
["What is the minimum order?","The minimum order is 8 items. Send your item count and location on WhatsApp to arrange collection."],
["How much is a dishdasha wash and iron?","400 baisa per dishdasha (OMR 0.400)."],
["How do I order?","Select Order on WhatsApp and send your location, item count and preferred pickup time."],
["Do you collect from home?","Yes. We collect your garments from your location and return them after preparation."],
["What do other items cost?","Prices depend on the item and service. Contact us on WhatsApp for pricing."],
["Where is the service available?","Our service is in the Sultanate of Oman. Send your location on WhatsApp to confirm pickup and timing."],
["How do I share my location?","Send your location directly in WhatsApp."],
["How will I know my order is ready?","We keep you updated through WhatsApp."]
];
