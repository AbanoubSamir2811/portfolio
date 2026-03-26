import { useRef } from 'react';
import Back from '../shared/Back';
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt } from 'react-icons/fa';
import hospitalImg from '../assets/hospital.jpg';
import taskImg from '../assets/task.jpeg';
import rovaniotoursImg from '../assets/rovaniotours.jpeg';
import digitalplusImg from '../assets/digital plus.png';
import eventlyImg from '../assets/evently.jpeg';
import jopplatformImg from '../assets/ihbk.jpeg';
import shopImg from '../assets/inolekw.jpg';

function Portfolio() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const projects = [
    {
      id: 1,
      title: "Pulso Website",
      image: hospitalImg,
      technologies: ["React", "Node.js", "Firebase"],
      link: "https://frontend-final-project-pi.vercel.app/"
    },
    {
      id: 2,
      title: "TaskFlow App",
      image: taskImg,
      technologies: ["REACT", "SUPABASE", "TypeScript", "TAILWIND"],
      link: "https://workflow-ecru-psi.vercel.app/"
    },
    {
      id: 3,
      title: "Rovaniotours",
      image: rovaniotoursImg ,
      technologies: ["React", "Redux", "tailwind"],
      link: "https://rovaniotours-delta.vercel.app/"
    },
    {
      id: 4,
      title: "Digital Plus",
      image: digitalplusImg,
      technologies: ["React js", "tailwind", "typescript"],
      link: "https://digitalplus-ochre.vercel.app/"
    },
    {
      id: 5,
      title: "Jop Platform",
      image: jopplatformImg,
      technologies: ["React js", "tailwind", "typescript"],
      link: "https://jopplatform.vercel.app/"
    },
    {
      id: 6,
      title: "E-Commerce",
      image: shopImg,
      technologies: ["React js", "tailwind", "typescript"],
      link: "https://ecommerce-kappa-tawny-82.vercel.app/"
    },
    {
      id: 7,
      title: "Evently",
      image: eventlyImg,
      technologies: ["React js", "tailwind", "typescript"],
      link: "https://evently-flame-gamma.vercel.app/"
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount =
        window.innerWidth >= 1024
          ? scrollContainerRef.current.clientWidth
          : window.innerWidth < 640
            ? 280
            : 420;
      const newScrollPosition = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <div className="flex flex-col items-center backColor w-full min-h-[100vh] pt-[140px] pb-16">
      <Back />
      <h1 className="text-amber-500 text-4xl md:text-5xl pe-1 text-nowrap mb-10">
        Portfolio
      </h1>
      <section className="relative w-full max-w-6xl px-4 md:px-8 pb-10">
        {/* Mobile/Tablet Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:hidden">
          {projects.map((project, i) => (
            <div
              key={i}
              className="backColorCard text-white rounded-2xl p-5 flex flex-col justify-between border border-gray-800/60 shadow-xl"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="500"
            >
              <div className="relative overflow-hidden rounded-md mb-4 w-full h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-amber-500 text-xl md:text-2xl font-bold text-center">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-700 text-amber-500 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 flex items-center justify-center gap-2 text-amber-500 hover:text-amber-400 transition-colors duration-300 text-sm bg-gray-800 py-2 px-4 rounded-full hover:bg-gray-700"
                >
                  <span>Visit Website</span>
                  <FaExternalLinkAlt size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Carousel */}
        <button
          onClick={() => scroll('left')}
          className="hidden lg:flex absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-gray-800 text-amber-500 p-3 rounded-full hover:bg-gray-700 transition-colors"
        >
          <FaChevronLeft size={24} />
        </button>

        <div
          ref={scrollContainerRef}
          className="hidden lg:flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-3 px-1"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project, i) => (
            <div
              key={i}
              className="backColorCard text-white rounded-2xl p-5 flex flex-col justify-between w-[calc((100%-40px)/3)] min-w-[300px] snap-center border border-gray-800/60 shadow-xl"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="500"
            >
              <div className="relative overflow-hidden rounded-md mb-4 w-full h-52">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-amber-500 text-2xl font-bold text-center">{project.title}</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-700 text-amber-500 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 flex items-center justify-center gap-2 text-amber-500 hover:text-amber-400 transition-colors duration-300 text-sm bg-gray-800 py-2 px-4 rounded-full hover:bg-gray-700"
                >
                  <span>Visit Website</span>
                  <FaExternalLinkAlt size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-gray-800 text-amber-500 p-3 rounded-full hover:bg-gray-700 transition-colors"
        >
          <FaChevronRight size={24} />
        </button>
      </section>
    </div>
  );
}

export default Portfolio;