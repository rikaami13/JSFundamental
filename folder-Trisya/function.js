var records = [{
  "nama": "rika",
  "rumah": "surabaya",
  "hobi": ""
},
{
  "nama": "trisya",
  "rumah": "surabaya",
  "hobi": "apoteker"
}
];

function update_tabel() {
var table = document.getElementById("tabelhe").getElementsByTagName('tbody')[0];
for (let x = 0; x < records.length; x++) {
  table.insertRow().innerHTML = `
  <tr>
      <td>${records[x].nama}</td>
      <td>${records[x].rumah}</td>
      <td>${records[x].hobi}</td>
  </tr>
  `;
}
}

function pushObjectToRecord() {

let nam = document.getElementById('nama').value;
let rum = document.getElementById('rumah').value;
let hob = document.getElementById('hoby').value;

records.push({
  "nama": nam,
  "rumah": rum,
  "hobi": hob
});

var table = document.getElementById("tabelhe").getElementsByTagName('tbody')[0];
var new_tbody = document.createElement('tbody');
table.parentNode.replaceChild(new_tbody, table);

update_tabel()
}
