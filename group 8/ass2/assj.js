document.addEventListener("DOMContentLoaded", function () {
    const allocateBtn = document.getElementById("allocateBtn");
    const allocationResults = document.getElementById("allocationResults");

    allocateBtn.addEventListener("click", function () {
        const groupSize = parseInt(document.getElementById("groupSize").value);
        const numSupervisors = parseInt(document.getElementById("numSupervisors").value);

        if (isNaN(groupSize) || isNaN(numSupervisors)) {
            allocationResults.textContent = "Please enter valid numbers.";
            return;
        }

        const totalStudents = groupSize * numSupervisors;
        allocationResults.textContent = `Allocated ${totalStudents} students to ${numSupervisors} supervisors with ${groupSize} members per group.`;
    });
});
