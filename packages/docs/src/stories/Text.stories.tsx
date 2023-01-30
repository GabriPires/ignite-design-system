import { Text, TextProps } from '@gabpires-ui/react';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores molestias animi quis fugiat dolorem laborum, ad amet fuga sequi enim. Corporis ea voluptate veniam maiores dolorem quam accusantium perferendis quod?',
    size: 'md'
  },
  argTypes: {
    size: {
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
      control: {
        type: 'inline-radio'
      }
    },
  }
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args:{
    children:'Strong text',
    as: 'strong'
  }
};