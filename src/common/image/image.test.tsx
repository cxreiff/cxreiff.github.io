import { mount, ReactWrapper } from 'enzyme'

import { Image } from './image.component'

describe('imageLoader', () => {
    
    let component: ReactWrapper<typeof Image, void>
    
    beforeEach(() => {
        component = mount<typeof Image, void>(
            <Image
                aspect={1/1}
                source={'test'}
                alt={'test'}
                className={'test'}
            />
        )
    })

    afterEach(() => {
        component.unmount()
    })
    
    it('should render', () => {
        expect(component).toMatchSnapshot()
    })

    it('should reveal image on load', () => {
        component.find('img').simulate('load')
        expect(component).toMatchSnapshot()
    })
})
