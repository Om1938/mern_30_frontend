import React, { useEffect } from "react";
import styles from "./Input.module.scss";
import classNames from "classnames";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ value, onChange, className, ...rest }: Props) => {
  const [valueState, setValueState] = React.useState(value);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueState(e.target.value);
    onChange && onChange(e);
  };

  useEffect(() => {
    setValueState(value);
  }, [value]);

  return (
    <input
      className={classNames(styles.input, className)}
      value={valueState}
      onChange={onChangeHandler}
      {...rest}
    />
  );
};

export default Input;
