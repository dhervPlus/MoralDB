@if (Auth::check())
<a href='/logout' class="button-login">Logout</a> @elseif(!Auth::check() && Request::path() === 'login')
<a style='display: none'></a> @else
<a href='/login' class="button-login">Login</a> @endif
