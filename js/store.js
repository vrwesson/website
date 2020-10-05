/*$(document).ready(function () {
    RetrieveData();
});

var page = 0;
var MaxNavPages = 0;
var MaxNavBtns = 7;
var DisplayProductsQty = 9;

function findGetParameter(parameterName) {
    var result = 0, tmp = [];
    var items = location.search.substr(1).split("&");
    for (var index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}

function RetrieveData(p = 0) {
    page = Number(p);

    cat = findGetParameter("category");
    search = findGetParameter("search");
    //console.log(cat);

    if (cat.length > 1) {
        MyVar = '../rest.api.php?category=' + cat + '&page=' + p;
        //console.log(MyVar);
        $.ajax({
            url: MyVar,
            type: 'GET',
            dataType: "json",
            success: DisplayData
        });
    } else if (search.length > 1) {
        MyVar = '../rest.api.php?search=' + search + '&page=' + p;
        //console.log(MyVar);
        $.ajax({
            url: MyVar,
            type: 'GET',
            dataType: "json",
            success: DisplayData
        });
    } else {
        $.ajax({
            url: '../rest.api.php?page=' + p,
            type: 'GET',
            dataType: "json",
            success: DisplayData
        });
    }

    $.ajax({
        url: '../rest.api.php?categories',
        type: 'GET',
        dataType: "json",
        success: DisplayCatData
    });
}

function DisplayCatData(data) {
    document.getElementById("categories_list").innerHTML = "";
    Object.entries(data).forEach(([key, value]) => {
        document.getElementById("categories_list").innerHTML += '<li class="cat-item"><a href="products.php?category=' + key + '">' + data[key]['fullname'] + '</a></li>';
    });
}

function DisplayData(data) {
    //console.log("page=" + page);
    MaxNavPages = data['total'] / data['cur_total'];
    //console.log("cur_total:" + data['total'] + " total:" + data['cur_total'] + " MaxNavPages:" + MaxNavPages);

    Object.entries(data).forEach(([key, value]) => {
        document.getElementById("current_page").innerHTML = String((page * DisplayProductsQty) + 1) + "-" + String(((page + 1) * DisplayProductsQty));

        switch (key) {
            case "total":
                document.getElementById("total_rows").innerHTML = value;
                pagination = document.getElementById("pagination");
                pagination2 = document.getElementById("pagination2");
                pagination.innerHTML = "";
                NavPageNum = page + 1;

                // previous page nav button
                if (page > 0) {
                    pagination.innerHTML += '<a class="next page-numbers" href="javascript:;" onclick="RetrieveData(\'' + (page - 1) + '\')"><i class="ti ti-arrow-left"></i></a>';
                }

                var c = 0;
                // each individual nav page button
                for (i = NavPageNum; i <= MaxNavPages; i++) {
                    var anchor = document.createElement('a');
                    anchor.className = "page-numbers";
                    if (c >= MaxNavBtns) // only display so many buttons in the bar
                        continue;
                    if (i == NavPageNum) {
                        anchor.className = "page-numbers current";
                    }
                    anchor.href = 'javascript:;';
                    anchor.setAttribute("onclick", "RetrieveData('" + (i - 1) + "')");
                    anchor.innerHTML = i;
                    pagination.appendChild(anchor);
                    c++;
                }

                // next page nav button (on the far end)
                //console.log("NavPageNum:" + NavPageNum);
                //console.log("MaxNavPages:" + MaxNavPages);
                if (NavPageNum < MaxNavPages)
                    pagination.innerHTML += '<a class="next page-numbers" href="javascript:;" onclick="RetrieveData(\'' + (page + 1) + '\')"><i class="ti ti-arrow-right"></i></a>';
                pagination2.innerHTML = pagination.innerHTML;
                break;
            case "products":
                //console.log(value);
                productsUL = document.getElementById("products_ul");
                productsUL.innerHTML = "";
                Object.entries(value).forEach(([key2, value2]) => {
                    Object.entries(value2).forEach(([key3, value3]) => {
                        productsUL.innerHTML += '<li class="product col-md-4 col-sm-6 col-xs-12">\
                            <div class="ttm-product-box">\
                                <a class="ttm-product-title" href="product.php?id=' + value3.id + '">\
                                    <div class="ttm-product-box-inner">\
                                        <div class="ttm-product-image-box">\
                                            <img class="img-fluid lazy" src="https://vrwesson.b-cdn.net/inserts/' + value3.pic + '" alt="" style="width:250px;">\
                                        </div>\
                                    </div>\
                                    <div class="ttm-product-content">\
                                        <h2>' + key3 + '</h2>\
                                    </div>\
                                </a>\
                            </div>\
                        </li>';
                    });
                });
                break;
            default:
                break;
        }
    });
}*/

$(document).ready(function () {
    for (var key in product_categories) {
        document.getElementById("categories_list").innerHTML += '<li><a href="../products/' + key + '.html">' + product_categories[key] + '</a></li>';
    };
});