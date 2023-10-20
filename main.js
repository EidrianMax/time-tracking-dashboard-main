const subgrid = document.querySelector('.subgrid')
const btnDaily = document.querySelector('#daily')
const btnWeekly = document.querySelector('#weekly')
const btnMonthly = document.querySelector('#monthly')

document.addEventListener('DOMContentLoaded', () => {
  btnDaily.classList.add('profile-card__nav-item--active')

  fetch('./data.json')
  .then(res => res.json())
  .then(activities => {
    activities.forEach(activity => {
      const template = `
        <div class="card-activity card-activity--${activity.title.toLowerCase().trim().replace(/ /g, "")}">
          <div class="card-activity__bg card-activity__bg--${activity.title.toLowerCase().trim().replace(/ /g, "")}"></div>
          <div class="card-activity__wrapper">
            <div class="card-activity__name-elipse">
              <div class="card-activity__name">${activity.title}</div>
              <button class="card-activity__elipse">
                <img src="./images/icon-ellipsis.svg" aria-hidden="true" />
              </button>
            </div>
            <div class="card-activity__current-previous">
              <div class="card-activity__current-hours">${activity.timeframes.daily.current}hrs</div>
              <div class="card-activity__previous-hours">Last Day - ${activity.timeframes.daily.previous}hrs</div>
            </div>
          </div>
        </div>
      `

        subgrid.innerHTML += template
    });
  })
})

btnDaily.addEventListener('click', () => {
  btnDaily.classList.add('profile-card__nav-item--active')
  btnWeekly.classList.remove('profile-card__nav-item--active')
  btnMonthly.classList.remove('profile-card__nav-item--active')
  subgrid.innerHTML = ''

  fetch('./data.json')
  .then(res => res.json())
  .then(activities => {
    activities.forEach(activity => {
      const template = `
        <div class="card-activity card-activity--${activity.title.toLowerCase().trim().replace(/ /g, "")}">
          <div class="card-activity__bg card-activity__bg--${activity.title.toLowerCase().trim().replace(/ /g, "")}"></div>
          <div class="card-activity__wrapper">
            <div class="card-activity__name-elipse">
              <div class="card-activity__name">${activity.title}</div>
              <button class="card-activity__elipse">
                <img src="./images/icon-ellipsis.svg" aria-hidden="true" />
              </button>
            </div>
            <div class="card-activity__current-previous">
              <div class="card-activity__current-hours">${activity.timeframes.daily.current}hrs</div>
              <div class="card-activity__previous-hours">Last Day - ${activity.timeframes.daily.previous}hrs</div>
            </div>
          </div>
        </div>
      `

        subgrid.innerHTML += template
    });
  })
})

btnWeekly.addEventListener('click', () => {
  btnWeekly.classList.add('profile-card__nav-item--active')
  btnDaily.classList.remove('profile-card__nav-item--active')
  btnMonthly.classList.remove('profile-card__nav-item--active')
  subgrid.innerHTML = ''

  fetch('./data.json')
  .then(res => res.json())
  .then(activities => {
    activities.forEach(activity => {
      const template = `
        <div class="card-activity card-activity--${activity.title.toLowerCase().trim().replace(/ /g, "")}">
          <div class="card-activity__bg card-activity__bg--${activity.title.toLowerCase().trim().replace(/ /g, "")}"></div>
          <div class="card-activity__wrapper">
            <div class="card-activity__name-elipse">
              <div class="card-activity__name">${activity.title}</div>
              <button class="card-activity__elipse">
                <img src="./images/icon-ellipsis.svg" aria-hidden="true" />
              </button>
            </div>
            <div class="card-activity__current-previous">
              <div class="card-activity__current-hours">${activity.timeframes.weekly.current}hrs</div>
              <div class="card-activity__previous-hours">Last Day - ${activity.timeframes.weekly.previous}hrs</div>
            </div>
          </div>
        </div>
      `

        subgrid.innerHTML += template
    });
  })
})

btnMonthly.addEventListener('click', () => {
  btnMonthly.classList.add('profile-card__nav-item--active')
  btnDaily.classList.remove('profile-card__nav-item--active')
  btnWeekly.classList.remove('profile-card__nav-item--active')
  subgrid.innerHTML = ''

  fetch('./data.json')
  .then(res => res.json())
  .then(activities => {
    activities.forEach(activity => {
      const template = `
        <div class="card-activity card-activity--${activity.title.toLowerCase().trim().replace(/ /g, "")}">
          <div class="card-activity__bg card-activity__bg--${activity.title.toLowerCase().trim().replace(/ /g, "")}"></div>
          <div class="card-activity__wrapper">
            <div class="card-activity__name-elipse">
              <div class="card-activity__name">${activity.title}</div>
              <button class="card-activity__elipse">
                <img src="./images/icon-ellipsis.svg" aria-hidden="true" />
              </button>
            </div>
            <div class="card-activity__current-previous">
              <div class="card-activity__current-hours">${activity.timeframes.monthly.current}hrs</div>
              <div class="card-activity__previous-hours">Last Day - ${activity.timeframes.monthly.previous}hrs</div>
            </div>
          </div>
        </div>
      `

        subgrid.innerHTML += template
    });
  })
})