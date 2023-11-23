let span = document.getElementById('span')
let buttonac = document.getElementById('buttonac')
let boluv = document.getElementById(`button/`)
let buttonx = document.getElementById('buttonx')
let minus = document.getElementById('button-')
let plus = document.getElementById('button+')
let button_7 = document.getElementById('button-7')
let button_8 = document.getElementById('button-8')
let button_9 = document.getElementById('button-9')
let button_4 = document.getElementById('button-4')
let button_5 = document.getElementById('button-5')
let button_6 = document.getElementById('button-6')
let button_1 = document.getElementById('button-1')
let button_2 = document.getElementById('button-2')
let button_3 = document.getElementById('button-3')
let foiz = document.getElementById('button%')
let button_0 = document.getElementById('button-0')
let teng = document.getElementById('button_teng')



let a = []
let symbol = []
let b = []

// a.push(text.innerText)
//     console.log(a)

button_0.addEventListener('click', () => {
    text.innerText = a.join( ' ')
    a.push(0)
})

button_1.addEventListener('click', () => {
    text.innerText = a.join( ' ')
    a.push(1)
})
button_2.addEventListener('click', () => {
    text.innerText = a.join( ' ')
    a.push(2)
})
button_3.addEventListener('click', () => {
    text.innerText = a.join( ' ')
    a.push(3)
})
button_4.addEventListener('click', () => {
    text.innerText = a.join( ' ')
    a.push(4)
})
button_5.addEventListener('click', () => {
    text.innerText = a.join( ' ')
    a.push(5)
})
button_6.addEventListener('click', () => {
    text.innerText = a.join( ' ')
    a.push(6)
})
button_7.addEventListener('click', () => {
    text.innerText = a.join( ' ')
    a.push(7)
})
button_8.addEventListener('click', () => {
    text.innerText = a.join( ' ')
    a.push(8)
})
button_9.addEventListener('click', () => {
    text.innerText = a.join( ' ')
    a.push(9)
})

plus.addEventListener('click', () => {
    button_0.addEventListener('click', () => {
        text.innerText = b.join( ' ')
        b.push(0)
    })
    
    button_1.addEventListener('click', () => {
        text.innerText = b.join( ' ')
        b.push(1)
    })
    button_2.addEventListener('click', () => {
        text.innerText = b.join( ' ')
        b.push(2)
    })
    button_3.addEventListener('click', () => {
        text.innerText = b.join( ' ')
        b.push(3)
    })
    button_4.addEventListener('click', () => {
        text.innerText = b.join( ' ')
        b.push(4)
    })
    button_5.addEventListener('click', () => {
        text.innerText = b.join( ' ')
        b.push(5)
    })
    button_6.addEventListener('click', () => {
        text.innerText = b.join( ' ')
        b.push(6)
    })
    button_7.addEventListener('click', () => {
        text.innerText = b.join( ' ')
        b.push(7)
    })
    button_8.addEventListener('click', () => {
        text.innerText = b.join( ' ')
        b.push(8)
    })
    button_9.addEventListener('click', () => {
        text.innerText = b.join( ' ')
        b.push(9)
    })
    teng.addEventListener('click', () => {
        let arr1 = a.reverse() 
        let arr2 = arr1.splice( b.length, a.length).reverse()
        let f = +arr2.join('')
        let g = +b.join('')
        let num1 = f + g
         console.log(f)
         console.log(g)
         console.log(num1)
         text.innerText = num1
      })
   
})

minus.addEventListener('click', () => {
    button_0.addEventListener('click', () => {
        text.innerText = b.join( ' ')
        b.push(0)
    })
    
    button_1.addEventListener('click', () => {
        text.innerText = b.join( ' ')
        b.push(1)
    })
    button_2.addEventListener('click', () => {
        text.innerText = b.join( ' ')
        b.push(2)
    })
    button_3.addEventListener('click', () => {
        text.innerText = b.join( ' ')
        b.push(3)
    })
    button_4.addEventListener('click', () => {
        text.innerText = b.join( ' ')
        b.push(4)
    })
    button_5.addEventListener('click', () => {
        text.innerText = b.join( ' ')
        b.push(5)
    })
    button_6.addEventListener('click', () => {
        text.innerText = b.join( ' ')
        b.push(6)
    })
    button_7.addEventListener('click', () => {
        text.innerText = b.join( ' ')
        b.push(7)
    })
    button_8.addEventListener('click', () => {
        text.innerText = b.join( ' ')
        b.push(8)
    })
    button_9.addEventListener('click', () => {
        text.innerText = b.join( ' ')
        b.push(9)
    })
    teng.addEventListener('click', () => {
        let arr1 = a.reverse() 
        let arr2 = arr1.splice( b.length, a.length).reverse()
        let f = +arr2.join('')
        let g = +b.join('')
        let num1 = f - g
         console.log(f)
         console.log(g)
         console.log(num1)
         text.innerText = num1
      })
   
})

