import Head from '../components/Head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const Layout = ({ children }) => (
  <div className="bg-gray-300">
    <Head />
    <Navigation />
    {children}
    <Footer />
  </div>
)

export default Layout
