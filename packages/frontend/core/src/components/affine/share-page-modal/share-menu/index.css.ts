import { cssVar } from '@toeverything/theme';
import { cssVarV2 } from '@toeverything/theme/v2';
import { globalStyle, style } from '@vanilla-extract/css';
export const headerStyle = style({
  display: 'flex',
  alignItems: 'center',
  fontSize: cssVar('fontSm'),
  fontWeight: 600,
  lineHeight: '22px',
  padding: '0 4px',
  gap: '4px',
});
export const content = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});
export const menuStyle = style({
  width: '390px',
  height: 'auto',
  padding: '12px',
});
export const menuTriggerStyle = style({
  width: '150px',
  padding: '4px 10px',
  justifyContent: 'space-between',
});
export const menuItemStyle = style({
  padding: '4px',
});
export const publicItemRowStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});
export const publicMenuItemPrefixStyle = style({
  fontSize: cssVar('fontH5'),
  color: cssVarV2('icon/primary'),
  marginRight: '8px',
});
export const DoneIconStyle = style({
  color: cssVarV2('button/primary'),
  fontSize: cssVar('fontH5'),
  marginLeft: '8px',
});
export const exportItemStyle = style({
  padding: '4px',
  transition: 'all 0.3s',
});
export const copyLinkTriggerStyle = style({
  width: '100%',
  padding: '4px 12px',
  display: 'flex',
  justifyContent: 'end',
  alignItems: 'center',
  gap: '4px',
  position: 'relative',
  backgroundColor: cssVarV2('button/primary'),
  color: cssVarV2('button/pureWhiteText'),
  ':hover': {
    backgroundColor: cssVarV2('button/primary'),
    color: cssVarV2('button/pureWhiteText'),
  },
});
globalStyle(`${copyLinkTriggerStyle} svg`, {
  color: cssVarV2('button/pureWhiteText'),
  transform: 'translateX(2px)',
});
export const copyLinkLabelStyle = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translateX(-50%) translateY(-50%)',
  lineHeight: '20px',
});
export const copyLinkShortcutStyle = style({
  position: 'absolute',
  right: '36px',
  paddingRight: '8px',
  opacity: 0.5,
  lineHeight: '20px',
});
export const copyLinkMenuItemStyle = style({
  padding: '4px',
  transition: 'all 0.3s',
});
export const dividerStyle = style({
  width: '1px',
  height: '100%',
  backgroundColor: cssVarV2('button/innerBlackBorder'),
  position: 'absolute',
  right: '0',
});
export const descriptionStyle = style({
  wordWrap: 'break-word',
  fontSize: cssVar('fontXs'),
  lineHeight: '20px',
  color: cssVarV2('text/secondary'),
  textAlign: 'left',
  padding: '0 6px',
});
export const containerStyle = style({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  gap: '8px',
});
export const indicatorContainerStyle = style({
  position: 'relative',
});
export const titleContainerStyle = style({
  display: 'flex',
  alignItems: 'center',
  fontSize: cssVar('fontXs'),
  color: cssVarV2('text/secondary'),
  fontWeight: 400,
  padding: '8px 4px 0 4px',
});
export const columnContainerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
  gap: '8px',
});
export const rowContainerStyle = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '4px',
});
export const labelStyle = style({
  fontSize: cssVar('fontSm'),
  fontWeight: 500,
});
export const disableSharePage = style({
  color: cssVarV2('button/error'),
});
export const localSharePage = style({
  padding: '12px 8px',
  display: 'flex',
  alignItems: 'center',
  borderRadius: '8px',
  backgroundColor: cssVarV2('layer/background/secondary'),
  minHeight: '84px',
  position: 'relative',
});
export const cloudSvgContainer = style({
  width: '146px',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  position: 'absolute',
  bottom: '0',
  right: '0',
});
export const shareLinkStyle = style({
  padding: '4px',
  fontSize: cssVar('fontXs'),
  fontWeight: 500,
  lineHeight: '20px',
  transform: 'translateX(-4px)',
  gap: '4px',
});
globalStyle(`${shareLinkStyle} > span`, {
  color: cssVarV2('text/link'),
});
globalStyle(`${shareLinkStyle} > div > svg`, {
  color: cssVarV2('text/link'),
});
export const buttonContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  fontWeight: 500,
});
export const button = style({
  padding: '6px 8px',
  height: 32,
});
export const shortcutStyle = style({
  fontSize: cssVar('fontXs'),
  color: cssVarV2('text/secondary'),
  fontWeight: 400,
});
export const openWorkspaceSettingsStyle = style({
  color: cssVarV2('text/link'),
  fontSize: cssVar('fontXs'),
  fontWeight: 500,
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
  justifyContent: 'flex-start',
  width: '100%',
  padding: '4px',
  cursor: 'pointer',
});
globalStyle(`${openWorkspaceSettingsStyle} svg`, {
  color: cssVarV2('text/link'),
});
