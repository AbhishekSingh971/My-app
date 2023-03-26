import React, { useState } from "react";

export default function TextForm(props) {
  // this is for textarea.handleonchange
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  // this is for button.hadleOnClick
  const handleUpClick = () => {
    // console.log("uppercase was clicked"+text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case!", "success");
  };
  // this is for button. hadleDownClick
  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case!", "success");
};
// this is for button.hadleClearClick
const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared!", "success");

  };
  // This is for copy the text
  const handleCopy = () => {
    // var text = document.getElementById("myBox");
    // text.select();
    // text.setSelectionRange(0, text.length);
    // navigator.clipboard.writeText(text.value);
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges();
    props.showAlert("Copied to Clipboard!", "success");
  };
  // this is for extra space
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Remove Extra Spaces!", "success");

  };

  // This is for State
  const [text, setText] = useState("");
  // setText("Enter your text here..");

  return (
    <div
      className="container"
      style={{ color: props.mode === "dark" ? "white" : "#042743" }}
    >
      <div className="container">
        <div className="h1 mt-3 text-center mb-2">{props.heading}</div>
        <div className="mb-3 mt-2 text-center">
          <textarea
            className="form-control border border-4"
            onChange={handleOnChange}
            value={text}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#13466e",
              color: props.mode === "light" ? "black" : "white",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled = {text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleUpClick}>
          UpperCase
        </button>

        <button disabled = {text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleDownClick}>
          LowerCase
        </button>

        <button disabled = {text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleExtraSpace}>
          Remove Extra Space
        </button>

        <button disabled = {text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleCopy}>
          Copy
        </button>

        <button disabled = {text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleClearClick}>
          Clear
        </button>
      </div>

      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {text.split(/\s+/).filter(element =>{return element.length!==0}).length} Words <br /> {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").filter(element =>{return element.length!==0}).length} Minutes take to read</p>

        <h2>Preview</h2>
        <pre>{text.length > 0 ? text : "Nothing to preview!"}</pre>
      </div>
    </div>
  );
}
