document.getElementById('btn-calculator').addEventListener('click',function(){
    const baseElement = document.getElementById('base')
    const baseString = baseElement.value
    const base = parseFloat(baseString)
    // console.log(base)
    const heightElement = document.getElementById('height')
    const heightString = heightElement.value
    const height = parseFloat(heightString)
    if(isNaN(base) || isNaN(height)){
        alert('Please insert nmber')
    }
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
    if(isNaN(width) || isNaN(length)){
        alert('Please insert nmber')
    }
    const area = length*width
    const areaspan = document.getElementById('rectangle-area') 
    areaspan.innerText = area
 
    widthElement.value = ''
    lengthElement.value = ''
})
document.getElementById('btn-calculator-paralelogram').addEventListener('click',function(){
    const paralelogramWidthElement = document.getElementById('base-paralelogram')
    const paralelogramWidthString = paralelogramWidthElement.value
    const paralelogramWidth = parseFloat(paralelogramWidthString)
    const paralelogramHeightElement = document.getElementById('height-paralelogram')
    const paralelogramHeightString = paralelogramHeightElement.value
    const paralelogramHeight = parseFloat(paralelogramHeightString)
    if(isNaN(paralelogramWidth) || isNaN(paralelogramHeight)){
        alert('Please insert nmber')
    }
    const paralelogramArea = paralelogramHeight*paralelogramWidth
    const paralelogramAreaSpan = document.getElementById('paralelogram-area')
    paralelogramAreaSpan.innerText = paralelogramArea
    paralelogramHeightElement.value = ''
    paralelogramWidthElement.value = ''
})
