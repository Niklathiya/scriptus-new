import React from "react";
import * as IMAGE from "../../image";

const Social = () => {
  const socialdata = [
    {
      social_image: IMAGE.Facebook,
      social_name: "facebook",
    },
    {
      social_image: IMAGE.Instagram,
      social_name: "instagram",
    },
    {
      social_image: IMAGE.Linkedin,
      social_name: "linkedin",
    },
    {
      social_image: IMAGE.Dribble,
      social_name: "dribble",
    },
    {
      social_image: IMAGE.X,
      social_name: "x",
    },
  ];

  return (
    <div className="social-icons">
      {socialdata.map((social, index) => {
        return (
          <>
            <div key={index}>
              <img src={social.social_image} alt={social.social_name} />
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Social;