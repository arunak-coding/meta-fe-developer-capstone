import { useState } from "react";
import {
  faPerson,
  faChildren,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import FormField from "../FormField/FormField";
import {
  errorMessage,
  isValidFullName,
  isValidEmail,
  isValidDate,
  isValidTime,
  isValidNumberOfPeople,
  isValidOccasion,
} from "../../utils/FormValidation";
import "./BookingForm.css";

const peopleData = [
  { id: 0, number: "1 - 4", icon: faPerson },
  { id: 1, number: "5 - 8", icon: faChildren },
  { id: 2, number: "9 - 12", icon: faPeopleGroup },
];

const occasions = ["Birthday", "Engagement", "Anniversary", "Other"];

function BookingForm({
  availableTimes,
  dispatchOnDateChange,
  onSubmitHandler,
}) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleName = (e) => {
    e.preventDefault();
    setFullName(e.target.value);
    handleInvalid("fullName", isValidFullName(e.target.value));
  };

  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
    handleInvalid("email", isValidEmail(e.target.value));
  };

  const handleDate = (e) => {
    setDate(e.target.value);
    dispatchOnDateChange(e.target.value);
    handleInvalid("time", isValidDate(e.target.value));

    setTime("");
    handleInvalid("time", isValidTime(""));
  };

  const handleTime = (e) => {
    e.preventDefault();
    setTime(e.target.value);
    handleInvalid("time", isValidTime(e.target.value));
  };

  const handleNumberOfPeople = (id) => {
    setNumberOfPeople(id);
    handleInvalid("numberOfPeople", isValidNumberOfPeople(id));
  };

  const handleOccasion = (e) => {
    e.preventDefault();
    setOccasion(e.target.value);
    handleInvalid("occasion", isValidOccasion(e.target.value));
  };

  const [touched, setTouched] = useState({
    fullName: false,
    email: false,
    date: false,
    time: false,
    numberOfPeople: false,
    occasion: false,
  });

  const handleBlur = (field) => {
    setTouched((prevTouched) => ({
      ...prevTouched,
      [field]: true,
    }));
  };

  const [invalid, setInvalid] = useState({
    fullName: false,
    email: false,
    date: false,
    time: false,
    numberOfPeople: false,
    occasion: false,
  });

  const handleInvalid = (field, valid) => {
    setInvalid((prevState) => ({
      ...prevState,
      [field]: !valid,
    }));
  };

  const isInvalid = (field) => {
    switch (field) {
      case "fullName":
        return !isValidFullName(fullName) && touched.fullName;
      case "email":
        return !isValidEmail(email) && touched.email;
      case "date":
        return !isValidDate(date) && touched.date;
      case "time":
        return !isValidTime(time) && touched.time;
      case "numberOfPeople":
        return !isValidNumberOfPeople(numberOfPeople) && touched.numberOfPeople;
      case "occasion":
        return !isValidOccasion(occasion) && touched.occasion;
      default:
        return false;
    }
  };

  const anyFieldInvalid = () => {
    Object.keys(touched).forEach((field) => {
      if (!touched[field] && !invalid[field]) {
        handleBlur(field);
        handleInvalid(field, false);
      }
    });

    return Object.keys(invalid).some((field) => invalid[field]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (anyFieldInvalid()) {
      return;
    }

    const formData = {
      fullName,
      email,
      date,
      time,
      numberOfPeople,
      occasion,
    };

    onSubmitHandler(formData);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <p className="form-heading">Reserve a Table</p>
      <FormField
        label="Full Name"
        required={true}
        htmlFor="full-name"
        hasError={isInvalid("fullName") || invalid.fullName}
        errorMessage={errorMessage.fullName}
      >
        <input
          type="text"
          name="full-name"
          id="full-name"
          value={fullName}
          placeholder="John Doe"
          required={true}
          onChange={handleName}
          onBlur={(e) => {
            handleBlur("fullName");
            handleInvalid("fullName", isValidFullName(e.target.value));
          }}
        />
      </FormField>
      <FormField
        label="Email"
        required={true}
        htmlFor="email"
        hasError={isInvalid("email") || invalid.email}
        errorMessage={errorMessage.email}
      >
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          placeholder="name@example.com"
          required={true}
          onChange={handleEmail}
          onBlur={(e) => {
            handleBlur("email");
            handleInvalid("email", isValidEmail(e.target.value));
          }}
        />
      </FormField>
      <FormField
        label="Date"
        required={true}
        htmlFor="booking-date"
        hasError={isInvalid("date") || invalid.date}
        errorMessage={errorMessage.date}
      >
        <input
          type="date"
          name="booking-date"
          id="booking-date"
          value={date}
          required={true}
          onChange={handleDate}
          onBlur={(e) => {
            handleBlur("date");
            handleInvalid("date", isValidDate(e.target.value));
            handleInvalid("time", isValidTime(time));
          }}
        />
      </FormField>
      <FormField
        label="Time"
        required={true}
        htmlFor="booking-time"
        hasError={isInvalid("time") && invalid.time}
        errorMessage={errorMessage.time}
      >
        <select
          name="booking-time"
          id="booking-time"
          value={time}
          required={true}
          onChange={handleTime}
          onBlur={(e) => {
            handleBlur("time");
            handleInvalid("time", isValidTime(e.target.value));
          }}
        >
          {
            <option value="" disabled>
              Available Slots
            </option>
          }
          {availableTimes.map((time, index) => (
            <option data-testid="booking-time-option" key={index} value={time}>
              {time}
            </option>
          ))}
        </select>
      </FormField>
      <FormField
        label="Number of People"
        required={true}
        htmlFor="number-of-people"
        hasError={isInvalid("numberOfPeople") || invalid.numberOfPeople}
        errorMessage={errorMessage.numberOfPeople}
      >
        <div className="number-of-people">
          {peopleData.map((people) => (
            <button
              type="button"
              key={people.id}
              className={`number-option ${
                numberOfPeople === people.id ? "selected" : ""
              }`}
              onClick={() => {
                handleNumberOfPeople(people.id);
                handleBlur("numberOfPeople");
              }}
            >
              <span>
                {people.number} &nbsp;
                <FontAwesomeIcon icon={people.icon} size="md" />
              </span>
            </button>
          ))}
        </div>
      </FormField>
      <FormField
        label="Occasion"
        required={true}
        htmlFor="occasion"
        hasError={isInvalid("occasion") || invalid.occasion}
        errorMessage={errorMessage.occasion}
      >
        <select
          name="occasion"
          id="occasion"
          value={occasion}
          required={true}
          onChange={handleOccasion}
          onBlur={(e) => {
            handleBlur("occasion");
            handleInvalid("occasion", isValidOccasion(e.target.value));
          }}
        >
          {
            <option value="" disabled>
              Choose Event Type
            </option>
          }
          {occasions.map((occasion, index) => (
            <option
              data-testid="booking-occasion-option"
              key={index}
              value={occasion}
            >
              {occasion}
            </option>
          ))}
        </select>
      </FormField>
      <FormField label="Please Note:" htmlFor="note" className="note-field">
        <ul className="notes">
          <li>
            We’ll send a confirmation to the email you provide—please
            double-check that your contact details are correct.
          </li>
          <li>
            If you’re more than 30 minutes late, we may need to give your table
            to another guest.
          </li>
          <li>A small service fee of 50¢ applies when booking online.</li>
        </ul>
      </FormField>

      <input type="submit" value="Make Your Reservation" />
    </form>
  );
}

export default BookingForm;
