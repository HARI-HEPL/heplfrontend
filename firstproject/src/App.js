import React, { useState } from 'react';
import { Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { yellow } from '@mui/material/colors';

const FileUploadAndViewTable = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event, fileType) => {
    const file = event.target.files[0];
    setSelectedFiles(prevState => [...prevState, { fileType, file }]);
  };

  const handleUpload = (fileType) => {
    // Implement your upload logic here for the specific fileType

    const selectedFile = selectedFiles.find(file => file.fileType === fileType);

    if (selectedFile) {
      const formData = new FormData();
      formData.append(fileType, selectedFile.file);

      // Simulate an upload endpoint or replace it with your server endpoint
      fetch(`https://example.com/upload-${fileType}`, {
        method: 'POST',
        body: formData,
      })
        .then(response => response.json())
        .then(data => {
          // Handle the response from the server
          console.log(data);
        })
        .catch(error => {
          // Handle errors
          console.error(`Error uploading ${fileType}:`, error);
        });
    }
  };

  const handleView = (fileType) => {
    // Implement your view logic here for the specific fileType

    const selectedFile = selectedFiles.find(file => file.fileType === fileType);

    // For simplicity, we'll just open the file in a new window
    if (selectedFile) {
      window.open(URL.createObjectURL(selectedFile.file), '_blank');
    }
  };

  return (
    <TableContainer component={Paper}>
     
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>File Type</TableCell>
            <TableCell>Selected File</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <input
                type="file"
                accept="image/*"
                onChange={(event) => handleFileChange(event, 'image')}
                style={{ display: 'none' }}
                id="upload-image"
              />
              <label htmlFor="upload-image">
                <Button variant="contained" component="span">
                  Upload Image
                </Button>
              </label>
            </TableCell>
            <TableCell>
              <Typography variant="body1" gutterBottom>
                {selectedFiles.find(file => file.fileType === 'image')?.file?.name || 'No file selected'}
              </Typography>
            </TableCell>
            <TableCell>
              {/* <Button variant="contained" onClick={() => handleUpload('image')}>
                Upload
              </Button> */}
              <Button variant="contained" onClick={() => handleView('image')} disabled={!selectedFiles.find(file => file.fileType === 'image')}>
                View
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <input
                type="file"
                accept="video/*"
                onChange={(event) => handleFileChange(event, 'video')}
                style={{ display: 'none' }}
                id="upload-video"
              />
              <label htmlFor="upload-video">
                <Button variant="contained" component="span">
                  Upload Video
                </Button>
              </label>
            </TableCell>
            <TableCell>
              <Typography variant="body1" gutterBottom>
                {selectedFiles.find(file => file.fileType === 'video')?.file?.name || 'No file selected'}
              </Typography>
            </TableCell>
            <TableCell>
              {/* <Button variant="contained" onClick={() => handleUpload('video')}> */}
                {/* Upload */}
              {/* </Button> */}
              <Button variant="contained" onClick={() => handleView('video')} disabled={!selectedFiles.find(file => file.fileType === 'video')}>
                View
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};


export default FileUploadAndViewTable;
