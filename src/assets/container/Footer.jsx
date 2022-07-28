import {useEffect, useState} from "react";
import Typewriter from "typewriter-effect";
import Emoji from "a11y-react-emoji";
import "./Footer.css";
import Player from "../components/Player";

function Footer() {
 

  const [globalCoords, setGlobalCoords] = useState({x: 0, y: 0});

  useEffect(() => {
    // 👇️ get global mouse coordinates
    const handleWindowMouseMove = event => {
      setGlobalCoords({
        x: event.screenX,
        y: event.screenY,
      });
    };
    window.addEventListener('mousemove', handleWindowMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
    };
  }, []);

  return (
    <div className="footer">
      <div className="upperFooter">
        <div className="card">
<div className="cardHeader">
          <h1 className="cardTitle">Title</h1>
          <h2 className="cardDesc">Description</h2>
          </div>
          <p className="cardText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est itaque
            voluptate reiciendis nam officiis eaque repellendus, cumque,
            pariatur sapiente eius, magnam voluptatum quisquam? Rerum ut quia
            exercitationem molestiae, cum officiis!
          </p>
          <div className="playerCard"><Player/></div>
          
                  <h3>date</h3>
        </div>

        <div className="centerRight">
        <p className="upArrow">^</p>
          <p className="xPos">{globalCoords.x}</p>
          
          <div className="verticalLine"></div>
          <p className="yPos">{globalCoords.y}</p>
          <p className="downArrow">˅</p>
       
        </div>
      </div>
      <div className="downFooter">
        <div className="footer-left">
          Sky palette <Emoji symbol="🟠🟡🟢" label="sun" />
          Studio
        </div>
        <div className="footer-right">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("This is my personal Website")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Welcomes You")
                .pauseFor(1000)
                .start();
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
