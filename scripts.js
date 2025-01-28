document.getElementById('file').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.getElementById('uploadedImage');
            img.src = e.target.result;
            img.style.display = 'block';
            img.style.transform = 'none'; // Reset any previous transformations
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById('reverseButton').addEventListener('click', function() {
    const img = document.getElementById('uploadedImage');
    if (img.style.transform === 'none' || img.style.transform === '') {
        img.style.transform = 'scaleX(-1)';
    } else {
        img.style.transform = 'none';
    }
});

document.getElementById('downloadButton').addEventListener('click', function() {
    const img = document.getElementById('uploadedImage');
    if (img.src) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        ctx.translate(canvas.width, 0);
        ctx.scale(-1, 1);
        ctx.drawImage(img, 0, 0);
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'reversed-image.png';
        link.click();
    }
});