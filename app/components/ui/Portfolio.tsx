"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useGSAP(() => {
    const pin = gsap.fromTo(sectionRef.current, 
      { translateX: 0 }, 
      { 
        translateX: "-300vw", // Adjust based on number of items
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        }
      }
    );
    return () => pin.kill();
  }, { scope: triggerRef });

  return (
    <section className="overflow-hidden">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="h-screen w-[400vw] flex flex-row relative bg-slate-900 text-white">
          <div className="h-screen w-screen flex flex-col justify-center px-20 shrink-0">
            <h2 className="text-8xl font-bold tracking-tighter">Selected <br/> Works</h2>
          </div>
          {/* Work Items */}
          {[1, 2, 3].map((item) => (
            <div key={item} className="h-screen w-screen flex items-center justify-center px-20 shrink-0">
              <div className="w-full h-[70vh] bg-slate-800 rounded-[3rem] overflow-hidden border border-white/10 relative group">
                <span className="absolute top-10 left-10 text-4xl font-bold">Project 0{item}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}