const updateTimer = () => {

    document.querySelectorAll('.hidden').forEach(element => element.classList.remove('hidden'));

    // when the party shall commence
    let diff = new Date(Date.UTC(2020, 10, 15, 19, 0, 0, 0)).getTime() - new Date().getTime();

    if (diff <= 0) {
        document.querySelectorAll('.i-am-hidden-yes').forEach(element => element.classList.remove('i-am-hidden-yes'));
    }

    // math
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // sick six-way template view-data model binding (is web-scale!!)
    document.getElementById("timer").innerHTML = `
        <div class="hours"> 
            <div class="numbers">${hours}</div>hours
        </div> 
        <div class="minutes"> 
            <div class="numbers">${minutes}</div>minutes
        </div> 
        <div class="seconds"> 
            <div class="numbers">${seconds}</div>seconds
        </div>
    `;
};

updateTimer();

setInterval(updateTimer, 1000);
