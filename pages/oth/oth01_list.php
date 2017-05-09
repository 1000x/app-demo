<ion-view view-title="そのた" ng-controller="othOth01Ctrl" ng-init="init()">
    <ion-content scroll="false">
    
    		<div class="list-block" style="margin-top: 10px;">
				<ul>
					<li>
						<a href="" class="item-link item-content">
							<div class="item-inner">
								<div class="item-title">
								    <i class="ui-icon-other-personal">&#xe6a0;</i>ccccccccccc@163.com
								</div>
							</div>
						</a>
					</li>
				</ul>
			</div>
		
    
        <div class="card">
            <div class="list list-inset">
                <div class="item pt-5 pb-5">
                    <img src="img/common/logo.png" />
                </div>
                <label class="item item-input">
                    <i class="green-icon">&#xe629;</i>
                    <input type="text" placeholder="アカウント" ng-model="user.userId" maxlength="50">
                </label>
                <label class="item item-input">
                    <i class="green-icon">&#xe622;</i>
                    <input type="text" placeholder="パスワード" ng-model="user.password" maxlength="50">
                </label>
            </div>
        </div>
        <div class="inner">
            <button class="button button-block button-calm mb-20" ng-click="login()" ng-disabled="!user.userId || !user.password">ログイン</button>
            <a class="button button-clear button-block button-positive fsize-14" href="#/coa02_register_step1">アカウントの新規登録</a>
            <a class="button button-clear button-positive fsize-14" href="#">パスワードを忘れた方</a>
        </div>
    </ion-content>
</ion-view>
