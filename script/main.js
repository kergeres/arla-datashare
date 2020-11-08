function string_validate(input) {

  // let input = document.querySelector(".input-field");
  let inputval = input.value;


  if (isNaN(inputval)) {
    console.log('ja, it is a string');
    input.style.borderColor = "red"
  }
  else if (inputval == "") {
    console.log("ures");
    input.style.borderColor = "black"
  }
  else {
    console.log('this is a number');
    input.style.borderColor = "green"
  }

}





function appendWelcome() {
  let htmltemplate = `
  
  <section id="front">
  
  <div id="arla-background">
  <div class="hero">
  <a href="#slid" class="scroll-down">
      <div class="mouse">
         <span></span> 
      </div>
  </a>
</div>
      <div class="welcome">
          <h1>Welcome to the data collecting process!</h1>
          <h3>Help Arla and use its big data to accelerate<br> journey towards carbon net zero</h3>
          <button onclick="appendFirst()" class="share">SHARE THE DATA</button>
      </div>
  </div>
</section>
<section id="slid" >
  <div id="slider" class="carousel">
      <input type="radio" name="slider" id="slide1" checked>
      <input type="radio" name="slider" id="slide2">
      <input type="radio" name="slider" id="slide3">
      <div id="slides">
          <div id="overflow">
              <div class="inner">
                  <div class="slide slide_1">
                      <div class="slide-content">
                          <div class="blue-slide">
                              <p class="slide-text">Here you can find quick guide which will help you to go
                                  throught the process with
                                  ease. You can also jump straight to it and we are sure you will do great
                                  because
                                  it's
                                  very easy</p>
                          </div>
                          <div class="slide-photo">
                          </div>
                      </div>
                  </div>
                  <div class="slide slide_2">
                      <div class="slide-content">
                          <div class="slide-photo-2"></div>
                          <div class="gray-slide">
                              <p class="slide-text">You will get 0,01 Euro more for kg of milk.
                                  Our purpose is to help you save money, time and become more envitonment
                                  friendly.
                                  At the end you will get list of tips tailored especially for you!
                                  They may help you to have better quality milk.</p>
                          </div>
                      </div>
                  </div>
                  <div class="slide slide_3">
                      <div class="slide-content">
                          <div class="pink-slide">
                              <p class="slide-text">The more data you put the better tips you get.
                                  If you do it on time you get a streak, which gives you some special bonuses.
                                  Together we can make a difference and preserve natural ecosystems throughout
                                  the
                                  world.
                              </p>
                          </div>
                          <div class="slide-photo-3">
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div id="controls">
              <label for="slide1"></label>
              <label for="slide2"></label>
              <label for="slide3"></label>
          </div>
          <div id="bullets">
              <label for="slide1"></label>
              <label for="slide2"></label>
              <label for="slide3"></label>
          </div>
      </div>
  </div>
</section>`;
  document.querySelector(".input-container-big").innerHTML = htmltemplate;
}
let one = "";
let two = "";
let three = "";
let four = "";
let five = "";
let six = "";

// the following 4 function is made for display the form

function appendFirst() {

  let htmltemplate = `  
   <div class="bg-input-container">
   <div class="input-container">
   <img src="img/progress1.svg" class="processbar"></img>
   
   
    <div class="check">
     <h1 class="cb">Before we start please tell us what are your most important goals, <br>
         so we can give you more tailored Tips and Tricks</h1>
         <div class="row">
             <div class="column">
                 <div style="align-content: center">
                 <input type="checkbox" id="myCheck" onclick="myFunction()">
                 <label for="myCheck">Helping the environment</label>
                 </div>
                 <br>
                 <input type="checkbox" id="myCheck1" onclick="myFunction()">
                 <label for="myCheck">Having happy cows</label>
                 <br>                 
                 <input type="checkbox" id="myCheck2" onclick="myFunction()">
                 <label for="myCheck">Spending less time in work</label>
                 <br>
                 <input type="checkbox" id="myCheck3" onclick="myFunction()">
                 <label for="myCheck">Reducing N2O loses</label>
             </div>
             <div class="column">
                 <input type="checkbox" id="myCheck4" onclick="myFunction()">
                 <label for="myCheck">Saving money</label>
                 <br>                 
                 <input type="checkbox" id="myCheck5" onclick="myFunction()">
                 <label for="myCheck">Making my work easier</label>
                 <br>                 
                 <input type="checkbox" id="myCheck6" onclick="myFunction()">
                 <label for="myCheck">Producing more crops</label>
                 <br>                 
                 <input type="checkbox" id="myCheck7" onclick="myFunction()">
                 <label for="myCheck">Having more cows</label>
             </div>
           </div>



<p id="text" style="display:none">Checkbox is CHECKED!</p>
<p id="text1" style="display:none">Checkbox is CHECKED!</p>
<p id="text2" style="display:none">Checkbox is CHECKED!</p>
<p id="text3" style="display:none">Checkbox is CHECKED!</p>
<p id="text4" style="display:none">Checkbox is CHECKED!</p>
<p id="text5" style="display:none">Checkbox is CHECKED!</p>
<p id="text6" style="display:none">Checkbox is CHECKED!</p>
<p id="text7" style="display:none">Checkbox is CHECKED!</p>


    </div> 
  



   <div class="navigate-btn-container">
       <button type="submit"  onclick="appendWelcome()" class="back">back</button>
       <button type="submit" onclick="appendSecond()" class=" next">Start</button>
   </div>
   </div>
   </div>`
    ;

  document.querySelector(".input-container-big").innerHTML = htmltemplate;

}

