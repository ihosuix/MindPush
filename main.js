const tabs = document.querySelectorAll('button[id^="tab-"]')
const contents = document.querySelectorAll('div[id^="content-"]')

contents.forEach(function(content) {
  content.classList.add('hidden')
})
document.getElementById('content-write').classList.remove('hidden')

tabs.forEach(function(tab) {
  tab.addEventListener('click', function() {
    console.log(tab.id)
    
    tabs.forEach(function(t) {
      t.classList.remove('tab-active')
      t.classList.add('tab-inactive')
    })
    tab.classList.remove('tab-inactive')
    tab.classList.add('tab-active')

    contents.forEach(function(content) {
  content.classList.add('hidden')
})

const id = tab.id.replace('tab-', 'content-')
document.getElementById(id).classList.remove('hidden')

  })
})