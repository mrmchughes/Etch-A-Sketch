window.onload = function () {
    let count = 16,
        div,
        container = document.getElementById('container'),
        fragment = document.createDocumentFragment();

    for (let i = 0; i < count; ++i) {

        for (let j = 0; j < count; ++j) {
            div = document.createElement('div');
            //the className is for testing purposes only, will be all white divs//
            //color change will be when div is hovered//
            div.className = (i % 2 != 0 && j % 2 == 0) || (i % 2 == 0 && j % 2 != 0) ? 'black' : 'white';
            fragment.appendChild(div);
        }
    }

    container.appendChild(fragment);
};

//Figured out how to create multiple divs in JS and append them,//
//next is making them a grid. The chessboard is a good example, but focus on grid//
//CSS is linked, so it's just a matter of getting them where i want them//
//The above code does work, so after I have gotten grid working,//
//then focus on div color change on hover, use the random color function//
