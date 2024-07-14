import React from 'react';
import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Grid, RadioGroup, CardActionArea, Typography } from '@mui/material';
// hooks
import useSettings from '../../../hooks/useSettings';
// components
import BoxMask from './BoxMask';

// ----------------------------------------------------------------------

const BoxStyle = styled(CardActionArea)(({ theme }) => ({
  height: 48,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.disabled,
  border: `solid 1px ${theme.palette.grey[500_12]}`,
  borderRadius: Number(theme.shape.borderRadius) * 1.25,
}));

// ----------------------------------------------------------------------

export default function SettingFontPresets() {
  const {
    fontPresets,
    onChangeFont,
    fontSizePresets,
    onChangeFontSize,
    fontOptions,
    fontSizeOptions,
  } = useSettings();

  return (
    <>
      <Typography variant="subtitle1" sx={{ mb: 1 }}>
        Select Font
      </Typography>
      <RadioGroup
        name="fontPresets"
        value={fontPresets}
        onChange={onChangeFont}
      >
        <Grid dir="ltr" container spacing={1.5}>
          {fontOptions.map((font) => {
            const fontName = font.name;
            const fontValue = font.value;
            const isSelected = fontPresets === fontName;

            return (
              <Grid key={fontName} item xs={4}>
                <BoxStyle
                  sx={{
                    ...(isSelected && {
                      bgcolor: (theme) => theme.palette.action.selected,
                      border: `solid 2px ${(theme) => theme.palette.primary.main}`,
                    }),
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: fontValue,
                      transition: (theme) =>
                        theme.transitions.create('all', {
                          easing: theme.transitions.easing.easeInOut,
                          duration: theme.transitions.duration.shorter,
                        }),
                      ...(isSelected && { fontWeight: 'bold' }),
                    }}
                  >
                    {fontName}
                  </Typography>

                  <BoxMask value={fontName} />
                </BoxStyle>
              </Grid>
            );
          })}
        </Grid>
      </RadioGroup>

      <Typography variant="subtitle1" sx={{ mt: 2, mb: 1 }}>
        Select Font Size
      </Typography>
      <RadioGroup
        name="fontSizePresets"
        value={fontSizePresets}
        onChange={onChangeFontSize}
      >
        <Grid dir="ltr" container spacing={1.5}>
          {fontSizeOptions.map((fontSize) => {
            const sizeName = fontSize.name;
            const sizeValue = fontSize.value;
            const isSelected = fontSizePresets === sizeName;

            return (
              <Grid key={sizeName} item xs={4}>
                <BoxStyle
                  sx={{
                    ...(isSelected && {
                      bgcolor: (theme) => theme.palette.action.selected,
                      border: `solid 2px ${(theme) => theme.palette.primary.main}`,
                    }),
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: sizeValue,
                      transition: (theme) =>
                        theme.transitions.create('all', {
                          easing: theme.transitions.easing.easeInOut,
                          duration: theme.transitions.duration.shorter,
                        }),
                      ...(isSelected && { fontWeight: 'bold' }),
                    }}
                  >
                    {sizeName}
                  </Typography>

                  <BoxMask value={sizeName} />
                </BoxStyle>
              </Grid>
            );
          })}
        </Grid>
      </RadioGroup>
    </>
  );
}

SettingFontPresets.propTypes = {
  // PropTypes for validation
  fontPresets: PropTypes.string.isRequired,
  onChangeFont: PropTypes.func.isRequired,
  fontSizePresets: PropTypes.string.isRequired,
  onChangeFontSize: PropTypes.func.isRequired,
  fontOptions: PropTypes.array.isRequired,
  fontSizeOptions: PropTypes.array.isRequired,
};
