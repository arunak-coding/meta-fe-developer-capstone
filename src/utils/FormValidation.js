export const errorMessage = {
  fullName: "Name must be at least 3 characters",
  email: "Enter a valid email",
  date: "Select a valid date",
  time: "Select an available slot",
  numberOfPeople: "Select an option",
  occasion: "Select an occasion",
};

export const isValidFullName = (fullName) => {
  return fullName.trim().length >= 3;
};

export const isValidEmail = (email) => {
  const emailPattern = /^[a-zA-Z0-9._%+-]{3,}@[a-zA-Z.-]{2,}\.[a-zA-Z]{2,}$/;

  return emailPattern.test(email);
};

export const isValidDate = (date) => {
  if (date === "") {
    return false;
  }

  const today = new Date();
  const dateToCompare = new Date(date);

  today.setHours(0, 0, 0, 0);
  dateToCompare.setHours(0, 0, 0, 0);

  return dateToCompare >= today;
};

export const isValidTime = (time) => {
  return time !== "";
};

export const isValidNumberOfPeople = (numberOfPeople) => {
  return numberOfPeople !== "";
};

export const isValidOccasion = (occasion) => {
  return occasion !== "";
};
