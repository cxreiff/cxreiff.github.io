import { mount } from 'enzyme'

import wrapper from '~/src/app/wrapper'
import Homepage from './homepage.component'

describe('homepage', () => {

    afterEach(() => {
        jest.restoreAllMocks()
    })

    it('should render', () => {
        const component = mount(wrapper(Homepage))
        expect(component).toMatchSnapshot()
        component.unmount()
    })
})
