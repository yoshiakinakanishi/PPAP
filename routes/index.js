const routes = module.exports = require('next-routes')()

// routes.add('pagesの呼び出したいファイル名', 'ユーザーが使用するアプリケーション上のURI');

// promotion
routes.add('promotionRegist', '/promotion/regist');
routes.add('promotionEdit', '/promotion/edit');

// schedule
routes.add('scheduleRegist', '/schedule/regist');
routes.add('scheduleEdit', '/schedule/edit');
routes.add('scheduleConfirm', '/schedule/confirm');

// segment
routes.add('segmentRegist', '/segment/regist');
routes.add('segmentEdit', '/segment/edit');
routes.add('segmentConfirm', '/segment/confirm');
