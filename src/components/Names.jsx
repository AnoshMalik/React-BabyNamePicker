import React from "react";
import data from "../data/babyNamesData.json";

const Names = () => {
  const dataType = data.map((d) => d.name).sort();
  // console.log(dataType);
  return (
    <div>
      {data.map((item) => {
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
