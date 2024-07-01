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
document.getElementById('btn-calculator-ractangle').addEventListener('click',function(){
    const widthElement = document.getElementById('width')
    const widthString = widthElement.value
    const width = parseFloat(widthString)
    const lengthElement = document.getElementById('length')
    const lengthString = lengthElement.value
    const length = parseFloat(lengthString)
    const area = length*width
    const areaspan = document.getElementById('rectangle-area') 
    areaspan.innerText = area
    widthElement.value = ''
    lengthElement.value = ''
})
