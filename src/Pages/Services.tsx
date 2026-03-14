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
    <div className='flex flex-col justify-center items-center backColor w-[100vw] h-[100vh] pt-[180px]'>
      <h1 className='text-amber-500 text-5xl pe-1 text-nowrap m-8'>Services</h1>
      <section className="mb-[250px]">
      <div className="max-w-[80%] m-auto">
        <div className="grid grid-cols-3 gap-5">
          {services.map((item, i) => (
            <div className="backColorCard text-white h-[40vh] rounded-md p-5 text-2xl flex flex-col justify-evenly" key={i} data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="500">
              <i className="text-amber-500">{item.icon}</i>
              <h3>{item.title}</h3>
              <p className="text-lg">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
  )
}

export default Services