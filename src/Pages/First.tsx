import TypewriterComponent from "typewriter-effect";
import cv from '../assets/Abanoub_Samir_Front_End CV.pdf';

function First() {
    const home ={
        name: "Abanoub Samir",
        post: "Frontend Developer",
        design: "React Developer",
        design1: "Angular Developer",
        design2: "next Developer",
    }

  return (
    <div className="home flex justify-center items-center text-white px-4 md:px-8">
        <div className="text-center flex justify-center items-center flex-col text-amber-500 w-full max-w-4xl">
            <div className="text-base sm:text-lg md:text-2xl text-white mb-4 md:mb-5">
              Hello I&apos;m
            </div>

            <div className="text-4xl">
              <TypewriterComponent
                  options={{
                      strings: [`${home.name}`, `${home.post}`, `${home.design}`, `${home.design1}`, `${home.design2}`],
                      autoStart: true,
                      loop: true,
                  }}
              />
            </div>

            <div className="mt-5 md:mt-6 text-sm sm:text-base md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            If you’d like to learn more about my experience and technical background, feel free to download my CV using the button below.

It includes detailed information about my projects, skills, and the technologies I’ve worked with.
            </div>
            <button className="primaryBtn text-base sm:text-lg md:text-2xl flex items-center justify-center border-amber-500 border-2 rounded-full border-solid mt-5 h-12" data-aos="fade-up-right">
              <a href={cv} download style={{ textDecoration: "none", color: "#e0a80d" }}
                    className="h-[80px] px-6 flex items-center justify-center">
                Download CV
              </a>
            </button>
        </div>
    </div>
  )
}

export default First