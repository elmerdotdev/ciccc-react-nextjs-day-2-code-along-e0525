const page = () => {
  return (
    <div>
      <h1>Log In</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis esse
        neque error explicabo dolor? Quae fugiat repellat nemo iusto possimus?
      </p>
      <form action="#">
        <input
          type="text"
          placeholder="Enter username"
          className="border p-1"
        />
        <input
          type="password"
          placeholder="Enter password"
          className="border p-1"
        />
        <button type="submit" className="border p-1 bg-gray-200">
          Log In Now
        </button>
      </form>
    </div>
  );
};

export default page;
