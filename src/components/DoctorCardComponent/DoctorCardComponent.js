import React from "react";

import doctorImg from "../../assets/images/humberto-chavez-FVh_yqLR9eA-unsplash.jpg";
import "./DoctorCardComponent.scss";

function DoctorCardComponent(props) {
  return (
    <>
      <div className="doctorcard__container">
        <div className="doctorcard">
          <div>
            <img
              src={props.doctorInfo.picture}
              className="doctorcard--img"
              alt="doctor"
            />
          </div>

          <div className="doctorcard--right">
            <div>
              <p className="doctorcard--name">
                {props.doctorInfo.name || "Doctor Name"}{" "}
              </p>
              <p className="doctorcard--location ">
                {props.doctorInfo.address || "Doctor Address"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DoctorCardComponent;
