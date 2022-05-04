import React from "react";
import { Image } from "react-bootstrap";

export default function Contact() {
  return (
    <>
      <div className="text-center mt-5">
        <h2 className="text-center">Reach out to us at myequitive@gmail.com!</h2>
        <Image width={500} height={500} className="img-thumbnail secondary-image" src={require("./message.png")}
          alt={"people"} roundedCircle />
      </div>
    </>
  );
}
