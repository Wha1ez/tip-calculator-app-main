const billInput = document.getElementById('bill-input');
const peopleInput = document.getElementById('n-o-p-input');
const customInput = document.getElementById('tip-percentage-input');
const tipPercentageBtns = document.querySelectorAll('.tip-percentage-button');
const tipAmount = document.querySelector('.tip-amount');
const totalAmount = document.querySelector('.total-amount');
const resetBtn = document.querySelector('.reset-button');


// let bill;
// let nop = 0;
// let tip = 0;


billInput.addEventListener('input', e => {
    bill = e.currentTarget.value;
    if (bill > 0) {
        // displayResult();
    }
})

peopleInput.addEventListener('input', e => {
    if (e.currentTarget.value > 0) {
        nop = e.currentTarget.value;
        displayResult();
    }
    else{
        document.querySelector('.no-of-people-wrapper').classList.add('error-visible');
        setTimeout(() => {
            document.querySelector('.no-of-people-wrapper').classList.remove('error-visible');
        }, 1000);
    }
})


tipPercentageBtns.forEach(tipPercentageBtn => {
    tipPercentageBtn.addEventListener('click', e => {
        tipPercentageBtns.forEach(btn => {
            btn.classList.remove('active-btn')
        })
        e.currentTarget.classList.toggle('active-btn');
        let tipPercentage = Number(e.currentTarget.id);
        tip = ((Number(billInput.value) * (tipPercentage / 100)) / Number(peopleInput.value)).toFixed(2);
        displayResult();
    })
    
})

customInput.addEventListener('input', e => {
    tip =  ((Number(billInput.value) * (e.currentTarget.value / 100)) / Number(peopleInput.value)).toFixed(2);
    displayResult()
})


const displayResult = () => {
    if (billInput && peopleInput) {
        tipAmount.textContent = `$${tip}`;
        let total = ((Number(bill) / Number(nop)) + Number(tip)).toFixed(2);
        totalAmount.textContent =  total > 0 ? `$${total}` : `$0.00`;
        resetBtn.classList.add('active');
    }
}

resetBtn.addEventListener('click', (e) => {
    if (e.currentTarget.classList.contains('active')) {
        window.location.reload();
    }
})

