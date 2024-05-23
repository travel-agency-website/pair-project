// function generateID() {
//     var count = 0;
//     return function () {
//       return count++;
//     };
//   }
//   var id = generateID();
  
//   var hotels = ['france','italia','tunis','marrakech'];
//   var country = ['france','italia','tunis','marrakech'];
  
  
//   function GetFit(id, personName, programName, dietList) {
//     return {
//         id: id,
//         personName: personName,
//         programName: programName,
//         dietList: dietList
//     }
//   }
  
  
//   $(document).ready(function() {
//       $('#get-started').click(function() {
//           $(this).fadeOut(300, function() {
//               $('#menus').fadeIn(300);
//           });
//       });
//   });
  
//   $(document).ready(function() {
//       $('.menu').click(function() {
  
//           var personName = $('#username').val();
//           var dietList;
//           if (personName=== '') {
//               alert('please try again');
//               return;
//           }
//           var programName = $(this).find('h2').text();
  
//           if (programName === "Lose weight") {
//               dietList = loseweightdiet;
//           }
//           else {
//               dietList = gainmusclediet;
//           }
//           var id = generateID();
//           var fit = GetFit(id, personName, programName, dietList);
//           //console.log(fit);
  
//           $('#menus').fadeOut(300, function() {
//               var dietListul = document.getElementById('diet-list');
//               var personNamep = document.getElementById('person-name');
//               dietListul.innerHTML = '';
  
//               for (var i = 0; i < dietList.length; i++) {
//                   var listItem = document.createElement('li');
//                   listItem.textContent = dietList[i];
//                   dietListul.appendChild(listItem);
//               }
//               personNamep.textContent = personNamep.textContent + ' ' + personName;
//               $(personNamep).add(dietListul).fadeIn(300);
//           });
  
//       });
//   });

$(document).ready(function() {
    var hotels = {
        france: ['Hotel Le Meurice', 'Hotel Ritz Paris'],
        italia: ['Hotel Quirinale', 'Hotel Savoy'],
        tunis: ['Hotel La Badira', 'Hotel Dar Said'],
        marrakech: ['Hotel La Mamounia', 'Hotel Riad Kniza']
    }

    var countries = Object.keys(hotels)

    function populateCountryDropdown() {
        var countryDropdown = $('#country-dropdown')
        countries.forEach(function(country) {
            countryDropdown.append($('<option></option>').val(country).text(country))
        })
    }

    function populateHotelDropdown(country) {
        var hotelDropdown = $('#hotel-dropdown')
        hotelDropdown.empty().append('<option value="" disabled selected>Choose your hotel</option>')
        hotels[country].forEach(function(hotel) {
            hotelDropdown.append($('<option></option>').val(hotel).text(hotel))})
        hotelDropdown.show()
    }
    

    $('#get-started').click(function() {
        $(this).fadeOut(300, function() {
            $('#menus').fadeIn(300)
            populateCountryDropdown()})})

    $('#country-dropdown').change(function() {
        var selectedCountry = $(this).val()
        if (selectedCountry) {
            populateHotelDropdown(selectedCountry)
        }
    })

    $('#hotel-dropdown').change(function() {
        var selectedHotel = $(this).val();
        var country = $('#country-dropdown').val()
        if (selectedHotel) {
            $('#results').fadeIn(300);
            var hotelList = $('#diet-list')
            hotelList.empty().append('<li>' + selectedHotel + '</li>')
            $('#person-name').text('Here are the hotels available in ' + country + ':')
        }
    })
})