import React from "react";
import { gql, useMutation } from "@apollo/client";

const MUTATION = gql`
  mutation ($file: Upload!) {
    singleUpload(file: $file) {
      url
    }
  }
`;

const Home = () => {
  const [mutate] = useMutation(MUTATION);

  const onChange = ({ target: { validity, files } }) => {
    if (files[0]) mutate({ variables: { file: files[0] } });
  };

  return (
    <header className="App-header">
      <h1>Graphql Photo Upload</h1>
      <input type="file" required onChange={onChange} />
    </header>
  );
};

export default Home;
