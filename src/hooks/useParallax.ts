import { useEffect, useRef, useState } from 'react';

interface UseParallaxOptions {
  speed?: number;
  offset?: number;
}

export function useParallax(options: UseParallaxOptions = {}) {
  const { speed = 0.5, offset = 0 } = options;
  const elementRef = useRef<HTMLElement>(null);
  const [transform, setTransform] = useState(0);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const scrolled = window.scrollY;
      const elementTop = rect.top + scrolled;
      const windowHeight = window.innerHeight;
      
      if (rect.top < windowHeight && rect.bottom > 0) {
        const yPos = (scrolled - elementTop + windowHeight) * speed + offset;
        setTransform(yPos);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, offset]);

  return { elementRef, transform };
}







