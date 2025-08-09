import { Link } from "react-router-dom";
import Logo from "../assests/logo.png";

import CountryDropdown from "./CountryDropdown";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";

const Header = () => {
    return (
        <div>
            {/* Top strip */}
            <div className="header">
                <div className="top-strip bg-purple">
                    <p className="mb-2 mt-2 text-center">
                        <b>Elevate Your Everyday.</b>
                    </p>
                </div>
            </div>

            {/* Main header */}
            <header className="head">
                <div className="container">
                    <div className="row">
                        {/* Logo */}
                        <div className="logowrapper d-flex align-items-center col-sm-2">
                            <Link to="/">
                                <img src={Logo} alt="logo" />
                            </Link>
                        </div>

                        {/* Right side: country, search, user section */}
                        <div className="col-sm-10 d-flex align-items-center part2">
                            <CountryDropdown />

                            {/* Search bar */}
                            <div className="headerSearch ml-3 mr-3">
                                <input type="text" placeholder="Search for products" />
                                <button>
                                    <IoSearchSharp />
                                </button>
                            </div>

                            {/* User + Price */}
                            <div className="part3 d-flex align-items-center ml-auto">
                                <div className="user-price-wrapper d-flex align-items-center">
                                    <button className="circle">
                                        <FaRegUser />
                                    </button>
                                    <span className="price mx-2">RS500</span>
                                    <button className="circle">
                                        <FaRegUser />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
