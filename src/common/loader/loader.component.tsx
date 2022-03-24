import { FC } from 'react'

/** TODO: Change to `import * as styles from...` to re-enable tree shaking
*  Currently disabling tree shaking for this import because of issue where
*  keyframes definition is removed in production builds.
*/
import styles from './loader.module.scss'

export const Loader: FC = () => (
    <div className={styles.loader}>
        {[1,2,3,4].map((key) => (
            <span key={key} />
        ))}
    </div>
)
