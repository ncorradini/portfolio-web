export default function Home() {
  return (
    <main
      style={{
        width: '100vw',
        height: '100vh',
        background: '#000',
        color: '#ffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '10px'
      }}
    >
      <h1>Sitio en construcción</h1>
      <h3>Nicolás Corradini</h3>
      <a
        href="https://www.linkedin.com/in/nicolascorradini/"
        style={{ color: 'cyan' }}
      >
        Perfil de LinkedIn
      </a>
    </main>
  );
}
