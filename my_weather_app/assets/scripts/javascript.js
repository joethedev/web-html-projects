$(document).ready(function getcurrentCity() {
  $.ajax({
    url: "https://geolocation-db.com/jsonp",
    jsonpCallback: "callback",
    dataType: "jsonp",
    success: function (location) {
      $("#currcity").val(location.country_name);
      console.log(location)
    },
  });


  const currentCity = $("#currcity").val();
  console.log("current city:", currentCity)

  $.ajax({
    url:
      "http://api.openweathermap.org/data/2.5/weather?q=" +
      currentCity +
      "&units=metric" +
      "&APPID=c10bb3bd22f90d636baa008b1529ee25",
    type: "GET",
    dataType: "jsonp",
    success: function (data) {
      $("#temp").html(data.main.temp);
      var desc =
        "<img src='http://openweathermap.org/img/w/" +
        data.weather[0].icon +
        ".png'> " +
        data.weather[0].description;
      $("#desc").html(desc);
      $("#min_temp").html(data.main.temp_min);
      $("#max_temp").html(data.main.temp_max);
      $("#humi").html(data.main.humidity);
      $("#city").val("");
    },
  });
});

$(document).ready(function () {
  $("#getweather").click(function () {
    var city = $("#city").val();

    if (city != "") {
      $.ajax({
        url:
          "http://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric" +
          "&APPID=c10bb3bd22f90d636baa008b1529ee25",
        type: "GET",
        dataType: "jsonp",
        success: function (data) {
          $("#temp").html(data.main.temp);
          var desc =
            "<img src='http://openweathermap.org/img/w/" +
            data.weather[0].icon +
            ".png'> " +
            data.weather[0].description;
          $("#desc").html(desc);
          $("#min_temp").html(data.main.temp_min);
          $("#max_temp").html(data.main.temp_max);
          $("#humi").html(data.main.humidity);
          $("#city").val("");
        },
      });
    }
  });
});
