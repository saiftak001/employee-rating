import React from "react";
import history from "./Routing/history";
import { Button, Container } from "react-bootstrap";

const Manager = (props) => {
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
          <Button
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
          </Button>
        </div>
      </div>
    </>
  );
};

export default Manager;
