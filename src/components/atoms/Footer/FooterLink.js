import React from "react";

const FooterLink = (props) => {
  return (
    <p class="mb-4">
      <a href="#!" class="text-white">
        {props.text}
      </a>
    </p>
  );
};

export default FooterLink;
