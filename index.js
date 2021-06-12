// BÀI 1
var btnBai1 = function () {
    var tongSo = 0;
    for (var i = 1; i <= 10000; i++) {
        tongSo = (i * (i + 1)) / 2
        if (tongSo > 10000) {
            break;
        }
    }
    ketQuaBai1.innerHTML = 'Số nguyên dương nhỏ nhất: ' + i;
    ketQuaBai1.style.color = 'white';
}
var ketQuaBai1 = document.getElementById('ketQuaBai1');
document.getElementById('btnBai1').addEventListener('click', btnBai1);

// BÀI 2
var getEle = function (id) {
    return document.getElementById(id);
}

var tinhTong = function (nhapSoX, nhapSoN) {
    var sumNumber = 0;
    for (var i = 1; i <= nhapSoN; i++) {
        sumNumber = sumNumber + Math.pow(nhapSoX, i);
    }
    return sumNumber;
}
var btnBai2 = function () {
    var nhapSoX = getEle('nhapSoX').valueAsNumber;
    var nhapSoN = getEle('nhapSoN').valueAsNumber;
    var ketQuaBai2 = getEle('ketQuaBai2');
    if (isNaN(nhapSoX) || isNaN(nhapSoN)) {
        alert("Bạn phải nhập đủ 2 số");
    }
    else if (nhapSoN < 0) {
        alert('Bạn không được nhập số âm ở n');
    }
    else {
        var sumNumber = tinhTong(nhapSoX, nhapSoN);
        ketQuaBai2.innerHTML = sumNumber;
        ketQuaBai2.style.color = 'white';
    }

}
document.getElementById('btnBai2').addEventListener('click', btnBai2);

// BÀI 3
var tinhGiaiThua = function (nhapGiaiThuaN) {
    var giaiThuaN = 1;
    for (var i = 1; i <= nhapGiaiThuaN; i++) {
        giaiThuaN = giaiThuaN * i;
    }
    return giaiThuaN;
}
var btnBai3 = function () {
    var nhapGiaiThuaN = getEle('nhapGiaiThuaN').valueAsNumber;
    var ketQuaBai3 = getEle('ketQuaBai3');
    if (isNaN(nhapGiaiThuaN)) {
        alert('Bạn phải nhập N vào');
    }
    else if (nhapGiaiThuaN < 0) {
        alert('Không được nhập số âm');
    }
    else if (parseInt(nhapGiaiThuaN)) {
        var giaiThuaN = tinhGiaiThua(nhapGiaiThuaN);
        ketQuaBai3.innerHTML = giaiThuaN;
        ketQuaBai3.style.color = 'white';
    }
    else {
        alert('Bạn không được nhập số thập phân');
    }
}
document.getElementById('btnBai3').addEventListener('click', btnBai3);

// BÀI 4
var listDiv = document.querySelectorAll('.item');
console.log(listDiv);
var ketQuaBai4 = document.querySelector('#ketQuaBai4');
ketQuaBai4.style.display = 'none';
var btnBai3 = function () {
    ketQuaBai4.style.display = 'block';
    for (i = 0; i < listDiv.length; i++) {
        if (i % 2 == 0) {
            listDiv[i].style.backgroundColor = 'red';
        }
        else {
            listDiv[i].style.backgroundColor = '#4287f5';
        }
    }

}
document.getElementById('btnBai4').addEventListener('click', btnBai3)