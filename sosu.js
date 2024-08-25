const id = /\/(.[0-9]+)\#(.[A-Za-z]+)\/(.[0-9]+)/gi.exec(window.location.href)[1]

let int = null
int = setInterval(() => {
  const buttons = document.querySelector("div.beatmapset-header__buttons")
  if (buttons == null)
    return

  const sosu = document.createElement("a")
  sosu.className = "btn-osu-big btn-osu-big--beatmapset-header "
  sosu.href = `sosu://${id}`
  sosu.innerHTML = `
  <span class="btn-osu-big__content">
    <span class="btn-osu-big__left">
      <span class="btn-osu-big__text-top">sosu!direct</span>
    </span>
    <span class="btn-osu-big__icon">
      <span class="fa fa-fw">
        <span class="fas fa-wheelchair">
        </span>
      </span>
    </span>
  </span>
  `

  buttons.append(sosu)
  clearInterval(int)
}, 100);
