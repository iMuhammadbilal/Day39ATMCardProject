// Create Bank Account with Closure
function createBankAccount() {
    let balance = 0;

    return {
        deposit(amount) {
            if (amount > 0) {
                balance += amount;
                updateBalanceDisplay();
                alert(`💰 Deposited: ${amount}`);
            } else {
                alert("❌ Please enter a valid deposit amount!");
            }
        },
        withdraw(amount) {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
                updateBalanceDisplay();
                alert(`💸 Withdrawn: ${amount}`);
            } else {
                alert("❌ Invalid withdrawal amount or Insufficient balance!");
            }
        },
        getBalance() {
            return balance;
        }
    };
}

// Bank Account Object
const myAccount = createBankAccount();

// MPIN setup
const correctMpin = "78686";
let isMpinVerified = false;

// Select Elements
const mpinInput = document.getElementById("mpinInput");
const submitMpinBtn = document.getElementById("submitMpin");
const amountInput = document.getElementById("amountInput");
const balanceDisplay = document.getElementById("balanceDisplay");
const depositBtn = document.getElementById("deposit");
const withdrawBtn = document.getElementById("withdraw");
const checkBalanceBtn = document.getElementById("checkBalance");

// Functions
function updateBalanceDisplay() {
    balanceDisplay.textContent = myAccount.getBalance();
}

function verifyMpin() {
    const enteredMpin = mpinInput.value;
    if (enteredMpin === correctMpin) {
        alert("✅ MPIN Verified Successfully!");
        isMpinVerified = true;
    } else {
        alert("❌ Invalid MPIN. Please enter correct MPIN!");
        isMpinVerified = false;
    }
}

// Events
submitMpinBtn.addEventListener("click", verifyMpin);

depositBtn.addEventListener("click", function() {
    if (!isMpinVerified) {
        alert("❌ Please enter and verify your MPIN first!");
        return;
    }
    const amount = parseFloat(amountInput.value);
    if (!isNaN(amount)) {
        myAccount.deposit(amount);
        amountInput.value = "";
    }
});

withdrawBtn.addEventListener("click", function() {
    if (!isMpinVerified) {
        alert("❌ Please enter and verify your MPIN first!");
        return;
    }
    const amount = parseFloat(amountInput.value);
    if (!isNaN(amount)) {
        myAccount.withdraw(amount);
        amountInput.value = "";
    }
});

checkBalanceBtn.addEventListener("click", function() {
    if (!isMpinVerified) {
        alert("❌ Please enter and verify your MPIN first!");
        return;
    }
    alert(`💳 Current Balance: ${myAccount.getBalance()}`);
});
