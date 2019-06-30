var svgs = {
  triangle: {
    shape: (
      `<polygon
        strokeWidth="1px"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        points="14.921,2.27 28.667,25.5 1.175,25.5 "
      />`
    ),
    viewBox: '0 0 30 30',
    className: 'triangle'
  },
  circle: {
    shape: (
      `<path d="M15,30A15,15,0,1,1,30,15,15,15,0,0,1,15,30ZM15,6.23A8.77,8.77,0,1,0,23.77,15,8.77,8.77,0,0,0,15,6.23Z" />`
    ),
    viewBox: '0 0 30 30',
    className: 'circle'
  },
  arrowUp: {
    shape: (
      `<path d="M28.74,20.81H1.26a1.26,1.26,0,0,1-1-2L14.16.5a1.25,1.25,0,0,1,1-.5h0a1.24,1.24,0,0,1,1,.51L29.75,18.8a1.25,1.25,0,0,1-1,2ZM3.81,18.29H26.22L15.16,3.37Z" />
        <path d="M28.74,42H1.26a1.28,1.28,0,0,1-1.13-.71A1.26,1.26,0,0,1,.26,40l13.9-18.29a1.28,1.28,0,0,1,1-.5h0a1.24,1.24,0,0,1,1,.51L29.75,40a1.26,1.26,0,0,1,.12,1.32A1.28,1.28,0,0,1,28.74,42ZM3.81,39.47H26.22L15.16,24.55Z" />`
    ),
    viewBox: '0 0 30 42',
    className: 'arrowUp'
  },
  upDown: {
    shape: (
      `<path d="M28.74,44.58a1.28,1.28,0,0,1-1-.51L15.16,27.13l-12.89,17a1.26,1.26,0,1,1-2-1.53l13.9-18.29a1.34,1.34,0,0,1,1-.5,1.24,1.24,0,0,1,1,.51L29.75,42.56a1.27,1.27,0,0,1-1,2Z" />
        <path d="M14.83,20.82h0a1.28,1.28,0,0,1-1-.52L.25,2a1.27,1.27,0,0,1,2-1.51L14.84,17.45,27.73.5a1.26,1.26,0,0,1,2,1.53L15.84,20.32A1.28,1.28,0,0,1,14.83,20.82Z" />`
    ),
    viewBox: '0 0 30 44.58',
    className: 'upDown'
  },
  box: {
    shape: (
      `      <path d="M28,2V28H2V2H28m.13-2H1.88A1.88,1.88,0,0,0,0,1.88V28.13A1.88,1.88,0,0,0,1.88,30H28.13A1.87,1.87,0,0,0,30,28.13V1.88A1.88,1.88,0,0,0,28.13,0Z" />
`    ),
    viewBox: '0 0 30 30',
    className: 'box'
  },
  hexa: {
    shape: (
      `<polygon
        strokeLinejoin="round"
        strokeMiterlimit="10"
        points="27.5,21.904 15,28.809  2.5,21.904 2.5,8.095 15,1.19 27.5,8.095 "
      />`
    ),
    viewBox: '0 0 30 30',
    className: 'hexa'
  },
  cross: {
    shape: (
      `<path
        strokeWidth="3px"
        d="M60.5,50l34.8-34.8c2.9-2.9,2.9-7.6,0-10.5c-2.9-2.9-7.6-2.9-10.5,0L50,39.5L15.2,4.7c-2.9-2.9-7.6-2.9-10.5,0    c-2.9,2.9-2.9,7.6,0,10.5L39.5,50L4.7,84.8c-2.9,2.9-2.9,7.6,0,10.5c1.4,1.4,3.3,2.2,5.2,2.2s3.8-0.7,5.2-2.2L50,60.5l34.8,34.8    c1.4,1.4,3.3,2.2,5.2,2.2c1.9,0,3.8-0.7,5.2-2.2c2.9-2.9,2.9-7.6,0-10.5L60.5,50z"
      />`
    ),
    viewBox: '0 0 100 100',
    className: 'cross'
  },
}

