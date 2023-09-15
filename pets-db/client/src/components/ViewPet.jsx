import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getOnePet, deleteOnePet } from '../services/pet-service';

function ViewPet() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pet, setPet] = useState(null);

  useEffect(() => {
    getOnePet(id)
      .then((pet) => setPet(pet))
      .catch((err) => console.log(err));
  });

  const handleDelete = (petId) => {
    deleteOnePet(petId)
      .then(() => navigate('/pets'))
      .catch((err) => console.log(err));
  };

  return (
    pet && (
      <div className="flex h-3/4 justify-center items-center">
        <section>
          <h1 className="text-5xl mb-8">Pet Details</h1>
          <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body">
              <h2 className="card-title text-4xl">{pet.name}</h2>
              <p className="my-8">
                {pet.name} is a {pet.isDerpy ? 'derpy' : 'serious'} {pet.type}{' '}
                and they're {pet.age} years old!
              </p>
              <div className="card-actions justify-end">
                <Link
                  to={`/pets/${pet._id}/edit`}
                  className="btn btn-sm btn-info">
                  Edit
                </Link>
                <button
                  className="btn btn-sm btn-error"
                  onClick={() => handleDelete(pet._id)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  );
}
export default ViewPet;
