import Link from 'next/link'

const Nav = ({settings}) => (
  <header className="top-header util__flex util__container">
    <nav className="top-header__col">
      <ul className="top-header__nav">
        {settings && settings.content.main_navi.map((navitem, index) =>
          <li key={index}>
            <Link href={navitem.link.cached_url} prefetch>
              <a className="top-header__link">{navitem.name}</a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
    <a href="/" className="top-header__col top-header__logo">
      <img src="//a.storyblok.com/f/42016/1096x313/0353bf6654/logo2.png" />
    </a>
    <nav className="top-header__col top-header__second-navi">
      <ul className="top-header__nav top-header__nav--right">
        <li>
          <Link href="/en/blog">
            <a className="top-header__link" >English</a>
          </Link>
        </li>
        <li>
          <Link href="/de/blog">
            <a className="top-header__link" >German</a>
          </Link>
        </li>
      </ul>
    </nav>
    <style jsx>{`
      .top-header {
        justify-content: space-between;
        padding-top: 30px;
        padding-bottom: 30px;
      }

      .top-header__logo {
        text-align: center;
        position: absolute;
        left: 50%;
      }

      .top-header__logo img {
        position: relative;
        max-height: 60px;
        left: -50%;
        top: -15px;
      }

      .top-header__second-navi {
        text-align: right;
      }

      .top-header__nav {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
      }

      .top-header__nav li {
        padding: 0 20px 0 0;
      }

      .top-header__nav--right li {
        padding-right: 0;
        padding-left: 20px;
      }

      .top-header__link {
        line-height: 1.5;
        color: #000;
        text-decoration: none;
        border-bottom: 2px solid transparent;
        transition: border .15s ease;
      }

      .top-header__link:hover {
        border-bottom: 2px solid #000;
      }
    `}</style>
  </header>
)

export default Nav