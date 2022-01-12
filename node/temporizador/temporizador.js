const schedule = require('node-schedule')

//const tarefa1 = shedule.scheduleJob('5*12**2')// vai executar 5 segundas as 12 horas em uma terça feira

const tarefa1 = schedule.scheduleJob('*/5 * 22 * *2',function(){
    console.log('Executando tarefa 1', new Date().getSeconds)
})// vai executar 5 segundas as 12 horas em uma terça feira


setTimeout(function(){
    tarefa1.cancel()
    console.log('Cancelando a tarefa 1')
},20000)


const regra = new schedule.RecurrenceRule()
regra.dayOfWeek  = [new schedule.Range(1,5)]
regra.hour = 12
regra.second = 30 


const tarefa2 = schedule.scheduleJob(regra,function(){
    console.log('Executando Tarefa 2', new Date().getSeconds())
})