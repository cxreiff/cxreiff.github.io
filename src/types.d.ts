declare module '*.md'

declare module '*.scss' {
  const styles: { [className: string]: string }
  export default styles
}

declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.glsl' {
  const value: string
  export default value
}
declare module '*.frag' {
  const value: string
  export default value
}
declare module '*.vert' {
  const value: string
  export default value
}

declare module 'react-modal-image'

declare module 'react-syntax-highlighter/dist/esm/languages/prism'