buttonx.addEventListener('click', () => {
    button_0.addEventListener('click', () => {
        text.innerText = b.join( ' ')
        b.push(0)
    })
    
    button_1.addEventListener('click', () => {
        text.innerText = b.join( ' ')
        b.push(1)
    })
    button_2.addEventListener('click', () => {
        text.innerText = b.join( ' ')
        b.push(2)
    })
    button_3.addEventListener('click', () => {
        text.innerText = b.join( ' ')
        b.push(3)
    })
    button_4.addEventListener('click', () => {
        text.innerText = b.join( ' ')
        b.push(4)
    })
    button_5.addEventListener('click', () => {
        text.innerText = b.join( ' ')
        b.push(5)
    })
    button_6.addEventListener('click', () => {
        text.innerText = b.join( ' ')
        b.push(6)
    })
    button_7.addEventListener('click', () => {
        text.innerText = b.join( ' ')
        b.push(7)
    })
    button_8.addEventListener('click', () => {
        text.innerText = b.join( ' ')
        b.push(8)
    })
    button_9.addEventListener('click', () => {
        text.innerText = b.join( ' ')
        b.push(9)
    })
    teng.addEventListener('click', () => {
        let arr1 = a.reverse() 
        let arr2 = arr1.splice( b.length, a.length).reverse()
        let f = +arr2.join('')
        let g = +b.join('')
        let num1 = f * g
         console.log(f)
         console.log(g)
         console.log(num1)
         text.innerText = num1
      })
   
})

boluv.addEventListener('click', () => {
    button_0.addEventListener('click', () => {
        text.innerText = b.join( '')
        b.push(0)
    })
    
    button_1.addEventListener('click', () => {
        text.innerText = b.join( '')
        b.push(1)
    })
    button_2.addEventListener('click', () => {
        text.innerText = b.join( '')
        b.push(2)
    })
    button_3.addEventListener('click', () => {
        text.innerText = b.join( '')
        b.push(3)
    })
    button_4.addEventListener('click', () => {
        text.innerText = b.join( '')
        b.push(4)
    })
    button_5.addEventListener('click', () => {
        text.innerText = b.join( '')
        b.push(5)
    })
    button_6.addEventListener('click', () => {
        text.innerText = b.join( '')
        b.push(6)
    })
    button_7.addEventListener('click', () => {
        text.innerText = b.join( '')
        b.push(7)
    })
    button_8.addEventListener('click', () => {
        text.innerText = b.join( '')
        b.push(8)
    })
    button_9.addEventListener('click', () => {
        text.innerText = b.join( '')
        b.push(9)
    })
    teng.addEventListener('click', () => {
        let arr1 = a.reverse() 
        let arr2 = arr1.splice( b.length, a.length).reverse()
        let f = +arr2.join('')
        let g = +b.join('')
        let num1 = f / g
         console.log(f)
         console.log(g)
         console.log(num1)
         text.innerText = num1
      })
   
})

foiz.addEventListener('click', () => {
    button_0.addEventListener('click', () => {
        text.innerText = b.join( '')
        b.push(0)
    })
    
    button_1.addEventListener('click', () => {
        text.innerText = b.join( '')
        b.push(1)
    })
    button_2.addEventListener('click', () => {
        text.innerText = b.join( '')
        b.push(2)
    })
    button_3.addEventListener('click', () => {
        text.innerText = b.join( '')
        b.push(3)
    })
    button_4.addEventListener('click', () => {
        text.innerText = b.join( '')
        b.push(4)
    })
    button_5.addEventListener('click', () => {
        text.innerText = b.join( '')
        b.push(5)
    })
    button_6.addEventListener('click', () => {
        text.innerText = b.join( '')
        b.push(6)
    })
    button_7.addEventListener('click', () => {
        text.innerText = b.join( '')
        b.push(7)
    })
    button_8.addEventListener('click', () => {
        text.innerText = b.join( '')
        b.push(8)
    })
    button_9.addEventListener('click', () => {
        text.innerText = b.join( '')
        b.push(9)
    })
    teng.addEventListener('click', () => {
        let arr1 = a.reverse() 
        let arr2 = arr1.splice( b.length, a.length).reverse()
        let f = +arr2.join('')
        let g = +b.join('')
        let num1 = f % g
         console.log(f)
         console.log(g)
         console.log(num1)
         text.innerText = num1
      })
   
})

buttonac.addEventListener('click', () => {
    location.reload("http://127.0.0.1:5503/index.html")
})


