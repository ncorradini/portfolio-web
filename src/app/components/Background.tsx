function Background() {
  return (
    <>
      <div className="absolute left-0 top-0 z-[-2] block min-h-screen w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_0%,#e0caab31,#ffffff)] dark:hidden" />
      <div className="absolute left-0 top-0 z-[-2] hidden min-h-screen w-full dark:block dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_0%,#fffefe1e,#212429)]" />
    </>
  );
}

export default Background;
