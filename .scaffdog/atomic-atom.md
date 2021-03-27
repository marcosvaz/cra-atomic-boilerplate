---
name: 'atomic-atom'
root: './src/components/atomic/atoms'
output: '**/*'
ignore: []
questions:
  name: 'Please enter the name of component to be created'
---

# `{{ inputs.name | pascal }}/index.tsx`

```tsx
import React from 'react'
import { Container } from './styles'

export interface I{{ inputs.name | pascal }}Props {}

export const {{ inputs.name | pascal }}: React.FC<I{{ inputs.name | pascal }}Props> = (): JSX.Element => {

  return (
    <Container />
  )
}

```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.stories.tsx`

```tsx
import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'

import { {{ inputs.name | pascal }}, I{{ inputs.name | pascal }}Props } from '.'

export default {
  title: 'Atoms/{{ inputs.name | pascal }}',
  component: {{ inputs.name | pascal }},
} as Meta

const Template: Story<I{{ inputs.name | pascal }}Props> = args => <{{ inputs.name | pascal }} {...args} />

export const Default = Template.bind({})
Default.args = {
  
}

```

# `{{ inputs.name | pascal }}/styles.ts`

```ts
import styled from 'styled-components'

export const Container = styled.div`
  padding: 10px;
`

```