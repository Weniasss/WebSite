import React from "react";

import CardTitle from "../../atoms/ProjectCards/CardTitle";
import CardText from "../../atoms/ProjectCards/CardText";

import { useNavigate } from "react-router-dom";

const CardItem = (props) => {

  const navigate = useNavigate();

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

          <button
          onClick={() => {
            navigate('/projectDetails');
          }}  className="mt-5  rounded text-black font-black bg-gray-300 hover:bg-gray-400 hover:text-white py-2 px-6 border-2 border-gray-200">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
