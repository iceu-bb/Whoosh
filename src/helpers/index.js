import { useState, useLayoutEffect } from 'react';
import { useTransition, useSpring } from 'react-spring';

// copied from https://usehooks.com/
export const useLockBodyScroll = () => {
  useLayoutEffect(() => {
    // Get original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow;
    // Prevent scrolling on mount
    document.body.style.overflow = 'hidden';
    // Re-enable scrolling when component unmounts
    return () => (document.body.style.overflow = originalStyle);
  }, []); // Empty array ensures effect is only run on mount and unmount
};

export const useAnimationOnModal = () => {
  const [on, toggle] = useState(true);
  const transition = useTransition(on, null, {
    from: {
      opacity: 0,
      transform: 'translate3d(0, -80px, 0)'
    },
    enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    leave: { opacity: 0, transform: 'translate3d(0, -80px, 0)' }
  });

  const opacityAnimate = useSpring({
    opacity: on ? 1 : 0
  });
  return [on, toggle, transition, opacityAnimate];
};
