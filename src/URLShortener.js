import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import axios from "axios";

// A custom component to display the shortened URL and expiry
const ShortenedURL = ({ url, expiry }) => {
  return (
    <div>
      <Typography variant="h6">Shortened URL:</Typography>
      <Typography variant="body1">{url}</Typography>
      <Typography variant="h6">Expiry:</Typography>
      <Typography variant="body1">{expiry}</Typography>
    </div>
  );
};

// The main component for the URL shortener form
export default function URLShortener(props) {
  // State variables to store the input value, the shortened URL, and the expiry
  const [input, setInput] = useState("");
  const [shortenedURL, setShortenedURL] = useState(null);
  const [expiry, setExpiry] = useState(null);

  // A function to handle the input change
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // A function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Make an API call to get the shortened URL and expiry
    // Use then to handle the resolved promise
    axios.post(
      "https://api.thetechcruise.com/u",
      { original_url: input },
      { headers: { "Content-Type": "application/json" } }
    ).then((response) => {
      // Log the response and update the state variables
    //   var response_mod = JSON.parse(response.data)
      console.log(response.data.short_url);
      setShortenedURL(response.data.short_url);
      setExpiry(response.data.expiry);
    })
    // Use catch to handle any errors
    .catch((error) => {
      console.error(error);
    });
  };
  

  return (
    <>
    <Typography variant="h3">{props.title}</Typography>
    <form onSubmit={handleSubmit}>
      <TextField
        label="Long URL"
        value={input}
        onChange={handleChange}
        fullWidth
        required
      />
      <Button onClick={handleSubmit} variant="contained" color="primary">
        Shorten
      </Button>
      {/* Render the shortened URL and expiry if they exist */}
      {shortenedURL && (
        <ShortenedURL url={shortenedURL} expiry={expiry} />
      )}
    </form>

  </>
    );
};

