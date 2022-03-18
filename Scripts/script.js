import { datas } from "../Datas/data.js";


const webdetails = JSON.parse(JSON.stringify(datas))
const container = document.getElementById('container')

window.onload = () => {
    webdetails.map((webdetail,index) => {
        const heading = document.createElement('h1');
        heading.innerText = "WEB " + (index+1) + ".0"
        document.getElementById("body").appendChild(heading)
        webdetail.map((webd) => {
            const cards = document.createElement('div');
            cards.className = "card-container"
            const cardimg = document.createElement('img');
            cardimg.src = webd.image;
            cardimg.className = "card-img";
            cards.appendChild(cardimg)


            const titleandheading = document.createElement('div')
            titleandheading.className = "titleheading";
            const cardheading = document.createElement('h1')
            cardheading.className = "card-heading";
            cardheading.innerText = webd.heading;
            titleandheading.appendChild(cardheading);
            
            const cardtitle = document.createElement('p')
            cardtitle.className = "card-title";
            cardtitle.innerText = webd.title;
            titleandheading.appendChild(cardtitle)

            cards.appendChild(titleandheading)

            container.appendChild(cards)
        })
    })
}
