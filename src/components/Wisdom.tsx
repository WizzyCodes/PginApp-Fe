// import { createRef, useEffect, useRef } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";

const Wisdom = () => {
  // const containerRef = useRef(null);
  // const imageRef = useRef(null);

  // useGSAP(() => {
  //   // Register GSAP plugin
  //   gsap.registerPlugin();

  //   // Create bounce animation
  //   gsap.from(imageRef.current, {
  //     scale: 1,
  //     y: 50,
  //     duration: 10,
  //     ease: "bounce.out",
  //     repeat: -1, // Infinite repeat
  //     yoyo: true, // Reverse animation
  //     stagger: {
  //       amount: 1,
  //       from: "start",
  //     },
  //   });
  // }, []);
  const footerLinks = [
    {
      title: "About us",
      links: [
        "Courses",
        "Mission",
        "Approach",
        "Efficacy",
        "Team",
        "Research",
        "Careers",
        "Brand guidelines",
        "Store",
        "Press",
        "Investors",
        "Contact us",
      ],
    },
    {
      title: "Products",
      links: [
        "Duolingo",
        "Duolingo for Schools",
        "Duolingo English Test",
        "Duolingo ABC",
        "Duolingo Math",
        "Podcast",
        "Duolingo for Business",
        "Super Duolingo",
        "Gift Super Duolingo",
      ],
    },
    {
      title: "Apps",
      links: ["Duolingo for Android", "Duolingo for iOS", "Duolingo ABC (iOS)"],
    },
    {
      title: "Help and support",
      links: [
        "Duolingo FAQs",
        "Schools FAQs",
        "Duolingo English Test FAQs",
        "Status",
      ],
    },
    {
      title: "Privacy and terms",
      links: [
        "Community guidelines",
        "Terms",
        "Privacy",
        'Respecting your "do not sell my personal information" rights',
      ],
    },
    {
      title: "Social",
      links: ["Blog", "Instagram", "Facebook", "Twitter", "YouTube"],
    },
  ];

  return (
    <div>
      <div
        // ref={containerRef}
        className="container w-full min-w-[696px] aspect-[1448/708] relative flex  mb-0  overflow-hidden z-0"
      >
        <img
          // ref={imageRef}
          src="https://d35aaqx5ub95lt.cloudfront.net/images/splash/lottie/890eb76de9a395b182c1c28322721405.svg"
          className="h-full w-full z-0"
        />
      </div>

      <footer className="bg-[#58cb04] text-white px-[200px] py-10">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4 text-slate-50">
                {section.title}
              </h3>
              <ul className="space-y-2 font-medium text-slate-300">
                {section.links.map((link, i) => (
                  <li key={i}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Wisdom;
