import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'

export default {
  input: 'src/index.js',

  plugins: [
    resolve(),
    babel(),
    commonjs(),
  ],
}
