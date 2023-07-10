import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Greeting } from './greeting'

describe('<Greeting />', () => {
  it('greets the user', () => {
    render(<Greeting name="John" />)
    expect(screen.getByText(/John/i)).toBeDefined()
  })
})
