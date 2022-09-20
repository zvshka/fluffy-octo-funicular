import { useState } from 'react';
import { Burger, Container, createStyles, Group, Header, UnstyledButton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Logo } from '../Logo/Logo';
import { NextLink } from '@mantine/next';

const useStyles = createStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));

const HeaderLink = ({ link }: any) => {
  const { classes, cx } = useStyles();
  return <UnstyledButton
      component={NextLink}
      key={link.label}
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: "" === link.link })}
  >
    {link.label}
  </UnstyledButton>;
};

export function HeaderSimple() {
  const links = [
    { link: '/', label: 'Главная' },
    { link: '/about', label: 'О нас' },
    { link: '/contacts', label: 'Контакты' },
    { link: '/catalog', label: 'Каталог' },
  ];

  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
      <HeaderLink link={link} active={active} setActive={setActive} key={link.label} />
  ));


  return (
      <Header height={60} mb={120}>
        <Container className={classes.header}>
          <Logo />
          <Group spacing="xl">
            <Group spacing={5} className={classes.links}>
              {items}
            </Group>

            <Group spacing={5} className={classes.links}>
              <HeaderLink link={{link: '/signin', label: "Вход"}}/>
              <HeaderLink link={{link: '/signup', label: "Регистрация"}}/>
            </Group>

          </Group>
          <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
        </Container>
      </Header>
  );
}