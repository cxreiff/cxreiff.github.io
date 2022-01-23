import { FC, Suspense, useEffect, lazy } from 'react'
import { Route, Switch } from 'react-router-dom'
import { push } from 'connected-react-router'
import cn from 'classnames'

import { useAppSelector, useAppDispatch } from '~/src/app/store'

import Homepage from '~/src/features/homepage/homepage.component'
import Projects from '~/src/features/projects/projects.component'
import Photos from '~/src/features/photos/photos.component'
const Posts = lazy(() => import('~/src/features/posts/posts.component'))
import Resume from '~/src/features/resume/resume.component'

/* Commenting out while not being worked on. */
// const Babylon = lazy(() => import('~/src/features/babylon/babylon.component'))

import { Spinner } from '~/src/common/spinner/spinner.component'

import { DOCUMENT_TITLE_ROOT } from '~/src/utilities/constants'

import * as styles from './layout.module.scss'

type Page = {
    path: string,
    label: string,
    component: FC,
    children?: Page[],
}

const Layout: FC = () => {
    
    const pathname = useAppSelector(state => state.router.location.pathname)
    
    const dispatch = useAppDispatch()
    const navigate = (pathname: string) => dispatch(push(pathname))

    useEffect(() => {
        const baseRoute = pathname.split('/')[1]
        document.title = baseRoute ? `${DOCUMENT_TITLE_ROOT} — ${baseRoute}` : DOCUMENT_TITLE_ROOT
    }, [pathname])

    const pages: Page[] = [
        {
            path: '/projects',
            label: 'projects',
            component: Projects,
            /* Commenting out while not being worked on. */
            // children: [
            //     {
            //         path: '/babylon',
            //         label: 'babylon',
            //         component: Babylon,
            //     },
            // ],
        },
        {
            path: '/photos',
            label: 'photos',
            component: Photos,
        },
        {
            path: '/posts',
            label: 'posts',
            component: Posts,
        },
        {
            path: '/resume',
            label: 'resume',
            component: Resume,
        },
    ]

    const comparePaths = (path: string, pathname: string) => (
        path.split('/')[1] === pathname.split('/')[1]
    )
    
    const flattenPages = (pages: Page[], prefix = '') => (
        pages.reduce((flattened, { path, label, component, children }) => {
            if (children) {
                flattened.push(...flattenPages(children, prefix + path))
            }
            
            return flattened.concat({
                path: prefix + path,
                label,
                component,
            })
        }, [] as Page[])
    )

    return (
        <div className={styles.layout}>
            <nav className={styles.navbar} aria-label={'primary'}>
                <ul>
                    <li className={styles.logo}>
                        <a onClick={() => navigate('/')}>
                            jax reiff
                        </a>
                    </li>
                    {pages.map(({path, label}) => (
                        <li
                            key={path}
                            id={`nav-${label}`}
                            className={cn(styles.navlink, {[styles.current]: comparePaths(path, pathname)})}
                        >
                            <a onClick={() => navigate(path)}>
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <main>
                <Suspense fallback={<Spinner />}>
                    <Switch>
                        <Route exact path={'/'} component={Homepage} />
                        {flattenPages(pages, '').map(({ path, component }) => (
                            <Route key={path} path={path} component={component} />
                        ))}
                    </Switch>
                </Suspense>
            </main>
        </div>
    )
}

export default Layout
