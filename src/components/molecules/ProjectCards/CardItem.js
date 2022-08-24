import React from "react";

import CardTitle from "../../atoms/ProjectCards/CardTitle";
import CardText from "../../atoms/ProjectCards/CardText";

const CardItem = (props) => {
  return (
    <div class="flex justify-center mb-8 ">
      <div class="bg-white max-w-sm border-black border-dashed border-2">
        <div class="p-6">
          <CardTitle title={props.title} />

          <CardText
            text={props.text}
            description={props.description}
            mark={props.mark}
          />
        </div>
      </div>
    </div>
  );
};

export default CardItem;
