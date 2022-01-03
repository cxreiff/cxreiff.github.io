import { shallow } from 'enzyme'

import Spinner from './spinner.component'

describe('spinner', () => {
  it('should render', () => {
    const component = shallow(<Spinner />)
    expect(component).toMatchSnapshot()
  })
})
