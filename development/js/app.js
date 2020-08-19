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