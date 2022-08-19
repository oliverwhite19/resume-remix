import { Resume } from '~/pages/resume/Resume';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getEmployments } from '~/models/employment.server';
import { toEducation, toJob } from 'helpers';
import { getEducation } from '~/models/education.server';

export const loader = async () => {
    return json({
        employment: await getEmployments(),
        education: await getEducation(),
    });
};
export default function Index() {
    const { employment, education } = useLoaderData();
    return (
        <Resume
            employment={employment.map((e: any) => toJob(e))}
            education={toEducation(education)}
        />
    );
}
