<?php

//autosuggest.php get called in script_a.js
// $query = '?q='.urlencode($_REQUEST['query']);
$query2 = ($_REQUEST['query']);
// $endpoint = 'https://api.bing.microsoft.com/v7.0/suggestions';
// $url = $endpoint.$query;
// $key = "";
// $curl = curl_init();
//     curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
//     curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
//     curl_setopt($curl, CURLOPT_URL, $url);
//     curl_setopt($curl, CURLOPT_HTTPHEADER, array(
//         "Ocp-Apim-Subscription-Key: $key\r\n",
//         'method: GET',
//         'Content-Type: application/json',
//      ));
//     $output = curl_exec($curl);
//     curl_close($curl);
//echo $result;
$output = file_get_contents('../jsonfiles/autoDEUTSCHLAND.json');
$json = json_decode($output, true);
//file_put_contents('autoDEUTSCHLAND.json', $output);
if(!empty($json['suggestionGroups'][0]['searchSuggestions'][0]['displayText'])){
    echo('<ul class ="main-ul">');
    for ($x = 0; $x < count($json['suggestionGroups'][0]['searchSuggestions']); $x++) {
        $obj = $json['suggestionGroups'][0]['searchSuggestions'][$x]['displayText'];
        $obj2 = urlencode($json['suggestionGroups'][0]['searchSuggestions'][$x]['displayText']);
        $query2 = implode('|',explode('#',preg_quote($query2)));
        $obj = preg_replace("/($query2)/i","<b>$0</b>",$obj);
        echo('<li id="sb-'.$x.'" class="display_box sb-link sb-content" onclick="location.href=\'search?q='.$obj2.'\'"><img class="default-o" src="src/public/icon-sea-bl.png"><img class="dark-o" src="src/public/icon-sea-w.png"><a class="an-link"><span>'.$obj.'</span></a></li>');
      }
    echo('</ul>');
};
?>
