import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const User = ({ setId }) => {
  const navigate = useNavigate();
  const [deleteData, setDeleteData] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, [deleteData]);

  const fetchData = async () => {
    await axios
      .get("https://66df4729de4426916ee42424.mockapi.io/api/users")
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  };
  const handlEdit = (id) => {
    setId(id);
    navigate(`/edit/${id}`);
  };
  const handlDelete = async (id) => {
    await axios
      .delete(`https://66df4729de4426916ee42424.mockapi.io/api/users/${id}`)
      .then(res => setDeleteData(res.data))
      .catch((error) => console.log(error));
      console.log(id);
      
  };

  return (
    <div>
      <table className="table table-danger">
        <thead>
          <tr>
            <th scope="col">User ID</th>
            <th scope="col">User Name</th>
            <th scope="col">Name</th>
            <th scope="col">User Email</th>
            <th scope="col text-center " colSpan={2}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((ele, index) => {
            return (
              <tr key={index}>
                <th scope="row">{ele.id}</th>
                <td>{ele.username}</td>
                <td>{ele.name}</td>
                <td>{ele.email}</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => {
                      handlEdit(ele.id);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className=" btn btn-danger"
                    onClick={() => {
                      handlDelete(ele.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <button className="btn btn-primary m-5 fs-4" onClick={()=>{navigate('/Create')}}>Create</button>
      </div>
    </div>
  );
};

export default User;
