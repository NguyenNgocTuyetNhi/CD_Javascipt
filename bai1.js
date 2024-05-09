function xuLyChuoi(chuoi) {

    chuoi = chuoi.trim().replace(/\s+/g, ' ');

    chuoi = chuoi.toLowerCase().replace(/(^|\s)\S/g, function(firstLetter) {
        return firstLetter.toUpperCase();
    });

    return chuoi;
}
var chuoiVao = "   javascript Xử lý  chuỗi  bất   kỳ  ";
var chuoiXuLy = xuLyChuoi(chuoiVao);
console.log(chuoiXuLy);