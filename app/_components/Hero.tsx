/* eslint-disable @next/next/no-img-element */
import { Section } from "./Section";

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start">
      <div className="flex-[2]">
        <h2 className="font-caption text-5xl">Sébastien Glippa</h2>
        <h3>Web Developper</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae harum ea
          nemo incidunt, in, placeat sunt quibusdam adipisci pariatur,
          voluptates laborum deserunt animi laboriosam debitis rerum quisquam
          ab. Omnis, eaque.
        </p>
      </div>
      <div className="flex-[1]">
        <img
          src="https://www.sebastienglippa.com/assets/images/SebastienGlippaDeveloppeurCV2.jpg"
          className="w-full h-auto max-w-sm rounded-full"
          alt="photo de sebastien"
        />
      </div>
    </Section>
  );
};
