import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import ProfileExperience from "../components/ProfileExperience";
import Process from "../components/Process";
import Services from "../components/Services";
import Connect from "../components/Connect";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <ProfileExperience />
      <Process />
      <Services />
      <Connect />
    </>
  );
}
