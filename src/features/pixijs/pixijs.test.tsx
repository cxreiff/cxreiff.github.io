import { render } from '@testing-library/preact'

import * as useMeasuredRef from '~/src/hooks/useMeasuredRef'
import * as common from '~/src/utilities/common'

import Pixijs from './pixijs.component'

jest.spyOn(useMeasuredRef, 'useMeasuredRef').mockImplementation(() => [
    { current: null },
    {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        toJSON: jest.fn(),
    },
])
jest.spyOn(common, 'isMobile').mockImplementation(() => true)

test('should render', () => {
    const { container } = render(<Pixijs />)

    expect(container).toMatchSnapshot()
})
