import React from "react";

function Explorer({ setIsHtml, setIsCss, setIsJs, upload }) {
  return (
    <div className="explorer">
      <div className="title">Explorer</div>
      &nbsp;&nbsp;----------------------------
      <div className="simple"
        onClick={() => {
          setIsHtml(true);
          setIsCss(false);
          setIsJs(false);
        }}
      >
        <div className="text">index.html</div>
      </div>
      <div  className="simple"
        onClick={() => {
          setIsCss(true);
          setIsHtml(false);
          setIsJs(false);
        }}
      >
        <div className="text">index.css</div>
      </div>
      <div className="simple"
        onClick={() => {
          setIsJs(true);
          setIsHtml(false);
          setIsCss(false);
        }}
      >
        <div className="text">app.js</div>
      </div>
      <div >
        <button className="example_a" onClick={upload}>Copy PasteBin</button>
      </div>
    </div>
  );
}

export default Explorer;
