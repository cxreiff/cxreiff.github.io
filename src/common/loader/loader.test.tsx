import { mount, ReactWrapper } from 'enzyme'

import { Loader } from './loader.component'

describe('loader', () => {

  let component: ReactWrapper<typeof Loader, void>

  beforeEach(() => {
    component = mount<typeof Loader, void>(
      <Loader />
    )
  })

  afterEach(() => {
    component.unmount()
  })

  it('should render', () => {
    expect(component).toMatchSnapshot()
  })
})
