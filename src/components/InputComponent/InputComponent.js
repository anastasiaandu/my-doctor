import React, { Component } from "react";
import DoctorCardComponent from "../DoctorCardComponent/DoctorCardComponent";

import doctorJson from "../../data/doctors.json";
import "./InputComponent.scss";

class InputComponent extends Component {
  state = {
    doctorList: [],
    inputCity: "",
  };

  handleInput = (event) => {
    console.log(event.target.value);
    this.setState({
      inputCity: event.target.value,
    });
  };

  findDoctor = (event) => {
    event.preventDefault();
    const doctorArr = [];
    doctorJson.map((doctor) => {
      console.log(doctor.address === this.state.inputCity);
      if (doctor.address === this.state.inputCity) {
        // this.setState({ doctorList: this.state.doctorList.push(doctor) });
        doctorArr.push(doctor);
      }
      this.setState({ doctorList: doctorArr });
      console.log(this.state.doctorList);
      //   return doctor.address === this.state.inputCity;
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.doctorList !== prevState.doctorList) {
      console.log("success");
    }
  }
  render() {
    console.log(this.state.doctorList);
    // this.setState({ doctorList: this.findDoctor });
    return (
      <div className="inputcomponent">
        <div className="inputcomponent--left">
          <form className="inputcomponent--input" onSubmit={this.findDoctor}>
            <label className="inputcomponent--input__label">
              Enter your city:
            </label>
            <input
              className="input__city"
              placeholder="enter city"
              onChange={this.handleInput}
              id="cityName"
              value={this.state.inputCity}
            ></input>
            <label className="inputcomponent--input__label">
              what medical problem are you currently experinencing now?:
            </label>
            <select className="input__city">
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
            <select className="input__city">
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
          {this.state.doctorList.map((doctor) => {
            return <DoctorCardComponent doctorInfo={doctor} />;
          })}

          {/* <DoctorCardComponent />
          <DoctorCardComponent />
          <DoctorCardComponent /> */}
        </div>
      </div>
    );
  }
}

export default InputComponent;
