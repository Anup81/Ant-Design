import React from "react";
import { Row, Col, Card, Button, Typography } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../features/counter/counterSlice";

const Counter = () => {
  //   const counter = 45;
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <Card title="Counter App:" bordered={false}>
        {/* <Row>
        <Typography.Title>Counter Application:</Typography.Title>
      </Row> */}
        <Row>
          <Col md={9} />
          <Col md={2}>
            <Button
              size="large"
              icon={<MinusOutlined />}
              shape="circle"
              onClick={() => dispatch(decrement())}
            />
          </Col>
          <Col md={2} style={{ bottom: 5 }}>
            <span style={{ fontSize: "2rem", fontWeight: "bold" }}>
              {count}
            </span>
          </Col>
          <Col md={2}>
            <Button
              size="large"
              icon={<PlusOutlined />}
              shape="circle"
              onClick={() => dispatch(increment())}
            />
          </Col>
          <Col md={9} />
        </Row>
      </Card>
    </div>
  );
};

export default Counter;
