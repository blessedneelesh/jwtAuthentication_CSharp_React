import Navbar from "./UI/Navbar";

import React from "react";
import { Button, Form, Input, message } from "antd";
import { useAuth } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";
const Register = () => {
  const { register, token } = useAuth();

  const [form] = Form.useForm();

  const onFinish = async (values) => {
    console.log("Success:", values);
    const res = await register(values.username, values.email, values.password);
    console.log(res, "res");
    form.resetFields();
    message.success("User Successfully Created");
    if (token) {
      return <Navigate to="/admin" />;
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Navbar />
      <Form
        form={form}
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
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
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
export default Register;
