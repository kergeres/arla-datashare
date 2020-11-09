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
     <h1 class="cb">Before we start please tell us what are your most important goals,
         so we can give you more tailored Tips and Tricks</h1>
         <div class="row">
             <div class="column">
                
                 <input type="checkbox" id="myCheck" onclick="myFunction()">
                 <label for="myCheck">Helping the environment</label>
                
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
       <p>Enter the amount of feed consumption.</p>
       <input id="ifirst" value="${one}" class="input-field" placeholder="test" onkeyup="string_validate(this)"/>
      
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
if(one>0 && two > 0 && three > 0)
{
  document.querySelector(".input-container-big").innerHTML = htmltemplate;
}

else
{
  appendSecond();
}
  

}

function appendFourth() {
  four = document.querySelector("#ifourth").value;
  five = document.querySelector("#ififth").value;
  six = document.querySelector("#isixth").value;


  let data = `
   <div class="bg-input-container">
   <div class="input-container">
   <img src="img/progress4.svg" class="processbar"></img>
   <table class="table">
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
                        <tr>
                            <td>Co2 footprint"</td>
                            <td>${footprintCalculated + 554}</td>
                        </tr>
                    </tbody>
                </table>
                <div class="navigate-btn-container">
                  <button type="submit"  onclick="appendSecond()" class="back">Change</button>
                  <button type="submit" onclick="appendChart(); empty()"  class=" next">Send In</button>
               </div>
               </div>
               </div>
               `;
  
  if(four>0 && five > 0 && six > 0)
{
  document.querySelector(".input-container-big").innerHTML = data;
}

else
{
  appendThird();
}
}

function appendTricks() {
  let htmltemplate = `
  <section id="tips">
  <header class="tips-header">
      <img src="img/arla_logo.png" class="logo">
      <img src="img/cloud.png" class="cloud">
      <nav>
          <ul class="menu-2">
              <li>tips and tricks</li>
              <li>news</li>
              <li>contact</li>
              <li>our sustainability</li>
          </ul>
      </nav>
  </header>

  <div class="heading">
      <h1 class="green-header">TIPS & TRICKS</h1>
      <h4>This advices are given based on data that you gave us, they may be very useful</h4>
  </div>
  <div id="slider2" class="carousel2">
      <input type="radio" name="slider2" id="slide12" checked>
      <input type="radio" name="slider2" id="slide22">
      <input type="radio" name="slider2" id="slide32">
      <input type="radio" name="slider2" id="slide42">
      <div id="slides2">
          <div id="overflow2">
              <div class="inner2">
                  <div class="slide2 slide_12">
                      <div class="slide-content2">
                          <div class="blue-slide2">
                              <p class="slide-text2">Physical Activity of cows is very important to keep them
                                  healthy and increase dairy production.
                                  Try to give the cows a little push in the morning and give them hay to get
                                  warm.
                                  There should be a separate shelter room for pregnant cows with continuous
                                  availability of food and water.
                              </p>
                          </div>
                          <div class="slide-photo2">
                          </div>
                      </div>
                  </div>
                  <div class="slide2 slide_22">
                      <div class="slide-content2">
                          <div class="slide-photo-22"></div>
                          <div class="gray-slide2">
                              <p class="slide-text2">The application of manures to fields can make significant
                                  differences to N2O losses.
                                  Slurry applied in the spring can result in up to 50% less N2O being emitted.
                                  By using a trailing shoe or injecting, further reductions will be obtained
                                  as the slurry is placed directly onto the
                                  soil, unlike traditional spreading.</p>
                          </div>
                      </div>
                  </div>
                  <div class="slide2 slide_32">
                      <div class="slide-content2">
                          <div class="pink-slide2">
                              <p class="slide-text2">Unimpaired field drainage, modern grass varieties and
                                  timely field operations present opportunities to increase forage
                                  quality without necessarily compromising yield.
                                  Improved forage quality will encourage intakes, promoting milk yield or
                                  off-set purchased feed use.
                              </p>
                          </div>
                          <div class="slide-photo-32">
                          </div>
                      </div>
                  </div>
                  <div class="slide2 slide_42">
                      <div class="slide-content2">
                          <div class="pink-slide2">
                              <p class="slide-text2">Unimpaired field drainage, modern grass varieties and
                                  timely field operations present opportunities to increase forage
                                  quality without necessarily compromising yield.
                                  Improved forage quality will encourage intakes, promoting milk yield or
                                  off-set purchased feed use.
                              </p>
                          </div>
                          <div class="slide-photo-32">
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div id="controls2">
              <label for="slide12"></label>
              <label for="slide22"></label>
              <label for="slide32"></label>
              <label for="slide42"></label>
          </div>
          <div id="bullets2">
              <label for="slide12"></label>
              <label for="slide22"></label>
              <label for="slide32"></label>
              <label for="slide42"></label>
          </div>
      </div>
  </div>
  <div class="feedback">
      <h1 class="green-header">GIVE US FEEDBACK</h1>
      <h4>How was the experience?</h4>
      <div class="stars">
          <ul class="rating">
              <li class="rating-item" data-rate="1"></li>
              <li class="rating-item active" data-rate="2"></li>
              <li class="rating-item" data-rate="3"></li>
              <li class="rating-item" data-rate="4"></li>
              <li class="rating-item" data-rate="5"></li>
          </ul>
      </div>
      <h1 class="comment">Comment:</h1>
      <textarea class="comment-area" placeholder="type here...">
          </textarea>
      <button class="submit">SUBMIT</button>
  </div>
  <div class="footer">
      <img src="img/arla_logo.png" class="logo">
      <img src="img/cloud.png" class="cloud">
  </div>

</section>`;
  document.querySelector("body").innerHTML = htmltemplate;
}
function empty() {
  let empty = ""
  document.querySelector(".input-container-big").innerHTML = empty;
  document.querySelector("#datasharing").style.display = "none"
}
// 1: data
// Array of objects
let _data = [];

let footprintCalculated = Math.floor(Math.random() * 554) + 500 ;
console.log(footprintCalculated);


function footprintCalculation() {

  footprintCalculated = footprintCalculated + 1;
 
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
  document.querySelector(".chart-container").style.display = "block";
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
        text: 'Carbon footprint for the whole farm',
        fontSize: 30
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
  var checkBox6 = document.getElementById("myCheck5");
  var checkBox7 = document.getElementById("myCheck6");
  var checkBox8 = document.getElementById("myCheck3");

  var text = document.getElementById("text");
  if (checkBox4.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  };

  var text = document.getElementById("text1");
  if (checkBox1.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  };

  var text = document.getElementById("text2");
  if (checkBox2.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  };

  var text = document.getElementById("text");
  if (checkBox3.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  };

  var text = document.getElementById("text4");
  if (checkBox5.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  };

  var text = document.getElementById("text5");
  if (checkBox6.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  };

  var text = document.getElementById("text6");
  if (checkBox7.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  };

  var text = document.getElementById("text7");
  if (checkBox8.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  };

}









