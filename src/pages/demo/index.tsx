import ResponsiveImage from '@/components/ResponsiveImage';

import './index.less';

function demo() {
  return (
    <>
    <header className='header'>
      <div className='main'>
        <div className='logo'>
          <a href="#"><img alt="Orion Motor Tech home page" className="image square" src="https://m.media-amazon.com/images/S/stores-image-uploads-na-prod/f/AmazonStores/ATVPDKIKX0DER/da80fa3d14fd85de22eb80ebd395962f.w400.h400._CR0%2C0%2C400%2C400_SX100_.jpg" srcSet="https://m.media-amazon.com/images/S/stores-image-uploads-na-prod/f/AmazonStores/ATVPDKIKX0DER/da80fa3d14fd85de22eb80ebd395962f.w400.h400._CR0%2C0%2C400%2C400_SX56_.jpg 56w, https://m.media-amazon.com/images/S/stores-image-uploads-na-prod/f/AmazonStores/ATVPDKIKX0DER/da80fa3d14fd85de22eb80ebd395962f.w400.h400._CR0%2C0%2C400%2C400_SX86_.jpg 86w, https://m.media-amazon.com/images/S/stores-image-uploads-na-prod/f/AmazonStores/ATVPDKIKX0DER/da80fa3d14fd85de22eb80ebd395962f.w400.h400._CR0%2C0%2C400%2C400_SX100_.jpg 100w, https://m.media-amazon.com/images/S/stores-image-uploads-na-prod/f/AmazonStores/ATVPDKIKX0DER/da80fa3d14fd85de22eb80ebd395962f.w400.h400._CR0%2C0%2C400%2C400_SX128_.jpg 128w, https://m.media-amazon.com/images/S/stores-image-uploads-na-prod/f/AmazonStores/ATVPDKIKX0DER/da80fa3d14fd85de22eb80ebd395962f.w400.h400._CR0%2C0%2C400%2C400_SX200_.jpg 200w, https://m.media-amazon.com/images/S/stores-image-uploads-na-prod/f/AmazonStores/ATVPDKIKX0DER/da80fa3d14fd85de22eb80ebd395962f.w400.h400._CR0%2C0%2C400%2C400_SX400_.jpg 400w" sizes="(max-width: 840px) 200px, 200px" /></a>
        </div>
      </div>
      <div className='navbar'>
        <h2>Orion Motor Tech</h2>
        <nav className="nav">
        <ul className="Navigation__navList__HrEra">
          <li className="Navigation__navItem__bakjf Navigation__isCurrent__Sv_Xw Navigation__isHeading__ArXQd">
            <a href="#">
          <span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ"><span>Home</span></span></a>
          </li>
          <li className="Navigation__navItem__bakjf"><a href="#">
            <span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Deals</span>
            </a>
          </li>
         <li className="Navigation__navItem__bakjf Navigation__hasChildren__jSUsH">
          <a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Shop By Vehicle</span></a>
          <div className="Navigation__navList__HrEra level2 Navigation__subnav__CkMUI">
            <ul>
            <li className="Navigation__navItem__bakjf Navigation__back__IqAlh"><button type="button"><span>Back</span></button></li>

            <li className="Navigation__navItem__bakjf Navigation__isHeading__ArXQd"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Shop By Vehicle</span></a></li>
            <li className="Navigation__navItem__bakjf"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">All</span></a></li>
            <li className="Navigation__navItem__bakjf"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Tesla</span></a></li>
            <li className="Navigation__navItem__bakjf"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Ford</span></a></li>
            <li className="Navigation__navItem__bakjf"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Toyota</span></a></li>
            <li className="Navigation__navItem__bakjf"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Chevrolet</span></a></li>
            <li className="Navigation__navItem__bakjf"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Motorcycles & ATVs</span></a></li>
            <li className="Navigation__navItem__bakjf"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Jeep</span></a></li>
            <li className="Navigation__navItem__bakjf"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Ram</span></a></li>
            <li className="Navigation__navItem__bakjf"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">GMC</span></a></li>
            <li className="Navigation__navItem__bakjf"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Dodge</span></a></li>
            <li className="Navigation__navItem__bakjf"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Honda</span></a></li>
            <li className="Navigation__navItem__bakjf"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Audi</span></a></li>
            <li className="Navigation__navItem__bakjf"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Acura</span></a></li>
            <li className="Navigation__navItem__bakjf"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Mini</span></a></li>
            <li className="Navigation__navItem__bakjf"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Volkswagen</span></a></li>
            <li className="Navigation__navItem__bakjf"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">BMW</span></a></li>
            <li className="Navigation__navItem__bakjf"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Subaru</span></a></li>
            <li className="Navigation__navItem__bakjf"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Hyundai</span></a></li>
            <li className="Navigation__navItem__bakjf"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Cadillac</span></a></li>
            <li className="Navigation__navItem__bakjf"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Chrysler</span></a></li>
            <li className="Navigation__navItem__bakjf"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Mercedes-Benz</span></a></li>
            <li className="Navigation__navItem__bakjf"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Kia</span></a></li>
            <li className="Navigation__navItem__bakjf"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Volvo</span></a></li>
            <li className="Navigation__navItem__bakjf"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Mitsubishi</span></a></li>
            <li className="Navigation__navItem__bakjf"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Hummer</span></a></li>
            <li className="Navigation__navItem__bakjf"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Saturn</span></a></li>
            <li className="Navigation__navItem__bakjf"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Nissan</span></a></li>
            <li className="Navigation__navItem__bakjf"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Mazda</span></a></li>
            <li className="Navigation__navItem__bakjf"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Lexus</span></a></li>
            <li className="Navigation__navItem__bakjf"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Alfa</span></a></li>
            <li className="Navigation__navItem__bakjf"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Infiniti</span></a></li>
            <li className="Navigation__navItem__bakjf"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Land Rover</span></a></li>
            <li className="Navigation__navItem__bakjf"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Buick</span></a></li>
            <li className="Navigation__navItem__bakjf"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Lincoln</span></a></li>
            <li className="Navigation__navItem__bakjf"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Porsche</span></a></li>
            <li className="Navigation__navItem__bakjf"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">RV & Trailer</span></a></li>
            <li className="Navigation__navItem__bakjf"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Daihatsu</span></a></li>
            <li className="Navigation__navItem__bakjf"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Jaguar</span></a></li>
            <li className="Navigation__navItem__bakjf"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Mercury</span></a></li>
            <li className="Navigation__navItem__bakjf"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Skoda</span></a></li>
            <li className="Navigation__navItem__bakjf"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Suzuki</span></a></li>
            </ul>
          </div>
          </li>
          <li className="Navigation__navItem__bakjf Navigation__hasChildren__jSUsH">
            <a href="category" aria-haspopup="true" role="button"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Wheels & Brakes</span></a>
            <div className="Navigation__navList__HrEra level2 Navigation__subnav__CkMUI">
              <ul>
                  <li className="Navigation__navItem__bakjf Navigation__back__IqAlh"><button type="button" ><span>Back</span></button></li>
                  <li className="Navigation__navItem__bakjf Navigation__isHeading__ArXQd">
                    <a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Wheels & Brakes</span></a></li>
                  <li className="Navigation__navItem__bakjf"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Bearing Tools</span></a></li>
                  <li className="Navigation__navItem__bakjf"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Brake Tools</span></a></li>
                  <li className="Navigation__navItem__bakjf"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Lug Nut Sockets</span></a></li>
                  <li className="Navigation__navItem__bakjf"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Brake Bleeder Tools</span></a></li>
                  <li className="Navigation__navItem__bakjf"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Wheel Lug Nuts</span></a></li>
                  <li className="Navigation__navItem__bakjf"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Wheel Hub Removal Tools</span></a></li>
                  <li className="Navigation__navItem__bakjf"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Wheel Spacers</span></a></li>
                  <li className="Navigation__navItem__bakjf"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Torque Extension Bars</span></a></li>
                  <li className="Navigation__navItem__bakjf"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Tire Repair Tools</span></a></li>
              </ul>
            </div>
          </li>
        <li className="Navigation__navItem__bakjf Navigation__hasChildren__jSUsH"><a href="#" aria-haspopup="true" role="button"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Engine</span></a>
          <div className="Navigation__navList__HrEra level2 Navigation__subnav__CkMUI">
            <ul>
              <li className="Navigation__navItem__bakjf Navigation__back__IqAlh"><button type="button" ><span>Back</span></button></li>
              <li className="Navigation__navItem__bakjf Navigation__isHeading__ArXQd"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Engine</span></a></li>
              <li className="Navigation__navItem__bakjf"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Gear Pullers</span></a></li>
              <li className="Navigation__navItem__bakjf"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Timing Tools</span></a></li>
              <li className="Navigation__navItem__bakjf"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Harmonic Balancer Pullers & Installers</span></a></li>
              <li className="Navigation__navItem__bakjf"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Valve Spring Compressors</span></a></li>
              <li className="Navigation__navItem__bakjf"><a href="#n"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Pressure Gauge Tools</span></a></li>
            </ul>
          </div>
        </li>
        <li className="Navigation__navItem__bakjf Navigation__hasChildren__jSUsH"><a href="#" aria-haspopup="true" role="button"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Air Conditioning</span></a>
          <div className="Navigation__navList__HrEra level2 Navigation__subnav__CkMUI">
            <ul>
              <li className="Navigation__navItem__bakjf Navigation__back__IqAlh"><button type="button" ><span>Back</span></button></li>
              <li className="Navigation__navItem__bakjf Navigation__isHeading__ArXQd"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Air Conditioning</span></a></li>
              <li className="Navigation__navItem__bakjf"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">AC Gauges</span></a></li>
              <li className="Navigation__navItem__bakjf"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Vacuum Pumps</span></a></li>
              <li className="Navigation__navItem__bakjf"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">AC Gauge & Pump Kits</span></a></li>
              <li className="Navigation__navItem__bakjf"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">AC Gauge Adapters</span></a></li>
              <li className="Navigation__navItem__bakjf"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Vacuum Chamber Kits</span></a></li>
              <li className="Navigation__navItem__bakjf"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Tube Flaring Tools</span></a></li>
            </ul>
          </div>
        </li>
        <li className="Navigation__navItem__bakjf Navigation__hasChildren__jSUsH Navigation__isInvisible__boabX"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Steering & Suspension</span></a>
          <div className="Navigation__navList__HrEra level2 Navigation__subnav__CkMUI">
            <ul>
              <li className="Navigation__navItem__bakjf Navigation__back__IqAlh"><button type="button" ><span>Back</span></button></li>
              <li className="Navigation__navItem__bakjf Navigation__isInvisible__boabX Navigation__isHeading__ArXQd"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Steering & Suspension</span></a></li>
              <li className="Navigation__navItem__bakjf Navigation__isInvisible__boabX"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Ball Joint Tools</span></a></li>
              <li className="Navigation__navItem__bakjf Navigation__isInvisible__boabX"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Spring Compressor Tools</span></a></li>
              <li className="Navigation__navItem__bakjf Navigation__isInvisible__boabX"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Inner Tie Rod Tools</span></a></li>
              <li className="Navigation__navItem__bakjf Navigation__isInvisible__boabX"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">CV Joint Pullers</span></a></li>
              <li className="Navigation__navItem__bakjf Navigation__isInvisible__boabX"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Torsion Key Bar Tools</span></a></li>
            </ul>
          </div>
        </li>
        <li className="Navigation__navItem__bakjf Navigation__hasChildren__jSUsH Navigation__isInvisible__boabX"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Body · Bed · Roof</span></a>
        <div className="Navigation__navList__HrEra level2 Navigation__subnav__CkMUI"><ul><li className="Navigation__navItem__bakjf Navigation__back__IqAlh"><button type="button" ><span>Back</span></button></li>
        <li className="Navigation__navItem__bakjf Navigation__isInvisible__boabX Navigation__isHeading__ArXQd"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Body · Bed · Roof</span></a></li>
        <li className="Navigation__navItem__bakjf Navigation__isInvisible__boabX"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Cargo Nets</span></a></li>
        <li className="Navigation__navItem__bakjf Navigation__isInvisible__boabX"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Tailgate Assists</span></a></li>
        <li className="Navigation__navItem__bakjf Navigation__isInvisible__boabX"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Trailer Hitches</span></a></li>
        <li className="Navigation__navItem__bakjf Navigation__isInvisible__boabX"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Dent Pullers</span></a></li>
        </ul>
        </div>
        </li>
          <li className="Navigation__navItem__bakjf Navigation__hasChildren__jSUsH Navigation__isInvisible__boabX"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Trucks, Motorcycles, & ATVs</span></a>
          <div className="Navigation__navList__HrEra level2 Navigation__subnav__CkMUI">
            <ul>
              <li className="Navigation__navItem__bakjf Navigation__back__IqAlh"><button type="button" ><span>Back</span></button></li>
              <li className="Navigation__navItem__bakjf Navigation__isInvisible__boabX Navigation__isHeading__ArXQd"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Trucks, Motorcycles, & ATVs</span></a></li>
              <li className="Navigation__navItem__bakjf Navigation__isInvisible__boabX"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Maintenance & Repair</span></a></li>
              <li className="Navigation__navItem__bakjf Navigation__isInvisible__boabX"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Cargo Nets</span></a></li>
              <li className="Navigation__navItem__bakjf Navigation__isInvisible__boabX"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Tailgate Assists</span></a></li>
              <li className="Navigation__navItem__bakjf Navigation__isInvisible__boabX"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Trailer Hitches</span></a></li>
              <li className="Navigation__navItem__bakjf Navigation__isInvisible__boabX"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Wire Connectors</span></a></li>
              <li className="Navigation__navItem__bakjf Navigation__isInvisible__boabX"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Battery Chargers</span></a></li>
            </ul>
        </div>
        </li>
          <li className="Navigation__navItem__bakjf Navigation__isInvisible__boabX"><a href="#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Mechanic's Top Choice</span></a></li>
          <li className="Navigation__navItem__bakjf Navigation__isInvisible__boabX"><a href="9F06#"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ">Posts</span></a></li>
          <li className="Navigation__navItem__bakjf Navigation__more__jp3zs"><button type="button"><span className="Navigation__linkText__LoQD4 Navigation__en-US__YUfTQ"><span>More</span></span></button></li>
        </ul>
        </nav>
      </div>
      <div className='other'>1</div>
    </header>
    <section className='banner'>
      <div className="img-box-wrap">
        <div className='img-column'>
          <div className='img-box'>
              <div className='img-box-position'>
                <div className='box'>
                  <a href="084D4B5F-17E8-4C44-91DB-EC879030D96E?ingress=2&visitId=e07fd4f4-c31b-4b9e-9380-888c7449139b#" aria-label="learn more" role="link"></a>
                  <div className='relative-box'>
                    <ResponsiveImage src='https://affiliate-traffic.oss-cn-hongkong.aliyuncs.com/limeet/banner2tobg.png'></ResponsiveImage>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
    <section className='category'>
      <div className='container'>

      </div>
    </section>
    </>
  );
}
export default demo;
