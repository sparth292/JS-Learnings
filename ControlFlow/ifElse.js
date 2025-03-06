function checkForm(Age,Gender){
    if(Age>=18 && Gender == "Female"){
        console.log("XYZ is a Laadki Bahin Laabharti")
    }
    else{
        console.log("She ain't a Laadki Bahin Laabharti !")        
    }
}

let laadkiBahin = {
   Age : 17,
   Name : "XYZ",
   Gender : "Female"
}

checkForm(laadkiBahin.Age,laadkiBahin.Gender);
