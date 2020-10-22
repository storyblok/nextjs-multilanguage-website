import Head from '../components/Head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import StoryblokService from '../utils/storyblok-service'

const Layout = ({ children }) => (
  <div className="bg-gray-300">
    <Head />
    <Navigation />
    {children}
    <Footer />
    {StoryblokService.bridge()}
  </div>
)

export default Layout
