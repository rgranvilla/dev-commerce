import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  className?: string;
  ariaLabel: string;
}

function IconButton({
  icon,
  className = '',
  ariaLabel,
  ...rest
}: IconButtonProps) {
  return (
    <button
      className={`${className} flex items-center justify-center p-2 rounded-md disabled:cursor-not-allowed`}
      aria-label={ariaLabel}
      {...rest}
    >
      {icon}
    </button>
  );
}

export { IconButton };
