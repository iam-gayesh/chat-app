import PropTypes from 'prop-types';
// @mui
import { Radio, FormControlLabel } from '@mui/material';

BoxMask.propTypes = {
  value: PropTypes.string, // PropTypes validation for the `value` prop
};

export default function BoxMask({ value }) {
  return (
    <FormControlLabel
      label=""
      value={value}
      control={<Radio sx={{ display: 'none' }} />} // Hidden Radio button
      sx={{
        m: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        position: 'absolute',
      }}
    />
  );
}
