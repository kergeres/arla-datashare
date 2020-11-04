function string_validate (id_comes_in)
{
   let input = document.querySelector(".input-field");
   // let input = document.querySelector(`${id_comes_in}`);
   let inputval = input.value;


   if (isNaN(inputval))
   { console.log('ja, it is a string');
   input.style.borderColor  = "red"
   }
   else if (inputval == "")
   {
   console.log("ures");
   input.style.borderColor  = "black"
   }
   else
   {
    console.log('this is a number');
    input.style.borderColor  = "green"
   }

}

function appendSecond ()
{
   let htmltemplate = `  <img src="img/progress2.svg" class="processbar"></img>
   <div class="input-small-container">
       <h4>Kg dry matter per cow</h4>
       <p>Enter the amount of feed consumption per cow.</p>
       <input class="input-field" placeholder="test" onkeyup="string_validate()">
   </div>

    <div class="input-small-container">
       <h4>Kg milk pr year-cow</h4>
       <p>Enter the amount of the milk production in kg for the current year.</p>
       <input class="input-field" placeholder="test" onkeyup="string_validate()">
   </div>
    <div class="input-small-container">
       <h4>Nr. of cows</h4>
       <p>Enter the amount of cows you have right now.</p>
       <input class="input-field" placeholder="test" onkeyup="string_validate()">
   </div>




   <div class="navigate-btn-container">
       <button type="submit" class="back">back</button>
       <button type="submit" onclick="appendThird()" class=" next">next</button>
   </div>`;

document.querySelector(".input-container").innerHTML = htmltemplate;
}
function appendThird ()
{
   let htmltemplate = `  <img src="img/progress3.svg" class="processbar"></img>
   <div class="input-small-container">
       <h4>Diesel litre</h4>
       <p>Enter the amount of fuel used for whole farm.</p>
       <input class="input-field" placeholder="test" onkeyup="string_validate()">
   </div>

    <div class="input-small-container">
       <h4>Electricity kWh</h4>
       <p>Enter the amount of electricity you have used for your farm.</p>
       <input class="input-field" placeholder="test" onkeyup="string_validate()">
   </div>
    <div class="input-small-container">
       <h4>Self-sufficiency in feed</h4>
       <p>% of dry matter</p>
       <input class="input-field" placeholder="test" onkeyup="string_validate()">
   </div>




   <div class="navigate-btn-container">
       <button type="submit"  onclick="appendSecond()"class="back">back</button>
       <button type="submit" onclick="appendFourth()" class=" next">next</button>
   </div>`;

document.querySelector(".input-container").innerHTML = htmltemplate;
}
function appendFourth ()
{
   let htmltemplate = `  <img src="img/progress4.svg" class="processbar"></img>
   <div class="input-small-container">
       <h4>Diesel litre</h4>
       <p>Enter the amount of fuel used for whole farm.</p>
       <input class="input-field" placeholder="test" onkeyup="string_validate()">
   </div>

    <div class="input-small-container">
       <h4>Electricity kWh</h4>
       <p>Enter the amount of electricity you have used for your farm.</p>
       <input class="input-field" placeholder="test" onkeyup="string_validate()">
   </div>
    <div class="input-small-container">
       <h4>Self-sufficiency in feed</h4>
       <p>% of dry matter</p>
       <input class="input-field" placeholder="test" onkeyup="string_validate()">
   </div>




   <div class="navigate-btn-container">
       <button type="submit"  onclick="appendSecond()"class="back">back</button>
       <button type="submit" onclick="appendFourth()" class=" next">next</button>
   </div>`;

document.querySelector(".input-container").innerHTML = htmltemplate;
}

















