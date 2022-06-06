// var list = document.querySelectorAll('#list')
// var result = document.getElementById('result');
// var submit = document.getElementById('submit');

// var value = 1;

//  list.forEach(function (item) {
//       item.addEventListener('click', function () {

//         var current = document.querySelectorAll('.selected');
//         if (current.length > 0) {
//           current.forEach(function (item) {
//             item.classList.remove('selected');
//           });
//         }

//         item.classList.toggle("selected");
//         value = item.value;

//       });

//     });

// submit.addEventListener('click', function () {
//       var ratingCard = document.getElementById('rating');
//       var thanksCard = document.getElementById('feedbackCard');

//       result.innerHTML = "You selected out " + value + " of 5";

//       ratingCard.style.display = "none";
//       thanksCard.style.display = "block";
//     });

var list = document.querySelectorAll('#list');
    var result = document.getElementById('result');
    var submit = document.getElementById('submit');
    var value = 1
    list.forEach(function (item) {
      item.addEventListener('click', function () {

        var current = document.querySelectorAll('.selected');
        if (current.length > 0) {
          current.forEach(function (item) {
            item.classList.remove('selected');
          });
        }

        item.classList.toggle("selected");
        value = item.value;

      });

    });

    submit.addEventListener('click', function () {
      var ratingCard = document.getElementById('rating');
      var thanksCard = document.getElementById('thanks');

      result.innerHTML = "You selected out " + value + " of 5";

      ratingCard.style.display = "none";
      thanksCard.style.display = "block";
    });