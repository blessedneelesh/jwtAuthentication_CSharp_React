import React, { useEffect, useState } from "react";
import { useAuth } from "../provider/AuthProvider";
import Navbar from "./UI/Navbar";
import { Card, Col, Row, Space } from "antd";

const UserProfile = () => {
  const { getUserProfile } = useAuth();

  const [userProfile, setUserProfile] = useState("");
  const [token, setToken] = useState("");

  const getCurrentUser = async () => {
    var data = await getUserProfile();
    setUserProfile(data);
    console.log(data);
    setToken(localStorage.getItem("token"));
  };

  useEffect(() => {
    getCurrentUser();
  }, []);
  return (
    <>
      <Navbar />

      <Row gutter={16} style={{ marginTop: "15px" }}>
        <Col span={8}></Col>
        <Col span={8}>
          <Card title="Profile" bordered={false}>
            <div style={{ overflowWrap: "break-word" }}>
              <h6>Token: {token}</h6>
            </div>

            <h3>User Id: {userProfile.id}</h3>
            <h1>User Name: {userProfile.userName}</h1>
            <h3>Email: {userProfile.email}</h3>
          </Card>
        </Col>
        <Col span={8}></Col>
      </Row>
    </>
  );
};

export default UserProfile;
