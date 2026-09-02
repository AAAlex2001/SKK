"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import { NAV_ITEMS } from "@/shared/config";
import { Button, Logo } from "@/shared/ui";

import styles from "./BurgerMenu.module.scss";

export interface BurgerMenuProps {
  id: string;
  open: boolean;
  onClose: () => void;
}

export function BurgerMenu({ id, open, onClose }: BurgerMenuProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <div
      id={id}
      className={[styles.root, open && styles.open].filter(Boolean).join(" ")}
    >
      <div className={styles.bar}>
        <Link
          href="/"
          className={styles.logo}
          aria-label="СКК — на главную"
          onClick={onClose}
        >
          <Logo
            className={styles.logoIcon}
            aria-hidden="true"
            focusable="false"
          />
        </Link>

        <button
          ref={closeRef}
          type="button"
          className={styles.close}
          aria-label="Закрыть меню"
          onClick={onClose}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M1 1L17 17M17 1L1 17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      <div className={styles.content}>
        <nav className={styles.nav} aria-label="Меню">
          <ul className={styles.list}>
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={styles.link}
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Button className={styles.action} onClick={onClose}>
          Связаться с нами
        </Button>
      </div>
    </div>
  );
}
