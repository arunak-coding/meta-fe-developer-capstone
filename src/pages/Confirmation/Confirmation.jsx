import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import pages from "../../utils/pages";
import "./Confirmation.css";

const tableKeys = {
  fullName: "Full Name",
  email: "Email",
  date: "Date",
  time: "Time",
  numberOfPeople: "Number of People",
  occasion: "Occasion",
};

function Confirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const [bookingData, setBookingData] = useState(null);

  useEffect(() => {
    if (location.state === null) {
      navigate(pages.get("home").path);
    } else {
      setBookingData(location.state.bookingData);
    }
  }, [location.state, navigate]);

  return (
    <div className="confirmed-booking">
      <div className="container confirmed-booking-container">
        <FontAwesomeIcon icon={faCircleCheck} size="3x" />
        <div className="confirmation-message">
          <h2 className="confirmation-message-header">
            Reservation Successful
          </h2>
          <p>Check your email for all the details—we can’t wait to see you!</p>
        </div>
      </div>
      <div className="table">
        <h3>Booking Information</h3>
        {bookingData && (
          <table>
            <tbody>
              {Object.entries(bookingData).map(
                ([key, value]) =>
                  key !== "numberOfPeople" && (
                    <tr key={key}>
                      <td className="first-column">{tableKeys[key]}</td>
                      <td className="second-column">:&nbsp;</td>
                      <td className="third-column">{value}</td>
                    </tr>
                  )
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Confirmation;
