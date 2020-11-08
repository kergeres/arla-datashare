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
   <div class="welcome-container">
                <div class="welcome">
                    <h1>Welcome to the data collecting process!</h1>
                    <h3>Help Arla and use its big data to accelerate<br> journey towards carbon net zero</h3>
                    <button onclick="appendFirst()" class="share">SHARE THE DATA</button>
                </div>
            </div>`;
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
   
   <h1>first first first</h1>



   <div class="navigate-btn-container">
       <button type="submit"  onclick="appendWelcome()" class="back">back</button>
       <button type="submit" onclick="appendSecond()" class=" next">next</button>
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














