import { mount } from 'enzyme'

import wrapper from '~/src/app/wrapper'
import Layout from './layout.component'

describe('layout', () => {

    afterEach(() => {
        jest.restoreAllMocks()
    })

    it('should render', () => {
        const component = mount(wrapper(Layout))
        expect(component).toMatchSnapshot()
        component.unmount()
    })
})
