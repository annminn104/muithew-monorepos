'use client';

import { useEffect, useRef, useState } from 'react';
import { useWindowSize } from 'usehooks-ts';

import { SectionServicesProps } from '@components/templates/section-services';
import { Grid } from '@mui/material';

import * as S from './styles';

type ServicesProductsProps = {
  i18n: Pick<SectionServicesProps, 'products'>;
};

const ServicesProducts: React.FC<ServicesProductsProps> = ({
  i18n: {
    products: { icon, subtitle, title, content }
  }
}) => {
  const [itemTextHeight, setItemTextHeight] = useState<number>(0);
  const { width = 0, height = 0 } = useWindowSize();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setItemTextHeight(ref.current.clientHeight);
  }, [width]);

  return (
    <S.SerProWrap clipPathHeight={itemTextHeight || 0}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <S.SerProBox>
            <S.SerProLogo {...icon} />
            <S.SerProSubtitle variant='h6'>{subtitle}</S.SerProSubtitle>
            <S.SerProTitle variant='h3'>{title}</S.SerProTitle>
          </S.SerProBox>
        </Grid>
        {content.map((item) => (
          <Grid item xs={3} key={item.key}>
            <S.SerProItem>
              <S.SerProItemImg {...item.img} />
              <S.SerProItemIcon {...item.icon} />
              <S.SerProItemText ref={ref}>
                <S.SerProItemTitle>{item.title}</S.SerProItemTitle>
                <S.SerProItemContent>{item.content}</S.SerProItemContent>
              </S.SerProItemText>
            </S.SerProItem>
          </Grid>
        ))}
      </Grid>
    </S.SerProWrap>
  );
};

export default ServicesProducts;
