import { Link } from "react-router-dom";
//import Auth from "../../utils/auth";

const Navbar = () => {
    // const logout = (event) => {
    //     event.preventDefault();
    //     Auth.logout();
    // };

    return(
        <>
            <nav>
                <div className="3btn">
                        <>
                            <div className="pageBtn">
                                <Link className="btn btn-lg btn-primary m-2" to="/NewAssignment">
                                    <button>
                                        New Assignment
                                    </button>
                                </Link>                  
                                <Link className="btn btn-lg btn-primary m-2" to="/Search">
                                    <button>
                                        Search
                                    </button>
                                </Link>    
                                <Link className="btn btn-lg btn-primary m-2" to="/Inbox">
                                    <button>
                                        Inbox
                                    </button>
                                </Link>
                                    {/* <button className="btn btn-lg btn-light m-2" onClick={logout}>
                                        Logout
                                    </button> */}
                            </div>
                        </>
                  
                        <>
                            <div className="logBtn">
                                    <Link className="btn btn-lg btn-primary m-2" to="/login">
                                        <button>
                                        Login
                                        </button>
                                    </Link>                                   
                            </div>
                        </>
                </div>
            </nav>
        </>
    );

};

export default Navbar;