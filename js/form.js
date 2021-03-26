const path = window.location.pathname
const parts = path.split('/').reverse().filter(p => p.length > 0)
const selected_date = parts[1]
const selected_country = parts[0]

const select_date = document.getElementById('select-date')
const select_country = document.getElementById('select-country')

// Dates select
fetch('../../dates.json').then(res => res.json()).then(date_dirs => {
  let options = date_dirs.sort().map(date_dir => {
    let opt = document.createElement('option')
    opt.value = opt.innerHTML = date_dir
    return opt
  })
  options.forEach(opt => select_date.appendChild(opt))
  select_date.selectedIndex = options.findIndex(opt => opt.value === selected_date)

  select_date.addEventListener('change', e => {
    window.location.pathname = window.location.pathname.replace(selected_date, e.target.value)
  })
})

// Country select
fetch('../regions.json').then(res => res.json()).then(regions => {
  let options = regions.sort().map(region => {
    let opt = document.createElement('option')
    opt.value = region.dir
    opt.innerHTML = region.name
    return opt
  })
  options.forEach(opt => select_country.appendChild(opt))
  select_country.selectedIndex = options.findIndex(opt => opt.value === selected_country)

  select_country.addEventListener('change', e => {
    window.location.pathname = window.location.pathname.replace(selected_country, e.target.value)
  })
})
