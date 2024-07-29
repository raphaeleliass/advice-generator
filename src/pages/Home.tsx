import { useEffect, useState } from "react";
import Api from "../services/api";
import { FaDiceFive } from "react-icons/fa";

interface AdviceData {
  id: string;
  advice: string;
}

function Home() {
  const [advice, setAdvice] = useState<AdviceData | null>(null);

  async function getAdvice() {
   try {
     const response = await Api.get("advice");
     setAdvice(response.data.slip);
     console.log(response.data.slip);
   } catch (err) {
     console.log(err);
   }
 }
  
  useEffect(() => { 
    getAdvice();
  }, []);

  return (
    <section className="flex min-h-[100dvh] items-center justify-center bg-slate-800">
      <div className="flex h-[500px] space-y-12 min-w-[320px] max-w-sm flex-col items-center justify-around rounded-xl bg-gray-700 p-12">
        <p className="text-xs font-bold text-emerald-400 drop-shadow-2xl">
          A D V I C E  #{advice?.id}
        </p>
        <h2 className="text-center text-2xl font-bold italic text-white">
          "{advice?.advice}"
        </h2>

        <button className="absolute translate-y-56 rounded-full bg-emerald-400 p-4 text-slate-800 shadow-lg shadow-emerald-700 transition-all hover:translate-y-[220px] hover:shadow-xl hover:shadow-emerald-600" onClick={getAdvice}>
          <FaDiceFive className="size-6" />
        </button>
        <div className="h-px w-full bg-slate-400" />
      </div>
    </section>
  );
}

export default Home;
