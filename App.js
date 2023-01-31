import { BrowserRouter } from 'react-router-dom';
import "./global.css"
import { Router } from './src/routes/routes';

function App() {
  return (
   <BrowserRouter>
   <Router/>
   </BrowserRouter>
  );
}

export default App;
