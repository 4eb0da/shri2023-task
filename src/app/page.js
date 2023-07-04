import { Dashboard } from "../components/dashboard";
import { Scenarios } from "../components/scenarios";
import { Gadgets } from "../components/gadgets";

export default function Home() {
  return (
    <>
      <Dashboard />
      <Scenarios />
      <Gadgets />
    </>
  );
}
