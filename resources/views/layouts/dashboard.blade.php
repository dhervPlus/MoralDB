<article class="dashboard">
    <picture>
        <img class='dashboard-img' src={{ asset( "images/".Auth::user()->picture) }} alt="">
    </picture>
    <div class="dashboard-details">
        <h2>
            <span> name: </span>
            <span>
                {{ Auth::user()->name }}
            </span>
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
