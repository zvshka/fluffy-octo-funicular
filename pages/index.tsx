import { Box, createStyles, Stack, Title, Text } from '@mantine/core';
import { Page } from '../types/Page';
import { Carousel } from '@mantine/carousel';

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: '200px',
    width: '100%',
    backgroundColor: theme.colors.gray[4],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const CarouselItem = ({ children }: any) => {
  const { classes } = useStyles();
  return <Box className={classes.wrapper}>
    {children}
  </Box>;
};

const Home: Page = () => {
  const { classes } = useStyles();
  return (
      <Box>
        <Carousel
            withIndicators
            height={200}
            loop={true}
            slideSize="33.333333%"
            slideGap="md"
            align="center"
        >
          <Carousel.Slide className={classes.wrapper}>
            <Title>1</Title>
          </Carousel.Slide>
          <Carousel.Slide className={classes.wrapper}>
            <Title>2</Title>
          </Carousel.Slide>
          <Carousel.Slide className={classes.wrapper}>
            <Title>3</Title>
          </Carousel.Slide>
          <Carousel.Slide className={classes.wrapper}>
            <Title>4</Title>
          </Carousel.Slide>
          {/* ...other slides */}
        </Carousel>
        <Stack align="center" mt={150}>
          <Title>ELECTRO STORE</Title>
          <Title order={3}>
            Качественная электроника на любой вкус и цвет!
          </Title>
        </Stack>
      </Box>
  );
};

Home.title = 'Главная';

export default Home;
