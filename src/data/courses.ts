export type Course = {
    id: number;
    label: string;
    noOfCourses: number;
    description: string;
};
const courses: Course[] = [
    {
        id: 1,
        label: "All Courses",
        noOfCourses: 23,
        description: "course you're powering through right now",
    },

    {
        id: 2,
        label: "Upcoming Courses",
        noOfCourses: 5,
        description: "course you're powering through right now",
    },
    {
        id: 3,
        label: "Ongoing Courses",
        noOfCourses: 10,
        description: "course you're powering through right now",
    },
];
export default courses;
