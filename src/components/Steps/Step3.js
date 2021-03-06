import React from "react";

export default function Step3(props) {
  if (props.currentStep !== 3) {
    return null;
  }

  return (
    <div className="form-group">
      <label htmlFor="password">Password</label>
      <input
        className="form-control"
        id="password"
        name="password"
        type="password"
        placeholder="Enter password"
        value={props.password}
        onChange={props.handleChange}
      />
    </div>
  );
}
