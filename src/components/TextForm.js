import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows={8}
            placeholder="Enter Your Text Here..."
            style={{
              backgroundColor: props.mode === "dark" ? "#203354" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          />
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Upper Case
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert to Lower Case
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3>Your Text Summery</h3>
        <p>
          <b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</b> words and <b>{text.length}</b>{" "}
          characters
        </p>
        <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes to read</p>
        <h3>Preview</h3>
        <p>
          {text.length > 0
            ? text
            : "Nothing to preview"}
        </p>
      </div>
    </>
  );
}
