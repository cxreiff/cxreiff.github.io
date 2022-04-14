import '@testing-library/jest-dom'

import fetch from 'jest-mock-fetch'
global.fetch = fetch as jest.Mock
