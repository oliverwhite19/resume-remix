import type { Position as PositionType } from 'prisma/generated/client';
import { List, Space, Chip } from '@mantine/core';
import { Point } from 'tabler-icons-react';
import { useStyles } from './Resume.styles';
import { format } from 'date-fns';
import { Smol } from '../Text';
import { useMediaQuery } from 'hooks/useMediaQuery';
import { screenSizes } from '~/theme';

const Position = ({ position }: { position: PositionType }) => {
    const { classes } = useStyles();
    const { title, details, start, end, technologies } = position;
    const isSmallScreen = useMediaQuery(screenSizes.largeMobile);
    return (
        <div className={classes.position}>
            <h3>{title}</h3>
            <Smol>
                {start && format(start, 'LLLL yyy')} -{' '}
                {end ? format(end, 'LLLL yyy') : 'Present'}
            </Smol>
            <Space h="lg" />
            <List icon={<Point size={16} strokeWidth={3} color={'#862d2e'} />}>
                {details.map((detail, index) => (
                    <List.Item key={index}>{detail}</List.Item>
                ))}
            </List>
            <Space h="lg" />
            {!isSmallScreen && (
                <Chip.Group position="center">
                    {technologies.map((tech, index) => (
                        <Chip
                            className={classes.chip}
                            color="red"
                            variant="filled"
                            key={index}
                            size="xs"
                        >
                            {tech}
                        </Chip>
                    ))}
                </Chip.Group>
            )}
        </div>
    );
};

export { Position };
