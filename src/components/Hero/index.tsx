import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from "astro-boilerplate-components";
import { SocialIcons } from "../../utils/SocialIcons";

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Code.Is.Mine</GradientText> 👋
        </>
      }
      description={
        <>
          <span className="text-cyan-400 hover:underline">Code.Is.Mine</span>{" "}
          provide you a blog that can be improve your knowledge with{" "}
          <span className="text-cyan-400 hover:underline">technology</span>.
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          {SocialIcons &&
            SocialIcons.map((it) => (
              <a href={it.url} target="_blanks">
                <HeroSocial src={it.icon} alt={it.iconAlt} />
              </a>
            ))}
        </>
      }
    />
  </Section>
);

export { Hero };
