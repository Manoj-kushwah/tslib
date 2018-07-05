import typescript from 'rollup-plugin-typescript';

export default {
    entry: './src/main/index.ts',
    dest: './dist/jtep.js',
    format: 'cjs',
    sourceMap: true,
    external: [
        'reflect-metadata'
    ],
    globals: {
        "reflect-metadata": "Reflect"
    },
    plugins: [
        typescript()
    ]
}