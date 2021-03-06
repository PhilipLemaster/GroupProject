$(document).ready(function(event){

// SPLASH PAGE HIDE/SHOW CONTENT
$("#nonsplashContent").hide(100);
$('#bottomBox').hide(100);
$(".greeting").on("click  ", function(event) {
   
  $(".splash").hide(100);
  $('#bottomBox').show(100);
  $("#nonsplashContent").show(100);
  

});

// GENESIS BUTTON API PULL AND DOM CREATION
$(document).on('click', '#genButton',function(event) {
     

    var queryURL = "https://api-v3.igdb.com/games";

    $.ajax({
      url: queryURL,
      method: "POST",
      headers: {
          'user-key' : 'f13f3ae70c0329eaf198249bba188dbd',
          'Accept' : 'Application/JSON'
      }, 

      data : 'fields name,total_rating,cover.url,release_dates.human,platforms.name,summary,genres.name,screenshots.url; where platforms = 29 ; sort popularity desc; limit 50;'
      })

      .then(function(response) {
        var results = response;
        console.log(response);

        var table = $('#results');
        var tBody = $('tbody');
        tBody.empty();      

        for (var i = 0; i < 50; i++) {
            // Variables for main table
            coverimage = results[i].cover
            var tRow = $('<tr>');
            tRow.appendTo(tBody);

            var title = $('<th>').text(results[i].name);
            title.appendTo(tRow);


            if (coverimage === undefined) {
                source = 'homestaymatch.com/images/no-image-available.png';
            }

            else {
                source = String(coverimage.url);
            }
                
            var image = $('<img>');
            image.attr("src", "https://" + source);
            image.appendTo(tRow);

            var rating = $('<th>').text(Math.round(parseInt(results[i].total_rating)));
            rating.appendTo(tRow);

            let rdate = results[i].release_dates[0];
            var releaseDates = $('<th>').text(rdate.human);
            releaseDates.appendTo(tRow);

            var mcBut = $('<button>More Info</button>');
            $(mcBut).addClass('clear button warning').attr('data-open', 'moreContent');
            mcBut.appendTo(tRow);

            // Create mcBox and dynamically hide/show
            
            var mcBox = $('<div>').appendTo(tRow);
            mcBox.hide();
            var mcTitle = $('<h4>').text(results[i].name);
            mcTitle.appendTo(mcBox);
            
            if (results[i].summary != undefined || results[i].summary != null) {
              var mcSummary = $('<p>').text(results[i].summary);
              mcSummary.appendTo(mcBox);
            }

            if (results[i].genres != undefined || results[i].genres != null) {
                let mcGen = results[i].genres[0];
                var mcGenres = $('<p>').text('Genre: ' + mcGen.name);
                mcGenres.appendTo(mcBox);
            }
            
            
            for (y = 0; y < 3; y++) {
              if (results[i].screenshots != undefined) {
                let mcScreenSource = results[i].screenshots[y];
                if (mcScreenSource != undefined || mcScreenSource != null) {
                  let mcSource = mcScreenSource.url;
                  var mcPic = $('<img>');
                  mcPic.attr("src", "https://" + mcSource);
                  mcPic.appendTo(mcBox);
                  mcPic.addClass('screenshots');
                }
              }
                
                
            }
            

            mcBut.on('click', (function(event){
                console.log('sup');
                $(this).nextAll().toggle();
            })

            
            )}
      });

      
  });

  jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});

// N64 BUTTON API PULL AND DOM CREATION

