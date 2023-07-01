document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.boxes > div');
    
    boxes.forEach(function(box, index) {
      box.addEventListener('click', function() {
        if (!box.classList.contains('active')) {
          boxes.forEach(function(otherBox) {
            otherBox.classList.remove('active');
          });
          box.classList.add('active');
        }
      });
  
      // Open the first box by default
      if (index === 0) {
        box.classList.add('active');
      }
    });
  });
  