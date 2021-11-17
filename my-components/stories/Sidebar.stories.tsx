import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Sidebar, Props } from '../src/Sidebar';

const meta: Meta = {
  title: 'Sidebar',
  component: Sidebar,
};

export default meta;

const Template: Story<Props> = (args) => <Sidebar />;

export const Default = Template.bind({});

Default.args = {};
