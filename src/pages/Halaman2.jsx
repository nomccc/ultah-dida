import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Halaman2 = () => {
  const [panggilanDida, setNama] = useState("");
  const [ikan, setIkan] = useState(0);
  const [error, setError] = useState();
  const navigate = useNavigate();

  const nama = "ibu ikan";

  function checkNama(e) {
    e.preventDefault();
    if (
      panggilanDida == nama ||
      panggilanDida == "bu ikan" ||
      panggilanDida == "nasution" ||
      panggilanDida == "nasutyon" ||
      panggilanDida == "rifdun" ||
      panggilanDida == 'dida' 
    ) {
      navigate("/halaman3");
    } else {
      setError("SALAAAHHHHH");
      setIkan(ikan + 5);
    }
  }

  return (
    <div className="flex flex-col mx-auto my-20 w-3/5 justify-center items-center h-auto">
      <p className="my-10 font-bold text-center text-4xl">
        Waalaikumussalam 💋
        <br></br>
        apa nama panggilanmu di mageran?
      </p>
      <form
        action=""
        onSubmit={(e) => {
          checkNama(e);
        }}
      >
        <input
          type="text"
          placeholder="nama"
          className="p-3 border-2"
          onChange={(e) => {
            setNama(e.target.value);
          }}
        />

        <button className="my-8 bg-yellow-400 w-full p-2 rounded-2xl">
          Tekan ini kalo dah ngetik
        </button>
      </form>
      <p className="font-bold">{error}</p>
      <div>
        <p>beliin pipah ikan = {ikan} ekor</p>
        {/* {console.log(ikan)} */}
        {ikan >= 10 ? (
          <div>
            <p className="text-red-600">
              pipah mabok makan ikan terus entar 😩
            </p>
          </div>
        ) : (
          <div></div>
        )}
        {
          ikan >= 20 ? <div className="text-center"> clue: 👩🏻 🐟 </div> : <div></div>
        }
      </div>
      <img
        src="/img/salam.jpeg"
        className="mt-20 animate-bounce "
        width={200}
        alt="foto salam"
      />
    </div>
  );
};

export default Halaman2;
