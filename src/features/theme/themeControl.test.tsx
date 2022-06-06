import { render, fireEvent } from '@testing-library/preact'

import { Wrapper } from '~/src/app/wrapper'
import { ThemeControl } from './themeControl.component'

import styles from './themeControl.module.scss'

test('should render', () => {
    const { container, getAllByRole } = render(<ThemeControl />, { wrapper: Wrapper })

    expect(getAllByRole('button')).toHaveLength(3)

    expect(container).toMatchSnapshot()
})

test('should swap the current theme', () => {
    const { getByRole } = render(<ThemeControl />, { wrapper: Wrapper })

    const blueButton = getByRole('button', { name: 'change theme to blue color scheme' })
    fireEvent.click(getByRole('button', { name: 'change theme to blue color scheme' }))

    expect(blueButton).toHaveClass(styles.current_theme)
})
