
function loadPage() {
    if (localStorage.getItem('page')  == null) {
        document.getElementById('drinks-page').style.display = 'block';
    }

    else {
        document.getElementById(localStorage.getItem('page')).style.display = 'block';
    }
}

function page(id) {
    console.log('one');
    var hide = document.getElementsByClassName('hidden');
    var i;
    console.log('one');
    for (i = 0; i < hide.length; i++) {
        console.log('two');
        if (hide[i].id == id + "-page") {
            console.log('three');
            document.getElementById(hide[i].id).style.display = 'block';
            localStorage.setItem('page', hide[i].id);
        }

        else {
            console.log('four');
            document.getElementById(hide[i].id).style.display = 'none';
        }
    }
}

function humberger() {

    if (document.getElementById('humberger').checked == true) {
        document.getElementById('humberger').checked = false;
    }

    else {
        document.getElementById('humberger').checked = true;
    }
    
    console.log('hello');
    if (document.getElementById('humberger').checked == true) {
        document.getElementById('humberger-menu').style.display = 'block';
        console.log('hello1');
    }

    else {
        document.getElementById('humberger-menu').style.display = 'none';
        console.log('hello2');
    }
}

function accountView(id) {
    if (id == 'edit') {
        document.getElementById('editAccount-page').style.display = 'block';
        document.getElementById('account-page').style.display = 'none';
    }

    else {
        document.getElementById('editAccount-page').style.display = 'none';
        document.getElementById('account-page').style.display = 'block';
    }
}