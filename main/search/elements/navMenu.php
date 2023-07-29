<div class="container row" style=" width: fit-content; ">
    <form class="col-sm" action="search">
        <button id="web-btn" type="submit" name="q" value="<?php if(isset($_GET['q'])){echo $_GET['q'];}; ?>">WEB</button>
    </form>
    <form class="col-sm" action="images">
        <button id="img-btn" type="submit" name="q" value="<?php if(isset($_GET['q'])){echo $_GET['q'];}; ?>">IMAGES</button>
    </form>
    <form class="col-sm" action="videos">
        <button id="vid-btn" type="submit" name="q" value="<?php if(isset($_GET['q'])){echo $_GET['q'];}; ?>">VIDEOS</button>
    </form>
    <div class="col-sm">
        <button id="maps-btn" class="search-button3 button" value="<?php if(isset($_GET['q'])){echo $_GET['q'];}; ?>">MAPS</button>
    </div>
    <form class="col-sm" action="news">
        <button id="news-btn" type="submit" name="q" value="<?php if(isset($_GET['q'])){echo $_GET['q'];}; ?>">NEWS</button>
    </form>
    <form class="col-sm">
        <button id="shop-btn" class="search-button5 button">SHOPPING</button>
    </form>
</div>