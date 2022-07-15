import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './component/Layout';
import Navbar from './component/Navbar';

function App() {
  return (
    <>
    <Routes>
              <Route path='/' element={<Layout />} />
              <Route index element={<Navbar />} />
              {/* <Route path="tours" element={<Tours />} />
              <Route path="Loading" element={<Loading />} /> */}
            </Routes>
    </>

  );
}

export default App;
