'use strict'
console.log("Ready for Ada Kitten Tania :)");

let dataList= document.querySelector('.js-list');

const kittenData_1= {
    nameKitten: "Zape",
    raceKitten: "Europeo Común Naranja",
    descripKitten: "Es un gato muy cariñoso y familiar que se reconoce por su gran capacidad comunicativa, ya que es un gato muy hablador y exigente, a veces casi tirano con las personas con las que vive. Sin embargo, es también el gato más amoroso del mundo. Fiel a sus rutinas y hábitos, es el compañero perfecto.",
    imageKitten: "https://img.freepik.com/fotos-premium/gato-comun-europeo-naranja-mirando-adelante-descansando-retrato-animal_470418-1079.jpg"
}

const kittenData_2= {
    nameKitten: "Frida",
    raceKitten: "Europeo Común",
    descripKitten: "Es una gata muy cariñosa pero recelosa de personas desconocidas y precavida. Le encanta comer y el aire libre.",
    imageKitten: "https://www.qanimals.com/wp-content/uploads/2024/10/pexels-river-augustin-1370012990-28934371.jpg"
}

const kittenData_3= {
    nameKitten: "Dalí",
    raceKitten: "British Shorthair",
    descripKitten: "Este imponente gato de gran tamaño y pelaje suave totalmente gris, es de naturaleza tranquilo y apacible.",
    imageKitten: "https://upload.wikimedia.org/wikipedia/commons/c/c0/British_shorthair_Irina_AEA.JPG"
}
const kittenData_4= {
    nameKitten: "Anastasio",
    raceKitten: "Siamés",
    descripKitten: "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asia al menos hace 500 años, donde tuvo su origen muy posiblemente.",
    imageKitten: "https://dev.adalab.es/gato-siames.webp",
}
const kittenData_5= {
    nameKitten: "Wild",
    raceKitten: "Chausie",
    descripKitten: "Este gato enorme y de apariencia salvaje se considera un híbrido de gatos domésticos y gatos de la jungla. Son muy activos y juguetones. Es un animal muy cariñoso y apegado a su familia pero no es un gato tranquilo, sino todo lo contrario y eso, unido a su gran inteligencia y curiosidad, puede hacer que se escape de casa para conocer el mundo de su alrededor.",
    imageKitten: "https://www.tiendanimal.es/articulos/wp-content/uploads/2022/07/chausie.jpg"
}
const kittenData_6= {
    nameKitten: "Cielo",
    raceKitten: "Maine Coon",
    descripKitten: "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.",
    imageKitten: "https://dev.adalab.es/maine-coon-cat.webp",
};
const kittenData_7= {
    nameKitten: "Benni",
    raceKitten: "Toyger",
    descripKitten: "El gato Toyger es una raza que busca parecerse lo más posible a un tigre en miniatura. Tiene un llamativo pelaje corto, le encanta perseguir a los miembros de la familia por la casa, acurrucarse a su lado y demandar atención. El Toyger repartirá su cariño por igual con todos los habitantes del hogar. Como curiosidad, a los gatitos Toyger les encanta el agua!, nadar y chapotear es de sus mayores aficiones.",
    imageKitten: "https://www.tiendanimal.es/articulos/wp-content/uploads/2022/02/Toyger-640x427.jpg"
}

const kittenData_8= {
    nameKitten: "Fiona",
    raceKitten: "Sphynx",
    descripKitten: "Produce fascinación y curiosidad. Exótico, raro, bello, extraño…, hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.",
    imageKitten: "https://dev.adalab.es/sphynx-gato.webp"
    };

const initialKitten = [kittenData_1, kittenData_2, kittenData_3, kittenData_4, kittenData_5, kittenData_6, kittenData_7, kittenData_8];

const savedKittenLocalStorage = localStorage.getItem("kittens");
let kittenDataList= savedKittenLocalStorage ? JSON.parse(savedKittenLocalStorage) : initialKitten;

const renderKitten= (kittenDataList) => {
    dataList.innerHTML="";
    kittenDataList.forEach (kitten => {
    const breedText = kitten.raceKitten === "" ? "Uy que despiste, no sabemos su raza" : kitten.raceKitten;
    dataList.innerHTML += `<li class="card">
                    <article>
                        <img class="card_img" src="${kitten.imageKitten}" alt="siames-cat" />
                        <h3 class="card_title">${kitten.nameKitten}</h3>
                        <h4 class="card_race">${breedText}</h4>
                        <p class="card_description">${kitten.descripKitten}</p>
                    </article>
                </li>`;
});}

