'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var useOverflowCue = function useOverflowCue() {
  var container = (0, _react.useRef)(null);

  (0, _react.useEffect)(function () {
    setItemWidths();
    window.addEventListener('resize', setItemWidths);

    return function () {
      window.removeEventListener('resize', setItemWidths);
    };
  }, []);

  var setItemWidths = function setItemWidths() {
    var isFlex = container.current.style.display === 'flex';
    if (isFlex) {
      container.current.style.flexBasis = 'unset';
    } else {
      container.current.style.width = 'unset';
    };

    var scrollWidth = container.current.scrollWidth;
    var width = container.current.offsetWidth;
    var tabs = container.current.childNodes;

    if (scrollWidth > width) {
      var count = null;

      for (var index = 0; index <= tabs.length; index++) {
        var item = tabs[index];
        if (item.offsetLeft + item.offsetWidth > width) {
          count = index;
          break;
        }
      }

      var tabWidth = width / count;
      var computedTabWidth = tabWidth + tabWidth / (count * 2) + 'px';

      if (isFlex) {
        container.current.style.flexBasis = computedTabWidth;
      } else {
        container.current.style.flexBasis = computedTabWidth;
      };
    }
  };

  return container;
};

exports.default = useOverflowCue;