document.addEventListener("DOMContentLoaded", () => {
    const submitBtn = document.getElementById("submitBtn");
    const nameInput = document.getElementById("name");
    const salaryInput = document.getElementById("salary");
    const employeList = document.getElementById("employeList");

    let employees = [];

    submitBtn.addEventListener("click", () => {
        const name = nameInput.value.trim();
        const salary = salaryInput.value.trim();

        if (name === "" || salary === "") {
            alert("Iltimos  ikkala inputni ham to'ldiring.");
            return;
        }

        const employee = {
            name: name,
            salary: `${salary}`
        };

        employees.push(employee);
        addEmployeeToList(employee);

        nameInput.value = '';
        salaryInput.value = '';
    });

    function addEmployeeToList(employee) {
        const listItem = document.createElement("li");
        listItem.textContent = `${employee.name} - ${employee.salary}`;
        employeList.appendChild(listItem);
    }
});
