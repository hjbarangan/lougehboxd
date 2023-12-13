import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMovies, selectAllMovies } from '../../features/movies/slice';
import { Link } from 'react-router-dom';
import { BiSearch, BiBell } from 'react-icons/bi';

export default function Homepage() {
  const dispatch = useDispatch();
  const { data } = useSelector(selectAllMovies);
  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <div className="h-screen w-screen bg-gradient-to-tr from-blue-900 to-black-500">
      <header className="h-16 flex justify-between items-end px-12">
        <div className="flex">
          <div>
            <h2 className="text-white text-3xl">netflix kuno.</h2>
          </div>
          <div className="flex justify-center items-end ml-12 sm:hidden md:flex">
            <ul className="flex">
              <li>
                <p className="text-gray-400 px-5 text-lg hover:text-white">
                  Home
                </p>
              </li>
              <li>
                <p className="text-gray-400 px-5 text-lg hover:text-white">
                  Series
                </p>
              </li>
              <li>
                <p className="text-gray-400 px-5 text-lg hover:text-white">
                  Movies
                </p>
              </li>
              <li>
                <p className="text-gray-400 px-5 text-lg hover:text-white">
                  Genres
                </p>
              </li>
              <li>
                <p className="text-gray-400 px-5 text-lg hover:text-white">
                  My List
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center items-end">
          <BiSearch className="text-3xl text-gray-400 mr-4" />
          <BiBell className="text-3xl text-gray-400 mr-4" />
          <Link to="/login">
            <p className="text-gray-400 px-5 text-lg hover:text-white">
              Logout
            </p>
          </Link>
        </div>
      </header>
      <main className="py-16">
        <div className="grid-cols-4 flex gap-5 justify-center">
          <div>
            <iframe
              width="400"
              height="225"
              src="https://www.youtube.com/embed/pBk4NYhWNMM?si=cuZQPT1g-cqMeCbW-&amp;controls=0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              width="400"
              height="225"
              src="https://www.youtube.com/embed/uYPbbksJxIg?si=4hT_ic8tPYPy-Qz-&amp;controls=0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              width="400"
              height="225"
              src="https://www.youtube.com/embed/otNh9bTjXWg?si=HN7QafUGTBEjgE3e-&amp;controls=0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              width="400"
              height="225"
              src="https://www.youtube.com/embed/VWavstJydZU?si=CfZG_t2K3R3Gvyy6-&amp;controls=0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </main>
    </div>
  );
}
