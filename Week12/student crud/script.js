//[STEP 0]: Make sure our document is A-OK
$(document).ready(function () {
    //what kind of interface we want at the start 
    const APIKEY = "63b648ae969f06502871aa3b";
    getContacts();
    $("#update-contact-container").hide();
    $("#add-update-msg").hide();
  
    //[STEP 1]: Create our submit form listener
    $("#contact-submit").on("click", function (e) {
      //prevent default action of the button 
      e.preventDefault();
  
      //[STEP 2]: let's retrieve form data
      //for now we assume all information is valid
      //you are to do your own data validation
  
      let contactName = $("#contact-name").val();
      let contactID = $("#contact-id").val();
      let contactMentor = $("#contact-mentor").val();
      let contactClass = $("#contact-class").val();
      let contactCourse = $("#contact-course").val();
      let contactYear = $("#contact-year").val();
  
      //[STEP 3]: get form values when user clicks on send
      //Adapted from restdb api
      let jsondata = {
        "name": contactName,
        "ID": contactID,
        "mentor": contactMentor,
        "class": contactClass,
        "course": contactCourse,
        "year": contactYear
      };
  
      //[STEP 4]: Create our AJAX settings. Take note of API key
      let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://interactivedev-a655.restdb.io/rest/student",
        "method": "POST", //[cher] we will use post to send info
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(jsondata),
        "beforeSend": function(){
          //@TODO use loading bar instead
          //disable our button or show loading bar
          $("#contact-submit").prop( "disabled", true);
          //clear our form using the form id and triggering it's reset feature
          $("#add-contact-form").trigger("reset");
        }
      }
  
      //[STEP 5]: Send our ajax request over to the DB and print response of the RESTDB storage to console.
      $.ajax(settings).done(function (response) {
        console.log(response);
        
        $("#contact-submit").prop( "disabled", false);
        
        //@TODO update frontend UI 
        $("#add-update-msg").show().fadeOut(3000);
  
        //update our table 
        getContacts();
      });
    });//end click 
  
  
    //[STEP] 6
    //let's create a function to allow you to retrieve all the information in your contacts
    //by default we only retrieve 10 results
    function getContacts(limit = 10, all = true) {
  
      //[STEP 7]: Create our AJAX settings
      let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://interactivedev-a655.restdb.io/rest/student",
        "method": "GET", //[cher] we will use GET to retrieve info
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        },
      }
  
      //[STEP 8]: Make our AJAX calls
      //Once we get the response, we modify our table content by creating the content internally. We run a loop to continously add on data
      //RESTDb/NoSql always adds in a unique id for each data, we tap on it to have our data and place it into our links 
      $.ajax(settings).done(function (response) {
        
        let content = "";
  
        for (var i = 0; i < response.length && i < limit; i++) {
          //console.log(response[i]);
          //[METHOD 1]
          //let's run our loop and slowly append content
          //we can use the normal string append += method
          /*
          content += "<tr><td>" + response[i].name + "</td>" +
            "<td>" + response[i].email + "</td>" +
            "<td>" + response[i].message + "</td>
            "<td>Del</td><td>Update</td</tr>";
          */
  
          //[METHOD 2]
          //using our template literal method using backticks
          //take note that we can't use += for template literal strings
          //we use ${content} because -> content += content 
          //we want to add on previous content at the same time
          content = `${content}<tr id='${response[i]._id}'>
          <td>${response[i].name}</td>
          <td>${response[i].class}</td>
          <td>${response[i].course}</td>
          <td>${response[i].ID}</td>
          <td>${response[i].year}</td>
          <td>${response[i].mentor}</td>
          
          <td><a href='#' class='delete' data-id='${response[i]._id}'>Del</a></td><td>
          <a href='#update-contact-container' class='update' 
            data-id='${response[i]._id}' 
            data-class='${response[i].class}' 
            data-course='${response[i].course}' 
            data-ID='${response[i].ID}'
            data-year='${response[i].year}'
            data-mentor='${response[i].mentor}'
            >Update</a></td></tr>`;
  
        }
  
        //[STEP 9]: Update our HTML content
        //let's dump the content into our table body
        $("#contact-list tbody").html(content);
  
        $("#total-contacts").html(response.length);
      });
  
  
    }
  
    //[STEP 10]: Create our update listener
    //here we tap onto our previous table when we click on update
    //this is a delegation feature of jquery
    //because our content is dynamic in nature, we listen in on the main container which is "#contact-list". For each row we have a class .update to help us
    $("#contact-list").on("click", ".update", function (e) {
      e.preventDefault();
      //update our update form values
      let contactMsg = $(this).data("msg");
      
      let contactName = $(this).data("name");
      let contactID = $(this).data("id");
      let contactClass = $(this).data("class");
      let contactCourse = $(this).data("course");
      let contactYear = $(this).data("year");
      let contactMentor = $(this).data("mentor");
  
      let contactId = $(this).data("id");
      console.log($(this).data("msg"));
  
      //[STEP 11]: Load in our data from the selected row and add it to our update contact form 
      
      $("#update-contact-name").val(contactName);
      $("#update-contact-ID").val(contactID);
      $("#update-contact-class").val(contactClass);
      $("#update-contact-course").val(contactCourse);
      $("#update-contact-year").val(contactYear);
      $("#update-contact-mentor").val(contactMentor);
  
      $("#update-contact-msg").val(contactMsg);
      $("#update-contact-id").val(contactId);
      $("#update-contact-container").show();
  
    });//end contact-list listener for update function
  
    //[STEP 12]: Here we load in our contact form data
    //Update form listener
    $("#update-contact-submit").on("click", function (e) {
      e.preventDefault();
      //retrieve all my update form values
      let contactName = $("#update-contact-name").val();
      let contactID = $("#update-contact-ID").val();
      let contactClass = $("#update-contact-class").val();
      let contactCourse = $("#update-contact-course").val();
      let contactYear = $("#update-contact-year").val();
      let contactMentor = $("#update-contact-mentor").val();
  
      console.log($("#update-contact-msg").val());
      console.log(contactMsg);
  
      //[STEP 12a]: We call our update form function which makes an AJAX call to our RESTDB to update the selected information
      updateForm(contactId, contactName, contactID, contactClass, contactCourse, contactYear, contactMentor, contactMsg);
    });//end updatecontactform listener
  
    //[STEP 13]: function that makes an AJAX call and process it 
    //UPDATE Based on the ID chosen
    function updateForm(id, contactName, contactID, contactClass, contactCourse, contactYear, contactMentor, contactMsg) {
      //@TODO create validation methods for id etc. 
  
      var jsondata = { "name": contactName, "ID": contactID, "class": contactClass,"course":contactCourse, "year":contactYear, "mentor":contactMentor, "message": contactMsg };
      var settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://interactivedev-a655.restdb.io/rest/student/${id}`,//update based on the ID
        "method": "PUT",
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(jsondata)
      }
  
      var settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://interactivedev-a655.restdb.io/rest/student/${id}`,//update based on the ID
        "method": "DELETE",
        "headers": {
          "content-type": "application/json",
          "x-apikey": "<your CORS apikey here>",
          "cache-control": "no-cache"
        }
      }
  
      //[STEP 13a]: send our AJAX request and hide the update contact form
      $.ajax(settings).done(function (response) {
        console.log(response);
        
        $("#update-contact-container").fadeOut(5000);
        //update our contacts table
        getContacts();
      });
    }//end updateform function
  
  })
  