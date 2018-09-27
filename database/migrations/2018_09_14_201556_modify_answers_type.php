<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ModifyAnswersType extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('answers', function ($table) {
            $table->dropColumn('yes');
            $table->dropColumn('no');
            $table->string('type');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::table('answers', function ($table) {
            $table->dropColumn('yes');
            $table->dropColumn('no');
            $table->string('type');
        });
    }
}
