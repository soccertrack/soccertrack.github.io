function getParamByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return null;
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function processLoad() {
    let position = getParamByName("pos");
    if (position != null) {
        if (position == "midfield" || position == "forward" ||
            position == "defense" || position == "keeper") {
                filterByPosition(position);
            }
    }
}

function processClick(id) {
    let isMobile = /iPhone|Android/i.test(navigator.userAgent);
    let path = (isMobile)
        ? "details/m" + id + ".html"
        : "details/" + id + ".html"
    location.href = path;
}

function processFilterBlock() {

    const filterElement = document.getElementById('filterBlock');
    const blockState = (filterElement.style.display == 'none');

    if (blockState) {
        filterElement.style.display = 'inline';
    } else {
        filterElement.style.display = 'none';
    }
}

function filterByLeague(country) {
    const container = document.getElementById('cardContainer');
    const children = container.children;

    for (var i = 0; i < children.length; ++i) {

        const countryData = children
            .item(i)
            .getAttribute('data-league')
            .toLowerCase();

        if (countryData == country || country == "all") {
            children
                .item(i)
                .style
                .display = 'inline';
        } else {
            children
                .item(i)
                .style
                .display = 'none';
        }
    }
}

function filterByPosition(position) {
    const container = document.getElementById('cardContainer');
    const children = container.children;

    position = position.toLowerCase();
    for (var i = 0; i < children.length; ++i) {

        const positionData = children
            .item(i)
            .getAttribute('data-position')
            .toLowerCase();

        if (positionData == position || position == "all") {
            children
                .item(i)
                .style
                .display = 'inline';
        } else {
            children
                .item(i)
                .style
                .display = 'none';
        }
    }
}