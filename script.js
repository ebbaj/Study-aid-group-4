// modal Window 
function formModal() {
    document.addEventListener('click', function (event) {
        event = window.event;
        const target = event.target ;
        if (target.hasAttribute('data-form') && target.getAttribute('data-form') == 'modal') {
            if (target.hasAttribute('data-target')) {
                const m_ID = target.getAttribute('data-target');
                document.getElementById(m_ID).classList.add('open');
                event.preventDefault();
            }
        }
  
        if ((target.hasAttribute('data-dismiss') && target.getAttribute('data-dismiss') == 'modal') || target.classList.contains('modal')) {
            const modal = document.querySelector('[class="modal open"]');
            modal.classList.remove('open');
            event.preventDefault();
        }
    }, false);
  }
  
formModal();



const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
});

// const weekdays = document.getElementById("daysOptions");
const submitBtn = document.getElementById('submitButton');

function book(){
    let bookTitle = document.querySelector('#book-title').value;
    return bookTitle;
}


submitBtn.addEventListener('click', function(e) {
    console.log(book());
});

