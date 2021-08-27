import React from "react";
import classNames from "classnames";

type InputProps = {
  type: string | number | null;
  label: string;
  placeholder: string;
  className: string;
  error: string;
  field: any;
  form: { touched: any; errors: any };
};
const Input: React.FC<InputProps> = ({
  type,
  label,
  placeholder,
  className,
  error,
  field,
  form: { touched, errors, ...rest },
  ...props
}) => (
  <div
    className={classNames("form-group", className, {
      error: touched[field.name] && errors[field.name],
    })}
  >
    {label && (
      <label className="form-label" htmlFor={field.name}>
        {label}
      </label>
    )}
    <input
      type={type}
      className={classNames("form-control", {
        "is-invalid": touched[field.name] && errors[field.name],
      })}
      placeholder={placeholder}
      {...field}
      {...props}
    />
    {touched[field.name] && errors[field.name] && (
      <div className="invalid-feedback">{errors[field.name]}</div>
    )}
  </div>
);

export default Input;
