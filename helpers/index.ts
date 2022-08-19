import { parseISO } from 'date-fns';
import type { Education, Position } from 'prisma/generated/client';
import type { EmploymentWithPositions } from '../types';

export const toPosition = (position: any): Position => {
    return {
        ...position,
        start: position.start ? parseISO(position.start) : null,
        end: position.end ? parseISO(position.end) : null,
    };
};

export const toJob = (employment: any): EmploymentWithPositions => {
    return {
        ...employment,
        positions: employment.positions.map((position: any) =>
            toPosition(position),
        ),
    };
};

export const toEducation = (educations: any): Array<Education> => {
    return educations?.map((edu: any) => ({
        ...edu,
        end: parseISO(edu.end),
    }));
};