$(document).on('click', '#n64Button',function(event) {
     

    var queryURL = "https://api-v3.igdb.com/games";

    $.ajax({
      url: queryURL,
      method: "POST",
      headers: {
          'user-key' : 'f13f3ae70c0329eaf198249bba188dbd',
          'Accept' : 'Application/JSON'
      }, 

      data : 'fields name,total_rating,cover.url,release_dates.human,platforms.name,summary,genres.name,screenshots.url; where platforms = 4 ; sort popularity desc; limit 50;'
      })

      .then(function(response) {
        var results = response;
        console.log(response);

        var table = $('#results');
        var tBody = $('tbody');
        tBody.empty();      

        for (var i = 0; i < 50; i++) {
            // Variables for main table
            coverimage = results[i].cover
            var tRow = $('<tr>');
            tRow.appendTo(tBody);

            var title = $('<th>').text(results[i].name);
            title.appendTo(tRow);


            if (coverimage === undefined) {
                source = 'homestaymatch.com/images/no-image-available.png';
            }

            else {
                source = String(coverimage.url);
            }
                
            var image = $('<img>');
            image.attr("src", "https://" + source);
            image.appendTo(tRow);

            var rating = $('<th>').text(Math.round(parseInt(results[i].total_rating)));
            rating.appendTo(tRow);

            let rdate = results[i].release_dates[0];
            var releaseDates = $('<th>').text(rdate.human);
            releaseDates.appendTo(tRow);

            var mcBut = $('<button>More Info</button>');
            $(mcBut).addClass('clear button warning').attr('data-open', 'moreContent');
            mcBut.appendTo(tRow);

            // Create mcBox and dynamically hide/show
            
            var mcBox = $('<div>').appendTo(tRow);
            mcBox.hide();
            var mcTitle = $('<h4>').text(results[i].name);
            mcTitle.appendTo(mcBox);
            
            if (results[i].summary != undefined || results[i].summary != null) {
              var mcSummary = $('<p>').text(results[i].summary);
              mcSummary.appendTo(mcBox);
            }

            if (results[i].genres != undefined || results[i].genres != null) {
                let mcGen = results[i].genres[0];
                var mcGenres = $('<p>').text('Genre: ' + mcGen.name);
                mcGenres.appendTo(mcBox);
            }
            
            
            for (y = 0; y < 3; y++) {
              if (results[i].screenshots != undefined) {
                let mcScreenSource = results[i].screenshots[y];
                if (mcScreenSource != undefined || mcScreenSource != null) {
                  let mcSource = mcScreenSource.url;
                  var mcPic = $('<img>');
                  mcPic.attr("src", "https://" + mcSource);
                  mcPic.appendTo(mcBox);
                  mcPic.addClass('screenshots');
                }
              }
                
                
            }
            

            mcBut.on('click', (function(event){
                console.log('sup');
                $(this).nextAll().toggle();
            })

            
            )}
      });

      
  });

  jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});

// XBOX BUTTON API PULL AND DOM CREATION

$(document).on('click', '#xButton',function(event) {
     

  var queryURL = "https://api-v3.igdb.com/games";

  $.ajax({
    url: queryURL,
    method: "POST",
    headers: {
        'user-key' : 'f13f3ae70c0329eaf198249bba188dbd',
        'Accept' : 'Application/JSON'
    }, 

    data : 'fields name,total_rating,cover.url,release_dates.human,platforms.name,summary,genres.name,screenshots.url; where platforms = 11 ; sort popularity desc; limit 50;'
    })

    .then(function(response) {
      var results = response;
      console.log(response);

      var table = $('#results');
      var tBody = $('tbody');
      tBody.empty();      

      for (var i = 0; i < 50; i++) {
          // Variables for main table
          coverimage = results[i].cover
          var tRow = $('<tr>');
          tRow.appendTo(tBody);

          var title = $('<th>').text(results[i].name);
          title.appendTo(tRow);


          if (coverimage === undefined) {
              source = 'homestaymatch.com/images/no-image-available.png';
          }

          else {
              source = String(coverimage.url);
          }
              
          var image = $('<img>');
          image.attr("src", "https://" + source);
          image.appendTo(tRow);

          var rating = $('<th>').text(Math.round(parseInt(results[i].total_rating)));
          rating.appendTo(tRow);

          let rdate = results[i].release_dates[0];
          var releaseDates = $('<th>').text(rdate.human);
          releaseDates.appendTo(tRow);

          var mcBut = $('<button>More Info</button>');
          $(mcBut).addClass('clear button warning').attr('data-open', 'moreContent');
          mcBut.appendTo(tRow);

          // Create mcBox and dynamically hide/show
          
          var mcBox = $('<div>').appendTo(tRow);
          mcBox.hide();
          var mcTitle = $('<h4>').text(results[i].name);
          mcTitle.appendTo(mcBox);
          
          if (results[i].summary != undefined || results[i].summary != null) {
            var mcSummary = $('<p>').text(results[i].summary);
            mcSummary.appendTo(mcBox);
          }

          if (results[i].genres != undefined || results[i].genres != null) {
              let mcGen = results[i].genres[0];
              var mcGenres = $('<p>').text('Genre: ' + mcGen.name);
              mcGenres.appendTo(mcBox);
          }
          
          
          for (y = 0; y < 3; y++) {
            if (results[i].screenshots != undefined) {
              let mcScreenSource = results[i].screenshots[y];
              if (mcScreenSource != undefined || mcScreenSource != null) {
                let mcSource = mcScreenSource.url;
                var mcPic = $('<img>');
                mcPic.attr("src", "https://" + mcSource);
                mcPic.appendTo(mcBox);
                mcPic.addClass('screenshots');
              }
            }
              
              
          }
          

          mcBut.on('click', (function(event){
              console.log('sup');
              $(this).nextAll().toggle();
          })

          
          )}
    });

    
});

  jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});

// PS1 BUTTON API PULL AND DOM CREATION

