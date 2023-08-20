import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => Becomes HTML Element when its Renders.

const heading = React.createElement("h1", {id: "heading"}, "Hello Raj here");
//const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(heading);

// JSX

const jsxheading = <h1>Namsate From JSX</h1>;
//const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(jsxheading);

// React Functional Components

/**const HeadingComponent = () => {
    return <h1>Namaste React Functional Component</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
*/

// Component Composition (Nesting of Component inside component)

const Title = () => (
    <h1 className = "head">Namaste React Using JSX</h1>
    );
 
const HeadingComponent = () => (
    <div id = "container">
      <Title />
      <h1 className="heading">Namaste React Using Functional Component</h1>
    </div>
    );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);