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
                        prices  = prices.concat("<div class= \"col\"><h2>", item.name, "</h2> <p class = \"test\">", item.blurb, "</p><h3> <div class=\"before-price\"></div>", item.price, "</h3> <div class=\"after-price\"></div> </div>");

                    }else{
                        prices  = prices.concat("<div class= \"col\"><h2>", item.name, "</h2> <h3> <div class=\"before-price\"></div>", item.price, "</h3> <div class=\"after-price\"></div> </div>");

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
                    prices  = prices.concat("<div class= \"col\"><h2>", item.name, "</h2> <p> ",  item.blurb, "</p> <div class=\"before-price\"></div> <ul class=\"pa-dot-leaders\">",
                    "<li> <span> Curry </span> <span>", item.curry, "</span></li>",
                    "<li> <span> Roti (Wrap) </span> <span>", item.roti, "</span></li>",
                    "<li> <span> Rice </span> <span>", item.rice, "</span></li>",
                    "</ul> <div class=\"after-price\"></div> </div> ");
                }

                info.innerHTML = prices;

            }
        }
    });