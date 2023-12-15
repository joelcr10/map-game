import GlobalVariables from "./globalVariable.js";
export const addBackground = (id) =>{
    if(GlobalVariables.map){
        let text = "";
        if(id=="Australia"){

            text = "./assets/australia.mp4";

        }else if(id=="Asia"){

            text = "./assets/asia.mp4";

        }else if(id=="Africa"){

            text = "./assets/southAmerica.mp4";

        }else if(id=="Europe"){

            text = "./assets/europe.mp4";

        }else if(id=="South America.mp4"){

            text = "./assets/asia.mp4";
            
        }else if(id=="North America"){

            text = "./assets/northAmerica.mp4";
        }
        
        document.getElementById('backgroundVideo').setAttribute('src',text);
        document.getElementById('backgroundVideo').setAttribute('autoplay',true);
        document.getElementById('backgroundVideo').setAttribute('muted',true);

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