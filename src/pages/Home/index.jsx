import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMovies, selectAllMovies } from "../../features/movies/slice";

export default function Homepage() {
  const dispatch = useDispatch();
  const { data } = useSelector(selectAllMovies);
  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <main>
      <div className="flex w-screen h-screen justify-center items-center flex-wrap">
        <div className="flex m-2 p-4 justify-center items-center object-center h-1/2 ">
          {data.map((item) => {
            return (
              <div
                className="flex flex-col w-2/3  h-full justify-center items-center overflow-hidden m-2"
                key={item.id}
              >
                <div className="flex flex-col w-full h-96 justify-center items-center hover:translate-y-100 transform">
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    className="object-cover h-full"
                  />
                  <div className="w-full p-3 flex flex-wrap justify-center">
                    <p className="text-center text-sm font-bold text-white tracking-wide uppercase">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
