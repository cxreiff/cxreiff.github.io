import { FC, Suspense, lazy } from 'react'
import { Route, Switch } from 'react-router-dom'
import { push } from 'connected-react-router'
import cn from 'classnames'

import { useAppSelector, useAppDispatch } from '~/src/app/store'

import Homepage from '~/src/features/homepage/homepage.component'
import Projects from '~/src/features/projects/projects.component'
import Photos from '~/src/features/photos/photos.component'
import Writing from '~/src/features/writing/writing.component'
import Resume from '~/src/features/resume/resume.component'
const Babylon = lazy(() => import('~/src/features/babylon/babylon.component'))

import Spinner from '~/src/common/spinner/spinner.component'

import * as styles from './layout.module.scss'

const Layout: FC = () => {
    
    const pathname = useAppSelector(state => state.router.location.pathname)
    
    const dispatch = useAppDispatch()
    const navigate = (pathname: string) => dispatch(push(pathname))

    const pages: { path: string, label: string, component: FC }[] = [
        {
            path: '/projects',
            label: 'projects',
            component: Projects,
        },
        {
            path: '/photos',
            label: 'photos',
            component: Photos,
        },
        {
            path: '/writing',
            label: 'writing',
            component: Writing,
        },
        {
            path: '/resume',
            label: 'resume',
            component: Resume,
        },
        {
            path: '/babylon',
            label: 'babylon',
            component: Babylon,
        }
    ]

    const comparePaths = (path: string, pathname: string) => (
        path.split('/')[1] === pathname.split('/')[1]
    )

    return (
        <div className={styles.layout}>
            <nav>
                <ul>
                    <li className={styles.logo}>
                        <a onClick={() => navigate('/')}>
                            jax reiff
                        </a>
                    </li>
                    {pages.map(({path, label}) => (
                        <li key={path} id={`nav-${label}`} className={cn(styles.navlink, {[styles.current]: comparePaths(path, pathname)})}>
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
                        <Route exact path="/" component={Homepage} />
                        {pages.map(({path, component}) => (
                            <Route key={path} path={path} component={component} />
                        ))}
                    </Switch>
                </Suspense>
            </main>
        </div>
    )
}

export default Layout
