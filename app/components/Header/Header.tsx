import { ThemeSwitch } from '../ThemeSwitch/themeSwitch';
import { useStyles } from './Header.styles';
import { Stack, Button, Avatar, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from 'hooks/useMediaQuery';
import { H1, P } from '../Text';
import { screenSizes } from '~/theme';
import { openContextModal } from '@mantine/modals';

const Header = () => {
    const { classes } = useStyles();

    const theme = useMantineTheme();
    const isSmallScreen = useMediaQuery(screenSizes.largeMobile);

    return (
        <>
            <Stack>
                <div className={classes.titleContainer}>
                    <H1
                        variant="gradient"
                        gradient={{
                            from:
                                theme.colorScheme === 'dark'
                                    ? 'white'
                                    : 'black',
                            to: 'red',
                            deg: 45,
                        }}
                    >
                        Oliver White
                    </H1>
                    <ThemeSwitch />
                </div>
                <div className={classes.buttonContainer}>
                    <a
                        href="/files/OliverWhiteResume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button
                            size={isSmallScreen ? 'md' : 'lg'}
                            color="red"
                            compact={isSmallScreen}
                            variant="outline"
                        >
                            Download PDF Resume
                        </Button>
                    </a>

                    <Button
                        onClick={() =>
                            openContextModal({
                                modal: 'contact',
                                title: 'Contact Me',
                                innerProps: {},
                            })
                        }
                        size={isSmallScreen ? 'md' : 'lg'}
                        color="red"
                        compact={isSmallScreen}
                        variant="outline"
                    >
                        Contact
                    </Button>
                </div>
                <div className={classes.avatarContainer}>
                    <Avatar
                        radius="xl"
                        size="xl"
                        color="red"
                        src="images/author_.png"
                        alt="A picture of me!"
                        sx={{ img: { height: '84px', width: '84px' } }}
                    />
                    <P>
                        I am Oliver White and I am a Software Developer with 5
                        years of experience leading and contributing to a wide
                        variety of projects. I have a degree in Computer
                        Engineering with a specialization in Software
                        Engineering. I am experienced with many different fields
                        from computer hardware to cloud-based software design!
                    </P>
                </div>
            </Stack>
        </>
    );
};

export { Header };
