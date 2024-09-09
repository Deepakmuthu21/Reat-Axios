import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    await axios
      .get("https://66df4729de4426916ee42424.mockapi.io/api/users")
      .then((res) => setUser(res.data))
      .catch((error) => console.log("erroe"));
  };
  return (
    <div>
      <div className="row row-cols-1 m-2 row-cols-md-3 g-4">
        {user.map((element, index) => {
          return (
            <div key={index} className="col">
              <div className="card bg-success">
                <div className="card-header">
                  <h5>User Name : {element.username}</h5>
                </div>
                <div className="card-body ">
                  <h6 className="card-title">Name : {element.name}</h6>
                  <h6 className="card-title">Email : {element.email}</h6>

                  <p className="card-text">
                    Address :
                     street {element.city} city
                    zipcode:{element.zipcode}
                  </p>
                 
                  <h6 className="card-title">Phone : {element.phone}</h6>

                  <div className="card-footer  ">
                    <h6 className="card-title text-center">Company</h6>
                    
                    <h6 className="card-title">
                      Catch phrase : {element.catchphrase}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
