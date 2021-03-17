function getFormation(){
    return [{format: "4-4-2",team: [{pos: "GK", top:290, left:50},{pos: "DF", top:230, left:240},{pos: "DF", top:360, left:240},{pos: "LB", top:80, left:300},{pos: "RB", top:510, left:300},{pos: "MD", top:230, left:440},{pos: "MD", top:360, left:440},{pos: "LW", top:80, left:500},{pos: "RW", top:510, left:500},{pos: "FW", top:230, left:640},{pos: "FW", top:360, left:640}]},{format: "3-4-3",team: [{pos: "GK", top:290, left:50},{pos: "DF", top:290, left:240},{pos: "DF", top:150, left:240},{pos: "DF", top:450, left:240},{pos: "MD", top:230, left:440},{pos: "MD", top:360, left:440},{pos: "MD", top:120, left:440},{pos: "MD", top:480, left:440},{pos: "FW", top:150, left:650},{pos: "FW", top:450, left:650},{pos: "FW", top:290, left:700}]},{format: "3-5-1-1",team: [{pos: "GK", top:290, left:50},{pos: "DF", top:290, left:200},{pos: "DF", top:150, left:240},{pos: "DF", top:450, left:240},{pos: "MD", top:230, left:440},{pos: "MD", top:360, left:440},{pos: "LW", top:80, left:500},{pos: "RW", top:510, left:500},{pos: "MD", top:290, left:350},{pos: "FW", top:290, left:570},{pos: "FW", top:290, left:700}]},{format: "3-5-2",team: [{pos: "GK", top:290, left:50},{pos: "DF", top:290, left:220},{pos: "DF", top:150, left:240},{pos: "DF", top:450, left:240},{pos: "MD", top:230, left:440},{pos: "MD", top:360, left:440},{pos: "LW", top:80, left:500},{pos: "RW", top:510, left:500},{pos: "MD", top:290, left:350},{pos: "FW", top:230, left:640},{pos: "FW", top:360, left:640}]},{format: "4-2-3-1",team: [{pos: "GK", top:290, left:50},{pos: "DF", top:230, left:240},{pos: "DF", top:360, left:240},{pos: "LB", top:80, left:300},{pos: "RB", top:510, left:300},{pos: "MD", top:230, left:440},{pos: "MD", top:360, left:440},{pos: "LW", top:80, left:600},{pos: "RW", top:510, left:600},{pos: "FW", top:290, left:600},{pos: "FW", top:290, left:750}]},{format: "4-3-3",team: [{pos: "GK", top:290, left:50},{pos: "DF", top:230, left:240},{pos: "DF", top:360, left:240},{pos: "LB", top:80, left:300},{pos: "RB", top:510, left:300},{pos: "MD", top:180, left:440},{pos: "MD", top:410, left:440},{pos: "LW", top:80, left:600},{pos: "RW", top:510, left:600},{pos: "MD", top:290, left:440},{pos: "FW", top:290, left:660}]},{format: "4-4-1-1",team: [{pos: "GK", top:290, left:50},{pos: "DF", top:230, left:240},{pos: "DF", top:360, left:240},{pos: "LB", top:80, left:300},{pos: "RB", top:510, left:300},{pos: "MD", top:230, left:440},{pos: "MD", top:360, left:440},{pos: "LW", top:80, left:500},{pos: "RW", top:510, left:470},{pos: "FW", top:290, left:570},{pos: "FW", top:290, left:700}]},{format: "4-5-1",team: [{pos: "GK", top:290, left:50},{pos: "DF", top:230, left:240},{pos: "DF", top:360, left:240},{pos: "LB", top:80, left:300},{pos: "RB", top:510, left:300},{pos: "MD", top:230, left:440},{pos: "MD", top:360, left:440},{pos: "LW", top:80, left:500},{pos: "RW", top:510, left:500},{pos: "MD", top:290, left:350},{pos: "FW", top:290, left:640}]},{format: "4-4-2(D)",team: [{pos: "GK", top:290, left:50},{pos: "DF", top:230, left:240},{pos: "DF", top:360, left:240},{pos: "LB", top:80, left:300},{pos: "RB", top:510, left:300},{pos: "MD", top:180, left:440},{pos: "MD", top:410, left:440},{pos: "MD", top:290, left:370},{pos: "MD", top:290, left:535},{pos: "FW", top:230, left:640},{pos: "FW", top:360, left:640}]}];
}

