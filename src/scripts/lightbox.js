window.openLightbox = (startIdx = 0) => {
  const urls = Array.from(
    document.querySelectorAll('[data-gallery-img]')
  ).map((img) => img.src);

  const dlg = document.getElementById('lightbox');
  const pic = dlg.querySelector('img');
  let idx = startIdx;

  const show = () => (pic.src = urls[idx]);
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
