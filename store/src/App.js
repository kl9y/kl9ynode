import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Store from './Store';
// localhost:3000 -> Home
// localhost:3000/success -> Success

function App() {
  return (
        <BrowserRouter>
          <Routes>
            <Route index element={<Store />} />
            <Route path="success" element={<Store />} />
            <Route path="cancel" element={<Store />} />
          </Routes>
        </BrowserRouter>
  );
}

export default App;