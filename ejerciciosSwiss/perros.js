console.log("hola")
$.ajax({
    type: 'GET',
    url: "https://dog.ceo/api/breeds/list",

    success: function (response) {
        console.log (response)
        response.message.forEach(function (perro) {
            $.ajax({
                type: 'GET',
                url: `https://dog.ceo/api/breed/${perro}/images/random`,


                success: function (imagen) {
                    console.log(imagen)
                    $("ul").append(`<li> <a href="${imagen.message}" target="_blank" rel="noopener noreferrer">${perro}  </a></li>`)
                }

            }
            )

        }
        )



    }
}
)

