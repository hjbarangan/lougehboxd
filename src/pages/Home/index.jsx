import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMovies } from "../../features/movies/slice";

export default function Homepage() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.movie);
  console.log("🚀 ~ file: index.jsx:8 ~ Home ~ data:", data);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  <main>
    <div className="flex w-screen h-screen bg-red-300 justify-center items-center flex-wrap">
      <div className="flex m-2 p-4 justify-center items-center object-center w-3/4 h-1/2 bg-black">
        {data.map((item) => {
          console.log("🚀 ~ file: index.jsx:18 ~ {data.map ~ item:", item);
          return (
            <div
              className="flex bg-purple-300 h-full justify-center items-center relative overflow-hidden m-2"
              key={item.id}
            >
              <h3>{item.title}</h3>
              <img
                src={item.imageSrc}
                alt="image"
                className="flex object-cover w-full h-full"
              />
            </div>
          );
        })}
      </div>
    </div>
  </main>;
}
