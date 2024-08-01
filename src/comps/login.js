
const Login = () => {
  return (
    <div id="login" className="section py-10">
      <h2 className="section-title text-center py-4 font-rock-salt text-4xl text-primary">
        LOGIN!
      </h2>
      <div className="container mx-auto flex justify-center">
        <form className="login-form w-full max-w-sm p-8 border-2 border-gray-200 rounded-lg bg-white">
          <label htmlFor="name" className="block text-primary mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring focus:border-primary"
          />
          <label htmlFor="password" className="block text-primary mb-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring focus:border-primary"
          />
          <label htmlFor="birthdate" className="block text-primary mb-2">
            Birthdate:
          </label>
          <input
            type="date"
            id="birthdate"
            name="birthdate"
            required
            className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring focus:border-primary"
          />
          <button
            type="submit"
            className="w-full text-center p-2 bg-primary text-white rounded-md hover:bg-transparent hover:text-primary border border-primary transition ease-in-out"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
