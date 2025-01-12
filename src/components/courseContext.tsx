import { createContext, useContext } from "react";
import { CourseBoxProps } from "./CourseBox";

export const CourseContext = createContext<
    | (CourseBoxProps & {
          activesPosition: -1 | 1 | 0;
      })
    | null
>(null);

export const useCourseContext = () => {
    const context = useContext(CourseContext);
    if (!context) {
        throw new Error(
            "useCourseContext must be used within a CourseProvider"
        );
    }
    return context;
};
