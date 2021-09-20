document.getElementsByClassName("fa-circle")[0].style.background= "linear-gradient(30deg, rgb(251, 179, 179) 0%, rgb(231, 57, 18) 100%)";

let QAndA = [
    {
        q:"Care este mărimea rinichiului artificial?",
        a:"Rinichiul artificial are dimensiunile unei cești de cafea."
    },
    {
        q:"Cum are loc procedura de inserare a dispozitivului în organismul uman?",
        a:"Procedura este similară cu cea a transplantului de rinichi. Aceasta necesită spitalizare și se realizează numai cu anestezie generală."
    },
    {
        q:"Este nevoie ca dispozitivul să fie înlocuit după o anumită perioadă de timp? Dacă da, cât de lungă ar fi această perioadă?",
        a:"Odată implantat, rinichiul artificial este permanent. Testările și cercetările curente demonstrează posibilitatea ca dispozitivul să opereze pentru mai mulți ani fără riscuri. Totuși, în cazul apariției unor complicații, înlocuirea filtrului sau a celulelor implică o intervenție minim invazivă."
    },
    {
        q:"Există efecte adverse?",
        a:"Efectele adverse care ar putea avea loc sunt similare cu cele deja cunoscute, legate de procedurile de implantare a dispozitivelor medicale. Printre acestea se numără infecțiile, traumatismele chirurgicale și cicatricile. În plus, s-ar putea resimți nevoia consumării unei cantități mai mari de lichide."
    },
    {
        q:"Care este costul implantării unui rinichi artificial?",
        a:"De obicei, costurile nu sunt mai mari decât cele ale unui transplant renal."
    },
]

let question = document.getElementById("question");
let answer = document.getElementById("answer");

let circles = document.getElementsByClassName("fa-circle");

function insert(x){
    for(let i=0; i<circles.length; i++)
        circles[i].style.background = "rgb(207, 207, 207)";
    circles[x].style.background = "linear-gradient(30deg, rgb(251, 179, 179) 0%, rgb(231, 57, 18) 100%)";

    question.innerText = QAndA[x].q;
    answer.innerText = QAndA[x].a;
    
}