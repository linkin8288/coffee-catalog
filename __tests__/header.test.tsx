import {render, screen } from '@testing-library/react'
import Header from '@/components/Header'

describe('Header', () => {
  it('renders a header', () => {
    render(<Header />)

    const paragraphElement = screen.getByText('Find the best');

    expect(paragraphElement).toBeInTheDocument();
  })
})