import modularScale from 'modular-scale';

export default {
  fontSize: (n) => {
    const fs = modularScale({
      base: 1,
      ratio: 'majorThird',
    });
    return `${fs(n)}rem`;
  },
  spacing: (n) => {
    const ms = modularScale({
      base: 1,
      ratio: 'goldenSection',
    });
    return `${ms(n)}rem`;
  },
  color: {
    foreground: '#262626',
    background: '#fafafa',
    link: '#003569',
    linkHover: '#23527c',
    overlay: 'rgba(0,0,0,.5)',
  },
};
