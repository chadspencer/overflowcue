import React, { useEffect } from 'react'

import { useOverflowCue } from 'overflow-cue';
import Prism from "prismjs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faNpm } from '@fortawesome/free-brands-svg-icons';

import 'prismjs/themes/prism-okaidia.css';

const App = () => {
  const containerRef = useOverflowCue(15, 4);
  
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <>
      <header>
        <h1>Overflow Cue</h1>
        <nav>
          <a href="https://github.com/chadspencer/overflowcue" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://www.npmjs.com/package/overflow-cue" target="_blank"><FontAwesomeIcon icon={faNpm} /></a>
        </nav>
      </header>
      <section className="hero">
        <article>
          <h2>Truncate the text of an overflowing item to give a visual cue that the container is scrollable.</h2>
          <p>Yes, I know you could use gradients or other visual cues, but sometimes we just want to keep it nice and clean. This is a simple little react hook that takes a set of horizontal overflowing items, such as tabs, and ensures an item is cropped appropriately to indicate the container is scrollable. Use it however you like and feel free to contribute enhancements, report bugs or just leave comments on GitHub.</p>
          <a className="button" href="https://github.com/chadspencer/overflowcue" target="_blank"><FontAwesomeIcon icon={faGithub} /> <span>View Documentation</span></a>
          <div className="code-window">
            <div className="dots">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <pre>
              <code className="language-javascript">
                {`// Install
npm i overflow-cue
yarn add overflow-cue

// Example
import { useOverflowCue } from 'overflow-cue';

const App = () => {
  const tabs = useOverflowCue(padding, buffer, selector);

  return (
    <nav ref="tabs">
      <a href="">Item 1</a>
      <a href="">Item 2</a>
      <a href="">Item 3</a>
      <a href="">Item 4</a>
      <a href="">Item 5</a>
    </nav>
  );
}`}
              </code>
            </pre>
          </div>
        </article>
      </section>
      <section>
        <article>
          <h3>Example</h3>
          <p>In scenarios where we have overlfowing items with no visible scrollbar, we need a way to indicate that the container is scrollable. Specifically with tab treatments, similar to Material Design's <a href="https://material.io/components/tabs#scrollable-tabs" target="_blank">scrollable tabs</a>, the horizontal padding often ends up creating gutters where it is not clear to the user that there are additional tabs to scroll to. Rather than adding an offset at the beginning, with this utility we're able to detect when this problem is occuring and add just enough horizontal space to overcome the confusion.</p>
          <p>Resize the window, you'll see.</p>
          <div className="example">
            <nav ref={containerRef}>
              <a href="">An Item</a>
              <a href="">Another Item</a>
              <a href="">Short Item</a>
              <a href="">Really Long Item</a>
              <a href="">An Item</a>
              <a href="">Another Item</a>
              <a href="">Short Item</a>
              <a href="">Really Long Item</a>
              <a href="">An Item</a>
              <a href="">Another Item</a>
              <a href="">Short Item</a>
              <a href="">Really Long Item</a>
              <a href="">An Item</a>
              <a href="">Another Item</a>
              <a href="">Short Item</a>
              <a href="">Really Long Item</a>
              <a href="">An Item</a>
              <a href="">Another Item</a>
              <a href="">Short Item</a>
              <a href="">Really Long Item</a>
            </nav>
          </div>
          <p>We did it! Magic right? The text is always cropped, just a little, just enough.</p>
        </article>
      </section>
      <footer>
        <nav>
          <a href="https://www.npmjs.com/package/overflow-cue" target="_blank">Install</a>
          <a href="https://github.com/chadspencer/overflowcue" target="_blank">Documentation</a>
          <a href="https://github.com/chadspencer/overflowcue/issues" target="_blank">Report Bugs</a>
          <a href="https://chadspencer.com" target="_blank">About the Author</a>
        </nav>
        <p>©{new Date().getFullYear()} Chad Spencer - All Rights Reserved</p>
      </footer>
    </>
  );
}

export default App;
