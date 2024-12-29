import pix from "../assets/duoligo.svg";
import pix1 from "../assets/duolingo2.svg";
import pix2 from "../assets/duolingo3.svg";
import pix3 from "../assets/duolingo4.svg";
const Ibrahim = () => {
  return (
    <div className="font-Outfit">
      <div className=" w-full h-[70vh]  flex justify-center">
        <div className="w-[70%] h-full  flex justify-between">
          <div className="w-[40%] h-full ml-10">
            <h1 className="flex gap-2 mt-40">
              <p className="font-bold text-[50px] text-[#58cb04]">free.</p>
              <p className="font-bold text-[50px] text-[#58cb04]">fun.</p>
              <p className="font-bold text-[50px] text-[#58cb04]">effective.</p>
            </h1>
            <p className="text-[15px] mt-5 font-medium">
              Learning pidgin is fun, and{" "}
              <span className="text-[#40a8da]">research shows that it</span>{" "}
              works! With quick, bite-sized lessons, you’ll earn points and
              unlock new levels while gaining real-world communication skills.
            </p>
          </div>
          <div className="w-[40%] h-full flex items-center ml-10">
            <img src={pix} alt="image" className="" />
          </div>
        </div>
      </div>
      <div className="w-full h-[70vh]  flex justify-center">
        <div className="w-[70%] h-full flex justify-between">
          <div className="w-[40%] h-full flex items-center">
            <img src={pix3} alt="" />
          </div>
          <div className="w-[40%] h-full">
            <h1 className="text-[50px] text-[#58cb04] font-bold mt-40">
              backed by science
            </h1>
            <p className="mt-4 font-Outfit">
              We use a combination of research-backed teaching methods and
              delightful content to create courses that effectively teach
              reading, writing, listening, and speaking skills!
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[70vh] flex justify-center">
        <div className="w-[70%] h-full flex justify-between ">
          <div className="w-[40%] h-full">
            <h1 className="text-[50px] text-[#58cb04] font-bold mt-40">
              stay motivated
            </h1>
            <p className="mt-4 font-Outfit">
              We make it easy to form a habit of language learning with
              game-like features, fun challenges, and reminders from our
              friendly mascot, Duo the owl.
            </p>
          </div>
          <div className="w-[40%] h-full mt-15 ">
            <img src={pix2} alt="" />
          </div>
        </div>
      </div>
      <div className="w-full h-[70vh]  flex justify-center">
        <div className="w-[70%] h-full flex justify-between">
          <div className="w-[40%] h-full flex items-center">
            <img src={pix3} alt="" />
          </div>
          <div className="w-[40%] h-full">
            <h1 className="text-[50px] text-[#58cb04] font-bold mt-40">
              personalized
              <br />
              learning
            </h1>
            <p className="mt-4 font-Outfit">
              Combining the best of AI and language science, lessons are
              tailored to help you learn at just the right level and pace.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ibrahim;
