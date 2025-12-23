<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GuruKelas extends Model
{
    protected $table = 'pivot_guru_kelas';
    protected $fillable = [
        'guru_id',
        'kelas_id',
    ];
}
