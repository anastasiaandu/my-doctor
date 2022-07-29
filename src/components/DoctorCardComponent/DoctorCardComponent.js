import React from "react";

import doctorImg from "../../assets/images/humberto-chavez-FVh_yqLR9eA-unsplash.jpg";
import "./DoctorCardComponent.scss";

function DoctorCardComponent(props) {
  return (
    <>
      <div className="doctorcard">
        <div>
          <img
            src={props.picture || doctorImg}
            className="doctorcard--img"
            alt="doctor"
          />
        </div>

        <div className="doctorcard--right">
          <div>
            <p className="doctorcard--name">${props.name} </p>
            <p className="doctorcard--location ">${props.address}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DoctorCardComponent;
