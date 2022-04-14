import { FC, useState } from 'react'
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
    const [expanded, setExpanded] = useState(false)

    const comparePaths = (path: string, pathname: string) => (
        path === pathname.split('/')[1]
    )

    return (
        <div className={styles.layout}>
            <nav aria-label={'primary'} className={cn({ [styles.expanded]: expanded })}>
                <button
                    aria-label={'expand navigation'}
                    id={'nav-expand'}
                    className={styles.expand_button}
                    onClick={() => setExpanded(!expanded)}
                >
                    <svg viewBox={'0 0 100 80'} width={'40'} height={'40'}>
                      <rect width={'100'} height="20" />
                      <rect y={'30'} width={'100'} height={'20'} />
                      <rect y={'60'} width={'100'} height={'20'} />
                    </svg>
                </button>
                <ul>
                    <li aria-label={'navigate to home'} className={styles.logo}>
                        <a onClick={() => navigate('')}>
                            jax reiff
                        </a>
                    </li>
                    {routes.filter(({ path }) => path).map(({ path }) => (
                        <li
                            key={path}
                            aria-label={`navigate to ${path}`}
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
