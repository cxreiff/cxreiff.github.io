import { shallow } from 'enzyme'

import { Loader } from './loader.component'

describe('loader', () => {
  it('should render', () => {
    const component = shallow(<Loader />)
    expect(component).toMatchSnapshot()
  })
})
