import pic from '../assets/man.jpg'


function About() {
  
  return (
    <div className='flex flex-col justify-center items-center backColor w-[100vw] h-[100vh]'>
        <h1 className='text-amber-500 text-5xl pe-1 text-nowrap m-8'>About</h1>
        <div className='grid grid-cols-3 text-center w-[85vw] '>
            <div className='imgBox ' data-aos="fade-right">
                <img src={pic} className='rounded-3xl h-96 w-64 man' />
            </div>
            <div data-aos="zoom-in">
              <div className='flex mb-3' >
                <h1 className='text-amber-500 text-2xl pe-1 text-nowrap'>Name : </h1>
                <p className='text-white text-xl p-1'> Abanoub Samir</p>
              </div>
              <div className='flex mb-3'>
                <h1 className='text-amber-500 text-2xl pe-1 text-nowrap'>Profile : </h1>
                <p className='text-white text-xl'> Front-End & cross mobile platform Developer</p>
              </div>
              <div className='flex mb-3'>
                <h1 className='text-amber-500 text-2xl pe-1 text-nowrap'>Email : </h1>
                <p className='text-white text-xl'> AbanoubSamir2811@gmail.com</p>
              </div>
              <div className='flex mb-3'>
                <h1 className='text-amber-500 text-2xl pe-1 text-nowrap'>Phone : </h1>
                <p className='text-white text-xl'>+201277744647</p>
              </div>
              <div className='flex mb-3'>
                <h1 className='text-amber-500 text-2xl pe-1 text-nowrap'>Skills : </h1>
                <div className='grid grid-cols-3 gap-3'>
                  <p className='text-white text-xl p-2'>HTML </p>
                  <p className='text-white text-xl p-2'>CSS </p>
                  <p className='text-white text-xl p-2'>Javascript </p>
                  <p className='text-white text-xl p-2'>Typescript </p>
                  <p className='text-white text-xl p-2'>Bootstrap </p>
                  <p className='text-white text-xl p-2'>Tailwind</p>
                  <p className='text-white text-xl p-2'>Angular </p>
                  <p className='text-white text-xl p-2'>React js </p>
                  <p className='text-white text-xl p-2'>Next js </p>
                </div>
                
              </div>
            </div>
            
            <div className='px-5' data-aos="fade-left">
                  <h1 className='text-amber-500 text-2xl pe-1 text-nowrap'>About me </h1>
                  <p className='text-white text-xl'>Dedicated Frontend Developer with a solid foundation in web and mobile app development, acquired through an ITI scholarship. Proficient in HTML, CSS, JavaScript, and experienced in building diverse web and mobile applications using Angular, React, Next.js, React Native, and Flutter. Proven track record of successful project delivery. Seeking a dynamic company that values innovation and provides opportunities for professional growth.</p>
            </div>
        </div>
    </div>
  )
}

export default About