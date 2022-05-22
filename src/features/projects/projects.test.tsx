import { render, fireEvent } from '@testing-library/preact'

import Projects from './projects.component'

const mockNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}))

test('should render', () => {
    const { container } = render(<Projects />)

    expect(container).toMatchSnapshot()
})

test('should navigate to each project', () => {
    const { getByText } = render(<Projects />)

    fireEvent.click(getByText('asteroids game'))
    expect(mockNavigate).toHaveBeenCalledWith('/projects/pixijs/asteroids')

    fireEvent.click(getByText('babylon.js project'))
    expect(mockNavigate).toHaveBeenCalledWith('/projects/babylonjs')
})
