import { Link, routes } from '@redwoodjs/router'
import BlogLayout from 'src/layouts/BlogLayout'

const AboutPage = () => {
  return (
    <BlogLayout>
      <p>Unicycles are cool!</p>
      <Link to={routes.home()}>Home</Link>
    </BlogLayout>
  )
}

export default AboutPage
