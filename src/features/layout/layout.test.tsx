import { render, fireEvent } from '@testing-library/preact'

import { Wrapper } from '~/src/app/wrapper'
import { ROUTES } from '~/src/app/routing'
import { Layout } from './layout.component'

const mockNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}))

test('should render', () => {
    const { container } = render(<Layout routes={ROUTES} />, { wrapper: Wrapper })

    expect(container).toMatchSnapshot()
})

test('should expand menu', () => {
    const { container, getByRole } = render(<Layout routes={ROUTES} />, { wrapper: Wrapper })

    fireEvent.click(getByRole('button', { name: 'expand navigation' }))

    expect(container).toMatchSnapshot()
})

test('should navigate via navigation menu links', () => {
    const { getByRole } = render(<Layout routes={ROUTES} />, { wrapper: Wrapper })

    fireEvent.click(getByRole('listitem', { name: 'navigate to home' }).firstElementChild!)
    expect(mockNavigate).toHaveBeenCalledWith('')

    fireEvent.click(getByRole('listitem', { name: 'navigate to projects' }).firstElementChild!)
    expect(mockNavigate).toHaveBeenCalledWith('projects')

    fireEvent.click(getByRole('listitem', { name: 'navigate to photos' }).firstElementChild!)
    expect(mockNavigate).toHaveBeenCalledWith('photos')

    fireEvent.click(getByRole('listitem', { name: 'navigate to posts' }).firstElementChild!)
    expect(mockNavigate).toHaveBeenCalledWith('posts')
})
