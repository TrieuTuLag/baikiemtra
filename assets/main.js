ddocument.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('commentForm');

    form.addEventListener('submit', function (event) {
        const emailInput = form.querySelector('.input_items_name input[type="text"]');
        const ratingInput = form.querySelector('.input_items_name--rating input[type="text"]');

        // Kiểm tra Email đúng định dạng
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(emailInput.value)) {
            alert('Email không hợp lệ');
            event.preventDefault();
            return;
        }

        // Kiểm tra Rating phải là số
        const rating = parseFloat(ratingInput.value);
        if (isNaN(rating) || rating < 0 || rating > 5) {
            alert('Rating phải là số từ 0 đến 5');
            event.preventDefault();
            return;
        }

        // Kiểm tra các trường không được để trống
        if (emailInput.value.trim() === '' || ratingInput.value.trim() === '') {
            alert('Vui lòng điền đầy đủ thông tin');
            event.preventDefault();
            return;
        }
    });
});
