'use strict';

let  mongoose = require('mongoose')
//let Huamn = mongoose.model('huamn')
let _ = require('lodash')
let core = require('../../libs/core')
let backPath = 'huamn';




//列表
exports.list = function(req, res) {


            res.render('server/human/list.html', {
                //title: '列表',
                Menu: 'list'
            });



};
