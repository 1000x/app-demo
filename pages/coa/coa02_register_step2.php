<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>ITナビ支援システム</title>
<meta name="description" content="ITナビ">
<meta name="author" content="ITナビ">
<meta name="viewport" content="width=device-width, initial-scale=1">

<link rel="alternate icon" type="image/png" href="<?php echo  base_url() ?>ui/webapp/images/z99/logo/favicon.png">
<link rel="apple-touch-icon-precomposed" href="<?php echo base_url() ?>ui/webapp/images/z99/logo/logo.png">
<link rel="stylesheet" href="<?php echo base_url() ?>plugs/l7/dist/css/light7.min.css">
<link rel="stylesheet" href="<?php echo base_url() ?>plugs/weui/weui.min.css">
<link rel="stylesheet" href="<?php echo base_url() ?>ui/webapp/css/coa/coa.css">
<link rel="stylesheet" href="<?php echo base_url() ?>ui/webapp/icons/iconfont.css">
<script src="<?php echo base_url() ?>plugs/l7/assets/js/jquery-2.2.1.min.js"></script>
</head>
<body>
	<!-- page 容器 -->
	<div class="page page-current" id='coa03_page01'>
		<header class="bar bar-nav">
			<a class="button button-link button-nav pull-left back" href="<?php echo site_url('coa02/');?>"> <span class="icon icon-left"></span> Back</a>
			<h1 class="title">アカウント作成</h1>
		</header>
		<div class="content">
			<div class="weui_msg">
				<div class="weui_icon_area">
					<i class="weui_icon_msg ui-icons-mid color-orange">&#xe70f;</i>
				</div>
				<div class="weui_text_area">
					<p class="weui_msg_desc">名刺をアップロードしてください。</p>
				</div>
				<div class="weui_text_area">
					<div class="weui_cells weui_cells_form">
						<div class="weui_cell">
							<div class="weui_cell_bd weui_cell_primary">
								<input id="coa02_10001fle" type="file" name="userfile">
							</div>
						</div>
					</div>
				</div>
				<div class="weui_opr_area">
					<p class="weui_btn_area">
						<a href="javascript:0;" class="weui_btn weui_btn_primary external" id="coa02_10001btn">送信する</a>
					</p>
				</div>
				<div class="weui_extra_area">
					<a href="<?php echo site_url('coa01/'); ?>" class="external">サインイン</a>
				</div>
			</div>
		</div>
	</div>

<!-- foot -->
<?php include VIEWPATH."/webapp/coa/coa_foot.php"; ?>
			
<!-- URL -->
<?php include VIEWPATH."/webapp/coa/coa_common_url.php"; ?>

</body>
</html>
