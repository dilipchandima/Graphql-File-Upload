import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const MUTATION = gql`
  mutation ($file: Upload!) {
    singleUpload(file: $file) {
      url
    }
  }
`;

const Home = () => {
  const [image, setImage] = useState("");

  const [mutate] = useMutation(MUTATION, {
    context: {
      headers: {
        "apollo-require-preflight": true,
      },
    },
    onCompleted: ({ singleUpload: { url } }) => {
      setImage(url);
    },
  });

  const onChange = ({ target: { validity, files } }) => {
    if (files[0]) mutate({ variables: { file: files[0] } });
  };

  return (
    <header className="App-header">
      <h1>Graphql Photo Upload</h1>
      <input type="file" required onChange={onChange} accept="image/*" />
      {image && <img src={image} alt="Girl in a jacket" width="500" />}
    </header>
  );
};

export default Home;
