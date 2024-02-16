import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
 
export default function BasicTable() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    address: '',
    phoneNumber: '',
    age: '',
  });
  const [editIndex, setEditIndex] = useState(-1);
 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };
 
  const addUser = () => {
    setUsers([...users, newUser]);
    setNewUser({
      name: '',
      email: '',
      address: '',
      phoneNumber: '',
      age: '',
    });
  };
 
  const handleEdit = (index) => {
    setEditIndex(index);
  };
 
  const handleSave = (index) => {
    const updatedUsers = [...users];
    updatedUsers[index] = newUser;
    setUsers(updatedUsers);
    setEditIndex(-1);
  };
 
  const handleCancel = () => {
    setEditIndex(-1);
  };
 
  const handleDelete = (index) => {
    const updatedUsers = users.filter((user, i) => i !== index);
    setUsers(updatedUsers);
  };
 
  return (
<div>
<TableContainer component={Paper}>
<Table sx={{ minWidth: 650 }} aria-label="simple table">
<TableHead>
<TableRow>
<TableCell>Name</TableCell>
<TableCell>Email</TableCell>
<TableCell>Address</TableCell>
<TableCell>Phone Number</TableCell>
<TableCell>Age</TableCell>
<TableCell>Edit</TableCell>
<TableCell>Delete</TableCell>
</TableRow>
</TableHead>
<TableBody>
            {users.map((user, index) => (
<TableRow key={index}>
<TableCell>
                  {editIndex === index ? (
<TextField
                      name="name"
                      value={newUser.name}
                      onChange={handleInputChange}
                    />
                  ) : (
                    user.name
                  )}
</TableCell>
<TableCell>
                  {editIndex === index ? (
<TextField
                      name="email"
                      value={newUser.email}
                      onChange={handleInputChange}
                    />
                  ) : (
                    user.email
                  )}
</TableCell>
<TableCell>
                  {editIndex === index ? (
<TextField
                      name="address"
                      value={newUser.address}
                      onChange={handleInputChange}
                    />
                  ) : (
                    user.address
                  )}
</TableCell>
<TableCell>
                  {editIndex === index ? (
<TextField
                      name="phoneNumber"
                      value={newUser.phoneNumber}
                      onChange={handleInputChange}
                    />
                  ) : (
                    user.phoneNumber
                  )}
</TableCell>
<TableCell>
                  {editIndex === index ? (
<TextField
                      name="age"
                      value={newUser.age}
                      onChange={handleInputChange}
                    />
                  ) : (
                    user.age
                  )}
</TableCell>
<TableCell>
                  {editIndex === index ? (
<Button variant="outlined" onClick={() => handleSave(index)}>Save</Button>
                  ) : (
<Button variant="outlined" onClick={() => handleEdit(index)}>Edit</Button>
                  )}
</TableCell>
<TableCell>
<Button variant="outlined" onClick={() => handleDelete(index)}>Delete</Button>
</TableCell>
</TableRow>
            ))}
</TableBody>
</Table>
</TableContainer>
      {!users.length && <p>No users found</p>}
      {editIndex === -1 && (
<div>
<TextField
            label="Name"
            name="name"
            value={newUser.name}
            onChange={handleInputChange}
          />
<TextField
            label="Email"
            name="email"
            value={newUser.email}
            onChange={handleInputChange}
          />
<TextField
            label="Address"
            name="address"
            value={newUser.address}
            onChange={handleInputChange}
          />
<TextField
            label="Phone Number"
            name="phoneNumber"
            value={newUser.phoneNumber}
            onChange={handleInputChange}
          />
<TextField
            label="Age"
            name="age"
            value={newUser.age}
            onChange={handleInputChange}
          />
<Button variant="contained" onClick={addUser}>Add User</Button>
</div>
      )}
</div>
  );
}