<?php

$query2 = ($_REQUEST['query']);
if(!empty($json['suggestionGroups'][0]['searchSuggestions'][0]['displayText'])){
    echo('<ul class ="main-ul">');
    for ($x = 0; $x < count($json['suggestionGroups'][0]['searchSuggestions']); $x++) {
        $obj = $json['suggestionGroups'][0]['searchSuggestions'][$x]['displayText'];
        $obj2 = urlencode($json['suggestionGroups'][0]['searchSuggestions'][$x]['displayText']);
        $query2 = implode('|',explode('#',preg_quote($query2)));
        $obj = preg_replace("/($query2)/i","<b>$0</b>",$obj);
        echo('<li id="sb-'.$x.'" class="display_box sb-link sb-content" onclick="location.href=\'videos?q='.$obj2.'\'"><img class="default-o" src="src/public/icon-sea-bl.png"><img class="dark-o" src="src/public/icon-sea-w.png"><a class="an-link"><span>'.$obj.'</span></a></li>');
      }
    echo('</ul>');
};
?>
