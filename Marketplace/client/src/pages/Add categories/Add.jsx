import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";


function Add() {
  const [name, setName] = useState("");
  const [ima, setImage] = useState("");

  const addOne = (obj) => {
    axios
      .post(`http://localhost:3000/api/categories/add`, obj)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box
        component="form"
        sx={{
          "& > :not(style)": {
            m: 1,
            width: "25ch",
            display: "flex",
            flexDirection: "column",
          },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          label="Name"
          onChange={(e) => setName(e.target.value)}
          type="text"
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Image"
          onChange={(e) => setImage(e.target.value)}
          type="text"
          sx={{ marginBottom: 2 }}
        />
      </Box>

      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          onClick={() => {
            let newone = { name: name, image: ima };
            addOne(newone);
          }}
        >
          <Link to="/home">Add</Link>
        </Button>
      </Stack>
    </div>
  );
}

export default Add;
