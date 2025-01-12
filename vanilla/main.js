function addRow(){
    let table = document.getElementById("cgpaTable")
    let newRow = table.insertRow(-1)

    let course = document.createElement("input")
    course.className = "input input-bordered input-xs w-full max-w-xs"
    course.type = "text"
    course.maxlength = "50"
    course.name = "courses"
    let courseCell = newRow.insertCell(-1)
    courseCell.appendChild(course)

    let credit = document.createElement("select")
    credit.className = "select select-xs select-bordered w-full max-w-xs"
    credit.name = "credits"
    credit.addEventListener("change", hideCGPA)
    let creditOptions = [["", "Please choose a credit"], ["0", "0"], ["0.25", "0.25"], ["0.50", "0.50"], ["0.75", "0.75"], ["1.0", "1.0"]]
    for (const opt of creditOptions) {
        credit.options.add(new Option(opt[1], opt[0]))
    }
    let creditCell = newRow.insertCell(-1)
    creditCell.appendChild(credit)

    let grade = document.createElement("select")
    grade.className = "select select-xs select-bordered w-full max-w-xs"
    grade.name = "grades"
    grade.addEventListener("change", hideCGPA)
    let gradeOptions = [["", "Please choose a grade"],
        ["12", "A+"], ["11", "A"], ["10", "A-"],
        ["9", "B+"], ["8", "B"], ["7", "B-"],
        ["6", "C+"], ["5", "C"], ["4", "C-"],
        ["3", "D+"], ["2", "D"], ["1", "D-"],
        ["0", "F"], ["-1", "SAT"], ["-2", "UNS"]]
    for (const opt of gradeOptions) {
        grade.options.add(new Option(opt[1], opt[0]))
    }
    let gradeCell = newRow.insertCell(-1)
    gradeCell.appendChild(grade)

    let projected = document.createElement("input")
    projected.className = "checkbox checkbox-sm"
    projected.type = "checkbox"
    projected.name = "projected"
    let projectedCell = newRow.insertCell(-1)
    projectedCell.className = "text-center"
    projectedCell.appendChild(projected)

    let remove = document.createElement("button")
    remove.textContent = "X"
    remove.addEventListener("click", () => removeRow(remove.parentElement.parentElement))

    let removeCell = newRow.insertCell(-1)
    removeCell.appendChild(remove)
}

function removeRow(row){
    let table = document.getElementById("cgpaTable")
    if (table.rows.length > 2){
        row.remove()
        hideCGPA()
    }
}

function calculateCGPA(calcProjected){
    let tbody = document.getElementById("cgpaTable").getElementsByTagName("tbody")[0]
    let creditTotal = 0
    let gradeTotal = 0
    for (const row of tbody.getElementsByTagName("tr")) {
        let selects = row.getElementsByTagName("select")
        let credit = parseFloat(selects[0].value)
        let grade = parseInt(selects[1].value)
        let isProjected = row.getElementsByTagName("input")[1].checked
        if (!calcProjected && isProjected){
            continue
        }
        if (grade >= 0){
            creditTotal += credit
            gradeTotal += grade * credit
        }
    }
    console.log(creditTotal, gradeTotal)
    return Math.round(gradeTotal / creditTotal * 100) / 100
}

function displayCGPA(){
    const cgpa = calculateCGPA(false)
    const projectedCgpa = calculateCGPA(true)

    if (isNaN(projectedCgpa)){
        alert("Please fill in all the required fields.")
    }else{
        document.getElementById("export").style.visibility = "visible"
        document.getElementById("cgpaLabel").style.visibility = "visible"
        document.getElementById("cgpa").innerText = cgpa
        let cgpaBar = document.getElementById("cgpaBar")
        cgpaBar.style.visibility = "visible"
        cgpaBar.value = cgpa

        document.getElementById("cgpaLabelProjected").style.visibility = "visible"
        document.getElementById("cgpaProjected").innerText = projectedCgpa
        let cgpaBarProjected = document.getElementById("cgpaBarProjected")
        cgpaBarProjected.style.visibility = "visible"
        cgpaBarProjected.value = projectedCgpa
    }
}

function hideCGPA(){
    document.getElementById("cgpaLabel").style.visibility = "hidden"
    document.getElementById("export").style.visibility = "hidden"
    document.getElementById("cgpaBar").style.visibility = "hidden"
}

function createPDF(){
    window.print()
}