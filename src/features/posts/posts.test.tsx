import { render } from '@testing-library/preact'

import { Wrapper } from '~/src/app/wrapper'
import Posts from './posts.component'

test('should render', () => {
    const { container, getByRole } = render(<Posts />, { wrapper: Wrapper })

    expect(getByRole('article')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
})