function appendSecond() {

  let htmltemplate = ` 
   <div class="bg-input-container">
   <div class="input-container"> 
   <img src="img/progress2.svg" class="processbar"></img>
   <div class="input-small-container">
       <h4>Kg dry matter per cow</h4>
       <p>Enter the amount of feed consumption per cow.</p>
       <input id="ifirst" required value="${one}" class="input-field" placeholder="test" onkeyup="string_validate(this)">
   </div>

    <div class="input-small-container">
       <h4>Kg milk pr year-cow</h4>
       <p>Enter the amount of the milk production in kg for the current year.</p>
       <input id="isecond" value="${two}" class="input-field" placeholder="test" onkeyup="string_validate(this)">
   </div>
    <div class="input-small-container">
       <h4>Nr. of cows</h4>
       <p>Enter the amount of cows you have right now.</p>
       <input id="ithird" value="${three}" class="input-field" placeholder="test" onkeyup="string_validate(this)">
   </div>


   <div class="navigate-btn-container">
       <button type="submit" onclick="appendFirst()" class="back">back</button>
       <button type="submit" onclick="appendThird()" class=" next">next</button>
   </div>
   </div>
   </div>`
    ;

  document.querySelector(".input-container-big").innerHTML = htmltemplate;

}
function appendThird() {
  one = document.querySelector("#ifirst").value;
  two = document.querySelector("#isecond").value;
  three = document.querySelector("#ithird").value;
  let htmltemplate = `  
   <div class="bg-input-container">
   <div class="input-container">
   <img src="img/progress3.svg" class="processbar"></img>
   <div class="input-small-container">
       <h4>Diesel litre</h4>
       <p>Enter the amount of fuel used for whole farm.</p>
       <input id="ifourth" value="${four}" class="input-field" placeholder="test" onkeyup="string_validate(this)">
   </div>

    <div class="input-small-container">
       <h4>Electricity kWh</h4>
       <p>Enter the amount of electricity you have used for your farm.</p>
       <input  id="ififth" value="${five}" class="input-field" placeholder="test" onkeyup="string_validate(this)">
   </div>
    <div class="input-small-container">
       <h4>Self-sufficiency in feed</h4>
       <p>% of dry matter</p>
       <input id="isixth"  value="${six}" class="input-field" placeholder="test" onkeyup="string_validate(this)">
   </div>




   <div class="navigate-btn-container">
       <button type="submit"  onclick="appendSecond()"class="back">back</button>
       <button type="submit" onclick="appendFourth(); getData()" class=" next">next</button>
   </div>
   </div>
   </div>
   `;

  document.querySelector(".input-container-big").innerHTML = htmltemplate;

}

function appendFourth() {
  four = document.querySelector("#ifourth").value;
  five = document.querySelector("#ififth").value;
  six = document.querySelector("#isixth").value;


  let data = `
   <div class="bg-input-container">
   <div class="input-container">
   <img src="img/progress4.svg" class="processbar"></img>
   <table>
                    <tbody>
                        <tr>
                            <td onclick="appendSecond()">Feed consumption</td>
                            <td>${one}</td>
                        </tr>
                        <tr>
                            <td onclick="appendSecond()">Milk production</td>
                            <td>${two}</td>
                        </tr>
                        <tr>
                            <td onclick="appendSecond()">Nr. of cows</td>
                            <td>${three}</td>
                        </tr>
                        <tr>
                            <td onclick="appendSecond()">Diesel litre</td>
                            <td>${four}</td>
                        </tr>
                        <tr>
                            <td onclick="appendSecond()">Electricity kWh</td>
                            <td>${five}</td>
                        </tr>
                        <tr>
                            <td onclick="appendSecond()">Self-sufficiency in feed</td>
                            <td>${six}</td>
                        </tr>
                    </tbody>
                </table>
                <div class="navigate-btn-container">
                  <button type="submit"  onclick="appendSecond()" class="back">Change</button>
                  <button type="submit" onclick="appendChart(); empty()" class=" next">Send In</button>
               </div>
               </div>
               </div>
               `;
  document.querySelector(".input-container-big").innerHTML = data;
}
function empty() {
  let empty = ""
  document.querySelector(".input-container-big").innerHTML = empty;
  document.querySelector("#datasharing").style.display = "none"
}
// 1: data
// Array of objects
let _data = [];

