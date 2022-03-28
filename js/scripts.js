$(document).ready(function () {
  $("#formOne").submit(function (event) {
    event.preventDefault();
    const person1Input = $("input#person1").val();
    const person2Input = $("input#person2").val();
    const animalInput = $("input#animal").val();
    const exclamationInput = $("input#exclamation").val();
    const verbInput = $("input#verb").val();
    const nounInput = $("input#noun").val();


  const inputs = [person1Input,person2Input,animalInput,exclamationInput,verbInput,nounInput];
  $("#story1").text("")
  inputs.forEach(function(input) {
  $("#story1").append("One day, " + input[0] + " and " + input + " were walking through the woods, when suddenly a giant " + input + " appeared. " + input + ' "' + input[0] + '",' + input[1] + " cried. The two of them" + input + " as quickly possible, and when they were safe," + input[0] + " and" + " " + input[1] +  " gave each other a giant " + input + " .")
})

    // $("#story").show();
  });
});

// const inputs = [person1Input,person2Input,animalInput,exclamationInput,verbInput,nounInput];
// inputs.forEach(function(input) {
//   $("story").append("One day, " + input[0] + " and " + input + " were walking through the woods, when suddenly a giant " + input + " appeared. " + input + '"' + input[0] + '",' + input[1] + " cried. The two of them" + input + " as quickly possible, and when they were safe," + input[0] + " and" + input[1] +  " gave each other a giant" + input + " .")
// })


// const arrayOfThingsILike = ["bubble baths", "kittens", "good books", "clean code"];
// arrayOfThingsILike.forEach(function(thing) {
//   $("#likable-things").append(" " + thing + "!");
// });


    // $(".person1").text(person1Input);
    // $(".person2").text(person2Input);
    // $(".animal").text(animalInput);
    // $(".exclamation").text(exclamationInput);
    // $(".verb").text(verbInput);
    // $(".noun").text(nounInput);