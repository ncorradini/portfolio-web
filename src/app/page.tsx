'use client';

import { useEffect } from 'react';
import Background from '@Components/Background';
import Header from '@Components/Header';
import AboutMe from '@Components/AboutMe';
import JobExperience from '@Components/JobExperience';
import Education from '@Components/Education';
import Footer from '@Components/Footer';

export default function Home() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <>
      <Header />
      <Background />
      <main className="container relative m-auto flex flex-col gap-[100px] px-5 md:gap-[150px] md:px-0">
        <AboutMe />
        <JobExperience />
        <Education />
      </main>
      <Footer />
    </>
  );
}
