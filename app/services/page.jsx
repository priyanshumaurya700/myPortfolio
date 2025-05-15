import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <>
      <div className='services py-5'>
        <div className='container'>
          <div className='row' style={{ minHeight: '300px'}}>
            <div className='col-sm-6' >
              <div className='services_content'>Empowering Your Vision with Technology</div>
              <p className='services_para'>We transform your ideas into powerful digital solutions. As a trusted offshore software development company, we specialize in delivering innovative, high-quality applications tailored to your business needs. Our expertise ensures seamless integration, scalability, and efficiency helping you stay ahead in the digital age.</p>
            </div>
            <div className='col-sm-6 text-center' >
              <Image src="/services.png" className='rounded img-fluid' alt='' height={320} width={320} />
            </div>
          </div>
          <div className='row mx-auto'>
            <h2 className='head text-center'>Our Services</h2>
            <div className="col-sm-4 mb-3">
              <div className='services1' >
                <Image src="/web.png" className='rounded' alt='' height={250} width={250} />
                <h4 className=' mb-3  mt-3 home_font'>Application Development</h4>
                <p className='services_para1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto distinctio dolor vero laudantium autem in!</p>
              </div>
            </div>
            <div className="col-sm-4 mb-3">
              <div className='services1' >
                <Image src="/web.png" className='rounded' alt='' height={250} width={250} />
                <h4 className=' mb-3 mt-3 home_font'>Software Development</h4>
                <p className='services_para1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto distinctio dolor vero laudantium autem in!</p>
              </div>
            </div>
            <div className="col-sm-4 mb-3">
              <div className='services1 ' >
                <Image src="/web.png" className='rounded' alt='' height={250} width={250} />
                <h4 className=' mb-3  mt-3 home_font'>Web Development</h4>
                <p className='services_para1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto distinctio dolor vero laudantium autem in!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services