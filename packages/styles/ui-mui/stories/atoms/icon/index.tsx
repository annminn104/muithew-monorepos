import React, { useState } from 'react';

import * as arrowActionIcons from '@styles/ui-mui/src/assets/icons/arrows-action';
import * as designToolIcons from '@styles/ui-mui/src/assets/icons/design-tools';
import * as foodKitchenIcons from '@styles/ui-mui/src/assets/icons/food-kitchen';
import * as likeIcons from '@styles/ui-mui/src/assets/icons/likes';
import * as natureTravelIcons from '@styles/ui-mui/src/assets/icons/nature-travel';
import * as noteDocumentIcons from '@styles/ui-mui/src/assets/icons/notes-documents';
import * as notificationIcons from '@styles/ui-mui/src/assets/icons/notifications';
import * as schoolIcons from '@styles/ui-mui/src/assets/icons/school';
import * as userIcons from '@styles/ui-mui/src/assets/icons/users';

import { Alert, IconButton, SvgIcon as MUIIcon, Snackbar, Tooltip, Typography } from '@mui/material';
import { IconUtils, IconsSortMock } from '@styles/ui-mui/src/modules/icon';
import { useCopyToClipboard } from '@utils/hooks';

import * as S from './styled';

const Icon = () => {
  const [value, copy] = useCopyToClipboard();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const icons = [
    { label: 'Notifications', components: IconUtils.sortByName(notificationIcons, IconsSortMock.notifications) },
    { label: 'Notes - Documents', components: IconUtils.sortByName(noteDocumentIcons, IconsSortMock.noteDocuments) },
    { label: 'Arrows Action', components: IconUtils.sortByName(arrowActionIcons, IconsSortMock.arrowActions) },
    { label: 'Likes', components: IconUtils.sortByName(likeIcons, IconsSortMock.likes) },
    { label: 'Food - KitChen', components: IconUtils.sortByName(foodKitchenIcons, IconsSortMock.foodKitchen) },
    { label: 'Design - Tools', components: IconUtils.sortByName(designToolIcons, IconsSortMock.designTools) },
    { label: 'School', components: IconUtils.sortByName(schoolIcons, IconsSortMock.school) },
    { label: 'Nature - Travel', components: IconUtils.sortByName(natureTravelIcons, IconsSortMock.natureTravel) },
    { label: 'User', components: IconUtils.sortByName(userIcons, IconsSortMock.users) }
  ];

  const handleClipboardClick = (clipboard: string) => {
    copy(clipboard);
    setIsOpen(true);
  };

  return (
    <S.IconWrap>
      {icons.map((icon, index) => (
        <S.IconBox component='fieldset' key={index}>
          <Typography component='legend' color='primary.main'>
            {icon.label} [{Object.values(icon.components).length}]
          </Typography>
          {Object.values(icon.components).map((item, index) => (
            <React.Fragment key={index}>
              <Tooltip title={item.type.name}>
                <IconButton onClick={() => handleClipboardClick(item.type.name)}>
                  <MUIIcon component={item} fontSize='large' />
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
