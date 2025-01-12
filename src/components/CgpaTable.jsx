import CgpaTableRow from "./CgpaTableRow.jsx";

function CgpaTable({courseList, setCourseList}) {
    function updateCourse(newCourse, index) {
        const updatedCourseList = [...courseList];
        updatedCourseList[index] = newCourse;
        setCourseList(updatedCourseList);
    }

    function addNewCourse() {
        const newCourse = {name: "", credit: "", grade: "", isProjected: false};
        setCourseList([...courseList, newCourse]);
    }

    return (
        <>
            <table className="table table-zebra">
                <thead>
                <tr>
                    <th>Course</th>
                    <th>Credit</th>
                    <th>Grade</th>
                    <th className="text-center">Projected?</th>
                    <th></th>
                </tr>
                </thead>

                <tbody>
                    {courseList.map((course, index) => (<CgpaTableRow key={index} index={index} course={course} updateCourse={updateCourse}/>))}
                </tbody>
            </table>

            <button className="btn btn-outline btn-xs my-4" onClick={addNewCourse}>Add a course</button>
            <button className="btn btn-outline btn-primary btn-xs" onClick="displayCGPA()">Calculate</button>
        </>
    );
}

export default CgpaTable;