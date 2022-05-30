import { render, fireEvent } from '@testing-library/preact'

import { Card } from './card.component'

test('should render', () => {
    const { container, getAllByText } = render(
        <Card
            image={'test'}
            primary={'test'}
            secondary={'test'}
            tertiary={'test'}
        />
    )

    expect(getAllByText('test')).toHaveLength(3)
    expect(container).toMatchSnapshot()
})

test('should call provided callback', () => {

    const mockOnClickHandler = jest.fn()
    const { getAllByText } = render(
        <Card
            image={'test'}
            primary={'test'}
            secondary={'test'}
            tertiary={'test'}
            onClick={mockOnClickHandler}
        />
    )

    fireEvent.click(getAllByText('test')[0])
    
    expect(mockOnClickHandler).toHaveBeenCalled()
})