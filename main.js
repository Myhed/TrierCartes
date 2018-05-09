// Objectif savoir trier les cartes comme tu le souhaite.
// Tu auras besoin de la fonction filter et map.

window.onload = function(){
    
    var plateform = document.getElementsByClassName('plateform');
    var want = "carreau"
    //console.log(Array.from(cartes));
    const plateformChild = Array.from(plateform[0].children);
    
    classCards = plateformChild.map(function(card,index){
         return card.className.split(' ');
    });
    
    const res = classCards.filter((ArrayOfClass,index) => {
        const position = ArrayOfClass.indexOf(want)
        let response;
        
        if(position !== -1){
            switch(want){
                case "dame":  
                    response = ArrayOfClass.join(' ');
                 break;
                case"roi": 
                   response = ArrayOfClass.join(' ') 
                break;
                default:
                    response = ArrayOfClass[position]
                break;
            }
           return ArrayOfClass.join(' ');
        }
        
    });
    
        console.log(res);
    
};