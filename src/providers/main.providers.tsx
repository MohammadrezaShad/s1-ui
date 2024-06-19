'use client';

import React from 'react';
import {Toaster} from 'react-hot-toast';

import {DEFAULT_THEME, ThemeType} from '@/constants';
import {LegendProvider, QueryClientProvider, ThemeProvider} from '@/providers';

interface MainProvidersProps {
  children: React.ReactNode;
  theme?: ThemeType;
}

export default function MainProviders({children, theme}: MainProvidersProps) {
  return (
    <LegendProvider>
      <QueryClientProvider>
        <ThemeProvider theme={theme || DEFAULT_THEME}>
          <Toaster />
          {children}
        </ThemeProvider>
      </QueryClientProvider>
    </LegendProvider>
  );
}
