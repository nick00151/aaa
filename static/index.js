document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submit');
    const questionInput = document.getElementById('question');
    const responseDiv = document.getElementById('response');

    submitButton.addEventListener('click', function () {
        const question = questionInput.value.trim();

        if (question) {
            // 發送POST請求到後端
            fetch('/qa', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ question: question })
            })
            .then(response => response.json())
            .then(data => {
                // 顯示回答
                responseDiv.innerHTML = `<p>${data.answer}</p>`;
            })
            .catch(error => {
                console.error('Error:', error);
                responseDiv.innerHTML = `<p>發生錯誤，請稍後再試。</p>`;
            });
        } else {
            responseDiv.innerHTML = `<p>請輸入問題！</p>`;
        }
    });
});
