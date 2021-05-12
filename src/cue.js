import { useEffect, useRef } from 'react';

const useOverflowCue = (paddingValue, bufferValue, selector) => {
  const container = useRef(null);

  useEffect(() => {
    setItemWidths();

    window.addEventListener('resize', setItemWidths);

    return () => {
      window.removeEventListener('resize', setItemWidths);
    };
  });

  const setItemWidths = () => {
    const items = container.current.childNodes;
    const scrollWidth = container.current.scrollWidth;
    const containerWidth = container.current.offsetWidth;
    const buffer = bufferValue ? bufferValue : 0;

    for (let index = 0; index < items.length; index++) {
      let item = items[index];

      if (selector) {
        item = item.querySelector(selector);
      }

      item.style.removeProperty('padding-left');
      item.style.removeProperty('padding-right');
    }

    if (scrollWidth > containerWidth) {
      let count = null;
      
      for (let index = 0; index < items.length; index++) {
        const item = items[index];
        if (item.offsetLeft + item.offsetWidth > containerWidth) {
          count = index;
          break;
        }
      }
      const item = items[count];

      if (!item) {
        return;
      }

      const itemPadding = paddingValue ? paddingValue : 0;
      const itemLeftEdge = containerWidth - item.offsetLeft;
      const itemRightEdge = containerWidth - (item.offsetLeft + item.offsetWidth);
      const alreadyCropped = itemLeftEdge > (itemPadding + buffer) && itemRightEdge < -(itemPadding + buffer);

      if (!alreadyCropped) {
        for (let index = 0; index < items.length; index++) {
          let item = items[index];

          if (selector) {
            item = item.querySelector(selector);
          }

          item.style.paddingLeft = `${itemPadding + (itemPadding / (count - 1))}px`;
          item.style.paddingRight = `${itemPadding + (itemPadding / (count - 1))}px`;
        }
      }
    }
  };

  return container;
};

export default useOverflowCue;