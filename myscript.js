function displayForm(){
    document.getElementById("form-popup").style.display = "block";
}
function hideForm(){
    document.getElementById("form-popup").style.display = "none";
    formClear();
}
var row = 1;
function addData(){ 
    var name = document.getElementById("name").value;
    var eid = document.getElementById("eid").value;
    var dept = document.getElementById("dept").value;
    var email = document.getElementById("email").value;
    var doj = document.getElementById("doj").value;
    
    var emp_table = document.getElementById("emp-table");
    var newRow = emp_table.insertRow(row);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);

    cell1.innerHTML = name;
    cell2.innerHTML = eid;
    cell3.innerHTML = dept;
    cell4.innerHTML = email;
    cell5.innerHTML = doj;
    cell6.innerHTML = '<i onclick="(removeRow(this))"class="fas fa-user-times deleteEmp"></i>';
    row+=1;
    formClear();
    hideForm();

}

function formClear() {
    $("#name").val("");
    $("#eid").val("");
    $("#dept").val("");
    $("#email").val("");
    $("#doj").val("");
}
function exportXLS() {
$(document).ready(function () {
    $("#emp-table").table2excel({
        filename: "Employees.xls"
    });
});
}

function removeRow(row){
    var i=row.parentNode.parentNode.rowIndex;
    //var table = document.getElementsByTagName("table");
    var table = document.getElementById("emp-table");
    table.deleteRow(i);
}
