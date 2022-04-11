---
key: portfolio-site-design
title: Portfolio site approach and design
description: Frameworks, structure, tradeoffs, and my development, testing, build, and deploy process.
date: 2021-05-31
---

Here I've compiled a list of the tools and resources I've used for building this site.

------
## preact

- <https://preactjs.com/>

Given an established, widely used framework and a lesser used alternative, I feel the alternative has to make a very good technical case for itself to outweigh the established framework's advantages in documentation, community support, peer familiarity, etcetera. Preact offers speed and size advantages over React but these advantages could theoretically come at a high cost if I find myself spending lots of time debugging Preact-specific issues for which StackOverflow answers are sparser compared to those offered for React, or encountering compatibility issues with other frameworks that are not as prioritized due to a smaller user base. Plus, committing to an alternative can be costly if eventually support is dropped, and the project has to be migrated.

In practice however, I have found Preact to effectively argue its case by way of its excellent compatibility with React itself. With a couple of aliases to Preact's compatibility packages, React code can be perfectly valid Preact code and vice versa, and Preact can be swapped out for React in a couple of steps, without changing any of your actual code. This makes Preact an easily reversible decision, that never forces you to translate documentation or examples meant for React.

For this reason I've gone with Preact, and while compatibility with Jest required fiddling with some of the more arcane Jest configuration settings, it has been an overall smooth development process.

------
## redux

- <https://redux.js.org/>
- <https://redux-toolkit.js.org/>

I have used Redux for a number of professional projects, and have always been preferential to Redux's functional programming style, transparency, and debuggability. In the past, there has been a downside of a large amount of boilerplate code, and logic for a single feature or concern being spread across a number of files. However, these issues can be well addressed by the ["Ducks" pattern](https://github.com/erikras/ducks-modular-redux) and the Redux team's [Redux Toolkit](https://redux-toolkit.js.org/) package.

------
## jest

- <https://jestjs.io/>

I chose to use Jest due to my own existing familiarity with Jest, as well as the robust amount of documentation. However, due to repeated headaches getting Jest to play well with other tools, and [complications around ES Modules](https://github.com/facebook/jest/issues/9430) the future of which is unclear, it is on my list to look into alternatives to migrate to such as [Vitest](https://vitest.dev/). Currently Jest is working for my site, but it requires using Babel (which I'm using purely for Jest, not during the build process) and keeping an awkward list of excluded modules in Jest's 'transformIgnorePatterns' setting.

------
## husky & lint-staged

- <https://github.com/typicode/husky>
- <https://github.com/okonet/lint-staged>

By using lint-staged to run typechecking, linting, and tests against staged files, and using husky to require these checks run successfully before a commit, I've been able to prevent a number of bugs and linting errors from ever being checked into version control, as well as ensuring that the Jest snapshots checked into version control are always up-to-date. While type-checking, linting, and tests are also run remotely prior to deployment, catching these issues during a local commit is quicker and makes for a cleaner commit history.

------
## sass/scss

- <https://sass-lang.com/>

In my experience, Sass does more than just promote code reuse and provide stylesheet syntactical sugar- SCSS makes me more willing to experiment with style, because of the ease of which you can make a change and see it reflected across the site in a predictable, consistent way. When you use tools like Sass @mixin/@include to approach style in a more generic, programmatic way (how do I express the interactivity of elements stylistically across the site, rather than how do I make this one element appear interactive) you can then make changes to your generic style and see immediately how it reflects in every instance and edge case.

For example, a (simplified example) mixin like the following can be implemented and included where needed:
```scss
@mixin interactive($hover-bg, $active-bg) {
    cursor: pointer;
    
    @media (hover: hover) {
        &:hover {
            background: $hover-bg;
        }
        
        &:active {
            background: $active-bg;
        }
    }
}
```
...and then can be iterated on (perhaps you want to add a border to every interactive element?) without worrying about making sure those changes are consistent everywhere.

------
## typed-scss-modules

- <https://github.com/skovy/typed-scss-modules>

Type safety for your styles! Style rules silently not applying because of naming typos can be a thing of the past, because this package will generate type definitions for your imported SCSS files, meaning if you're importing and using styles like so:

```tsx
import styles from './style.module.scss'
...
<div className={styles.main}> Hello World! </div>
````
...next time you run 'tsc' TypeScript will make sure that 'main' actually exists in the definition of the imported style.

------

*[ more to be added... ]*
