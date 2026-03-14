import React, { useRef } from 'react';
import Back from '../shared/Back';
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt } from 'react-icons/fa';
import hospitalImg from '../assets/hospital.jpg';

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
      title: "Task Management App",
      image: "https://via.placeholder.com/300x200",
      technologies: ["Angular", "Firebase", "TypeScript"],
      link: "https://frontend-final-project-pi.vercel.app/"
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      image: "https://via.placeholder.com/300x200",
      technologies: ["React", "Redux", "Material UI"],
      link: "#"
    },
    {
      id: 4,
      title: "Mobile Fitness App",
      image: "https://via.placeholder.com/300x200",
      technologies: ["Flutter", "Firebase", "Dart"],
      link: "#"
    },
    {
      id: 5,
      title: "Real Estate Platform",
      image: "https://via.placeholder.com/300x200",
      technologies: ["Next.js", "Prisma", "PostgreSQL"],
      link: "#"
    },
    {
      id: 6,
      title: "Food Delivery App",
      image: "https://via.placeholder.com/300x200",
      technologies: ["React Native", "Node.js", "MongoDB"],
      link: "#"
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
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
    <div className='flex flex-col justify-center items-center backColor w-[100vw] h-[100vh] pt-[180px]'>
      <Back />
      <h1 className='text-amber-500 text-5xl pe-1 text-nowrap m-8'>Portfolio</h1>
      <section className="mb-[250px] relative w-[90%]">
        <button 
          onClick={() => scroll('left')}
          className="absolute -left-16 top-1/2 -translate-y-1/2 z-10 bg-gray-800 text-amber-500 p-3 rounded-full hover:bg-gray-700 transition-colors"
        >
          <FaChevronLeft size={24} />
        </button>
        
        <div 
          ref={scrollContainerRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project, i) => (
            <div 
              key={i} 
              className="backColorCard text-white h-[60vh] rounded-md p-5 flex flex-col justify-between min-w-[400px] snap-center" 
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="500"
            >
              <div className="relative overflow-hidden rounded-md mb-4">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-50 object-cover transition-transform duration-300 hover:scale-110"
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
          className="absolute -right-16 top-1/2 -translate-y-1/2 z-10 bg-gray-800 text-amber-500 p-3 rounded-full hover:bg-gray-700 transition-colors"
        >
          <FaChevronRight size={24} />
        </button>
      </section>
    </div>
  );
}

export default Portfolio;