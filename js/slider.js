        let banner = ['banner1.jpg', 'banner2.jpg', 'banner3.jpg'];
        let i = 0;
    
        function left() {
            i--;
            if (i < 0) {
                i = banner.length - 1;
            }
            document.getElementById('slider').src = `images/${banner[i]}`;
        }
    
        function right() {
            i++;
            if (i >= banner.length) {
                i = 0;
            }
            document.getElementById('slider').src = `images/${banner[i]}`;
        }
