const mon = document.querySelector(".spendings_mon")
const tue = document.querySelector(".spendings_tue")
const wed = document.querySelector(".spendings_wed")
const thu = document.querySelector(".spendings_thu")
const fri = document.querySelector(".spendings_fri")
const sat = document.querySelector(".spendings_sat")
const sun = document.querySelector(".spendings_sun")


const url = "data.json"

async function fetchingBalance() {
    const fetching = await fetch(url)
    const data = await fetching.json()

    const monBalance = `$${data[0].amount}`;
    const tueBalance = `$${data[1].amount}`;
    const wedBalance = `$${data[2].amount}`;
    const thuBalance = `$${data[3].amount}`;
    const friBalance = `$${data[4].amount}`;
    const satBalance = `$${data[5].amount}`;
    const sunBalance = `$${data[6].amount}`;
    
    const balances = {
        monBalance,
        tueBalance,
        wedBalance,
        thuBalance,
        friBalance,
        satBalance,
        sunBalance
    }

    return balances
}

fetchingBalance()
    .then(balance=>{
        mon.textContent = balance.monBalance
        tue.textContent = balance.tueBalance
        wed.textContent = balance.wedBalance
        thu.textContent = balance.thuBalance
        fri.textContent = balance.friBalance
        sat.textContent = balance.satBalance
        sun.textContent = balance.sunBalance
    })

const weekDays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]

weekDays.forEach(day=>{
    const day_bar = document.querySelector(`.${day}_graph`)
    const amount = document.querySelector(`.spendings_${day}`)

    day_bar.addEventListener("mouseover", ()=>{
        amount.style.visibility = "visible"
    })

    day_bar.addEventListener("mouseout", ()=>{
        amount.style.visibility = "hidden"
    })
})

weekDays.forEach(day=> {
    const day_bar = document.querySelector(`.${day}_graph`)
    const date = new Date();
    let today = date.getDay()

    if (today === 0) {
        today = 6;
    } else {
        today -= 1;
    }
    if (today === weekDays.indexOf(day)){
        day_bar.style.backgroundColor = "hsl(186, 34%, 60%)"
    }

})

