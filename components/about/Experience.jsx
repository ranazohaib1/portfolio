import experienceContent from "../../data/experience";
import { FiFacebook, FiTwitter, FiInstagram, FiDribbble, FiLinkedin, FiBriefcase } from "react-icons/fi";

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            {/* <img src="img/about/briefcase.png" alt="icon" /> */}
            <FiBriefcase size="lg"/>
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
