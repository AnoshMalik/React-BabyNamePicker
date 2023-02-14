import React from "react";
import data from "../data/babyNamesData.json";
import Button from "react-bootstrap/Button";

const Names = () => {
  const names = data.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    } else {
      return 1;
    }
  });

  //   console.log(names);
  return (
    <div>
      <hr />
      {names.map((item, key) => {
        if (item.sex === "m") {
          return (
            <Button
              style={{ margin: "5px" }}
              variant="outline-primary"
              key={key}
              className="btn --bs-primary-border-subtle"
            >
              {item.name}
            </Button>
          );
        } else {
          return (
            <Button
              style={{ margin: "5px" }}
              variant="outline-danger"
              key={key}
              //   className="btn btn-success"
            >
              {item.name}
            </Button>
          );
        }
      })}
      <hr />
    </div>
  );
};

export default Names;
