import { describe, expect, test, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

import BookingForm from "../components/BookingForm/BookingForm";

describe("Booking Form", () => {
  const availableTimes = ["04:00", "05:00"];
  const dispatchOnDateChange = vi.fn();
  const onSubmitHandler = vi.fn();

  test("should render the form with all fields and their corresponding default values", async () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatchOnDateChange={dispatchOnDateChange}
        onSubmitHandler={onSubmitHandler}
      />
    );

    // Find the input elements (Full Name, Email, Date, etc.)
    const fullNameInput = screen.getByLabelText(/Full Name/);
    const emailInput = screen.getByLabelText(/Email/);
    const dateInput = screen.getByLabelText(/Date/);
    const timeSelect = screen.getByLabelText(/Time/);
    const submitButton = screen.getByRole("button", {
      name: /Make Your Reservation/,
    });
    const occasionSelect = screen.getByLabelText(/Occasion/);

    // Check that the input fields have their default values
    expect(fullNameInput.value).toBe(""); // Default value for Full Name
    expect(emailInput.value).toBe(""); // Default value for Email
    expect(dateInput.value).toBe(""); // Default value for Date
    expect(timeSelect.value).toBe(""); // Default value for Time
    expect(occasionSelect.value).toBe(""); // Default value for Occasion

    // Check the length of options (Time and Occasion)
    const timeOptions = await screen.findAllByTestId("booking-time-option");
    const occasionOption = await screen.findAllByTestId(
      "booking-occasion-option"
    );

    expect(timeOptions.length).toBe(2);
    expect(occasionOption.length).toBe(4);

    // Testing Number of Person field buttons
    const button1to4 = screen.getByRole("button", { name: /1 - 4/i });
    const button5to8 = screen.getByRole("button", { name: /5 - 8/i });
    const button9to12 = screen.getByRole("button", { name: /9 - 12/i });

    expect(button1to4).toBeInTheDocument();
    expect(button5to8).toBeInTheDocument();
    expect(button9to12).toBeInTheDocument();

    // Testing submit button
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute("type", "submit");
    expect(submitButton).toBeEnabled();
  });

  test("should successfully submit form with default values", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatchOnDateChange={dispatchOnDateChange}
        onSubmitHandler={onSubmitHandler}
      />
    );

    // Click the submit button
    const submitButton = screen.getByRole("button", {
      name: /Make Your Reservation/,
    });
    fireEvent.click(submitButton);

    // Check if the onSubmitHandler is called with correct data
    expect(onSubmitHandler).toHaveBeenCalledWith({
      fullName: "",
      email: "",
      date: "",
      time: "",
      numberOfPeople: "",
      occasion: "",
    });
  });

  test("should display an error message if name is less than 3 characters", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatchOnDateChange={dispatchOnDateChange}
        onSubmitHandler={onSubmitHandler}
      />
    );

    // Set an invalid name
    const fullNameInput = screen.getByLabelText(/Full Name/);
    fireEvent.change(fullNameInput, { target: { value: "Li" } });
    fireEvent.blur(fullNameInput);

    // Check if correct error message is shown
    const errorMessage = screen.getByTestId("error-message");
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent(
      "Name must be at least 3 characters"
    );

    // Set an valid name
    fireEvent.change(fullNameInput, { target: { value: "Tom" } });
    fireEvent.blur(fullNameInput);

    // Check if form accept as valid input
    expect(errorMessage).not.toBeInTheDocument();
  });

  test("should display an error message if email is not in valid", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatchOnDateChange={dispatchOnDateChange}
        onSubmitHandler={onSubmitHandler}
      />
    );

    // Set an invalid name
    const fullEmail = screen.getByLabelText(/Email/);
    fireEvent.change(fullEmail, { target: { value: "ab@cd.ef" } });
    fireEvent.blur(fullEmail);

    // Check if correct error message is shown
    const errorMessage = screen.getByTestId("error-message");
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent("Enter a valid email");

    // Set an valid name
    fireEvent.change(fullEmail, { target: { value: "tom@gmail.com" } });
    fireEvent.blur(fullEmail);

    // Check if form accept as valid input
    expect(errorMessage).not.toBeInTheDocument();
  });

  test("should display an error message and if selected date is in the past", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatchOnDateChange={dispatchOnDateChange}
        onSubmitHandler={onSubmitHandler}
      />
    );

    // Set an invalid date
    const dateInput = screen.getByLabelText(/Date/);
    fireEvent.change(dateInput, { target: { value: "2024-12-12" } });
    fireEvent.blur(dateInput);

    // Check if correct error message is shown
    const errorMessage = screen.getByTestId("error-message");
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent("Select a valid date");
  });

  test("should show error if field is not filled correctly", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatchOnDateChange={dispatchOnDateChange}
        onSubmitHandler={onSubmitHandler}
      />
    );

    // Find the input elements (Full Name, Email, Date, etc.)
    const fullNameInput = screen.getByLabelText(/Full Name/);
    const emailInput = screen.getByLabelText(/Email/);
    const dateInput = screen.getByLabelText(/Date/);
    const timeSelect = screen.getByLabelText(/Time/);
    const occasionSelect = screen.getByLabelText(/Occasion/);

    // Blur all the fields
    fireEvent.blur(fullNameInput);
    fireEvent.blur(emailInput);
    fireEvent.blur(dateInput);
    fireEvent.blur(timeSelect);
    fireEvent.blur(occasionSelect);

    const errorMessages = screen.getAllByTestId("error-message");
    expect(errorMessages).toHaveLength(5);
  });

  test("should successfully submit form with default values", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatchOnDateChange={dispatchOnDateChange}
        onSubmitHandler={onSubmitHandler}
      />
    );

    const date = new Date().toISOString().split("T")[0];

    // Find the input elements (Full Name, Email, Date, etc.)
    const fullNameInput = screen.getByLabelText(/Full Name/);
    const emailInput = screen.getByLabelText(/Email/);
    const dateInput = screen.getByLabelText(/Date/);
    const timeSelect = screen.getByLabelText(/Time/);
    const occasionSelect = screen.getByLabelText(/Occasion/);
    const button1to4 = screen.getByRole("button", { name: /1 - 4/i });

    // Fill the form
    fireEvent.change(fullNameInput, { target: { value: "Tom" } });
    fireEvent.blur(fullNameInput);
    fireEvent.change(emailInput, { target: { value: "tom.jerry@gmail.com" } });
    fireEvent.blur(emailInput);
    fireEvent.change(dateInput, { target: { value: date } });
    fireEvent.blur(dateInput);
    fireEvent.change(timeSelect, { target: { value: "05:00" } });
    fireEvent.blur(timeSelect);
    fireEvent.change(occasionSelect, { target: { value: "Birthday" } });
    fireEvent.blur(occasionSelect);
    fireEvent.click(button1to4);

    // Click the submit button
    const submitButton = screen.getByRole("button", {
      name: /Make Your Reservation/,
    });
    fireEvent.click(submitButton);

    // Check if the onSubmitHandler is called with correct data
    expect(onSubmitHandler).toHaveBeenCalledWith({
      fullName: "Tom",
      email: "tom.jerry@gmail.com",
      date: date,
      time: "05:00",
      numberOfPeople: 0,
      occasion: "Birthday",
    });
  });
});
