import next from 'eslint-config-next'

const config = [
  { ignores: ['.next/**', 'node_modules/**', 'legacy/**', 'scripts/**'] },
  ...next,
]

export default config
