import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle,
  faExclamationCircle,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import chalkmatelogo from "../ui/chalkmatelogo.svg"

const Header = () => {
  return (
    <div className="header-video">
      <div className="logo">
      <img src={chalkmatelogo} />
        <span className="help-text logo noul fontr s24 c333">Meet</span>
      </div>
      <div className="action-btn">
        <FontAwesomeIcon className="icon-block" icon={faQuestionCircle} />
        <FontAwesomeIcon className="icon-block" icon={faExclamationCircle} />
        <FontAwesomeIcon className="icon-block" icon={faCog} />
      </div>
    </div>
  );
};
export default Header;