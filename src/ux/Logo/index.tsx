"use client";
import "@/styles/ux/logo.scss";
import React, { FC, memo } from "react";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  src: string;
  href: string;
  size?: number;
  slogan?: string;
  slogan2: string;
  title?: string;
  ariaLabel?: string;
  rel?: string;
  className?: string;
}

const Logo: FC<LogoProps> = memo(
  ({
    href,
    src,
    size = 30,
    slogan,
    slogan2,
    title,
    ariaLabel,
    rel,
    className,
  }) => {
    const combinedClassName = ["dnx-logo", className].filter(Boolean).join(" ");

    return (
      <Link
        href={href}
        className={combinedClassName}
        title={title || "Logo"}
        aria-label={ariaLabel || "Logo"}
        target="_self"
        rel={rel || "noopener noreferrer"}
      >
        <Image
          src={src}
          width={size}
          height={size}
          alt={title || "Logo"}
          title={title || "Logo"}
          loading="eager"
          priority
          className="dnx-logo__images"
        />
        {slogan && (
          <span className="dnx-logo__slogan">
            <span>{slogan}</span>
            {slogan2 && <span>{slogan2}</span>}
          </span>
        )}
      </Link>
    );
  }
);

Logo.displayName = "Logo";

export default Logo;
