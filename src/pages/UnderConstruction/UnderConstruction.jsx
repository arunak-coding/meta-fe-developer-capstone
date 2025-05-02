import { faPersonDigging } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function UnderConstruction() {
  return (
    <div className="container error-container">
      <FontAwesomeIcon icon={faPersonDigging} size="3x" />
      <h2 className="error-container-header">Page Under Construction</h2>
    </div>
  );
}

export default UnderConstruction;