function getPlayers(){
    return [{"name":"Aaron Long","position":"Defense","club":"NY Red Bulls"},{"name":"Antonee Robinson","position":"Defense","club":"Fulham"},{"name":"Aron Johannsson","position":"Forward","club":"Lech Poznan"},{"name":"Benji Michel","position":"Forward","club":"Orlando City"},{"name":"Bill Hamid","position":"Goalkeeper","club":"D.C. United"},{"name":"Bobby Wood","position":"Forward","club":"Hamburg"},{"name":"Brad Guzan","position":"Goalkeeper","club":"Atlanta United"},{"name":"Brandon Servania","position":"Midfield","club":"St Polten"},{"name":"Brenden Aaronson","position":"Midfield","club":"RB Salzburg"},{"name":"Bryan Reynolds","position":"Defense","club":"Roma"},{"name":"Cameron Carter-Vickers","position":"Defense","club":"Bournemouth"},{"name":"Chris Durkin","position":"Midfield","club":"STVV"},{"name":"Chris Mueller","position":"Midfield","club":"Orlando City"},{"name":"Chris Richards","position":"Defense","club":"Hoffenheim"},{"name":"Christian Pulisic","position":"Forward","club":"Chelsea"},{"name":"Cristian Roldan","position":"Midfield","club":"Seattle Sounders"},{"name":"Daniel Lovitz","position":"Defense","club":"Nashville"},{"name":"Darlington Nagbe","position":"Midfield","club":"Columbus"},{"name":"Daryl Dike","position":"Forward","club":"Barnsley"},{"name":"DeAndre Yedlin","position":"Defense","club":"Galatasaray"},{"name":"Djordje Mihailovic","position":"Midfield","club":"Chicago"},{"name":"Duane Holmes","position":"Midfield","club":"Huddersfield"},{"name":"Eric Lichaj","position":"Defense","club":"Fatih Karagümrük"},{"name":"Erik Palmer-Brown","position":"Defense","club":"Austria Wien"},{"name":"Ethan Horvath","position":"Goalkeeper","club":"Club Brugge"},{"name":"George Bello","position":"Defense","club":"Atlanta United"},{"name":"Gianluca Busio","position":"Midfield","club":"Sporting KC"},{"name":"Giovanni Reyna","position":"Midfield","club":"Dortmund"},{"name":"Gyasi Zardes","position":"Forward","club":"Columbus"},{"name":"Haji Wright","position":"Forward","club":"SonderjyskE"},{"name":"Jackson Yueill","position":"Midfield","club":"San Jose"},{"name":"Jesus Ferreira","position":"Forward","club":"FC Dallas"},{"name":"Joe Scally","position":"Defense","club":"Mönchengladbach"},{"name":"John Brooks","position":"Defense","club":"Wolfsburg"},{"name":"Johny Cardoso","position":"Midfield","club":"Internacional"},{"name":"Jonathon Lewis","position":"Forward","club":"Colorado"},{"name":"Jordan Morris","position":"Forward","club":"Seattle Sounders"},{"name":"Josh Sargent","position":"Forward","club":"Werder"},{"name":"Jozy Altidore","position":"Forward","club":"Toronto FC"},{"name":"Kellyn Acosta","position":"Midfield","club":"Colorado"},{"name":"Konrad De la Fuente","position":"Forward","club":"Barcelona"},{"name":"Luca de la Torre","position":"Midfield","club":"Heracles"},{"name":"Mark McKenzie","position":"Defense","club":"Genk"},{"name":"Matt Miazga","position":"Defense","club":"Anderlecht"},{"name":"Matthew Hoppe","position":"Forward","club":"Schalke"},{"name":"Matthew Olosunde","position":"Defense","club":"Rotherham"},{"name":"Michael Bradley","position":"Midfield","club":"Toronto FC"},{"name":"Miles Robinson","position":"Defense","club":"Atlanta United"},{"name":"Mix Diskerud","position":"Midfield","club":"Denizlispor"},{"name":"Nicholas Gioacchini","position":"Forward","club":"Caen"},{"name":"Nick Lima","position":"Defense","club":"San Jose"},{"name":"Owen Otasowie","position":"Defense","club":"Wolves"},{"name":"Owen Otasowie","position":"Midfield","club":"Wolves"},{"name":"Paul Arriola","position":"Forward","club":"Swansea"},{"name":"Reggie Cannon","position":"Defense","club":"Boavista"},{"name":"Richard Ledezma","position":"Midfield","club":"PSV Eindhoven"},{"name":"Sam Vines","position":"Defense","club":"Colorado"},{"name":"Sean Johnson","position":"Goalkeeper","club":"NYC FC"},{"name":"Sebastian Lletget","position":"Midfield","club":"LA Galaxy"},{"name":"Sergino Dest","position":"Defense","club":"Barcelona"},{"name":"Taylor Booth","position":"Midfield","club":"St Pölten"},{"name":"Theoson Siebatcheu","position":"Forward","club":"Young Boys"},{"name":"Tim Ream","position":"Defense","club":"Fulham"},{"name":"Timothy Chandler","position":"Defense","club":"Eintracht Frankfurt"},{"name":"Timothy Weah","position":"Forward","club":"Lille"},{"name":"Tyler Adams","position":"Midfield","club":"RB Leipzig"},{"name":"Tyler Boyd","position":"Forward","club":"Sivasspor"},{"name":"Ulysses Llanez","position":"Forward","club":"Heerenveen"},{"name":"Walker Zimmerman","position":"Defense","club":"Nashville"},{"name":"Weston McKennie","position":"Midfield","club":"Juventus"},{"name":"Wil Trapp","position":"Midfield","club":"Inter Miami"},{"name":"Yunus Musah","position":"Midfield","club":"Valencia"},{"name":"Zack Steffen","position":"Goalkeeper","club":"Man City"}];
}

    function createPlayerOption(order, item) {
        let spanElement = document.createElement('span');
        spanElement.setAttribute('data-order', String(order));
        spanElement.className = 'selectButton';
        spanElement.innerHTML = '<b>' + item.name+ '</b><br><i>' + item.club +'</a>';
        spanElement.onclick = selectPlayer;

        return spanElement;
    }

    function createButton(currPosition) {
        let buttonElement = document.createElement('button');
        buttonElement.setAttribute('data-position', currPosition.pos);
        buttonElement.innerText = currPosition.pos;
        buttonElement.className = 'playerButton';
        buttonElement.style.top = currPosition.top;
        buttonElement.style.left = currPosition.left;
        buttonElement.onclick = showPlayerOptions;

        return buttonElement;
    }

    function createLabel(currPosition) {
        let divElement = document.createElement('div');
        divElement.className = 'player';
        divElement.style.position = 'absolute';
        divElement.style.top = currPosition.top + 55;
        divElement.style.left = currPosition.left - 30;
        divElement.style.height = 25;
        divElement.style.width = 110;
        divElement.style.textAlign = 'center';

        divElement.innerHTML = '<span class="playerName" style="font-size:10pt;">Player Name</span><br><div class="club" style="background:pink;color:black;font-size:9pt;">Club Name</div>';
        return divElement;
    }

    function createOption(formation, order, selected) {
        let labelElement = document.createElement('label');
        let inputStart = (selected) 
                        ? "<input type='radio' name='form' checked onclick='selectFormation("
                        : "<input type='radio' name='form' onclick='selectFormation(";

        let inputMid = ");'><span class='label'>";
        let inputEnd = "</span";
        
        let inputElementString = inputStart + order + inputMid + formation.format + inputEnd;
        labelElement.innerHTML = inputElementString;

        return labelElement;
    }

    function selectPlayer(evt) {
        var target = evt.target;
        while(target.tagName != 'SPAN') {
            target = target.parentElement;
        }

        let order = target.getAttribute('data-order');
        let item = getPlayers()[order];

        let img = createPlayerImage(item.name);
        for(let i=0;i<lastTarget.childNodes.length;++i) {
            let node = lastTarget.childNodes[i];
            if (node.tagName == 'IMG') {
                lastTarget.removeChild(node);
                break;
            }
        }
        lastTarget.appendChild(img);

        let divElement = lastTarget.nextSibling;
        let playerNameElement = divElement.getElementsByClassName('playerName')[0];
        let clubNameElement = divElement.getElementsByClassName('club')[0];

        playerNameElement.innerText = shortenName(item.name);
        clubNameElement.innerText = item.club;

        hidePlayerOptions()
    }

    function shortenName(name) {
        var segments = name.split(' ');
        var result = segments[0].charAt(0);
        for(let i=1;i< segments.length;++i) {
            result += ' ' + segments[i] 
        }
        return result;
    }

    function selectFormation(order) {
        let formations = getFormation();

        let fieldElement = document.getElementById("field");

        clearField(fieldElement);
        populateField(fieldElement, formations[order].team);

        hidePlayerOptions();
    }

    function populateSelection() {
        let players = getPlayers();

        let container = document.getElementById("selectContainer");
        for(let i=0; i<players.length; ++i) {
            let item = players[i];
            container.appendChild(createPlayerOption(i, item));
        }
    }

    function hidePlayerOptions() {
        let container = document.getElementById("selectContainer");
        container.style.display = 'none';
    }

    var lastTarget = null;

    function showPlayerOptions(evt) {
        
        lastTarget = evt.target;
        while(lastTarget.tagName != 'BUTTON') {
            lastTarget = lastTarget.parentElement;
        }

        let pos = evt.target.getAttribute("data-position");
        let players = getPlayers();
        let container = document.getElementById("selectContainer");
        let children = container.getElementsByTagName("span");

        container.style.display = "flex";
        container.style.left = evt.clientX + 50;
        container.style.top = 150;
        var count = 0;
        for(let i=0; i< children.length; ++i) {
            let child = children[i];
            child.style.display = 'none';

            if (pos == "GK" && players[i].position == "Goalkeeper" ) {
                child.style.display = 'block';
                count++;
            } else if ((pos == "DF" || pos == "LB" || pos == "RB") && players[i].position == "Defense") {
                child.style.display = 'block';
                count++;
            }  else if ((pos == "LW" || pos == "RW" || pos == "MD" || pos == "FW")
                        && (players[i].position == "Forward" ||  players[i].position == "Midfield")) {
                child.style.display = 'block';
                count++;
            }
        }
        var numColumn = Math.floor(count / 12);
        if (count % 12 != 0) {
            numColumn++;
        }
        container.style.width = 160 * numColumn;
        evt.cancelBubble = true;
    }

    function populateField(fieldElement, team) {
        for(let i=0; i<team.length; ++i) {
            let currPosition = team[i];
            fieldElement.appendChild(createButton(currPosition));
            fieldElement.appendChild(createLabel(currPosition));
        }
        createLogo(fieldElement);
    }

    function clearField(fieldElement) {
        while (fieldElement.firstChild) {
            fieldElement.removeChild(fieldElement.firstChild);
        }
    }

    function createPlayerImage(playerName) {
        let name = playerName.replaceAll(' ', '');
        let imgElement = document.createElement('img');
        imgElement.src = 'jpeg/small/' + name + '.jpg';
        imgElement.style.width = 40;
        imgElement.style.height = 40;
        return imgElement;
    }

    function createLogo(fieldElement) {
        let imgElement = document.createElement('img');
        imgElement.src = 'img/USSoccer.png';
        imgElement.style.position = 'absolute';
        imgElement.style.top = 40;
        imgElement.style.left = 750;
        imgElement.style.opacity = 0.3;
        imgElement.style.width = 125;
        imgElement.style.height = 125;

        let divElement = document.createElement('div');
        divElement.innerText = "created with ussoccertrack.com";
        divElement.style.position = 'absolute';
        divElement.style.color = '#111111';
        divElement.style.fontSize = '10px';
        divElement.style.top = 45;
        divElement.style.left = 685;
        divElement.style.width = 215;

        fieldElement.appendChild(imgElement);
        fieldElement.appendChild(divElement);
    }

    function load() {
        let formations = getFormation();
        let fieldElement = document.getElementById("field");

        let segmentElement = document.getElementById("selector");
        for(let i=0; i<formations.length; ++i) {
            let labelElement = createOption(formations[i], i, i == 0);
            segmentElement.appendChild(labelElement);
        }
        populateSelection();
        clearField(fieldElement);
        populateField(fieldElement, formations[0].team);
    }

    function download(){
        html2canvas(document.getElementById('field'), {useCORS:true}).then(function(canvas) {
            let ctx = canvas.getContext('2d');
            ctx.webkitImageSmoothingEnabled = true;
            ctx.mozImageSmoothingEnabled = true;
            ctx.imageSmoothingEnabled = true;

            let aElement = document.createElement('a');
            aElement.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
            aElement.download = 'myusmnt-selection.jpg';
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
