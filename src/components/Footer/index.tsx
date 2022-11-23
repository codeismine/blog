import { FooterCopyright, Section } from "astro-boilerplate-components";

import { AppConfig } from "../../utils/AppConfig";

const Footer = () => (
  <Section>
    <p className="text-sm">
      © Copyright {new Date().getFullYear()} by{" "}
      <span className="text-cyan-400 hover:underline">{AppConfig.title}</span>
    </p>
  </Section>
);

export { Footer };
