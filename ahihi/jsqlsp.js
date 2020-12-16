
function showProductList(vitri){
	var productArray = JSON.parse(localStorage.getItem('sanpham'));
	var s='<tr><th>STT</th><th>Ảnh</th><th>MÃ SẢN PHẨM</th><th>TÊN SẢN PHẨM</th><th>HÃNG</th><th>PRIZE</th><th>THAO TÁC</th></tr>';
    var dem = 0;
    for (var i = vitri; i < productArray.length; i++){
		s+='<tr>'+
				'<td>'+i+'</td>'+
				'<td><img src="'+productArray[i].hinh+'"></td>'+
				'<td>'+productArray[i].masp+'</td>'+
				'<td>'+productArray[i].tensp+'</td>'+
				'<td>'+productArray[i].theloai+'</td>'+
            '<td>' + productArray[i].price + '</td>' +
            '<td>' +
            '<button class="delete" onClick="deleteproduct(\'' + productArray[i].masp + '\')">Xóa</div>' +
            '<button class="change" onClick="showchangeproductbox(\'' + productArray[i].masp + '\')">Sửa</div>' +
            '</td>' +
            '</tr>';
        dem++;
        if (dem == 10) {
            break;
        }

	}
	document.getElementById('productlist').innerHTML=s;
	setPagination();
}
function deleteproduct(productiddelete) {
    var productArray = JSON.parse(localStorage.getItem('sanpham'));
    var vitri;
    for (var i = 0; i < productArray.length; i++) {
        if (productArray[i].masp == productiddelete) {
            if (confirm('Bạn có muốn xóa sản phẩm này?')) {
                productArray.splice(i, 1);
            }
            vitri = (Math.floor(i / 10) * 10);
        }
    }
    localStorage.setItem('sanpham', JSON.stringify(productArray));
    showProductList(vitri);
}
function setPagination() {
    var productArray = JSON.parse(localStorage.getItem('sanpham'));
    var sotrang = Math.ceil(productArray.length / 10);
    var button = '';
    for (var i = 1; i <= sotrang; i++) {
        vitri = (i - 1) * 10;
        button += '<button class="pageNumber" onClick="showProductList(' + vitri + ')">' + i + '</button>';
    }
    document.getElementById('pagination').innerHTML = button;
}

//-----------------Sửa sản phẩm---------------------->>
function showchangeproductbox(productid){
	document.getElementById('modal1').style.display = 'block';
	var productArray = JSON.parse(localStorage.getItem('sanpham'));
	for(var i=0;i<productArray.length;i++){
		if(productArray[i].masp == productid){
			document.getElementById('imgbefore').src=productArray[i].img;
			document.getElementById('imgafter').src="./img/temp2.jpg";
			document.getElementById('name').value=productArray[i].name;
			document.getElementById('price').value=productArray[i].price;
			document.getElementById('save').setAttribute('onClick', 'changeproduct('+productArray[i].productId+')');
		}
    }
    showProductList(vitri);
}
function changeimgadd(input){
    var reader = new FileReader();
    reader.onload = function (e) {
        document.getElementById('imgadd').src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
}
//-------------------thêm sp----------------------------->>
function addProduct(){
	var productArray = JSON.parse(localStorage.getItem('sanpham'));
	var productid = productArray[0].productId+1;
	var tensp = document.getElementById('tensp');
	var hang = document.getElementById('hang');
	var price = document.getElementById('price');
	if(!hang.value || !tensp.value || !price.value){
		customAlert('Bạn chưa nhập đủ thông tin sản phẩm','warning');
		return false;
	   }
	if(isNaN(Number(price.value))){
		customAlert('Giá không hợp lệ','warning');
		return false;
    }
    var producttemp = { productid: productid, hang: hang.value, img: './img/temp.jpg', tensp: tensp.value, price: price.value };
	productArray.unshift(producttemp);
	localStorage.setItem('sanpham',JSON.stringify(productArray));
	showProductList(0);
	customAlert('Thêm sản phẩm thành công','success');
}



// JavaScript Document