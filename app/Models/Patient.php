<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    use HasFactory;

    /**
     * The connection name for the model
     *
     * @var string
     */
    protected $connection = 'hospital';


    /**
     * The table associated with the model
     *
     * @var string
     */
    protected $table = 'hperson';

    /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'hpercode';

    /**
     * The attributes that are mass assignable.
     *
     *@var array<int, string>
     */
    protected $fillable= [];

    /**
     * The attributes that should be guarded against mass assigment.
     *
     * @var string[] (optional in this case)
     */
    protected $guarded = [];

    protected $casts = [
        'hpercode' => 'string',
        
    ];
}
