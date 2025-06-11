import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

export default function useLocoScroll(start = true) {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!start || typeof window === 'undefined') return;

    const scrollEl = scrollRef.current;

    const scroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      lerp: 0.1,
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, [start]);

  return scrollRef;
}
