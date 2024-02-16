// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <h1>
//           hi,everyone this is sopna
//         </h1>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// import "./App.css";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
 
// const App = () => {
//   const [users, setUsers] = useState([]);
 
//   useEffect(() => {
//     getUsers();
//   }, []);
 
//   const getUsers = async () => {
//     try {
//       const response = await axios.get("https://jsonplaceholder.typicode.com/users");
//       setUsers(response.data);
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     }
//   };
 
//   return (
//     <div>
//       <nav className="navbar navbar-dark bg-light justify-content-center">
//         <h2 className="text-primary">Employee Details</h2>
//       </nav>
//       <div className="container">
//         <table className="table">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Username</th>
//               <th>Email</th>
//               <th>Phone</th>
//               <th>Location</th>
//               <th>Website</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user, index) => (
//               <tr key={index}>
//                 <td>{user.name}</td>
//                 <td>{user.username}</td>
//                 <td>{user.email}</td>
//                 <td>{user.phone}</td>
//                 <td>{user.address.geo.lat},{user.address.geo.lng}</td>
//                 <td><a href={user.website}>Check my site here</a></td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };
 
// export default App;

// ---> To create manual Enter data <---- //

// import React, { useState } from 'react';


// function DataTable() {
//   // State variables to store table data
//   const [rows, setRows] = useState([]);
//   const [newRowData, setNewRowData] = useState({ name: '', age: '',desigantion:'',salary:'' });

//   // Function to handle adding a new row
//   const addRow = () => {
//     setRows([...rows, newRowData]);
//     setNewRowData({ name: '', age: '' ,desigantion:'',salary:''}); // Clear input fields after adding row
//   };

//   // Function to handle clearing all rows
//   const clearRows = () => {
//     setRows([]);
//   };

//   return (
//     <div>
//       {/* Table */}
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Age</th>
//             <th>Designation</th>
//             <th>Salary</th>
//           </tr>
//         </thead>
//         <tbody>
//           {/* Render existing rows */}
//           {rows.map((row, index) => (
//             <tr key={index}>
//               <td>{row.name}</td>
//               <td>{row.age}</td>
//               <td>{row.desigantion}</td>
//               <td>{row.salary}</td>
//             </tr>
//           ))}
//           {/* Input fields for new row */}
//           <tr>
//             <td>
//               <input
//                 type="text"
//                 value={newRowData.name}
//                 onChange={(e) => setNewRowData({ ...newRowData, name: e.target.value })}
//                 placeholder="Enter name"
//               />
//             </td>
//             <td>
//               <input
//                 type="text"
//                 value={newRowData.age}
//                 onChange={(e) => setNewRowData({ ...newRowData, age: e.target.value })}
//                 placeholder="Enter age"
//               />
//             </td>
//             <td>
//               <input
//                 type="text"
//                 value={newRowData.desigantion}
//                 onChange={(e) => setNewRowData({ ...newRowData, desigantion: e.target.value })}
//                 placeholder="Enter your role"
//               />
//             </td>

//             <td>
//               <input
//                 type="text"
//                 value={newRowData.salary}
//                 onChange={(e) => setNewRowData({ ...newRowData, salary: e.target.value })}
//                 placeholder="Enter your salary"
//               />
//             </td>
            
            
//             <td>
//               <button onClick={addRow}>Add Row</button>
//             </td>
//             <td>
//             <button onClick={clearRows}>Clear All</button>
//             </td>
//           </tr>
//         </tbody>
//       </table>
      
//       {/* Clear button */}
     
//     </div>
//   );
// }
import React, { useState } from 'react';
import { Button, Table, TableHead, TableBody, TableCell, TableRow } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const FileUploaderViewer = () => {
  const [files, setFiles] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles([...files, ...selectedFiles]); // Append new files to existing files list
  };

  const handleViewFile = (file) => {
    setSelectedFile(file);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedFile(null);
  };

  const handleUpload = (file) => {
    // Here you can implement the upload logic for the specific file
    console.log(`Uploading ${file.name}`);
    // Example: You can use fetch API or any library to upload the file to your server
    // Here is a simplified example using fetch API to upload the file
    const formData = new FormData();
    formData.append('file', file);
    fetch('http://your-upload-endpoint', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        // Handle response from server
        console.log(`File ${file.name} uploaded successfully.`);
      })
      .catch((error) => {
        // Handle error
        console.error('Error uploading file:', error);
      });
  };

  const handleDeleteFile = (file) => {
    const updatedFiles = files.filter((f) => f !== file);
    setFiles(updatedFiles);
  };

  return (
    <div>
      <input
        accept="image/*, video/*, .xls, .xlsx"
        id="contained-button-file"
        multiple
        type="file"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" component="span">
          Upload Files
        </Button>
      </label>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Filename</TableCell>
            <TableCell>View File</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {files.map((file, index) => (
            <TableRow key={index}>
              <TableCell>{file.name}</TableCell>
              <TableCell>
                <Button variant="outlined" onClick={() => handleViewFile(file)}>
                  View
                </Button>
              </TableCell>
              <TableCell>
                <Button variant="outlined" onClick={() => handleDeleteFile(file)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Uploaded File</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {selectedFile && (
              <div>
                <p>Name: {selectedFile.name}</p>
                <p>Type: {selectedFile.type}</p>
                {selectedFile.type.includes('image') && (
                  <img src={URL.createObjectURL(selectedFile)} alt={selectedFile.name} style={{ maxWidth: '100%' }} />
                )}
                {selectedFile.type.includes('video') && (
                  <video controls style={{ maxWidth: '100%' }}>
                    <source src={URL.createObjectURL(selectedFile)} type={selectedFile.type} />
                    Your browser does not support the video tag.
                  </video>
                )}
                {selectedFile.name.endsWith('.xls') || selectedFile.name.endsWith('.xlsx') ? (
                  <p>Display Excel content here</p>
                ) : null}
              </div>
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FileUploaderViewer;
