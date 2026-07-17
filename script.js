const flores = document.querySelectorAll(".flower");

const popup = document.getElementById("popup");
const popupText = document.getElementById("popupText");


const mensagens = [

"Espero que, mesmo nos dias difíceis, você nunca esqueça o quanto você é especial. 🌸",

"Talvez eu não saiba exatamente como você está se sentindo. Mas espero que este pequeno jardim tenha conseguido deixar seu dia um pouco mais leve. 💖",

"Que você nunca perca a sua luz, mesmo quando o caminho parecer escuro. ✨",

"Que cada flor tenha lembrado você de que ainda existem dias bonitos esperando por você. 🌷",

"Espero que hoje você consiga encontrar um motivo para sorrir, mesmo que seja pequeno. ❤️"

];


let abertas = 0;



flores.forEach((flor,index)=>{


    flor.onclick = ()=>{


        if(flor.classList.contains("done"))
            return;


        flor.classList.add("done");


        abertas++;



        // ÚLTIMA FLOR

        if(abertas === flores.length){


            popupText.innerHTML = `

            <h2>🌸 O Jardim Floresceu 🌸</h2>

            <br>

            Independentemente do futuro,
            obrigado por tudo o que vivemos.

            <br><br>

            Este jardim foi feito com carinho,
            porque você marcou uma parte
            muito importante da minha vida. ❤️

            `;


            popup.classList.add("show");


            // NÃO TEM TIMER AQUI
            // FICA ABERTO PARA SEMPRE


            return;

        }



        // FLORES NORMAIS

        popupText.innerHTML = mensagens[index];


        popup.classList.add("show");



        setTimeout(()=>{


            popup.classList.remove("show");


        },5000);



    };


});
