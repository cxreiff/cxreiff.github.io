import { mount } from 'enzyme'

import Wrapper from '~/src/app/wrapper'
import Homepage from './homepage.component'

describe('homepage', () => {

    afterEach(() => {
        jest.restoreAllMocks()
    })

    it('should render', () => {
        const component = mount(
            <Wrapper>
                <Homepage />
            </Wrapper>
        )
        expect(component).toMatchSnapshot()
        component.unmount()
    })
})
