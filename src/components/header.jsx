import { Link } from "react-router-dom";
import Logo from "../assests/logo.png";

import CountryDropdown from "./CountryDropdown";

const Header = () => {
    return (
        <div>
            <div className="header">
                <div className="top-strip bg-purple">
                    <p className="mb-0 mt-0 text-center"><b>Elevate Your Everyday.</b></p>
                </div>
            </div>
            <div className="head">
                <div className="container">
                    <div className="row">
                        <div className="logowrapper d-flex align-items-center col-sm-2">
                            <Link to="/"><img src={Logo} alt="logo" /></Link>
                        </div>
                        <div className="col-sm-10 d-flex align-items-center part2">
                            <CountryDropdown />
                        

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
