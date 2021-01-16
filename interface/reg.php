<?php
    include ('./library/conn.php');
    $username = $_REQUEST['username'];
    $password = $_REQUEST['password'];
    $email = $_REQUEST['email'];
    $address = $_REQUEST['address'];
    $phone = $_REQUEST['phone'];
    $sex = $_REQUEST['sex'];
/*$mysql_config= array(
        'host'=>'localhost:3306',
        'db_user'=>'root',
        'db_pass'=>123456,
        'db'=>'root'
    );
    $mysqli=@new mysqli($mysql_config['host'],$mysql_config['db_user'],$mysql_config['db_pass']);;*/
    // 通过手机号查找数据库
    $sql = "select * from username where phone='$phone'";

    // 执行查询操作
    $result= $mysqli->query($sql);

    // 结果集中的 num_rows 属性是查询数据的结果个数
    // 通过判断 num_rows 可以知道是否查询到数据
    if($result->num_rows>0){
        echo '<script>alert("用户已注册");</script>';
        echo '<script>location.href="../src/html/login.html"</script>';
        $mysqli->close(); // 关闭连接
        die();  // 终止代码往下执行
    }

    // 用户名不存在的情况需要将数据写入数据库中
    $insertSql = "insert into username (username,password,email,address,phone,sex) values ('$phone')";

    // 执行添加操作 会返回一个布尔值
    $res = $mysqli->query($insertSql);
    $mysqli->close();

    if($res){
        echo '<script>alert("注册成功");</script>';
        // echo '<script>location.href="../src/html/login.html"</script>';
    }