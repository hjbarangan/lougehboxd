import { Link } from 'react-router-dom';
import netflixIcon from '../../assets/images/netflix-icon.jpg';
import netflixIcon1 from '../../assets/images/netflix-icon1.jpg';
import netflixIcon2 from '../../assets/images/netflix-icon2.jpg';
import netflixIcon3 from '../../assets/images/netflix-icon3.jpg';
import netflixIcon4 from '../../assets/images/netflix-icon4.jpg';
import { BiPencil } from 'react-icons/bi';

export function ManageProfiles() {
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
            <div className="relative w-48 h-48">
              <img className="rounded-lg z-10" src={netflixIcon} alt="blue green icon" />
              <div className="rounded-lg absolute inset-0 bg-black opacity-70 z-20 flex justify-center items-center">
                <div className="border-4 border-white rounded-full p-5">
                  <BiPencil className="text-white text-4xl" />
                </div>
              </div>
            </div>
            <p className="text-gray-300 text-xl mt-3">herzliyaa</p>
          </div>
          <div className="text-center">
            <div className="relative w-48 h-48">
              <img className="rounded-lg z-10" src={netflixIcon1} alt="blue green icon" />
              <div className="rounded-lg absolute inset-0 bg-black opacity-70 z-20 flex justify-center items-center">
                <div className="border-4 border-white rounded-full p-5">
                  <BiPencil className="text-white text-4xl" />
                </div>
              </div>
            </div>
            <p className="text-gray-300 text-xl mt-3">christinnaa</p>
          </div>
          <div className="text-center">
            <div className="relative w-48 h-48">
              <img className="rounded-lg z-10" src={netflixIcon2} alt="blue green icon" />
              <div className="rounded-lg absolute inset-0 bg-black opacity-70 z-20 flex justify-center items-center">
                <div className="border-4 border-white rounded-full p-5">
                  <BiPencil className="text-white text-4xl" />
                </div>
              </div>
            </div>
            <p className="text-gray-300 text-xl mt-3">mgpancho</p>
          </div>
          <div className="text-center">
            <div className="relative w-48 h-48">
              <img className="rounded-lg z-10" src={netflixIcon3} alt="blue green icon" />
              <div className="rounded-lg absolute inset-0 bg-black opacity-70 z-20 flex justify-center items-center">
                <div className="border-4 border-white rounded-full p-5">
                  <BiPencil className="text-white text-4xl" />
                </div>
              </div>
            </div>
            <p className="text-gray-300 text-xl mt-3">vpascual</p>
          </div>
          <div className="text-center">
            <div className="relative w-48 h-48">
              <img className="rounded-lg z-10" src={netflixIcon4} alt="blue green icon" />
              <div className="rounded-lg absolute inset-0 bg-black opacity-70 z-20 flex justify-center items-center">
                <div className="border-4 border-white rounded-full p-5">
                  <BiPencil className="text-white text-4xl" />
                </div>
              </div>
            </div>
            <p className="text-gray-300 text-xl mt-3">tmgaridos</p>
          </div>

        </div>

        <div className="mt-24">
          <Link to="/login">
            <button className="text-2xl border border-gray-400 py-2 px-6 text-gray-400 hover:border hover:border-white hover:text-white">
              Done
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
