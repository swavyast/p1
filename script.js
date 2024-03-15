    //alert('Loading')
    let bOneSpan = document.querySelector('.basketOne span')
    let bTwoSpan = document.querySelector('.basketTwo span')
    const totalApples = 20
    let bTwoSpanCount = 0
    let bOneSpanCount = totalApples - bTwoSpanCount
    bTwoSpan.innerHTML = bTwoSpanCount
    bOneSpan.innerHTML = bOneSpanCount
    const leftButton = document.getElementById('btn-1')
    const rightButton = document.getElementById('btn-2')
    leftButton.addEventListener('click', () => {
        if(bTwoSpanCount>0){
            bOneSpanCount++
            bOneSpan.innerHTML = bOneSpanCount
            bTwoSpanCount--
            bTwoSpan.innerHTML = bTwoSpanCount
        }
    })
    rightButton.addEventListener('click', () => {
        if(bOneSpanCount>0){
            bOneSpanCount--
            bOneSpan.innerHTML = bOneSpanCount
            bTwoSpanCount++
            bTwoSpan.innerHTML = bTwoSpanCount
        }
    })