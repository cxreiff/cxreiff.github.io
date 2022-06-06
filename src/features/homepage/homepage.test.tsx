import { render } from '@testing-library/preact'

import { Wrapper } from '~/src/app/wrapper'
import Homepage from './homepage.component'

test('should render', () => {
    const { container, getByAltText } = render(<Homepage />, { wrapper: Wrapper })

    expect(getByAltText('image of site author Jax Reiff')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
})
