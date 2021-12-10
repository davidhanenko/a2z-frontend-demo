const withImages = require('next-images');

// module.exports = withImages({
//   module: {
//     rules: [
//       {
//         test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/i,
//         use: [
//           {
//             loader: 'file-loader',
//           },
//         ],
//       },
//     ],
//   },
//   images: {
//     domains: ['res.cloudinary.com'],
//   },
// });


module.exports = {
  async headers() {
    return [
      {
        source: 'https://a2z-demo.herokuapp.com',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
    ];
  },
};