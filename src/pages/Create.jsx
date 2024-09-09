import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Create = () => {
    const navigate = useNavigate();
  const [createData, setCreatetData] = useState({
    username: "",
    email: "",

    phone: "",
    name: "",
    city:"",
    zipcode:"",
    id: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreatetData((preData) => ({
      ...preData,
      [name]: value,
    }));
  };
  const handlSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(
        `https://66df4729de4426916ee42424.mockapi.io/api/users/`,
        createData
      )
      .then((res) => console.log(res.data))
      .catch((error) => console.log("error"));
    navigate("/user");
  };
    return (
<div>
      <form>
        <p>
          {" "}
          <label>
            Id &nbsp;
            <input
              type="text"
              name="id"
              value={createData.id}
              onChange={handleChange}
            />
          </label>
        </p>
        <p>
          {" "}
          <label>
            email &nbsp;
            <input
              type="text"
              name="email"
              value={createData.email}
              onChange={handleChange}
            />
          </label>
        </p>
        <p>
          {" "}
          <label>
            User Name &nbsp;
            <input
              type="text"
              name="username"
              value={createData.username}
              onChange={handleChange}
            />
          </label>
        </p>
        <p>
          {" "}
          <label>
            Phone &nbsp;
            <input
              type="text"
              name="phone"
              value={createData.phone}
              onChange={handleChange}
            />
          </label>
        </p>
        <p>
          {" "}
          <label>
            Name &nbsp;
            <input
              type="text"
              name="name"
              value={createData.name}
              onChange={handleChange}
            />
          </label>
        </p>
        <p>
          {" "}
          <label>
            City &nbsp;
            <input
              type="text"
              name="city"
              value={createData.city}
              onChange={handleChange}
            />
          </label>
        </p>
        <p>
          {" "}
          <label>
            Zipcode &nbsp;
            <input
              type="text"
              name="zipcode"
              value={createData.zipcode}
              onChange={handleChange}
            />
          </label>
        </p>
        <p>
          {" "}
          <label>
          Catch Phrase &nbsp;
            <input
              type="text"
              name="catchphrase"
              value={createData.catchphrase}
              onChange={handleChange}
            />
          </label>
        </p>
      </form>

      <button className="btn btn-danger m-5 " onClick={handlSubmit}>
        Create
      </button>
    </div>
    );
};

export default Create;