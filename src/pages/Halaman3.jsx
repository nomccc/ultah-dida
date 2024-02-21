import { useNavigate } from "react-router-dom";

const Halaman3 = () => {

  const navigate = useNavigate()

  function masukHal4() {
    navigate('/halaman4')
  }

  return (
    <div className="bg-hal3 bg-contain container h-screen">
      <div className="py-20 m-auto flex flex-col justify-center  items-center">
        <div className="bg-white w-2/3 justify-center text-center  p-10 m-auto items-center">
          <p className="text-xl font-semibold">dapat ucapan spesial dari roy kimochi nih 🥰</p>

          <button onClick={masukHal4} className="my-10 rounded-lg py-5 bg-pink-300 animate-ping font-semibold">Kyaa jangan pencet aqoeh ( •̯́ ₃ •̯̀)</button>
        </div>
      </div>
    </div>
  );
};

export default Halaman3;
