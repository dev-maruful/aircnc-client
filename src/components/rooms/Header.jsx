import React from "react";
import Heading from "../heading/Heading";

const Header = () => {
  return (
    <>
      <Heading title="No bamboo here" subtitle="hello"></Heading>
      <div className="w-full md:h-[60vh] overflow-hidden rounded-xl">
        <img
          className="object-cover w-full"
          src="https://a0.muscache.com/im/pictures/e25a9b25-fa98-4160-bfd1-039287bf38b6.jpg"
          alt="header image"
        />
      </div>
    </>
  );
};

export default Header;
