import menuDataJson from "../menuData.json";

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description?: string;
  image?: string;
  isPopular?: boolean;
}

export interface MenuCategory {
  id: string;
  title: string;
  icon?: string;
  image?: string;
  items: MenuItem[];
}

export interface CateringItem {
  id: string;
  name: string;
  description: string;
  price: string; // Using string to support price per kg or piece
  approxWeight?: string;
  image: string;
  features: string[];
}

export interface WeddingGalleryItem {
  id: string;
  title: string;
  description: string;
  images: string[];
  folderPath: string;
  tag: string;
}

export const cateringData: CateringItem[] = [
  {
    id: "cat_lamb_1",
    name: "خروف بلدي محشي ملكي كامل",
    description: "خروف بلدي طازج كامل (وزن قرابة 12-14 كغم قبل الطهي)، محشو بالأرز الشرقي المبهر بأفخر أنواع المهارات الكنعانية، ومزين بسخاء بالفستق الحلبي، اللوز المقشر، والصنوبر البلدي المحمص. يُطهى ببطء شديد تحت لهب هادئ لعدة ساعات حتى ينضج تماماً ويذوب لحمه. يُقدم مع لبن الزبادي وسوب اللحم الطبيعي.",
    price: "1800",
    approxWeight: "12 - 14 كغم",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600",
    features: ["لحم بلدي نعيمي طازج يومياً", "ثلاثة أنواع من المكسرات الفاخرة", "تكفي لـ 15 - 20 شخصاً", "توصية مسبقة قبل 24 ساعة"]
  },
  {
    id: "cat_lamb_half",
    name: "نصف خروف بلدي محشي فاخر",
    description: "نصف خروف بلدي نعيمي (قرابة 6-7 كغم)، محشو بأرز التواصي الفاخر المميز بالخلطة الشرقية الغنية، مزين باللوز والكاجو والصنوبر الذهبي المحمر. يمثل الخيار الأمثل للعزائم والاجتماعات العائلية المرموقة.",
    price: "950",
    approxWeight: "6 - 7 كغم",
    image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&q=80&w=600",
    features: ["طهي شرقي تقليدي ببطء", "مكسرات محمصة طازجة", "تكفي لـ 8 - 10 أشخاص", "توصية مسبقة قبل 12 ساعة"]
  },
  {
    id: "cat_neck",
    name: "رقاب خروف فخمة محشية بالأرز واللحم",
    description: "رقاب خروف بلدي ريانة، محشوة بعقدة الأرز الممتاز واللحم المفروم المتبل الفاخر، تُطهى بصلصتنا الخاصة وببطء حتى ينفصل اللحم عن العظم بنعومة وسلاسة متناهية، تعلوها المكسرات الذهبية المحمصة ودبس الرمان.",
    price: "240",
    approxWeight: "3 رقاب كبيرة",
    image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&q=80&w=600",
    features: ["لحم رقبة عالي الطراوة", "محشوة باللحم المفروم والبهارات", "تكفي لـ 4 - 5 أشخاص", "توصية مسبقة قبل 6 ساعات"]
  },
  {
    id: "cat_mansaf",
    name: "سدر منسف بلدي بالجميد الكركي الأصيل",
    description: "وليمة المنسف الفلسطيني التقليدي المعد بأجود لحوم الغنم البلدية، اللبن الكركي المكعّب المطبوخ بعناية، يقدم فوق طبقة من خبز الصاج الشراك والأرز البلدي الأصفر الفلفل بالسمن، مزيّن بالصنوبر واللوز البلدي وبقدونس الحديقة الطازج.",
    price: "480",
    approxWeight: "3.5 كغم لحم صافي",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600",
    features: ["جميد كركي أصلي 100%", "سمن بلدي فلسطيني معتق", "تكفي لـ 6 - 8 أشخاص", "توصية مسبقة قبل 8 ساعات"]
  },
  {
    id: "cat_crown",
    name: "فريكة بالدجاج المحمر والمكسرات (سدر فاخر)",
    description: "فريك بلدي منقى ومغسول ومطهو بمرق الدجاج اللذيذ مع المطيبات الشرقية العريقة، يعلوه دجاج بلدي محمر بالفرن الحجري حتى يكتسي باللون الذهبي الخلاب، ومزين بصنوبر ولوز وكاجو عالي الدسم.",
    price: "280",
    approxWeight: "سدر كبير - 4 دجاجات كاملة",
    image: "https://images.unsplash.com/photo-1560614382-3334f747516c?auto=format&fit=crop&q=80&w=600",
    features: ["فريكة بلدية مدخنة ممتازة", "دجاج بلدي محمر بالفرن الحجري", "تكفي لـ 8 أشخاص", "توصية مسبقة قبل 5 ساعات"]
  }
];

