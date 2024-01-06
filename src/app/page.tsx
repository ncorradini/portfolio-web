import Background from '@Components/Background';
import AboutMe from '@Components/AboutMe';

export default function Home() {
  return (
    <main className="relative p-5 md:p-10">
      <Background />
      <div className="container m-auto flex flex-col gap-[150px] md:gap-[200px]">
        <AboutMe />
      </div>
    </main>
  );
}
