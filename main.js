const tabs = document.querySelectorAll('button[id^="tab-"]')
const contents = document.querySelectorAll('div[id^="content-"]')

const input = document.getElementById('thought-input')
const commitBtn = document.getElementById('commit-btn')
const commitList = document.getElementById('content-commit')

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

commitBtn.addEventListener('click', function() {
  const text = input.value
  
  if(text === '') {
    alert('چیزی ننوشتی!')
    return
  }
  
const now = new Date()
const date = now.toLocaleDateString('fa-IR')
const time = now.toLocaleTimeString('fa-IR')

const div = document.createElement('div')
div.innerHTML = `
 <div class="flex flex-col gap-1 py-4 border-b border-zinc-100">
    <p class="text-sm text-zinc-800">${text}</p>
    <span class="mono text-xs text-zinc-400">${date} — ${time}</span>
  </div>
`
commitList.appendChild(div)
input.value = ''
})

