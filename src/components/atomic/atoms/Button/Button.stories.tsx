import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'

import { Button, IButtonProps } from '.'

export default {
  title: 'Atoms/Button',
  component: Button,
} as Meta

const Template: Story<IButtonProps> = args => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  
}