import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Space, Table, Button, message } from "antd";
import Navbar from "./UI/Navbar";
import { useAuth } from "../provider/AuthProvider";

const Admin = () => {
  const [users, setUsers] = useState("");
  const [seed, setSeed] = useState(1);
  const [roles, setRoles] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const reset = () => {
    console.log("resett");
    setSeed(Math.random());
  };
  console.log(users, "user");
  const {
    register,
    getAllUsers,
    deleteUser,
    addToAdmin,
    removeFromAdmin,
    getRolesList,
    deleteRole,
    addRoleAdmin,
  } = useAuth();

  const getUsers = async () => {
    var res = await getAllUsers();
    setUsers(res);
  };

  const onAddUser = async () => {
    var res = await register();
  };

  const onUserDelete = async (id) => {
    setIsLoading(true);
    console.log(id);
    var res = await deleteUser(id);

    reset();
    message.success("Successfully Deleted!");
    setIsLoading(false);
  };

  const onAddToAdmin = async (id) => {
    setIsLoading(true);
    console.log(id);
    var res = await addToAdmin(id);
    reset();
    message.success("successfully added!");
    setIsLoading(false);
  };

  const onRemoveFromAdmin = async (id) => {
    setIsLoading(true);
    console.log(id);
    var res = await removeFromAdmin(id);
    reset();
    message.success("Successfully removed!");
    setIsLoading(false);
  };

  const getAllRoles = async () => {
    var res = await getRolesList();
    setRoles(res.data);
  };

  const onDeleteRole = async (userId) => {
    setIsLoading(true);
    var res = await deleteRole(userId);
    setIsLoading(false);
    reset();
  };

  const onAddRole = async () => {
    setIsLoading(true);
    var res = await addRoleAdmin();
    setIsLoading(false);
    reset();
  };

  useEffect(() => {
    getUsers();
    getAllRoles();
  }, [seed]);

  const userColumns = [
    {
      title: "Name",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "Role",
      dataIndex: "roleName",
      key: "roleName",
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <>
          {" "}
          <Space>
            <Button
              type="primary"
              danger
              onClick={() => onUserDelete(record.userId)}
              loading={isLoading}
            >
              Delete User
            </Button>{" "}
          </Space>
          <Space>
            <Button
              type="primary"
              onClick={() => onAddToAdmin(record.userId)}
              loading={isLoading}
            >
              Add to Admin
            </Button>{" "}
          </Space>
          <Space>
            <Button
              type="primary"
              onClick={() => onRemoveFromAdmin(record.userId)}
              loading={isLoading}
            >
              Remove from Admin
            </Button>
          </Space>
        </>
      ),
    },
  ];

  const roleColumns = [
    {
      title: "Role",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Action",
      key: "Action",
      render: (record) => (
        <>
          {" "}
          <Button
            type="primary"
            danger
            onClick={() => onDeleteRole(record.id)}
            loading={isLoading}
          >
            Delete Role
          </Button>
        </>
      ),
    },
  ];

  return (
    <>
      <Navbar />
      <Button type="primary" style={{ marginTop: "10px" }}>
        <Link to="/register">Add User</Link>
      </Button>
      <h3>User Manager</h3>
      <Table
        size="small"
        columns={userColumns}
        dataSource={users}
        pagination={{ pageSize: 5 }}
      />
      <br></br>
      <h3>Role Manager</h3>
      {roles.length === 0 ? (
        <Button onClick={() => onAddRole()} loading={isLoading}>
          Add Admin Role
        </Button>
      ) : (
        <Table size="small" columns={roleColumns} dataSource={roles} />
      )}
    </>
  );
};

export default Admin;
