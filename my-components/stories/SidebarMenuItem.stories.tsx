import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SidebarMenuItem, Props } from '../src/Sidebar/SidebarMenuItem';

const meta: Meta = {
  title: 'SidebarMenuItem',
  component: SidebarMenuItem,
};

export default meta;

const Template: Story<Props> = (args) => <SidebarMenuItem {...args} />;

export const Default = Template.bind({});
export const Active = Template.bind({});

Active.args = {
  active: true,
};
