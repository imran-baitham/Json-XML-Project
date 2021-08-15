// Person-one Data

const btn = document.querySelector('#getData') 

btn.addEventListener('click', loadData)

function loadData() {
     const xhr = new XMLHttpRequest()

     xhr.open('GET', 'data.json', true)

     xhr.onload = function () {
          if (this.status === 200) {
               const response = JSON.parse(this.responseText);
               const output = `
               <li>Name: ${response[0].name}</li>
               <li>Age: ${response[0].age}</li>
               <li>Company: ${response[0].company}</li>
               `
               document.querySelector('#data').innerHTML = output;
          }
     }

     xhr.send()
}

// Person Two

const btntwo = document.querySelector('#getNadim') 

btntwo.addEventListener('click', loadDatanadim)

function loadDatanadim() {
     const xhr = new XMLHttpRequest()

     xhr.open('GET', 'data.json', true)
 
     xhr.onload = function () {
          if (this.status === 200) {
               const response = JSON.parse(this.responseText);
               const output = `
               <li>Name: ${response[1].name}</li>
               <li>Age: ${response[1].age}</li>
               <li>Company: ${response[1].company}</li>
               `
               document.querySelector('#datatwo').innerHTML = output;
          }
     }

     xhr.send()
}

//  Person Three

const btnthree = document.querySelector('#getShafi') 

btnthree.addEventListener('click', loadDatashafi)

function loadDatashafi() {
     const xhr = new XMLHttpRequest()

     xhr.open('GET', 'data.json', true)

     xhr.onload = function () {
          if (this.status === 200) {
               const response = JSON.parse(this.responseText);
               const output = `
               <li>Name: ${response[2].name}</li>
               <li>Age: ${response[2].age}</li>
               <li>Company: ${response[2].company}</li>
               `
               document.querySelector('#datathree').innerHTML = output;
          }
     }

     xhr.send()
}