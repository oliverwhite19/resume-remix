import type { EmploymentWithPositions } from 'types';
import { Job } from '~/components/Resume/Job';

const WorkExperience = ({
    employment,
}: {
    employment: EmploymentWithPositions[];
}) => {
    return (
        <>
            <h2>Professional Experience</h2>
            {employment?.map((company, index) => (
                <Job key={index} job={company} />
            ))}
        </>
    );
};

export { WorkExperience };
