import Head from 'next/head'
import Slider from './Slider'
import Map from './Map'
import Contact from './Contact'
import Footer from './Footer'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>2431 Rockdell :: Coram Reality</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/fonts/AzoSans-Medium.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/AzoSans-Bold.ttf"
          as="font"
          crossOrigin=""
        />
        <script src = "https://maps.googleapis.com/maps/api/js"></script>
      </Head>

      <nav className="header">
        <div className="header__container">
          <ul className="header__list">
            <li className="header__item">
              <AnchorLink className="header__link" href='#gallery'>Gallery</AnchorLink>
            </li>
            <li className="header__item">
              <AnchorLink className="header__link" href='#description'>Description</AnchorLink>
            </li>
            <li className="header__item">
              <AnchorLink className="header__link" href='#contact'>Contact</AnchorLink>
            </li>
          </ul>
          <ul className="header__list">
            <li className="header__item">
              <a className="header__link" href="https://coramrealty.com" target="_blank" rel="noopener noreferrer">Coram Realty</a>
            </li>
            <li className="header__item">
              <a className="header__link" href="tel:+18183307770">818-330-7770</a>
            </li>
            <li className="header__item">
              <a className="header__link" href="mailto:info@coramrealty.com">info@coramrealty.com</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="video">
        <iframe src="https://www.youtube.com/embed/0qQ1pjkkkjc?controls=0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>

      <Slider />

      <div className="feature" id="description">
        <div className="feature__container">
          <div className="feature__title">2431 Rockdell St La Crescenta, CA 91214</div>
          <div className="feature__body">Gorgeous turnkey home north of Foothill Blvd in prime La Crescenta. This 4 bed, 3 bath home is beautifully renovated. It is nestled in a family neighborhood with award winning schooling (Monte Vista Elementary, Rosemont Middle, Crescenta Valley High). Walking distance to Two Strike Park and driving distance to downtown Los Angeles. This home was built in 1990 and features a stunning new designer kitchen, renovated bathrooms, engineered hardwood and plenty of light. The layout features one bedroom and bathroom downstairs and a large master upstairs with an en suite bathroom. Outside features pavers for additional parking and loads of curb appeal. A wonderful place to call home for years to come.</div>
          <div className="feature__property">
            <div className="feature__header">Property Features</div>
            <ul className="feature__list">
              <li className="feature__item">- Soft Close Kitchen Cabinets with Solid Wood Doors and Floating Shelves</li>
              <li className="feature__item">- Quartz Counters with Full Custom Backsplash</li>
              <li className="feature__item">- Designer Master Bathroom</li>
              <li className="feature__item">- Smart Home features include Ring doorbell, smart thermostat, LED mirrors</li>
            </ul>
          </div>
          <div className="feature__info">
            <p>4 bed 3 bath | 2,044 sqft | lot size 3,631 sqft</p>
            <p>Presented at $1,075,000</p>
          </div>
        </div>
      </div>

      <Map />

      <div className="card">
          <div className="card__wrapper">
              <div className="card__container">
                  <img src={'/img/michaelcard.jpg'} className="card__bg" alt="Business Michael"/>
                  <div className="card__information">
                      <div className="card__bizInfo">
                          <strong>Michael Chung</strong> <span className="card__spacer"></span> Realtor &copy;<br />
                          <div className="card__cell">C. <a className="card__tel" href="tel:+18182791636">818-279-1636</a></div>
                          <a href="mailto:michael@coramrealty.com" className="card__email">michael@coramrealty.com</a>
                      </div>
                      <div className="card__bizInfo">
                          o. <a className="card__tel" href="tel:+18183307770">818-330-7770</a> <span className="card__spacer"></span> f. <a className="card__tel" href="tel:+8183307771">818-330-7771</a><br />
                          <address>
                              3800 foothill blvd ste b<br />
                              La crescenta, CA 91214
                          </address> 
                          <a className="card__link" href="https://coramrealty.com">coramrealty.com</a> <span className="card__spacer"></span> bre#: 1978172
                      </div>
                      <div className="card__credentials">
                          <img src={'/img/realtor-r-footer.svg'} className="card__logo" alt="realtor logo"/>
                          <img src={'/img/mls-logo-footer.svg'} className="card__logo" alt="mls logo"/>
                          <img src={'/img/logo.svg'} className="card__logo" alt="ca logo"/>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <Contact />

      <Footer />

      <style jsx>{`
        @font-face {
          font-family: "AzoSans";
          src: url("/fonts/AzoSans-Medium.ttf");
          src: url('/fonts/AzoSans-Medium.eot');
          src: url('/fonts/AzoSans-Medium.eot?#iefix') format('embedded-opentype'),
              url('/fonts/AzoSans-Medium.woff') format('woff'),
              url('fonts/AzoSans-Medium.ttf') format('truetype'),
              url('fonts/AzoSans-Medium.svg') format('svg');
          font-style: normal;
          font-weight: 400;
          font-display: swap;
        }
        @font-face {
          font-family: "AzoSans";
          src: url("/fonts/AzoSans-Bold.ttf");
          src: url('/fonts/AzoSans-Bold.eot');
          src: url('/fonts/AzoSans-Bold.eot?#iefix') format('embedded-opentype'),
              url('/fonts/AzoSans-Bold.woff') format('woff'),
              url('fonts/AzoSans-Bold.ttf') format('truetype'),
              url('fonts/AzoSans-Bold.svg') format('svg');
          font-style: normal;
          font-weight: 500;
          font-display: swap;
        }
        .header {
          font-size: 14px;
          font-family: "AzoSans", serif;
          text-transform: uppercase;
        }
        .header__container {
          display: flex;
          justify-content: space-between;
          padding: 0 1em;
        }
        .header__list {
          display: flex;
          list-style-type: none;
          margin: 0;
          padding: 1em;
        }
        .header__item {
          margin-right: 1em;
        }
        .header__link {
          text-decoration: none;
          color: black;
        }
        .header__item:last-child {
          margin-right: 0em;
        }
        .header__item a {
          text-decoration: none;
          color: black;
        }
        .feature {
          font-size: 14px;
          font-family: "AzoSans", serif;
          background-color: #84d0d2;
          color: #f7f7f7;
          padding: 5em 2em;
        }
        .feature__container {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }
        .feature__body {
          line-height: 1.5;
        }
        .feature__property {
          margin: 1.5em auto 2em;
          width: 100%;
        }
        .feature__info {
          font-weight: 700;
          line-height: 1.5;
        }
        .feature__title {
          font-size: 2em;
          margin-bottom: .5em;
        }
        .feature__list {
          margin: 0;
          padding: 0 1em;
          list-style: none;
        }
        .feature__header {
          margin-bottom: .5em;
          font-size: 1.5em;
        }
        .feature__item {
          margin-bottom: .5em;
        }
        .video iframe {
          width: 100%;
          height: 50em;
        }
        .video {
          background-color: #000;
        }
        .card {
            font-size: 14px;
            font-family: "AzoSans", serif;
        }
        .card__container {
            width: 35em;
            height: 20em;
            position: relative;
            overflow: hidden;
        }
        .card__information {
            padding: 1.5em;
            position: relative;
            z-index: 100;
            text-transform: uppercase;
        }
        .card__bg {
            position: absolute;
            right: 0em;
            top: -1px;
            height: 20.5em;
            z-index: 50;
            outline: none;
        }
        .card__spacer {
            position: relative;
            margin:0 1em 0 .8em;
        }
        .card__spacer:after {
            position: absolute;
            content: ' ';
            top: 1px;
            height: 1em;
            width: 2px;
            background-color: black;
        }
        .card__tel {
            color: currentColor;
            text-decoration: none;
        }
        .card__bizInfo {
            line-height: 1.5;
            margin-bottom: 1em;
        }
        .card__email,
        .card__link {
            text-decoration: none;
            color: currentColor;
        }
        .card__credentials {
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }
        .card__logo {
            max-width: 4em;
            max-height: 4em;
            margin-right: 1em;
        }
        .card__logo:last-child {
            max-width: 10em;
            margin-right: 0;
        }
        .card__cell {
            color: #84D0D2;
            font-weight: bold;
            cursor: pointer;
        }
        .card__wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 50em;
            background-color: #f7f7f7;
        }
        .card__container {
            box-shadow: 0 6px 15px rgba(36, 37, 38, 0.08);
            overflow: hidden;
            transition: box-shadow 0.25s ease, transform 0.25s ease;
            background-color: #fff;
        }
        .card__container:hover {
            box-shadow: 5px 12px 20px rgba(36, 37, 38, 0.13);
            cursor: pointer;
        }
        address {
            font-style: normal;
        }

        @media (max-width: 769px) {
            .card__wrapper {
                height: 25em;
            }
        }

        @media (max-width: 769px) {
          .header__list:last-child {
            flex-direction: column;
          }
          .header__list {
            align-items: center;
            width: 100%;
            justify-content: space-around;
          }
          .header__item {
            margin-bottom: .5em;
          }
          .header__container {
            flex-direction: column-reverse;
            align-items: center;
          }
          .video iframe {
            width: 100%;
            height: unset;
            min-height: 20em;
          }
        }
      `}</style>
    </div>
  )
}
