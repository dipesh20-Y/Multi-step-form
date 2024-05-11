import { useState } from "react";
import Personal from "./components/Personal";
import Address from "./components/Address";
import Payment from "./components/Payment";
import LandingPage from "./components/LandingPage";


function App() {
  const description = ["Personal Information", "Address", "Payment"];
  const [page, setPage] = useState(0);
  const[isSubmitted, setIsSubmitted]= useState(false)
 

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    municipality: "",
    ward: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    cardno: "",
    date: "",
    cvv: "",
  });

  const handleSubmit =()=>{
    setIsSubmitted(true)
  }
 
 
  return (
    (!isSubmitted)?  (
      <div className="h-screen text-center mt-40">
      <div className="text-4xl mb-20 font-bold font-mono text-white">MULTI STEP FORM</div>
      <div className="flex justify-center items-center h-1/2 flex-col  ">
        <div className="bg-white rounded-lg max-w-full inline-block border px-4 py-8 mt-16 shadow-lg bg-blend-multiply shadow-black">
          <div className="h-20 text-2xl ">{description[page]}</div>
          <div>
            {page === 0 ? (
              <Personal data={data} setData={setData} />
            ) : page === 1 ? (
              <Address data={data} setData={setData}  />
            ) : (
              <Payment  data={data} setData={setData} />
            )}
          </div>
          <div className="w-full flex justify-between">
            {page > 0 ? (
              <button
                className="bg-slate-700 px-3 py-2 hover:bg-slate-900 text-white font-mono font-bold rounded transition ease-in-out delay-150 hover:translate-y-1"
                onClick={() => {
                  setPage((page) => page - 1);
                }}
              >
                Previous
              </button>
            ) : (
              <button
                className="bg-slate-300 px-3 py-2  text-white font-mono font-bold rounded "
                disabled
                onClick={() => {
                  setPage((page) => page - 1);
                }}
              >
                Previous
              </button>
            )}
            {page < description.length - 1 ? (
              <button
                className="bg-slate-700 px-5 py-2 hover:bg-slate-900 text-white font-mono font-bold rounded transition ease-in-out delay-150 hover:-translate-y-1  "
                disabled={page >= description.length - 1}
                onClick={() => {
                  setPage((page) => page + 1);
                }}
              >
                Next
              </button>
            ) : (
              <button
                className="bg-slate-700 px-5 py-2 hover:bg-slate-900 text-white font-mono font-bold rounded transition ease-in-out delay-150 hover:-translate-y-1  "
                onClick={handleSubmit}
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
    ): <LandingPage />
  );
}

export default App;
