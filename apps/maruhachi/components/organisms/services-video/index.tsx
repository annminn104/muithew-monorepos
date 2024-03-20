'use client';

import React from 'react';

import { SectionServicesProps } from '@components/templates/section-services';
import { CloseCircleIcon, PlayCircleIcon } from '@styles/ui-mui/icons';

import { DialogContent, Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { AnimateUtils } from 'utils';

import * as S from './styles';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

type ServicesVideoProps = {
  i18n: Pick<SectionServicesProps, 'video'>;
};

const ServicesVideo: React.FC<ServicesVideoProps> = ({
  i18n: {
    video: { title }
  }
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <S.SerVidWrap>
      <S.SerVidTitle variant='h3' {...AnimateUtils.fadeIn(0.4)}>
        {title}
      </S.SerVidTitle>
      <S.SerVidButton onClick={handleClickOpen} {...AnimateUtils.fadeIn(0.5)}>
        <PlayCircleIcon />
        <S.SerVidPing />
      </S.SerVidButton>
      <S.SerVidDialog open={open} TransitionComponent={Transition} keepMounted onClose={handleClose} aria-describedby='section services video'>
        <S.SerVideoCloseBtn aria-label='close' onClick={handleClose}>
          <CloseCircleIcon />
        </S.SerVideoCloseBtn>
        <DialogContent>
          <iframe
            width='100%'
            height='100%'
            allowFullScreen
            src='https://www.youtube.com/embed/9K-82fomFhA?si=CdKZvIn-yBn6zb2j'
            title='YouTube video player "Maruhachinousan"'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          />
        </DialogContent>
      </S.SerVidDialog>
    </S.SerVidWrap>
  );
};

export default ServicesVideo;
