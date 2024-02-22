import React from "react";
import { Layout, Row, Col, Space, Form, Input, Button, Grid } from "antd";

import frameworkTemplate from "../../assets/images/favicon-32x32.png";
import logo from "../../assets/images/logo.svg";

import { Footer } from "../../components/Footer";

import "./Login.css";

export default function Login() {
  const loginForm = Form.useForm();

  const handleFinish = async (values) => {
    // await dispatch(authLoginThunk(values));
  };

  return (
    <Layout className="section">
      <Content className="content">
        <Row gutter={[{ xs: 0, sm: 0, lg: 120 }, 0]}>
          <Col xs={0} sm={0} lg={12}>
            <Space direction="vertical">
              <Space>
                <img src={logo} alt="logo" className="logo" />
                <h1 className="logoText">React Antd Admin</h1>
              </Space>
              <img
                src={frameworkTemplate}
                alt="framework-template"
                className="template"
              />
            </Space>
          </Col>

          <Col xs={24} sm={24} lg={12}>
            <div
              className="loginWrapper"
              style={{ minWidth: !screens.lg ? "80vw" : "23vw" }}
            >
              <Space direction="vertical" style={{ minWidth: "80%" }}>
                <Space direction="vertical">
                  <div className="hello">Hello, Welcome to</div>
                  <Space className="loginLogoText">React Antd Admin</Space>
                </Space>

                <Form
                  name="loginForm"
                  form={loginForm}
                  layout="vertical"
                  initialValues={FORM_INITIAL_VALUES}
                  onFinish={handleFinish}
                >
                  <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Username is required",
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
                        message: "Password is required",
                      },
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>

                  <Form.Item>
                    <Button block type="primary" htmlType="submit">
                      Login
                    </Button>
                  </Form.Item>
                </Form>
              </Space>
            </div>
          </Col>
        </Row>
      </Content>
      <Footer />
    </Layout>
  );
}
