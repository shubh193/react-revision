const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "first heading"),
    React.createElement("h1", {}, "2nd heading"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
