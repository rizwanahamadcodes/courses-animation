import { useState } from "react";
import Container from "./components/Container";
import CourseBox from "./components/CourseBox";
import CourseSection, {
    SectionSubtitle,
    SectionTitle,
} from "./components/CourseSection";
export const courses = [
    {
        id: 1,
        label: "All Courses",
        noOfCourses: 23,
        description: "course you're powering through right now",
    },
    {
        id: 3,
        label: "Ongoing Courses",
        noOfCourses: 10,
        description: "course you're powering through right now",
    },

    {
        id: 2,
        label: "Upcoming Courses",
        noOfCourses: 5,
        description: "course you're powering through right now",
    },
];
const App = () => {
    const [activeCourse, setActiveCourse] = useState(courses[0]);

    return (
        <main className="flex items-center justify-center w-full h-full">
            <CourseSection>
                <Container className="mb-2">
                    <SectionSubtitle>
                        Explore our classes and master trending skills!
                    </SectionSubtitle>
                    <SectionTitle>
                        Dive Into{" "}
                        <span className="text-green-600">
                            What’s Hot Right Now!
                        </span>{" "}
                        🔥
                    </SectionTitle>
                </Container>
                <Container className="flex gap-2">
                    {courses.map((course) => (
                        <CourseBox
                            course={course}
                            activeCourse={activeCourse}
                            setActiveCourse={setActiveCourse}
                        />
                    ))}
                </Container>
            </CourseSection>
        </main>
    );
};

export default App;
