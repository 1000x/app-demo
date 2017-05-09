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
<link rel="stylesheet" href="<?php echo base_url() ?>ui/webapp/css/hom/hom.css">
<link rel="stylesheet" href="<?php echo base_url() ?>ui/webapp/icons/iconfont.css">
<script src="<?php echo base_url() ?>plugs/l7/assets/js/jquery-2.2.1.min.js"></script>
</head>
<body>
	<!-- page 容器 -->
	<div class="page page-current" id='coa03_page04'>
		<header class="bar bar-nav">
			<a class="button button-link button-nav pull-left back" href="<?php echo site_url('/');?>"> <span class="icon icon-left"></span> ホームページ</a>
			<h1 class="title">完了</h1>
		</header>
		<div class="content">
			<div class="weui_msg">
				<div class="weui_icon_area">
					<div class="weui_icon_area"><i class="weui_icon_success weui_icon_msg"></i></div>
				</div>
				<div class="weui_text_area">
					<h2 class="weui_msg_title">アカウント申請が完了しました</h2>
					<p class="weui_msg_desc">アカウントと初期パスワードが発行致します。申請メールにお知らせします。</p>
					<p class="weui_msg_desc">※お知らせまでに２-３日かかる場合があります。</p>
				</div>
				<div class="weui_extra_area">
					<a href="<?php echo site_url('/');?>" class="external">ご利用頂き、ありがとうございます</a>
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
