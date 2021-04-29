import React from 'react';
import './index.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="title">
          <h1 id="title">Build It Yourself.</h1>
          <p id="tag">Learn machine learning by building your own model.</p>
          <a href="/buildmodel">
            <button id="button">START HERE</button>
          </a>
        </div>
      </div>
    )
  }
}

export default Home;