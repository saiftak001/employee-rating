import React, { useEffect } from "react";
import axios from 'axios';
import history from "./Routing/history";
import { Button, Container } from "react-bootstrap";

function Manager (props) {

  const [data, setData] = React.useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8285/employees/`+sessionStorage.getItem('Id'))
      .then(res => {
        let data=res.data;
        console.log(data[0].firstname)
        setData(data);
      })
}, [])



  const buttonClick = (evt) => {
    sessionStorage.setItem('username', evt.target.value);
    sessionStorage.setItem('emp_name', evt.target.textContent);
    history.push({ pathname: "/main" });
  };

  return (
    <>
      <div className="align-items-center header">Report Page</div>
      <div className="p-3">
        <div className="">
          {
            data.splice(1,data.length).map((emp, index) => {
                   return <Button
                  variant="primary"
                  className="mr-2"
                  type="submit"
                  value=""
                  onClick={buttonClick}
                >
                  {emp.firstname}
                </Button>
            })
          }
          {/* <Button
            variant="primary"
            className="mr-2"
            type="submit"
            value="stak"
            onClick={buttonClick}
          >
            Saif tak
          </Button>
          <Button
            variant="primary"
            className="mr-2"
            type="submit"
            value="skumar"
            onClick={buttonClick}
          >
            Saurabh Kumar
          </Button>
          <Button
            variant="primary"
            className="mr-2"
            type="submit"
            value="ayush"
            onClick={buttonClick}
          >
            Ayush
          </Button>
          <Button
            variant="primary"
            className="mr-2"
            type="submit"
            value="rahul"
            onClick={buttonClick}
          >
            Rahul
          </Button> */}
        </div>
      </div>
    </>
  );
};

export default Manager;
