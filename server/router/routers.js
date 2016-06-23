/**
 * Created by DEV on 2016/6/17.
 */
var router = require('koa-router')({prefix: '/api'}),
    log = console.log;
    PersonService = require('../model/Person/api')();

router.post('/add', function *(next) {
       /* JSON.stringify(this.request.body);*/
        var data = this.request.body;
        PersonService.add(data);
        yield next;
        this.body ={}
    }
);
router.post('/update', function *(next) {
        /* JSON.stringify(this.request.body);*/
        var data = this.request.body;
        PersonService.update(data);
        yield next;
        this.body ={}
    }
);

router.post('/delete', function *(next) {
        /* JSON.stringify(this.request.body);*/
        var data = this.request.body;
        PersonService.delete(data);
        yield next;
        this.body ={}
    }
);

router.post('/findOne', function *(next) {
        /* JSON.stringify(this.request.body);*/
        var data = this.request.body;
        PersonService.findOne(data);
        yield next;
        this.body ={}
    }
);


module.exports = router;
