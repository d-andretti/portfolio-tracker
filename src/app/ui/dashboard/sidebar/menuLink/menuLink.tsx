"use client";

import { FC, ReactNode } from "react";
import styles from "./menuLink.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

type MenuItem = {
  title: string;
  icon: ReactNode;
  path: string;
};

const MenuLink: FC<{ item: MenuItem }> = ({ item }) => {
  const pathname = usePathname();
  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        pathname === item.path && styles.active
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
