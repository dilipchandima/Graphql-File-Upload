# Graphql File Upload

This project contains two sub projects `client` and `server` for test file uploading using GraphQL

## File Structure

```bash
├── README.md
├── client
│   ├── README.md
│   ├── package.json
│   ├── public
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── src
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── Home.js
│   │   ├── index.css
│   │   ├── index.js
│   │   ├── reportWebVitals.js
│   │   └── setupTests.js
│   └── yarn.lock
└── server
    ├── package.json
    ├── public
    │   ├── apple.png
    │   └── bg-masthead.jpg
    ├── src
    │   ├── resolvers.js
    │   ├── schema.js
    │   └── server.js
    └── yarn.lock
```

## Client Project

Client project contains a ReactJS project, that uses following dependencies for graphql file upload upload

```json
"@apollo/client": "^3.6.9",
"apollo-upload-client": "^17.0.0",
"graphql": "^16.5.0"
```

## Server Project

Server project is a simple Node server that uses following dependencies

```json
"apollo-server-express": "^3.10.0",
"graphql": "^16.5.0",
"graphql-upload": "^15.0.2"
```

## Some important links

- https://www.apollographql.com/docs/apollo-server/data/file-uploads/
- https://github.com/apollographql/apollo-server/security/advisories/GHSA-2p3c-p3qw-69r4
- https://www.npmjs.com/package/graphql-upload
- https://www.npmjs.com/package/apollo-upload-client
- https://github.com/apollographql/apollo-server/issues/6433
- https://github.com/jaydenseric/graphql-multipart-request-spec
