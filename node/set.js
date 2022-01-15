// não aceita repetição e não é indexado

const times = new Set()

times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corintians')
times.add('Flamengo')
times.add('Vasco')

console.log(times)