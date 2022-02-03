var form = document.querySelector('form-outline');

function infoRecipies(){
    if (form.checkValidity() === 'celery root') {
        document.querySelector('render').innerHTML = `
                Celery root is best to eat and good for health too.
        `
    }
}