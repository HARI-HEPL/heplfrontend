// App.js

import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
// button

function App() {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setFiles([...files, ...newFiles]);
  };

  return (
    <div>
      <h2> <br></br> <center>File Handling</center><br></br></h2>
      <input type="file" onChange={handleFileChange} multiple />
      
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>File Type</TableCell>
              <TableCell>View</TableCell>
              {/* <TableCell>Download</TableCell>  */}
            </TableRow>
          </TableHead>
          <TableBody>
            {files.map((file, index) => (
              <TableRow key={index}>
                <TableCell>{file.type}</TableCell>
                <TableCell>
                  {file.type.startsWith('image/') ? (
                    <img src={URL.createObjectURL(file)} alt="Preview" width="100" height="100" />
                  ) : file.type.startsWith('video/') ? (
                    <video controls width="200">
                      <source src={URL.createObjectURL(file)} type={file.type} />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <div>{file.name}</div>
                  )}
                </TableCell>
                {/* <TableCell>
                  <Button component="a" href={URL.createObjectURL(file)} download>
                    Download
                  </Button>
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;

