import { Meta, StoryObj } from '@storybook/react';
import { Logo, LogoProps } from './';

export default {
  title: 'Components/Logo',
  component: Logo,
  argTypes: {
    logoImageColor: {
      control: {
        type: 'color',
        presetColors: ['#8047F8'],
      },
    },
    logoTextColor: {
      control: {
        type: 'color',
        presetColors: ['#403937'],
      },
    },
    short: {
      control: {
        type: 'boolean',
      },
    },
    size: {
      control: {
        type: 'number',
      },
    },
  },
} as Meta<LogoProps>;

export const Default: StoryObj<LogoProps> = {
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
};

export const FullLogo: StoryObj<LogoProps> = {
  args: {
    size: 40,
  },
  parameters: {
    docs: {
      source: {
        code: '<Logo />',
        language: 'yml',
        type: 'auto',
      },
    },
  },
};

export const ShortLogo: StoryObj<LogoProps> = {
  args: {
    short: true,
  },
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
};
