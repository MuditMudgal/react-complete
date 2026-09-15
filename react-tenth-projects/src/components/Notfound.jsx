import "./NotFound.css";
import { Link } from "react-router-dom";

function Notfound() {
    return (
        <div className="not-found">
            <div className="error-content">
                <p className="error-code">404</p>

                <h1>Oops! Page not found.</h1>

                <p className="error-message">
                    The page you're looking for doesn't exist or may have been
                    moved.
                </p>

                <Link to="/" className="home-btn">
                    ← Back to Home
                </Link>
            </div>
        </div>
    );
}

export default Notfound;
