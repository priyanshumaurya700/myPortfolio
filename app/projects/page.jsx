'use client'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import React from 'react'
import Link from 'next/link';

const Projects = () => {
  const router = useRouter()

  const data = [
    {
      id: 1,
      title: "Online Education",
      description: 'A platform for online learning that allows students and teachers to interact, access courses, and track progress efficiently.'
    },
    {
      id: 2,
      title: "Personal Blog",
      description: 'A blog website to share thoughts, tutorials, and experiences in web development, technology, and personal insights.'
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: 'A personal portfolio website showcasing skills, projects, and experiences in web development with an interactive UI.'
    }
  ]
  // const goToProjectDeatils = () => {
  //   router.push(`/projectdetail/${_id}`)
  // }
  return (
    <>
      <div className='projects py-5'>
        <div className='container'>
          <div className='row mb-5 align-items-center'>
            <div className='col-sm-8'>
              <div className='row'>
                <div className='col-sm-12'>
                  <h2 className='project_content'>Innovate, Create, Elevate – Bringing Ideas to Life!</h2>
                  <p className='project_para'>Every great project starts with a spark! We blend creativity, innovation, and technology to build high-quality, impactful solutions. Whether it’s web development, data management, or design, our user-centric approach ensures functionality with inspiration. 🚀💡</p>
                </div>
              </div>
            </div>
            <div className='col-sm-4 text-center'>
              <Image src='/web.png' className='img-fluid rounded' height={300} width={300} alt='' />
            </div>
          </div>
          <div className='row'>
            <h2 className='text-center font-bold mb-5'>Our Projects</h2>
            {
              data.map((item) => (
                <div className='col-sm-4' key={item.id}>
                  <div className="border rounded shadow-sm m-2 text-bg-light hover-effect">
                    <div className="text-center p-3">
                      <Image src="/web.png" height={250} width={250} alt="Project Image" className="img-fluid rounded" />
                    </div>
                    <div className="p-4">
                      <h4 className="fw-bold mb-2">{item.title}</h4>
                      <p className="text-muted" style={{ textAlign: "justify" }}>
                        {item.description}
                      </p>
                      <div className='button'>
                        <Link href={`/projectdetail/${item.id}`} className='btn2'>View More</Link>
                      </div>
                    </div>
                  </div>

                </div>
              ))
            }
            {/* <div className='col-sm-4'>
                  <div className="border rounded shadow-sm m-2 text-bg-light hover-effect">
                    <div className="text-center p-3">
                      <Image src="/web.png" height={250} width={250} alt="Project Image" className="img-fluid rounded" />
                    </div>
                    <div className="p-4">
                      <h4 className="fw-bold mb-2">Personal Blog</h4>
                      <p className="text-muted" style={{ textAlign: "justify" }}>
                        A blog website to share thoughts, tutorials, and experiences in web development, technology,
                        and personal insights.
                      </p>
                      <div className='button' onClick={goToProjectDeatils}>
                        <Link href='' className='btn2'>View More</Link>
                      </div>
                    </div>
                  </div>

                </div>
                <div className='col-sm-4'>
                  <div className="border rounded shadow-sm m-2 text-bg-light hover-effect">
                    <div className="text-center p-3">
                      <Image src="/web.png" height={250} width={250} alt="Project Image" className="img-fluid rounded" />
                    </div>
                    <div className="p-4">
                      <h4 className="fw-bold mb-2">Portfolio Website</h4>
                      <p className="text-muted" style={{ textAlign: "justify" }}>
                        A personal portfolio website showcasing skills, projects, and experiences in web development
                        with an interactive UI.
                      </p>
                      <div className='button' onClick={goToProjectDeatils}>
                        <Link href='' className='btn2'>View More</Link>
                      </div>
                    </div>
                  </div>

                </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
// export const metadata = {
//   title: "Projects",
//   description: "Generated by create next app",
// };