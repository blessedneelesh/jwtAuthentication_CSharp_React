import Navbar from "./UI/Navbar";

import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useAuth } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { login } = useAuth();

  let navigate = useNavigate();

  const onFinish = async (values) => {
    console.log("Success:", values);
    var aa = await login(values.username, values.password);
    navigate("/profile");
    window.location.reload();
    console.log(aa, "tk");
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Navbar />
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
          marginTop: "15px",
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default Login;
