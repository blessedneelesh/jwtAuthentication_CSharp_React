import React, { useEffect, useState } from "react";
import { Layout, Menu, Button, Space, Row, Col } from "antd";
import { Link } from "react-router-dom";
import { useAuth } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
const { Header } = Layout;

const Navbar = () => {
  var { token, logout, getUserProfile } = useAuth();

  const [userProfile, setUserProfile] = useState("");

  let navigate = useNavigate();

  const getCurrentUser = async () => {
    var data = await getUserProfile();
    setUserProfile(data);
    console.log(data);
  };

  const Logout = () => {
    logout();
    navigate("/profile");
    window.location.reload();
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <>
      <Layout className="layout">
        <Header style={{ display: "flex", justifyContent: "space-between" }}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              {" "}
              <Link to="/">Home</Link>
            </Menu.Item>

            <Menu.Item key="2">
              {" "}
              <Link to="/service">Service</Link>
            </Menu.Item>
            <Menu.Item key="3">
              {" "}
              <Link to="/about-us">About Us</Link>
            </Menu.Item>
            <Menu.Item key="4">
              {" "}
              <Link to="/profile">Profile</Link>
            </Menu.Item>
            <Menu.Item key="5">
              {" "}
              <Link to="/weather">Weather</Link>
            </Menu.Item>
            <Menu.Item key="6">
              <Link to="/admin">Admin</Link>
            </Menu.Item>
          </Menu>
          {token ? (
            <Space
              style={{ display: "flex", justifyContent: "center", gap: "5px" }}
            >
              {userProfile.userName ? (
                <span style={{ color: "white" }}>
                  {userProfile.userName.charAt(0).toUpperCase() +
                    userProfile.userName.slice(1)}
                </span>
              ) : (
                ""
              )}

              <h3></h3>
              <Button onClick={() => Logout()}>Logout</Button>
            </Space>
          ) : (
            <div>
              <Button type="primary" style={{ marginRight: "10px" }}>
                <Link to="/login">Sign in</Link>
              </Button>
              <Button>
                <Link to="/register">Sign up</Link>
              </Button>
            </div>
          )}
        </Header>
      </Layout>
    </>
  );
};
export default Navbar;
