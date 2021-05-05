import { useEffect, useRef } from 'react';

const useOverflowCue = () => {
  const container = useRef(null);

  useEffect(() => {
    setItemWidths();
    window.addEventListener('resize', setItemWidths);

    return () => {
      window.removeEventListener('resize', setItemWidths);
    };
  }, []);

  const setItemWidths = () => {
    const isFlex = container.current.style.display === 'flex';
    if (isFlex) {
      container.current.style.flexBasis = 'unset';
    } else {
      container.current.style.width = 'unset';
    };

    const scrollWidth = container.current.scrollWidth;
    const width = container.current.offsetWidth;
    const tabs = container.current.childNodes;

    if (scrollWidth > width) {
      let count = null;
      
      for (let index = 0; index <= tabs.length; index++) {
        const item = tabs[index];
        if (item.offsetLeft + item.offsetWidth > width) {
          count = index;
          break;
        }
      }

      const tabWidth = width / count;
      const computedTabWidth = `${tabWidth + (tabWidth / (count * 2))}px`;

      if (isFlex) {
        container.current.style.flexBasis = computedTabWidth;
      } else {
        container.current.style.flexBasis = computedTabWidth;
      };
    }
  };

  return container;
};

export default useOverflowCue;