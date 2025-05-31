"use client";
import "@/styles/ui/anchor.scss";
import React, { FC, ReactNode, memo } from "react";
import Link from "next/link";

interface AnchorProps {
  href: string;
  label: string;
  title?: string;
  ariaLabel?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
  className?: string;
  link?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

const Anchor: FC<AnchorProps> = memo(
  ({
    href,
    label,
    title,
    ariaLabel,
    target,
    rel,
    className,
    link,
    icon,
    iconPosition = "left",
  }) => {
    const isExternal = target === "_blank" || /^https?:\/\//.test(href);

    const combinedClassName = [
      "dnx-anchor",
      className,
      link ? "dnx-anchor__text-link" : null,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <Link
        href={href}
        className={combinedClassName}
        title={title || label}
        aria-label={ariaLabel || label}
        target={isExternal ? "_blank" : target}
        rel={isExternal ? "noopener noreferrer" : rel}
      >
        {icon && iconPosition === "left" && (
          <span className="dnx-anchor__icon--left">{icon}</span>
        )}
        {label}
        {icon && iconPosition === "right" && (
          <span className="dnx-anchor__icon--right">{icon}</span>
        )}
      </Link>
    );
  }
);

Anchor.displayName = "Anchor";

export default Anchor;
