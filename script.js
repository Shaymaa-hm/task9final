const plusBtns = document.querySelectorAll(".increment")
plusBtns.forEach(btn => {
    btn.addEventListener("click", function() {
        const currentAmountElement = this.closest(".buttons").querySelector(".number")
        const amountValue = parseInt(currentAmountElement.textContent)
        if(amountValue<9)
        {
            currentAmountElement.textContent = amountValue + 1
        }
        
    })
})

const minusBtns = document.querySelectorAll(".decrement")
minusBtns.forEach(btn => {
    btn.addEventListener("click", function() {
        const currentAmountElement = this.closest(".buttons").querySelector(".number")
        const amountValue = parseInt(currentAmountElement.textContent)
        if(amountValue>1)
        {
            currentAmountElement.textContent = amountValue - 1
        }
    })
})