$(document).on('click', '#ps1Button',function(event) {
     

  var queryURL = "https://api-v3.igdb.com/games";

  $.ajax({
    url: queryURL,
    method: "POST",
    headers: {
        'user-key' : 'f13f3ae70c0329eaf198249bba188dbd',
        'Accept' : 'Application/JSON'
    }, 

    data : 'fields name,total_rating,cover.url,release_dates.human,platforms.name,summary,genres.name,screenshots.url; where platforms = 7 ; sort popularity desc; limit 50;'
    })

    .then(function(response) {
      var results = response;
      console.log(response);

      var table = $('#results');
      var tBody = $('tbody');
      tBody.empty();      

      for (var i = 0; i < 50; i++) {
          // Variables for main table
          coverimage = results[i].cover
          var tRow = $('<tr>');
          tRow.appendTo(tBody);

          var title = $('<th>').text(results[i].name);
          title.appendTo(tRow);


          if (coverimage === undefined) {
              source = 'homestaymatch.com/images/no-image-available.png';
          }

          else {
              source = String(coverimage.url);
          }
              
          var image = $('<img>');
          image.attr("src", "https://" + source);
          image.appendTo(tRow);

          var rating = $('<th>').text(Math.round(parseInt(results[i].total_rating)));
          rating.appendTo(tRow);

          let rdate = results[i].release_dates[0];
          var releaseDates = $('<th>').text(rdate.human);
          releaseDates.appendTo(tRow);

          var mcBut = $('<button>More Info</button>');
          $(mcBut).addClass('clear button warning').attr('data-open', 'moreContent');
          mcBut.appendTo(tRow);

          // Create mcBox and dynamically hide/show
          
          var mcBox = $('<div>').appendTo(tRow);
          mcBox.hide();
          var mcTitle = $('<h4>').text(results[i].name);
          mcTitle.appendTo(mcBox);
          
          if (results[i].summary != undefined || results[i].summary != null) {
            var mcSummary = $('<p>').text(results[i].summary);
            mcSummary.appendTo(mcBox);
          }

          if (results[i].genres != undefined || results[i].genres != null) {
              let mcGen = results[i].genres[0];
              var mcGenres = $('<p>').text('Genre: ' + mcGen.name);
              mcGenres.appendTo(mcBox);
          }
          
          
          for (y = 0; y < 3; y++) {
            if (results[i].screenshots != undefined) {
              let mcScreenSource = results[i].screenshots[y];
              if (mcScreenSource != undefined || mcScreenSource != null) {
                let mcSource = mcScreenSource.url;
                var mcPic = $('<img>');
                mcPic.attr("src", "https://" + mcSource);
                mcPic.appendTo(mcBox);
                mcPic.addClass('screenshots');
              }
            }
              
              
          }
          

          mcBut.on('click', (function(event){
              console.log('sup');
              $(this).nextAll().toggle();
          })

          
          )}
    });

    
});

  jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});

// SNES BUTTON API PULL AND DOM CREATION

$(document).on('click', '#snesButton',function(event) {
     

  var queryURL = "https://api-v3.igdb.com/games";

  $.ajax({
    url: queryURL,
    method: "POST",
    headers: {
        'user-key' : 'f13f3ae70c0329eaf198249bba188dbd',
        'Accept' : 'Application/JSON'
    }, 

    data : 'fields name,total_rating,cover.url,release_dates.human,platforms.name,summary,genres.name,screenshots.url; where platforms = 19 ; sort popularity desc; limit 50;'
    })

    .then(function(response) {
      var results = response;
      console.log(response);

      var table = $('#results');
      var tBody = $('tbody');
      tBody.empty();      

      for (var i = 0; i < 50; i++) {
          // Variables for main table
          coverimage = results[i].cover
          var tRow = $('<tr>');
          tRow.appendTo(tBody);

          var title = $('<th>').text(results[i].name);
          title.appendTo(tRow);


          if (coverimage === undefined) {
              source = 'homestaymatch.com/images/no-image-available.png';
          }

          else {
              source = String(coverimage.url);
          }
              
          var image = $('<img>');
          image.attr("src", "https://" + source);
          image.appendTo(tRow);

          var rating = $('<th>').text(Math.round(parseInt(results[i].total_rating)));
          rating.appendTo(tRow);

          let rdate = results[i].release_dates[0];
          var releaseDates = $('<th>').text(rdate.human);
          releaseDates.appendTo(tRow);

          var mcBut = $('<button>More Info</button>');
          $(mcBut).addClass('clear button warning').attr('data-open', 'moreContent');
          mcBut.appendTo(tRow);

          // Create mcBox and dynamically hide/show
          
          var mcBox = $('<div>').appendTo(tRow);
          mcBox.hide();
          var mcTitle = $('<h4>').text(results[i].name);
          mcTitle.appendTo(mcBox);
          
          if (results[i].summary != undefined || results[i].summary != null) {
            var mcSummary = $('<p>').text(results[i].summary);
            mcSummary.appendTo(mcBox);
          }

          if (results[i].genres != undefined || results[i].genres != null) {
              let mcGen = results[i].genres[0];
              var mcGenres = $('<p>').text('Genre: ' + mcGen.name);
              mcGenres.appendTo(mcBox);
          }
          
          
          for (y = 0; y < 3; y++) {
            if (results[i].screenshots != undefined) {
              let mcScreenSource = results[i].screenshots[y];
              if (mcScreenSource != undefined || mcScreenSource != null) {
                let mcSource = mcScreenSource.url;
                var mcPic = $('<img>');
                mcPic.attr("src", "https://" + mcSource);
                mcPic.appendTo(mcBox);
                mcPic.addClass('screenshots');
              }
            }
              
              
          }
          

          mcBut.on('click', (function(event){
              console.log('sup');
              $(this).nextAll().toggle();
          })

          
          )}
    });

    
});

  jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});

