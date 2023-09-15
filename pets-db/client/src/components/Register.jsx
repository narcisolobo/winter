import { useState } from 'react';
import { registerUser } from '../services/user-service';

const initialForm = {
  username: '',
  email: '',
  password: '',
};

function Register() {
  const [registerForm, setRegisterForm] = useState(initialForm);
  const [errors, setErrors] = useState(initialForm);

  const handleChange = (e) => {
    setRegisterForm({
      ...registerForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(registerForm)
      .then((userData) => console.log(userData))
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex h-3/4 justify-center items-center">
      <section>
        <h1 className="text-5xl mb-8">Register</h1>
        <div className="card w-96 bg-neutral text-neutral-content">
          <form onSubmit={handleSubmit}>
            <div className="card-body">
              <div className="mb-2">
                <label htmlFor="username">Username:</label>
                <input
                  name="username"
                  id="username"
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  value={registerForm.username}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="email">Email:</label>
                <input
                  name="email"
                  id="email"
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  value={registerForm.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="password">Password:</label>
                <input
                  name="password"
                  id="password"
                  type="password"
                  className="input input-bordered w-full max-w-xs"
                  value={registerForm.password}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
export default Register;
