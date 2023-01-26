import { Avatar, AvatarProps } from '@gabpires-ui/react';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/GabriPires.png',
    alt: 'GabriPires'
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined
  }
};

