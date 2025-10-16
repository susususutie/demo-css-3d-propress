import './3d.css'

function main() {
  const app = document.querySelector('#app')
  app.innerHTML = `
  <div class="cube-container">
    <div class="cube">
      <div class="cube-face front">前</div>
      <div class="cube-face back">后</div>
      <div class="cube-face left">左</div>
      <div class="cube-face right">右</div>
      <div class="cube-face top">上</div>
      <div class="cube-face bottom">B</div>
    </div>
  </div>
  `
}

main()
