import { ReactNode, useEffect, useRef, useState } from 'react';
import { cn } from '../utils/cn';
import { useScrollDirection } from '../hooks/useScrollDirection';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  distance?: number;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  distance = 50,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const { scrollDirection } = useScrollDirection();

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const checkVisibility = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      
      // Check if element is the first section (hero) at top of page
      const isFirstSection = element.closest('section')?.id === 'hero-section' || 
                             (scrollY < 100 && rect.top < windowHeight && rect.top >= -200);
      
      // Always show if element is at the top of the page or in viewport
      if (isFirstSection || (rect.top < windowHeight && rect.bottom > 0)) {
        setIsVisible(true);
        if (!hasAnimated) {
          setHasAnimated(true);
        }
      } else {
        // Only hide if element is completely out of viewport
        if (rect.bottom < -50 || rect.top > windowHeight + 50) {
          // Don't hide if we're scrolling back to top
          if (scrollY < 100 && rect.top < windowHeight + 200) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        } else {
          // Element is partially visible, keep it visible
          setIsVisible(true);
        }
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        checkVisibility();
      },
      {
        threshold: 0.1,
        rootMargin: '0px',
      }
    );

    observer.observe(element);
    checkVisibility(); // Initial check

    // Also check on scroll to handle top of page case
    window.addEventListener('scroll', checkVisibility, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', checkVisibility);
    };
  }, [scrollDirection, hasAnimated]);

  const getTransform = () => {
    if (!isVisible && hasAnimated) {
      switch (direction) {
        case 'up':
          return `translateY(${distance}px)`;
        case 'down':
          return `translateY(-${distance}px)`;
        case 'left':
          return `translateX(${distance}px)`;
        case 'right':
          return `translateX(-${distance}px)`;
        default:
          return 'translateY(0)';
      }
    }
    return 'translateY(0) translateX(0)';
  };

  return (
    <div
      ref={elementRef}
      className={cn('will-change-[opacity,transform]', className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s, transform ${duration}s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

