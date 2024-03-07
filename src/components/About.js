import React from "react";

export default function About(props) {
  return (
    <div
      className="container"
      style={{
        backgroundColor: props.mode === "dark" ? "#203354" : "white",
        color: props.mode === "dark" ? "white" : "black",
      }}
    >
      <h1 className="my-2">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{
                backgroundColor: props.mode === "dark" ? "#203354" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
            >
              <strong>About TextUtils</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "dark" ? "#203354" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
            >
              <strong>
                TextUtils is a ReactJs website built primarily to do various
                operations on regular typed text.
              </strong>{" "}
              You can safely use WordPad or NotePad for text drafting, and
              saving, but TextUtils offers much more than simple text drafting
              and formatting. TextUtils can convert your text to any case in
              just one simple click of a button. You can even remove whitespaces
              from your scripted documents. It does a detailed analyzing of your
              text, and provides an output of words, and characters, along with
              reading time as well. The best part of TextUtils is that it is an
              open source project, as a result, dozens of new features are in
              the upcoming, which definitely makes it a cut above the rest.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{
                backgroundColor: props.mode === "dark" ? "#203354" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
            >
              <strong>Features of TextUtils</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "dark" ? "#203354" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
            >
              <ul>
                <li>
                  <b>Analyze Your Text: </b> It is a Simple Text Analyzer ,
                  which mutilates your text, but in a tender way{" "}
                </li>
                <li>
                  <b>Free To Use: </b>It is completely free to use. No credit
                  cards required. Use as much as you want!!
                </li>
                <li>
                  <b>Browser Compatible: </b>It is compatible with all of your
                  favorite browsers.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
