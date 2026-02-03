import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Log In Now',
};

const page = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black/50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6">
        <h1 className="font-bold text-2xl">Log In Existing Account</h1>

        <form action="#" className="flex flex-col gap-3">
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

        <a className="border p-1 bg-red-500 text-white" href="/login">
          Close
        </a>
      </div>
    </div>
  );
};

export default page;
