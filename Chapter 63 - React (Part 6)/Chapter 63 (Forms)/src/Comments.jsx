import { useState } from "react";
import "./Comments.css";

export default function Comments() {
  let [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: 5,
  });

  let handleInputChange = (event) => {
    setFormData((currData) => ({
      ...currData,
      [event.target.name]: event.target.value,
    }));
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    // Reset form data
    setFormData({
      username: "",
      remarks: "",
      rating: 5,
    });
  };

  return (
    <div className="comments-container">
      <h4 className="comments-heading">Give a Comment!</h4>
      <form onSubmit={handleSubmit} className="comments-form">
        <label htmlFor="username" className="form-label">
          Enter Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          className="form-input"
          value={formData.username}
          onChange={handleInputChange}
        />

        <label htmlFor="rating" className="form-label">
          Enter Rating (1 to 5)
        </label>
        <input
          type="number"
          placeholder="Rating"
          id="rating"
          name="rating"
          className="form-input"
          value={formData.rating}
          onChange={handleInputChange}
          min={1}
          max={5}
        />

        <label htmlFor="remarks" className="form-label">
          Enter Remarks
        </label>
        <textarea
          id="remarks"
          name="remarks"
          rows="5"
          placeholder="Remarks"
          className="form-textarea"
          value={formData.remarks}
          onChange={handleInputChange}
        />
        <button className="submit-button">Add a Comment</button>
      </form>
    </div>
  );
}
