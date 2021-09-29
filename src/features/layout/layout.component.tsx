import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { push } from 'connected-react-router'
import cn from 'classnames'

import { useAppSelector, useAppDispatch } from '~/src/app/store'

import Homepage from '~/src/features/homepage/homepage.component'
import Projects from '~/src/features/projects/projects.component'
import Drawing from '~/src/features/drawing/drawing.component'
import Writing from '~/src/features/writing/writing.component'
import Resume from '~/src/features/resume/resume.component'

import styles from './layout.module.scss'

const Layout: React.FC = () => {
    
    const pathname = useAppSelector(state => state.router.location.pathname)
    
    const dispatch = useAppDispatch()
    const navigate = (pathname: string) => dispatch(push(pathname))

    const pages: { path: string, label: string, component: React.FC }[] = [
        {
            path: '/projects',
            label: 'projects',
            component: Projects,
        },
        {
            path: '/drawing',
            label: 'drawing',
            component: Drawing,
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
    ]

    const comparePaths = (path: string, pathname: string) => (
        path.split('/')[1] === pathname.split('/')[1]
    )

    return (
        <div>
            <nav className={styles.layoutnav}>
                <ul>
                    <li className={styles.logo}>
                        <a onClick={() => navigate('/')}>
                            jax reiff
                        </a>
                    </li>
                    {pages.map(({path, label}) => (
                        <li key={path} className={cn(styles.navlink, {[styles.current]: comparePaths(path, pathname)})}>
                            <a onClick={() => navigate(path)}>
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <main className={styles.layoutmain}>
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    {pages.map(({path, component}) => (
                        <Route key={path} path={path} component={component} />
                    ))}
                </Switch>
            </main>
        </div>
    )
}

export default Layout
