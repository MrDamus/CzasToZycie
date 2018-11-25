import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  ':root': {
    // Colors
    'Primary': '#FF2C2E',
    'Highlight': 'rgba(254, 213, 198, 1)',
    'White': 'rgba(255, 255, 255, 1)',
    'OffWhite': 'rgba(255, 253, 252, 1)',
    'Grey1': 'rgba(245, 243, 242, 1)',
    'Grey2': 'rgba(235, 231, 230, 1)',
    'Grey3': 'rgba(89, 87, 86, 1)',
    'Grey4': 'rgba(66, 64, 64, 1)',
    'Black': 'rgb(17, 16, 16)',
    'Blue': 'rgb(8, 86, 253)',
    // Typography
    'FontFamily': 'TTCommons-Medium, -apple-system, BlinkMacSystemFont, 'avenir next', avenir, helvetica, 'helvetica neue', ubuntu, roboto, noto, 'segoe ui', arial, sans-serif',
    'LineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'FontSize': [{ 'unit': 'px', 'value': 18 }],
    'FontSizeM': '20px',
    'FontSizeL': '22px',
    'BodyFontWeight': '400',
    'BoldFontWeight': '700',
    // Sizing
    'SpacingNone': '0',
    'SpacingExtraSmall': '.25rem',
    'SpacingSmall': '.5rem',
    'SpacingMedium': '1rem',
    'SpacingLarge': '2rem',
    'SpacingExtraLarge': '4rem',
    'SpacingExtraExtraLarge': '8rem',
    'SpacingExtraExtraExtraLarge': '16rem',
    // Miscelaneous
    'BorderRadius': '.25rem',
    'BorderRadiusLarge': '.5rem',
    'HoverTransition': 'all 150ms ease'
  }
});
