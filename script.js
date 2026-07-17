const overlay = document.getElementById("overlay");
const mensagens = [
    "Espero que, mesmo nos dias difíceis, você nunca esqueça o quanto você é especial. 🌸",

    "Talvez eu não saiba exatamente como você está se sentindo. Mas espero que este pequeno jardim tenha conseguido deixar seu dia um pouco mais leve. 💖",

    "Que você nunca perca a sua luz, mesmo quando o caminho parecer escuro. ✨",

    "Que cada flor tenha lembrado você de que ainda existem dias bonitos esperando por você. 🌷",

    "Espero que hoje você consiga encontrar um motivo para sorrir, mesmo que seja pequeno. ❤️"
];

const flores = document.querySelectorAll(".flower");

const popup = document.getElementById("popup");
const popupText = document.getElementById("popupText");

let abertas = 0;

flores.forEach((flor,index)=>{

    flor.addEventListener("click",()=>{

        if(flor.classList.contains("done"))
            return;

        flor.classList.add("done");

        abertas++;

        flor.style.transform="scale(1.4)";
        flor.style.filter="drop-shadow(0 0 20px gold)";

        popupText.innerHTML=mensagens[index];

        popup.classList.add("show");

        setTimeout(()=>{
            popup.classList.remove("show");
        },5500);

        if(abertas===5){

            setTimeout(()=>{

                popupText.innerHTML=
                "<h2>🌸 O Jardim Floresceu 🌸</h2><br>Independentemente do futuro, obrigado por tudo o que vivemos. Este jardim foi feito com carinho, porque você marcou uma parte muito importante da minha vida.";

                popup.classList.add("show");

            },7500);

        }

    });

});
