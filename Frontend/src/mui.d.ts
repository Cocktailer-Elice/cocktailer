import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    colors: {
      indigo4: string;
      indigo5: string;
      indigo6: string;
      indigo7: string;
      indigo8: string;
    };
  }
  interface ThemeOptions {
    colors?: {
      indigo4: string;
      indigo5: string;
      indigo6: string;
      indigo7: string;
      indigo8: string;
    };
  }
}
