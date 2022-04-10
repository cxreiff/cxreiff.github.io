import { mount, ReactWrapper } from 'enzyme'

import { Card } from './card.component'

describe('card', () => {
    
    let component: ReactWrapper<typeof Card, void>
    let mockFunction: jest.Mock

    beforeEach(() => {
        mockFunction = jest.fn()
        component = mount<typeof Card, void>(
            <Card
                image={'test'}
                primary={'test'}
                secondary={'test'}
                tertiary={'test'}
                onClick={mockFunction}
            />
        )
    })

    afterEach(() => {
        component.unmount()
    })
    
    it('should render', () => {
        expect(component).toMatchSnapshot()
    })

    it('should call provided callback', () => {
        component.find('article').simulate('click')
        expect(mockFunction.mock.calls.length).toBe(1)
    })
})
