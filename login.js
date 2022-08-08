let ten = prompt('Tên mi là chi?');
let matkhau = prompt('Mật khẩu của mi?');

if (ten == 'Quản trị viên') {
    if (matkhau == 'masoto') {
        alert('Chào mi đã quay trở lại');
    }
    else if (matkhau == null) {
        alert ('Ken xồ');
    }
    else {
        alert ('Mi quên mật khẩu à!');
    }
}
if ( ten == null) {
    alert ('Ken xồ');
else {
        alert ('Tau không bít mi, oke');
    }

}

