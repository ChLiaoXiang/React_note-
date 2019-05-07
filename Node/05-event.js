// 引入事件注入模块
const evetnEmite = require('events');

class eventEmiter extends evetnEmite{
    constructor(opt){
        super(opt);
    }
}

const Myevent = new eventEmiter();

Myevent.on('操我', (a,b) => {
    console.log('操我 ' + a + ',' + b);
})

Myevent.emit('操我', '小姐姐','用力点');

