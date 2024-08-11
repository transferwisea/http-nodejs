import { createServer } from 'http';

createServer((req, res) => {
  res.write('Hello World! Proof of Concept for Bug Bounty Report');
  res.end();
}).listen(process.env.PORT);
