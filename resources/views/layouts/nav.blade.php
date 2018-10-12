<nav>
<div class='nav-header page-container'>
    <div class='nav-date'>Today, 25th September</div>
    <div class='nav-title'>
        <h1>The Moral DB</h1>
    </div>
    <div class='nav-icons'>

        <a href="/account"><i class="fa fa-user" aria-hidden="true"></i></a>
        {{-- <input class='nav-search' type="text" name='search' /> --}}
        <i class="fa fa-search" aria-hidden="true"></i>
        <form name='search' action="/questions/search" method="POST">
            {{ csrf_field() }}
            <input type="search" name="search"/>
        </form>
    @include('components.buttons.login')
    </div>
</div>
    @include ('layouts.navbar')
</nav>
