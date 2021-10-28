import React from "react";
import uses from "../data/uses.json";
import Image from "next/image";

const Uses = () => {
  return (
    <div className="grid grid-cols-3 gap-y-12 mb-10">
      {uses.map((use) => (
        <div key={use.id}>
          <Image src={use.icon} alt="icon" width={100} height={100} />
          <h3 className="font-bold text-secondary-dark text-lg">{use.title}</h3>
          <p>{use.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Uses;
