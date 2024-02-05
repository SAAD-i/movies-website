import React from "react";
import Card from "./Card";

const Section = (props) => {
  const { value } = props;
  // console.log(value);
  return (
    <>
      <div className="font-serif p-2 pt-28">
        <h1 className="text-5xl font-bold text-white py-5">Popular Movies</h1>
        <div className="grid grid-cols-4 gap-1">
          {value.map((val, i) => {
            return <Card key={i} value={val} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Section;
