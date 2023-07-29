<div class="ft-s-sp"></div>
<div class="ft-main">
    <div class="ft-wr">
        <div class="ft-sm"><div><img class="m-f-i-in ft-i" src="src/public/icon-insta-bl.png"></div><div><img class="m-f-i-tk ft-tk" src="src/public/icon-tk-bl.png"></div><div><img class="m-f-i-yt ft-yt" src="src/public/icon-yt-bl.png"></div><div><img class="m-f-i-tw ft-tw" src="src/public/icon-twitter-bl.png"></div><div class="ft-cp"><span data-lang="mtw">Make the world</span><span> Qoolar!</span></div></div>
        <div class="ft-l"><span class="ft-l-br" data-lang="fo-he">Help</span><span id="bugre" class="ft-l-br">Bugreport</span><span id="feedb" class="ft-l-f">Feedback</span><span class="ft-l-l" data-lang="fo-ln">Legal notice</span><span class="ft-l-p" data-lang="fo-pp">Privacy policy</span><span class="ft-l-c">Cookies</span></div>
    </div>
    <div class="mo-ft-wr">
        <div class="ft-l"><span class="ft-l-br" data-lang="fo-he">Help</span><span id="mo-bugre" class="ft-l-br">Bugreport</span><span id="mo-feedb" class="ft-l-f">Feedback</span><span class="ft-l-l" data-lang="fo-ln">Legal notice</span><span class="ft-l-p" data-lang="fo-pp">Privacy policy</span><span class="ft-l-c">Cookies</span></div>
        <div class="ft-cp"><span data-lang="mtw">Make the world</span><span> Qoolar!</span></div>
        <div class="ft-sm"><div><img class="m-f-i-in ft-i" src="src/public/icon-insta-bl.png"></div><div><img class="m-f-i-tk ft-tk" src="src/public/icon-tk-bl.png"></div><div><img class="m-f-i-yt ft-yt" src="src/public/icon-yt-bl.png"></div><div><img class="m-f-i-tw ft-tw" src="src/public/icon-twitter-bl.png"></div></div>
    </div>
    <div class="bug-d-wr"><div class="bug-d">
        <div id="bugclose" class="bug-close">×</div>
        <div class="bug-c">
            <div class="bf-hl">
                <span>Bugreport 🐛</span>
            </div>
                    <ul class="bug-dc">
                    <li>
                        <label for="b-email">E-Mail</label>
                        <input type="email" name="b-email" id="b-email" placeholder="Enter your email here" spellcheck="false">
                    </li>
                    <li>
                        <label for="b-name" data-lang="febu-na">Name</label>
                        <input type="text" name="b-name" id="b-name" placeholder="Enter your name here" spellcheck="false">
                    </li>
                    <li>
                        <label for="b-url">URL<br><span class="b-u-t" data-lang="bu-if">(If the error is specific to a URL)</span></label>
                        <input type="text" name="b-url" id="b-url" placeholder="Enter the URL where the error is displayed" value="<?php echo (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]"; ?>" spellcheck="false">
                    </li>
                    <li>
                        <label for="b-error" data-lang="bu-em">Error message</label>
                        <input type="text" name="b-error" id="b-error" placeholder="Enter the error message (if displayed)" spellcheck="false">
                    </li>
                    <li>
                        <label for="b-mes" data-lang="bu-me">Report</label>
                        <textarea rows="6" name="b-mes" id="b-mes" placeholder="Enter your information about the bug you found here" required spellcheck="false"></textarea>
                    </li>
                    <li class="fb-t">
                        <label class="fb-t" for="b-fill">Do not fill</label>
                        <input class="fb-t" type="text" name="b-fill" id="b-fill" placeholder="Please do not enter this field">
                    </li>
                    <li>
                        <button id="b-sub" type="submit">Send</button>
                    </li>
                    </ul>
                </div>
        </div>
    </div>
    <div class="feed-d-wr"><div class="feed-d">
        <div id="feedclose" class="feed-close">×</div>
                <div class="feed-c">
                    <div class="bf-hl">
                    <span>Feedback</span>
                    </div>
                    <ul class="feed-dc">
                    <li>
                        <label for="f-email">E-Mail</label>
                        <input type="email" name="f-email" id="f-email" placeholder="Enter your email here" spellcheck="false">
                    </li>
                    <li>
                        <label for="f-name" data-lang="febu-na">Name</label>
                        <input type="text" name="f-name" id="f-name" placeholder="Enter your name here" spellcheck="false">
                    </li>
                    <li>
                        <label for="f-mes">Feedback</label>
                        <textarea rows="11" name="f-mes" id="f-mes" placeholder="Enter your feedback here" required spellcheck="false"></textarea>
                    </li>
                    <li class="fb-t">
                            <label class="fb-t" for="f-fill">Do not fill</label>
                            <input class="fb-t" type="text" name="f-fill" id="f-fill" placeholder="Please do not enter this field">
                        </li>
                    <li>
                        <button id="f-sub" type="submit">Send</button>
                    </li>
                    </ul>
            </div>
        </div>
    </div>
    <div class="fe-la"></div>
    <div class="bu-la"></div>
</div>
