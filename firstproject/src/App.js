import React, { useState } from "react";
import { Button, Container, Grid, Modal } from "@mui/material";

const MediaUploadDisplay = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleVideoChange = (event) => {
    setSelectedVideo(event.target.files[0]);
  };

  const handlePdfChange = (event) => {
    setSelectedPdf(event.target.files[0]);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Container>
      <h1>Upload and Display Media using React Hooks and Material-UI</h1>

      <h2>Image Upload:</h2>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </Grid>
        <Grid item>
          {selectedImage && (
            <div>
              <Button variant="contained" onClick={handleOpenModal}>
                View Image
              </Button>
              <Modal open={openModal} onClose={handleCloseModal}>
                <img
                  alt="Uploaded Image"
                  width={"500px"}
                  src={URL.createObjectURL(selectedImage)}
                />
              </Modal>
            </div>
          )}
        </Grid>
      </Grid>
      <br />

      <h2>Video Upload:</h2>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <input type="file" accept="video/*" onChange={handleVideoChange} />
        </Grid>
        <Grid item>
          {selectedVideo && (
            <div>
              <Button variant="contained" onClick={handleOpenModal}>
                View Video
              </Button>
              <Modal open={openModal} onClose={handleCloseModal}>
                <video width="640" height="480" controls>
                  <source
                    src={URL.createObjectURL(selectedVideo)}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </Modal>
            </div>
          )}
        </Grid>
      </Grid>
      <br />

      <h2>PDF Upload:</h2>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <input type="file" accept=".pdf" onChange={handlePdfChange} />
        </Grid>
        <Grid item>
          {selectedPdf && (
            <div>
              <Button variant="contained" onClick={handleOpenModal}>
                View PDF
              </Button>
              <Modal open={openModal} onClose={handleCloseModal}>
                <iframe
                  src={URL.createObjectURL(selectedPdf)}
                  width="800"
                  height="600"
                  title="PDF Document"
                ></iframe>
              </Modal>
            </div>
          )}
        </Grid>
      </Grid>
      <br />
    </Container>
  );
};

export default MediaUploadDisplay;





