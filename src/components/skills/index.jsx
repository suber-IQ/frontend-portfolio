import Section from '../shared/section';
import './style.scss';
import TechIcons from '../../images/tech-icons.png';
import CallToAction from '../shared/CallToAction';
import { AiOutlineCloudDownload } from 'react-icons/ai'

function Skills() {
  return (
    <Section
     background={"dark"}
     id="skills"
      >
        <div className="skills_content__wrapper">
            <div className="left_col">
                <img src={TechIcons}  alt="js,html,react,css" />
            </div>
            <div className="right_col">
                <h2>Skills </h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis cum dolorem est sed cumque non nulla voluptates aliquam ipsam esse optio deserunt dignissimos a assumenda tenetur accusantium illum, corporis quam expedita, dicta asperiores repellat. Debitis consequuntur nesciunt repellat incidunt quam?</p>
                <CallToAction text={"Download CV"} icon={<AiOutlineCloudDownload />} />
            </div>
        </div>

    </Section>
  )
}

export default Skills