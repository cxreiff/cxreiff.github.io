import { readFileSync } from 'fs'
import matter from 'gray-matter'

export type Post = {
    content: string,
    data: {
        key: string,
        title: string,
        description: string,
        date: string,
    }
}

const MARKDOWN_ENCODING = 'utf8'
const MARKDOWN_POSTS = [
    readFileSync('src/assets/markdown/post1.md', MARKDOWN_ENCODING),
]

const posts = MARKDOWN_POSTS.reduce((previous, current) => {
    const post: Post = matter(current) as unknown as Post
    previous[post.data.key] = post
    return previous
}, {} as {[index: string]: Post})

export default posts
