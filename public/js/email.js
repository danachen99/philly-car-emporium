/* Node-Mailer Code */
const emailBtn = $("#emailBtn");
const clearBtn = $("#clearBtn");


$(clearBtn).on("click", (event) => {
    localStorage.clear("savedCar");
    location.reload();
})


$(emailBtn).on("click", (event) => {
    event.preventDefault();
    console.log(event.target);
    // const what = $(ol).find(".listItem").text();
    // console.log(what);
    let watchlist = document.createElement("ol");

    $(".listItem").each(function() {
        var item = document.createElement("li");
        item.innerHTML = $(this).text();
        console.log(item);
        watchlist.append(item);
    });
    console.log(watchlist);
    console.log(watchlist.innerHTML);
    const mailOptions = {
        from: $("#email-input").val(),
        to: "nodemailerproj1@gmail.com",
        cc: $("#email-input").val(),
        subject: `Pricing Request for Philly Car Emporium`,
        html: `
            <!DOCTYPE html>
            <html class="no-js" lang="en">

<head>
    <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Philly Auto Emporium</title>
    <link rel="stylesheet" href="css/foundation.css" />
    <link rel="stylesheet" href="./stylesheets/style.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/foundation-sites@6.4.3/dist/css/foundation-float.min.css" integrity="sha256-TPcVVrzfTETpAWQ8HhBHIMT7+DbszMr5n3eFi+UwIl8= sha384-+aXh7XSzITwlvjelsNWuL1A9rT8pWGaiqMMeUjtKcsWIfzT1oV8Mp3oYxmjPK8Gv sha512-cArttU/Yh+PzfQ/dhCdfBiU9+su+fuCwFxLrlLbvuJE/ynUbstaKweVPs7Hdbok9jlv9cwt+xdk20wRz7oYErQ=="
        crossorigin="anonymous">
    <!-- foundation-prototype.min.css: Compressed CSS with prototyping classes -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/foundation-sites@6.4.3/dist/css/foundation-prototype.min.css" integrity="sha256-JyhZsgvsqjrdl9GPOILi/zyc+z4dcwXiyP1Q7cwWlM0= sha384-GtUT6gOaCY/S1ggTUOnqe5CQAEAZ6oVTmMq3X4vfZrvp+tLgjBEmwVxJnukor+o0 sha512-x3+KBxBjFh8PGncrfDOsJhntYDBFdJxmpb211THYkQOaGWvk7ckZG6prGUpZqz85AXgiispjow06+bDnIxnWDQ=="
        crossorigin="anonymous">
    <!-- foundation-rtl.min.css: Compressed CSS with right-to-left reading direction -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="https://cdn.jsdelivr.net/npm/foundation-sites@6.4.3/dist/js/foundation.min.js" integrity="sha256-mRYlCu5EG+ouD07WxLF8v4ZAZYCA6WrmdIXyn1Bv9Vk= sha384-KzKofw4qqetd3kvuQ5AdapWPqV1ZI+CnfyfEwZQgPk8poOLWaabfgJOfmW7uI+AV sha512-0gHfaMkY+Do568TgjJC2iMAV0dQlY4NqbeZ4pr9lVUTXQzKu8qceyd6wg/3Uql9qA2+3X5NHv3IMb05wb387rA=="
        crossorigin="anonymous"></script>
    <link href="css/style.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500i,700&display=swap" rel="stylesheet">
</head>

    <body>
 
    <h1>Pricing request from ${$("#name-input").val()} for the following vehicles:</h1>
        <h2>${watchlist.innerHTML}</h2>
    <br/>
    <h3>--Initial Quotes will be provided within 24 hours--</h3>

    <h3>Thanks for choosing Philly Car Emporium for your transportation needs!</h3>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/foundation-sites@6.4.3/dist/js/foundation.min.js" integrity="sha256-mRYlCu5EG+ouD07WxLF8v4ZAZYCA6WrmdIXyn1Bv9Vk= sha384-KzKofw4qqetd3kvuQ5AdapWPqV1ZI+CnfyfEwZQgPk8poOLWaabfgJOfmW7uI+AV sha512-0gHfaMkY+Do568TgjJC2iMAV0dQlY4NqbeZ4pr9lVUTXQzKu8qceyd6wg/3Uql9qA2+3X5NHv3IMb05wb387rA=="
        crossorigin="anonymous"></script>
    </body>

    </html>`

    };
    localStorage.clear("savedCar");
    location.reload();
    $.post('/send', mailOptions)
        .done(data => console.log("email sent successfully", data))
        .fail(error => console.warn("email send failed", error));


});