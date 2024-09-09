import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Edit = ({ id }) => {
  const navigate = useNavigate();
  const [editData, setEditData] = useState({
    username: "",
    email: "",

    phone: "",
    name: "",
    city:"",
    zipcode:"",
    id: ""

  });
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    await axios
      .get(`https://66df4729de4426916ee42424.mockapi.io/api/users/${id}`)
      .then((res) => setEditData(res.data))
      .catch((error) => console.log(error));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((preData) => ({
      ...preData,
      [name]: value,
    }));
  };
  const handlSubmit = async (e) => {
    e.preventDefault();
    await axios
      .put(
        `https://66df4729de4426916ee42424.mockapi.io/api/users/${id}`,
        editData
      )
      .then((res) => console.log(res.data))
      .catch((error) => console.log("error"));
    navigate("/user");
  };
  return (
    <div>
      <form className="m-5">
        <p >
          {" "}
          <label >
            Id &nbsp;
            <input
              type="text"
              name="id"
              value={editData.id}
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
              value={editData.email}
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
              value={editData.username}
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
              value={editData.phone}
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
              value={editData.name}
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
              value={editData.city}
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
              value={editData.zipcode}
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
              value={editData.chathphrase}
              onChange={handleChange}
            />
          </label>
        </p>
      </form>

      <button className="btn btn-danger m-5 " onClick={handlSubmit}>
        Update
      </button>
    </div>
  );
};

export default Edit;
