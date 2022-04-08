import { mount, ReactWrapper } from 'enzyme'

import { ImageLightbox } from './imageLightbox.component'

describe('imageLoader', () => {
    
    let component: ReactWrapper<typeof ImageLightbox, void>
    
    beforeEach(() => {
        component = mount<typeof ImageLightbox, void>(
            <ImageLightbox
                aspect={1/1}
                small={'test'}
                medium={'test'}
                large={'test'}
                alt={'test'}
                className={'test'}
            />
        )
    })
    
    it('should render', () => {
        expect(component).toMatchSnapshot()
    })

    it('should render lightbox', () => {
        component.find('div.test').simulate('click')
        expect(component).toMatchSnapshot()
    })

    it('should close lightbox', () => {
        component.find('div.test').simulate('click')
        component.find('.__react_modal_image__icon_menu').childAt(1).simulate('click')
        expect(component).toMatchSnapshot()
    })
})
