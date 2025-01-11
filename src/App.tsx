import { useState } from "react";
import Container from "./components/Container";
import CourseBox from "./components/CourseBox";
import CourseSection, {
    SectionSubtitle,
    SectionTitle,
} from "./components/CourseSection";

const App = () => {
    const courses = [
        {
            id: 1,
            label: "All Courses",
            noOfCourses: 23,
            description: "course you're powering through right now",
        },
        {
            id: 2,
            label: "All Courses",
            noOfCourses: 23,
            description: "course you're powering through right now",
        },
        {
            id: 3,
            label: "All Courses",
            noOfCourses: 23,
            description: "course you're powering through right now",
        },
    ];
    const [activeCourseId, setActiveCourseId] = useState(courses[0].id);

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
                            activeCourseId={activeCourseId}
                            setActiveCourseId={setActiveCourseId}
                        />
                    ))}
                </Container>
            </CourseSection>
        </main>
    );
};

export default App;
