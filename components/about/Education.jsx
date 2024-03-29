import educationContent from "../../data/education";
import { FiBriefcase, FiBook, FiBookOpen } from "react-icons/fi";

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            {/* <img src="img/about/book.png" alt="icon" /> */}
            <FiBookOpen size="lg"/>

          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
