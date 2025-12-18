import { ReactNode, useEffect, useRef, useState } from 'react';
import { cn } from '../utils/cn';
import { useScrollDirection } from '../hooks/useScrollDirection';

interface FadeOnScrollProps {
  children: ReactNode;
  className?: string;
  fadeOutDistance?: number;
  fadeInDistance?: number;
}

export function FadeOnScroll({
  children,
  className,
  fadeOutDistance = 300,
  fadeInDistance = 150,
}: FadeOnScrollProps) {
  const [opacity, setOpacity] = useState(0);
  const [transform, setTransform] = useState(30);
  const elementRef = useRef<HTMLDivElement>(null);
  const { scrollDirection } = useScrollDirection();
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementBottom = rect.bottom;
      const elementCenter = elementTop + rect.height / 2;
      const viewportCenter = windowHeight / 2;

      // Element is entering viewport from bottom
      if (elementTop < windowHeight && elementBottom > 0) {
        if (!hasEntered) {
          setHasEntered(true);
        }

        // Calculate how far element is from viewport center
        const distanceFromCenter = Math.abs(elementCenter - viewportCenter);
        const maxDistance = windowHeight * 0.6;

        // Fade in/out based on position
        if (scrollDirection === 'down') {
          // Scrolling down: fade in when coming from bottom
          if (elementTop < viewportCenter) {
            const progress = Math.max(0, Math.min(1, (viewportCenter - elementTop) / fadeInDistance));
            setOpacity(progress);
            setTransform((1 - progress) * 30);
          } else {
            // Fade out when going up past center
            const progress = Math.max(0, Math.min(1, (elementTop - viewportCenter) / fadeOutDistance));
            setOpacity(1 - progress * 0.5);
            setTransform(progress * 20);
          }
        } else {
          // Scrolling up: fade in when coming from top
          if (elementBottom > viewportCenter) {
            const progress = Math.max(0, Math.min(1, (elementBottom - viewportCenter) / fadeInDistance));
            setOpacity(progress);
            setTransform((1 - progress) * -30);
          } else {
            // Fade out when going down past center
            const progress = Math.max(0, Math.min(1, (viewportCenter - elementBottom) / fadeOutDistance));
            setOpacity(1 - progress * 0.5);
            setTransform(progress * -20);
          }
        }
      } else {
        // Element is out of viewport
        if (elementBottom < 0) {
          // Element is above viewport
          setOpacity(0);
          setTransform(-30);
        } else if (elementTop > windowHeight) {
          // Element is below viewport
          setOpacity(0);
          setTransform(30);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, [fadeOutDistance, fadeInDistance, scrollDirection, hasEntered]);

  return (
    <div
      ref={elementRef}
      className={cn('will-change-[opacity,transform]', className)}
      style={{
        opacity,
        transform: `translateY(${transform}px)`,
        transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {children}
    </div>
  );
}

