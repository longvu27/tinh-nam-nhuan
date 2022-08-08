let nam = parseInt(prompt('Nhập năm vào đây này'));

if (nam % 4 == 0 && nam % 100 != 0) {
    alert(nam + 'Là năm nhuận')
}
if (nam % 100 == 0 && nam % 400 != 0) {
    alert(nam + 'Không phải năm nhuận')
}
if (nam % 100 ==0 && nam % 400 ==0) {
    alert(nam + 'Là năm nhuận')
}