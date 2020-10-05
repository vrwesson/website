$(document).ready(function () {
    RetrieveData(findGetParameter("id"));
});

function findGetParameter(parameterName) {
    var result = 0, tmp = [];
    var items = location.search.substr(1).split("&");
    for (var index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return Number(result);
}

function RetrieveData(id = 0) {
    console.log("URL:" + 'rest.api.php?id=' + id);
    $.ajax({
        url: '../rest.api.php?id=' + id,
        type: 'GET',
        dataType: "json",
        success: DisplayData
    });

    $.ajax({
        url: '../rest.api.php?categories',
        type: 'GET',
        dataType: "json",
        success: DisplayCatData
    });
}

function DisplayCatData(data) {
    Object.entries(data).forEach(([key, value]) => {
        document.getElementById("categories_list").innerHTML += '<li class="cat-item"><a href="products.php?category=' + key + '">' + data[key]['fullname'] + '</a></li>';
    });
}

function DisplayData(data) {
    console.log(data);
    document.getElementById("prod_img").src = "https://vrwesson.b-cdn.net/inserts/" + data.pic;
    document.getElementById("prod_title").innerHTML = data.style;
    document.getElementById("prod_type").innerHTML = data.type;
    document.getElementById("prod_thickness").innerHTML = data.thickness;
    document.getElementById("prod_angle").innerHTML = data.angle;
    document.getElementById("prod_radius").innerHTML = data.radius;
    document.getElementById("prod_length").innerHTML = data.length;
    document.getElementById("prod_height").innerHTML = data.height;
    document.getElementById("prod_width").innerHTML = data.width;
    document.getElementById("prod_hole").innerHTML = data.hole;
    document.getElementById("prod_ic").innerHTML = data.IC;
    document.getElementById("prod_facit").innerHTML = data.facit;
    document.getElementById("prod_diameter").innerHTML = data.diameter;
    document.getElementById("header_title").innerHTML = data.style + " Product Details";
};