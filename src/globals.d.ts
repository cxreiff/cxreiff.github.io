declare module '*.md'
declare module "*.scss" {
  const styles: { [className: string]: string };
  export default styles;
}

declare module 'react-modal-image'
