import { mount, ReactWrapper } from 'enzyme'

import { Wrapper } from '~/src/app/wrapper'
import { Card } from '~/src/common/card/card.component'
import Posts from './posts.component'

const mockNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}))

describe('posts', () => {

    let component: ReactWrapper<typeof Wrapper, void>

    beforeAll(() => {
        component = mount<typeof Wrapper, void>(
            <Wrapper>
                <Posts />
            </Wrapper>
        )
    })

    afterAll(() => {
        component.unmount()
    })

    afterEach(() => {
        jest.resetAllMocks()
    })

    it('should render', () => {
        expect(component.find(Posts)).toMatchSnapshot()
    })

    it('should navigate to post content', () => {
        component.find(Card).first().children().first().simulate('click')
        expect(mockNavigate).toHaveBeenCalled()
        expect(component.find(Posts)).toMatchSnapshot()
    })
})
