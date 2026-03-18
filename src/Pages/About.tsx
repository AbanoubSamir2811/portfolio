import pic from '../assets/man.jpg'


function About() {
  
  return (
    <div className="backColor w-full min-h-[100vh] pt-[140px] pb-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h1 className="text-amber-500 text-4xl md:text-5xl text-center text-nowrap mb-10">
          About
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="imgBox flex justify-center" data-aos="fade-right">
            <img
              src={pic}
              className="rounded-3xl w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-96 object-cover man"
              alt="Profile"
            />
          </div>

          <div className="text-center lg:text-left" data-aos="zoom-in">
            <div className="space-y-3">
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                <h2 className="text-amber-500 text-xl md:text-2xl text-nowrap">Name:</h2>
                <p className="text-white text-lg md:text-xl">Abanoub Samir</p>
              </div>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                <h2 className="text-amber-500 text-xl md:text-2xl text-nowrap">Profile:</h2>
                <p className="text-white text-lg md:text-xl">
                  Front-End &amp; cross mobile platform Developer
                </p>
              </div>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                <h2 className="text-amber-500 text-xl md:text-2xl text-nowrap">Email:</h2>
                <p className="text-white text-lg md:text-xl break-all">
                  AbanoubSamir2811@gmail.com
                </p>
              </div>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                <h2 className="text-amber-500 text-xl md:text-2xl text-nowrap">Phone:</h2>
                <p className="text-white text-lg md:text-xl">+201277744647</p>
              </div>

              <div className="pt-2">
                <h2 className="text-amber-500 text-xl md:text-2xl text-nowrap mb-3">
                  Skills
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-w-md mx-auto lg:mx-0">
                  {[
                    'HTML',
                    'CSS',
                    'Javascript',
                    'Typescript',
                    'Bootstrap',
                    'Tailwind',
                    'Angular',
                    'React js',
                    'Next js',
                  ].map((skill) => (
                    <p
                      key={skill}
                      className="text-white text-sm md:text-base bg-gray-800/40 border border-gray-700/60 rounded-full px-3 py-1.5 text-center"
                    >
                      {skill}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:px-5 text-center lg:text-left" data-aos="fade-left">
            <h2 className="text-amber-500 text-xl md:text-2xl text-nowrap mb-3">
              About me
            </h2>
            <p className="text-white/90 text-base md:text-lg leading-relaxed">
              Dedicated Frontend Developer with a solid foundation in web and mobile app
              development, acquired through an ITI scholarship. Proficient in HTML, CSS,
              JavaScript, and experienced in building diverse web and mobile applications
              using Angular, React, Next.js, React Native, and Flutter. Proven track record
              of successful project delivery. Seeking a dynamic company that values
              innovation and provides opportunities for professional growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About