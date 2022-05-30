import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Github, FileText } from 'lucide-preact'
import cn from 'classnames'

import { useAppSelector, useAppDispatch } from '~/src/app/store'
import { setTheme, Theme } from '~/src/features/theme/theme.slice'
import { Image } from '~/src/common/image/image.component'
import { ParagraphWithIcon } from '~/src/common/paragraphWithIcon/paragraphWithIcon.component'
import {
    IMAGE_URLS,
    RESUME_URL,
    GITHUB_URL,
    GITHUB_SITE_PROJECT_URL,
} from '~/src/utilities/constants'

import styles from './homepage.module.scss'

const Homepage: FC = () => {

    const dispatch = useAppDispatch()
    const dispatchSetTheme = (theme: Theme) => void dispatch(setTheme(theme))
    const theme = useAppSelector((state) => state.theme.theme)

    return (
        <section className={styles.homepage}>
            <Image
                className={styles.image}
                aspect={900/600}
                source={IMAGE_URLS.ABOUT_ME}
                alt={'Image of site author Jax Reiff.'}
            />
            <div className={styles.aboutme}>
                <header>
                    <h2>
                        About Me
                    </h2>
                    <span className={styles.theme_buttons}>
                        <span
                            className={cn(styles.reddish_button, {
                                [styles.current_theme]: theme === Theme.REDDISH,
                            })}
                            onClick={() => dispatchSetTheme(Theme.REDDISH)}
                        />
                        <span
                            className={cn(styles.greenish_button, {
                                [styles.current_theme]: theme === Theme.GREENISH,
                            })}
                            onClick={() => dispatchSetTheme(Theme.GREENISH)}
                        />
                        <span
                            className={cn(styles.bluish_button, {
                                [styles.current_theme]: theme === Theme.BLUISH,
                            })}
                            onClick={() => dispatchSetTheme(Theme.BLUISH)}
                        />
                    </span>
                </header>
                <p>
                    Hello! I am a software engineer specializing in front-end development. I have experience
                    building clients with tools like TypeScript and React, and have expertise across the full
                    stack as well.
                </p>
                <p>
                    This is my personal site, where I've put photos, writing, and various projects I've been
                    working on.
                </p>
                <p>
                    The site itself also serves as an example (and test environment) of some of my preferred
                    front-end technologies, libraries, and approaches. The source code for the site is
                    publically available <a href={GITHUB_SITE_PROJECT_URL}>here</a>, and links to resources
                    and libraries that I have found useful building the site can be
                    found <Link to={'/posts/portfolio-site-design'}>here</Link>.
                </p>
                <br />
                <ParagraphWithIcon icon={<FileText />}>
                    My front-end development résumé can be found <a href={RESUME_URL}>here</a>.
                </ParagraphWithIcon>
                <ParagraphWithIcon icon={<Github />}>
                    My GitHub profile can be found <a href={GITHUB_URL}>here</a>.
                </ParagraphWithIcon>
            </div>
        </section>
    )
}

export default Homepage
