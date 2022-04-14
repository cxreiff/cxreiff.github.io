import { render } from '@testing-library/preact'

import * as ReactRouterDOM from 'react-router-dom'

import { Wrapper } from '~/src/app/wrapper'
import PostsContent from './postsContent.component'

type mockReactRouterDOM = typeof ReactRouterDOM
jest.mock('react-router-dom', () => ({
    ...jest.requireActual<mockReactRouterDOM>('react-router-dom'),
    useParams: jest.fn().mockReturnValue({ id: 'portfolio-site-design' }),
}))

test('should render', () => {
    const { getByText } = render(<PostsContent />, { wrapper: Wrapper })

    expect(getByText('Portfolio site approach and design')).toBeInTheDocument()
})
