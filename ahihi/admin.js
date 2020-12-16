function ttt() {
    var td = JSON.parse(localStorage.getItem('or'));
    var t = '<tr><th>Tên Sản Phẩm</th><th>Mã Hóa Đơn</th><th>Tổng</th><th>Ngày</th></tr>';
    for (var i = 1; i < td.length; i++) {
        t += '<tr>' +
            '<td>' + td[i].chitiet + '</td>' +
            '<td>' + td[i].id + '</td>'+
            '<td>' + td[i].tong + '</td>' +
            '<td>' + td[i].ngay+ '</td>'
            '</tr>';
    }
    document.getElementById('aa').innerHTML = t;
    abc();
}

       