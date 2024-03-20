// Initial Points-variabel sätts till 0
var Points = 0;

// Hämta DOM-elementet med ID "ball" och lagra det i variabeln cirkelid
var cirkelid = document.querySelector("#ball")

// Lägg till en klickhändelselyssnare på elementet "ball"
cirkelid.addEventListener("click", function(){
    // Generera ett slumpmässigt värde mellan 0 och 50 för vänster position
    let Random = Math.random() * 50;
    // Sätt vänster position för elementet "ball" till det genererade slumpmässiga värdet
    this.style.left = Random + "%";

    // Generera ett annat slumpmässigt värde mellan 0 och 50 för översta position
    Random = Math.random() * 50;
    // Sätt översta positionen för elementet "ball" till det nya genererade slumpmässiga värdet
    this.style.top = Random + "%";

    // Öka värdet på Points-variabeln med 1
    Points+=1;

    // Hämta DOM-elementet med ID "score" och lagra det i variabeln points
    let points = document.querySelector("#score")

    // Kontrollera om Points är mindre än 10
    if(Points < 10)
        // Om Points är mindre än 10, visa poängen med en ledande nolla
        points.innerText ="Poäng: 0" + Points;
    else
        // Om Points är 10 eller mer, visa poängen utan en ledande nolla
        points.innerText = Points;
})
