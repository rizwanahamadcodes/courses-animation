import React from "react";

type CourseSectionProps = React.ComponentPropsWithoutRef<"section">;

const CourseSection = (props: CourseSectionProps) => {
    const { children } = props;

    return <section className="w-full">{children}</section>;
};

type SectionSubtitleProps = React.ComponentPropsWithoutRef<"section">;

export const SectionSubtitle = (props: SectionSubtitleProps) => {
    const { children } = props;

    return (
        <h3 className="mb-0.875 text-1.5 text-gray-750 leading-[1.2]">
            {children}
        </h3>
    );
};
type SectionTitleProps = React.ComponentPropsWithoutRef<"section">;

export const SectionTitle = (props: SectionTitleProps) => {
    const { children } = props;

    return (
        <h2 className="text-2 text-gray-850 leading-[1.2] font-nohemi">
            {children}
        </h2>
    );
};

export default CourseSection;
