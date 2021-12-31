import { mount } from 'enzyme';

import wrapComponent from '~/src/utilities/wrapComponent';
import Layout from './layout.component';

describe('layout', () => {

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('should render', () => {
        const component = mount(wrapComponent(Layout));
        expect(component).toMatchSnapshot();
        component.unmount();
    });
});
