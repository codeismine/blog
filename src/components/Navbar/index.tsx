import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from "astro-boilerplate-components";
import { AppConfig } from "../../utils/AppConfig";
import { Menus } from "../../utils/Menu";

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          icon={
            <img className="w-10 h-10 rounded mr-2" src="./Logo.jpg" alt="logo" />
          }
          name={AppConfig.title}
        />
      </a>

      <NavMenu>
        {Menus &&
          Menus.map((it) => (
            <NavMenuItem href={it.url}>{it.title}</NavMenuItem>
          ))}
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
