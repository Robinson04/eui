import React, { useContext, Fragment } from 'react';
import cloneDeep from 'lodash/cloneDeep';
import { ThemeContext } from '../../components';
import {
  Chart,
  BarSeries,
  Settings,
  LineSeries,
  AreaSeries,
} from '@inoft/charts';

import {
  EUI_CHARTS_THEME_DARK,
  EUI_CHARTS_THEME_LIGHT,
  EUI_SPARKLINE_THEME_PARTIAL,
} from '../../../../src/themes/charts/themes';

import {
  EuiPanel,
  EuiStat,
  EuiFlexGrid,
  EuiFlexItem,
  EuiIcon,
  EuiSpacer,
  EuiText,
} from '../../../../src/components';

import { TIME_DATA_SMALL } from './data';
import {
  euiPaletteForDarkBackground,
  euiPaletteForLightBackground,
} from '../../../../src/services';

export const Sparklines = () => {
  const themeContext = useContext(ThemeContext);
  const isDarkTheme = themeContext.theme.includes('dark');

  const theme = [
    EUI_SPARKLINE_THEME_PARTIAL,
    isDarkTheme ? EUI_CHARTS_THEME_DARK.theme : EUI_CHARTS_THEME_LIGHT.theme,
  ];

  const TIME_DATA_SMALL_REVERSE = cloneDeep(TIME_DATA_SMALL).reverse();
  const TIME_DATA_SMALL_REVERSE_MAJOR = cloneDeep(TIME_DATA_SMALL_REVERSE);
  TIME_DATA_SMALL_REVERSE_MAJOR[
    TIME_DATA_SMALL_REVERSE_MAJOR.length - 1
  ][1] = -100;

  return (
    <Fragment>
      <EuiFlexGrid columns={4} responsive={false}>
        <EuiFlexItem>
          <EuiPanel>
            <EuiStat title="" description="Number of things" textAlign="right">
              <EuiSpacer size="s" />
              <Chart size={{ height: 64 }}>
                <Settings theme={theme} showLegend={false} tooltip="none" />
                <BarSeries
                  id="numbers"
                  data={TIME_DATA_SMALL}
                  xAccessor={0}
                  yAccessors={[1]}
                  color={[
                    isDarkTheme
                      ? euiPaletteForDarkBackground()[1]
                      : euiPaletteForLightBackground()[1],
                  ]}
                />
              </Chart>
            </EuiStat>
          </EuiPanel>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiPanel>
            <EuiStat
              title=""
              description="Increase over time"
              titleColor="secondary"
              textAlign="right">
              <EuiSpacer size="s" />
              <Chart size={{ height: 48 }}>
                <Settings theme={theme} showLegend={false} tooltip="none" />
                <LineSeries
                  id="increase"
                  data={TIME_DATA_SMALL}
                  xAccessor={0}
                  yAccessors={[1]}
                  color={[
                    isDarkTheme
                      ? euiPaletteForDarkBackground()[1]
                      : euiPaletteForLightBackground()[1],
                  ]}
                />
              </Chart>
              <EuiSpacer size="s" />
              <EuiText size="xs" color="secondary">
                <EuiIcon type="sortUp" /> <strong>15%</strong>
              </EuiText>
            </EuiStat>
          </EuiPanel>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiPanel>
            <EuiStat
              title={
                <span>
                  <EuiIcon size="xl" type="sortDown" /> 15%
                </span>
              }
              description="Major decrease over time"
              titleColor="danger"
              textAlign="right">
              <EuiSpacer size="s" />
              <Chart size={{ height: 16 }}>
                <Settings theme={theme} showLegend={false} tooltip="none" />
                <LineSeries
                  id="major"
                  data={TIME_DATA_SMALL_REVERSE_MAJOR}
                  xAccessor={0}
                  yAccessors={[1]}
                  color={[
                    isDarkTheme
                      ? euiPaletteForDarkBackground()[3]
                      : euiPaletteForLightBackground()[3],
                  ]}
                />
              </Chart>
            </EuiStat>
          </EuiPanel>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiPanel>
            <EuiStat
              title=""
              description="Subtle decrease"
              titleColor="danger"
              textAlign="right">
              <EuiSpacer size="s" />
              <Chart size={{ height: 48 }}>
                <Settings theme={theme} showLegend={false} tooltip="none" />
                <AreaSeries
                  id="subtle"
                  data={TIME_DATA_SMALL_REVERSE}
                  xAccessor={0}
                  yAccessors={[1]}
                  color={[
                    isDarkTheme
                      ? euiPaletteForDarkBackground()[3]
                      : euiPaletteForLightBackground()[3],
                  ]}
                />
              </Chart>
              <EuiSpacer size="s" />
              <EuiText size="xs" color="danger">
                - 15 points since last Tuesday
              </EuiText>
            </EuiStat>
          </EuiPanel>
        </EuiFlexItem>
      </EuiFlexGrid>
    </Fragment>
  );
};
