import Anchor from "@/ui/Anchor";
import { Logout } from "@/utils/svg";

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
    </div>
  );
}
