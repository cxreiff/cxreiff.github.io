import { mount } from 'enzyme';

import wrapComponent from '~/src/utilities/wrapComponent'
import Homepage from './homepage.component';

describe('homepage', () => {

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('should render', () => {
        const component = mount(wrapComponent(Homepage));
        expect(component).toMatchSnapshot();
        component.unmount();
    });
});
