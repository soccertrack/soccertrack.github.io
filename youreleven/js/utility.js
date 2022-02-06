
    function download(elementName){
        html2canvas(document.getElementById(elementName), {useCORS:true}).then(function(canvas) {
            let ctx = canvas.getContext('2d');
            ctx.webkitImageSmoothingEnabled = true;
            ctx.mozImageSmoothingEnabled = true;
            ctx.imageSmoothingEnabled = true;

            let aElement = document.createElement('a');
            aElement.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
            aElement.download = 'myusmnt-roster.jpg';
            aElement.click();
        });
    }

    function getLink2() {
        saveToImgur(function(url) {
            navigator.clipboard.writeText(url).then(function() {
                let aElement = document.createElement('a');
                aElement.href = url;
                aElement.click();
            }, function(err) {
            console.error('Async: Could not copy text: ', err);
            });
        });
    }

    function getLink() {
        saveToImgur(function(url) {
            navigator.clipboard.writeText(url).then(function() {
                alert('copied ' + url + " to clipboard");
            }, function(err) {
            console.error('Async: Could not copy text: ', err);
            });
        });
    }

    function shareToFacebook() {
        saveToImgur(function(url) {
            window.open(
                'https://www.facebook.com/sharer/sharer.php?u=' + url,
                'facebook-share-dialog', 
                'width=626,height=436'); 
            });
    }

    function shareToTwitter(url) {
        saveToImgur(function(url) {
            window.open(
                'https://twitter.com/share?url=' + url + '&text=My USMNT team pick (with ussoccertrack.com)&hashtags=#USMNT,#ussoccertrack',
                'twitter-share-dialog', 
                'width=626,height=436'); 
            });
    }

    function saveToImgur(chainFunction){
        html2canvas(document.getElementById('field'), {useCORS: true}).then(function(canvas) {
            const formData = new FormData();
            formData.append('image', canvas.toDataURL("image/png").split(',')[1]);
        
            fetch('https://api.imgur.com/3/image', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    Authorization: 'Client-ID 1aa2a0872cf6b8a',
                },
                body: formData
            }).then(response => {
                if (response.ok) {
                    response.json().then(data => {
                        chainFunction(data.data.link);
                    });
                }
            }).catch(error => {
                alert(error);
            });
        });
    }
