// COVID-19 DATA DAILY UPDATE

const btn = document.querySelector('#btn') 

btn.addEventListener('click', loadData)

function loadData() {
     const xhr = new XMLHttpRequest()

     xhr.open('GET', 'https://api.covid19api.com/summary', true)

     xhr.onload = function () {
          if (this.status === 200) {
               const res = JSON.parse(this.responseText);
               // console.log(res)

               const output = `

               <li>Date : ${res.Global.Date}</li>
               <li>New Confirmed : ${res.Global.NewConfirmed}</li>
               <li>New Deaths : ${res.Global.NewDeaths}</li>
               <li>New Recovered : ${res.Global.NewRecovered}</li>
               <li>Total Confirmed : ${res.Global.TotalConfirmed}</li>
               <li>Total Deaths : ${res.Global.TotalDeaths}</li>
               <li>Total Recovered : ${res.Global.TotalRecovered}</li>
               `
               document.querySelector('.totalData').innerHTML = output;
          }
     }

     xhr.send()
}
