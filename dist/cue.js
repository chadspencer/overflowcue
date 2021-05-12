'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var useOverflowCue = function useOverflowCue(paddingValue, bufferValue, selector) {
  var container = (0, _react.useRef)(null);

  (0, _react.useEffect)(function () {
    setItemWidths();

    window.addEventListener('resize', setItemWidths);

    return function () {
      window.removeEventListener('resize', setItemWidths);
    };
  });

  var setItemWidths = function setItemWidths() {
    var items = container.current.childNodes;
    var scrollWidth = container.current.scrollWidth;
    var containerWidth = container.current.offsetWidth;
    var buffer = bufferValue ? bufferValue : 0;

    for (var index = 0; index < items.length; index++) {
      var item = items[index];

      if (selector) {
        item = item.querySelector(selector);
      }

      item.style.removeProperty('padding-left');
      item.style.removeProperty('padding-right');
    }

    if (scrollWidth > containerWidth) {
      var count = null;

      for (var _index = 0; _index < items.length; _index++) {
        var _item2 = items[_index];
        if (_item2.offsetLeft + _item2.offsetWidth > containerWidth) {
          count = _index;
          break;
        }
      }
      var _item = items[count];

      if (!_item) {
        return;
      }

      var itemPadding = paddingValue ? paddingValue : 0;
      var itemLeftEdge = containerWidth - _item.offsetLeft;
      var itemRightEdge = containerWidth - (_item.offsetLeft + _item.offsetWidth);
      var alreadyCropped = itemLeftEdge > itemPadding + buffer && itemRightEdge < -(itemPadding + buffer);

      if (!alreadyCropped) {
        for (var _index2 = 0; _index2 < items.length; _index2++) {
          var _item3 = items[_index2];

          if (selector) {
            _item3 = _item3.querySelector(selector);
          }

          _item3.style.paddingLeft = itemPadding + itemPadding / (count - 1) + 'px';
          _item3.style.paddingRight = itemPadding + itemPadding / (count - 1) + 'px';
        }
      }
    }
  };

  return container;
};

exports.default = useOverflowCue;