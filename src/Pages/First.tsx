import TypewriterComponent from "typewriter-effect";
import cv from '../assets/AbanoubSamir_FrontEnd CV.pdf';

function First() {
    const home ={
        name: "Abanoub Samir",
        post: "Frontend Developer",
        design: "React Developer",
        design1: "Angular Developer",
        design2: "Flutter Developer",
        design3: "Next Developer",
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
                      strings: [`${home.name}`, `${home.post}`, `${home.design}`, `${home.design1}`, `${home.design2}`, `${home.design3}`],
                      autoStart: true,
                      loop: true,
                  }}
              />
            </div>

            <div className="mt-5 md:mt-6 text-sm sm:text-base md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Experienced Application/Web Developer with a strong foundation in React, Angular, Next.js, Flutter, and React Native. Proficient in HTML, CSS, JavaScript, Material UI, Bootstrap, and Tailwind CSS for designing and deploying user-friendly interfaces. Committed to delivering exceptional user experiences while aligning development efforts with business objectives to create high-quality products.
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