    <div class="nav-header">
        <div class="mo-main-s">
            <div class="mo-searchbar">    
                <form action="search">
                    <div class="mo-nav-in">
                        <div class="mo-back"><img class="mo-b-ch" src="src/public/icon-back-c-bl.png"></div><input id="mo-w-search" class="mo-nav-input" type="text" name="q" autocomplete=off placeholder="Search the web..." spellcheck="false"><div id="mo-del-in" class="mo-txtdel"><span>×</span></div></input>
                    </div>
                </form>
            </div>
            <div class="mo-in-sb" id="mo-in-sb"></div>
        </div>
        <div class="nav-up">
            <div class="nav-logo">
                <a href="https://qoolar.org"><img class="default-o" src="src/public/logo-sm-bl.png"><img class="dark-o" src="src/public/logo-sm-w.png"></a>
            </div>
            <div class="m-searchbar-h">    
            <form action="search">
            <div class="nav-in">
                <input id="w-search" class="nav-input" type="text" name="q" autocomplete=off placeholder="Search the web..." spellcheck="false"><div id="del-in" class="txtdel"><span>×</span></div>
                <div class="nav-search-btn"><button class="sea-btn"><?php if($tC == 'dark'){echo ('<img class="nl-se" src="src/public/icon-sea-w.png">');}else{echo ('<img class="nl-se" src="src/public/icon-sea-bl.png">');};?></button></div></input>
            </div>
            </form>
                <div class="in-sb-x" id="in-sb-x"></div>
            </div>
            <div class="nav-counter">
                <button id="counter" class="icon-battery"><span class="counter-span"><?php if(!empty($_SESSION['qcounter'])){echo $_SESSION['qcounter'];}else{echo $countersum;};?></span><span><?php if($tC == 'dark'){echo ('<img class="icon-sl-m-b bl-o" src="src/public/icon-battery-w-sl.png">');}else{echo ('<img class="icon-sl-m-b bl-o" src="src/public/icon-battery-bl-sl.png">');};?><?php if($tC == 'dark'){echo ('<img class="icon-sl-m-b-g bl-d" src="src/public/battery-loading-w.gif">');}else{echo ('<img class="icon-sl-m-b-g bl-d" src="src/public/battery-loading.gif">');};?></span></button>
                <div class="counter-menu">
                    <div id="counterclose" class="counter-close">×</div>
                    <div class="cm-txt"><span data-lang="mtw">Make the world</span> <span class="cm-txt-col">Qoolar!</span></div>
                    <div class="cm-b-t"><span data-lang="mtw3">This counter shows you how much climate-neutral electricity you will produce through your search queries.</span></div>
                    <div class="cm-u-t"><span data-lang="mtw4">You can make a difference with your search. To save your current status, you can log in with your email address. </span><a class="cm-c-link" href="https://blog.qoolar.org/counter"><span data-lang="mtw5">Click here</span></a><span data-lang="mtw6">to learn more about this counter!</span></div>
                    <div class="cm-log"><?php if(!isset($_SESSION['email'])){echo('<button class="cm-btn-d" id="log-btn"><span>Login</span></button>');}else{echo('<button class="cm-btn-d" id="logout-btn"><span>Logout</span></button>');}; ?></div>
                </div>
            </div>
            <div class="nav-ex-d">
            <div class="ex-ch"><button><img class="icon-ex" src="src/public/icon-chrome-48.png"><span data-lang="aqtc">Add Qoolar to Chrome!</span></button></div><div class="ex-ed"><button><img class="icon-ex" src="src/public/icon-edge-48.png"><span data-lang="aqte">Add Qoolar to Edge!</span></button></div><div class="ex-fr"><button><img class="icon-ex" src="src/public/icon-firefox-48.png"><span data-lang="aqtf">Add Qoolar to Firefox!</span></button></div>
            </div>
            <div class="nav-sub-l">
            <div class="nav-menu">
            <button id="menubtn" class="icon-menu"><?php if($tC == 'dark'){echo ('<img class="icon-sl-m-men m-sl" src="src/public/icon-menu-w.png">');}else{echo ('<img class="icon-sl-m-men m-sl" src="src/public/icon-menu-bl.png">');};?></button>
                <div id="navmenu" class="nav-menu-op">
                        <div id="mclose" class="m-close">×</div>
                        <div class="m-al-wr">
                        <div class="m-l-wr">
                        <div class="m-le-hl"><span>Navigation</span></div>
                        <div class="m-le-hl-l"><span>Blog</span></div>
                        <div class="m-le-hl-l"><span>Shop</span></div>
                        <div class="m-le-hl-l"><span data-lang="m-ab">About</span></div>
                        <div class="m-le-hl-l"><span>FAQ</span></div>
                        <div class="m-le-hl-l"><span>Support</span></div>
                        <div class="m-le-wr">
                        <div class="m-le-hl"><span data-lang="m-le">Legals</span></div>
                        <div class="m-le-hl-l"><span data-lang="m-len">Legal notice</span></div>
                        <div class="m-le-hl-l"><span data-lang="m-pp">Privacy policy</span></div>
                        <div class="m-le-hl-l"><span>Cookies</span></div>
                        </div>
                        <div class="m-le-wr">
                        <div class="m-le-hl"><span data-lang="s-set">Settings</span></div>
                        <div class ="m-le-hl-tg">
                            <div class="m-le-hl-l-t"><span>Quby</span></div>
                            <div>
                            <label class="ml-tg">
                                <input id="quby-c" type="checkbox">
                                <span id="quby-s" class="ml-tg-s ml-r-t"></span>
                            </label>
                            </div>
                        </div>
                        <div class ="m-le-hl-tg">
                            <div class="m-le-hl-l-t"><span data-lang="th-dd">Darkmode</span></div>
                            <div>
                            <label class="ml-tg">
                                <input id="tg-i-c" type="checkbox">
                                <span id="t-tg" class="ml-tg-s ml-r-t"></span>
                            </label>
                            </div>
                        </div>
                        <div class ="m-le-hl-tg">
                            <div class="m-le-hl-l-t"><span data-lang="s-la">Language</span></div>
                            <div class="m-le-fl">
                                <div id="fl-de"><img class="m-f-fl-in" src="src/public/icon-fl-de.png"></div>
                                <div id="fl-gb"><img class="m-f-fl-in" src="src/public/icon-fl-gb.png"></div>
                                <div id="fl-fr"><img class="m-f-fl-in" src="src/public/icon-fl-fr.png"></div>
                            </div>
                        </div>
                        </div>
                        <div class="m-follow-wr">
                            <div><img class="m-f-i-in ft-i" src="src/public/icon-insta-bl.png"></div>
                            <div><img class="m-f-i-tk ft-tk" src="src/public/icon-tk-bl.png"></div>
                            <div><img class="m-f-i-yt ft-yt" src="src/public/icon-yt-bl.png"></div>
                            <div><img class="m-f-i-tw ft-tw" src="src/public/icon-twitter-bl.png"></div>
                        </div>
                        </div>
                        <div class="m-e"><span class="m-e-f-e">hi@qoolar.org</span></div>
                        </div>
                    </div>
            </div>
            </div>
        </div>
        <div class="nav-super">
            <div class="home"><a href="search.php"><button class="home-btn"><?php if($tC == 'dark'){echo ('<img class="icon-sl h-btn" src="src/public/icon-sea-w.png">');}else{echo ('<img class="icon-sl h-btn" src="src/public/icon-sea-bl.png">');};?><span>Web</span></button></a>
            </div>
            <div class="img"><a href="images.php"><button class="img-btn"><?php if($tC == 'dark'){echo ('<img class="icon-sl i-btn" src="src/public/icon-img-w.png">');}else{echo ('<img class="icon-sl i-btn" src="src/public/icon-img-bl.png">');};?><span data-lang="ma-i">Images</span></button></a>
            </div>
            <div class="vid"><a href="https://qoolar.org/videos"><button class="vid-btn"><?php if($tC == 'dark'){echo ('<img class="icon-sl v-btn" src="src/public/icon-play-w.png">');}else{echo ('<img class="icon-sl v-btn" src="src/public/icon-play-bl.png">');};?><span data-lang="ma-v">Videos</span></button></a>
            </div>
            <div class="news"><a href="https://qoolar.org/news"><button class="news-btn"><?php if($tC == 'dark'){echo ('<img class="icon-sl n-btn" src="src/public/icon-news-w.png">');}else{echo ('<img class="icon-sl n-btn" src="src/public/icon-news-bl.png">');};?><span data-lang="ma-n">News</span></button></a>
            </div>
            <div class="maps"><a href="https://qoolar.org/maps"><button class="maps-btn"><?php if($tC == 'dark'){echo ('<img class="icon-sl m-btn" src="src/public/icon-maps-w.png">');}else{echo ('<img class="icon-sl m-btn" src="src/public/icon-maps-bl.png">');};?><span>Maps</span></button></a>
            </div>
            <div class="more"><button id="morebtn" class="more-btn"><?php if($tC == 'dark'){echo ('<img class="more-img mo-btn" src="src/public/icon-men-w.png">');}else{echo ('<img class="more-img mo-btn" src="src/public/icon-men-bl.png">');};?><span data-lang="ma-mo">More</span></button>
            </div>
            <div class="settings"><button id="setbtn" class="settings-btn"><?php if($tC == 'dark'){echo ('<img class="icon-sl-set s-btn" src="src/public/icon-set-w.png">');}else{echo ('<img class="icon-sl-set s-btn" src="src/public/icon-set-bl.png">');};?><span data-lang="ma-s">Settings</span></button>
            </div>
        </div>
        <div id="moremenu" class="more-menu">
            <div class="m-menu-link">
                <ul class="m-menu-ul">
                    <li><img class="m-m-qs" src="src/public/icon-qs-bl.png">QStats</li>
                    <li><img class="m-m-wk" src="src/public/icon-wk-bl.png">Shopping</li>
                    <li><img class="m-m-bo" src="src/public/icon-bo-bl.png"><span data-lang="mm-b">Books</span></li>
                    <li><img class="m-m-fl" src="src/public/icon-fl-bl.png"><span data-lang="mm-f">Flights</span></li>
                    <li><img class="m-m-fi" src="src/public/icon-fi-bl.png"><span data-lang="mm-fi">Finance</span></li>
                </ul>
            </div>
        </div>
        <div id="setmenu" class="set-menu">
            <div id="setclose" class="set-close">×</div>
            <div class="menu-main-hr"><span data-lang="s-set">Settings</span></div>
            <div class="menu-set-btn-wr">
                <div class="menu-set-wr">
                    <div class="menu-lang">
                        <div><span data-lang="s-la">Language</span></div>
                    </div>
                    <div class="menu-seareg">
                        <div><span data-lang="s-sr">Search region</span></div>
                    </div>
                    <div class="menu-safesearch">
                        <div><span data-lang="s-sf">SafeSearch</span></div>
                    </div>
                    <div class="menu-theme">
                        <div><span data-lang="s-t">Theme</span></div>
                    </div>
                </div>
                <div class="menu-btn-wr">
                    <div class="menu-btn-lang-wr">
                        <div class="menu-btn-lang"><button id="langbtn"><span>Language</span></button><img class="down" src="src/public/icon-ar-down-bl.png"><img class="up" src="src/public/icon-ar-up-bl.png"></div>
                        <div class="sel-lang"><ul class="menu-ul lang-ul">
                            <li class="lang-li" data-val="de" data-lang="sel-g">German</li>
                            <li class="lang-li" data-val="en" data-lang="sel-e">English</li>
                            <li class="lang-li" data-val="fr" data-lang="sel-f">France</li>
                        </ul></div>
                    </div>
                    <div class="menu-btn-region-wr">
                    <div class="menu-btn-region"><button id="regbtn"><span>Search region</span></button><img class="down" src="src/public/icon-ar-down-bl.png"><img class="up" src="src/public/icon-ar-up-bl.png"></div>
                        <div class="sel-reg"><ul class="menu-ul-sr reg-ul">
                            <li class="reg-li" data-val="" data-lang="reg-all">All search regions</li>
                            <li class="reg-li" data-val="es-AR" data-lang="reg-ar">Argentina</li>
                            <li class="reg-li" data-val="en-AU" data-lang="reg-au">Australia</li>        
                            <li class="reg-li" data-val="de-AT" data-lang="reg-at">Austria</li>
                            <li class="reg-li" data-val="nl-BE" data-lang="reg-nl-be">Belgium(Dutch)</li>
                            <li class="reg-li" data-val="fr-BE" data-lang="reg-fr-be">Belgium(French)</li>
                            <li class="reg-li" data-val="pt-BR" data-lang="reg-br">Brazil</li>
                            <li class="reg-li" data-val="en-CA" data-lang="reg-ca-en">Canada(English)</li>
                            <li class="reg-li" data-val="fr-CA" data-lang="reg-ca-fr">Canada(French)</li>
                            <li class="reg-li" data-val="es-CL" data-lang="reg-cl">Chile</li>
                            <li class="reg-li" data-val="zh-CN" data-lang="reg-cn">China</li>
                            <li class="reg-li" data-val="da-DK" data-lang="reg-dk">Denmark</li>
                            <li class="reg-li" data-val="fi-FI" data-lang="reg-fi">Finland</li>
                            <li class="reg-li" data-val="fr-FR" data-lang="reg-fr">France</li>
                            <li class="reg-li" data-val="de-DE" data-lang="reg-de">Germany</li>
                            <li class="reg-li" data-val="zh-HK" data-lang="reg-hk">Hong Kong</li>
                            <li class="reg-li" data-val="en-IN" data-lang="reg-in">India</li>
                            <li class="reg-li" data-val="en-ID" data-lang="reg-id">Indonesia</li>
                            <li class="reg-li" data-val="it-IT" data-lang="reg-it">Italy</li>
                            <li class="reg-li" data-val="ja-JP" data-lang="reg-jp">Japan</li>
                            <li class="reg-li" data-val="ko-KR" data-lang="reg-kr">Korea</li>
                            <li class="reg-li" data-val="en-MY" data-lang="reg-mal">Malaysia</li>
                            <li class="reg-li" data-val="es-MX" data-lang="reg-mx">Mexico</li>
                            <li class="reg-li" data-val="nl-NL" data-lang="reg-nl">Netherlands</li>
                            <li class="reg-li" data-val="en-NZ" data-lang="reg-nz">New Zealand</li>
                            <li class="reg-li" data-val="no-NO" data-lang="reg-no">Norway</li>
                            <li class="reg-li" data-val="pl-PL" data-lang="reg-pl">Poland</li>
                            <li class="reg-li" data-val="en-PH" data-lang="reg-ph">Philippines</li>
                            <li class="reg-li" data-val="ru-RU" data-lang="reg-ru">Russia</li>
                            <li class="reg-li" data-val="en-ZA" data-lang="reg-za">South Africa</li>
                            <li class="reg-li" data-val="es-ES" data-lang="reg-es">Spain</li>
                            <li class="reg-li" data-val="sv-SE" data-lang="reg-se">Sweden</li>
                            <li class="reg-li" data-val="fr-CH" data-lang="reg-ch-fr">Switzerland(French)</li>
                            <li class="reg-li" data-val="de-CH" data-lang="reg-ch-de">Switzerland(German)</li>
                            <li class="reg-li" data-val="zh-TW" data-lang="reg-tw">Taiwan</li>
                            <li class="reg-li" data-val="tr-TR" data-lang="reg-tr">Turkey</li>
                            <li class="reg-li" data-val="en-GB" data-lang="reg-en-gb">English</li>
                            <li class="reg-li" data-val="en-US" data-lang="reg-en-us">United States(English)</li>
                            <li class="reg-li" data-val="es-US" data-lang="reg-es-us">United States(Spanish)</li>
                        </ul></div>
                    </div>
                    <div class="menu-btn-safe-wr">
                    <div class="menu-btn-safesearch"><button id="safesearchbtn"><span>SafeSearch</span></button><img class="down" src="src/public/icon-ar-down-bl.png"><img class="up" src="src/public/icon-ar-up-bl.png"></div>
                        <div class="sel-safesearch"><ul class="menu-ul safe-ul">
                            <li class="safe-li" data-val="Off" data-lang="safe-t-o">Off</li>
                            <li class="safe-li" data-val="Moderate" data-lang="safe-t-m">Moderate</li>
                            <li class="safe-li" data-val="Strict" data-lang="safe-t-s">Strict</li>
                        </ul></div>
                    </div>
                    <div class="menu-btn-theme-wr">
                    <div class="menu-btn-theme"><button id="themebtn"><span>Theme</span></button><img class="down" src="src/public/icon-ar-down-bl.png"><img class="up" src="src/public/icon-ar-up-bl.png"></div>
                        <div class="sel-theme"><ul class="menu-ul theme-ul">
                        <li class="theme-li" data-val="light">Light</li>
                        <li class="theme-li" data-val="dark">Dark</li>
                        </ul></div>
                    </div>
                </div>
                </div>
            <div class ="menu-btn-md">
                <div class="menu-save">
                    <button id="saveBtn" class="saveBtn"><span data-lang="btn-sa">Save</span></button>
                </div>
                <div class="menu-reset">
                    <button id="resetBtn" class="resetBtn"><span data-lang="btn-re">Reset</span></button>
                </div>
            </div>
        </div>
    </div>


