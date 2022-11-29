fetch('JavaScript/menu.json')
    .then((response) => response.json())
    .then((data) => {


        for (let i = 0; i < data.length; i++) {

            let section = data[i].section;
            let items = data[i].items;
            let type = data[i].type;
            let prices = "";
            let info = document.getElementById(section).querySelector('.items');

         

            if (type==1){


                for (let j = 0; j < items.length; j++){
                    let item = items[j];



                    
                    if (j%3==0){
                        if(j==0){
                            prices = prices.concat("<div class= \"row\">")
                        }else{
                            prices = prices.concat("</div>")
                            prices = prices.concat("<div class= \"row\">")
                        }
                    }



                    if(item.blurb){ 
                        prices  = prices.concat("<div class= \"col\"><h2>", item.name, "</h2> <p>", item.price, "<br>", item.blurb, "</p></div>");

                    }else{
                        prices  = prices.concat("<div class= \"col\"><h2>", item.name, "</h2> <p>", item.price, "</p></div>");

                    }
                }
                info.innerHTML = prices;

            }else{

            
                for (let j = 0; j < items.length; j++){
                    if (j%3==0){
                        if(j==0){
                            prices = prices.concat("<div class= \"row\">")
                        }else{
                            prices = prices.concat("</div>")
                            prices = prices.concat("<div class= \"row\">")
                        }
                    }

                    let item = items[j];
                    prices  = prices.concat("<div class= \"col\"><h2>", item.name, "</h2> <p> <br>",  item.blurb, "<br>","Curry: ", item.curry, "<br>", "Roti: ", item.roti,"<br>", "Rice: ", item.rice,"</p></div>");
                }

                info.innerHTML = prices;

            }
        }
    });