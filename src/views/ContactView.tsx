import React, { useState, useRef } from 'react';
import { STUDIO_INFO } from '../data/content';

interface ContactViewProps {
  preselectedServiceId?: string;
}

export const ContactView: React.FC<ContactViewProps> = ({ preselectedServiceId }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    spaceToChange: '',
    reasonForChange: '',
  });

  const [uploadedPhotos, setUploadedPhotos] = useState<{ id: string; name: string; url: string }[]>([]);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (files: FileList | null) => {
    if (!files) return;
    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setUploadedPhotos((prev) => [
            ...prev,
            {
              id: Math.random().toString(36).substring(7),
              name: file.name,
              url: e.target?.result as string,
            },
          ]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleRemovePhoto = (id: string) => {
    setUploadedPhotos((prev) => prev.filter((photo) => photo.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div className="pt-32 sm:pt-40 lg:pt-48 pb-32 text-[#1F1F1D]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-right space-y-16">
        
        {/* Header */}
        <div className="space-y-4 max-w-2xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#1F1F1D] font-heebo">
            בואו נעשה מהפך.
          </h1>

          <p className="text-base sm:text-lg text-[#5E5B55] font-normal leading-relaxed">
            ספרו לי קצת על הבית, על החלל שהייתם רוצים לשנות ועל מה שכבר לא עובד לכם. נדבר ונבין יחד איזה תהליך יכול להתאים.
          </p>
        </div>

        {/* Form & WhatsApp */}
        <div className="space-y-12">
          {isSubmitted ? (
            <div className="p-8 sm:p-12 bg-[#F2EFE9] rounded-xs border border-[#E5DFD5] space-y-4">
              <h2 className="text-2xl font-normal text-[#1F1F1D] font-heebo">
                תודה, ההודעה התקבלה.
              </h2>
              <p className="text-base text-[#5E5B55] font-normal leading-relaxed">
                קיבלתי את הפרטים. אעבור עליהם ואחזור אליכם בהקדם לשיחה ראשונית.
              </p>
              <div className="pt-2">
                <a
                  href={STUDIO_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-[#1F1F1D] hover:text-[#736E67] transition-colors inline-flex items-center gap-2"
                >
                  <span>אם תרצו, אפשר גם לכתוב לי ישירות בוואטסאפ</span>
                  <span>←</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* שם */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-medium text-[#1F1F1D] block">
                    שם מלא *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="שם פרטי ומשפחה"
                    className="w-full px-4 py-3 bg-[#F8F6F0] border border-[#D5CEC2] rounded-xs text-sm text-[#1F1F1D] placeholder-[#A8A298] focus:border-[#1F1F1D] focus:outline-none transition-colors text-right"
                  />
                </div>

                {/* טלפון */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-xs font-medium text-[#1F1F1D] block">
                    טלפון *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="050-0000000"
                    dir="ltr"
                    className="w-full px-4 py-3 bg-[#F8F6F0] border border-[#D5CEC2] rounded-xs text-sm text-[#1F1F1D] placeholder-[#A8A298] focus:border-[#1F1F1D] focus:outline-none transition-colors text-right"
                  />
                </div>

                {/* אימייל */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-medium text-[#1F1F1D] block">
                    אימייל
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="yourname@domain.com"
                    dir="ltr"
                    className="w-full px-4 py-3 bg-[#F8F6F0] border border-[#D5CEC2] rounded-xs text-sm text-[#1F1F1D] placeholder-[#A8A298] focus:border-[#1F1F1D] focus:outline-none transition-colors text-right"
                  />
                </div>

                {/* איפה נמצא הבית? */}
                <div className="space-y-2">
                  <label htmlFor="location" className="text-xs font-medium text-[#1F1F1D] block">
                    איפה נמצא הבית?
                  </label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="עיר או יישוב"
                    className="w-full px-4 py-3 bg-[#F8F6F0] border border-[#D5CEC2] rounded-xs text-sm text-[#1F1F1D] placeholder-[#A8A298] focus:border-[#1F1F1D] focus:outline-none transition-colors text-right"
                  />
                </div>

              </div>

              {/* איזה חלל או אזור הייתם רוצים לשנות? */}
              <div className="space-y-2">
                <label htmlFor="spaceToChange" className="text-xs font-medium text-[#1F1F1D] block">
                  איזה חלל או אזור הייתם רוצים לשנות?
                </label>
                <input
                  id="spaceToChange"
                  name="spaceToChange"
                  type="text"
                  value={formData.spaceToChange}
                  onChange={handleInputChange}
                  placeholder="למשל: סלון ופינת אוכל, כל הבית, חדר שינה הורים, חלל עבודה..."
                  className="w-full px-4 py-3 bg-[#F8F6F0] border border-[#D5CEC2] rounded-xs text-sm text-[#1F1F1D] placeholder-[#A8A298] focus:border-[#1F1F1D] focus:outline-none transition-colors text-right"
                />
              </div>

              {/* מה גורם לכם להרגיש שהגיע הזמן למהפך? */}
              <div className="space-y-2">
                <label htmlFor="reasonForChange" className="text-xs font-medium text-[#1F1F1D] block">
                  מה גורם לכם להרגיש שהגיע הזמן למהפך?
                </label>
                <textarea
                  id="reasonForChange"
                  name="reasonForChange"
                  rows={4}
                  value={formData.reasonForChange}
                  onChange={handleInputChange}
                  placeholder="ספרו לי קצת על התחושה בבית, מה מפריע בשגרה ומה הייתם רוצים שירגיש אחרת..."
                  className="w-full px-4 py-3 bg-[#F8F6F0] border border-[#D5CEC2] rounded-xs text-sm text-[#1F1F1D] placeholder-[#A8A298] focus:border-[#1F1F1D] focus:outline-none transition-colors text-right resize-y"
                />
              </div>

              {/* Image upload */}
              <div className="space-y-2">
                <label className="text-xs font-medium text-[#1F1F1D] block">
                  תמונות של החלל (אופציונלי)
                </label>
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="p-6 border border-dashed border-[#C5BEB2] hover:border-[#1F1F1D] rounded-xs text-center cursor-pointer transition-colors"
                >
                  <p className="text-sm text-[#5E5B55]">
                    לחצו כאן או גררו תמונות של החלל הנוכחי
                  </p>
                  <p className="text-xs text-[#8E877C] mt-1">
                    PNG, JPG, HEIC עד 15MB
                  </p>
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={(e) => handleFileUpload(e.target.files)}
                  className="hidden"
                />

                {uploadedPhotos.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                    {uploadedPhotos.map((photo) => (
                      <div key={photo.id} className="relative aspect-square rounded-xs overflow-hidden border border-[#E5DFD5]">
                        <img src={photo.url} alt={photo.name} className="w-full h-full object-cover" />
                        <button
                          type="button"
                          onClick={() => handleRemovePhoto(photo.id)}
                          className="absolute top-1 left-1 bg-[#1F1F1D]/80 text-[#F8F6F0] p-1 rounded-xs text-[10px] hover:bg-[#1F1F1D]"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Submit CTA & WhatsApp */}
              <div className="pt-4 flex flex-wrap items-center gap-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3.5 text-sm font-medium text-[#F8F6F0] bg-[#1F1F1D] hover:bg-[#33312E] rounded-xs transition-colors cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? 'שולח...' : 'בואו נדבר'}
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

            </form>
          )}

          {/* Direct contact note */}
          <div className="border-t border-[#E5DFD5] pt-8 text-xs text-[#736E67] space-y-1">
            <p>שרי פויזנר • סטודיו מהפכים לעיצוב פנים</p>
            <p>טלפון ו-WhatsApp: {STUDIO_INFO.phoneFormatted} | אימייל: {STUDIO_INFO.email}</p>
          </div>
        </div>

      </div>
    </div>
  );
};
