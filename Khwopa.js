console.log('hello happy ')
const eventList = [
    {
     "id":1,
     "title":'Football',
     "img":"C:/Users/admin/Desktop/newReact/myproject/src/Websites/Khwopa/Images/Footbal.jpg"
    },
    {
        "id":2,
        "title":'Tennis',
        "img":"C:/Users/admin/Desktop/newReact/myproject/src/Websites/Khwopa/Images/Tennis.jpg"
    },
    {
        "id":3,
        "title":'Basketball',
        "img":"C:/Users/admin/Desktop/newReact/myproject/src/Websites/Khwopa/Images/Basketball.jpg"
    },
    {
        "id":4,
        "title":'Badminton',
        "img":"C:/Users/admin/Desktop/newReact/myproject/src/Websites/Khwopa/Images/Badminton.jpg"
    }      
]
// number=[2,43,5,3,65]

// function showNum(){
//     Number = document.getElementsByClassName('.Numbers');
//     Number.innerHTML = number.forEach(element => {
//       `
//       <div class="number_item">
//       <p>${element}</p>
//       </div>
//       `  
//     }).join('');
// }

// showNum();

function showImg(){
    const Events = document.getElementById('Events');
    Events.innerHTML = eventList.map(item =>
        `<div class="image_item">
        <img src="${item.img}" alt="${item.title}">
        <div class="hover_content">
            ${item.title}
        </div>
        </div>
        `).join('');
}
showImg();
