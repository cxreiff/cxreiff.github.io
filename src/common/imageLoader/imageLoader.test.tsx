import { mount, ReactWrapper } from 'enzyme'

import { ImageLoader } from './imageLoader.component'

describe('imageLoader', () => {
    
    let component: ReactWrapper<typeof ImageLoader, void>
    
    beforeEach(() => {
        component = mount<typeof ImageLoader, void>(
            <ImageLoader src={'test'} alt={'test'} className={'test'} />
        )
    })
    
    it('should render', () => {
        expect(component).toMatchSnapshot()
    })

    it('should render lightbox', () => {
        component.find('img').simulate('click')
        expect(component).toMatchSnapshot()
    })

    it('should close lightbox', () => {
        component.find('img').simulate('click')
        component.find('.__react_modal_image__icon_menu').childAt(2).simulate('click')
        expect(component).toMatchSnapshot()
    })
})
