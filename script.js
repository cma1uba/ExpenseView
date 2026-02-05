const nameInput = document.getElementById("name-input");
const amountInput = document.getElementById("amount-input");
const addBtn = document.getElementById("add-btn");
const expenseList = document.getElementById("expense-list");
const totalDisplay = document.getElementById("total-amount");

let expenses = JSON.parse(localStorage.getItem("myExpenses")) || [];

addBtn.addEventListener('click', () => {
    let expenseName = nameInput.value;
    let amount = amountInput.value;
    
    let expense = { 
    name: expenseName, 
    price: Number(amount)
};
    expenses.push(expense);
    updateUI();
    nameInput.value = "";
    amountInput.value = "";
});

function updateUI() {
    
    localStorage.setItem("myExpenses", JSON.stringify(expenses));
    
    expenseList.innerHTML = expenses.map(item => `
        <li>${item.name}: $${item.price}</li>
    `).join("");
    
    let total = 0;
    expenses.forEach(item => total += item.price);
    totalDisplay.textContent = total;
}