let footprintCalculated = 0;

function footprintCalculation() {
  footprintCalculated = (parseInt(one) + parseInt(two)) * 0 + (554);
  console.log(footprintCalculated);
}



async function getData() {
  let response = await fetch("json/data.json");
  _data = await response.json();
  footprintCalculation();

  let newCo = {
    date: "2020",
    carbonDioxideWholeFarm: footprintCalculated
  };

  _data.push(newCo);
  console.log(_data);
};






// 2: prepare data for chart
// seperating the objects to arrays: dates and infected
// why? that's how chart.js reads the data :)
function prepareData(data) {
  // declaring two array to store the data 
  let dates = [];
  let carbon = [];
  // looping through the data array
  for (const object of data) {
    // adding the values to the different arrays
    dates.push(object.date);
    carbon.push(object.carbonDioxideWholeFarm);
  }
  // returning the two arrays inside and object
  // we cannot return to values - that's why we have to do it inside an array
  return {
    dates,
    carbon
  };
}

// 3: create and append the chart
function appendChart() {
  // using prepareData() to get the excact data we want
  let data = prepareData(_data);
  //open the developer console to inspect the result
  console.log(data);
  let chartContainer = document.getElementById('chartContainer');
  let chart = new Chart(chartContainer, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
      labels: data.dates, // refering to the data object, holding data from prepareData()
      datasets: [{
        data: data.carbon, // refering to the data object, holding data from prepareData()
        label: 'Ton Carbon dioxide',
        backgroundColor: '#9aba6a', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
        borderColor: '#19a413'
      }]
    },
    // Configuration options goes here
    // Go to the docs to find more: https://www.chartjs.org/docs/latest/
    options: {
      scales: {
        yAxes: [{
          ticks: {
            min: 100,
            max: 700
          }
        }]
      },
      title: {
        display: true,
        text: 'Carbon footprint for the whole farm'
      }
    }

  }

  );
}

// review //
const container = document.querySelector('.rating');
const items = container.querySelectorAll('.rating-item')
container.onclick = e => {
  const elClass = e.target.classList;
  // change the rating if the user clicks on a different star
  if (!elClass.contains('active')) {
    items.forEach( // reset the active class on the star
      item => item.classList.remove('active')
    );
    console.log(e.target.getAttribute("data-rate"));
    elClass.add('active'); // add active class to the clicked star
  }
};



function myFunction() {
  var checkBox1 = document.getElementById("myCheck");
  var checkBox2 = document.getElementById("myCheck1");
  var checkBox3 = document.getElementById("myCheck2");
  var checkBox4 = document.getElementById("myCheck3");
  var checkBox5 = document.getElementById("myCheck4");
  var checkBox6= document.getElementById("myCheck5");
  var checkBox7 = document.getElementById("myCheck6");
  var checkBox8 = document.getElementById("myCheck3");

  var text = document.getElementById("text");
  if (checkBox4.checked == true){
    text.style.display = "block";
  } else {
     text.style.display = "none";
  };

  var text = document.getElementById("text1");
  if (checkBox1.checked == true){
    text.style.display = "block";
  } else {
     text.style.display = "none";
  };

  var text = document.getElementById("text2");
  if (checkBox2.checked == true){
    text.style.display = "block";
  } else {
     text.style.display = "none";
  };

  var text = document.getElementById("text");
  if (checkBox3.checked == true){
    text.style.display = "block";
  } else {
     text.style.display = "none";
  };

  var text = document.getElementById("text4");
  if (checkBox5.checked == true){
    text.style.display = "block";
  } else {
     text.style.display = "none";
  };

  var text = document.getElementById("text5");
  if (checkBox6.checked == true){
    text.style.display = "block";
  } else {
     text.style.display = "none";
  };

  var text = document.getElementById("text6");
  if (checkBox7.checked == true){
    text.style.display = "block";
  } else {
     text.style.display = "none";
  };

  var text = document.getElementById("text7");
  if (checkBox8.checked == true){
    text.style.display = "block";
  } else {
     text.style.display = "none";
  };

}









