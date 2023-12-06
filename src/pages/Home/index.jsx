import { data } from "../../data";
const Home = () => (
  <main>
    <div className='flex w-screen h-screen bg-red-300 justify-center items-center flex-wrap'>
      <div className='flex m-2 p-4 justify-center items-center object-center w-2/3 h-1/2 bg-black'>
        {data.map((item) => {
          return (
            <div
              className='flex bg-purple-300 h-full w-1/4 justify-center items-center relative overflow-hidden m-2'
              key={item.id}
            >
              <img
                src={item.imageSrc}
                alt=''
                className='flex object-cover w-full h-full'
              />
            </div>
          );
        })}
      </div>
    </div>
  </main>
);

export default Home;
