const defaultExport = 'defaultExport';
const namedExport1 = 'namedExport1';
const namedExport2 = 'namedExport2';
const namedExport3 = 'namedExport3';

export function funcExport() {}

export const constExport = 'constExport';

// TODO: Why does this show errors? A test may be a good idea ;-P
// export defaultExportFrom from './12.modules-export-from';
// import defaultExportFrom from './12.modules-export-from';

export default defaultExport;
export { namedExport1, namedExport2, namedExport3 };
