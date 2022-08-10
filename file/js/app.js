// we make our selection over here
// this is for our form
const form = document.querySelector("#clac"),
  //   this is submit btn of the form
  formBtn = document.querySelector("#btn"),
  //   this text is our  amount of budegt that we have now or we add to it latter
  budgetText = document.querySelector("#budget-text"),
  //   this the div that we are going to add expece to it
  hazine = document.querySelector(".hazine"),
  section = document.querySelector("#section"),
  income = document.querySelector(".income-detail");

// this varibel is for number of buget
let userBudget, budget;

// eventlistner

// class and function
class BudgetCalc {
  // this  constructor is for our intaer buget
  constructor(budget) {
    this.budget = Number(budget);
  }
  //   this is for when we add it to over buget
  budgetPlus(amount) {
    return (this.budget += Number(amount));
  }
  //   this is for when we substarck it to over buget

  substarckfromBudget(amount) {
    return (this.budget -= amount);
  }
}

class pageElemant {
  addBudget(amount) {
    budgetText.innerHTML = `بودجه  ${amount} ${"$"}`;
  }

  addExpenstolist(name, amount) {
    const div = document.createElement("div");
    div.classList.add("expence-box");
    div.innerHTML = `<span class="name-expance">${name}</span>
    <span id="ex-num" class="amount-expance">${amount}</span>
    <button id="remove-expance" class="amount-expance">X</button>`;
    hazine.appendChild(div);
  }
  addIncome(name, amount) {
    const div = document.createElement("div");
    div.classList.add("expence-box");
    div.innerHTML = `<span class="name-expance">${name}</span>
    <span id="in-num" class="amount-income">${amount}</span>
    <button id="remove-income" class="amount-expance">X</button>`;
    income.appendChild(div);
  }
  trackbudget(amount) {
    const moneyadd = budget.budgetPlus(amount);
    budgetText.innerHTML = `بودجه  ${moneyadd} ${"$"}`;
  }
  addmore(amount) {
    const moneyLeft = budget.substarckfromBudget(amount);
    budgetText.innerHTML = `بودجه  ${moneyLeft} ${"$"}`;
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // this is for discription of expance of budegt
  const name = document.querySelector("#name").value;
  // this is for amount of expance of budegt
  const amount = document.querySelector("#amount").value;
  // this is  for our diffrent option that we can chose if we want to add expance to list or buget
  const reduceOrPlus = document.querySelector("#option").value;
  if (amount === "" || name === "") return;

  if (reduceOrPlus === "minus") {
    page.addExpenstolist(name, amount);
    page.addmore(amount);
  } else {
    page.addIncome(name, amount);
    page.addBudget(amount);
    page.trackbudget(amount);
  }
  if (budget.budget === 0 || budget.budget < 0) {
    alert("پولت تمام شده بلند شو برو کار کن");
    return;
  }
});
document.addEventListener("click", (e) => {
  const removeIncome = document.querySelector("#remove-income");
  const removeExpence = document.querySelector("#remove-expance");
  const amountExpence = Number(document.querySelector("#ex-num").innerText);
  const amountIncome = Number(document.querySelector("#in-num").innerText);
  if (e.target === removeExpence) {
    e.target.parentElement.remove();
    page.trackbudget(amountIncome);
  }
  if (e.target === removeIncome) {
    e.target.parentElement.remove();
    page.addmore(amountExpence);
  }
  console.log(e.target); 
});
document.addEventListener("DOMContentLoaded", function () {
  userBudget = prompt("بودجه شما چقدر است");
  if (userBudget === null || userBudget === "" || userBudget === 0) {
    window.location.reload();
  } else {
    budget = new BudgetCalc(userBudget);

    page.addBudget(budget.budget);
  }
});

const page = new pageElemant();
