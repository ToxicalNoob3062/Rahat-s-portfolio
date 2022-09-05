import Head from "next/head";
import styles from "../styles/Home.module.css";
import HeroBanner from "../components/banner/banner";
import Tech from "../components/tech/tech";
import TechStack from "../components/tech_stack/tech_stack";
import techs from "../data/tech.json" assert { type: "json" };
let id = 0;
export default function Home() {
  return (
    <div>
      <HeroBanner />
      <TechStack stack_title="frontend">
        {techs.map((tech) => (
          <Tech //
            key={id++}
            data={tech.description}
            path={tech.path}
            title={tech.name}
          />
        ))}
      </TechStack>
    </div>
  );
}
