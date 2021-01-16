<?php
    header('content-type:text/html;charset=utf-8');
    $mysql_config= array(
        'host'=>'localhost:3306',
        'db_user'=>'root',
        'db_pass'=>123456,
        'db'=>'mi.com'
    );
    // 登录(连接)数据库
    $mysqli=@new mysqli($mysql_config['host'],$mysql_config['db_user'],$mysql_config['db_pass']);
    // var_dump($mysqli);
    // 判断连接是否有错误
    if($mysqli->connect_errno){
        die('连接错误'.$mysqli->connect_errno);
    }
    // 设置查询字符集
    $mysqli->query('set names utf-8');
    // 选择数据库
    $select_db=$mysqli->select_db($mysql_config['db']);
    if(!$select_db){
        die('数据库选择错误'.$mysqli->error);
    }