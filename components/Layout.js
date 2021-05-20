import Head from '../components/Head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const Layout = ({ children, locale, locales }) => (
  <div className="bg-gray-300">
    <Head />
    <Navigation locale={locale} locales={locales} />
    {children}
    <Footer />
  </div>
)

export default Layout
