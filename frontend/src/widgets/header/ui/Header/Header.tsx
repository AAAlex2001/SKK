"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import { NAV_ITEMS } from "@/shared/config";
import { Button, Logo } from "@/shared/ui";
import { BurgerMenu } from "@/widgets/burger-menu";

import styles from "./Header.module.scss";

const MENU_ID = "header-menu";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 16);

    update();
    window.addEventListener("scroll", update, { passive: true });

    return () => window.removeEventListener("scroll", update);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <header
        className={[styles.root, scrolled && styles.scrolled]
          .filter(Boolean)
          .join(" ")}
      >
        <div className={styles.inner}>
          <Link href="/" className={styles.logo} aria-label="СКК — на главную">
            <Logo
              className={styles.logoIcon}
              aria-hidden="true"
              focusable="false"
            />
          </Link>

          <nav className={styles.nav} aria-label="Основное меню">
            <ul className={styles.navList}>
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={styles.tab}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.actions}>
            <Button className={styles.action} href="#contacts">
              Связаться с нами
            </Button>

            {menuOpen ? null : (
              <button
                type="button"
                className={styles.burger}
                aria-label="Открыть меню"
                aria-expanded={false}
                aria-controls={MENU_ID}
                onClick={() => setMenuOpen(true)}
              >
                <span className={styles.burgerLines} aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </span>
              </button>
            )}
          </div>
        </div>
      </header>

      <BurgerMenu id={MENU_ID} open={menuOpen} onClose={closeMenu} />
    </>
  );
}
