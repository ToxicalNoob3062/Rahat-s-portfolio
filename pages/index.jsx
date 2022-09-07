import styles from "../styles/Home.module.css";
import HeroBanner from "../components/banner/banner";
import Tech from "../components/tech/tech";
import TechStack from "../components/tech_stack/tech_stack";
import techStacks from "../data/tech.json" assert { type: "json" };
export default function Home() {
  return (
    <div>
      <HeroBanner />
      {techStacks.map((techStack) => {
        return (
          <TechStack key={techStack.title} stack_title={techStack.title}>
            {techStack.techs.map((tech) => (
              <Tech //
                key={tech.id}
                id={tech.id}
                data={tech.description}
                path={tech.path}
                title={tech.name}
                position={tech.pos}
              />
            ))}
          </TechStack>
        );
      })}
    </div>
  );
}
