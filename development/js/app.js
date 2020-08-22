const myUl = document.querySelector('.nav-list');
myUl.addEventListener('click', function (event) {
        document.querySelectorAll('.nav-list li').forEach(function (elem) {
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
    document.querySelectorAll('.main-content > div').forEach(function (elem) {
        elem.style.display = 'none';
    })
    targetDisplay.style.display = 'flex';

    console.log(content.parentElement.dataset.name);
}


const addNewRecipeButton = document.querySelector('.add-w-recipe');
const addNewPlanButton = document.querySelector('.add-w-plan');
const widgetsContainer = document.querySelector('.widgets');
const newRecipe = document.querySelector('.section-new-recipe-container');
const newPlan = document.querySelector('.section-new-plan-container');


//---------------------------------------------MULTI PURPOSE LOADER, USE FREQUENTLY--------------------------------
const loadContent = (byWhat, whatToDeload, whatToLoad) => {
    byWhat.addEventListener('click', function () {
        whatToDeload.style.display = 'none';
        whatToLoad.style.display = 'flex';
    })
}
//-------------------------------------------------------------------------------------------------------------------

loadContent(addNewRecipeButton, widgetsContainer, newRecipe);
loadContent(addNewPlanButton,widgetsContainer,newPlan); //TODO waiting for real plan


// ----------------------------- NOTIFICATION WIDGET SECTION ----------------------------------------
// if clicked on log button or add new recipe ========>
//need to add display none at start when everything will be set
liLoaderLite = (whatToLoad,whereToLoad) => {
  const myElement = document.createElement('li');
  myElement.classList.add('notification-w',`notification-w-${whatToLoad}`)
    whereToLoad.appendChild(myElement);
}


const targetUl = document.querySelector('.notification-w-list');
const infoNotification = (isLoggedIn, numberOfRecipes) => {
    if (isLoggedIn){
        liLoaderLite('info',targetUl);
        const infoNotification = document.querySelector('.notification-w-info');

        let variant = 'przepisów';
        infoNotification.innerHTML = `<i class="widget-icon fas fa-info-circle"></i> Masz już ${numberOfRecipes} ${variant}, nieźle!`
        infoNotification.style.display = 'flex';
    }
}
infoNotification(true,10);
const successNotification = (isLoggedIn) => {
    if (isLoggedIn) {
        liLoaderLite('success',targetUl)
        const successNotification = document.querySelector('.notification-w-success');
        successNotification.innerHTML = `<i class="widget-icon fas fa-check-circle"></i>Świetnie, że jesteś, udanego planowania i smacznego!`
        successNotification.style.display = 'flex';
    }
}
successNotification(true);
const warningNotification = (isLoggedIn, numberOfPlans) => {
    if (isLoggedIn) {
        liLoaderLite('warning',targetUl)
        const warningNotification = document.querySelector('.notification-w-warning');
        if (numberOfPlans === 0) {

            warningNotification.innerHTML= `<i class="widget-icon fas fa-exclamation-circle"></i> Pamiętaj, aby dodać plan!`;
            warningNotification.style.display = 'flex';
        }
    }
}
warningNotification(true,0)
//PURE TESTS===========>

// successNotification(true)

//----------------------


// -------------------------------------------------------------------------------------------------

//----------------------------NEW INSTRUCTION, NEW INGREDIENT---------------------------------------

const addNewInstructionsButton = document.querySelector('.add-ins-button');
const addNewIngredientsButton = document.querySelector('.add-ing-button');

const instructionsTextarea = document.querySelector('.instructions-area');
const ingredientsTextarea = document.querySelector('.ingredients-area');

const instructionsList = document.querySelector('.new-recipe-instructions-list');
const ingredientsList = document.querySelector('.new-recipe-ingredients-list');

const clearInput = (inputToClear) => {
    inputToClear.value = '';
}

const liLoader = (byWhat, whatToLoad, whereToLoad) => {
    byWhat.addEventListener('click', function () {
        let newLi = document.createElement('li');
        newLi.innerText = whatToLoad.value;
        whereToLoad.appendChild(newLi);
        clearInput(whatToLoad);
    })
}

liLoader(addNewInstructionsButton, instructionsTextarea, instructionsList);
liLoader(addNewIngredientsButton, ingredientsTextarea, ingredientsList);

//--------------------------------SAVE RECIPE DATA---------------------------------

class Recipe {
    constructor(name, description, instructions, ingredients) {
        this.name = name;
        this.description = description;
        this.instructions = instructions;
        this.ingredients = ingredients;
    }
}

const saveQuit = document.querySelector('.save-quit');
const recipeName = document.querySelector('.add-recipe-form-name').value;
const recipeDescription = document.querySelector('.add-recipe-form-description').value;
//
// localStorage.clear();
// const saveNewRecipe = (whatSaves) => {
//

//     whatSaves.addEventListener('click', function () {
//
//         const recipeName = document.querySelector('.add-recipe-form-name').value;
//         const recipeDescription = document.querySelector('.add-recipe-form-description').value;
//         let myRecipe = new Recipe(recipeName, recipeDescription);
//
//         if (localStorage.getItem('recipesStored')===null){
//             localStorage.setItem('recipesStored',JSON.stringify(myRecipe))
//             loadContent(whatSaves, newRecipe, widgetsContainer);
//         }
//         else{
//             console.log(localStorage.getItem('recipesStorage')+'beforeobrabianie');
//             let myData = JSON.parse(localStorage.getItem('recipesStored'));
//             let myTemp = myData;
//             console.log(myData+"mydata");
//             let myArr = Array.from(myTemp);
//             console.log(myArr +'myarr');
//
//             localStorage.setItem('recipesStored', JSON.stringify(myArr));
//             console.log(localStorage.setItem('recipesStored', JSON.stringify(myArr)));
//             loadContent(whatSaves, newRecipe, widgetsContainer);
//         }
//         console.log(localStorage);
//         loadContent(whatSaves, newRecipe, widgetsContainer);
//     })
// }
// saveNewRecipe(saveQuit);

const saveNewRecipe = (whatSaves) => {

   let index;
    if(localStorage.getItem('index')!==null){
        index = localStorage.getItem('index');
    }else{
        index=0;
    }
    whatSaves.addEventListener('click', function (e) {

        const recipeName = document.querySelector('.add-recipe-form-name').value;
        const recipeDescription = document.querySelector('.add-recipe-form-description').value;
        let myRecipe = new Recipe(recipeName, recipeDescription);
        index++;
        localStorage.setItem(`recipeStored${index}`, JSON.stringify(myRecipe))
        localStorage.setItem(`index`, JSON.stringify(index))
        console.log(localStorage);
        loadContent(whatSaves, newRecipe, widgetsContainer);
    })
}

saveNewRecipe(saveQuit);