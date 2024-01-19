function Background() {
  return (
    <>
      <div className="absolute left-0 top-0 z-[-2] block min-h-screen w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_0%,#5a7ef14a,#ffffff)] dark:hidden" />
      <div className="absolute left-0 top-0 z-[-2] hidden min-h-screen w-full dark:block dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_0%,#5a7ef14a,#13171c)]" />
    </>
  );
}

export default Background;
