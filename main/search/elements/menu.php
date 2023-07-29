<?php

$lang = isset($_COOKIE['language']) ? $_COOKIE['language'] : '';
$region = isset($_COOKIE['region']) ? $_COOKIE['region'] : '';
$safesearch = isset($_COOKIE['safesearch']) ? $_COOKIE['safesearch'] : '';
$theme = isset($_COOKIE['theme']) ? $_COOKIE['theme'] : '';




?>
<div class="set-men-con">
Menu
<br>
<br>
    <div>
        <label for="language">Seitensprache</label>
            <select name="language" id="language">
                <option value="en">English</option>
                <option value="de">Deutsch</option>
                <option value="fr">Französisch</option>
            </select>
    </div>
    <br>
    <div>
    <label for="region">Suchregion</label>
        <select name="region" id="region">
            <option value="">Alle Suchregionen</option>
            <option value="es-AR">Argentina</option>
            <option value="en-AU">Australia</option>        
            <option value="de-AT">Austria</option>
            <option value="nl-BE">Belgium(Dutch)</option>
            <option value="fr-BE">Belgium(French)</option>
            <option value="pt-BR">Brazil</option>
            <option value="en-CA">Canada(English)</option>
            <option value="fr-CA">Canada(French)</option>
            <option value="es-CL">Chile</option>
            <option value="zh-CN">China</option>
            <option value="da-DK">Denmark</option>
            <option value="fi-FI">Finland</option>
            <option value="fr-FR">France</option>
            <option value="de-DE">Germany</option>
            <option value="zh-HK">Hong Kong</option>
            <option value="en-IN">India</option>
            <option value="en-ID">Indonesia</option>
            <option value="it-IT">Italy</option>
            <option value="ja-JP">Japan</option>
            <option value="ko-KR">Korea</option>
            <option value="en-MY">Malaysia</option>
            <option value="es-MX">Mexico</option>
            <option value="nl-NL">Netherlands</option>
            <option value="en-NZ">New Zealand</option>
            <option value="no-NO">Norway</option>
            <option value="pl-PL">Poland</option>
            <option value="en-PH">Philippines</option>
            <option value="ru-RU">Russia</option>
            <option value="en-ZA">South Africa</option>
            <option value="es-ES">Spain</option>
            <option value="sv-SE">Sweden</option>
            <option value="fr-CH">Switerland(French)</option>
            <option value="de-CH">Switzerland(German)</option>
            <option value="zh-TW">Taiwan</option>
            <option value="tr-TR">Turkey</option>
            <option value="en-GB">English</option>
            <option value="en-US">United States(English)</option>
            <option value="es-US">United States(Spanish)</option>
        </select>
    </div>
    <br>
    <div>
    <label for="safesearch">SafeSearch</label>
            <select name="safesearch" id="safesearch">
                <option value="Off">Off</option>
                <option value="Moderate">Moderate</option>
                <option value="Strict">Strict</option>
            </select>
    </div>
    <br>
    <div>
    <label for="theme">Darkmode</label>
            <select name="theme" id="theme">
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>
    </div>
    <br>
    <button id="saveBtn">Save</button>
    <button id="resetBtn">Reset</button>
    <br>
    <br>
</div>
