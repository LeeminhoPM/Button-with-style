function toast({
    title = '', 
    message = '', 
    type = 'info', 
    duration = 3000}) {
        const main = document.getElementById('toast');
        if (main) {
            const toast = document.createElement('div');

            // Auto remove toast
            const autoRemoveId = setTimeout (function() {
                    main.removeChild(toast);
                }, duration + 1000);

            // Manual remove toast
            toast.onclick = function(e) {
                if (e.target.closest('.toast__close')) {
                    main.removeChild(toast);
                    clearTimeout(autoRemoveId);
                }
            }

            const icons = {
                success: 'bx bxs-check-circle',
                info: 'bx bxs-info-circle',
                warning: 'bx bxs-error-circle',
                error: 'bx bxs-x-circle',
            };
            const icon = icons[type];
            const delay = (duration / 1000).toFixed(2);

            toast.classList.add('toast', `toast--${type}`);
            toast.style.animation = `SlideToLeft ease .5s, FadeOut linear 1s ${delay}s forwards`;
            toast.innerHTML = `
                <div class="toast__icon">
                    <i class='${icon}'></i>
                </div>
                <div class="toast__body">
                    <h3 class="toast__title">${title}</h3>
                    <p class="toast__msg">${message}</p>
                </div>
                <div class="toast__close">
                    <i class='bx bx-x' ></i>
                </div>
            `;
            main.appendChild(toast);
        }
}

function showSuccessToast() {
    toast({
        title: 'Thành công nhân !!!',
        message: 'Bạn là nhất, nhất bạn rồi.',
        type: 'success',
        duration: 5000
    });
}
function showInfoToast() {
    toast({
        title: 'Hông bé ơi !!!',
        message: 'Em hoong pho lâu ah mà eim xin in4 của ah, ah hoong cho đâuuuuu.',
        type: 'info',
        duration: 5000
    });
}
function showWarningToast() {
    toast({
        title: 'Cảnh báo !!!',
        message: 'Đề cao cảnh giác trước các thế lực thù địch, các luận điệu xuyên tạc, chống phá Đảng Cộng Sản Việt Nam và thể chế nhà nước CHXHCN Việt Nam.',
        type: 'warning',
        duration: 5000
    });
}
function showErrorToast() {
    toast({
        title: 'Lỗi rồi !!!',
        message: 'Gà.',
        type: 'error',
        duration: 5000
    })
}