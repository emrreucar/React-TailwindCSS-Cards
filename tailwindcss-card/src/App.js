import "./App.css";
import resim1 from "./images/mv3.jpg";
import resim2 from "./images/mv4.jpg";
import resim3 from "./images/mv5.jpg";

function App() {
  return (
    <div>
      <div className="max-w-[1320px] mx-auto">
        <h1 className="text-4xl text-center py-5">Featured Products</h1>
      </div>
      <div className="max-w-[1320px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-5 px-[20px]">
        <div className="text-center shadow-lg grid grid-1 items-center justify-center p-5">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={resim1}
              alt="resim1"
              className="hover:scale-110 duration-500"
            />
          </div>
          <h3 className="mt-5 leading-10 text-2xl font-semibold">
            Lorem Ipsum dolor sit.
          </h3>
          <p>Rs 8000</p>
        </div>
        <div className="text-center shadow-lg grid grid-1 items-center justify-center p-5">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={resim2}
              alt="resim1"
              className="hover:scale-110 duration-500"
            />
          </div>
          <h3 className="mt-5 leading-10 text-2xl font-semibold">
            Lorem Ipsum dolor sit.
          </h3>
          <p>Rs 8000</p>
        </div>
        <div className="text-center shadow-lg grid grid-1 items-center justify-center p-5">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={resim3}
              alt="resim1"
              className="hover:scale-110 duration-500"
            />
          </div>
          <h3 className="mt-5 leading-10 text-2xl font-semibold">
            Lorem Ipsum dolor sit.
          </h3>
          <p>Rs 8000</p>
        </div>
        <div className="text-center shadow-lg grid grid-1 items-center justify-center p-5">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={resim2}
              alt="resim1"
              className="hover:scale-110 duration-500"
            />
          </div>
          <h3 className="mt-5 leading-10 text-2xl font-semibold">
            Lorem Ipsum dolor sit.
          </h3>
          <p>Rs 8000</p>
        </div>
      </div>
    </div>
  );
}

export default App;
