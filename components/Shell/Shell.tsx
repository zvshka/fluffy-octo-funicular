import React, { ReactElement } from 'react';
import { AppShell, useMantineTheme } from '@mantine/core';
import { HeaderSimple } from '../Header/Header';

export default function Shell({ children }: {
  children: ReactElement | ReactElement[] | string | undefined;
}) {
  const theme = useMantineTheme();
  return (
      <AppShell
          styles={{
            main: {
              background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2],
              paddingLeft: 0,
              paddingRight: 0,
            },
          }}
          navbarOffsetBreakpoint="sm"
          header={<HeaderSimple />}
      >
        {children}
      </AppShell>
  );
}