// ATARI BUTTON API PULL AND DOM CREATION

$(document).on('click', '#atariButton',function(event) {
     

  var queryURL = "https://api-v3.igdb.com/games";

  $.ajax({
    url: queryURL,
    method: "POST",
    headers: {
        'user-key' : 'f13f3ae70c0329eaf198249bba188dbd',
        'Accept' : 'Application/JSON'
    }, 

    data : 'fields name,total_rating,cover.url,release_dates.human,platforms.name,summary,genres.name,screenshots.url; where platforms = 59 ; sort popularity desc; limit 50;'
    })

    .then(function(response) {
      var results = response;
      console.log(response);

      var table = $('#results');
      var tBody = $('tbody');
      tBody.empty();      

      for (var i = 0; i < 50; i++) {
          // Variables for main table
          coverimage = results[i].cover
          var tRow = $('<tr>');
          tRow.appendTo(tBody);

          var title = $('<th>').text(results[i].name);
          title.appendTo(tRow);


          if (coverimage === undefined) {
              source = 'homestaymatch.com/images/no-image-available.png';
          }

          else {
              source = String(coverimage.url);
          }
              
          var image = $('<img>');
          image.attr("src", "https://" + source);
          image.appendTo(tRow);

          var rating = $('<th>').text(Math.round(parseInt(results[i].total_rating)));
          rating.appendTo(tRow);

          let rdate = results[i].release_dates[0];
          var releaseDates = $('<th>').text(rdate.human);
          releaseDates.appendTo(tRow);

          var mcBut = $('<button>More Info</button>');
          $(mcBut).addClass('clear button warning').attr('data-open', 'moreContent');
          mcBut.appendTo(tRow);

          // Create mcBox and dynamically hide/show
          
          var mcBox = $('<div>').appendTo(tRow);
          mcBox.hide();
          var mcTitle = $('<h4>').text(results[i].name);
          mcTitle.appendTo(mcBox);
          
          if (results[i].summary != undefined || results[i].summary != null) {
            var mcSummary = $('<p>').text(results[i].summary);
            mcSummary.appendTo(mcBox);
          }

          if (results[i].genres != undefined || results[i].genres != null) {
              let mcGen = results[i].genres[0];
              var mcGenres = $('<p>').text('Genre: ' + mcGen.name);
              mcGenres.appendTo(mcBox);
          }
          
          
          for (y = 0; y < 3; y++) {
            if (results[i].screenshots != undefined) {
              let mcScreenSource = results[i].screenshots[y];
              if (mcScreenSource != undefined || mcScreenSource != null) {
                let mcSource = mcScreenSource.url;
                var mcPic = $('<img>');
                mcPic.attr("src", "https://" + mcSource);
                mcPic.appendTo(mcBox);
                mcPic.addClass('screenshots');
              }
            }
              
              
          }
          

          mcBut.on('click', (function(event){
              console.log('sup');
              $(this).nextAll().toggle();
          })

          
          )}
    });

    
});

  jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});

// GAMECUBE BUTTON API PULL AND DOM CREATION

