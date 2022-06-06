import { render, fireEvent } from '@testing-library/preact'

import { Wrapper } from '~/src/app/wrapper'
import { ThemeToggle } from './themeToggle.component'

test('should render', () => {
    const { container, getByRole } = render(<ThemeToggle />, { wrapper: Wrapper })

    expect(getByRole('button')).toBeInTheDocument()

    expect(container).toMatchSnapshot()
})

test('should toggle dark mode theme', () => {
    const { getByRole } = render(<ThemeToggle />, { wrapper: Wrapper })

    fireEvent.click(getByRole('button'))

    expect(getByRole('button', { name: 'toggle dark mode off' })).toBeInTheDocument()
})
