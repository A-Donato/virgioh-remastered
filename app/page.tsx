import { Button } from "@nextui-org/button";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div>
        <Button color="primary">Click me</Button>
      </div>

      <Image
        src="/gallantmon.png"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
      <Image
        src="/wargreymon.png"
        width={1000}
        height={760}
        className="md:hidden block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
    </>
  );
}
