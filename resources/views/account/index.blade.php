@extends('layouts.master')
@section('content')
<div class="page">
    <section class="container container-main">
        <div class="centered">
            <h2>Account page</h2>
            <div>
                <h3>Your pages</h3>
                <ul>
                    <li><a href="/answers">- My answers -</a></li>
                </ul>
            </div>
            <div>
                <h3>Your account</h3>
                <ul>
                    <li><a href="/answers">- Reset password -</a></li>
                </ul>
            </div>
            <div>
                <h3>Help</h3>
                <ul>
                    <li><a href="/answers">- FAQ -</a></li>
                </ul>
            </div>
        </div>
    </section>
</div>
@endsection
