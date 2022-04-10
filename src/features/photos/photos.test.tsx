import { mount, ReactWrapper } from 'enzyme'

import { Wrapper } from '~/src/app/wrapper'
import Photos from './photos.component'

describe('photos', () => {

    let component: ReactWrapper<typeof Wrapper, void>
    
    beforeAll(() => {
        component = mount<typeof Wrapper, void>(
            <Wrapper>
                <Photos />
            </Wrapper>
        )
    })
    
    afterAll(() => {
        component.unmount()
    })

    it('should render', () => {
        expect(component.find(Photos)).toMatchSnapshot()
    })
})
