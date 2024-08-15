import type { FrameworkProvider } from '@toeverything/infra';

export function createEdgelessElementToolbarWidgetConfig(
  _framework: FrameworkProvider
) {
  return {
    configureMoreMenu: () => {
      return [];
    },
  };
}
