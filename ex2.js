const a = 1;
const arr = [1,2,3,4];
a = 2;
//Se gay loi vi const la hằng số k thể gán lại giá trị đc
arr.push(5);
//K gây lỗi vì đây là thay đổi nd đối tượng khai báo chứ k phải là gán lại giá trị
console.log("Gia tri mang sau khi them:",arr);