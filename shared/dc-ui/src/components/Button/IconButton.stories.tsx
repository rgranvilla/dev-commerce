import { Meta, StoryObj } from '@storybook/react';
import { IconButton, IconButtonProps } from './';

import { ShoppingCart } from 'phosphor-react';

export default {
  title: 'Components/IconButton',
  component: IconButton,
  argTypes: {
    icon: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
    ariaLabel: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<IconButtonProps>;

export const Default: StoryObj<IconButtonProps> = {
  args: {
    ariaLabel: 'Cart',
    className:
      'bg-purple-700 text-base-card transition-colors hover:bg-purple-400',
    icon: <ShoppingCart size={'1.375rem'} weight="fill" />,
  },
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
};
