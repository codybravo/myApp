import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <div>
                    <Link to="/">
                        <h1>Google Sheet App</h1>
                    </Link>
                </div>
                <div>
                    <Link to="/metadata">
                        <h3>Meta Data</h3>
                    </Link>

                    <Link to="/userdata">
                        <h3>User Data</h3>
                    </Link>
                </div>

            </div>
        </header>
        
    ) 
}

export default Navbar