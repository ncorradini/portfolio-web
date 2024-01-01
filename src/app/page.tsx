import AboutMe from '@Components/AboutMe';

export default function Home() {
  return (
    <main className="p-10">
      <div className="absolute left-0 top-0 z-[-2] min-h-screen w-full bg-[#20252C] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(90,120,215,0.2),rgba(0,0,0,0.1))]" />
      <div className="m-auto max-w-[900px]">
        <AboutMe />
      </div>
    </main>
  );
}
