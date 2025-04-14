import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'parent-node-issue',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: 'shell',
  },
  extras: {
    slotChildNodesFix: true,
    experimentalSlotFixes: true,
    experimentalScopedSlotChanges: true,
    cloneNodeFix: true,
  },
};
