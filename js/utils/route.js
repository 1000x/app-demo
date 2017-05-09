/**
 * app.routes
 */
app.constant('ROUTE', {
    states: [
        // ログイン画面
        { stateId: 'coa01', url: '/coa01', cache: false, templateUrl: 'pages/coa/coa01.html' },
        // home
        { stateId: 'hom01', url: '/hom01', cache: false, templateUrl: 'pages/hom/hom01.html' },
        // アカウント作成→ステップ１
        { stateId: 'coa02_register_step1', url: '/coa02_register_step1', cache: false, templateUrl: 'pages/coa/coa02_register_step1.html' },
        // アカウント作成→ステップ２
        { stateId: 'coa02_register_step2', url: '/coa02_register_step2', cache: false, templateUrl: 'pages/coa/coa02_register_step2.html' },
        // アカウント作成→ステップ３
        { stateId: 'coa02_register_step3', url: '/coa02_register_step3', cache: false, templateUrl: 'pages/coa/coa02_register_step3.html' },
        // そのた
        { stateId: 'oth01', url: '/oth01', cache: false, templateUrl: 'pages/oth/oth01_list.html' },

        ]
});