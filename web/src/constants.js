/**
 * @file constants
 * @copyright Copyright (c) 2018-2019 Dylan Miller and dfinityexplorer contributors
 * @license MIT License
 */

const Constants = Object.freeze({
  // Development server URIs
  // URI_SERVER_HTTP: 'http://localhost:4000',
  // URI_SERVER_WEB_SOCKETS: 'ws://localhost:4000',
  // Production server URIs
  URI_SERVER_HTTP: 'https://dfinityexplorer-server.herokuapp.com/',
  URI_SERVER_WEB_SOCKETS: 'wss://dfinityexplorer-server.herokuapp.com/',
  URI_CDN_FONT_AWESOME:
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
  // Remove any fonts that aren't used!!!
  URI_CDN_GOOGLE_FONTS:
    'https://fonts.googleapis.com/css?family=Istok+Web:400|Muli:200,300,400,500',
  URI_DFINITY_EXPLORER_TWITTER: 'https://twitter.com/dfinityexplorer',
  URI_DFINITY_EXPLORER_GITHUB: 'https://github.com/dfinityexplorer/dfinityexplorer',
  URI_ABOUT_APOLLO: 'https://www.apollographql.com/',
  URI_ABOUT_NOMICS: 'https://p.nomics.com/cryptocurrency-bitcoin-api',
  URI_ABOUT_DFINITY: 'https://dfinity.org/',
  URI_ABOUT_GRAPHQL: 'https://graphql.org/',
  URI_ABOUT_GRAPHQL_YOGA: 'https://github.com/prisma/graphql-yoga',
  URI_ABOUT_MATERIAL_UI: 'https://material-ui.com/',
  URI_ABOUT_POSTGRES: 'https://www.postgresql.org/',
  URI_ABOUT_PRISMA: 'https://www.prisma.io/',
  URI_ABOUT_REACT: 'https://reactjs.org/',
  URI_ABOUT_STYLED_COMPONENTS: 'https://www.styled-components.com/',
  URI_GITHUB_CONTRIBUTORS: 'https://github.com/orgs/dfinityexplorer/people',
  URI_GITHUB_DFINITY_EXPLORER_PROJECT: 'https://github.com/dfinityexplorer/dfinityexplorer',
  URI_GITHUB_DFINITY_EXPLORER_WIKI: 'https://github.com/dfinityexplorer/dfinityexplorer/wiki',
  URI_GITHUB_DYLAN: 'https://github.com/dylancm4',
  URI_GITHUB_MIT_LICENSE: 'https://github.com/dfinityexplorer/dfinityexplorer/blob/master/LICENSE',
  URI_GITHUB_TODD: 'https://github.com/toddkitchens',
  URI_NASA_EXPLORER: 'https://nssdc.gsfc.nasa.gov/multi/explorer.html',
  URI_TWITTER_DFINITY_EXPLORER: 'https://twitter.com/dfinityexplorer',
  // Remove colors that are not used!!!
  COLOR_DFINITY_BLACK: 'rgb(41, 42, 46)', // from dfinity.org/press
  COLOR_DFINITY_BLACK_LIGHTER: 'rgb(73, 75, 82)', //  COLOR_DFINITY_BLACK scaled lighter
  COLOR_DFINITY_BLACK_DARKER: 'rgb(27, 28, 31)', // COLOR_DFINITY_BLACK scaled darker
  COLOR_DFINITY_LIGHT_ORANGE: 'rgb(251, 176, 59)', // from dfinity.org style guide
  COLOR_DFINITY_DARK_ORANGE: 'rgb(241, 90, 36)', // from dfinity.org style guide
  COLOR_DFINITY_BLUE_400: '#29ABE2', // DFINITY logo blue
  COLOR_DFINITY_BLUE_500: '#009DDD',
  COLOR_DFINITY_BLUE_600: '#0090CF',
  COLOR_DFINITY_BLUE_700: '#007DBC',
  COLOR_DFINITY_BLUE_800: '#006DA8',
  COLOR_DFINITY_BLUE_900: '#004E88',
  COLOR_TEXT_LIGHT: 'white', // This should be removed, replaced with COLOR_DARK_TEXT!!!
  COLOR_DARK_TEXT: 'white',
  COLOR_DARK_TEXT_FADED: 'rgb(190, 191, 192)', // rgba(255, 255, 255, 0.7) on COLOR_DFINITY_BLACK, matches Material-UI Tab opacity
  COLOR_TEXT_DARKER: 'rgb(148, 149, 151)', // rgba(255, 255, 255, 0.5) on COLOR_DFINITY_BLACK
  COLOR_TEXT_DARKEST: 'rgb(106, 106, 109)', // rgba(255, 255, 255, 0.3) on COLOR_DFINITY_BLACK
  COLOR_LIGHT_TEXT: 'black',
  COLOR_LIGHT_TEXT_FADED: 'rgb(77, 77, 77)', // rgba(0, 0, 0, 0.7) on white, matches Material-UI Tab opacity
  COLOR_DARK_BODY_DARKER_MAC_OS: '#1B1B1B', // Calendar, Finder, iTunes, Messages
  COLOR_DARK_BODY_LIGHTER_MAC_OS: '#262626', // Finder
  COLOR_DARK_DRAWER_DIVIDER_MAC_OS: '#4B4B4B', // Calendar, Messages
  COLOR_DARK_DRAWER_DIVIDER_YOUTUBE: '#333333',
  COLOR_DARK_FOOTER_TEXT_ICON_NETFLIX: '#808080',
  COLOR_DARK_TEXT_MAC_OS: '#DCDCDC', // Calendar, iTunes
  COLOR_LIGHT_BODY_TEXT_DIM_GOOGLE: '#5F6368', // About, Account, Contacts, Docs, Drive, Gmail, Material
  COLOR_LIGHT_CHART_GOOGLE: '#9E9E9E', // Analytics, Firebase
  COLOR_LIGHT_DRAWER_DIVIDER_GOOGLE: '#E3E3E3', // Docs, Sheets
  COLOR_LIGHT_DRAWER_ICON_GOOGLE: '#5F6368', // Account, Docs, Drive, Calendar, Keep, Photos, Sheets
  COLOR_LIGHT_DRAWER_TEXT_GOOGLE: '#3C4043', // Account, Docs, Calendar, News, Photos, Sheets
  COLOR_TWITTER_BLUE: 'rgb(100, 164, 224)',
  COLOR_TWITTER_GREEN: 'rgb(131, 175, 97)',
  COLOR_TWITTER_ORANGE: 'rgb(244, 174, 78)',
  COLOR_TWITTER_PURPLE: 'rgb(165, 144, 211)',
  COLOR_GRAY_ON_WHITE: 'rgb(235, 235, 235)', // matches Material-UI IconButton hover
  FONT_PRIMARY: '\'Muli\', sans-serif',
  MATERIAL_FONT_SIZE_H1: '6rem', // 96px
  MATERIAL_FONT_SIZE_H2: '3.75rem', // 60px
  MATERIAL_FONT_SIZE_H3: '3rem', // 48px
  MATERIAL_FONT_SIZE_H4: '2.125rem', // 34px
  MATERIAL_FONT_SIZE_H5: '1.5rem', // 24px
  MATERIAL_FONT_SIZE_H6: '1.25rem', // 20px
  MATERIAL_FONT_SIZE_SUBTITLE_1: '1rem', // 16px
  MATERIAL_FONT_SIZE_SUBTITLE_2: '0.875rem', // 14px
  MATERIAL_FONT_SIZE_BODY_1: '1rem', // 16px
  MATERIAL_FONT_SIZE_BODY_2: '0.875rem', // 14px
  MATERIAL_FONT_SIZE_BUTTON: '0.875rem', // 14px
  MATERIAL_FONT_SIZE_CAPTION: '0.75rem', // 12px
  MATERIAL_FONT_SIZE_OVERLINE: '0.625rem', // 10px
  FONT_SIZE_TABLE_XS: '0.6875rem', // 11px
  BREAKPOINT_MIN_XS: 0,
  BREAKPOINT_MAX_XS: 599,
  BREAKPOINT_MIN_SM: 600,
  BREAKPOINT_MAX_SM: 959,
  BREAKPOINT_MIN_MD: 960,
  BREAKPOINT_MAX_MD: 1279,
  BREAKPOINT_MIN_LG: 1280,
  BREAKPOINT_MAX_LG: 1919,
  BREAKPOINT_MIN_XL: 1920,
  BREAKPOINT_LG_MAX_WIDTH: 1140, // from Bootstrap
  DRAWER_WIDTH: 256,
  FOOTER_HEIGHT: 96,
  ICON_SVG_PATH_TPS: 'M16 8V4l8 8-8 8v-4h-5V8h5zM9 8H7v8h2V8zM4.986 8H3v8h1.986V8zM1 8H0v8h1V8z',
  ICON_SVG_PATH_VOLUME: 'M24 14.182h-6.545v7.636H24zm-8.727-12H8.727v19.636h6.546zM6.545 21.818H0v-12h6.545z',
  ICON_SVG_PATH_MARKET_CAP: 'M24 3.621l-7.21 1.467 2.062 2.053-6.43 6.438-3.606-3.607L0 18.675l1.694 1.703 7.117-7.01 3.594 3.597 8.149-8.126 2.003 1.995z',
  ICON_SVG_PATH_BLOCK: 'M12 0L1 6v12.131L12 24l11-5.869V6.065L12 0zm7.91 6.646l-7.905 4.218L4.133 6.57l7.862-4.289 7.915 4.365zM3 8.23l8 4.363V21.2l-8-4.268V8.23zM13 21.2v-8.6l8-4.269v8.6L13 21.2z',
  ICON_SVG_PATH_PRICE: 'M19 16.166c0-4.289-4.465-5.483-7.887-7.091-2.079-1.079-1.816-3.658 1.162-3.832 1.652-.1 3.351.39 4.886.929l.724-3.295c-1.814-.551-3.437-.803-4.885-.841V0h-2v2.134c-3.89.535-5.968 2.975-5.968 5.7 0 4.876 5.693 5.62 7.556 6.487 2.54 1.136 2.07 3.5-.229 4.021-1.993.451-4.538-.337-6.45-1.079L5 20.551c1.787.923 3.931 1.417 6 1.453V24h2v-2.105c3.313-.464 6.005-2.293 6-5.729z',
  ICON_SVG_PATH_BLOCK_TIME: 'M13 12l-.688-4h-.609L11 12a1.99 1.99 0 0 0-1 1.723 2 2 0 0 0 4 0A1.99 1.99 0 0 0 13 12zm-1-8C6.478 4 2 8.477 2 14s4.478 10 10 10 10-4.477 10-10S17.522 4 12 4zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zM10 2.181V0h4v2.181c-1.438-.243-2.592-.238-4 0zm9.179 2.226L20.586 3 22 4.414l-1.321 1.321a12.134 12.134 0 0 0-1.5-1.328z',
  ICON_SVG_PATH_THEME_LIGHT: 'M.307 13.306a11.99 11.99 0 0 0 4.489 8.072 11.999 11.999 0 0 0 11.637 1.883 12.038 12.038 0 0 0 5.316-3.839 12.04 12.04 0 0 0 1.895-3.402.67.67 0 0 0-1.018-.775 9.122 9.122 0 0 1-2.15 1.124 9.114 9.114 0 0 1-8.842-1.43 9.11 9.11 0 0 1-3.412-6.136 9.11 9.11 0 0 1 1.926-6.751c.245-.308.52-.61.818-.9a.67.67 0 0 0-.572-1.144A12.044 12.044 0 0 0 2.84 4.425a11.987 11.987 0 0 0-2.533 8.88zm3.584-8.047a10.7 10.7 0 0 1 4.723-3.41l.027-.01a10.433 10.433 0 0 0-1.752 7.118 10.444 10.444 0 0 0 3.912 7.033 10.448 10.448 0 0 0 10.135 1.64c.196-.072.39-.15.583-.232A10.697 10.697 0 0 1 15.975 22 10.665 10.665 0 0 1 5.63 20.327a10.656 10.656 0 0 1-3.99-7.174A10.653 10.653 0 0 1 3.89 5.259z',
  ICON_SVG_PATH_THEME_DARK: 'M.307 13.306a11.99 11.99 0 0 0 4.489 8.072 11.999 11.999 0 0 0 11.637 1.883 12.038 12.038 0 0 0 5.316-3.839 12.04 12.04 0 0 0 1.895-3.402.67.67 0 0 0-1.018-.775 9.122 9.122 0 0 1-2.15 1.124 9.114 9.114 0 0 1-8.842-1.43 9.11 9.11 0 0 1-3.412-6.136 9.11 9.11 0 0 1 1.926-6.751c.245-.308.52-.61.818-.9a.67.67 0 0 0-.572-1.144A12.044 12.044 0 0 0 2.84 4.425a11.987 11.987 0 0 0-2.533 8.88z',
  ICON_SVG_PATH_BITCOIN: 'M21.018 9.648c.377-2.521-1.543-3.877-4.168-4.781l.852-3.416-2.08-.519-.829 3.326a86.982 86.982 0 0 0-1.666-.392l.835-3.348L11.884 0l-.852 3.415a69.57 69.57 0 0 1-1.328-.312l.002-.01-2.867-.717-.554 2.221s1.543.354 1.51.376c.843.21.995.767.97 1.21l-.97 3.89c.058.016.133.037.216.07l-.22-.054-1.36 5.451c-.103.256-.364.64-.953.494.02.03-1.511-.377-1.511-.377l-1.033 2.38 2.706.675c.504.126.997.258 1.483.382l-.86 3.455 2.076.519.853-3.419c.567.154 1.118.296 1.657.43l-.85 3.403 2.08.518.86-3.449c3.546.671 6.212.4 7.335-2.807.904-2.582-.045-4.071-1.91-5.042 1.358-.314 2.381-1.207 2.654-3.054zm-4.75 6.663c-.643 2.582-4.991 1.186-6.4.836l1.141-4.578c1.41.352 5.93 1.049 5.258 3.742zm.642-6.7c-.586 2.349-4.205 1.156-5.378.863l1.035-4.152c1.174.293 4.954.84 4.343 3.29z',
  ABOUT_PAGE_MARGIN_XS: 8,
  ABOUT_PAGE_MARGIN_SM: 48,
  ABOUT_PAGE_MARGIN_MD: 64,
  ABOUT_PAGE_MARGIN_LG: 128,
  HOME_PAGE_MARGIN_XS: 8,
  HOME_PAGE_MARGIN_SM_AND_UP: 32,
  // Care must be taken if these table heights are changed, to avoid a glitch that occurs with
  // certain heights where the row slide in has a 1px stutter following the animation.
  TABLE_ROW_HEIGHT_XS: 38,
  TABLE_ROW_HEIGHT_SM_AND_UP: 48,
  ABOUT_PAGE_PROJECT_ICONS_HEIGHT: 55,
  COINBASE_CHECKOUT_ID: '0d82d9e4-06c8-44b5-8f81-ef296be643e6',
  GOOGLE_ANALYTICS_TRACKING_ID: 'UA-138212575-1'
});

export default Constants;
