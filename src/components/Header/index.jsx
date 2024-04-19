import { Link } from "react-router-dom";


const Header = () => {
  
  return (
    <header>
        <Link className="headerLink" to="/">
          <h1 className="headerName">
            AAA
          </h1>
        </Link>        
    </header>
  );
};

export default Header;