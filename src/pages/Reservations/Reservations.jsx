import { useReducer } from "react";
import { useNavigate } from "react-router-dom";

import BookingForm from "../../components/BookingForm/BookingForm";
import { fetchAPI, submitAPI } from "../../utils/API";
import pages from "../../utils/pages";
import "./Reservations.css";

const updateTimes = (availableTimes, date) => {
  const response = fetchAPI(new Date(date));
  return response.length !== 0 ? response : availableTimes;
};

const initializeTimes = (initialAvailableTimes) => {
  return [...initialAvailableTimes, ...fetchAPI(new Date())];
};

function Reservations() {
  const navigate = useNavigate();

  const [availableTimes, dispatchOnDateChange] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  const onSubmitHandler = (formData) => {
    const response = submitAPI(formData);
    if (response) {
      navigate(pages.get("confirmation").path, {
        state: { bookingData: formData },
      });
    }
  };

  return (
    <div className="booking-page">
      <div className="container booking-page-container">
        <BookingForm
          availableTimes={availableTimes}
          dispatchOnDateChange={dispatchOnDateChange}
          onSubmitHandler={onSubmitHandler}
        />
      </div>
    </div>
  );
}

export default Reservations;
