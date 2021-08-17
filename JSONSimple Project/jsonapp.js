// Person-one Data

const btn1 = document.querySelector('#get1').addEventListener('click', loadData)
const btn2 = document.querySelector('#get2').addEventListener('click', loadData)
const btn3 = document.querySelector('#get3').addEventListener('click',loadData)
 
 



function loadData() {

//     toggle.add(loadData)
     // toggle.remove(loadDta)
     let parentElmnt = this.parentElement.className;
     let indx = this.value;
     // string
     let index = parseInt(indx);
     // number

     const xhr = new XMLHttpRequest()

     xhr.open('GET', 'data.json', true)

     xhr.onload = function () {
          if (this.status === 200) {
               const response = JSON.parse(this.responseText);
               const output = `
               <li>Name: ${response[index].name}</li>
               <li>Age: ${response[index].age}</li>
               <li>Company: ${response[index].company}</li>
               `
               document.querySelector(`.${parentElmnt}`).innerHTML = output;
          }
     }

     xhr.send()
}


