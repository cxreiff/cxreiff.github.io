import { render } from '@testing-library/preact'
import fetch from 'jest-mock-fetch'

import { Wrapper } from '~/src/app/wrapper'
import Photos from './photos.component'

afterEach(() => fetch.reset())

test('should render', async () => {

    const { container, findByRole } = render(<Photos />, { wrapper: Wrapper })

    fetch.mockResponse({
        text: () => `
            <?xml version="1.0" encoding="UTF-8"?>
            <ListBucketResult>
            <Contents>
            <Key>photos/sm_photo_00.png</Key>
            </Contents>
            </ListBucketResult>
        `
    })

    expect(await findByRole('article')).toBeInTheDocument()

    expect(container).toMatchSnapshot()
})
