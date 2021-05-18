import Head from '../components/Head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const Layout = ({ children, language }) => (
  <div className="bg-gray-300">
    <Head />
    <Navigation language={language} />
    {children}
    <Footer />
  </div>
)

export default Layout
