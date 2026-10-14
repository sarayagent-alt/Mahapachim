import React from 'react';
import { PageView } from '../types';
import { IMAGES, STUDIO_INFO } from '../data/content';

interface AboutViewProps {
  onNavigate: (page: PageView) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  return (
    <div className="pt-32 sm:pt-40 lg:pt-48 pb-32 space-y-32 sm:space-y-40 text-[#1F1F1D]">
      
      {/* 14. ABOUT HERO: ONE large natural portrait, editorial text, no icons, no badges */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Portrait on the Left (Desktop) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="overflow-hidden rounded-xs bg-[#EFECE5]">
              <img
                src={IMAGES.founder}
                alt="שרי - מעצבת פנים, סטודיו מהפכים"
                className="w-full aspect-[3/4] object-cover"
                loading="eager"
              />
            </div>
            <div className="mt-4 text-xs text-[#736E67] font-normal text-right">
              שרי • סטודיו מהפכים
            </div>
          </div>

          {/* Editorial Content on the Right */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8 text-right">
            
            {/* Headline & Sub-headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#1F1F1D] font-heebo">
                נעים להכיר, אני שרי.
              </h1>
              <p className="text-xl sm:text-2xl lg:text-[1.75rem] text-[#1F1F1D] font-medium leading-snug font-heebo">
                אני מעצבת בתים. <br />
                <span className="font-medium text-[#1F1F1D]">אבל מתחילה דווקא באנשים.</span>
              </p>
            </div>

            {/* Main Narrative */}
            <div className="space-y-5 text-base sm:text-lg text-[#55524C] font-normal leading-[1.8]">
              <p>
                אני המעצבת ומייסדת סטודיו מהפכים. הגעתי לעיצוב פנים מתוך אהבה ארוכת שנים לחללים, לאסתטיקה וליכולת של בית להשתנות יחד עם האנשים שחיים בו.
              </p>

              <p>
                לצד לימודי עיצוב הפנים, אני מגיעה עם רקע בפסיכולוגיה ועם שנים של ניסיון בהובלת תהליכים, ניהול פרויקטים וחיבור בין רעיון לביצוע. החיבור בין העולמות האלה הפך עם הזמן לדרך שבה אני עובדת גם כמעצבת.
              </p>

              <p>
                לאורך השנים תכננתי ועיצבתי בתים וחללים עבורי ועבור אחרים, ותמיד חזרתי לאותה נקודת מוצא: לפני שמחליטים איך הבית ייראה, צריך להבין איך רוצים לחיות בו.
              </p>

              <p>
                כשאני נכנסת לבית בפעם הראשונה, אני לא מחפשת מיד מה להחליף. אני מסתכלת, שואלת ומקשיבה.
              </p>

              <p>
                אני רוצה להבין איך אתם חיים, איפה אתם אוהבים להיות, מה מפריע לכם ביום יום, מה חשוב לכם לשמור ומה הייתם רוצים להרגיש אחרת.
              </p>

              <div className="pt-2 pb-1">
                <p className="text-xl sm:text-2xl font-medium text-[#1F1F1D] font-heebo">
                  רק אחר כך מגיע העיצוב.
                </p>
              </div>

              <p>
                התכנון, החומרים, הצבעים, התאורה והריהוט מתחילים מתוך ההבנה הזו, כדי ליצור בית שלא רק נראה טוב, אלא מרגיש נכון ועובד נכון עבור האנשים שחיים בו.
              </p>

              <p>
                וזו גם הסיבה שקראתי לסטודיו <span className="font-medium text-[#1F1F1D]">מהפכים</span>.
              </p>

              <p>
                כי מבחינתי מהפך לא מתחיל בהכרח בלהחליף הכול. הוא מתחיל ביכולת לראות את נקודת הפתיחה אחרת. בין אם זו דירה חדשה, בית שחיים בו כבר שנים, בית ישן שעומד לפני שיפוץ או חלל שמתחילים לעצב מחדש.
              </p>

              <div className="pt-3">
                <p className="text-lg sm:text-xl font-medium text-[#1F1F1D] leading-relaxed font-heebo">
                  לראות מה נכון. לזהות את הפוטנציאל. וליצור ממנו משהו שמרגיש שלכם.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-6 justify-start">
              <button
                onClick={() => {
                  onNavigate('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-3.5 text-sm font-medium text-[#F8F6F0] bg-[#1F1F1D] hover:bg-[#33312E] transition-colors rounded-xs shadow-xs cursor-pointer"
              >
                ספרו לי על הבית שלכם
              </button>

              <a
                href={STUDIO_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-[#1F1F1D] hover:text-[#736E67] transition-colors cursor-pointer inline-flex items-center gap-2 py-2"
              >
                <span>WhatsApp</span>
                <span>←</span>
              </a>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