const colors = {
  transparent: 'transparent',

  'blue-black': '#161719',
  'blue-grey': '#23262b',

  black: '#222b2f',
  'grey-darkest': '#273238',
  'grey-darker': '#364349',
  'grey-dark': '#70818a',
  grey: '#9babb4',
  'grey-light': '#dae4e9',
  'grey-lighter': '#f3f7f9',
  'grey-lightest': '#fafcfc',
  white: '#ffffff',

  'red-darkest': '#420806',
  'red-darker': '#6a1b19',
  'red-dark': '#cc1f1a',
  red: '#bf381a',
  'red-light': '#ef5753',
  'red-lighter': '#f9acaa',
  'red-lightest': '#fcebea',

  'orange-darkest': '#542605',
  'orange-darker': '#7f4012',
  'orange-dark': '#c1611f',
  orange: '#e07628',
  'orange-light': '#ffa31b',
  'orange-lighter': '#fcd9b6',
  'orange-lightest': '#fff5eb',

  'yellow-darkest': '#453411',
  'yellow-darker': '#684f1d',
  'yellow-dark': '#f2d024',
  yellow: '#e9af32',
  'yellow-light': '#fff382',
  'yellow-lighter': '#fff9c2',
  'yellow-lightest': '#fcfbeb',

  'green-darkest': '#032d19',
  'green-darker': '#0b4228',
  'green-dark': '#1f9d55',
  green: '#38c172',
  'green-light': '#51d88a',
  'green-lighter': '#a2f5bf',
  'green-lightest': '#e3fcec',

  'teal-darkest': '#0d3331',
  'teal-darker': '#174e4b',
  'teal-dark': '#38a89d',
  teal: '#4dc0b5',
  'teal-light': '#64d5ca',
  'teal-lighter': '#a0f0ed',
  'teal-lightest': '#e8fffe',

  'blue-darkest': '#0a224e',
  'blue-darker': '#103d60',
  'blue-dark': '#2779bd',
  blue: '#a0d8f1',
  'blue-light': '#6cb2eb',
  'blue-lighter': '#bcdefa',
  'blue-lightest': '#eff8ff',

  'indigo-darkest': '#191e38',
  'indigo-darker': '#2f365f',
  'indigo-dark': '#5661b3',
  indigo: '#6574cd',
  'indigo-light': '#7886d7',
  'indigo-lighter': '#b2b7ff',
  'indigo-lightest': '#e6e8ff',

  'purple-darkest': '#1f133f',
  'purple-darker': '#352465',
  'purple-dark': '#794acf',
  purple: '#9561e2',
  'purple-light': '#a779e9',
  'purple-lighter': '#d6bbfc',
  'purple-lightest': '#f3ebff',

  'pink-darkest': '#45051e',
  'pink-darker': '#72173a',
  'pink-dark': '#eb5286',
  pink: '#f66d9b',
  'pink-light': '#fa7ea8',
  'pink-lighter': '#ffbbca',
  'pink-lightest': '#ffebef',
}


export const darkSvgs = [
  {
    svg: svgs.arrowUp,
    style: {
      width: '2%',
      top: 15 + '%',
      left: 60 + '%',
      stroke: colors['grey-darkest'],
      fill: colors['grey-darkest']
    }
  },
  {
    svg: svgs.box,
    style: {
      width: '2.5%',
      top: 35 + '%',
      left: 85 + '%',
      stroke: colors['grey-darkest'],
      fill: colors['grey-darkest']
    }
  },
  {
    svg: svgs.circle,
    style: {
      width: '2%',
      top: 10 + '%',
      left: 90 + '%',
      stroke: colors['grey-darkest'],
      fill: colors['grey-darkest']
    }
  },
  {
    svg: svgs.cross,
    style: {
      width: '2%',
      top: 85 + '%',
      left: 85 + '%',
      stroke: colors['grey-darkest'],
      fill: colors['grey-darkest']
    }
  },
  {
    svg: svgs.hexa,
    style: {
      width: '2.5%',
      top: 60 + '%',
      left: 95 + '%',
      stroke: colors['grey-darkest'],
      fill: colors['transparent'],
      strokeWidth: 3
    }
  },
  {
    svg: svgs.triangle,
    style: {
      width: '2.5%',
      top: 15 + '%',
      left: 40 + '%',
      stroke: colors['grey-darkest'],
      fill: colors['transparent'],
      strokeWidth: 3
    }
  },
  {
    svg: svgs.upDown,
    style: {
      width: '2.5%',
      top: 90 + '%',
      left: 90 + '%',
      stroke: colors['grey-darkest'],
      fill: colors['grey-darkest']
    }
  }
];

const myColors = [
  colors['blue'],
  colors['indigo'],
  colors['orange'],
  colors['pink'],
  colors['purple'],
  colors['red-light'],
  colors['teal'],
  colors['orange-light'],
  colors['yellow'],
]

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getSvgs() {
  return [
    {
      svg: svgs.arrowUp,
      style: {
        width: '5%',
        top: 45 + '%',
        left: 10 + '%',
        stroke: colors['green'],
        fill: colors['green']
      }
    },
    {
      svg: svgs.box,
      style: {
        width: '2%',
        top: 40 + '%',
        left: 15 + '%',
        stroke: colors['red'],
        fill: colors['red']
      }
    },
    {
      svg: svgs.circle,
      style: {
        // width: '18rem',
        width: '20%',
        top: 10 + '%',
        left: -16 + '%',
        stroke: colors['yellow'],
        fill: colors['yellow']
      }
    },
    {
      svg: svgs.circle,
      style: {
        width: '3%',
        top: 10 + '%',
        left: 0 + '%',
        stroke: colors['blue-grey'],
        fill: colors['blue-grey']
      }
    },
    {
      svg: svgs.cross,
      style: {
        width: '5%',
        top: 20 + '%',
        left: 10 + '%',
        stroke: colors['pink'],
        strokeWidth: 4,
        fill: colors['transparent']
      }
    },
    {
      svg: svgs.hexa,
      style: {
        width: '13%',
        top: 70 + '%',
        left: 0 + '%',
        stroke: colors['orange'],
        fill: colors['transparent'],
      }
    },
    {
      svg: svgs.upDown,
      style: {
        width: '7%',
        top: 83 + '%',
        left: 30 + '%',
        stroke: colors['purple'],
        fill: colors['transparent'],
      }
    },
    {
      svg: svgs.triangle,
      style: {
        width: '4%',
        top: 10 + '%',
        left: 30 + '%',
        stroke: colors['white'],
        fill: colors['transparent'],
      }
    }
  ].map((val) => {
    const myColor = myColors[getRandomInt(0, 8)];
    val.style.stroke = myColor;
    if (val.style.fill != 'transparent') {
      val.style.fill = myColor;
    }
    return val;
  });
}
