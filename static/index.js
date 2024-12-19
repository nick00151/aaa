const container = document.querySelector(".container");
document.addEventListener('DOMContentLoaded', function() {
fetch('/hello', {
method: 'POST'
, // 使用POST請求
headers: {
'Content-Type': 'text/plain',
},
body: JSON.stringify({}) // 傳的訊息
})
.then(response => response.json())
.then(data => {
// 端回的訊息之的動作
container.innerHTML = `<p>${data.message}</p>`;
})
.catch(error => {
//錯狀況理
console.error('Error:', error);
});
});
