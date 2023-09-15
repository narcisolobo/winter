import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAllPets, deleteOnePet } from '../services/pet-service';

function AllPets() {
  const navigate = useNavigate();
  const [pets, setPets] = useState([]);

  useEffect(() => {
    getAllPets()
      .then((pets) => setPets(pets))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (petId) => {
    deleteOnePet(petId)
      .then(() => navigate('/pets'))
      .catch((err) => console.log(err));
  };

  return (
    pets.length > 0 && (
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>Name:</th>
            <th>Type:</th>
            <th>Age:</th>
            <th>Derpy:</th>
            <th>Owner:</th>
            <th>Actions:</th>
          </tr>
        </thead>
        <tbody>
          {pets.map((pet) => (
            <tr key={pet._id}>
              <td>{pet.name}</td>
              <td>{pet.type}</td>
              <td>{pet.age}</td>
              <td>{pet.isDerpy ? 'Yes' : 'No'}</td>
              <td>Kermit the Frog</td>
              <td>
                <Link
                  to={`/pets/${pet._id}`}
                  className="btn btn-sm btn-primary mr-2">
                  View
                </Link>
                <Link
                  to={`/pets/${pet._id}/edit`}
                  className="btn btn-sm btn-info mr-2">
                  Edit
                </Link>
                <button
                  className="btn btn-sm btn-error"
                  onClick={() => handleDelete(pet._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  );
}

export default AllPets;
