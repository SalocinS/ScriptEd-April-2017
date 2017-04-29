
$("#submit").click(function(){
   
if (
    $("#name1").val() == "" ||
     $("#name2").val() == "" ||
      $("#location").val() == "" ||
        $("#vacation").val() == "" ||
          $("#time1").val() == "" ||
            $("#time2").val() == "" ||
             $("#email").val() == ""
            ){
             alert("Please fill all the sections."); 
            } else {
            alert("Form is submitted. Thank you for traveling with Universal Travels.");
            }
});