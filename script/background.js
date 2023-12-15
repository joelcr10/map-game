import GlobalVariables from "./globalVariable.js";
export const addBackground = (id) =>{
    if(GlobalVariables.map){
        let text = "";
        if(id=="Australia"){

            text = "url('./assets/australia.gif')";

        }else if(id=="Asia"){

            text = "url('./assets/asia.gif')";

        }else if(id=="Africa"){

            text = "url('./assets/africa1.gif')";

        }else if(id=="Europe"){

            text = "url('./assets/europe.gif')";

        }else if(id=="South America"){

            text = "url('./assets/south-ameria.gif')";
        }else if(id=="North America"){

            text = "url('./assets/north-america.gif')";
        }
        document.getElementById("main").style.backgroundImage = text;
        document.getElementById('main').style.backgroundSize="cover";


        document.getElementById('continent-name').innerText = id;
        document.getElementById('continent-name').style.color = "white";
        document.getElementById("continent-name").style.margin = "auto";
        document.getElementById('continent-name').style.textAlign = "center";
    }
}


export const removeBackground = () =>{
    document.getElementById("main").style.backgroundImage = "none";
        


        document.getElementById('continent-name').innerText = "";
       
}