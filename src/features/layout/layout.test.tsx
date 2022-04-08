import { mount, ReactWrapper } from 'enzyme'

import { Wrapper } from '~/src/app/wrapper'
import { ROUTES } from '~/src/app/routing'
import { Layout } from './layout.component'

describe('layout', () => {
    
    let component: ReactWrapper<typeof Wrapper, void>
    
    beforeAll(() => {
        component = mount<typeof Wrapper, void>(
            <Wrapper>
                <Layout routes={ROUTES} />
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
        expect(component.find(Layout)).toMatchSnapshot()
    })
    
    it('should navigate to projects tab', () => {
        component.find('#nav-projects>a').simulate('click')
        expect(component.find(Layout)).toMatchSnapshot()
    })
    
    it('should navigate to photos tab', () => {
        component.find('#nav-photos>a').simulate('click')
        expect(component.find(Layout)).toMatchSnapshot()
    })

    it('should navigate to posts tab', () => {
        component.find('#nav-posts>a').simulate('click')
        expect(component.find(Layout)).toMatchSnapshot()
    })
})
