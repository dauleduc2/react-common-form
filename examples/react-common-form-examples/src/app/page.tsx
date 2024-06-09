import { helloFromLib, helloFromTest, hiLib } from "react-common-form";
export default function Home() {
  return (
    <main>
      {helloFromLib()} - {helloFromTest()} - {hiLib()} - a
    </main>
  );
}
