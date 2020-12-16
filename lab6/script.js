// JavaScript source code


let button_left = () =>  {
    document.getElementById('dog').style.width = '30px';
    document.getElementById('cat').style.width = '810px';
    document.querySelector('#cat > img').style.display = 'block';
    document.querySelector('#cat > img').style.width = 'auto';
    document.querySelector('#dog > img').style.display = 'none';
}

let button_middle = () =>  {
    document.getElementById('cat').style.removeProperty('width');
    document.getElementById('dog').style.removeProperty('width');
    document.querySelector('#cat > img').style.removeProperty('width');
    document.querySelector('#dog > img').style.removeProperty('width');
    document.querySelector('#dog > img').style.display = 'block';
    document.querySelector('#cat > img').style.display = 'block';
}

let button_right = ()  =>  {
    document.getElementById('cat').style.width = '30px';
    document.getElementById('dog').style.width = '810px';
    document.querySelector('#cat > img').style.display = 'none';
    document.querySelector('#dog > img').style.width = 'auto';
    document.querySelector('#dog > img').style.display = 'block';
}