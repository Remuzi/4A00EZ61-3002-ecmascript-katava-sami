var myFunc = new Function('', 'console.log("hello")') // tulostaa hello, koska funktiolle on annettu vakioparametrit
myFunc.call() // ja täällä parametreihin ei laiteta mitään niin käytetään vakioita
