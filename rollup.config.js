
import builtins from 'rollup-plugin-node-builtins';
import commonjs from 'rollup-plugin-commonjs';
import globals from 'rollup-plugin-node-globals';
import nodeResolve from 'rollup-plugin-node-resolve';
import { string } from 'rollup-plugin-string';
import json from 'rollup-plugin-json';

const nodeExternals = [
  'url', 'http', 'util', 'https', 'zlib', 'stream', 'path',
  'crypto', 'buffer', 'string_decoder', 'querystring', 'punycode',
  'child_process', 'events'
];

export default {
  server: {
    input: 'build/temp/server.js',
    external: Array.from(nodeExternals),
    output: {
      file: 'build/routes.js',
      format: 'cjs'
    },
    plugins: [
      string({
        include: `**/*.css`
      }),
      json(),
      nodeResolve({}),
      commonjs({}),
      globals(),
      builtins()
    ]
  }
};

