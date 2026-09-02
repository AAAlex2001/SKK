import type {
  ButtonHTMLAttributes,
  MouseEventHandler,
  ReactNode,
} from "react";

import styles from "./Button.module.scss";

export type ButtonVariant = "primary";

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  variant?: ButtonVariant;
  href?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  children: ReactNode;
}

export function Button({
  variant = "primary",
  className,
  type = "button",
  href,
  onClick,
  children,
  ...rest
}: ButtonProps) {
  const classes = [styles.root, styles[variant], className]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a className={classes} href={href} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}
