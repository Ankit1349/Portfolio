import { useEffect, useRef } from "react";
import profileImg from "/src/assets/images/img.jpg"; //profile image
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import Heading from "../ui/Heading";

export default function About() {
  const profile = useRef(null);
  const aboutSection = useRef(null);
  const heading = useRef(null);
  const body = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: aboutSection.current,
      start: "top 350px",
      animation: gsap
        .timeline()
        .to(
          heading.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0
        )
        .to(
          body.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0.2
        ),

      toggleActions: "play none none none",
    });
    ScrollTrigger.refresh();
  }, [aboutSection]);

  return (
    // Try using max width to contain the size of the container
    <section ref={aboutSection} aria-label="about me">
      <Heading title="about me" />
      <div className="mt-10 flex flex-col items-start gap-8 md:flex-row lg:gap-8 ">
        <div className="top-28 overflow-hidden rounded-md md:sticky md:w-1/2">
          <img
            ref={profile}
            loading="lazy"
            className="aspect-square h-90 w-90 rounded-md object-cover object-center "
            src={profileImg}
            width="90%"
            height="10%"
            alt="portrait image "
          />
        </div>
        <div className="top-20 sm:sticky md:top-28 lg:top-32 md:w-1/2">
          <div className="w-full space-y-4 2xl:space-y-10">
            <h3
              ref={heading}
              className="translate-y-10 text-heading-3 2xl:text-5xl font-semibold leading-tight opacity-0"
            >
              A brief intro, who am I?
            </h3>
            <p ref={body} className=" translate-y-10 text-body-1 2xl:text-3xl opacity-0">
              I am a aspiring Software Engineer, UI/UX Designer and Student based in
              India.
              <br></br>
              <br></br>I have been crafting Web applications, Softwares and
              Designs for projects and competitions to get hands on experience
              and exposure with different technologies. 😎
              <br></br>
              <br></br>
              When I am not developing or designing, I enjoy creating ideas,
              reading and exploring new stuff  {" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
