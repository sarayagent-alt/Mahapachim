import React, { useState } from 'react';
import { PageView, ProjectCaseStudy } from '../types';
import { STUDIO_INFO, IMAGES, PROJECTS, TESTIMONIALS } from '../data/content';
import { EditorialHero } from '../components/EditorialHero';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { SlidersHorizontal, Columns2 } from 'lucide-react';

interface HomeViewProps {
  onNavigate: (page: PageView) => void;
  onSelectProject: (project: ProjectCaseStudy) => void;
  onSelectServiceForContact?: (serviceId: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onSelectProject,
  onSelectServiceForContact,
}) => {
  const [projectDisplayMode, setProjectDisplayMode] = useState<'interactive-slider' | 'side-by-side'>('interactive-slider');
  const featuredProject = PROJECTS[0]; // Givatayim apartment

  const handleServiceClick = (serviceId: string) => {
    if (onSelectServiceForContact) {
      onSelectServiceForContact(serviceId);
    }
    onNavigate('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-32 sm:space-y-40 lg:space-y-48 pb-32 text-[#1F1F1D]">
      
      {/* ================================================== */}
      {/* 8. EDITORIAL ARCHITECTURAL HERO (3 Curated Out-of-the-Box Modes) */}
      {/* ================================================== */}
      <EditorialHero onNavigate={onNavigate} />

      {/* ================================================== */}
      {/* 9. SECOND SECTION — THE NEED */}
      {/* ================================================== */}
      <section id="the-need-section" className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-18 items-start">
          
          {/* Right: Text column (approx 35-40%) */}
          <div className="lg:col-span-5 text-right space-y-8 sm:space-y-9 max-w-md xl:max-w-[450px]">
            
            {/* Level 1: Main headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-[2.1rem] font-normal text-[#1F1F1D] leading-[1.25] tracking-tight font-heebo">
              כל בית מתחיל במקום אחר
            </h2>

            {/* Level 3: Introductory paragraph */}
            <p className="text-[17px] sm:text-[17.5px] text-[#55524C] font-normal leading-[1.8]">
              יש בית שחיים בו כבר שנים והגיע הזמן שיתאים לחיים של היום. יש דירה חדשה שמחכה לקבל אופי ולהפוך לבית. יש בית ישן עם סיפור ודברים ששווה לשמור. ויש מקום שדורש שינוי עמוק יותר, תכנון מחדש, שיפוץ והתחלה חדשה.
            </p>

            {/* Level 2: Emphasized statement */}
            <div className="pt-1 pb-1">
              <p className="text-lg sm:text-xl lg:text-[1.35rem] font-medium text-[#1F1F1D] leading-[1.4] tracking-tight font-heebo">
                אין שני בתים שמתחילים מאותה נקודה <br className="hidden sm:inline" />
                ולכן גם כל מהפך נראה אחרת.
              </p>
            </div>

            {/* Level 3: Explanatory paragraph */}
            <div className="space-y-4">
              <p className="text-[17px] sm:text-[17.5px] text-[#55524C] font-normal leading-[1.8]">
                בסטודיו מהפכים אני מתחילה בהתבוננות בבית, באנשים שיחיו בו, במה שכבר קיים ובמה שעוד צריך ליצור.
              </p>
              <p className="text-[17px] sm:text-[17.5px] text-[#55524C] font-normal leading-[1.8]">
                משם מחליטים מה נכון לשמור, מה לשנות, מה להוסיף, ולפעמים גם מה לתכנן מחדש לגמרי.
              </p>
            </div>

            {/* Final two-line statement (slightly emphasized, not level 2) */}
            <div className="pt-2">
              <p className="text-[17px] sm:text-[17.5px] text-[#22211E] font-medium leading-[1.75] font-heebo">
                לפעמים המהפך מתחיל במה שכבר יש. <br className="hidden sm:inline" />
                ולפעמים הוא מתחיל במה שעוד צריך ליצור.
              </p>
            </div>

          </div>

          {/* Left: Dominant editorial image (approx 55-60%), aligned flush at the top */}
          <div className="lg:col-span-7 w-full">
            <div className="overflow-hidden bg-[#EFECE5]">
              <img
                src={IMAGES.heroSecondary}
                alt="חלל אינטימי ומאורגן מחדש מתוך מה שכבר קיים"
                className="w-full aspect-[4/3] sm:aspect-[14/10] lg:aspect-[16/12] object-cover"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ================================================== */}
      {/* 10. THE APPROACH — שיטת מהפכים */}
      {/* ================================================== */}
      <section id="approach-section" className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 !mt-16 sm:!mt-20 lg:!mt-24">
        <div className="border-t border-b border-[#E5DFD5] pt-12 sm:pt-14 lg:pt-16 pb-14 sm:pb-16 text-right">
          
          {/* Section Title (100% hierarchy - strongest typographic element in section) */}
          <h2 className="text-3xl sm:text-4xl lg:text-[2.45rem] font-normal text-[#1F1F1D] tracking-tight font-heebo leading-[1.2]">
            שיטת מהפכים
          </h2>

          {/* Section Introduction (approx 32-40px below title, constrained narrow width) */}
          <div className="mt-8 sm:mt-9 max-w-xl">
            <p className="text-[17px] sm:text-[18px] text-[#55524C] font-normal leading-[1.75]">
              כל תהליך מתחיל לפני בחירת הצבעים והחומרים, בהבנה של האנשים, הבית והחיים שצריכים לקרות בו.
            </p>
          </div>

          {/* Three Stages: Strong horizontal RTL process row (approx 55-70px below intro) */}
          <div className="mt-14 lg:mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 xl:gap-16 text-right">
            
            {/* Stage 01 (RIGHT) */}
            <div className="space-y-3 sm:space-y-3.5">
              {/* Number (25-30% hierarchy): small, subtle, functional editorial marker */}
              <span className="block text-[12px] sm:text-[12.5px] font-mono tracking-widest text-[#9C968B] font-normal select-none leading-none">
                01
              </span>
              {/* Stage title (65-70% hierarchy): noticeably increased */}
              <h3 className="text-2xl sm:text-[25px] lg:text-[26px] font-medium text-[#1F1F1D] font-heebo tracking-tight leading-snug">
                מבינים
              </h3>
              {/* Body copy (40-45% hierarchy): slightly increased */}
              <p className="text-[16px] sm:text-[16.5px] lg:text-[17px] text-[#55524C] font-normal leading-[1.75]">
                איך אתם חיים, מה חשוב לכם, מה עובד, מה חסר ומה הייתם רוצים להרגיש אחרת.
              </p>
            </div>

            {/* Stage 02 (CENTER) */}
            <div className="space-y-3 sm:space-y-3.5">
              {/* Number */}
              <span className="block text-[12px] sm:text-[12.5px] font-mono tracking-widest text-[#9C968B] font-normal select-none leading-none">
                02
              </span>
              {/* Stage title */}
              <h3 className="text-2xl sm:text-[25px] lg:text-[26px] font-medium text-[#1F1F1D] font-heebo tracking-tight leading-snug">
                מסתכלים אחרת
              </h3>
              {/* Body copy */}
              <p className="text-[16px] sm:text-[16.5px] lg:text-[17px] text-[#55524C] font-normal leading-[1.75]">
                בוחנים את נקודת הפתיחה בעיניים חדשות, את החלל, התכנון, מה שכבר קיים ואת מה שעוד צריך ליצור.
              </p>
            </div>

            {/* Stage 03 (LEFT) */}
            <div className="space-y-3 sm:space-y-3.5">
              {/* Number */}
              <span className="block text-[12px] sm:text-[12.5px] font-mono tracking-widest text-[#9C968B] font-normal select-none leading-none">
                03
              </span>
              {/* Stage title */}
              <h3 className="text-2xl sm:text-[25px] lg:text-[26px] font-medium text-[#1F1F1D] font-heebo tracking-tight leading-snug">
                משנים
              </h3>
              {/* Body copy */}
              <p className="text-[16px] sm:text-[16.5px] lg:text-[17px] text-[#55524C] font-normal leading-[1.75]">
                מתרגמים את כל מה שהבנו לתכנון, חומרים, צבע, תאורה וריהוט, ויוצרים בית שהוא גם יפה וגם נכון לכם.
              </p>
            </div>

          </div>

          {/* Final Statement (approx 70-90px below three-stage row, 50-70px above bottom divider) */}
          <div className="mt-18 lg:mt-20 text-right">
            <p className="text-xl sm:text-2xl lg:text-[1.65rem] font-medium text-[#1F1F1D] leading-[1.4] tracking-tight font-heebo">
              לא לשנות בשביל לשנות <br className="hidden sm:inline" />
              <span className="font-medium text-[#1F1F1D]">לשנות את מה שבאמת ישנה.</span>
            </p>
          </div>

        </div>
      </section>



      {/* ================================================== */}
      {/* 11. SERVICES — Editorial layout with generous whitespace (NO CARDS) */}
      {/* ================================================== */}
      <section id="services-section" className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 !mt-16 sm:!mt-20">
        <div className="pt-16 sm:pt-20 space-y-16">
          
          <div className="max-w-2xl text-right space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-normal text-[#1F1F1D] tracking-tight font-heebo">
              איזה מהפך מתאים לכם?
            </h2>
            <p className="text-base sm:text-lg text-[#5E5B55] font-normal leading-relaxed">
              בסטודיו מהפכים בניתי שלושה מסלולי ליווי, שמאפשרים להתאים את עומק התהליך לבית, לצורך ולשינוי שאתם רוצים ליצור.
            </p>
          </div>

          {/* Editorial Service Presentation with Generous Whitespace */}
          <div className="space-y-16 text-right divide-y divide-[#E5DFD5]">
            
            {/* SERVICE 1 */}
            <div className="pt-12 first:pt-0 grid grid-cols-1 lg:grid-cols-12 gap-8 items-baseline">
              <div className="lg:col-span-4">
                <h3 className="text-xl sm:text-2xl font-medium text-[#1F1F1D] font-heebo">
                  פגישת מהפך
                </h3>
              </div>
              <div className="lg:col-span-8 space-y-4">
                <p className="text-base text-[#1F1F1D] font-medium leading-relaxed">
                  יודעים שמשהו בבית לא עובד, אבל לא יודעים מאיפה להתחיל?
                </p>
                <p className="text-sm sm:text-base text-[#55524C] font-normal leading-relaxed max-w-2xl">
                  פגישת ייעוץ ממוקדת בבית שלכם, שנועדה לעשות סדר, לזהות את הפוטנציאל ולתת לכם כיוון מקצועי וברור להמשך.
                </p>
                <p className="text-xs sm:text-sm text-[#736E67] font-normal leading-relaxed max-w-2xl">
                  בסוף הפגישה תצאו עם כיוון ברור, סדרי עדיפויות והמלצות מעשיות שתוכלו ליישם בעצמכם.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => handleServiceClick('meeting')}
                    className="text-sm font-medium text-[#1F1F1D] hover:text-[#736E67] transition-colors cursor-pointer inline-flex items-center gap-1.5"
                  >
                    <span>לפגישת מהפך</span>
                    <span>←</span>
                  </button>
                </div>
              </div>
            </div>

            {/* SERVICE 2 */}
            <div className="pt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-baseline">
              <div className="lg:col-span-4">
                <h3 className="text-xl sm:text-2xl font-medium text-[#1F1F1D] font-heebo">
                  מהפך לחלל
                </h3>
              </div>
              <div className="lg:col-span-8 space-y-4">
                <p className="text-base text-[#1F1F1D] font-medium leading-relaxed">
                  יש חלל אחד בבית שפשוט לא מתחבר?
                </p>
                <p className="text-sm sm:text-base text-[#5E5B55] font-normal leading-relaxed max-w-2xl">
                  תהליך עיצוב לחלל אחד — מהבנת הצרכים והעמדת החלל ועד צבעים, חומרים, תאורה, ריהוט, טקסטיל ונגרות לפי הצורך.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => handleServiceClick('space')}
                    className="text-sm font-medium text-[#1F1F1D] hover:text-[#736E67] transition-colors cursor-pointer inline-flex items-center gap-1.5"
                  >
                    <span>למהפך לחלל</span>
                    <span>←</span>
                  </button>
                </div>
              </div>
            </div>

            {/* SERVICE 3 */}
            <div className="pt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-baseline">
              <div className="lg:col-span-4">
                <h3 className="text-xl sm:text-2xl font-medium text-[#1F1F1D] font-heebo">
                  מהפך לבית
                </h3>
              </div>
              <div className="lg:col-span-8 space-y-4">
                <p className="text-base text-[#1F1F1D] font-medium leading-relaxed">
                  כשהבעיה היא כבר לא חדר אחד.
                </p>
                <p className="text-sm sm:text-base text-[#5E5B55] font-normal leading-relaxed max-w-2xl">
                  תהליך רחב יותר שבו מסתכלים על הבית כמכלול, מחברים בין החללים ובונים שפה עיצובית שמתאימה לחיים שלכם היום.
                </p>
                <p className="text-base font-medium text-[#1F1F1D] pt-1">
                  אותו הבית. רק הרבה יותר אתם.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => handleServiceClick('home')}
                    className="text-sm font-medium text-[#1F1F1D] hover:text-[#736E67] transition-colors cursor-pointer inline-flex items-center gap-1.5"
                  >
                    <span>למהפך לבית</span>
                    <span>←</span>
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================================================== */}
      {/* 12. PROJECTS — לפני. אחרי. ומה שביניהם. (Side-by-side photography, NO CARDS) */}
      {/* ================================================== */}
      <section id="projects-section" className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="border-t border-[#E5DFD5] pt-24 sm:pt-32 space-y-14">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 text-right">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-normal text-[#1F1F1D] tracking-tight font-heebo">
                לפני. אחרי. ומה שביניהם.
              </h2>
              <p className="text-base sm:text-[17px] text-[#5E5B55] font-normal leading-relaxed">
                אני אוהבת תמונות של לפני ואחרי. אבל מבחינתי המהפך האמיתי נמצא דווקא במה שביניהן, בהבנה למה החלל לא עבד, במה שבחרנו להשאיר, בהחלטות שעשינו ובשינויים שהפכו אותו למקום שנכון יותר לחיים שמתרחשים בו.
              </p>
              <p className="text-base text-[#1F1F1D] font-medium leading-relaxed">
                כי עיצוב טוב הוא לא רק מה שרואים בתמונה. <br className="hidden sm:inline" />
                הוא הדרך שבה הבית מרגיש ועובד אחריה.
              </p>
            </div>

            <button
              onClick={() => {
                onNavigate('projects');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-sm font-medium text-[#1F1F1D] hover:text-[#736E67] transition-colors cursor-pointer inline-flex items-center gap-2 self-start shrink-0 py-1"
            >
              <span>לראות מהפכים</span>
              <span className="text-base">←</span>
            </button>
          </div>

          {/* Mode Switcher: Interactive Slider vs Side-by-Side */}
          <div id="interactive-transformation-lens" className="space-y-6">
            <div className="flex items-center justify-between border-b border-[#E5DFD5] pb-3">
              <span className="text-xs text-[#736E67] font-normal">
                דירת 4 חדרים בגבעתיים • מהפך מלא
              </span>

              <div className="inline-flex items-center p-1 bg-[#EFECE5] rounded-xs text-xs">
                <button
                  type="button"
                  onClick={() => setProjectDisplayMode('interactive-slider')}
                  className={`px-3 py-1 cursor-pointer transition-colors inline-flex items-center gap-1.5 rounded-xs ${
                    projectDisplayMode === 'interactive-slider'
                      ? 'bg-[#1F1F1D] text-[#F8F6F0] font-medium shadow-xs'
                      : 'text-[#5E5B55] hover:text-[#1F1F1D]'
                  }`}
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  <span>עדשת חשיפה אינטראקטיבית</span>
                </button>

                <button
                  type="button"
                  onClick={() => setProjectDisplayMode('side-by-side')}
                  className={`px-3 py-1 cursor-pointer transition-colors inline-flex items-center gap-1.5 rounded-xs ${
                    projectDisplayMode === 'side-by-side'
                      ? 'bg-[#1F1F1D] text-[#F8F6F0] font-medium shadow-xs'
                      : 'text-[#5E5B55] hover:text-[#1F1F1D]'
                  }`}
                >
                  <Columns2 className="w-3.5 h-3.5" />
                  <span>זה לצד זה</span>
                </button>
              </div>
            </div>

            {/* Display Component based on mode */}
            {projectDisplayMode === 'interactive-slider' ? (
              <div className="space-y-3">
                <BeforeAfterSlider
                  beforeImage={featuredProject.beforeImage}
                  afterImage={featuredProject.afterImage}
                  beforeAlt="לפני המהפך - סלון סגור וחושך"
                  afterAlt="אחרי המהפך - סלון פתוח לאור ורוגע"
                  aspectRatio="aspect-[16/10]"
                  caption="גררו את הקו במרכז שמאלה וימינה כדי לחוות את עוצמת השינוי בין המצב הקודם לתוצאה הסופית."
                />
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {/* Before */}
                <div className="space-y-2 text-right">
                  <div className="overflow-hidden rounded-xs bg-[#EFECE5]">
                    <img
                      src={featuredProject.beforeImage}
                      alt="לפני המהפך"
                      className="w-full aspect-[4/3] object-cover"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-xs text-[#736E67] font-normal block">
                    לפני
                  </span>
                </div>

                {/* After */}
                <div className="space-y-2 text-right">
                  <div className="overflow-hidden rounded-xs bg-[#EFECE5]">
                    <img
                      src={featuredProject.afterImage}
                      alt="אחרי המהפך"
                      className="w-full aspect-[4/3] object-cover"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-xs text-[#1F1F1D] font-medium block">
                    אחרי
                  </span>
                </div>
              </div>
            )}

            <div className="pt-2 text-right">
              <button
                onClick={() => onSelectProject(featuredProject)}
                className="text-sm font-medium text-[#1F1F1D] hover:text-[#736E67] transition-colors cursor-pointer inline-flex items-center gap-2"
              >
                <span>קריאת הסיפור המלא של המהפך: {featuredProject.title}</span>
                <span className="text-sm">←</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ================================================== */}
      {/* 14. ABOUT PREVIEW — ONE large natural portrait, no icons, no badges */}
      {/* ================================================== */}
      <section id="about-section" className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="border-t border-[#E5DFD5] pt-24 sm:pt-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Portrait */}
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-xs bg-[#EFECE5]">
                <img
                  src={IMAGES.founder}
                  alt="שרי - מעצבת פנים, סטודיו מהפכים"
                  className="w-full aspect-[3/4] object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Text */}
            <div className="lg:col-span-7 text-right space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-normal text-[#1F1F1D] tracking-tight font-heebo">
                  נעים להכיר, אני שרי.
                </h2>
                <p className="text-lg sm:text-xl text-[#1F1F1D] font-medium leading-snug">
                  אני מעצבת בתים. <br />
                  <span className="font-medium text-[#1F1F1D]">אבל מתחילה דווקא באנשים.</span>
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#55524C] font-normal leading-relaxed">
                אני המעצבת ומייסדת סטודיו מהפכים. הגעתי לעיצוב פנים מתוך אהבה ארוכת שנים לחללים, לאסתטיקה וליכולת של בית להשתנות יחד עם האנשים שחיים בו.
              </p>

              <p className="text-sm sm:text-base text-[#55524C] font-normal leading-relaxed">
                כשאני נכנסת לבית בפעם הראשונה, אני לא מחפשת מיד מה להחליף. אני מסתכלת, שואלת ומקשיבה.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => {
                    onNavigate('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-sm font-medium text-[#1F1F1D] hover:text-[#736E67] transition-colors cursor-pointer inline-flex items-center gap-2"
                >
                  <span>המשך קריאה על הגישה</span>
                  <span className="text-base">←</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 15. TESTIMONIALS — Minimal presentation, no stars, no rating graphics */}
      {/* ================================================== */}
      <section id="testimonials-section" className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="border-t border-[#E5DFD5] pt-24 sm:pt-32 space-y-16">
          
          <div className="max-w-2xl text-right">
            <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-normal text-[#1F1F1D] tracking-tight font-heebo">
              מה אומרים אחרי המהפך?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 text-right">
            {TESTIMONIALS.slice(0, 3).map((item) => (
              <div key={item.id} className="space-y-4">
                <blockquote className="text-sm sm:text-base text-[#1F1F1D] font-normal leading-relaxed">
                  ״{item.quote}״
                </blockquote>
                <div className="space-y-0.5">
                  <span className="text-sm font-medium text-[#1F1F1D] block">
                    {item.clientName}
                  </span>
                  <span className="text-xs text-[#736E67] block">
                    {item.location} • {item.homeType}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================================================== */}
      {/* 16. FINAL CTA — Generous whitespace, not inside a huge colored box */}
      {/* ================================================== */}
      <section id="final-cta-section" className="max-w-3xl mx-auto px-6 sm:px-8 text-right space-y-8 pt-8">
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-normal text-[#1F1F1D] tracking-tight font-heebo leading-[1.25]">
            מרגישים שהגיע הזמן <br />
            <span className="font-medium">לראות את הבית אחרת?</span>
          </h2>

          <p className="text-base sm:text-lg text-[#5E5B55] font-normal leading-relaxed">
            אתם לא צריכים לדעת בדיוק מה אתם רוצים לשנות.
          </p>

          <p className="text-sm sm:text-base text-[#6E6A63] font-normal leading-relaxed">
            ספרו לי מה בבית כבר לא עובד לכם — ומשם נתחיל.
          </p>
        </div>

        <div className="pt-2 flex flex-wrap items-center gap-6 justify-start">
          <button
            id="final-home-cta-button"
            onClick={() => {
              onNavigate('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-8 py-3.5 text-sm font-medium text-[#F8F6F0] bg-[#1F1F1D] hover:bg-[#33312E] transition-colors rounded-xs shadow-xs cursor-pointer"
          >
            בואו נדבר
          </button>

          <a
            href={STUDIO_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[#1F1F1D] hover:text-[#736E67] transition-colors cursor-pointer inline-flex items-center gap-2 py-2"
          >
            <span>WhatsApp</span>
            <span className="text-base">←</span>
          </a>
        </div>
      </section>

    </div>
  );
};
