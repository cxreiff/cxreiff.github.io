module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    ['@babel/preset-typescript', { jsxPragma: 'h' }],
    ['@babel/preset-react', { pragma: 'h' }]
  ],
  plugins: [
    ['@babel/transform-react-jsx', {
      runtime: 'automatic',
      importSource: 'preact/compat',
    }]
  ],
}
