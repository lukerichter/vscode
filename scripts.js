
// Listeners
window.addEventListener('scroll', (event) => { 
    if (window.scrollY === 0) {
         document.getElementById('navigation').style.backgroundColor = 'transparent'
    } else {
        document.getElementById('navigation').style.backgroundColor = 'white'
    }
})

// Button Functions
function toggleMenu() {
    const navClassList = document.getElementById('navigation').classList
    if (navClassList.contains('opened')) {
        navClassList.replace('opened', 'closed')
    } else {
        navClassList.replace('closed', 'opened')
    }
}

function menuitemSelected(id) {
    navClassList.replace('opened', 'closed')
    goTo(id);
} 

function goTo(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    })
}

// Helper functions