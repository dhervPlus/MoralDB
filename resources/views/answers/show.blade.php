@if (boolval ($exist))
<div style='width: {{ $percent['yes'] }}%' data-percent={{ $percent[ 'yes'] }} data-name='yes' class="percent-bar percent-bar-positive answer" role="alert">
        <span class="answer-body"> Yes </span>
        <span class='percent on'>{{ floor((int)$percent['yes']) }}%</span> </div>
    <div style='width: {{ $percent['no'] }}%' data-percent={{ $percent[ 'no'] }} data-name='no' class="percent-bar percent-bar-negative answer" role="alert">
        <span class="answer-body"> No </span>
        <span class='percent on'>{{ floor((int)$percent['no']) }}%</span></div>

@else
<div data-percent={{ $percent[ 'yes'] }} data-name='yes' class="percent-bar percent-bar-positive answer" role="alert">
        <span class="answer-body"> Yes </span>
        <span class='percent off'>{{ floor((int)$percent['yes']) }}%</span> </div>
    <div data-percent={{ $percent[ 'no'] }} data-name='no' class="percent-bar percent-bar-negative answer" role="alert">
        <span class="answer-body"> No </span>
        <span class='percent off'>{{ floor((int)$percent['no']) }}%</span></div>

@endif