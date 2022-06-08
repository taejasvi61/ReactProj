import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";
import { useState } from "react";

const Editor = ({ onChange, value, language, type }) => {
  function handleChange(editor, data, value) {
    onChange(value);
  }
  return (
    <div className="editor">
      <div style={{ padding: "10px" }}>{type}</div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        options={{
          lineWrapping: true,
          lint: false,
          mode: language,
          theme: "default",
          lineNumbers: true,
        }}
      />
    </div>
  );
};

export default Editor;
