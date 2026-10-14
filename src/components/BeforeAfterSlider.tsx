import React, { useState, useRef, useCallback, useEffect } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
  aspectRatio?: string;
  caption?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeAlt = 'לפני המהפך',
  afterAlt = 'אחרי המהפך',
  beforeLabel = 'לפני',
  afterLabel = 'אחרי',
  className = '',
  aspectRatio = 'aspect-[16/10]',
  caption,
}) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    
    if (percentage < 5) percentage = 5;
    if (percentage > 95) percentage = 95;
    
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleStopDrag = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleStopDrag);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleStopDrag);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleStopDrag);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleStopDrag);
    };
  }, [isDragging, handleMouseMove, handleTouchMove, handleStopDrag]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      setSliderPosition((prev) => Math.max(5, prev - 5));
    } else if (e.key === 'ArrowLeft') {
      setSliderPosition((prev) => Math.min(95, prev + 5));
    }
  };

  return (
    <div className={`w-full select-none ${className}`}>
      <div
        ref={containerRef}
        id="before-after-interactive-container"
        tabIndex={0}
        role="slider"
        aria-label="השוואת לפני ואחרי"
        aria-valuenow={Math.round(sliderPosition)}
        aria-valuemin={0}
        aria-valuemax={100}
        onKeyDown={handleKeyDown}
        onMouseDown={(e) => {
          setIsDragging(true);
          handleMove(e.clientX);
        }}
        onTouchStart={(e) => {
          setIsDragging(true);
          handleMove(e.touches[0].clientX);
        }}
        className={`relative w-full ${aspectRatio} overflow-hidden rounded-xs bg-[#EFECE5] cursor-ew-resize border border-[#E5DFD5] group focus:outline-none focus:ring-1 focus:ring-[#1F1F1D]`}
      >
        {/* AFTER Image (Full background) */}
        <img
          src={afterImage}
          alt={afterAlt}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          loading="lazy"
        />

        {/* AFTER Label */}
        <div className="absolute bottom-4 left-4 z-10 pointer-events-none">
          <span className="inline-block px-3 py-1 text-xs tracking-wider bg-[#F8F6F0]/95 text-[#1F1F1D] border border-[#E5DFD5] rounded-xs font-medium">
            {afterLabel}
          </span>
        </div>

        {/* BEFORE Image (Clipped overlay) */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={beforeImage}
            alt={beforeAlt}
            style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100vw' }}
            className="absolute inset-y-0 left-0 h-full max-w-none object-cover"
            loading="lazy"
          />
          {/* BEFORE Label */}
          <div className="absolute bottom-4 right-4 z-10 pointer-events-none">
            <span className="inline-block px-3 py-1 text-xs tracking-wider bg-[#F8F6F0]/95 text-[#1F1F1D] border border-[#E5DFD5] rounded-xs font-medium">
              {beforeLabel}
            </span>
          </div>
        </div>

        {/* Divider Line */}
        <div
          className="absolute inset-y-0 z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute inset-y-0 -left-[0.5px] w-[1px] bg-[#F8F6F0] shadow-[0_0_6px_rgba(0,0,0,0.2)]" />
          
          {/* Draggable Handle */}
          <div
            className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-10 rounded-xs bg-[#F8F6F0] border border-[#E5DFD5] text-[#1F1F1D] shadow-sm flex flex-col items-center justify-center gap-1 transition-all ${
              isDragging ? 'scale-105 border-[#1F1F1D] shadow-md' : 'group-hover:border-[#1F1F1D]'
            }`}
          >
            <div className="flex gap-[3px] items-center" aria-hidden="true">
              <span className="w-[1px] h-3.5 bg-[#1F1F1D]" />
              <span className="w-[1px] h-3.5 bg-[#736E67]" />
            </div>
          </div>
        </div>

        {/* Subtle Hint on Hover */}
        <div className="absolute top-4 inset-x-0 flex justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="px-3 py-1 text-xs tracking-wider text-[#1F1F1D] bg-[#F8F6F0]/90 border border-[#E5DFD5] rounded-xs font-normal">
            גררו להזזת נקודת המבט
          </span>
        </div>
      </div>

      {caption && (
        <p className="mt-3 text-xs text-[#736E67] font-normal leading-relaxed text-right">
          {caption}
        </p>
      )}
    </div>
  );
};
