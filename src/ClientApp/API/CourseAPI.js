
// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const CourseAPI = {
    courses: [
        { number: 1, title: "Intro to Programming in C#", instructor: "Ramirez", numSeats: 30 },
        { number: 2, title: "Data Structures", instructor: "Flynn", numSeats: 30 },
        { number: 3, title: "Game Programming", instructor: "Babichenko", numSeats: 15 },
        { number: 4, title: "Apothecary 101", instructor: "Grieve", numSeats: 5 }
    ],
    all: function () { return this.courses },
    get: function (id) {
        const isCourse = c => c.number === id
        return this.courses.find(isCourse)
    }
}

export default CourseAPI;