$(document).on('click', '#gcButton',function(event) {
     

  var queryURL = "https://api-v3.igdb.com/games";

  $.ajax({
    url: queryURL,
    method: "POST",
    headers: {
        'user-key' : 'f13f3ae70c0329eaf198249bba188dbd',
        'Accept' : 'Application/JSON'
    }, 

    data : 'fields name,total_rating,cover.url,release_dates.human,platforms.name,summary,genres.name,screenshots.url; where platforms = 21 ; sort popularity desc; limit 50;'
    })

    .then(function(response) {
      var results = response;
      console.log(response);

      var table = $('#results');
      var tBody = $('tbody');
      tBody.empty();      

      for (var i = 0; i < 50; i++) {
          // Variables for main table
          coverimage = results[i].cover
          var tRow = $('<tr>');
          tRow.appendTo(tBody);

          var title = $('<th>').text(results[i].name);
          title.appendTo(tRow);


          if (coverimage === undefined) {
              source = 'homestaymatch.com/images/no-image-available.png';
          }

          else {
              source = String(coverimage.url);
          }
              
          var image = $('<img>');
          image.attr("src", "https://" + source);
          image.appendTo(tRow);

          var rating = $('<th>').text(Math.round(parseInt(results[i].total_rating)));
          rating.appendTo(tRow);

          let rdate = results[i].release_dates[0];
          var releaseDates = $('<th>').text(rdate.human);
          releaseDates.appendTo(tRow);

          var mcBut = $('<button>More Info</button>');
          $(mcBut).addClass('clear button warning').attr('data-open', 'moreContent');
          mcBut.appendTo(tRow);

          // Create mcBox and dynamically hide/show
          
          var mcBox = $('<div>').appendTo(tRow);
          mcBox.hide();
          var mcTitle = $('<h4>').text(results[i].name);
          mcTitle.appendTo(mcBox);
          
          if (results[i].summary != undefined || results[i].summary != null) {
            var mcSummary = $('<p>').text(results[i].summary);
            mcSummary.appendTo(mcBox);
          }

          if (results[i].genres != undefined || results[i].genres != null) {
              let mcGen = results[i].genres[0];
              var mcGenres = $('<p>').text('Genre: ' + mcGen.name);
              mcGenres.appendTo(mcBox);
          }
          
          
          for (y = 0; y < 3; y++) {
            if (results[i].screenshots != undefined) {
              let mcScreenSource = results[i].screenshots[y];
              if (mcScreenSource != undefined || mcScreenSource != null) {
                let mcSource = mcScreenSource.url;
                var mcPic = $('<img>');
                mcPic.attr("src", "https://" + mcSource);
                mcPic.appendTo(mcBox);
                mcPic.addClass('screenshots');
              }
            }
              
              
          }
          

          mcBut.on('click', (function(event){
              console.log('sup');
              $(this).nextAll().toggle();
          })

          
          )}
    });

    
});

  jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});

// DREAMCAST BUTTON API PULL AND DOM CREATION

$(document).on('click', '#dreamButton',function(event) {
     

  var queryURL = "https://api-v3.igdb.com/games";

  $.ajax({
    url: queryURL,
    method: "POST",
    headers: {
        'user-key' : 'f13f3ae70c0329eaf198249bba188dbd',
        'Accept' : 'Application/JSON'
    }, 

    data : 'fields name,total_rating,cover.url,release_dates.human,platforms.name,summary,genres.name,screenshots.url; where platforms = 23 ; sort popularity desc; limit 50;'
    })

    .then(function(response) {
      var results = response;
      console.log(response);

      var table = $('#results');
      var tBody = $('tbody');
      tBody.empty();      

      for (var i = 0; i < 50; i++) {
          // Variables for main table
          coverimage = results[i].cover
          var tRow = $('<tr>');
          tRow.appendTo(tBody);

          var title = $('<th>').text(results[i].name);
          title.appendTo(tRow);


          if (coverimage === undefined) {
              source = 'homestaymatch.com/images/no-image-available.png';
          }

          else {
              source = String(coverimage.url);
          }
              
          var image = $('<img>');
          image.attr("src", "https://" + source);
          image.appendTo(tRow);

          var rating = $('<th>').text(Math.round(parseInt(results[i].total_rating)));
          rating.appendTo(tRow);

          let rdate = results[i].release_dates[0];
          var releaseDates = $('<th>').text(rdate.human);
          releaseDates.appendTo(tRow);

          var mcBut = $('<button>More Info</button>');
          $(mcBut).addClass('clear button warning').attr('data-open', 'moreContent');
          mcBut.appendTo(tRow);

          // Create mcBox and dynamically hide/show
          
          var mcBox = $('<div>').appendTo(tRow);
          mcBox.hide();
          var mcTitle = $('<h4>').text(results[i].name);
          mcTitle.appendTo(mcBox);
          
          if (results[i].summary != undefined || results[i].summary != null) {
            var mcSummary = $('<p>').text(results[i].summary);
            mcSummary.appendTo(mcBox);
          }

          if (results[i].genres != undefined || results[i].genres != null) {
              let mcGen = results[i].genres[0];
              var mcGenres = $('<p>').text('Genre: ' + mcGen.name);
              mcGenres.appendTo(mcBox);
          }
          
          
          for (y = 0; y < 3; y++) {
            if (results[i].screenshots != undefined) {
              let mcScreenSource = results[i].screenshots[y];
              if (mcScreenSource != undefined || mcScreenSource != null) {
                let mcSource = mcScreenSource.url;
                var mcPic = $('<img>');
                mcPic.attr("src", "https://" + mcSource);
                mcPic.appendTo(mcBox);
                mcPic.addClass('screenshots');
              }
            }
              
              
          }
          

          mcBut.on('click', (function(event){
              console.log('sup');
              $(this).nextAll().toggle();
          })

          
          )}
    });

    
});

  jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});

// GAMEBOY BUTTON API PULL AND DOM CREATION

