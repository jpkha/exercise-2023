import localFont from "next/font/local";

export const graphikFont = localFont({
  src: [
    {
      path: './Graphik/Graphik-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Graphik/Graphik-Semibold.ttf',
      weight: '600',
      style: 'normal',
    }
  ],
  variable: '--font-graphik',
  display: 'swap',
});
export const interFont = localFont({
  src: [
    {
      path: './Inter/Inter-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Inter/Inter-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-inter',
  display: 'swap',
});
