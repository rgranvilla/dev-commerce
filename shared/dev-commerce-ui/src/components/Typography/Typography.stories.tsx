import { Meta, StoryObj } from '@storybook/react';
import { Typography, TypographyProps } from './';

export default {
  title: 'Typography',
  component: Typography,
  args: {
    sizes: [
      { type: 'xs', size: 14 },
      { type: 'sm', size: 16 },
      { type: 'md', size: 18 },
      { type: 'lg', size: 20 },
      { type: 'xl', size: 24 },
      { type: 'xxl', size: 32 },
    ],
  },
  argTypes: {
    fontFamily: {
      control: {
        options: ['Baloo 2', 'Roboto'],
        type: 'inline-radio',
      },
      defaultValue: 'Roboto',
      type: 'string',
    },
    sizes: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TypographyProps>;

const sourceDefaultCode = `
<div>
  <span className="font-roboto text-sm">
    Invest Regularly in Your Knowledge Portfolio...
  </span>
</div>
`;

export const Default: StoryObj<TypographyProps> = {
  parameters: {
    docs: {
      source: {
        code: `${sourceDefaultCode}`,
        language: 'html',
        type: 'code',
      },
    },
  },
};

const sourceRobotoCode = `
<div>
  <span className="font-roboto text-sm">
    Invest Regularly in Your Knowledge Portfolio...
  </span>
</div>
`;

export const Roboto: StoryObj<TypographyProps> = {
  args: {
    sizes: [
      { type: 'xs', size: 14 },
      { type: 'sm', size: 16 },
      { type: 'md', size: 18 },
      { type: 'lg', size: 20 },
      { type: 'xl', size: 24 },
      { type: 'xxl', size: 32 },
    ],
    fontFamily: 'Roboto',
  },
  parameters: {
    docs: {
      source: {
        code: `${sourceRobotoCode}`,
        language: 'html',
        type: 'code',
      },
    },
  },
};

const sourceBalooCode = `
<div>
  <span className="font-baloo text-sm">
    Invest Regularly in Your Knowledge Portfolio...
  </span>
</div>
`;

export const Baloo2: StoryObj<TypographyProps> = {
  args: {
    sizes: [
      { type: 'xs', size: 14 },
      { type: 'sm', size: 16 },
      { type: 'md', size: 18 },
      { type: 'lg', size: 20 },
      { type: 'xl', size: 24 },
      { type: 'xxl', size: 32 },
    ],
    fontFamily: 'Baloo 2',
  },
  parameters: {
    docs: {
      source: {
        code: `${sourceBalooCode}`,
        language: 'html',
        type: 'code',
      },
    },
  },
};
