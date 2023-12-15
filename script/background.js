import GlobalVariables from "./globalVariable.js";
export const addBackground = (id) =>{
    if(GlobalVariables.map){
        let text = "";
        if(id=="Australia"){

            text = "./assets/australia_new.mp4";

        }else if(id=="Asia"){

            text = "url('./assets/asia_new.mp4')";

        }else if(id=="Africa"){

            text = "url('./assets/africa1.gif')";

        }else if(id=="Europe"){

            text = "url('./assets/europe.gif')";

        }else if(id=="South America"){

            text = "url('./assetssouthamerica_new.mp4')";
        }else if(id=="North America"){

            text = "url('./assets/north-america.gif')";
        }
      


        document.getElementById('continent-name').innerText = id;
        document.getElementById('continent-name').style.color = "white";
        document.getElementById("continent-name").style.margin = "auto";
        document.getElementById('continent-name').style.textAlign = "center";
    }
}