import Anchor from "@/ui/Anchor";
import { Logout } from "@/utils/svg";
import Logo from "@/ux/Logo";

export default function Home() {
  return (
    <div>
      <h1>UX/UI Elements</h1>
      <Anchor href="#" label="Test" />
      <p>
        hallo du lappen{" "}
        <Anchor
          href="#"
          label="Test"
          link
          icon={<Logout />}
          iconPosition="right"
        />
        .
      </p>
      <Logo
        src="/images/Logo.png"
        href="#"
        slogan="Gebrauchtwagen"
        slogan2="clever kaufen"
      />
    </div>
  );
}
