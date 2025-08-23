import App from '../src/configuration/App.js ';

const port = 3000;

App.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
