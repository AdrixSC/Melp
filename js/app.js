fetch('https://s3-us-west-2.amazonaws.com/lgoveabucket/data_melp.json').then(function(response) {
        //console.log(response)
        return response.json(); //convertir a json el resultado de la peticion
    })
    .then(function(data) { //una vez obteniendo respuesta, acceder a su data
        let dataRestaurants = data
            //console.log(dataRestaurants);
        restaurants(dataRestaurants);
    })
    .catch(function(error) { //mensaje en caso de no tener exito en la peticion
        console.log('There has been a problem with your fetch operation: ' + error.message);
    });

const restaurants = (dataRestaurants) => {
    dataRestaurants.forEach(function(element) {
        let imagesRestaurants = ["assets/images/a.png", "assets/images/b.png", "assets/images/c.png", "assets/images/d.png", "assets/images/e.png", "assets/images/f.png", "assets/images/g.png", "assets/images/h.png", "assets/images/i.png", "assets/images/k.png", "assets/images/l.png", "assets/images/m.png", "assets/images/n.png", "assets/images/ñ.png", "assets/images/o.png", "assets/images/p.png", "assets/images/r.png", "assets/images/s.png", "assets/images/v.png", "assets/images/y.png", "assets/images/z.png"];
        let rating = element.rating;
        let name = element.name;
        let city = element.address.city;
        paintInfoRestaurants(rating, name, city)
    });
}

const paintInfoRestaurants = (rating, name, city) => {
    let template = `<section class="row">
                <section class="col s12 col m5 col l5 col xl5">
                <div>
                    <img class="w-img" src="assets/images/a.png" alt="a">
                </div>
            </section>
            <section class="col s12 col m6 col l6 col xl6">
                <p>${name}</p>
                <hr class="hr-text">
                <p>${city}</p>
                <hr class="hr-text">
                <p>${rating}</p>
                <div class="btn-add">
                    <a href="views/detailRestaurants.html" class="btn-floating btn-large waves-effect waves-light pink"><i class="material-icons">add</i></a>
                </div>
            </section>
        </section>`

    let sectionCardRestaurants = document.getElementById("card-Restaurants");
    sectionCardRestaurants.innerHTML += template;
}