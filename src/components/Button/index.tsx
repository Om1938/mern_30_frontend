import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

type ButtonSize = "small" | "medium" | "large";
type ButtonVariant = "primary" | "secondary" | "tertiary" | "danger";

type Props = {
  children: React.ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Buttton = ({
  children,
  onClick,
  disabled,
  className,
  type,
  size = "medium",
  variant = "primary",
  ...rest
}: Props) => {
  return (
    <button
      className={classNames(
        "button",
        styles.button,
        className,
        styles[size],
        styles[variant]
      )}
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Buttton;
