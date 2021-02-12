var records = [
    { "nama": "rika", "rumah": "surabaya", "hobi": "" },
    { "nama": "trisya", "rumah": "surabaya", "hobi": "apoteker" }
];

function pushObjectToRecord(records) {
    let a = document.getElementById('nama').value;
    records.push(a);
    console.log(a);
}
