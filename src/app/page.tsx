'use client';

import { useEffect } from 'react';
import Background from '@Components/Background';
import Header from '@Components/Header';
import AboutMe from '@Components/AboutMe';
import JobExperience from '@Components/JobExperience';
import Education from '@Components/Education';

export default function Home() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <>
      <Header />
      <Background />
      <main className="container relative m-auto flex flex-col gap-[150px] px-5 md:gap-[200px] md:px-0 md:pt-8">
        <AboutMe />
        <JobExperience />
        <Education />
      </main>
    </>
  );
}
