import { describe, expect, test } from "vitest";

import {
  errorMessage,
  isValidFullName,
  isValidEmail,
  isValidDate,
  isValidTime,
  isValidNumberOfPeople,
  isValidOccasion,
} from "../utils/FormValidation";

describe("Validation Functions", () => {
  test("isValidFullName should validate full name correctly", () => {
    expect(isValidFullName("John")).toBe(true);
    expect(isValidFullName("  John  ")).toBe(true);
    expect(isValidFullName("Jo")).toBe(false);
    expect(isValidFullName("   ")).toBe(false);
    expect(isValidFullName("")).toBe(false);
  });

  test("isValidEmail should validate email correctly", () => {
    expect(isValidEmail("test@example.com")).toBe(true);
    expect(isValidEmail("user+name@domain.co")).toBe(true);
    expect(isValidEmail("invalidemail")).toBe(false);
    expect(isValidEmail("invalid@.com")).toBe(false);
    expect(isValidEmail("name@domain.")).toBe(false);
    expect(isValidEmail("")).toBe(false);
  });

  test("isValidDate should validate date correctly", () => {
    const today = new Date().toISOString().split("T")[0];
    const futureDate = new Date(Date.now() + 86400000)
      .toISOString()
      .split("T")[0]; // Tomorrow's date
    const pastDate = new Date(Date.now() - 86400000)
      .toISOString()
      .split("T")[0]; // Yesterday's date

    expect(isValidDate(today)).toBe(true);
    expect(isValidDate(futureDate)).toBe(true);
    expect(isValidDate(pastDate)).toBe(false);
    expect(isValidDate("")).toBe(false);
  });

  test("isValidTime should validate time correctly", () => {
    expect(isValidTime("10:00")).toBe(true);
    expect(isValidTime("")).toBe(false);
  });

  test("isValidNumberOfPeople should validate number of people correctly", () => {
    expect(isValidNumberOfPeople("2")).toBe(true);
    expect(isValidNumberOfPeople("")).toBe(false);
  });

  test("isValidOccasion should validate occasion correctly", () => {
    expect(isValidOccasion("Birthday")).toBe(true);
    expect(isValidOccasion("")).toBe(false);
  });

  test("errorMessage should return correct error messages", () => {
    expect(errorMessage.fullName).toBe("Name must be at least 3 characters");
    expect(errorMessage.email).toBe("Enter a valid email");
    expect(errorMessage.date).toBe("Select a valid date");
    expect(errorMessage.time).toBe("Select an available slot");
    expect(errorMessage.numberOfPeople).toBe("Select an option");
    expect(errorMessage.occasion).toBe("Select an occasion");
  });
});
