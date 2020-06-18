import { Link, routes } from '@redwoodjs/router'

const AboutPage = () => {
  return (
    <>
      <header>
        <h1>UnicycleMonologue</h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <p>Unicycles are cool!</p>
        <Link to={routes.home()}>Home</Link>
      </main>
    </>
  )
}

export default AboutPage
