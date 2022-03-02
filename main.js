'use strict';

// Tính lương
/**
 * 1. Đầu vào
 *  Chọn mức tiền lương
 *  Nhập số ngày làm việc
 * 2. Xử lý
 *  Mức tiền * số ngày làm việc
 * 3. Đầu ra
 *  In text ra màn hình
 */

document.getElementById('btn-calc').onclick = function () {
  const money = document.getElementById('money-day').value;
  const day = document.getElementById('day').value;
  const sumSalary = money * day;
  // console.log(sumSalary);
  document.getElementById('notification').innerHTML =
    `Số ngày làm việc của bạn: ${day}, lương ngày ${money}. Tổng lương của bạn là ${sumSalary} `;
};

// Tính trung bình
/**
 * 1. Đầu vào
 *  Nhập 5 số ngẫu nhiên
 * 2. Xử lý
 *  Tính trung bình 5 số
 * 3. Đầu ra
 *  Xuất ra màn hình kết quả đã tính được
 */

document.getElementById('btn-average').onclick = function () {
  const num1 = document.getElementById('num1').value;
  const num2 = document.getElementById('num2').value;
  const num3 = document.getElementById('num3').value;
  const num4 = document.getElementById('num4').value;
  const num5 = document.getElementById('num5').value;
  const calcAverage = (Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5)) / 5;
  document.getElementById('average').innerHTML =
    `Số trung bình: ${calcAverage} `
};

// Quy đổi tiền
/**
 * 1. Đầu vào
 *  Người dùng nhập tiền muốn quy đổi
 * 2. Xử lý
 *  Giá USD * số tiền USD muốn quy đổi ra VNĐ
 * 3. Đầu ra
 *  In số tiền ra màn hình
 */

document.getElementById('change').onclick = function () {
  const vndMoney = document.getElementById('price-vnd').value;
  const usdMoney = document.getElementById('price-usd').value;
  const changeMoney = vndMoney * usdMoney;
  document.getElementById('in-money').innerHTML =
    `Số tiền quy đổi từ USD sang VNĐ của bạn: ${changeMoney}`
};

// Tính chu vi, diện tích
/**
 * 1. Đầu vào
 *  Nhập chiều dài, chiều rộng hình chữ nhật
 * 2. Xử lý
 *  Tính chu vi, diện tích hình chữ nhật
 * 3. Đâu ra
 *  In kết quả ra màn hình
 */

document.getElementById('calcAll').onclick = function () {
  const long = document.getElementById('long').value;
  const wide = document.getElementById('wide').value;
  const chuVi = (Number(long) + Number(wide)) * 2;
  const dienTich = Number(long) * Number(wide);
  document.getElementById('print-result').innerHTML =
    `Chu vi hình chữ nhật: ${chuVi} và diện tích hình chữ nhật: ${dienTich}`
};

// Tính tổng ký số
/**
 * 1. Đầu vào
 *  Nhập số bất kỳ
 * 2. Xử lý
 *  Lấy số hàng đơn vị: số % 10
 *  Lấy số hàng chục: số % 100 / 10
 *  Lấy số hàng trăm: số % 1000 / 100
 *  Lấy số hàng ngàn: số / 1000
 * 3. Đầu ra
 *  In ra màn hình tổng ký số
 */

document.getElementById('calc-sum').onclick = function () {
  const number = document.getElementById('number').value;
  parseFloat(number);
  const donVi = number % 10;
  const hangChuc = Math.floor(number % 100 / 10);
  const hangTram = Math.floor(number % 1000 / 100);
  const hangNgan = Math.floor(number / 1000);
  const sumKySo = donVi + hangChuc + hangTram + hangNgan;
  document.getElementById('print-sum').innerHTML = `Tổng ký số là ${sumKySo}`;
}