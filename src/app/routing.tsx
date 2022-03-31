import { FC, ReactNode, Suspense, useEffect, lazy } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import { Loader } from '~/src/common/loader/loader.component'
import { DOCUMENT_TITLE_ROOT } from '~/src/utilities/constants'

import Homepage from '~/src/features/homepage/homepage.component'
import Projects from '~/src/features/projects/projects.component'
import Photos from '~/src/features/photos/photos.component'
import Resume from '~/src/features/resume/resume.component'
const Pixijs = lazy(() => import('~/src/features/pixijs/pixijs.component'))
const Posts = lazy(() => import('~/src/features/posts/posts.component'))
const PostsContent = lazy(() => import('~/src/features/posts/postsContent.component'))
const Babylonjs = lazy(() => import('~/src/features/babylonjs/babylonjs.component'))

export type RouteDefinition = {
    path: string,
    Component: FC,
    children?: RouteDefinition[],
}

export const ROUTES: RouteDefinition[] = [
    {
        path: '',
        Component: Homepage,
    },
    {
        path: 'projects',
        Component: Projects,
        children: [
            {
                path: 'pixijs',
                Component: Pixijs,
            },
            {
                path: 'babylonjs',
                Component: Babylonjs,
            },
        ],
    },
    {
        path: 'photos',
        Component: Photos,
    },
    {
        path: 'posts',
        Component: Posts,
        children: [
            {
                path: ':id',
                Component: PostsContent,
            }
        ]
    },
    {
        path: 'resume',
        Component: Resume,
    },
]

export const Routing: FC = () => {

    const { pathname } = useLocation()

    useEffect(() => {
        const baseRoute = pathname.split('/')[1]
        document.title = baseRoute ? `${DOCUMENT_TITLE_ROOT} — ${baseRoute}` : DOCUMENT_TITLE_ROOT
    }, [pathname])

    const renderRoutes = (routes: RouteDefinition[], prefix = '') => (
        routes.reduce((renderedRoutes, { path, Component, children }) => {
            const fullPath = `${prefix}/${path}`

            if (children) {
                renderedRoutes.push(...renderRoutes(children, fullPath))
            }
            
            return renderedRoutes.concat(
                <Route path={fullPath} element={<Component />} />
            )
        }, [] as ReactNode[])
    )

    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                {renderRoutes(ROUTES)}
            </Routes>
        </Suspense>
    )
}
