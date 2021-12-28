import React from 'react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import { shallow } from 'enzyme'

import Homepage from './homepage.component'

describe('homepage', () => {

    const mockStore = configureMockStore()

    afterEach(() => {
        jest.restoreAllMocks()
    })

    it('should render', () => {
        const store = mockStore({
          counter: 0,
        })
        const component = shallow(
            //@ts-ignore
            <Provider store={store}>
                <Homepage />
            </Provider>
        )
        expect(component).toMatchSnapshot()
    })
})
