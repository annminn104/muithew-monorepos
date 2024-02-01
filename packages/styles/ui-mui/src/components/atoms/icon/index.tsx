import React, { useState } from 'react';

import { Alert, IconButton, SvgIcon as MUIIcon, Snackbar, Tooltip, Typography } from '@mui/material';
import { IconsListingMock } from '@styles/ui-mui/src/modules/icon';
import { useCopyToClipboard } from '@utils/hooks';

import * as S from './styled';

const Icon = () => {
  const [value, copy] = useCopyToClipboard();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClipboardClick = (clipboard: string) => {
    copy(clipboard);
    setIsOpen(true);
  };

  return (
    <S.IconWrap>
      {IconsListingMock.map((icon, index) => (
        <S.IconBox component='fieldset' key={index}>
          <Typography component='legend' color='primary.main'>
            {icon.label} [{Object.values(icon.components).length}]
          </Typography>
          {Object.values(icon.components).map((item, index) => (
            <React.Fragment key={index}>
              <Tooltip title={item.name}>
                <IconButton onClick={() => handleClipboardClick(item.name)}>
                  <MUIIcon component={item.component} fontSize='large' />
                </IconButton>
              </Tooltip>
            </React.Fragment>
          ))}
        </S.IconBox>
      ))}
      <Snackbar open={isOpen} onClose={() => setIsOpen(false)} autoHideDuration={2000}>
        <Alert severity='success'>Copied {value} to clipboard</Alert>
      </Snackbar>
    </S.IconWrap>
  );
};

export default Icon;
