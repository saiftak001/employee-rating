import React , { useEffect, componentDidMount } from "react";
import axios from 'axios';
import ReactDOM from "react-dom";
import Title from "react-bootstrap"
import RatingComponent from "./RatingComponent/Rating";
import { useCustomFetch } from './hooks';

import "./App.css";
import {
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
} from "recharts";
import {
  Container,
  Row,
  Col,
  Dropdown,
  DropdownButton,
  Button,
} from "react-bootstrap";

const Main = (props) => {

  const [data, setData] = React.useState([]);
  const [tableList, setTable] = React.useState([]);
  const [element, setElement] = React.useState([]);
  const [MagElement, setMagElement] = React.useState([]);
  const [Comment, setComment] = React.useState([]);
  const [CommentList, setCommentList] = React.useState("");

  const skill = ["javascript", "java", "python"];



  useEffect(() => {    
    axios
      .get(`http://localhost:8285/employees/`+sessionStorage.getItem('Id'))
      .then(res => {
        let data=res.data;
        let getUser

        let TABLE_LIST = [];
        let elements = [];
        let mag_element = [];

        if(data.length>1){
          getUser = data.find(user => user.firstname === sessionStorage.getItem('emp_name'));
        }else{
          getUser = data[0];
        }


        console.log("getUser : ", getUser)

        console.log('session emp : ',sessionStorage.getItem("emp_name"))

        skill.map((rating, index) => {

          elements.push(getUser[rating])
          mag_element.push(getUser.mgr[rating])

          TABLE_LIST.push({'name':getUser[rating], 'Rating': getUser[rating], 'Mag_rating': getUser.mgr[rating]})
        })
        setCommentList(getUser.comments)
        setTable(TABLE_LIST)
        setElement(elements)
        setMagElement(mag_element)
        setData(getUser);
      })
}, [])

const buttonClick = (evt) => {
  let commenter= sessionStorage.getItem("manager")==="true"?sessionStorage.getItem("mag_name"):sessionStorage.getItem("emp_name")

  data.comments=CommentList.concat(";"+commenter+":"+Comment)


  axios
      .post(`http://localhost:8285/updateComments/`+data.employeeId,data)
      .then(res => {
        console.log('res : ', res);
      })
  setCommentList(CommentList.concat(";"+commenter+":"+Comment))
  };

  return (
    <>
      <div className="align-items-center header">{sessionStorage.getItem('emp_name')}</div>
      <Container className="py-5">
        <Row>
          <Col lg={4}>
            {element.map((value, index) => {
              return (
                <Row>
                  <div className="pr-3 pt-2" style={{ minWidth: "100px" }}>
                    {skill[index]}
                  </div>
                  <RatingComponent
                  type="emp"
                    tech={skill[index]}
                    rating={element[index]}
                    key={index}
                  ></RatingComponent>
                </Row>
              );
            })}
          </Col>
          <Col lg={4}>
            <div>
              { sessionStorage.getItem('manager')==='true' && <LineChart
                width={500}
                height={300}
                data={tableList}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip XAxis="Rating Value" YAxis="Maganer Rating Value"/>
                <Legend  XAxis="Rating Value" YAxis="Maganer Rating Value" />
                <Line
                  type="monotone"
                  dataKey="Rating"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                  name="Employee Rating"
                />
                <Line name="Manager Rating" type="monotone" dataKey="Mag_rating" stroke="#82ca9d" />
              </LineChart>}
            </div>
          </Col>
          { sessionStorage.getItem('manager')==='true' && <Row lg={4}>
            <Col lg={8}><h2>Manger Rating</h2></Col>
            <Col lg={4}>
            {MagElement.map((value, index) => {
              return (
                <Row>
                  <div className="pr-3 pt-2" style={{ minWidth: "100px" }}>
                    {skill[index]}
                  </div>
                  <RatingComponent
                    type='mag'
                    tech={skill[index]}
                    rating={MagElement[index]}
                    key={index}
                  ></RatingComponent>
                </Row>
              );
            })}</Col>
          </Row>}
        </Row>
        <Row>
          {
          <div>
            <div>
              <h4>Comment</h4>
            </div>
              {CommentList.split(";").map((arr) => {
              let keyValue = arr.split(":");
              return <div>
                <h6 className="pr-3">{keyValue[0]}</h6>
                <label className="font-weight-light">{keyValue[1]}</label>
              </div>})}
              <div>
                <input className="m-2" type="text" id="fname" name="fname" onChange={(e) => setComment(e.target.value)}/>
                <Button className="m-2" variant="primary" type="button" onClick={buttonClick}>Submit</Button>
              </div>
          </div>
          }
          </Row>
      </Container>
    </>
  );
};

export default Main;
