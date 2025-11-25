let container = document.getElementById("main");
let button = document.getElementById("Brightness");



class Clock {
    constructor() {
        this.element = document.getElementById("hours");
        this.elementM = document.getElementById("minites");
        this.elementS = document.getElementById("sec");
    }

    // getTime() {


    // }

    UpdaHours() {
        let currentTime = new Date();
        let hours = currentTime.getHours().toString().padStart(2, '0');
        return hours
    }
    
    Updatminutes() {
        let currentTime = new Date();
        let minite = currentTime.getMinutes().toString().padStart(2, '0');
        return minite
    }
    
    Updatseconds() {
        let currentTime = new Date();
        let second = currentTime.getSeconds().toString().padStart(2, '0');
        return second
    }
    
    start(){
        setInterval(()=>{
            this.element.textContent = this.UpdaHours()
            this.elementM.textContent = this.Updatminutes()
            this.elementS.textContent = this.Updatseconds()

            let ampm = document.getElementById('ampm')
            let hourNum = Number(this.UpdaHours())
            
            // setting AM/PM
            if (hourNum <= 12){
                ampm.textContent = "AM"
            }
            else{ampm.textContent = "PM"}
            

            // setting date
            let today = new Date()
            let day = today.getDate()
            let month = today.getMonth()+1
            let date = document.getElementById('date')
            date.innerText = `${"DATE:"} ${day}/${month}`
            let year = today.getFullYear()
            document.getElementById("year").innerText=year

        })
    }
}

let clock = new Clock();
clock.start();



button.addEventListener("click",function(){
    let ball1 = document.getElementById('ball1')
    let ball2 = document.getElementById('ball2')

    ball1.classList.toggle('color-orange')
    ball1.classList.toggle('color-green')

    ball2.classList.toggle('color-orange')
    ball2.classList.toggle('color-green')

})