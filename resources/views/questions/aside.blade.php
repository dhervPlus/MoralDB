<aside class="container container-aside">
    <div class="container-title">
            <h4 >Popular</h4>
            <span>this week</span>
    </div>

    <ul class='popular-list'>
    @foreach($popular as $i=>$pop)
    <li class='popular-item'>
            <div class='popular-number'>0{{ $i + 1 }}</div>
            <div class='popular-body'>{{ $pop->description }}</div>
        </li>
    @endforeach



    </ul>
</aside>
