import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    passWord: "",
  });

  const handleInputChange = (event) => {
    const fieldName = event.target.name;
    const newValue = event.target.value;

    setFormData((currData) => ({
      ...currData,
      [fieldName]: newValue,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData({
      fullName: "",
      userName: "",
      passWord: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name : </label>
        <input
          id="name"
          name="fullName"
          placeholder="Enter Your Name"
          type="text"
          value={formData.fullName}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="username">User Name : </label>
        <input
          id="username"
          placeholder="Enter Your User Name"
          type="text"
          name="userName"
          value={formData.userName}
          onChange={handleInputChange}
        />
        <br />

        <label htmlFor="password">Password : </label>
        <input
          id="password"
          placeholder="Enter Your Psasword"
          type="password"
          name="passWord"
          value={formData.passWord}
          onChange={handleInputChange}
        />
        <br />

        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
