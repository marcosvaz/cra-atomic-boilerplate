---
name: 'page'
root: './src/pages'
output: '**/*'
ignore: []
questions:
  name: 'Please enter the name of component to be created'
---

# `{{ inputs.name | pascal }}/index.tsx`

```jsx
import React from 'react'

export interface I{{ inputs.name | pascal }}Props {}

export const {{ inputs.name | pascal }}: React.FC<I{{ inputs.name | pascal }}Props> = (): JSX.Element => {
  return (
    <div />
  )
}

```