import {
  propUtilityForPlayground,
  dummyFunction,
  iconValidator,
  createOptionalEnum,
  simulateFunction,
} from '../../services/playground';
import { EuiIcon } from '../../../../src/components/';

export default () => {
  const docgenInfo = Array.isArray(EuiIcon.__docgenInfo)
    ? EuiIcon.__docgenInfo[0]
    : EuiIcon.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  propsToUse.type = iconValidator(propsToUse.type);

  propsToUse.size = createOptionalEnum(propsToUse.size);

  propsToUse.onIconLoad = simulateFunction(propsToUse.onIconLoad);

  return {
    config: {
      componentName: 'EuiIcon',
      props: propsToUse,
      scope: {
        EuiIcon,
      },
      imports: {
        '@inoft/eui': {
          named: ['EuiIcon'],
        },
      },

      customProps: {
        onIconLoad: dummyFunction,
      },
    },
  };
};
