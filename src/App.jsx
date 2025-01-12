import {useState} from 'react'
import CgpaTable from "./components/CgpaTable.jsx";

function App() {
    const [courseList, setCourseList] = useState([{name: "", credit: "", grade: "", isProjected: false}]);

    return (
        <div className="mx-28 mt-8">
            <h1 className="text-2xl">SeeGPA Calculator</h1>
            <h3 className="my-4" id="instructions">Enter your grades to see your CGPA!</h3>

            <CgpaTable courseList={courseList} setCourseList={setCourseList}/>


        </div>
    )
}

export default App