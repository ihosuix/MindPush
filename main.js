let commits = []

const saved = localStorage.getItem('commits')
if(saved) {
  commits = JSON.parse(saved)
}

const tabs = document.querySelectorAll('button[id^="tab-"]')
const contents = document.querySelectorAll('div[id^="content-"]')

const input = document.getElementById('thought-input')
const commitBtn = document.getElementById('commit-btn')
const commitList = document.getElementById('content-commit')

commits.forEach(function(commit) {
  const div = document.createElement('div')
  div.innerHTML = `
    <div class="commit-item py-4 border-b border-zinc-100">
      <p class="text-sm text-zinc-800 mb-1">${commit.text}</p>
      <span class="mono text-[0.7rem] text-zinc-300">${commit.date} — ${commit.time}</span>
    </div>
  `
  commitList.appendChild(div)
})

contents.forEach(function(content) {
  content.classList.add('hidden')
})
document.getElementById('content-write').classList.remove('hidden')

tabs.forEach(function(tab) {
  tab.addEventListener('click', function() {
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
    <div class="commit-item py-4 border-b border-zinc-100">
      <p class="text-sm text-zinc-800 mb-1">${text}</p>
      <span class="mono text-[0.7rem] text-zinc-300">${date} — ${time}</span>
    </div>
  `
  commitList.appendChild(div)
  commits.push({ text: text, date: date, time: time })
  localStorage.setItem('commits', JSON.stringify(commits))
  input.value = ''
})