renderKitten(kittenDataList);

const addBtn= document.querySelector('.js-btn-add');
const addForm= document.querySelector('.js-new-form');
const cancelBtn= document.querySelector('.button-cancel');
const inputForm= document.querySelectorAll('.input'); 

const searchBtn= document.querySelector('.js_button-search');
const inputDescrip= document.querySelector('.js_in_search_desc');
const inputRace= document.querySelector('.js_in_search_race');

function showNewCatForm() {
  addForm.classList.toggle("collapsed");
}
function hideNewCatForm() {
  addForm.classList.add("collapsed");
}

addBtn.addEventListener("click", showNewCatForm);

cancelBtn.addEventListener("click", () => {
    hideNewCatForm();
    inputForm.forEach(input => {
        input.value="";        
    });
})


const searchForDescription = () => {
    const textDescrip= inputDescrip.value.toLowerCase();
    const filterDescripKitten= kittenDataList.filter(kitten => kitten.descripKitten.toLowerCase().includes(textDescrip));
            if (filterDescripKitten.length > 0) {
            dataList.innerHTML = filterDescripKitten.map (kitten =>          
            `<li class="card">
                <article>
                    <img class="card_img" src="${kitten.imageKitten}" alt="siames-cat" />
                    <h3 class="card_title">${kitten.nameKitten}</h3>
                    <h4 class="card_race">${kitten.raceKitten}</h4>
                    <p class="card_description">${kitten.descripKitten}</p>
                </article>
            </li>`).join("");
        } else {
            dataList.innerHTML= "No tenemos ningún gatete con esa descripción";
        }
;}


const searchForRace= () => {
    const textRace= inputRace.value.toLocaleLowerCase();
    const filterRaceKitten= kittenDataList.filter(kitten => kitten.raceKitten.toLocaleLowerCase().includes(textRace));
    if(filterRaceKitten.length > 0) {
        dataList.innerHTML = filterRaceKitten.map (kitten => 
            `<li class="card">
                <article>
                    <img class="card_img" src="${kitten.imageKitten}" alt="siames-cat" />
                    <h3 class="card_title">${kitten.nameKitten}</h3>
                    <h4 class="card_race">${kitten.raceKitten}</h4>
                    <p class="card_description">${kitten.descripKitten}</p>
                </article>
            </li>`).join("");
        } else {
            dataList.innerHTML= "Lo sentimos, pero no tenemos ningún gatete de esa raza, ¿seguro que está bien escrita?";
        }
;}


searchBtn.addEventListener ("click", (event) => { 
    event.preventDefault();
    if (inputRace.value === "" && inputDescrip.value === "") {
        dataList.innerHTML = "Por favor, escribe alguna raza o descripción para buscar el gatito"
        return;
    }
    else if (inputDescrip.value !== ""){
        searchForDescription()
    }  
    else if (inputRace.value !== "") {
        searchForRace()
    } 
    else {
    console.log("No se cumple ninguna condición");
    }   
});

/* FUNCIONALIDAD PARA AÑADIR GATITOS A TRAVÉS DEL FORMULARIO ALMACENÁNDOLOS EN LOCAL STORAGE */

const inputFormUrl= document.querySelector ('.js-input-form-url');
const inputFormName= document.querySelector ('.js-input-form-name');
const inputFormRace= document.querySelector('.js-input-form-race');
const inputFormDescr= document.querySelector('.js-input-form-descr');
const submitForm= document.querySelector('.js-form-submit');

submitForm.addEventListener("submit", (event) =>{
    event.preventDefault();
    const nameKitten= inputFormName.value;
    const raceKitten= inputFormRace.value;
    const descripKitten= inputFormDescr.value;
    const imageKitten= inputFormUrl.value;

    kittenDataList.push({nameKitten, raceKitten, descripKitten, imageKitten});
        localStorage.setItem("kittens", JSON.stringify(kittenDataList))
        inputFormName.value="";
        inputFormRace.value="";
        inputFormDescr.value="";
        inputFormUrl.value="";
        hideNewCatForm();
        renderKitten(kittenDataList);
});




