document.getElementById('btn-calculator').addEventListener('click',function(){
    const baseElement = document.getElementById('base')
    const baseString = baseElement.value
    const base = parseFloat(baseString)
    // console.log(base)
    const heightElement = document.getElementById('height')
    const heightString = heightElement.value
    const height = parseFloat(heightString)
    const area = 0.5*base*height
    console.log(area)
    const areaspan = document.getElementById('tringle-area')
    areaspan.innerText = area
    heightElement.value = ''
    baseElement.value = ''
})