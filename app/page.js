"use client";
import Image from "next/image";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <>
      <div className="row">
        <div className="col-sm-6">
          <div className="row">
            <div className="col-sm-12">
              <div className="section1">
                <h1
                  style={{
                    fontSize: "2.7rem",
                    color: "#a769e1",
                    fontWeight: "700",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Hello, I&apos;m
                  <span style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {" "}
                    Priyanshu Maurya
                  </span>
                </h1>
                <div
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "1.3rem",
                  }}
                >
                  and I am passionate
                </div>
                <span id="element" style={{ fontSize: "1.6rem" }}>
                  <Typewriter
                    words={[
                      "Full Stack Developer",
                      "MERN Stack Developer",
                      "Designer",
                      "Freelancer",
                      "Tech Enthusiast...",
                    ]}
                    loop={Infinity}
                    cursor
                    cursorStyle="|"
                    typeSpeed={80}
                    deleteSpeed={50}
                    delaySpeed={1500}
                  />
                </span>
                <div className="button">
                  <Link href="#" className="btn1">
                    DOWNLOAD RESUME
                  </Link>
                  <Link href="#" className="btn1">
                    VISIT GITHUB
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="row">
            <div className="col-sm-12 text-center">
              <Image
                src="/web.png"
                className="img-fluid mt-5"
                height={480}
                width={480}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div style={{ border: "1.2px solid #1e2167", marginTop: "30px" }}></div>
      <section className="work_experience mt-5">
        <h2 className="head">Work Experience</h2>
        <div className="main-div mb-5">
          {[
            {
              title: "Web Developer",
              description:
                "Worked on building responsive and accessible web pages from scratch.",
              imgSrc: "/web.png",
            },
            {
              title: "MERN Developer",
              description:
                "Built full-stack applications using MongoDB, Express, React, and Node.js.",
              imgSrc: "/web.png",
            },
            {
              title: "Node.js Developer",
              description:
                "Developed backend services for scalable applications using Node.js.",
              imgSrc: "/web.png",
            },
          ].map((job, index) => (
            <div className="work" key={index}>
              <div className="img-circle_home">
                <Image
                  src={job.imgSrc}
                  height={50}
                  width={50}
                  alt={job.title}
                />
              </div>
              <h4 className="mt-3 home_font">{job.title}</h4>
              <p className="para1">{job.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
