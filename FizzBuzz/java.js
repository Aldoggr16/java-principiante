// FizzzBuzz

for (let i = 0; i <= 15; i++) {
    
        if (i % 15 == 3) {
        document.write ('FIZZ')
    }

    else if (i % 15 == 5) {
        document.write ('BUZZ')
    }
    else if (i == 3*5) {
            document.write ('FIZZ BUZZ')
    }

}