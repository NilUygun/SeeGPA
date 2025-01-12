function CgpaTableRow({index, course, updateCourse}) {
    function updateCourseName(value) {
        const newCourse = {...course, name: value};
        updateCourse(newCourse, index);
    }

    function updateCourseCredit(value) {
        const newCourse = {...course, credit: value};
        updateCourse(newCourse, index);
    }

    function updateCourseGrade(value) {
        const newCourse = {...course, grade: value};
        updateCourse(newCourse, index);
    }

    function updateCourseIsProjected(value) {
        const newCourse = {...course, isProjected: value};
        updateCourse(newCourse, index);
    }

    return (
        <tr>
            <td>
                <input className="input input-bordered input-xs w-full max-w-xs" type="text" name="courses" maxLength="50" value={course.name} onChange={event => updateCourseName(event.target.value)}/>
            </td>
            <td>
                <select className="select select-xs select-bordered w-full max-w-xs" name="credits" value={course.credit} onChange={event => updateCourseCredit(event.target.value)}>
                    <option value="">Please choose a credit</option>
                    <option value="0">0</option>
                    <option value="0.25">0.25</option>
                    <option value="0.50">0.50</option>
                    <option value="0.75">0.75</option>
                    <option value="1.0">1.0</option>
                </select>
            </td>
            <td>
                <select className="select select-xs select-bordered w-full max-w-xs" name="grades" value={course.grade} onChange={event => updateCourseGrade(event.target.value)}>
                    <option value="">Please choose a grade</option>
                    <option value="12">A+</option>
                    <option value="11">A</option>
                    <option value="10">A-</option>
                    <option value="9">B+</option>
                    <option value="8">B</option>
                    <option value="7">B-</option>
                    <option value="6">C+</option>
                    <option value="5">C</option>
                    <option value="4">C-</option>
                    <option value="3">D+</option>
                    <option value="2">D</option>
                    <option value="1">D-</option>
                    <option value="0">F</option>
                    <option value="-1">SAT</option>
                    <option value="-2">UNS</option>
                </select>
            </td>
            <td className="text-center">
                <input className="checkbox checkbox-sm" type="checkbox" name="projected" value={course.isProjected} onChange={event => updateCourseIsProjected(event.target.value)}/>
            </td>
            <td>
                <button onClick="removeRow(this.parentElement.parentElement)">X</button>
            </td>
        </tr>
    );
}

export default CgpaTableRow;