$(document).on('click', '#gboyButton',function(event) {
     

  var queryURL = "https://api-v3.igdb.com/games";

  $.ajax({
    url: queryURL,
    method: "POST",
    headers: {
        'user-key' : 'f13f3ae70c0329eaf198249bba188dbd',
        'Accept' : 'Application/JSON'
    }, 

    data : 'fields name,total_rating,cover.url,release_dates.human,platforms.name,summary,genres.name,screenshots.url; where platforms = 33 ; sort popularity desc; limit 50;'
    })

    .then(function(response) {
      var results = response;
      console.log(response);

      var table = $('#results');
      var tBody = $('tbody');
      tBody.empty();      

      for (var i = 0; i < 50; i++) {
          // Variables for main table
          coverimage = results[i].cover
          var tRow = $('<tr>');
          tRow.appendTo(tBody);

          var title = $('<th>').text(results[i].name);
          title.appendTo(tRow);


          if (coverimage === undefined) {
              source = 'homestaymatch.com/images/no-image-available.png';
          }

          else {
              source = String(coverimage.url);
          }
              
          var image = $('<img>');
          image.attr("src", "https://" + source);
          image.appendTo(tRow);

          var rating = $('<th>').text(Math.round(parseInt(results[i].total_rating)));
          rating.appendTo(tRow);

          let rdate = results[i].release_dates[0];
          var releaseDates = $('<th>').text(rdate.human);
          releaseDates.appendTo(tRow);

          var mcBut = $('<button>More Info</button>');
          $(mcBut).addClass('clear button warning').attr('data-open', 'moreContent');
          mcBut.appendTo(tRow);

          // Create mcBox and dynamically hide/show
          
          var mcBox = $('<div>').appendTo(tRow);
          mcBox.hide();
          var mcTitle = $('<h4>').text(results[i].name);
          mcTitle.appendTo(mcBox);
          
          if (results[i].summary != undefined || results[i].summary != null) {
            var mcSummary = $('<p>').text(results[i].summary);
            mcSummary.appendTo(mcBox);
          }

          if (results[i].genres != undefined || results[i].genres != null) {
              let mcGen = results[i].genres[0];
              var mcGenres = $('<p>').text('Genre: ' + mcGen.name);
              mcGenres.appendTo(mcBox);
          }
          
          
          for (y = 0; y < 3; y++) {
            if (results[i].screenshots != undefined) {
              let mcScreenSource = results[i].screenshots[y];
              if (mcScreenSource != undefined || mcScreenSource != null) {
                let mcSource = mcScreenSource.url;
                var mcPic = $('<img>');
                mcPic.attr("src", "https://" + mcSource);
                mcPic.appendTo(mcBox);
                mcPic.addClass('screenshots');
              }
            }
              
              
          }
          

          mcBut.on('click', (function(event){
              console.log('sup');
              $(this).nextAll().toggle();
          })

          
          )}
    });

    
});

  jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});

// NES BUTTON API PULL AND DOM CREATION

$(document).on('click', '#nesButton',function(event) {
     

  var queryURL = "https://api-v3.igdb.com/games";

  $.ajax({
    url: queryURL,
    method: "POST",
    headers: {
        'user-key' : 'f13f3ae70c0329eaf198249bba188dbd',
        'Accept' : 'Application/JSON'
    }, 

    data : 'fields name,total_rating,cover.url,release_dates.human,platforms.name,summary,genres.name,screenshots.url; where platforms = 18 ; sort popularity desc; limit 50;'
    })

    .then(function(response) {
      var results = response;
      console.log(response);

      var table = $('#results');
      var tBody = $('tbody');
      tBody.empty();      

      for (var i = 0; i < 50; i++) {
          // Variables for main table
          coverimage = results[i].cover
          var tRow = $('<tr>');
          tRow.appendTo(tBody);

          var title = $('<th>').text(results[i].name);
          title.appendTo(tRow);


          if (coverimage === undefined) {
              source = 'homestaymatch.com/images/no-image-available.png';
          }

          else {
              source = String(coverimage.url);
          }
              
          var image = $('<img>');
          image.attr("src", "https://" + source);
          image.appendTo(tRow);

          var rating = $('<th>').text(Math.round(parseInt(results[i].total_rating)));
          rating.appendTo(tRow);

          let rdate = results[i].release_dates[0];
          var releaseDates = $('<th>').text(rdate.human);
          releaseDates.appendTo(tRow);

          var mcBut = $('<button>More Info</button>');
          $(mcBut).addClass('clear button warning').attr('data-open', 'moreContent');
          mcBut.appendTo(tRow);

          // Create mcBox and dynamically hide/show
          
          var mcBox = $('<div>').appendTo(tRow);
          mcBox.hide();
          var mcTitle = $('<h4>').text(results[i].name);
          mcTitle.appendTo(mcBox);
          
          if (results[i].summary != undefined || results[i].summary != null) {
            var mcSummary = $('<p>').text(results[i].summary);
            mcSummary.appendTo(mcBox);
          }

          if (results[i].genres != undefined || results[i].genres != null) {
              let mcGen = results[i].genres[0];
              var mcGenres = $('<p>').text('Genre: ' + mcGen.name);
              mcGenres.appendTo(mcBox);
          }
          
          
          for (y = 0; y < 3; y++) {
            if (results[i].screenshots != undefined) {
              let mcScreenSource = results[i].screenshots[y];
              if (mcScreenSource != undefined || mcScreenSource != null) {
                let mcSource = mcScreenSource.url;
                var mcPic = $('<img>');
                mcPic.attr("src", "https://" + mcSource);
                mcPic.appendTo(mcBox);
                mcPic.addClass('screenshots');
              }
            }
              
              
          }
          

          mcBut.on('click', (function(event){
              console.log('sup');
              $(this).nextAll().toggle();
          })

          
          )}
    });

    
});

  jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});

