import React, { useEffect } from 'react'

import { useOverflowCue } from 'overflow-cue';
import Prism from "prismjs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faNpm } from '@fortawesome/free-brands-svg-icons';

import 'prismjs/themes/prism-okaidia.css';

const App = () => {
  const containerRef = useOverflowCue();
  
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <>
      <header>
        <h1>Overflow Cue</h1>
        <nav>
          <a href="https://github.com/chadspencer/overflowcue" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://www.npmjs.com/package/overflowcue" target="_blank"><FontAwesomeIcon icon={faNpm} /></a>
        </nav>
      </header>
      <section className="hero">
        <article>
          <h2>Lorem ipsum doler sit amet.</h2>
          <p>Aenean in elit at ipsum scelerisque venenatis at ut dolor. Integer lobortis laoreet sodales. Aenean quis lacus ligula. Morbi pharetra faucibus lacus, sed commodo quam elementum ut. Vestibulum aliquam nisi metus, ornare molestie sem pellentesque a. Vivamus mi nisl, feugiat id elit et, consectetur tincidunt turpis.</p>
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
  const tabs = useOverflowCue();

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
          <p>The most common use case I've ran into for needing this component is to conditionally render shadows on a container. Having shadows on a scrollable container subtly let's the user know what to do, especially when scrollbars are not present. It's really nice to hide those shadows when you're at the start or end of the container too.</p>
          <p>A little something like this:</p>
          <div className="example">
            <div>
              Header
              <nav>
                <span ref={containerRef}>
                  <a href="#">Nav Item</a>
                  <a href="#">Nav Item</a>
                  <a href="#">Nav Item</a>
                  <a href="#">Nav Item</a>
                  <a href="#">Nav Item</a>
                  <a href="#">Nav Item</a>
                  <a href="#">Nav Item</a>
                  <a href="#">Nav Item</a>
                  <a href="#">Nav Item</a>
                  <a href="#">Nav Item</a>
                </span>
              </nav>
            </div>
          </div>
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
