document.addEventListener('DOMContentLoaded', function() {
    var itemList = document.getElementById('itemList');
    var items = itemList.getElementsByTagName('li');

    for (var i = 0; i < items.length; i++) {
        items[i].addEventListener('mouseover', function() {
            this.style.backgroundColor = '#c0c0c0';
        });

        items[i].addEventListener('mouseout', function() {
            this.style.backgroundColor = '#f0f0f0';
        });
    }
});
