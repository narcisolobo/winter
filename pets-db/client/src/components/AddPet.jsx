import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPet } from '../services/pet-service';

const initialPet = {
  name: '',
  type: '',
  age: '',
  isDerpy: true,
};

function AddPet() {
  const navigate = useNavigate();
  const [pet, setPet] = useState(initialPet);

  const handleChange = (e) => {
    setPet({
      ...pet,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheck = (e) => {
    setPet({
      ...pet,
      isDerpy: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createPet(pet)
      .then(() => navigate('/pets'))
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex h-3/4 justify-center items-center">
      <section>
        <h1 className="text-5xl mb-8">Add Pet</h1>
        <div className="card w-96 bg-neutral text-neutral-content">
          <form onSubmit={handleSubmit}>
            <div className="card-body">
              <div className="mb-2">
                <label htmlFor="name">Name:</label>
                <input
                  name="name"
                  id="name"
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  value={pet.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="type">Type:</label>
                <input
                  name="type"
                  id="type"
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  value={pet.type}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="age">Age:</label>
                <input
                  name="age"
                  id="age"
                  type="number"
                  className="input input-bordered w-full max-w-xs"
                  value={pet.age}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-2">
                <input
                  name="isDerpy"
                  id="isDerpy"
                  type="checkbox"
                  className="checkbox mr-4"
                  checked={pet.isDerpy}
                  onChange={handleCheck}
                />
                <label htmlFor="isDerpy">Derpy?</label>
              </div>
              <button type="submit" className="btn btn-primary">
                Add Pet
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
export default AddPet;
