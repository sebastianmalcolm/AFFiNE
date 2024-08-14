import { cssVar } from '@toeverything/theme';
import { cssVarV2 } from '@toeverything/theme/v2';
import { style } from '@vanilla-extract/css';
export const settingWrapper = style({
  flexGrow: 1,
  display: 'flex',
  justifyContent: 'flex-end',
  minWidth: '150px',
  maxWidth: '250px',
});

export const menu = style({
  background: 'white',
  width: '250px',
  maxHeight: '30vh',
  overflowY: 'auto',
});

export const menuTrigger = style({
  textTransform: 'capitalize',
  fontWeight: 600,
  width: '250px',
});

export const snapshotContainer = style({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '24px',
});

export const snapshotTitle = style({
  marginBottom: '8px',
  fontSize: cssVar('fontSm'),
  fontWeight: 500,
  color: cssVarV2('text/secondary'),
});

export const snapshot = style({
  width: '100%',
  height: '180px',
  border: `1px solid ${cssVarV2('layer/border')}`,
  borderRadius: '4px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
