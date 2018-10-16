<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Form receiver</title>
</head>

<body>
    <h1>Received form</h1>

<?php
    $referer = $_SERVER["HTTP_REFERER"];
    $method = $_SERVER["REQUEST_METHOD"];

    if( isset($referer) ) {
?>
    <h2>from: <b><?php echo $referer; ?></b></h2>
<?php
    }
?>
    <h2>by method: <b><?php echo $method; ?></b></h2>
<?php
    if( $method == "GET" ) {
        echo "<h3>GET variables</h3>";
        echo "<ul class='get'>";
        
        foreach( $_GET as $name => $value ) {
            echo "<li>";
            echo $name;
            echo ": ";
            
            if( is_array($value) ) {
                echo "<ul>";
                foreach( $value as $vnam ) {
                    echo "<li><b>".$vnam."</b></li>";
                }
                echo "</ul>";
            } else {
                echo "<b>{$value}</b>";    
            }           
            
            echo "</li>\n";
        }
        echo "</ul>\n";
    } else if( $method == "POST") {
        echo "<h3>POST variables</h3>";
        echo "<ul class='post'>";
        
        foreach( $_POST as $name => $value ) {
            echo "<li>";
            echo $name;
            echo ": ";
            if( is_array($value) ) {
                echo "<ul>";
                foreach( $value as $vnam ) {
                    echo "<li><b>".$vnam."</b></li>";
                }
                echo "</ul>";
            } else {
                echo "<b>{$value}</b>";    
            }           
            
            echo "</li>\n";
        }
        echo "</ul>\n";
    }
    
    if( isset($_FILES) && count($_FILES) > 0 ) {
        echo "<h3>File variables</h3>";
        echo "<ol>";
        
        foreach( $_FILES as $varname => $file ) {
            echo "<li>field name: ";
            echo "<b>".$varname."</b>";
            echo "<ul>";
            
            foreach( $file as $var => $val ) {
                echo "<li>".$var.": <b>".$val."</b></li>";
            }
            echo "</ul></li>";
        }
        echo "</ol>";
    }    
?>
<hr/>

</body>
</html>