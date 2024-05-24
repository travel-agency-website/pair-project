$(document).ready(function() {
    var countries = ['France', 'Germany', 'Spain', 'Tunisia', 'Morocco', 'Egypt', 'Italy']; 
    var hotels = [
        {country: 'France', name: 'Hotel Le Meurice', id: 1000, hotelstars: 4, images: ["https://le-meurice-hotel-paris.at-hotels.com/data/Photos/OriginalPhoto/11005/1100546/1100546589/le-meurice-hotel-paris-photo-23.JPEG","https://cf.bstatic.com/xdata/images/hotel/max1280x900/262918143.jpg?k=270160818a91305ac09b76655995cf337b81e08c53f4c4838e78a07e4fe494ac&o=&hp=1","https://cf.bstatic.com/xdata/images/hotel/max1280x900/262917381.jpg?k=adfe09f514e6b1b84edff2ac0a69d6bc65eed6ef153791d58c9f868b88d3d545&o=&hp=1","https://cf.bstatic.com/xdata/images/hotel/max1280x900/57880273.jpg?k=fa9a007a60ee2f5eeecf94c5042d098c2886d157167f03ef9c1bd326aaa85e5b&o=&hp=1"], price: 100},
        {country: 'France', name: 'Hotel Ritz Paris', id: 1001, hotelstars: 4, images: ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/4a/98/1a/suite-de-prestige-windsor.jpg?w=700&h=-1&s=1","https://lifeofatravelczar.com/wp-content/uploads/2023/05/Ritz-Square-1440x1440.jpg","https://lh3.googleusercontent.com/proxy/GhWdPli2fXtZnyYZXDPWoqgVU88jj4uWsYbi1uf_YcabwKxgXTqS3TEKGcGQ_4y0Lk_7N_Fgi2uo59v96ncpSRUkwykKTpz3Nv68IrUFcPiVwhf_LFA9HoFRbRJZvQRwsVd_Lsg3rDuMy_pr71kLQlV6mD08h6GwsPt1pDNEc0eo53-uZ5vYfURx9-_kH-vKhg"], price: 200},
        {country: 'Italy', name: 'Hotel Quirinale', id: 1002, hotelstars: 4, images: ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/333404347.jpg?k=d4147961948e23f0a89c70f49c9f9b0a5aaa952c89397ce2394659157d43cb1c&o=&hp=1","https://www.accredia.it/app/uploads/2019/12/Hotel-Quirinale-Roma-ingressoPICCOLA.jpg","https://images.trvl-media.com/lodging/1000000/10000/1100/1058/dc7fa368.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium"], price: 150},
        {country: 'Italy', name: 'Hotel Savoy', id: 1003, hotelstars: 4, images: ["https://www.kayak.fr/rimg/himg/cb/74/30/ice-82617-3169659_3XL-121391.jpg?width=968&height=607&crop=true","https://www.kayak.fr/rimg/himg/45/39/08/expediav2-16233-26fd79-827210.jpg?width=1366&height=768&crop=true","https://media-cdn.tripadvisor.com/media/photo-m/1280/1d/67/47/98/savoy-westend-hotel.jpg"], price: 250},
        {country: 'Tunisia', name: 'Dar naifer', id: 1004, hotelstars: 4, images: ["https://dar-naifer-tozeur.hotelmix.fr/data/Photos/OriginalPhoto/9727/972705/972705265/Dar-Naifer-Bed-Breakfast-Tozeur-Exterior.JPEG","https://dar-naifer-tozeur.hotelmix.fr/data/Photos/OriginalPhoto/9727/972705/972705115/Dar-Naifer-Bed-Breakfast-Tozeur-Exterior.JPEG","https://dar-naifer-tozeur.hotelmix.fr/data/Photos/OriginalPhoto/9727/972705/972705316/Dar-Naifer-Bed-Breakfast-Tozeur-Exterior.JPEG"], price: 120},
        {country: 'Tunisia', name: 'Hotel anantara ', id: 1005, hotelstars: 4, images: ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/426184678.jpg?k=518646997c0b6ad9956231d9366d0c281a98393a9aef49aaff0e6720c5c44a2c&o=&hp=1","https://assets.anantara.com/image/upload/q_auto,f_auto/media/minor/anantara/images/anantara-tozeur-resort/property/anantara_tozeur_villa_pool_944x510.jpg","https://assets.anantara.com/image/upload/q_auto,f_auto/media/minor/anantara/images/anantara-tozeur-resort/accommodation/room-category/anantara_tozeur_deluxe_sahara_view_room_984x532.jpg"], price: 180},
        {country: 'Morocco', name: 'Hotel La Mamounia', id: 1006, hotelstars: 4, images: ["https://mamounia.com/media/cache/jadro_resize/rc/quaIvt6p1715670533/jadroRoot/medias/611cca0f424ac/couv-2.jpg","https://www.kayak.fr/rimg/himg/85/df/34/leonardo-2680807-Al_Mamoun_Suite_(3)_O-918712.jpg?width=968&height=607&crop=true","https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_600,q_auto,w_600//hotelier-images/ce/9f/435bbeccbd5930a6cd3e692d63e7244ffe0a16ddad3e18deea195bae8fdd.jpeg"], price: 300},
        {country: 'Morocco', name: 'Hotel Riad Kniza', id: 1007, hotelstars: 4, images: ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/40883369.jpg?k=09572d40000e8922d9ef7f6612bf8a5fa24d130a4365b6a8573a6ed39b99402c&o=&hp=1","https://images.trvl-media.com/lodging/2000000/1150000/1140100/1140078/845a8594.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium","https://riad-kniza-hotel-marrakesh-ma.hotelmix.fr/data/Photos/OriginalPhoto/6983/698368/698368560/Riad-Kniza-Marrakesh-Exterior.JPEG"], price: 220}
    ];

    for (var i = 0; i < hotels.length; i++) {
        const orderhotel = i + 1;
        hotels[i].images.push('hotel' + orderhotel + '.jpg');
    }

    function populateCountryDropdown() {
        var countryDropdown = $('#country-dropdown');
        for (var i = 0; i < countries.length; i++) {
            var option = $('<option></option>').val(countries[i]).text(countries[i]);
            countryDropdown.append(option);
        }
    }

    function populateHotelList(country) {
        var hotelContainer = $('#hotel-cards');
        hotelContainer.empty();
        var noResult = true;
        for (var i = 0; i < hotels.length; i++) { 
            if (hotels[i].country === country) {
                var hotel = hotels[i];
                noResult = false;
                if (hotel.images.length > 0) {
                    var imgSrc = hotel.images[0];
                    var cardElement = '<div class="card">' +
                        '<img src="' + imgSrc + '" class="card-img">' +
                        '<div class="card-container">' +
                        '<h4><b>' + hotel.name + '</b></h4>' +
                        '<p>Price: $' + hotel.price + '</p>' +
                        +'<p>' +hotel.hotelstars+ '</p>'
                        '</div>' +
                        '</div>';
                    hotelContainer.append(cardElement);
                } else {
                    $('#no-result').fadeIn(300);
                    $('#results').fadeOut(300);
                }
            }
        }
        if (noResult) {
            $('#no-result').text('No hotels available in this country').fadeIn(300);
            $('#results').fadeOut(300);
        } else {
            $('#no-result').fadeOut(300);
            $('#results').fadeIn(300);
        }
    }

    $('#hotel-cards').on('click', '.card', function() {
        var cardName = $(this).find('.card-container h4').text(); 
        var selectedHotel;
        for (var i = 0; i < hotels.length; i++) { 
            if (hotels[i].name === cardName) {
                selectedHotel = hotels[i];
                break;
            }
        }
        $('#hotel-name').text(selectedHotel.name);
        $('#hotel-country').text(selectedHotel.country);
        $('#hotel-price').text(selectedHotel.price + " Euros");

        $('#hotel-images-container').empty();

        for (var j = 0; j < selectedHotel.images.length-1; j++) {
            var imgElement = $('<img>').attr('src', selectedHotel.images[j]).addClass('hotel-image');
            $('#hotel-images-container').append(imgElement);
        }

        $('#list-country-hotels').fadeOut(300, function() {
            $('#hotel-info').fadeIn(300);
        });
    });

    $('#get-started').click(function() {
        $(this).fadeOut(300, function() {
            $('#list-country-hotels').fadeIn(300);
            populateCountryDropdown();
        });
    });

    $('#country-dropdown').change(function() {
        var selectedCountry = $(this).val();
        if (selectedCountry) {
            populateHotelList(selectedCountry);
        }
    });

    $('#num-nights').on('input', function() {
        var numNights = parseInt($(this).val());
        var hotelPrice = parseInt($('#hotel-price').text().split(' ')[0]); 
        var totalPrice = isNaN(numNights) ? 0 : (hotelPrice * numNights);
        $('#total-price').text(totalPrice + " Euros");
    });

    $('#confirm-button').click(function() {
        $('#hotel-info').fadeOut(300, function() {
            $('#booking-confirmation').fadeIn(300);
        });
    });
});