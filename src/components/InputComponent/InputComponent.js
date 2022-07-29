import React from "react";
import DoctorCardComponent from "../DoctorCardComponent/DoctorCardComponent";
import "./InputComponent.scss";

function InputComponent() {
  return (
    <div className="inputcomponent">
      <div className="inputcomponent--left">
        <form className="inputcomponent--input">
          <label className="inputcomponent--input__label">
            Enter your city:
          </label>
          <input placeholder="enter address"></input>
          <label className="inputcomponent--input__label">
            what medical problem are you currently experinencing now?:
          </label>
          <select>
            <option value="abdominal-pain">abdominal pain</option>
            <option value="arthritis-pain">arthritis pain</option>
            <option selected value="general-visit">
              general visit
            </option>
            <option value="broken-bones">broken bones</option>
          </select>

          <label className="inputcomponent--input__label">
            additional support (wheel chair, hearing aids, visual aids):
          </label>
          <select>
            <option value="abdominal-pain">Wheel Chair</option>
            <option value="arthritis-pain">Hearing Aids</option>
            <option selected value="general-visit">
              Visual Aids
            </option>
          </select>
          <div className="inputcomponent--submitbutton__container">
            <input
              type="submit"
              className="inputcomponent--submitbutton"
              value="See List"
            />
          </div>
        </form>
      </div>
      <div className="inputcomponent--right">
        <DoctorCardComponent />
      </div>
    </div>
  );
}

export default InputComponent;
