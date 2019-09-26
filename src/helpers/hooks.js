import { useState, useEffect, useLayoutEffect } from 'react';
import { useTransition, useSpring } from 'react-spring';
import { throttled } from './index';

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

// copied from https://usehooks.com/
export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = event => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]); // ... passing it into this hook. // ... but to optimize you can wrap handler in useCallback before ... // ... callback/cleanup to run every render. It's not a big deal ... // ... function on every render that will cause this effect ... // It's worth noting that because passed in handler is a new ... // Add ref and handler to effect dependencies
};

export const useEscapeToCloseModal = (
  closeModal = () => {
    console.log('closed');
  }
) => {
  useEffect(() => {
    window.innerWidth > 600 &&
      window.addEventListener('keydown', throttledHandleKeyPress);

    return () => {
      window.innerWidth > 600 &&
        window.removeEventListener('keydown', throttledHandleKeyPress);
    };
  }, []);

  const handleKeyPress = ({ key }) => {
    if (key === 'Escape') {
      closeModal();
    }
  };
  const throttledHandleKeyPress = throttled(200, handleKeyPress);
};
