window.openLightbox = (start = 0) => {
  const urls = [...document.querySelectorAll('[data-gallery-img]')].map((i) => i.src);
  const dlg = document.getElementById('lightbox');
  const pic = dlg.querySelector('img');
  let i = start;

  const show = () => (pic.src = urls[i]);
  dlg.querySelector('[data-next]').onclick = () => { i = (i + 1) % urls.length; show(); };
  dlg.querySelector('[data-prev]').onclick = () => { i = (i - 1 + urls.length) % urls.length; show(); };

  show();                 // set src before opening
  if (!dlg.open) dlg.showModal();
};