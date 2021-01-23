const basePath = './public';
const publicDirectoryPath = 'public';
const routePath = '/tree';
const port = 8082;

require('markdown-blog-content-parser').runServer(
  basePath,
  publicDirectoryPath,
  routePath,
  port
);
