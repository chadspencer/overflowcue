# overflow-cue

> A react hook that takes a set of horizontal overflowing items, such as tabs, and ensures an item is cropped appropriately to indicate the container is scrollable.

<h2>Homepage</h2>

https://chadspencer.dev/overflowCue/

<h2>Usage</h2>

The hook first determines if the items are overflowing their container on load and upon resizing. If they are overflwoing it will count the maximum number of items that can be visible and sets all the item widths to ensure the first overflowing item gets visually chopped so the user knows the container is scrollable without the need for a scrollbar or other visual cue.

```
import { useOverflowCue } from 'overflow-cue';

const container = useOverflowCue(buffer);
```

An optional buffer number can be set to give a little more fine-tuned control over how much of the cropped text is shown.

A <code>ref</code> is required on the wrapping container element in order for the hook to be applied. Therefore functional components will work only when using <code>forwardRef</code>. If you are consuming a functional component that you cannot add <code>forwardRef</code> to, you must use a wrapper element to attach the <code>ref</code> to and style that container accordingly.

<b>Note:</b> When the item text length is short there are occasional scenarios where the cropped text won't show properly. This happens when the total horizontal padding is greater than the text length of an item. In these situations, reduce the horizontal padding of the items.

<h4>Parameters</h4>

```
useBottomScrollListener(
  buffer?: number
);
```

<h2>Example</h2>

```
import { useOverflowCue } from 'overflow-cue';

const tabs = useOverflowCue(4);

return (
  <nav ref="tabs">
    <a href="">Item 1</a>
    <a href="">Item 2</a>
    <a href="">Item 3</a>
    <a href="">Item 4</a>
    <a href="">Item 5</a>
  </nav>
);
```

<h2>Package Contents</h2>

The package contains the following directories and files:

```html
package.json
CHANGELOG.md
README.md
/dist
  └───index.js - 0.36 KB
  └───cue.js - 2 KB
````

<h2>Dependencies</h2>

<code>overflow-cue</code> does not have any dependencies. However, it does make use of React Hooks so it does have a peer dependency of <code>"react": ">=16.8.0"</code>.