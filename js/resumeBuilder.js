/*
This is empty on purpose! Your code to build the resume will go here.
 */

  var formattedName = HTMLheaderName.replace("%data%","rwStarNight");

  var formattedRole = HTMLheaderRole.replace("%data%","web developer & app developer");

  $("#header").prepend(formattedRole);

  $("#header").prepend(formattedName);