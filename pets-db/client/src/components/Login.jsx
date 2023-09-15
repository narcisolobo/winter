function Login() {
  return (
    <div className="flex h-3/4 justify-center items-center">
      <section>
        <h1 className="text-5xl mb-8">Login</h1>
        <div className="card w-96 bg-neutral text-neutral-content">
          <form>
            <div className="card-body">
              <div className="mb-2">
                <label htmlFor="email">Email:</label>
                <input
                  name="email"
                  id="email"
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="password">Password:</label>
                <input
                  name="password"
                  id="password"
                  type="password"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
export default Login;
