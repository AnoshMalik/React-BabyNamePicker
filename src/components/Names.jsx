import React from "react";
import data from "../data/babyNamesData.json";

const Names = () => {
    const dataType = data.sort(function (a, b) {
        if (a.name < b.name) {
            return -1;
        } else { 
            return 1;
        }
    });

  console.log(dataType);
  return (
    <div>
      {dataType.map(item => {
        if (item.sex == "m") {
          return <button className="btn btn-primary">{item.name}</button>;
        } else {
          return <button className="btn btn-success">{item.name}</button>;
        }
      })}
    </div>
  );
};

export default Names;
