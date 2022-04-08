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
    
    it('should render', () => {
        expect(component).toMatchSnapshot()
    })
})