// SEARCH INPUT API PULL AND DOM CREATION FOR TITLE

$(document).on('click', '#sTitleButton',function(event) {
   
    var nameinput = String($('#nameInput').val().substr(0,1).toUpperCase() + String($('#nameInput').val().substr(1).toLowerCase()));
    var queryURL = "http://www.gamespot.com/api/games/?api_key=0e27e3e25c2d1e2fdf52fae8191317b1730d9589&format=json&filter=name:" + nameinput;
    
    $.ajax({
      url: queryURL,
      method: "GET",
      })

      .then(function(response) {
        var results = response.results;
        console.log(results)
        console.log(nameinput)

        var tBody = $('tbody');
        tBody.empty();      

        for (var i = 0; i < 100; i++) {
            // Variables for main table
            var tRow = $('<tr>');
            tRow.appendTo(tBody);

            var title = $('<th>').text(results[i].name);
            title.appendTo(tRow);

            var imageResults = results[i].image
            var source = String(imageResults.original);
            var image = $('<img>');
            image.attr("src", source);
            image.appendTo(tRow);

            var placeholder = $('<th>').text(' ');
            placeholder.appendTo(tRow);

            var releaseDate = $('<th>').text(results[i].release_date.slice(0,10));
            releaseDate.appendTo(tRow);

            // Additional Content Button

            var mcBut = $('<button>More Info</button>');
            $(mcBut).addClass('clear button warning').attr('data-open', 'moreContent');
            mcBut.appendTo(tRow);

            mcBut.on('click', (function(event){
              console.log('sup');
              $(this).nextAll().toggle();
              })

          
          )

            // mcBox with contents from API
            
            var mcBox = $('<div>').appendTo(tRow);
            mcBox.hide();
            var title = $('<h3>').text(results[i].name);
            title.appendTo(mcBox);
            var summary = $('<p>').text(results[i].description);
            summary.appendTo(mcBox);
            
            var genres = $('<p>').text('Genres: ');
            genres.appendTo(mcBox);
            for (y = 0; y < 3; y++) {
                if (results[i].genres[y] != undefined)
                var genreResults = results[i].genres[y]
                var genreSpan = $('<span>').text(genreResults.name + ', ')
                genreSpan.appendTo(genres);
            }       

            // Save Button

            var saveButton = $('<button>Save</button>');
            saveButton.addClass('clear button alert').appendTo(mcBox);
            saveButton.on('click', (function(event){
                var thisTitle = $(this).siblings('h3').text()
                var counter = localStorage.getItem('counter');
                counter++;
                localStorage.setItem('favoriteGames:'+ counter, thisTitle);
                localStorage.setItem('counter', counter);

                var thisImage = $(this).parent().siblings('img').attr('src');
                console.log(thisImage);
                var imgCounter = localStorage.getItem('imgCounter');
                imgCounter++;
                localStorage.setItem('favoriteGamesImg:'+ imgCounter, thisImage);
                localStorage.setItem('imgCounter', imgCounter);
            }));

        }
      })
});

// SEARCH INPUT API PULL AND DOM CREATION FOR GENRE

