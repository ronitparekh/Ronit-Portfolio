import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import ProfileExperience from "../components/ProfileExperience";
import Process from "../components/Process";
import Services from "../components/Services";
import Connect from "../components/Connect";

export default function Home() {
  useEffect(() => {
    const servers = [
      "https://parkeasy-api.onrender.com/wake",
      // "https://attendance-system.onrender.com/wake",
      "https://calendar-app-api.onrender.com/wake",
    ];

    servers.forEach((url) => {
      fetch(url, {
        method: "GET",
        cache: "no-store",
        mode: "cors",
      }).catch(() => {});
    });
  }, []);

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