export const weddingGalleryData: WeddingGalleryItem[] = [
  {
    id: "wed_1",
    title: "ليلة العمر في الهواء الطلق",
    description: "جزء من قاعتنا الخارجية المزدانة بممرات الخضار والأشجار البهية من حولها، تحت أنوار سلسلة الفيريل المضيئة الساحرة، لتجربة تجمع بين رومانسية الحدائق ودفء الطبيعة الخلابة.",
    images: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1519225495810-7512c696505a?auto=format&fit=crop&q=80&w=1000"
    ],
    folderPath: "/public/images/weddings/outdoor/",
    tag: "أفراح وسهرات مميزة"
  },
  {
    id: "wed_2",
    title: "حفلات الخطوبة والجاهات الكبرى",
    description: "كوشة وتصميم ممتص للأضواء المبهجة يعكس فخامة العائلات وكرم الاستقبال، مع ترتيب مقاعد عائلي مريح يضمن رؤية ممتعة وخصوصية متناهية لكافة ضيوفكم الكرام.",
    images: ["https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=1000"],
    folderPath: "/public/images/weddings/engagement/",
    tag: "جاهات وخطوبات"
  },
  {
    id: "wed_3",
    title: "أعياد ميلاد ولقاءات دافئة في الطبيعة",
    description: "زوايا مجهزة بديكورات مخصصة ببالونات ملونة وثيمات تبهج قلوب الصغار والكبار، في وضوح النهار النقي وتحت نسمات جبال الخليل المنعشة الحانية.",
    images: ["https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=1000"],
    folderPath: "/public/images/weddings/birthdays/",
    tag: "أعياد ومناسبات عائلية"
  },
  {
    id: "wed_4",
    title: "تجهيز طاولات الخدمة والبوفيه المفتوح",
    description: "تنظيم مذهل بأجهزة السخان النحاسية الفاخرة والطاولات الذهبية اللامعة لتقديم أشهى أصناف الطعام والمقبلات والحلويات الشرقية مباشرة تحت إشراف طاقم طهاة كافيه الزيتونة المرموقين.",
    images: ["https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000"],
    folderPath: "/public/images/weddings/buffet/",
    tag: "بوفيهات ملكية"
  }
];

export const menuData: MenuCategory[] = menuDataJson as MenuCategory[];

// نوع ومصفوفة ألبوم صور مناسبات صالات وقاعات الزيتونة الكبرى
export interface OccasionsAlbumItem {
  id: string;
  src: string; // الرابط الجمالي الاحتياطي
  localPath: string; // المسار المحلي الذي يرتبط بالملفات المرفوعة
  title: string;
  category: string;
}

export const occasionsAlbumData: OccasionsAlbumItem[] = [
  {
    id: "album_1",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    localPath: "/src/assets/album/wedding_outdoor.jpg",
    title: "جلسة خارجية ساحرة مع إضاءة خافتة",
    category: "صالات خارجية"
  },
  {
    id: "album_2",
    src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=800",
    localPath: "/src/assets/album/engagement_table.jpg",
    title: "تنسيق طاولات الخطوبة والجاهات الكبرى",
    category: "ديكور وطاولات"
  },
  {
    id: "album_3",
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=800",
    localPath: "/src/assets/album/birthday_setup.jpg",
    title: "تنسيق زوايا أعياد ميلاد مميزة بالهواء الطلق",
    category: "أعياد ومناسبات"
  },
  {
    id: "album_4",
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
    localPath: "/src/assets/album/buffet_lux.jpg",
    title: "بوفيه سخانات الضيافة الملكية",
    category: "بوفيه واستقبال"
  },
  {
    id: "album_5",
    src: "https://images.unsplash.com/photo-1519225495810-7512c696505a?auto=format&fit=crop&q=80&w=800",
    localPath: "/src/assets/album/kosha_gold.jpg",
    title: "الكوشة والممشى الملكي المضاء بالورد والإنارة الغنية",
    category: "الكوشة والممر"
  },
  {
    id: "album_6",
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800",
    localPath: "/src/assets/album/catering_feast.jpg",
    title: "ولائم وقرب الضيافة الممرونة الفخمة",
    category: "ضيافة وولائم"
  }
];

