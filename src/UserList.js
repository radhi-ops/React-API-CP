import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

const UserList = () => {
  const [listOfUSer, setlistOfUSer] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(result);
      setlistOfUSer(result.data);
    };
    fetchData();
  }, []);
  return (
    <>
      <h2>Users List</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Company</th>
            <th>Website</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {listOfUSer.map((el, key) => (
            <tr>
              <td key={key}>{el.id}</td>
              <td>{el.name} </td>
              <td>{el.username} </td>
              <td>{el.email} </td>
              <td>{el.phone} </td>
              <td>{el.company.name} </td>
              <td>{el.website} </td>
              <td>
                {el.address.suite} {el.address.street} {el.address.city}{" "}
                {el.address.zipcode}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default UserList;
