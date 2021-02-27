import {React} from "react";
import ReactDOM from "react-dom";
import Title from "react-bootstrap"
import RatingComponent from "./RatingComponent/Rating";
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
  const elements = [4, 3, 9, 5, 0];
  const skill = ["Java", "Python", "Javascript", "SQL", "C++"];
  const TABLE_LIST = [
    { name: "Java", Rating: 8.5, Mag_raing: 5.5 },
    { name: "Python", Rating: 7.0, Mag_raing: 4.0 },
    { name: "Java Script", Rating: 6.5, Mag_raing: 8.0 },
    { name: "SQL", Rating: 8.0, Mag_raing: 1.5 },
    { name: "C++", Rating: 9.0, Mag_raing: 2.5 },
  ];
  return (
    <>
      <div className="align-items-center header">{sessionStorage.getItem('emp_name')}</div>
      <Container className="py-5">
        <Row>
          <Col lg={4}>
            {elements.map((value, index) => {
              return (
                <Row>
                  <div className="pr-3 pt-2" style={{ minWidth: "100px" }}>
                    {skill[index]}
                  </div>
                  <RatingComponent
                    rating={elements[index]}
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
                data={TABLE_LIST}
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
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="Rating"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="Mag_raing" stroke="#82ca9d" />
              </LineChart>}
            </div>
          </Col>
          { sessionStorage.getItem('manager')==='true' && <Row lg={4}>
            <Col lg={8}><h2>Manger Rating</h2></Col>
            <Col lg={4}>
            {elements.map((value, index) => {
              return (
                <Row>
                  <div className="pr-3 pt-2" style={{ minWidth: "100px" }}>
                    {skill[index]}
                  </div>
                  <RatingComponent
                    rating={elements[index]}
                    key={index}
                  ></RatingComponent>
                </Row>
              );
            })}</Col>
          </Row>}
        </Row>
      </Container>
    </>
  );
};

export default Main;
