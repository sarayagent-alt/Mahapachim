import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageView } from '../types';
import { FAQ_ITEMS, IMAGES } from '../data/content';

interface ServicesViewProps {
  onNavigate: (page: PageView) => void;
  onSelectServiceForContact?: (serviceId: string) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({
  onNavigate,
  onSelectServiceForContact,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleServiceSelect = (serviceId: string) => {
    if (onSelectServiceForContact) {
      onSelectServiceForContact(serviceId);
    }
    onNavigate('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-32 sm:pt-40 lg:pt-48 pb-32 space-y-32 sm:space-y-40 text-[#1F1F1D]">
      
      {/* Intro Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl space-y-5 text-right">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#1F1F1D] font-heebo">
            איזה מהפך מתאים לכם?
          </h1>

          <p className="text-base sm:text-lg text-[#5E5B55] font-normal leading-relaxed">
            בסטודיו מהפכים בניתי שלושה מסלולי ליווי, שמאפשרים להתאים את עומק התהליך לבית, לצורך ולשינוי שאתם רוצים ליצור.
          </p>
        </div>
      </section>

      {/* Editorial Services — Generous Whitespace, NO CARDS */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="space-y-24 sm:space-y-32 divide-y divide-[#E5DFD5] text-right">
          
          {/* SERVICE 1: פגישת מהפך */}
          <div className="pt-24 first:pt-0 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-4 sm:space-y-4.5">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#1F1F1D] font-heebo">
                פגישת מהפך
              </h2>

              <p className="text-lg sm:text-xl text-[#1F1F1D] font-medium leading-snug font-heebo">
                יודעים שמשהו בבית לא עובד, אבל לא יודעים מאיפה להתחיל?
              </p>

              <p className="text-base sm:text-[16.5px] text-[#55524C] font-normal leading-[1.8]">
                פגישת ייעוץ ממוקדת בבית שלכם, שנועדה לעשות סדר, לזהות את הפוטנציאל ולתת לכם כיוון מקצועי וברור להמשך.
              </p>

              <p className="text-base sm:text-[16.5px] text-[#55524C] font-normal leading-[1.8]">
                במהלך הפגישה נסתכל יחד על החלל ונבחן את העמדת הריהוט, התאורה, הצבעים, האחסון, זרימת התנועה והתחושה הכללית. נבין מה נכון לשמור, מה כדאי לשנות, איפה אפשר לעבוד עם מה שכבר קיים ואיפה שינוי משמעותי יותר יכול לעשות את ההבדל.
              </p>

              <p className="text-base sm:text-[16.5px] text-[#55524C] font-normal leading-[1.8]">
                בסוף הפגישה תצאו עם כיוון ברור, סדרי עדיפויות והמלצות מעשיות שתוכלו ליישם בעצמכם.
              </p>

              <p className="text-base sm:text-[16.5px] text-[#55524C] font-normal leading-[1.8]">
                פגישת המהפך מתאימה למי שרוצה עין מקצועית, חשיבה חדשה והכוונה לפני שמתחילים לקבל החלטות או לבצע שינויים בבית.
              </p>

              {/* Service Summary: Refined typographic line above CTA */}
              <div className="pt-2">
                <p className="text-sm text-[#736E67] font-normal leading-relaxed">
                  <span>פגישת ייעוץ ממוקדת</span>
                  <span className="mx-2.5 text-[#B8B2A7]">|</span>
                  <span>ללא ליווי ביישום</span>
                  <span className="mx-2.5 text-[#B8B2A7]">|</span>
                  <span>כיוון והמלצות מעשיות</span>
                </p>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => handleServiceSelect('meeting')}
                  className="px-8 py-3.5 text-sm font-medium text-[#F8F6F0] bg-[#1F1F1D] hover:bg-[#33312E] rounded-xs transition-colors cursor-pointer"
                >
                  לקביעת פגישת מהפך
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-xs bg-[#EFECE5]">
                <img
                  src={IMAGES.service1}
                  alt="פגישת מהפך"
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* SERVICE 2: מהפך לחלל */}
          <div className="pt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-4 sm:space-y-4.5">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#1F1F1D] font-heebo">
                מהפך לחלל
              </h2>

              <p className="text-lg sm:text-xl text-[#1F1F1D] font-medium leading-snug font-heebo">
                יש חלל אחד בבית שפשוט לא מתחבר?
              </p>

              <p className="text-base sm:text-[16.5px] text-[#55524C] font-normal leading-[1.8]">
                תהליך עיצוב וליווי מלא לחלל אחד, שמתחיל בהבנת הצרכים שלכם וממשיך לתכנון החלל ולבניית שפה עיצובית שלמה ומדויקת.
              </p>

              <p className="text-base sm:text-[16.5px] text-[#55524C] font-normal leading-[1.8]">
                יחד נבין איך אתם משתמשים בחלל, מה לא עובד בו היום, מה חשוב לכם לשמור ומה הייתם רוצים לשנות. נבחן את העמדת הריהוט, התאורה, הצבעים, החומרים, האחסון, הטקסטיל והנגרות לפי הצורך ונחבר את כל הבחירות לתמונה אחת שלמה.
              </p>

              <p className="text-base sm:text-[16.5px] text-[#55524C] font-normal leading-[1.8]">
                המטרה היא לא רק לגרום לחלל להיראות אחרת, אלא לגרום לו לעבוד ולהרגיש אחרת. ליצור מקום שמתאים לשגרה שלכם, מבטא את הטעם שלכם ומרגיש חלק טבעי מהבית.
              </p>

              <p className="text-base sm:text-[16.5px] text-[#55524C] font-normal leading-[1.8]">
                התהליך יכול להתאים לסלון, פינת אוכל, חדר שינה, חדר ילדים, חלל עבודה או כל חלל אחר שזקוק לתכנון ולעיצוב מחדש.
              </p>

              <p className="text-base sm:text-[16.5px] text-[#55524C] font-normal leading-[1.8]">
                בסיום התהליך יהיה לכם כיוון עיצובי מגובש, בחירות ברורות ותכנון שמאפשר להתקדם ליישום בביטחון.
              </p>

              {/* Service Summary: Refined typographic line above CTA */}
              <div className="pt-2">
                <p className="text-sm text-[#736E67] font-normal leading-relaxed">
                  <span>עיצוב ותכנון לחלל אחד</span>
                  <span className="mx-2.5 text-[#B8B2A7]">|</span>
                  <span>ליווי לאורך התהליך</span>
                  <span className="mx-2.5 text-[#B8B2A7]">|</span>
                  <span>מתכנון ועד בחירות ליישום</span>
                </p>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => handleServiceSelect('space')}
                  className="px-8 py-3.5 text-sm font-medium text-[#F8F6F0] bg-[#1F1F1D] hover:bg-[#33312E] rounded-xs transition-colors cursor-pointer"
                >
                  אני רוצה מהפך לחלל
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-xs bg-[#EFECE5]">
                <img
                  src={IMAGES.service2}
                  alt="מהפך לחלל"
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* SERVICE 3: מהפך לבית */}
          <div className="pt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-4 sm:space-y-4.5">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#1F1F1D] font-heebo">
                מהפך לבית
              </h2>

              <p className="text-lg sm:text-xl text-[#1F1F1D] font-medium leading-snug font-heebo">
                כשהשינוי הוא כבר לא רק בחדר אחד.
              </p>

              <p className="text-base sm:text-[16.5px] text-[#55524C] font-normal leading-[1.8]">
                תהליך עיצוב וליווי מקיף לבית, שבו אנחנו מסתכלים על התמונה הגדולה ומחברים בין הצרכים, התכנון והשפה העיצובית של החללים השונים.
              </p>

              <p className="text-base sm:text-[16.5px] text-[#55524C] font-normal leading-[1.8]">
                התהליך מתחיל בהיכרות ובהבנה של הדרך שבה אתם חיים או רוצים לחיות בבית. נבחן את החלוקה והתכנון, את הקשר בין החללים, את מה שכבר קיים ואת מה שצריך ליצור מחדש. משם נבנה קונספט עיצובי שמחבר בין פונקציונליות, חומרים, צבעים, תאורה, ריהוט, אחסון ונגרות לפי הצורך.
              </p>

              <p className="text-base sm:text-[16.5px] text-[#55524C] font-normal leading-[1.8]">
                זה יכול להיות בית שאתם חיים בו ורוצים לשנות, בית שקניתם ועומד לפני שיפוץ, בית ישן שמבקש פרשנות חדשה או דירה חדשה שמחכה להפוך לבית שלכם.
              </p>

              <p className="text-base sm:text-[16.5px] text-[#55524C] font-normal leading-[1.8]">
                לאורך התהליך אני מלווה אתכם בהחלטות ובבחירות, כדי לשמור על התמונה השלמה ולוודא שכל חלק בבית מתחבר לשפה אחת ולדרך שבה אתם רוצים לחיות בו.
              </p>

              <p className="text-base sm:text-[16.5px] text-[#55524C] font-normal leading-[1.8]">
                המטרה היא לא ליצור בית שנראה כאילו יצא מקטלוג, אלא בית שמרגיש שלם, אישי ומדויק לכם.
              </p>

              {/* Service Summary: Refined typographic line above CTA */}
              <div className="pt-2">
                <p className="text-sm text-[#736E67] font-normal leading-relaxed">
                  <span>עיצוב ותכנון לבית שלם</span>
                  <span className="mx-2.5 text-[#B8B2A7]">|</span>
                  <span>ליווי מקיף</span>
                  <span className="mx-2.5 text-[#B8B2A7]">|</span>
                  <span>שפה עיצובית אחת שמחברת את הבית</span>
                </p>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => handleServiceSelect('home')}
                  className="px-8 py-3.5 text-sm font-medium text-[#F8F6F0] bg-[#1F1F1D] hover:bg-[#33312E] rounded-xs transition-colors cursor-pointer"
                >
                  בואו נדבר על הבית
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-xs bg-[#EFECE5]">
                <img
                  src={IMAGES.service3}
                  alt="מהפך לבית"
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ — Refined Editorial Accordion */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="border-t border-[#E5DFD5] pt-20 sm:pt-28 space-y-10 sm:space-y-12 text-right">
          <div>
            <h2 className="text-2xl sm:text-3xl font-normal text-[#1F1F1D] font-heebo tracking-tight">
              שאלות נפוצות
            </h2>
          </div>

          <div className="divide-y divide-[#E5DFD5] border-b border-[#E5DFD5]">
            {FAQ_ITEMS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="transition-colors">
                  <button
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="w-full flex items-baseline justify-between gap-6 text-right py-[22px] sm:py-[26px] hover:text-[#736E67] transition-colors cursor-pointer group"
                  >
                    <span className="text-lg sm:text-xl text-[#1F1F1D] font-medium font-heebo leading-snug group-hover:text-[#5E5B55] transition-colors">
                      {faq.question}
                    </span>
                    <span
                      className="text-base sm:text-lg font-light text-[#736E67] select-none shrink-0 font-sans pl-1"
                      aria-hidden="true"
                    >
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="faq-answer"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1.0] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-7 sm:pb-8 pt-0 max-w-3xl">
                          <p className="text-base sm:text-[16.5px] text-[#55524C] font-normal leading-[1.8] text-right">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};
