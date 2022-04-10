import { mount, ReactWrapper } from 'enzyme'

import { Wrapper } from '~/src/app/wrapper'
import { Card } from '~/src/common/card/card.component'
import Projects from './projects.component'

const mockNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}))

describe('projects', () => {

    let component: ReactWrapper<typeof Wrapper, void>

    beforeAll(() => {
        component = mount<typeof Wrapper, void>(
            <Wrapper>
                <Projects />
            </Wrapper>
        )
    })

    afterAll(() => {
        component.unmount()
    })

    afterEach(() => {
        jest.restoreAllMocks()
    })

    it('should render', () => {
        expect(component).toMatchSnapshot()
    })

    it('should navigate to each project', () => {
        const cards = component.find(Card)
        cards.at(0).children().first().simulate('click')
        expect(mockNavigate).toHaveBeenCalledWith('/projects/pixijs')
        cards.at(1).children().first().simulate('click')
        expect(mockNavigate).toHaveBeenCalledWith('/projects/babylonjs')
    })
})
