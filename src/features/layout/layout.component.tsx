import { FC } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import cn from 'classnames'

import { RouteDefinition } from '~/src/app/routing'
import styles from './layout.module.scss'

type LayoutProps = {
    routes: RouteDefinition[],
}

export const Layout: FC<LayoutProps> = ({ children, routes }) => {
    
    const pathname = useLocation().pathname
    const navigate = useNavigate()

    const comparePaths = (path: string, pathname: string) => (
        path === pathname.split('/')[1]
    )

    return (
        <div className={styles.layout}>
            <nav aria-label={'primary'}>
                <ul>
                    <li className={styles.logo}>
                        <a onClick={() => navigate('/')}>
                            jax reiff
                        </a>
                    </li>
                    {routes.filter(({ path }) => path).map(({ path }) => (
                        <li
                            key={path}
                            id={`nav-${path}`}
                            className={cn(styles.navlink, {
                                [styles.current]: comparePaths(path, pathname)
                            })}
                        >
                            <a onClick={() => navigate(path)}>
                                {path}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <main>
                {children}
            </main>
        </div>
    )
}