$(document).on('click', '#sGPbutton',function(event) {
   

    var queryURL = "https://api-v3.igdb.com/games";
    
    var genreinput = String($('#genreInput').val().substr(0,1).toUpperCase() + String($('#genreInput').val().substr(1).toLowerCase()));
    var platforminput = String($('#platformSelect').val());
        if (platforminput == 'genesis')
            var platform = String(29)
        else if (platforminput == 'xbox')
            var platform = 11
        else if (platforminput == 'snes')
            var platform = 19
        else if (platforminput == 'atari')
            var platform = 59
        else if (platforminput == 'gamecube')
            var platform = 21
        else if (platforminput == 'n64')
            var platform = 4
        else if (platforminput == 'dreamcast')
            var platform = 23
        else if (platforminput == 'gameboy')
            var platform = 33
        else if (platforminput == 'ps1')
            var platform = 7
        else if (platforminput == 'nes')
            var platform = 18
        else
            var platform = '*'

    console.log(platform);
    console.log(platforminput);
    console.log(genreinput);

    $.ajax({
      url: queryURL,
      method: "POST",
      headers: {
          'user-key' : 'f13f3ae70c0329eaf198249bba188dbd',
          'Accept' : 'Application/JSON'
      }, 

      data : 'fields name,total_rating,cover.url,release_dates.human,platforms.name,summary,genres.name,screenshots.url; where genres.name ="' + genreinput + '" & platforms = ' + platform + '; sort popularity desc; limit 100;'
        
      })
      
      .then(function(response) {
        var results = response;

        console.log(results);

        var tBody = $('tbody');
        tBody.empty();      


        for (var i = 0; i < 100; i++) {
            // Variables for main table
            var tRow = $('<tr>');
            tRow.appendTo(tBody);

            var title = $('<th>').text(results[i].name);
            title.appendTo(tRow);

            coverimage = results[i].cover;
            
            if (coverimage === undefined) {
                source = 'homestaymatch.com/images/no-image-available.png';
            }

            else {
                source = String(coverimage.url);
            }
                
            var image = $('<img>');
            image.attr("src", "https://" + source);
            image.appendTo(tRow);

            if (results[i].rating != undefined || results[i].rating != null) {
                var rating = $('<th>').text(Math.round(parseInt(results[i].total_rating)));
                rating.appendTo(tRow);
            }

            if (results[i].release_dates != undefined || results[i].release_dates != null) {
                var releaseDateResults = results[i].release_dates[0]
                var releaseDates = $('<th>').text(releaseDateResults.human);
                releaseDates.appendTo(tRow);
            }

            var mcBut = $('<button>More Info</button>');
            $(mcBut).addClass('clear button warning').attr('data-open', 'moreContent');
            mcBut.appendTo(tRow);

            // Create mcBox and dynamically hide/show
            
            var mcBox = $('<div>').appendTo(tRow);
            mcBox.hide();
            var mcTitle = $('<h4>').text(results[i].name);
            mcTitle.appendTo(mcBox);
            
            if (results[i].summary != undefined || results[i].summary != null) {
              var mcSummary = $('<p>').text(results[i].summary);
              mcSummary.appendTo(mcBox);
            }
            
            if (results[i].genres != undefined || results[i].genres != null) {
                let mcGen = results[i].genres[0];
                var mcGenres = $('<p>').text('Genre: ' + mcGen.name);
                mcGenres.appendTo(mcBox);
            }
            
            
            for (y = 0; y < 3; y++) {
              if (results[i].screenshots != undefined || results[i].screenshots != null) {
                let mcScreenSource = results[i].screenshots[y];
                if (mcScreenSource != undefined || mcScreenSource != null) {
                  let mcSource = mcScreenSource.url;
                  var mcPic = $('<img>');
                  mcPic.attr("src", "https://" + mcSource);
                  mcPic.appendTo(mcBox);
                  mcPic.addClass('screenshots');
                }
              }
                
                
            }
            

            mcBut.on('click', (function(event){
              console.log('sup');
              $(this).nextAll().toggle();
              })

          
          )

            var saveButton = $('<button>Save</button>');
            saveButton.addClass('clear button alert').appendTo(mcBox);
            saveButton.on('click', (function(event){
                var thisTitle = $(this).siblings('h3').text()
                var counter = localStorage.getItem('counter');
                counter++;
                localStorage.setItem('favoriteGames:'+ counter, thisTitle);
                localStorage.setItem('counter', counter);

                var thisImage = $(this).parent().siblings('img').attr('src');
                console.log(thisImage);
                var imgCounter = localStorage.getItem('imgCounter');
                imgCounter++;
                localStorage.setItem('favoriteGamesImg:'+ imgCounter, thisImage);
                localStorage.setItem('imgCounter', imgCounter);
            }));
            
          }
      });

      
  });

  jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});

// GENERATE FAVORITES LIST FROM LOCAL STORAGE

var tBody = $('tbody');

$(document).on('click', '#oneupBlock',function(event) {
   
    tBody.empty();
    counter = parseInt(localStorage.getItem('counter')) + 1;
    // Generating Loop
    for (y = 1; y < counter; y++) {
        // Game Titles
        var favTitle = $('<th>').text(localStorage.getItem('favoriteGames:'+ y));
        var tRow = $('<tr>');
        favTitle.appendTo(tRow);
        

        // Game Images
        var favImageSource = String(localStorage.getItem('favoriteGamesImg:'+ y));
        var favImage = $('<img>').attr('src', favImageSource)
        favImage.appendTo(tRow);
        tRow.appendTo(tBody);
    }    
        
})


var clearShroom = $('#poison');
$(document).on('click', '#poison',function(event) {
       
      localStorage.clear();
      $(this).animate({
        width: 'toggle',
        height: "toggle"
      }, 5000, function(event) {
      })
  });
});