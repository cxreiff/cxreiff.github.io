import { mount, ReactWrapper } from 'enzyme'
import * as ReactRouterDOM from 'react-router-dom'

import { Wrapper } from '~/src/app/wrapper'
import PostsContent from './postsContent.component'

type mockReactRouterDOM = typeof ReactRouterDOM
jest.mock('react-router-dom', () => ({
    ...jest.requireActual<mockReactRouterDOM>('react-router-dom'),
    useParams: jest.fn().mockReturnValue({ id: 'portfolio-site-design' }),
}))

describe('posts', () => {

    let component: ReactWrapper<typeof Wrapper, void>

    beforeAll(() => {
        component = mount<typeof Wrapper, void>(
            <Wrapper>
                <PostsContent />
            </Wrapper>
        )
    })

    afterAll(() => {
        component.unmount()
    })

    it('should render', () => {
        expect(component.find(PostsContent)).toMatchSnapshot()
    })
})
