<h1> The Moral DB</h1>
@if (Auth::check()) Nice to see you again {{ ucfirst(Auth::user()->name) }}

<div class="card mt-3" style="width: 18rem;">
    <img class="card-img-top" src={{ asset("images/".Auth::user()->picture) }} alt="Card image cap">
    <div class="card-body">
        <h5 class="card-title">{{ ucfirst(Auth::user()->name) }}</h5>
        <!-- Search form -->
        <form class="form-inline md-form form-sm active-pink-2">
            <input class="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search" aria-label="Search">
            <i class="fa fa-search" aria-hidden="true"></i>
        </form>
        <a href="/questions/create" class="btn btn-primary mt-3" >Post a question</a>
    </div>
</div>
<div class="btn-group mt-3">
    <button type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Month
                </button>
    <div class="dropdown-menu">
        @foreach ($archives as $archive)
        <a class="dropdown-item" href="/?month={{ $archive['month'] }}">{{ $archive['month'] }}</a> @endforeach
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="/">All</a>
    </div>
</div>
<ul class="list-group mt-3">
    <li class="list-group-item d-flex justify-content-between align-items-center">
        Style:
        <span class="badge badge-secondary badge-pill">{{ Auth::user()->style }}</span>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center disabled">
        Created:
        <span class="badge badge-secondary badge-pill">{{ Auth::user()->created_at->diffForHumans() }}</span>
    </li>
</ul>
@endif
