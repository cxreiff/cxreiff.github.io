import { render } from '@testing-library/preact'

import { Loader } from './loader.component'

test('should render', () => {
    const { container } = render(<Loader />)

    expect(container).toMatchSnapshot()
})
