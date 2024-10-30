/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-duplicates */
/* eslint-disable no-unused-vars */
import * as importAs from './12.modules-export';

// 2.Import a single export from a module
import { namedExport1 } from './12.modules-export';

// 3.Import multiple exports from a module
import { namedExport2, namedExport3 } from './12.modules-export';

// 4.Import default export from a module
import defaultExport from './12.modules-export';

// 5.Import an export with an alias
import { namedExport1 as alias1 } from './12.modules-export';

import importAs2nd, { namedExport1 as something } from './12.modules-export';

// eslint-disable-next-line prefer-destructuring
const PI = Math.PI;

function add(...args) {
  return args.reduce((num, tot) => tot + num);
}

function multiply(...args) {
  return args.reduce((num, tot) => tot * num);
}

// private function
function print(msg) {
  console.log(msg);
}

export { PI, add, multiply };

// Default exports
// module 'my-module.js'

export default function addSomething(...args) {
  return args.reduce((num, tot) => tot + num);
}

// TODO: export func
// TODO: export const
// TODO: export ... from '...';

// Import Statement

// 1. Import an entire module's contents
