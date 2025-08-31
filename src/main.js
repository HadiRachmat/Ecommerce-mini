import App from '../src/configuration/App.js ';
import { v4 as uuidv4 } from 'uuid';

// Example usage of uuidv4 to generate a unique identifier
const uniqueId = uuidv4();
console.log(`Generated Unique ID: ${uniqueId}`);

const port = 3000;

App.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
