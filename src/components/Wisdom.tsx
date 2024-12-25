import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Wisdom = () => {
  const container: any = useRef();

  useGSAP(
    () => {
      gsap.from(".box", { rotation: 180, duration: 2 });
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className=" w-full min-w-[696px] aspect-[1448/708] relative flex"
    >
      <span className="bottom-0 top-0 w-full  absolute -mt-[17%]">
        <img
          src="https://d35aaqx5ub95lt.cloudfront.net/images/splash/lottie/890eb76de9a395b182c1c28322721405.svg"
          className="h-full"
        />
      </span>
    </div>
  );
};

export default Wisdom;
