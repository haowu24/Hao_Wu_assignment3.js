"use strict"
//Q1
const tableInfo = {
    tableHeader: ['Student Name', 'Age', 'Phone', 'Address'],
    tableContent: [
        {
            'Student Name': 'John',
            Age: 19,
            Phone: '455 - 983 - 0903',
            Address: '123 Ave, San Francisco, CA, 94011',
        },
        {
            'Student Name': 'Alex',
            Age: 21,
            Phone: '455 - 983 - 0912',
            Address: '456 Rd, San Francisco, CA, 94012',
        },
        {
            'Student Name': 'Josh',
            Age: 22,
            Phone: '455 - 345 - 0912',
            Address: '789 Dr, Newark, CA, 94016'},
        {
            'Student Name': 'Matt',
            Age: 23,
            Phone: '321 - 345 - 0912',
            Address: '223 Dr, Sunnyvale, CA, 94016',
        },
    ],
}

 let style = document.createElement('style');
 style.textContent = 'table, th, td {\n' +
     '  border:1px solid black;\n' +
     '  border-collapse: collapse;\n' +
     'text-align: center;\n'+
     'height: 30px;\n'+
    '}' +
     'table' +
     '{width: 700px;\n'+
     '}' +

 document.head.appendChild(style);

     const table = document.createElement("table");
     const property = Object.getOwnPropertyNames(tableInfo.tableContent[0]);
     let firstCheck = true;
     for (let i = 0; i < 4; i++) {
         if (firstCheck && i > 0) {
             i--;
             firstCheck = false;
         }
         const tr = document.createElement("tr");
         for (let j = 0; j < 4; j++) {
             let text;
             if (firstCheck) {
                 text = property[j];
             } else {
                 text = Object.values(tableInfo.tableContent[i])[j];
             }
             const td = document.createElement("td");
             td.textContent = text;
             tr.appendChild(td);
         }

         table.appendChild(tr);
     }

     document.body.appendChild(table);
     table.setAttribute("border", "4");


     //Q2
     const  list = ['HTML', 'JavaScript', 'CSS', 'React', 'Redux', 'Java'];
     const ul = document.createElement('ul');
     document.body.appendChild(ul);
     list.forEach((ele) =>{
       const li = document.createElement('li');
       li.textContent = ele;
       ul.appendChild(li);
     })




      //Q3
     const dropDownList = [
         { value: 'newark', content: 'Newark' },
         { value: 'santaClara', content: 'Santa Clara' },
         { value: 'unionCity', content: 'Union City' },
         { value: 'albany', content: 'Albany' },
         { value: 'dalyCity', content: 'Daly City' },
         { value: 'sanJose', content: 'San Jose' },
     ];
      const select = document.createElement('select');
      document.body.appendChild(select);
      dropDownList.forEach((ele) =>{
          const option = document.createElement('option');
          option.value = ele.value;
          option.textContent = ele.content;
          select.appendChild(option);
      })
