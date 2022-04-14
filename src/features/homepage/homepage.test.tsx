import { render } from '@testing-library/preact'

import { Wrapper } from '~/src/app/wrapper'
import Homepage from './homepage.component'

test('should render', () => {
    const { container } = render(<Homepage />, { wrapper: Wrapper })

    expect(container).toMatchSnapshot()
})
