import express from 'express';

// Just a temporary test file while setting up monorepo,
// to ensure everything works as expected.
const app = express();
const port = 5050;

app.use(express.json());

app.get("/api/test", (_, res) => {
  res.json({ 
    message: "Server test successful ^_^" 
  });
});

app.listen(port, () => {
  console.log(`Test server running on http://localhost:${port}`);
});