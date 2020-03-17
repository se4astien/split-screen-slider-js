// when the DOM load

document.addEventListener('DOMContentLoaded', function() {
  let wrapper = document.getElementById('wrapper');
  let topLayer = document.querySelector('.top');
  let handle = document.querySelector('.handle');
  let skew = 0;
  let delta = 0;

  // we test if wrapper has a class of skeved
  // if it does, we want to set the skew to 1000
  if (wrapper.className.indexOf('skewed') != 1) {
    skew = 995;
  }

  wrapper.addEventListener('mousemove', function(e) {
    // console.log(e.clientX);
    delta = (e.clientX - window.innerWidth / 2) * 0.5;

    handle.style.left = e.clientX + delta + 'px';

    topLayer.style.width = e.clientX + skew + delta + 'px';
  });
});
