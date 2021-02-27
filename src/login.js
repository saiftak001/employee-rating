import React from "react";
import history from "./Routing/history";
import { Form, Button } from "react-bootstrap";

const Login = (props) => {
  const [value, setValue] = React.useState("");

  const buttonClick = (evt) => {
    if (value == "stak") {
      sessionStorage.setItem('username', value);
      sessionStorage.setItem('manager', 'false')
      sessionStorage.setItem('emp_name', 'Saif Tak');
      history.push("/main");
    } else if (value == "nnaidu") {
      sessionStorage.setItem('username', value);
      sessionStorage.setItem('manager', 'true');
      sessionStorage.setItem('emp_name', 'Nayan Naidu');
      history.push("/manager");
    }else{
      sessionStorage.setItem('username', "");
      sessionStorage.setItem('manager', '');
      sessionStorage.setItem('emp_name', '');
    }
  };

  return (
    <div className="loginBox mt-5">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="Name"
            placeholder="Enter UserName"
            onChange={(e) => setValue(e.target.value)}
          />
        </Form.Group>
        <div className="text-center">
          <Button variant="primary" type="submit" onClick={buttonClick}>
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Login;
