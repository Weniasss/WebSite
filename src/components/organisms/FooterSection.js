import React from "react";
import FooterColumn1 from "../molecules/Footer/FooterColumn1";
import FooterColumn2 from "../molecules/Footer/FooterColumn2";
import FooterColumn3 from "../molecules/Footer/FooterColumn3";

const FooterSection = () => {
  return (
    <footer class="text-center lg:text-left bg-zinc-800 text-gray-600">
      <div class="mx-6 py-10 text-center md:text-left">
        <div class="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FooterColumn1 />

          <FooterColumn2
            title1="Products"
            text1="Example Products"
            text2="Example Products"
            text3="Example Products"
            text4="Example Products"
          />

          <FooterColumn2
            title1="Products"
            text1="Example Products"
            text2="Example Products"
            text3="Example Products"
            text4="Example Products"
          />

          <FooterColumn3 />
        </div>
      </div>

      <div class="text-center p-6 bg-zinc-800 border-t-2">
        <span className="text-white">© 2022 Copyright:</span>
        
      </div>
    </footer>
  );
};

export default FooterSection;
