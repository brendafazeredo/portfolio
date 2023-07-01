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

  function downloadPDF() {
    var fileUrl = "https://drive.google.com/file/d/1kRpCly6VhjneXc3guQXafA_vSvTdrxEv/view?usp=share_link";

    var link = document.createElement("a");

    link.href = fileUrl;

    link.setAttribute("download", "resume.pdf");

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  }

  const downloadButton = document.querySelector('.download-button');
  downloadButton.addEventListener('click', downloadPDF);
});
