'use client'
import '@/styles/ui/button.scss'
import React, { FC, ReactNode, ButtonHTMLAttributes, memo } from 'react'
import Link from 'next/link'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | 'primary'
    | 'secondary'
    | 'error'
    | 'success'
    | 'warning'
    | 'outline'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  className?: string
  text?: string
  link?: boolean
  href?: string
  target?: string
  isLoading?: boolean
}

const Button: FC<ButtonProps> = memo(
  ({
    variant = 'primary',
    size = 'md',
    icon,
    iconPosition = 'left',
    className = '',
    text = 'Button',
    link,
    href = '#',
    target,
    type = 'button',
    isLoading = false,
    'aria-label': ariaLabel,
    ...rest
  }) => {
    const combinedClassName = [
      'dnx-btn',
      `dnx-btn__${variant}`,
      `dnx-btn__${size}`,
      className,
    ]
      .filter(Boolean)
      .join(' ')

    const renderContent = () => (
      <>
        {isLoading && (
          <span className="btn__loader" aria-hidden="true">
            ... Loading
          </span>
        )}
        {!isLoading && (
          <>
            {icon && iconPosition === 'left' && (
              <span className="btn__icon-left" aria-hidden="true">
                {icon}
              </span>
            )}
            <span>{text}</span>
            {icon && iconPosition === 'right' && (
              <span className="btn__icon-right" aria-hidden="true">
                {icon}
              </span>
            )}
          </>
        )}
      </>
    )

    if (link && href) {
      return (
        <Link
          href={href}
          className={combinedClassName}
          aria-label={ariaLabel || text}
          {...(target && { target })}
        >
          {renderContent()}
        </Link>
      )
    }

    return (
      <button
        type={type}
        className={combinedClassName}
        aria-label={ariaLabel || text}
        {...rest}
      >
        {renderContent()}
      </button>
    )
  },
)

Button.displayName = 'Button'

export default Button
