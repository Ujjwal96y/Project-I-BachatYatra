document
    .getElementById("analyzeBtn")
    .addEventListener("click", analyzeFinance);

function analyzeFinance() {

    const saving = Number(document.getElementById("saving").value);
    const expense = Number(document.getElementById("expense").value);
    const income = Number(document.getElementById("income").value);

    if (!saving && !expense && !income) {
        alert("Please fill all fields.");
        return;
    }

    const total = saving + expense;
    const savingRate = (saving / total) * 100;

    let status = "";
    let advice = "";

    if (savingRate >= 40) {
        status = "Excellent";
        advice = "You're saving a healthy portion of your money. Keep investing consistently.";
    }
    else if (savingRate >= 25) {
        status = "Good";
        advice = "Your savings are decent, but reducing unnecessary expenses can improve them.";
    }
    else {
        status = "Needs Improvement";
        advice = "Your expenses are too high. Try following a budget like the 50/30/20 rule.";
    }

    const annualReturn = 0.12;

    const fiveYears =
        (expense * Math.pow(1 + annualReturn, 5)).toFixed(0);

    const tenYears =
        (expense * Math.pow(1 + annualReturn, 10)).toFixed(0);

    const twentyYears =
        (expense * Math.pow(1 + annualReturn, 20)).toFixed(0);

    document.getElementById("result").innerHTML = `

        <h2>Monthly Financial Report</h2>

        <p><strong>Monthly Savings:</strong> Rs. ${saving}</p>

        <p><strong>Monthly Expenses:</strong> Rs. ${expense}</p>

        <p><strong>Saving Rate:</strong> ${savingRate.toFixed(1)}%</p>

        <p><strong>Financial Health:</strong> ${status}</p>

        <hr>

        <h2>Recommendation</h2>

        <p>${advice}</p>

        <ul>
            <li>Save at least 20–30% of your income.</li>
            <li>Build an emergency fund.</li>
            <li>Avoid impulse purchases.</li>
            <li>Track your expenses daily.</li>
        </ul>

        <hr>

        <h2>Investment Potential</h2>

        <p>If Monthly expense of <strong>Rs. ${expense}</strong> had been invested at an estimated <strong>12% annual return</strong>, it could grow to:</p>

        <p><strong>After 5 years:</strong> Rs. ${fiveYears}</p>
        <p><strong>After 10 years:</strong> Rs. ${tenYears}</p>
        <p><strong>After 20 years:</strong> Rs. ${twentyYears}</p>
    `;
}