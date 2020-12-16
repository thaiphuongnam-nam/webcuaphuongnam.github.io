function showOrderList() {
    var orders = JSON.parse(localStorage.getItem("orders"));
    var t = ' <tr><th>STT</th><th>MÃ ĐH</th><th>HỌ TÊN KH</th><th>SDT</th><th>CHI TIẾT</th><th>TỔNG</th><th>XÁC NHẬN</th></tr >';
    for (var i = 0; i < orders.length; i++) {
        if (orders[i].status == 'Chờ xác nhận') {
            t += '<tr>' +
                '<td>' + [i+1] + '</td>' +
                '<td>' + orders[i].id + '</td>' +
                '<td>' + orders[i].hoten + '</td>' +
                '<td>' + orders[i].sdt + '</td>' +
                '<td>' + orders[i].chitiet + '</td>' +
                '<td>' + orders[i].tong + '</td>' +
                '<td><select id="' + orders[i].id + '" onChange="save(\'' + orders[i].id + '\')" value=""><option>Chờ xác nhận</option><option>Đã xác nhận</option></select></td>' +
                '</tr>';
        }
        else {
           t += '<tr>' +
               '<td>' + [i + 1] + '</td>' +
               '<td>' + orders[i].id + '</td>' +
               '<td>' + orders[i].hoten + '</td>' +
               '<td>' + orders[i].sdt + '</td>' +
               '<td>' + orders[i].chitiet + '</td>' +
               '<td>' + orders[i].tong + '</td>' +
                '<td><select id="' + orders[i].id + '" onChange="save(\'' + orders[i].id + '\')" value="aaaa"><option>Đã xác nhận</option><option>Chờ xác nhận</option></select></td>' +
                '</tr>';
        }
    }
    document.getElementById("orderlist").innerHTML = t;
};
function save(obj) {
    var orders = JSON.parse(localStorage.getItem('orders'));
    for (var i = 0; i < orders.length; i++) {
        if (orders[i].id = obj) {
            orders[i].status = document.getElementById(obj).value;
        }
    }
    localStorage.setItem('orders', JSON.stringify(orders));
}