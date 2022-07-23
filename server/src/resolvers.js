const GraphQLUpload = require("graphql-upload/GraphQLUpload.js");
const { finished } = require("stream/promises");

const resolvers = {
  // This maps the `Upload` scalar to the implementation provided
  // by the `graphql-upload` package.
  Upload: GraphQLUpload,

  Query: {
    hello: () => "hello graph",
  },

  Mutation: {
    singleUpload: async (parent, { file }) => {
      const { createReadStream, filename, mimetype, encoding } = await file;
      console.log(filename);

      // Invoking the `createReadStream` will return a Readable Stream.
      // See https://nodejs.org/api/stream.html#stream_readable_streams
      const stream = createReadStream();

      // This is purely for demonstration purposes and will overwrite the
      // local-file-output.txt in the current working directory on EACH upload.
      // const pathname = path.join(__dirname, `/public/${filename}`);
      const out = require("fs").createWriteStream(`./public/${filename}`);
      stream.pipe(out);
      await finished(out);

      return { url: `http://localhost:4000/${filename}` };
    },
  },
};

module.exports = resolvers;
