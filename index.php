<?php

$view = json_encode('hello');
$datas = json_encode(['greet' => 'from PHP']);

require 'layout.phtml';
