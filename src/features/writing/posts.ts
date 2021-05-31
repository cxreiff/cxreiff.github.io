import { readFileSync } from 'fs'

export interface Post {
    title: string,
    description: string,
    date: Date,
    content: string,
}

const MARKDOWN_DIRECTORY = 'assets/markdown'
const MARKDOWN_ENCODING = 'utf8'

const posts: {[index: string]: Post} = {
    'title-one': {
        title: 'Title 1',
        description: 'test 1 subtitle',
        date: new Date(2021, 5, 31),
        content: readFileSync(MARKDOWN_DIRECTORY + '/test1.md', MARKDOWN_ENCODING)
    },
    'title-two': {
        title: 'Title 2',
        description: 'test 2 subtitle',
        date: new Date(2021, 5, 24),
        content: readFileSync(MARKDOWN_DIRECTORY + '/test2.md', MARKDOWN_ENCODING)
    },
}

export default posts
