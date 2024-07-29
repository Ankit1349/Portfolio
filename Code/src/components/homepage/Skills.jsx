import SkillsUi from "../ui/SkillsUi";
import Heading from "../ui/Heading";

export default function Skills() {
  const expertiseItems = [
    "Web Development",
    "UI/UX Design",
    "Software Engineer",
    "Graphic Design",
  ];

  const toolBoxItems = [
    "Python ◎ Java ◎ JavaScript ◎ HTML ◎ CSS",
    "Figma ◎ Webflow",
    "MongoDB ◎ ExpressJs ◎ ReactJS ◎ NodeJS",
    "Photoshop ◎ Illustrator",
  ];

  return (
    <section id="skills" className="my-[10%]" aria-label="skills">
      <Heading title="Skills" />
      <div className="space-y-14">
        <SkillsUi
          title="my experiences."
          description="I focus on all things design and web related. With each of my
          skills, my goal is to deliver an impactful and elevating
          digital experience for everyone."
          items={expertiseItems}
        />
        <SkillsUi
          title="my digital tool box."
          description="These are my go to tech stack to make any projects happen. I am always eager of learning more about my current stack, and new technologies that could expand my horizons."
          items={toolBoxItems}
        />
      </div>
    </section>
  );
}
