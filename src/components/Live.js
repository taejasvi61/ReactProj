import React from "react";

function Live({ srcDoc }) {
  return (
    <div className="output">
      <iframe title="output" srcDoc={srcDoc} />
    </div>
  );
}

export default Live;
