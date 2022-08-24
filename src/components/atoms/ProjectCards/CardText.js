import React from "react";

const CardText = (props) => {
  return (
    <>
      <p class="mt-3">
        <span className="font-black">
          Technology :<br></br>
        </span>{" "}
        {props.text}
      </p>
      <p class="mt-3">
        <span className="font-black">
          Description :<br></br>
        </span>{" "}
        {props.description}
      </p>
    </>
  );
};

export default CardText;
