import { render, fireEvent } from '@testing-library/preact'

import PostsTile from './postsTile.component'

const mockNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}))

const renderComponent = () => render(
    <PostsTile
        id={'test'}
        post={{
            content: 'test',
            data: {
                key: 'test',
                title: 'test',
                description: 'test',
                date: '2020-01-01',
            }
        }}
    />
)

test('should render', () => {
    const { container } = renderComponent()

    expect(container).toMatchSnapshot()
})

test('should navigate to post content', () => {
    const { getByRole } = renderComponent()
    
    fireEvent.click(getByRole('article'))

    expect(mockNavigate).toHaveBeenCalled()
})
