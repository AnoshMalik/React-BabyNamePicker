import React from "react";
import data from "../data/babyNamesData.json";

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
      {names.map((item,key) => {
        if (item.sex === "m") {
            return <button key={key} className="btn btn-primary">{item.name}</button>;
        } else {
            return <button key={key} className="btn btn-success">{item.name}</button>;
        }
      })}
    </div>
  );
};

export default Names;
