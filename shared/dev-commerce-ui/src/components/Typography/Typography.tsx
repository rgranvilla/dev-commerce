import { HTMLAttributes } from 'react';
import { clsx } from 'clsx';

interface sizesProps {
  type: string;
  size: number;
}
export interface TypographyProps extends HTMLAttributes<HTMLSpanElement> {
  fontFamily: 'Baloo 2' | 'Roboto';
  sizes: sizesProps[];
}

interface TypographyItemProps extends HTMLAttributes<HTMLSpanElement> {
  value: string;
  fontSize: number;
}

function TypographyItem({ value, fontSize, ...rest }: TypographyItemProps) {
  return (
    <div className="flex gap-8 items-center text-base-subtitle">
      <span className="w-10 text-xs text-base-label">{value}</span>
      <span className="w-10 text-xs text-base-label">{fontSize}</span>
      <span {...rest}>Invest Regularly in Your Knowledge Portfolio...</span>
    </div>
  );
}

function Typography({
  fontFamily = 'Roboto',
  sizes,
  ...rest
}: TypographyProps) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs text-white pl-8">
        Font Family:{' '}
        <span className="text-base-label">
          &quot;{fontFamily}, sans-serif&quot;
        </span>
      </span>
      <span className="text-xs text-white pl-8">
        Font Weight: <span className="text-base-label">&quot;normal&quot;</span>
      </span>
      <div className="flex justify-center mt-6">
        <div className="flex flex-col p-6 gap-2 bg-white rounded w-fit">
          {sizes.map(({ type, size }) => (
            <TypographyItem
              key={type}
              value={type}
              fontSize={size}
              className={clsx(
                'font-normal',
                {
                  'font-baloo': fontFamily === 'Baloo 2',
                  'font-roboto': fontFamily === 'Roboto',
                },
                {
                  'text-xs': type === 'xs',
                  'text-sm': type === 'sm',
                  'text-md': type === 'md',
                  'text-lg': type === 'lg',
                  'text-xl': type === 'xl',
                  'text-xxl': type === 'xxl',
                },
              )}
              {...rest}
            />
          ))}
        </div>
      </div>
      <span className="text-xs text-white pl-8 mt-10">
        Font Weight: <span className="text-base-label">&quot;bold&quot;</span>
      </span>
      <div className="flex justify-center mt-6">
        <div className="flex flex-col p-6 gap-2 bg-white rounded w-fit">
          {sizes.map(({ type, size }) => (
            <TypographyItem
              key={type}
              value={type}
              fontSize={size}
              className={clsx(
                'font-bold',
                {
                  'font-baloo': fontFamily === 'Baloo 2',
                  'font-roboto': fontFamily === 'Roboto',
                },
                {
                  'text-xs': type === 'xs',
                  'text-sm': type === 'sm',
                  'text-md': type === 'md',
                  'text-lg': type === 'lg',
                  'text-xl': type === 'xl',
                  'text-xxl': type === 'xxl',
                },
              )}
              {...rest}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export { Typography };
