document.getElementById("donate-btn2").addEventListener("click", function () {
  const amount = inputFieldValueById("amount-input2");
  const balance = getInnerTextById("balance");
  const donatedMoney = getInnerTextById("donate-counter2");
  if (isNaN(amount)) {
    alert("Invalid Amount");
    return;
  }
  if (amount <= 0 || balance < amount) {
    alert("Invalid Amount");
    return;
  }

  const newBalance = balance - amount;
  document.getElementById("balance").innerText = newBalance;

  const NewDonatedMoney = amount + donatedMoney;
  document.getElementById("donate-counter2").innerText = NewDonatedMoney;

  const history = document.createElement("div");
  history.innerHTML = `
            <div class="border-2 border-[#1111111A] shadow-xl rounded-2xl p-5 mb-6">
            <h3 class="text-lg font-bold">
              ${amount} Taka is Donated for Flood at Feni, Bangladesh
            </h3>
            <p class="text-lg font-normal">
              Date: ${new Date()}
            </p>
          </div>
    `;

  document.getElementById("history-section").appendChild(history);
  document.getElementById("my_modal").showModal();
});
