window.openLightbox = (start = 0) => {
    const thumbs = [...document.querySelectorAll('[data-gallery-img]')];
    const urls = thumbs.map((img) => img.src);

    const dlg = document.getElementById('lightbox');
    const pic = dlg.querySelector('img');
    let idx = start;

    const show = () => {
        if (pic.src !== urls[idx]) pic.src = urls[idx];
    };

    dlg.querySelector('[data-next]').onclick = () => {
        idx = (idx + 1) % urls.length;
        show();
    };
    dlg.querySelector('[data-prev]').onclick = () => {
        idx = (idx - 1 + urls.length) % urls.length;
        show();
    };

    show();
    dlg.showModal();
};