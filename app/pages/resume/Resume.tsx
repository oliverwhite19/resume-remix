import type { Education as EducationType } from 'prisma/generated/client';
import type { EmploymentWithPositions } from 'types';
import { Education } from '~/components/Education/Education';
import { Header } from '~/components/Header/Header';
import { WorkExperience } from '~/components/WorkExperience/WorkExperience';
import { useStyles } from './Resume.styles';

const Resume = ({
    employment,
    education,
}: {
    employment: EmploymentWithPositions[];
    education: EducationType[];
}) => {
    const { classes } = useStyles();
    return (
        <>
            <Header />
            <section className={classes.section}>
                <WorkExperience employment={employment} />
            </section>
            <section className={classes.section}>
                <Education education={education} />
            </section>
        </>
    );
};

export { Resume };
