import TypewriterComponent from "typewriter-effect";

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
    <div className='home flex justify-center items-center text-white'>
        <div className='text-center text-5xl text-amber-500'>
            <div className='text-2xl text-white mb-5'>Hello I'm</div>

            <TypewriterComponent
                options={{
                    strings: [`${home.name}`, `${home.post}`, `${home.design}`, `${home.design1}`, `${home.design2}`, `${home.design3}`],
                    autoStart: true,
                    loop: true,
                }}
            />
            <div className='text-2xl text-white w-[50vw] mt-5'>Experienced Application/Web Developer with a strong foundation in React, Angular, Next.js, Flutter, and React Native. Proficient in HTML, CSS, JavaScript, Material UI, Bootstrap, and Tailwind CSS for designing and deploying user-friendly interfaces. Committed to delivering exceptional user experiences while aligning development efforts with business objectives to create high-quality products .</div>
            <button className="primaryBtn text-2xl border-amber-500 border-2 rounded-full border-solid mt-5 h-12" data-aos="fade-up-right">
                  <a
                    href="https://drive.google.com/file/d/11o0tcXpVxfKZUd1WayHQaZY5dJqVTbuV/view?usp=drive_link"
                    target="_blank"
                    style={{ textDecoration: "none", color: "#e0a80d" }}
                    className="h-[80px] p-5 "
                  >
                    Download CV
                  </a>
                </button>
        </div>
    </div>
  )
}

export default First