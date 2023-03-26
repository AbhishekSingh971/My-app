import React from "react";

export default function About(props) {
  // const [style, setStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  //   border: "1px solid black",
  // });

  // const [btnText, setBtnText] = useState("Enable Light Mode");

  // const toggleStyle = () => {
  //   if (style.color === "white") {
  //     setStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //       border: "1px solid black",
  //     });
  //     setBtnText("Enable Dark mode");
  //   } else {
  //     setStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //       border: '1px solid white'
  //     });
  //     setBtnText("Enable Light mode");
  //   }
  // };

  let style ={
    color: props.mode === "light"?"#042743":"white",
    backgroundColor: props.mode === "light"?"azure":"rgb(36 74 104)",
    border: `1px solid props.mode === "light"?"black":"white"`
  }

  return (
    <div className="container" style={{color: props.mode === "light"?"#042743":"white"}}>
      <h1 className="text-center my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              style={style}
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze Your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={style}>
              Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              style={style}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={style}>
              Textutils is a free character counter tool that provides instant character count & word count statistics for a given text. Textutils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              style={style}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={style}>
            This word counter software works in any web browsers such as chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
