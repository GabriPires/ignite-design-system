import { Text, TextProps } from '@gabpires-ui/react';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores molestias animi quis fugiat dolorem laborum, ad amet fuga sequi enim. Corporis ea voluptate veniam maiores dolorem quam accusantium perferendis quod?'
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args:{
    children:'Strong text',
    as: 'strong'
  }
};