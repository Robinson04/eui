import { propUtilityForPlayground } from '../../services/playground';
import {
  EuiLoadingElastic,
  EuiLoadingChart,
  EuiLoadingKibana,
  EuiLoadingSpinner,
  EuiLoadingContent,
} from '../../../../src/components/';
import { PropTypes } from 'react-view';

export const loadingElasticConfig = () => {
  const docgenInfo = Array.isArray(EuiLoadingElastic.__docgenInfo)
    ? EuiLoadingElastic.__docgenInfo[0]
    : EuiLoadingElastic.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  return {
    config: {
      componentName: 'EuiLoadingElastic',
      props: propsToUse,
      scope: {
        EuiLoadingElastic,
      },
      imports: {
        '@inoft/eui': {
          named: ['EuiLoadingElastic'],
        },
      },
    },
  };
};

export const loadingChartConfig = () => {
  const docgenInfo = Array.isArray(EuiLoadingChart.__docgenInfo)
    ? EuiLoadingChart.__docgenInfo[0]
    : EuiLoadingChart.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  return {
    config: {
      componentName: 'EuiLoadingChart',
      props: propsToUse,
      scope: {
        EuiLoadingChart,
      },
      imports: {
        '@inoft/eui': {
          named: ['EuiLoadingChart'],
        },
      },
    },
  };
};

export const loadingKibanaConfig = () => {
  const docgenInfo = Array.isArray(EuiLoadingKibana.__docgenInfo)
    ? EuiLoadingKibana.__docgenInfo[0]
    : EuiLoadingKibana.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  return {
    config: {
      componentName: 'EuiLoadingKibana',
      props: propsToUse,
      scope: {
        EuiLoadingKibana,
      },
      imports: {
        '@inoft/eui': {
          named: ['EuiLoadingKibana'],
        },
      },
    },
  };
};

export const loadingSpinnerConfig = () => {
  const docgenInfo = Array.isArray(EuiLoadingSpinner.__docgenInfo)
    ? EuiLoadingSpinner.__docgenInfo[0]
    : EuiLoadingSpinner.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  return {
    config: {
      componentName: 'EuiLoadingSpinner',
      props: propsToUse,
      scope: {
        EuiLoadingSpinner,
      },
      imports: {
        '@inoft/eui': {
          named: ['EuiLoadingSpinner'],
        },
      },
    },
  };
};

export const loadingContentConfig = () => {
  const docgenInfo = Array.isArray(EuiLoadingContent.__docgenInfo)
    ? EuiLoadingContent.__docgenInfo[0]
    : EuiLoadingContent.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  propsToUse.lines = {
    ...propsToUse.lines,
    type: PropTypes.Number,
  };

  return {
    config: {
      componentName: 'EuiLoadingContent',
      props: propsToUse,
      scope: {
        EuiLoadingContent,
      },
      imports: {
        '@inoft/eui': {
          named: ['EuiLoadingContent'],
        },
      },
    },
  };
};
