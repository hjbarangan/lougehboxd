import { Link } from 'react-router-dom';
import netflixIcon from '../../assets/images/netflix-icon.jpg';
import netflixIcon1 from '../../assets/images/netflix-icon1.jpg';
import netflixIcon2 from '../../assets/images/netflix-icon2.jpg';
import netflixIcon3 from '../../assets/images/netflix-icon3.jpg';
import netflixIcon4 from '../../assets/images/netflix-icon4.jpg';

export function Login() {
  return (
    <div className="h-screen w-screen flex">
      <div className="flex flex-col w-full bg-gradient-to-tr from-blue-900 to-black-500 i justify-center items-center">
        <div>
          <h1 className="text-white font-semibold text-7xl font-sans">
            Who's Watching?
          </h1>
        </div>
        <div className="grid grid-cols-5 gap-10 mt-16">
          <div className="text-center">
            <div className="w-48 h-48">
              <Link to="/">
              <img
                className="rounded-lg hover:border-4 border-white"
                src={netflixIcon}
                alt="blue green icon"
              />
              </Link>
            </div>
            <p className="text-gray-300 text-xl mt-3">herzliyaa</p>
          </div>
          <div className="text-center">
            <div className="w-48 h-48">
              <img
                className="rounded-lg hover:border-4 border-white"
                src={netflixIcon1}
                alt="green icon"
              />
            </div>
            <p className="text-gray-300 text-xl mt-3">christinnaa</p>
          </div>
          <div className="text-center">
            <div className="w-48 h-48">
              <img
                className="rounded-lg hover:border-4 border-white"
                src={netflixIcon2}
                alt="yellow icon"
              />
            </div>
            <p className="text-gray-300 text-xl mt-3">mgpancho</p>
          </div>
          <div className="text-center">
            <div className="w-48 h-48">
              <img
                className="rounded-lg hover:border-4 border-white"
                src={netflixIcon3}
                alt="red icon"
              />
            </div>
            <p className="text-gray-300 text-xl mt-3">vpascual</p>
          </div>
          <div className="text-center">
            <div className="w-48 h-48">
              <img
                className="rounded-lg hover:border-4 border-white"
                src={netflixIcon4}
                alt="blue icon"
              />
            </div>
            <p className="text-gray-300 text-xl mt-3">tmgaridos</p>
          </div>
        </div>

        <div className="mt-24">
          <Link to="/ManageProfiles">
            <button className="text-2xl border border-gray-400 py-2 px-5 text-gray-400 hover:border hover:border-white hover:text-white">
              Manage Profiles
            </button>
          </Link>
        </div>
      </div>
      {/* <div className="flex w-1/2 justify-center items-center bg-white">
        <form className="bg-white">
          <h1 className="text-gray-800 font-bold text-2xl mb-1">
            Hello Again!
          </h1>
          <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="text"
              name=""
              id=""
              placeholder="Email Address"
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="text"
              name=""
              id=""
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="block w-full bg-indigo-500 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
          >
            Login
          </button>
          <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">
            Forgot Password ?
          </span>
        </form>
      </div> */}
    </div>
  );
}
