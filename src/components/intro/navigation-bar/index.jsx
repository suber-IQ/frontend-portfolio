import "./style.scss";
// import logo from "../../../images/logo.png";
import logo from "../../../images/logo.png";
import CallToAction from "../../shared/CallToAction";

const Navigation = () => {
    return (
        <div className="top_navigation__bar">
            {/* Left logo */}
            <div className="app_logo">
                <img src={logo} alt="logo" />
            </div>
            {/* Right menu */}
            <div className="navigation">
                <span className="navigation_item">Skills</span>
                <span className="navigation_item">Portfolio</span>
                <span className="navigation_item">Blogs & Articles</span>
                <CallToAction text={"Contact Me"} />
            </div>
        </div>
    );
};

export default Navigation;
