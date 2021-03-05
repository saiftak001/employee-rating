import React from "react";
import axios from 'axios';
import history from "./Routing/history";
import { Form, Button } from "react-bootstrap";
import { getDefaultNormalizer } from "@testing-library/react";

const Login = (props) => {
  const [value, setValue] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [data, setData] = React.useState("");


  const buttonClick = (evt) => {

  axios
      .get(`http://localhost:8285/employeesByName/${value}`)
      .then(res => {
        let data=res.data
        if (data.firstname===value && data.password===pwd){
          sessionStorage.setItem('Id',data.employeeId);
          sessionStorage.setItem('manager', data.type);
          if(sessionStorage.getItem("manager")==="true"){
            sessionStorage.setItem('mag_name', data.firstname);
          }else{
            sessionStorage.setItem('emp_name', data.firstname);
          }
          if(data.type==='true'){
            history.push("/manager");
          }else{
            history.push("/main");
          }
        }
        // setData(data)
      })
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
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="Password"
            placeholder="Enter Password"
            onChange={(e) => setPwd(e.target.value)}
          />
        </Form.Group>
        <div className="text-center">
          <Button variant="primary" type="button" onClick={buttonClick}>
            Submit
          </Button>
          {/* {data && data.map(x=>{
            alert(x.employeeId)
          })} */}
        </div>
      </Form>
    </div>
  );
};

export default Login;
