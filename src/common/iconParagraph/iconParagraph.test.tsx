import { render } from '@testing-library/preact'
import { Moon } from 'lucide-preact'

import { IconParagraph } from './iconParagraph.component'

test('should render', () => {
    const { container, getByRole, getByText } = render(
        <IconParagraph icon={<Moon role={'img'} />}>
            TEST
        </IconParagraph>
    )

    expect(getByRole('img')).toBeInTheDocument()
    expect(getByText('TEST')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
})
