const myUl = document.querySelector('.nav-list');
myUl.addEventListener('click',function (event){
        document.querySelectorAll('.nav-list li').forEach(function(elem){
            elem.classList.remove('used-li')
        })

        event.target.parentElement.classList.add('used-li');
        loadPage(event.target)

    }

)


//Loads page depending on left navbar clicked position
//by changing display status
//I dont know if they want from me to update it via sending request to ahref
loadPage = (content) => {
    let targetDisplay = document.querySelector(`.${content.parentElement.dataset.name}`)
    document.querySelectorAll('.main-content > div').forEach(function(elem){
        elem.style.display='none';
    })
    targetDisplay.style.display='flex';

    console.log(content.parentElement.dataset.name);
}



// ----------------------------- NOTIFICATION WIDGET SECTION ----------------------------------------
// if clicked on log button or add new recipe ========>
//need to add display none at start when everything will be set
const infoNotification = (isLoggedIn,numberOfRecipes) => {
    if(isLoggedIn) {
        const infoNotification = document.querySelector('.notification-w-info');
        let variant = 'przepisów';
        infoNotification.innerText = `Masz już ${numberOfRecipes} ${variant}, nieźle!`
        infoNotification.style.display='flex';
    }
}

const successNotification = (isLoggedIn) => {
    if(isLoggedIn){
        let variant = 'przepisów';
        const successNotification = document.querySelector('.notification-w-success');
        successNotification.innerText = `Świetnie, że jesteś, udanego planowania i smacznego!`
        successNotification.style.display='flex';
    }
}

const warningNotification = (isLoggedIn, numberOfPlans) => {
    if(isLoggedIn){
        const warningNotification = document.querySelector('.notification-w-warning');
        if(numberOfPlans===0) {
            warningNotification.innerText = `Pamiętaj, aby dodać plan!`;
            warningNotification.style.display = 'flex';
        }
    }
}

// -------------------------------------------------------------------------------------------------