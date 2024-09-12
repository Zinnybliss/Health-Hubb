import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import img1 from "./images/img1.png"
import phone from "./images/iPhone 15 Pro.png"
import phone2 from "./images/Nothing Phone 6.png"
import phone3 from "./images/Nothing Phone 4.png"
import phone4 from "./images/Nothing Phone 10.png"
import videoPic from "./images/Group 48.png"
import pic1 from "./images/pic.png"
import pic2 from "./images/picc1.png"
import pic3 from "./images/picc2.png"
import pic4 from "./images/picc3.png"
import pic5 from "./images/picc4.png"
import pic6 from "./images/picc5.png"
import './App.css'







function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */
      <div>
        <div className="upper">
        <div className="navbar">
        <img className="image" src={img1} />
        <div className="nav1">
          <nav>Vaccination Hub</nav>
          <nav>Health hub</nav>
          <nav>Profile</nav>
          <nav>Login</nav>
          <nav></nav>
        </div>
        </div>
        <div className="hero">
          <div className="hero1">
            <h1>Seamlessly track your health with MVP</h1>
            <p>Track vaccinations, monitor community health, and get real-time updates</p>
            <button>LEARN MORE</button>
          </div>
          <div className="hero2">
            <img src={phone}/>
          </div>
        </div>
        </div>
        <div className="mid">
          <div className="midheading">
<h1>OUR IMPRESSIVE FEATURES</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam error reprehenderit magni voluptate. Maiores commodi a officiis? Veniam aspernatur nobis facilis minus blanditiis inventore minima, dolorem nesciunt fuga dignissimos maiores!</p>
          </div>
          <div className="mid1">
            <div className="mid1text">
            <h1>Vaccination Tracking</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi impedit, et officia omnis eveniet quasi, dolorem voluptatibus, a excepturi porro magni quisquam cum! Sequi officiis non ex laboriosam quia! Accusantium.</p>
            <button>View Stats</button>
            </div>
            <div className="mid1img">
              <img src={phone2}/>
            </div>
          </div>
          <div className="mid2">
            <div className="mid2img">
              <img src={phone3} alt="mobile phone" />
            </div>
            <div className="mid2text">
              <h1>Community health monitoring</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae reiciendis incidunt a similique cumque sint accusantium dolor. Optio exercitationem nihil iure accusantium est. Aliquid necessitatibus, laudantium non at magni in.</p>
              <button>Check Data</button>
            </div>
          </div>
          <div className="mid3">
            <div className="mid3text">
              <h1>Real time updates</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ex quia perspiciatis libero illum ab exercitationem amet, quasi debitis, saepe velit voluptas reiciendis dignissimos mollitia sit iusto harum in iure.</p>
              <button>Get Updates</button>
            </div>
            <div className="mid3img">
              <img src={phone4} alt="health pic" />
            </div>
          </div>
        </div>
        
        <div className="videomid">
          <h2>How it works</h2>
          <img src={videoPic} alt="" srcSet="" />
        </div>
        <div className="middle">
        <div></div>
        <div className="lowermid">
          <h2>Recent Articles</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, numquam explicabo molestias dolore facere commodi quis tenetur ullam qui impedit, pariatur voluptatem iste fugit consequuntur omnis id ex modi non!</p>
        </div>
        <div className="cards">
          <div className="card">
            <img src={pic1} alt="" />
            <h4>Stay always hydrated while travelling</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo tenetur, sint dignissimos </p>
            <h4>Read More</h4>
          </div>
          <div className="card">
            <img src={pic2} alt="" />
            <h4>Stay always hydrated while travelling</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo tenetur, sint dignissimos </p>
            <h4>Read More</h4>
          </div>
          <div className="card">
            <img src={pic3} alt="" />
            <h4>Stay always hydrated while travelling</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo tenetur, sint dignissimos </p>
            <h4>Read More</h4>
          </div>
        </div>
        <div className="testimonial">
          <div className='testimonial1'>
          <h2>TESTIMONIALS</h2>
          <h2>WHAT OUR USERS SAY</h2>
          <p>Lorem ipsum dolor sit amet consectetur. Tortor pharetra massa lacus diam quis adipiscing.</p>
          </div>
          <div className="cardis">
          <div className='card1'>
            <img src={pic4} />
            <p>Lorem ipsum dolor sit amet consectetur. Senectus augue blandit enim arcu posuere. Tellus ut commodo.</p>
            <h3>Lorem ipsum</h3>
            <h3>Lorem</h3>
          </div>
          <div className='card1'>
            <img src={pic5} />
            <p>Lorem ipsum dolor sit amet consectetur. Senectus augue blandit enim arcu posuere. Tellus ut commodo.</p>
            <h3>Lorem ipsum</h3>
            <h3>Lorem</h3>
          </div>
          <div className='card1'>
            <img src={pic6} />
            <p>Lorem ipsum dolor sit amet consectetur. Senectus augue blandit enim arcu posuere. Tellus ut commodo.</p>
            <h3>Lorem ipsum</h3>
            <h3>Lorem</h3>
          </div>
          </div>
        </div>
        </div>
        <footer className='footer'>
          <div>
            <img/>
            <p>Lorem ipsum dolor sit amet consectetur. Mattis quis nibh elit eu lectus sollicitudin gravida lorem.</p>
            <h3>Contact Us</h3>
            <p>xxxx xxx xxxx</p>
            <p>Dolorsitamet@gmail.com</p>
          </div>
          <div>
            <h3>Information</h3>
            <h4>About Us</h4>
            <h4>Features</h4>
            <h4>Blogs</h4>
            <h4>Health Hub</h4>
            <h4>Vaccine Hub</h4>
            <h4>Testimonials</h4>
          </div>
          <div>
            <h3>Helpful Links</h3>
            <p>Services</p>
            <p>Help Center</p>
            <p>How it works</p>
            <p>Terms and Condition</p>
            <p>Privacy Policy</p>
          </div>
          <div>
            <h3></h3>
            <p></p>
            <input type='email'/>
            <input type="submit"/>
          </div>
          {/* <hr></hr> */}
        </footer>
      </div>
      
      }
    </>
  )
}

export default App
