import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PageNotFound() {
  return (
    <div className="container error-container">
      <FontAwesomeIcon icon={faRobot} size="3x" />
      <h2 className="error-container-header">404 - Page Not Found</h2>
    </div>
  );
}

export default PageNotFound;
