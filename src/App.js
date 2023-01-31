import { BrowserRouter } from 'react-router-dom';
import "./global.css"
import { Router } from './routes/routes';

function App() {
  return (
   <BrowserRouter>
   <Router/>
   </BrowserRouter>
  );
}

export default App;
