"use client";
import "@/styles/ux/header.scss";
import React, { memo } from "react";

const Header = memo(() => {
  return <header>Logo | Navigation | action</header>;
});

Header.displayName = "Header";

export default Header;
