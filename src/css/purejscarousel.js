import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'b-carousel': {
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'em', 'value': 2 }, { 'unit': 'string', 'value': 'auto' }],
    'position': 'relative',
    'maxWidth': [{ 'unit': 'px', 'value': 960 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'screen&&<w960': {
      'width': [{ 'unit': 'px', 'value': 500 }]
    }
  },
  'b-carousel h2': {
    'fontWeight': 'bold',
    'marginBottom': [{ 'unit': 'em', 'value': 1 }]
  },
  'b-carousel p': {
    'maxWidth': [{ 'unit': '%H', 'value': 1 }]
  },
  'b-carousel__frame': {
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'overflow': 'hidden',
    'position': 'relative',
    'maxWidth': [{ 'unit': 'px', 'value': 960 }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'b-carousel__items': {
    'listStyle': 'none',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'px', 'value': 9999 }]
  },
  'b-carousel__items li': {
    'display': 'inline-block',
    'float': 'left',
    'transition': 'margin-left .25s linear',
    'width': [{ 'unit': 'px', 'value': 960 }],
    'padding': [{ 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 40 }]
  },
  'b-carousel__items li img': {
    'maxWidth': [{ 'unit': '%H', 'value': 1 }]
  },
  'b-carousel__nav-arrow_prev': {
    'background': '0 0',
    'border': [{ 'unit': 'px', 'value': 0 }],
    'color': '#ff2c2e',
    'cursor': 'pointer',
    'font': [{ 'unit': 'px', 'value': 200 }, { 'unit': 'em', 'value': 5 }, { 'unit': 'string', 'value': 'sans-serif' }],
    'outline': '0',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 100 }]
  },
  'b-carousel__nav-arrow_next': {
    'background': '0 0',
    'border': [{ 'unit': 'px', 'value': 0 }],
    'color': '#ff2c2e',
    'cursor': 'pointer',
    'font': [{ 'unit': 'px', 'value': 200 }, { 'unit': 'em', 'value': 5 }, { 'unit': 'string', 'value': 'sans-serif' }],
    'outline': '0',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 100 }]
  },
  'b-carousel__nav-arrow_prev:hover': {
    'color': '#8b0000'
  },
  'b-carousel__nav-arrow_next:hover': {
    'color': '#8b0000'
  },
  'b-carousel__nav-arrow_prev:focus': {
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'b-carousel__nav-arrow_next:focus': {
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'b-carousel__nav-arrow_prev': {
    'left': [{ 'unit': 'px', 'value': -75 }]
  },
  'b-carousel__nav-arrow_next': {
    'right': [{ 'unit': 'px', 'value': -75 }]
  },
  'b-carousel__nav-dots': {
    'display': 'inline-block',
    'height': [{ 'unit': 'em', 'value': 1.25 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'position': 'absolute',
    'bottom': [{ 'unit': 'em', 'value': 0.75 }],
    'right': [{ 'unit': 'em', 'value': 2 }]
  },
  'b-carousel__nav-dots li': {
    'background': '#555',
    'borderRadius': '.75em',
    'cursor': 'pointer',
    'display': 'inline-block',
    'height': [{ 'unit': 'em', 'value': 0.75 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.75 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.75 }],
    'width': [{ 'unit': 'em', 'value': 0.75 }]
  },
  'b-carousel__nav-dots liactive': {
    'background': '#fff',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': '#ddd' }]
  },
  'b-carousel__nav-dots li:hover': {
    'background': '#f5f5f5'
  },
  'b-carousel__button_stop': {
    'height': [{ 'unit': 'em', 'value': 2.25 }],
    'position': 'absolute',
    'bottom': [{ 'unit': 'em', 'value': 0.33 }],
    'left': [{ 'unit': 'em', 'value': 2 }],
    'textAlign': 'center',
    'width': [{ 'unit': 'em', 'value': 5 }]
  },
  'b-carousel__button_play': {
    'height': [{ 'unit': 'em', 'value': 2.25 }],
    'position': 'absolute',
    'bottom': [{ 'unit': 'em', 'value': 0.33 }],
    'left': [{ 'unit': 'em', 'value': 2 }],
    'textAlign': 'center',
    'width': [{ 'unit': 'em', 'value': 5 }]
  },
  'b-carousel__button_stop': {
    'left': [{ 'unit': 'px', 'value': 100 }]
  },
  'body': {
    'fontFamily': 'sans-serif',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'tooltip': {
    'background': '#fefac9',
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'dashed' }, { 'unit': 'string', 'value': '#f0db4f' }],
    'cursor': 'default',
    'display': 'inline-block',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }]
  },
  'img': {
    'display': 'inline-block'
  },
  'header': {
    'width': [{ 'unit': 'px', 'value': 800 }],
    'margin': [{ 'unit': 'px', 'value': 16 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 16 }, { 'unit': 'string', 'value': 'auto' }],
    'textAlign': 'center'
  },
  'h1': {
    'margin': [{ 'unit': 'px', 'value': 48 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'h3': {
    'fontSize': [{ 'unit': 'px', 'value': 17 }],
    'fontStyle': 'italic',
    'fontWeight': '400',
    'margin': [{ 'unit': 'px', 'value': 32 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 48 }, { 'unit': 'px', 'value': 0 }]
  },
  'section': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#f0db4f' }],
    'borderRadius': '3px',
    'lineHeight': [{ 'unit': 'px', 'value': 1.75 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 32 }, { 'unit': 'string', 'value': 'auto' }],
    'width': [{ 'unit': 'px', 'value': 800 }]
  },
  'section h2': {
    'background': '#fefac9',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#f0db4f' }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'section p': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 45 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 45 }]
  },
  'section ul': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 45 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 45 }]
  },
  'section ol': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 45 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 45 }]
  },
  'section ol': {
    'marginLeft': [{ 'unit': 'px', 'value': 25 }]
  },
  'section a': {
    'color': '#55acee',
    'textDecoration': 'none'
  },
  'section a:hover': {
    'textDecoration': 'underline'
  },
  'section table': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#eee' }],
    'borderCollapse': 'collapse',
    'margin': [{ 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 0 }]
  },
  'section table tr:nth-child(2n)': {
    'background': '#f5f5f5'
  },
  'section table th': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#eee' }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'section table td': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#eee' }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'section code': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }]
  },
  'smaller': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'fontStyle': 'italic'
  }
});
