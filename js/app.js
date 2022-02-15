function createGrid (row, column) //creo funzione per creare la griglia al click del btn
{
    // easy
    // const row = 10; //imposto il num delle righe della griglia
    // const column = 10; //imposto il num delle colonne della griglia
    const numbers = []; //inizializzo un array vuoto che contenga i numeri da aggiungere alla griglia
    const totalCells = row * column; //valore che indica quanto deve essere grande la griglia

    //riempo l'array con tanti numeri quante sono le celle
    for (let i = 0; i < totalCells ; i++) 
    {
        numbers.push(i+1);
    }

    //seleziono l'elemento grid dall'html
    const grid = document.querySelector("#grid"); 

    //creo tanti quadrati quante devono essere le celle totali
    for (let i = 0; i < totalCells ; i++) 
    {
        //creo un quadratino, gli assegno la classe square e lo "appendo" alla griglia
        const square = document.createElement("div"); 
        square.classList.add("square"); 
        grid.appendChild(square); 

        //prendo il numero dall'array e lo scrivo all'interno del quadratino
        let temp = numbers[i];
        square.append(temp);

        // aggiungo colore azzurro al click dei quadratini
        square.addEventListener('click', function()
        {
            square.style.backgroundColor = '#7f7fff';
            console.log("I'm working");
        });
    }
}

//seleziono il select e il btn dal dom e, a seconda della difficoltà scelta, creo una griglia

const btn = document.getElementById("selectBtn");

btn.addEventListener('click', function() 
{
    const selectElement = document.getElementById('difficulty');
    switch (selectElement.value)
    {
        case "easy":
            createGrid(10, 10);
            break;
        case "hard":
            createGrid(9, 9);
            break;
        case "crazy":
            createGrid(7, 7);
            break;
    }
});

