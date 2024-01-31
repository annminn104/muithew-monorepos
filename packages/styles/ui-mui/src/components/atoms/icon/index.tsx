import React, { useState } from 'react';

import { Alert, IconButton, SvgIcon as MUIIcon, Snackbar, Tooltip, Typography } from '@mui/material';
import { IconUtils, IconsSortMock } from '@styles/ui-mui/src/modules/icon';
import { useCopyToClipboard } from '@utils/hooks';

import { icons } from '../../../assets/icons';
import * as S from './styled';

const notificationIcons = icons['notificationIcons'];
const arrowActionIcons = icons['arrowActionIcons'];
const businessStatisticIcons = icons['businessStatisticIcons'];
const designToolIcons = icons['designToolIcons'];
const noteDocumentIcons = icons['noteDocumentIcons'];
const likeIcons = icons['likeIcons'];
const foodKitchenIcons = icons['foodKitchenIcons'];
const schoolIcons = icons['schoolIcons'];
const natureTravelIcons = icons['natureTravelIcons'];
const userIcons = icons['userIcons'];
const shoppingECommerceIcons = icons['shoppingECommerceIcons'];
const textFormattingIcons = icons['textFormattingIcons'];
const buildingInfrastructureIcons = icons['buildingInfrastructureIcons'];
const settingsFineTuningIcons = icons['settingsFineTuningIcons'];
const networkItProgrammingIcons = icons['networkItProgrammingIcons'];
const homeFurnitureIcons = icons['homeFurnitureIcons'];

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
    { label: 'User', components: IconUtils.sortByName(userIcons, IconsSortMock.users) },
    { label: 'Shopping - ECommerce', components: IconUtils.sortByName(shoppingECommerceIcons, IconsSortMock.shoppingECommerce) },
    { label: 'Business - Statistic', components: IconUtils.sortByName(businessStatisticIcons, IconsSortMock.businessStatistic) },
    { label: 'Text formatting', components: IconUtils.sortByName(textFormattingIcons, IconsSortMock.textFormatting) },
    { label: 'Building - Infrastructure', components: IconUtils.sortByName(buildingInfrastructureIcons, IconsSortMock.buildingInfrastructure) },
    { label: 'Settings, Fine Tunning', components: IconUtils.sortByName(settingsFineTuningIcons, IconsSortMock.settingsFineTuning) },
    { label: 'Settings, Fine Tunning', components: IconUtils.sortByName(networkItProgrammingIcons, IconsSortMock.networkItProgramming) },
    { label: 'Home, Furniture', components: IconUtils.sortByName(homeFurnitureIcons, IconsSortMock.homeFurniture) }
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
