(function () {
    const dlg   = document.getElementById('lightbox');
    const imgEl = dlg.querySelector('img');
    const next  = dlg.querySelector('[data-next]');
    const prev  = dlg.querySelector('[data-prev]');

    const slides = () =>
        [...document.querySelectorAll('[data-gallery-img]')].map((el) => el.src);

    let idx = 0;
    const show = (i) => {
        const list = slides();
        idx = ((i % list.length) + list.length) % list.length;
        imgEl.src = list[idx];
    };

    window.openLightbox = (start = 0) => {
        show(start);
        if (!dlg.open) dlg.showModal();
    };

    next.onclick = () => show(idx + 1);
    prev.onclick = () => show(idx - 1);

    dlg.addEventListener('click', (e) => {
        if (e.target === dlg) dlg.close();
    });

    dlg.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') dlg.close();
    });

    dlg.addEventListener('close', () => {
        imgEl.removeAttribute('src');
    });
})();