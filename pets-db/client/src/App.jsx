import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import AllPets from './components/AllPets';
import AddPet from './components/AddPet';
import ViewPet from './components/ViewPet';
import EditPet from './components/EditPet';

function App() {
  return (
    <>
      <Navbar />
      <div className="container h-screen">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/pets" element={<AllPets />} />
          <Route path="/pets/new" element={<AddPet />} />
          <Route path="/pets/:id" element={<ViewPet />} />
          <Route path="/pets/:id/edit" element={<EditPet />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
