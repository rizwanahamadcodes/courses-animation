import clsx from "clsx";
import { useState } from "react";
import { BiPlus, BiPlusMedical } from "react-icons/bi";
import { LuArrowRight } from "react-icons/lu";

export type Course = {
    id: number;
    label: string;
    noOfCourses: number;
    description: string;
};

type CourseBoxProps = {
    course: Course;
    activeCourseId: number;
    setActiveCourseId: React.Dispatch<React.SetStateAction<number>>;
};

const CourseBox = (props: CourseBoxProps) => {
    const { activeCourseId, setActiveCourseId, course } = props;
    const { id, label, noOfCourses, description } = course;

    return (
        <div
            onClick={() => {
                setActiveCourseId(course.id);
            }}
            className={clsx(
                "relative bg-cherry flex  rounded-[32px] p-1.75 transition-all duration-1000 h-[461px] ease-stretch overflow-hidden",
                course.id === activeCourseId ? "flex-[2]" : "flex-1"
            )}>
            <div
                className={clsx(
                    "absolute transition-all duration-1000 ease-stretch rounded-full bg-cherry-50 -left-10 -bottom-3",
                    course.id === activeCourseId
                        ? " h-[0] w-[0]"
                        : " h-[600px] w-[600px]"
                )}></div>
            <div
                className={clsx(
                    "absolute  translate-x-[180%] transition-all duration-1000",
                    course.id === activeCourseId ? "" : ""
                )}>
                <a
                    href="#"
                    className="flex text-nowrap items-center gap-0.5 text-gray-50 text-1.125">
                    View All Courses
                    <LuArrowRight className=" h-1.25 w-1.25" />
                </a>
            </div>
            <div className="flex relative mt-auto w-full gap-1">
                <div
                    className={clsx(
                        "relative text-[150px] transition-[all] duration-1000 ease-stretch ",
                        course.id === activeCourseId
                            ? " text-gray-50"
                            : "text-cherry"
                    )}>
                    <p className="leading-1  font-nohemi">
                        {course.noOfCourses}
                    </p>
                    <div className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2">
                        <BiPlusMedical className="text-2.25" />
                    </div>
                </div>
                <div
                    className={clsx(
                        "transition-[all] duration-1000 ease-stretch absolute origin-[5%_-60%] right-0 top-1/2 -translate-y-1/2",
                        course.id != activeCourseId
                            ? "-rotate-90 text-cherry"
                            : "text-gray-50"
                    )}>
                    <h4 className="text-[28px] font-bold">{course.label}</h4>
                    <p className="text-1.125 font-normal w-[20ch]">
                        {course.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CourseBox;
