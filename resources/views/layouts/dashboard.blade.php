<article class="dashboard">
    <picture>
        @if (Auth::check())
        <img class='dashboard-img' src={{ asset( "images/".Auth::user()->picture) }} alt="">
        @endif

    </picture>
    <div class="dashboard-details">
        <h2>
            <span> name: </span>
            @if (Auth::check())
            <span>
                    {{ Auth::user()->name }}
                </span>
            @endif

        </h2>
        <p>
            <span>personality: </span>
            <span> antisocial</span>
        </p>
        <p>
            <span>country: </span>
            <span>USA</span>
        </p>
    </div>
</article>
