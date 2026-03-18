import { BarChart, Code, CropRotate, Settings, ViewInAr } from "@mui/icons-material";

function Services() {
  const services = [
    {
      id: 1,
      icon: <Settings />,
      title: "Creative Design",
      desc: "Creative design involves using computer-generated imagery and digital animation to visualise a product",
    },
    {
      id: 2,
      icon: <CropRotate />,
      title: "Clean Code",
      desc: "Writing clean, understandable, and maintainable code",
    },
    {
      id: 3,
      icon: <ViewInAr />,
      title: "Responsive Design",
      desc: "Fully Responsive websites",
    },
  
    {
      id: 5,
      icon: <Code />,
      title: "Material UI Icons",
      desc: "Using Icons with Material UI",
    },
    {
      id: 6,
      icon: <BarChart />,
      title: "Awesome Support",
      desc: "Supporting you with my skills and anything",
    },
  ];
  
  return (
    <div className="backColor w-full min-h-[100vh] pt-[140px] pb-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h1 className="text-amber-500 text-4xl md:text-5xl text-center text-nowrap mb-10">
          Services
        </h1>

        <section className="pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((item, i) => (
            <div
              className="backColorCard text-white rounded-2xl p-6 flex flex-col gap-3 border border-gray-800/60 shadow-xl"
              key={i}
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="500"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
                <i className="text-amber-500">{item.icon}</i>
              </div>
              <h3 className="text-lg md:text-xl font-semibold">{item.title}</h3>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Services