import "./FormField.css";

function FormField({
  children,
  label,
  required = false,
  htmlFor,
  hasError,
  errorMessage,
  className,
}) {
  return (
    <div className={`form-field ${className}`}>
      <label htmlFor={htmlFor}>
        {label}
        <span className="required">{required ? " *" : ""}</span>
      </label>
      {children}
      {hasError && errorMessage ? (
        <p data-testid="error-message" className="error-message">
          {errorMessage}
        </p>
      ) : null}
    </div>
  );
}

export default FormField;
