const data = [{
    "id": 7,
    "email": "michael.lawson@reqres.in",
    "first_name": "Michael",
    "last_name": "Lawson",
    "avatar": "https://reqres.in/img/faces/7-image.jpg"
}, {
    "id": 8,
    "email": "lindsay.ferguson@reqres.in",
    "first_name": "Lindsay",
    "last_name": "Ferguson",
    "avatar": "https://reqres.in/img/faces/8-image.jpg"
}, {
    "id": 9,
    "email": "tobias.funke@reqres.in",
    "first_name": "Tobias",
    "last_name": "Funke",
    "avatar": "https://reqres.in/img/faces/9-image.jpg"
}, {
    "id": 10,
    "email": "byron.fields@reqres.in",
    "first_name": "Byron",
    "last_name": "Fields",
    "avatar": "https://reqres.in/img/faces/10-image.jpg"
}, {
    "id": 11,
    "email": "george.edwards@reqres.in",
    "first_name": "George",
    "last_name": "Edwards",
    "avatar": "https://reqres.in/img/faces/11-image.jpg"
}, {
    "id": 12,
    "email": "rachel.howell@reqres.in",
    "first_name": "Rachel",
    "last_name": "Howell",
    "avatar": "https://reqres.in/img/faces/12-image.jpg"
}]




for (let i = 0; i < data.length; i++) {
    let div1 = document.createElement('div');
    div1.className="section"
    document.body.appendChild(div1);

    let div2 = document.createElement('div');
    div2.className="heading" 
    div1.appendChild(div2);

    let h3 = document.createElement('h3');
    h3.setAttribute("id","titel")
    h3.innerText ='User Card';
    div2.appendChild(h3);

    let div3 = document.createElement('div');
    div3.className="container"
    div1.appendChild(div3);

    let img = document.createElement("img");
    img.src = data[i].avatar;
    div3.appendChild(img);

    let h4_1 = document.createElement('h4');
    h4_1.className="fname"
    h4_1.innerText ='First Name : ' + data[i].first_name
    div3.appendChild(h4_1);

    let h4_2 = document.createElement('h4');
    h4_2.className="lname"
    h4_2.innerText = 'last Name : ' + data[i].last_name
    div3.appendChild(h4_2);

    let h4_3 = document.createElement('h4');
    h4_3.className="email"
    h4_3.innerText ='Email : ' + data[i].email
    div3.appendChild(h4_3);



    
}
