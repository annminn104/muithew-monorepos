/* eslint-disable @typescript-eslint/no-explicit-any */

import { fromPairs, omit, sortBy } from 'lodash';
import React from 'react';

import { Grid, Typography, useTheme } from '@mui/material';

import * as S from './styled';

const Color: React.FC<unknown> = () => {
  const theme = useTheme();

  const keyOrder = ['common', 'primary', 'secondary', 'success', 'info', 'warning', 'error', 'maruhachi'];

  const colors: Record<string, any> = omit(theme.palette, [
    'mode',
    'action',
    'contrastThreshold',
    'tonalOffset',
    'text',
    'divider',
    'background',
    'action',
    'augmentColor',
    'getContrastText'
  ]);

  const sortedColors: Record<string, any> = fromPairs(
    sortBy(Object.keys(colors), (key) => {
      const orderIndex = keyOrder.indexOf(key);
      return orderIndex !== -1 ? orderIndex : keyOrder.length;
    }).map((key) => [key, colors[key]])
  );

  return (
    <S.ColorWrap>
      <S.ColorList container spacing={2}>
        {sortedColors &&
          Object.keys(sortedColors).map((category, index) => (
            <S.ColorItem item xs={12} key={category + index}>
              <S.ColorTitle variant='h5'>{category}</S.ColorTitle>
              <Grid container spacing={2}>
                {Object.keys(sortedColors[category] || {}).map((shade) => (
                  <S.ColorBox item xs={2} key={shade}>
                    <S.ColorBoxShadow>
                      <S.ColorBoxBackground style={{ backgroundColor: sortedColors[category][shade] }} />
                      <S.ColorName>
                        <Typography>
                          {category}.{shade}
                        </Typography>
                        <Typography>{sortedColors[category][shade]}</Typography>
                      </S.ColorName>
                    </S.ColorBoxShadow>
                  </S.ColorBox>
                ))}
              </Grid>
            </S.ColorItem>
          ))}
      </S.ColorList>
    </S.ColorWrap>
  );
};

export default Color;
