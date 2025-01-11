import { courses } from "@/App";
import clsx from "clsx";
import { BiPlusMedical } from "react-icons/bi";
import { LuArrowRight } from "react-icons/lu";

export type Course = {
    id: number;
    label: string;
    noOfCourses: number;
    description: string;
};

type CourseBoxProps = {
    course: Course;
    activeCourse: Course;
    setActiveCourse: React.Dispatch<React.SetStateAction<Course>>;
};

const CourseBox = (props: CourseBoxProps) => {
    const { activeCourse, setActiveCourse, course } = props;
    const { label, noOfCourses, description } = course;

    return (
        <div
            onClick={() => {
                setActiveCourse(course);
            }}
            className={clsx(
                "cursor-pointer relative bg-cherry flex  rounded-[32px] p-1.75 transition-all duration-1000 h-[461px] ease-stretch overflow-hidden",
                activeCourse.id === course.id ? "flex-[2]" : "flex-1"
            )}>
            <div
                className={clsx(
                    "absolute transition-all duration-1000 ease-stretch rounded-full bg-cherry-50 -left-10 -bottom-3",
                    activeCourse.id === course.id
                        ? " h-[0] w-[0]"
                        : " h-[600px] w-[600px]"
                )}></div>
            <div
                className={clsx(
                    "absolute  translate-x-[180%] transition-all duration-1000",
                    activeCourse.id === course.id ? "" : ""
                )}>
                <a
                    href="#"
                    className="flex text-nowrap items-center gap-0.5 text-gray-50 text-1.125">
                    View All Courses
                    <LuArrowRight className=" h-1.25 w-1.25" />
                </a>
            </div>

            <div
                className={clsx(
                    "absolute flex px-2 justify-between top-1/2 -translate-y-full transition-all duration-1000 w-[530px] ease-stretch",
                    courses.indexOf(course) < courses.indexOf(activeCourse)
                        ? "left-full -translate-x-0 opacity-0"
                        : courses.indexOf(course) ===
                          courses.indexOf(activeCourse)
                        ? "left-1/2 -translate-x-1/2 opacity-1"
                        : "-left-full -translate-x-1/2 opacity-0"
                )}>
                <img src="/icons/react.svg" alt="" />
                <img src="/icons/reactions.svg" alt="" />
                <img src="/icons/stationery.svg" alt="" />
                <img src="/icons/vue.svg" alt="" />
            </div>

            <div className="flex relative mt-auto w-full gap-1">
                <div
                    className={clsx(
                        "relative text-[150px] transition-[all] duration-1000 ease-stretch ",
                        activeCourse.id === course.id
                            ? " text-gray-50"
                            : "text-cherry"
                    )}>
                    <p className="leading-1  font-nohemi">
                        {noOfCourses.toString().padStart(2, "0")}
                    </p>
                    <div className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2">
                        <BiPlusMedical className="text-2.25" />
                    </div>
                </div>
                <div
                    className={clsx(
                        "transition-[all] duration-1000 ease-stretch absolute origin-[5%_-60%] right-0 top-1/2 -translate-y-1/2",
                        activeCourse.id != course.id
                            ? "-rotate-90 text-cherry"
                            : "text-gray-50"
                    )}>
                    <h4 className="text-nowrap text-[28px] font-bold">
                        {label}
                    </h4>
                    <p className="text-1.125 font-normal w-[20ch]">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CourseBox;
